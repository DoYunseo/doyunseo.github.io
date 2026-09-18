const banner = document.querySelector("[data-analytics-banner]");
const settingsButton = document.querySelector("[data-analytics-settings]");
const measurementId = banner?.dataset.measurementId;
const storageKey = "yunseo-analytics-consent";

if (banner && measurementId) {
  let tagLoaded = false;
  let choice;

  try {
    choice = localStorage.getItem(storageKey);
  } catch {
    // Browsers may block local storage. Keep the choice available for this visit.
  }

  const loadAnalytics = () => {
    if (tagLoaded) return;
    tagLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(script);
  };

  const showBanner = () => {
    banner.hidden = false;
    settingsButton.hidden = true;
  };

  const hideBanner = () => {
    banner.hidden = true;
    settingsButton.hidden = false;
  };

  if (choice === "allow") {
    loadAnalytics();
    hideBanner();
  } else if (choice === "deny") {
    hideBanner();
  } else {
    showBanner();
  }

  banner.addEventListener("click", (event) => {
    const button = event.target.closest("[data-analytics-choice]");
    if (!button) return;

    const nextChoice = button.dataset.analyticsChoice;
    try {
      localStorage.setItem(storageKey, nextChoice);
    } catch {
      // The choice still applies to the current page.
    }

    if (nextChoice === "allow") loadAnalytics();
    hideBanner();
    if (nextChoice === "deny" && tagLoaded) location.reload();
  });

  settingsButton.addEventListener("click", showBanner);
}
