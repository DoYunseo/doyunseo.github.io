const escape = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
})[character]);

const externalLink = (url, label, className = "", ariaLabel = "") =>
  `<a href="${escape(url)}"${className ? ` class="${className}"` : ""}${ariaLabel ? ` aria-label="${escape(ariaLabel)}"` : ""} target="_blank" rel="noopener noreferrer">${escape(label)}</a>`;

const richText = (segments) => segments.map((segment) =>
  typeof segment === "string" ? escape(segment) :
  segment.url.startsWith("mailto:")
    ? `<a href="${escape(segment.url)}">${escape(segment.label)}</a>`
    : externalLink(segment.url, segment.label)
).join("");

const renderNews = (items) => items.map((item) => `
  <li class="news-item">
    <time>${escape(item.date)}</time>
    <span>${escape(item.text)}${item.flag ? ` <span class="flag-de" role="img" aria-label="${escape(item.flag)}"></span>` : ""}</span>
  </li>`).join("");

const renderAuthors = (authors, profileName) => authors?.length ? `
      <p class="publication-authors">${authors.map((author) => author === profileName
        ? `<strong class="publication-author-self">${escape(author)}</strong>`
        : escape(author)).join(", ")}</p>` : "";

const renderResearchLinks = (item) => {
  const links = [
    item.doiUrl && externalLink(item.doiUrl, "DOI", "small-button", `${item.title} DOI`),
    item.recordLink && externalLink(item.recordLink.url, item.recordLink.label, "small-button", `${item.title} on ${item.recordLink.label}`),
    item.pdfUrl && externalLink(item.pdfUrl, "PDF", "small-button", `${item.title} PDF`),
  ].filter(Boolean);
  return links.length ? `
      <div class="publication-links">${links.join("")}</div>` : "";
};

const renderResearch = (items, profileName) => items.map((item) => `
  <article class="publication">
    <div class="publication-type">${escape(item.type)}</div>
    <div class="publication-body">
      <h3>${escape(item.title)}</h3>${renderAuthors(item.authors, profileName)}
      <p class="publication-venue">${escape(item.venue)}</p>
      <p class="publication-contribution"><span>Contribution:</span> ${escape(item.contribution)}</p>${renderResearchLinks(item)}
    </div>
  </article>`).join("");

const renderProjects = (items) => items.map((item) => `
  <article class="project">
    <h3>${escape(item.title)}</h3>
    <p>${escape(item.description)}</p>
    <div class="project-links">${item.links.map((link) => externalLink(link.url, link.label, "small-button")).join("")}</div>
  </article>`).join("");

const renderExperience = (items) => items.map((item) => `
  <li class="simple-row">
    <span class="row-date">${escape(item.period)}</span>
    <div><strong>${escape(item.role)}</strong><span>${item.organizationUrl ? externalLink(item.organizationUrl, item.organization) : escape(item.organization)}</span></div>
  </li>`).join("");

const renderAwards = (items) => items.map((item) => `
  <li class="simple-row">
    <span class="row-date">${escape(item.year)}</span>
    <div><strong>${escape(item.award)}</strong><span>${escape(item.event)}</span></div>
  </li>`).join("");

export function renderPage(data, { analyticsId = "" } = {}) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="Yunseo Do is an undergraduate HCI researcher at Kyung Hee University's ITEM Lab, working on human–AI interaction and physical AI.">
    <title>${escape(data.name)} — HCI Researcher</title>
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23764a30'/%3E%3Cellipse cx='32' cy='36' rx='16' ry='18' fill='%23f7e7cd'/%3E%3Cpath d='M15 27q17-18 34 0v7H15z' fill='%23c58d5d'/%3E%3Cpath d='M31 13q2-6 7-7' stroke='%23f7e7cd' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E">
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="header-inner page-width">
        <a class="brand" href="#top"><span class="brand-icon" aria-hidden="true">🐿️</span>${escape(data.name)}</a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          ${externalLink(data.cvUrl, "CV")}
        </nav>
      </div>
    </header>

    <div class="page-width page-layout" id="top">
      <aside class="sidebar" aria-label="Profile">
        <div class="profile-card">
          <img class="profile-photo" src="./assets/yunseo-portrait.webp" alt="Portrait of Yunseo Do" width="600" height="600" fetchpriority="high">
          <div class="profile-links" aria-label="Social profiles">
            ${data.profileLinks.map((link) => externalLink(link.url, link.label, "social-link")).join("")}
          </div>
          <a class="profile-email" href="mailto:${escape(data.email)}">${escape(data.email)}</a>
          <p class="profile-location">${escape(data.location)}</p>
        </div>
      </aside>

      <section class="news" aria-labelledby="news-title">
        <h2 id="news-title">News</h2>
        <ol>${renderNews(data.news)}</ol>
      </section>

      <main id="main" class="main-content">
        <section class="introduction" aria-label="About Yunseo Do">
          ${data.introduction.map((paragraph) => `<p>${richText(paragraph)}</p>`).join("\n          ")}
        </section>

        <section class="main-section" id="research" aria-labelledby="research-title">
          <h2 id="research-title">Research</h2>
          <div class="publication-list">${renderResearch(data.research, data.name)}</div>
        </section>

        <section class="main-section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <div class="project-list">${renderProjects(data.projects)}</div>
        </section>

        <section class="main-section" id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience &amp; Education</h2>
          <ol class="simple-list">${renderExperience(data.experience)}</ol>
          <div class="education"><span class="row-date">Education</span><div><strong>${escape(data.education.degree)}</strong><span>${escape(data.education.university)} · Expected Graduation: ${escape(data.education.expectedGraduation)}</span></div></div>
        </section>

        <section class="main-section" id="recognition" aria-labelledby="recognition-title">
          <h2 id="recognition-title">Selected Honors</h2>
          <ol class="simple-list">${renderAwards(data.awards)}</ol>
        </section>
      </main>
    </div>

    <footer class="site-footer page-width">
      <div class="footer-meta">
        <p>© 2026 ${escape(data.name)}.</p>
        <p class="site-credit">Inspired by ${externalLink("https://inhwasong.com/", "Inhwa Song")} and ${externalLink("https://github.com/Hyunseung-Lim/webpagetemplate", "Hyunseung Lim's webpagetemplate")}; modified for this site.</p>
      </div>
      <div class="footer-actions">
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>${analyticsId ? `
    <div class="analytics-banner" data-analytics-banner data-measurement-id="${escape(analyticsId)}" hidden>
      <p>May I use Google Analytics to see visits by country and region? It loads only if you allow it.</p>
      <div class="analytics-choices">
        <button type="button" data-analytics-choice="allow">Allow analytics</button>
        <button type="button" data-analytics-choice="deny">No thanks</button>
      </div>
    </div>
    <script src="./analytics.js" defer></script>` : ""}
  </body>
</html>`;
}
