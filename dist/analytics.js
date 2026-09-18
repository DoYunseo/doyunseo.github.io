const measurementId = document.currentScript?.dataset.measurementId;
let previousChoice;

try {
  previousChoice = localStorage.getItem("yunseo-analytics-consent");
} catch {
  // Analytics can still run when local storage is unavailable.
}

// Keep the choice of visitors who declined the old consent prompt.
if (measurementId && previousChoice !== "deny") {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };

  // Analytics cookies remain off by default in the EEA, UK, and Switzerland.
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    region: [
      "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE",
      "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "LU", "MT", "NL",
      "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "CH",
    ],
  });
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  if (previousChoice === "allow") {
    window.gtag("consent", "update", { analytics_storage: "granted" });
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(script);
}
