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

const renderFooterScene = () => `<div class="woodland-scene" data-woodland-scene>
      <svg class="woodland-ground" viewBox="0 0 1200 180" preserveAspectRatio="none" aria-hidden="true">
        <path class="grass-hill grass-hill-back" d="M0 128 C130 111 230 126 350 117 C500 106 612 132 744 119 C892 104 1018 120 1200 108 V180 H0 Z"/>
        <path class="grass-hill grass-hill-front" d="M0 145 C122 132 242 148 370 137 C510 125 645 151 790 137 C936 123 1064 143 1200 130 V180 H0 Z"/>
      </svg>

      <svg class="woodland-tree woodland-tree-left" viewBox="-14 -10 124 152" aria-hidden="true">
        <g>
          <path class="tree-trunk" d="M39 52 C35 83 36 111 30 140 H58 C52 108 54 82 50 52 Z"/>
          <path class="tree-branch" d="M43 79 C26 66 20 57 12 46 M47 87 C66 72 70 61 78 48"/>
          <circle class="tree-leaf tree-leaf-deep" cx="17" cy="47" r="28"/>
          <circle class="tree-leaf" cx="48" cy="31" r="36"/>
          <circle class="tree-leaf tree-leaf-light" cx="78" cy="52" r="29"/>
          <circle class="tree-leaf" cx="48" cy="68" r="33"/>
        </g>
      </svg>

      <svg class="woodland-tree woodland-tree-right" viewBox="-14 -10 124 152" aria-hidden="true">
        <g>
          <path class="tree-trunk" d="M39 52 C35 83 36 111 30 140 H58 C52 108 54 82 50 52 Z"/>
          <path class="tree-branch" d="M43 79 C26 66 20 57 12 46 M47 87 C66 72 70 61 78 48"/>
          <circle class="tree-leaf tree-leaf-deep" cx="17" cy="47" r="28"/>
          <circle class="tree-leaf" cx="48" cy="31" r="36"/>
          <circle class="tree-leaf tree-leaf-light" cx="78" cy="52" r="29"/>
          <circle class="tree-leaf" cx="48" cy="68" r="33"/>
        </g>
      </svg>

      <svg class="woodland-squirrel" viewBox="-28 -2 133 122" aria-hidden="true">
        <g>
          <path class="squirrel-tail" d="M34 69 C-7 76 -25 50 -13 24 C-2 0 36 1 48 20 C59 38 42 50 29 42 C43 43 47 27 37 20 C22 10 3 22 5 40 C7 57 25 58 39 54 Z"/>
          <ellipse class="squirrel-body" cx="69" cy="76" rx="29" ry="40"/>
          <circle class="squirrel-head" cx="73" cy="38" r="27"/>
          <path class="squirrel-ear" d="M52 20 C47 4 61 3 66 17 M80 15 C88 1 99 9 94 23"/>
          <ellipse class="squirrel-belly" cx="72" cy="82" rx="15" ry="23"/>
          <circle class="squirrel-eye" cx="64" cy="34" r="2.8"/>
          <circle class="squirrel-eye" cx="84" cy="34" r="2.8"/>
          <path class="squirrel-face" d="M72 40 Q75 44 78 40 M75 44 Q75 49 69 50 M75 44 Q76 49 82 49"/>
          <path class="squirrel-arm" d="M54 69 Q66 60 73 73 M91 67 Q81 60 75 73"/>
          <g class="squirrel-acorn" transform="translate(65 64) scale(.48)">
            <path d="M4 19 C4 8 12 2 24 2 C36 2 44 8 44 19 Z"/>
            <path d="M7 18 H41 C41 34 35 45 24 49 C13 45 7 34 7 18 Z"/>
            <path d="M24 3 Q24 -4 30 -7"/>
          </g>
          <path class="squirrel-foot" d="M50 112 Q58 119 68 114 M78 114 Q91 120 100 112"/>
        </g>
      </svg>

      <span class="grass-tuft grass-tuft-left" aria-hidden="true"></span>
      <span class="grass-tuft grass-tuft-right" aria-hidden="true"></span>

      <span class="drifting-leaf leaf-one" aria-hidden="true"></span>
      <span class="drifting-leaf leaf-two" aria-hidden="true"></span>
      <span class="drifting-leaf leaf-three" aria-hidden="true"></span>
      <span class="drifting-leaf leaf-four" aria-hidden="true"></span>

      <button class="playful-acorn" type="button" data-playful-acorn aria-label="Playful acorn. Move your pointer near it to make it roll.">
        <svg viewBox="0 0 52 64" aria-hidden="true">
          <path class="acorn-stem" d="M27 10 C27 4 31 2 36 3"/>
          <path class="acorn-cap" d="M5 25 C5 13 14 8 26 8 C38 8 47 14 47 25 C37 29 15 29 5 25 Z"/>
          <path class="acorn-body" d="M7 24 H45 C45 41 38 53 26 57 C14 53 7 41 7 24 Z"/>
          <path class="acorn-shine" d="M18 32 C17 39 20 46 24 50"/>
        </svg>
      </button>
    </div>`;

export function renderPage(data, { analyticsId = "", assetVersion = "" } = {}) {
  const assetSuffix = assetVersion ? `?v=${escape(assetVersion)}` : "";
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="Yunseo Do is an undergraduate HCI researcher at Kyung Hee University's ITEM Lab, working on human–AI interaction and physical AI.">
    <title>${escape(data.name)} — HCI Researcher</title>
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23764a30'/%3E%3Cellipse cx='32' cy='36' rx='16' ry='18' fill='%23f7e7cd'/%3E%3Cpath d='M15 27q17-18 34 0v7H15z' fill='%23c58d5d'/%3E%3Cpath d='M31 13q2-6 7-7' stroke='%23f7e7cd' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E">
    <link rel="stylesheet" href="./styles.css${assetSuffix}">
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

    <footer class="site-footer">
      <div class="footer-inner page-width">
        <div class="footer-meta">
          <p>© 2026 ${escape(data.name)}.</p>
          <p class="site-credit">Inspired by ${externalLink("https://inhwasong.com/", "Inhwa Song")} and ${externalLink("https://github.com/Hyunseung-Lim/webpagetemplate", "Hyunseung Lim's webpagetemplate")}; modified for this site.</p>
        </div>
        <div class="footer-actions">
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
      ${renderFooterScene()}
    </footer>
    <script src="./footer-scene.js${assetSuffix}" defer></script>${analyticsId ? `
    <script src="./analytics.js${assetSuffix}" data-measurement-id="${escape(analyticsId)}" defer></script>` : ""}
  </body>
</html>`;
}
