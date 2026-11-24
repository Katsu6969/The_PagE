/**
 * Portfolio Application Script — Madhur Shukla
 * Vanilla JS: Theme Switcher, Scroll Spy, Hero Data Canvas,
 * Filterable Projects, Full Case Study Modal, Working Contact Flow.
 */

(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let toastTimer = null;
    let activeProjectFilter = 'All';

    /* ======================================================================
       Utilities
       ====================================================================== */
    function escapeHtml(str) {
        return String(str ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function showToast(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 3800);
    }

    function getThemeColors() {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        return {
            teal: isLight ? '#0d9488' : '#2dd4bf',
            blue: isLight ? '#0284c7' : '#38bdf8',
            muted: isLight ? '#64748b' : '#94a3b8',
            grid: isLight ? 'rgba(15, 23, 42, 0.12)' : 'rgba(148, 163, 184, 0.16)',
            nodeLine: isLight ? 'rgba(13, 148, 136, 0.22)' : 'rgba(45, 212, 191, 0.22)',
            surfaceText: isLight ? '#334155' : '#cbd5e1'
        };
    }

    /* ======================================================================
       Custom Analytical SVG Thumbnails for Projects
       ====================================================================== */
    function renderProjectSvg(type) {
        if (type === 'bmw-sales') {
            return `
                <svg viewBox="0 0 420 190" role="img" aria-label="BMW Sales 2014 to 2020 analytical trend chart">
                    <defs>
                        <linearGradient id="bmwArea" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#14b8a6" stop-opacity="0.34"/>
                            <stop offset="100%" stop-color="#14b8a6" stop-opacity="0.02"/>
                        </linearGradient>
                    </defs>
                    <g stroke="currentColor" stroke-opacity="0.12" stroke-width="1">
                        <line x1="36" y1="30" x2="395" y2="30"/>
                        <line x1="36" y1="70" x2="395" y2="70"/>
                        <line x1="36" y1="110" x2="395" y2="110"/>
                        <line x1="36" y1="150" x2="395" y2="150"/>
                    </g>
                    <!-- Volume Bars -->
                    <g fill="#38bdf8" fill-opacity="0.28">
                        <rect x="52" y="106" width="24" height="44" rx="4"/>
                        <rect x="104" y="94" width="24" height="56" rx="4"/>
                        <rect x="156" y="78" width="24" height="72" rx="4"/>
                        <rect x="208" y="66" width="24" height="84" rx="4"/>
                        <rect x="260" y="54" width="24" height="96" rx="4"/>
                        <rect x="312" y="42" width="24" height="108" rx="4"/>
                        <rect x="364" y="58" width="24" height="92" rx="4"/>
                    </g>
                    <!-- Avg Price Trend Area & Line -->
                    <path d="M64 114 L116 102 L168 88 L220 76 L272 62 L324 46 L376 54 L376 150 L64 150 Z" fill="url(#bmwArea)"/>
                    <polyline points="64,114 116,102 168,88 220,76 272,62 324,46 376,54" fill="none" stroke="#2dd4bf" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <g fill="#2dd4bf">
                        <circle cx="64" cy="114" r="3.5"/>
                        <circle cx="116" cy="102" r="3.5"/>
                        <circle cx="168" cy="88" r="3.5"/>
                        <circle cx="220" cy="76" r="3.5"/>
                        <circle cx="272" cy="62" r="3.5"/>
                        <circle cx="324" cy="46" r="4.2"/>
                        <circle cx="376" cy="54" r="3.5"/>
                    </g>
                    <g fill="currentColor" fill-opacity="0.58" font-family="JetBrains Mono, monospace" font-size="9.5" text-anchor="middle">
                        <text x="64" y="170">2014</text>
                        <text x="116" y="170">2015</text>
                        <text x="168" y="170">2016</text>
                        <text x="220" y="170">2017</text>
                        <text x="272" y="170">2018</text>
                        <text x="324" y="170">2019</text>
                        <text x="376" y="170">2020</text>
                    </g>
                    <text x="38" y="19" fill="currentColor" fill-opacity="0.65" font-family="JetBrains Mono, monospace" font-size="9.5">BMW VOLUME &amp; PRICE INDEX (2014–2020)</text>
                </svg>
            `;
        }

        if (type === 'churn-ml') {
            return `
                <svg viewBox="0 0 420 190" role="img" aria-label="Customer churn ROC curve and feature importance chart">
                    <!-- Left: ROC Curve -->
                    <rect x="18" y="24" width="180" height="148" rx="8" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.1"/>
                    <text x="30" y="42" fill="currentColor" fill-opacity="0.65" font-family="JetBrains Mono, monospace" font-size="9">ROC CURVE (AUC 0.85)</text>
                    <line x1="36" y1="152" x2="180" y2="56" stroke="currentColor" stroke-opacity="0.22" stroke-dasharray="4 4" stroke-width="1.2"/>
                    <path d="M36 152 Q52 72, 108 62 T180 56" fill="none" stroke="#2dd4bf" stroke-width="2.6" stroke-linecap="round"/>
                    <path d="M36 152 Q66 94, 122 76 T180 56" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-opacity="0.7"/>
                    <circle cx="90" cy="68" r="4" fill="#2dd4bf"/>

                    <!-- Right: Feature Importance -->
                    <rect x="212" y="24" width="190" height="148" rx="8" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.1"/>
                    <text x="224" y="42" fill="currentColor" fill-opacity="0.65" font-family="JetBrains Mono, monospace" font-size="9">TOP CHURN DRIVERS</text>
                    <g font-family="JetBrains Mono, monospace" font-size="8.5" fill="currentColor" fill-opacity="0.68">
                        <text x="224" y="64">Contract: Monthly</text>
                        <rect x="224" y="69" width="154" height="9" rx="4.5" fill="#2dd4bf" fill-opacity="0.85"/>

                        <text x="224" y="95">Tenure (&lt;12 mo)</text>
                        <rect x="224" y="100" width="126" height="9" rx="4.5" fill="#38bdf8" fill-opacity="0.82"/>

                        <text x="224" y="126">Monthly Charges</text>
                        <rect x="224" y="131" width="98" height="9" rx="4.5" fill="#14b8a6" fill-opacity="0.65"/>

                        <text x="224" y="157">No Tech Support</text>
                        <rect x="224" y="161" width="72" height="7" rx="3.5" fill="#38bdf8" fill-opacity="0.5"/>
                    </g>
                </svg>
            `;
        }

        // Default: ecommerce-bi
        return `
            <svg viewBox="0 0 420 190" role="img" aria-label="E-Commerce SQL KPI and cohort retention matrix">
                <!-- KPI Strip -->
                <g>
                    <rect x="18" y="18" width="120" height="44" rx="7" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.1"/>
                    <text x="28" y="34" fill="currentColor" fill-opacity="0.55" font-family="JetBrains Mono, monospace" font-size="8">NET REVENUE</text>
                    <text x="28" y="52" fill="#2dd4bf" font-family="Manrope, sans-serif" font-weight="700" font-size="14">+24.8% YoY</text>

                    <rect x="150" y="18" width="120" height="44" rx="7" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.1"/>
                    <text x="160" y="34" fill="currentColor" fill-opacity="0.55" font-family="JetBrains Mono, monospace" font-size="8">RFM CHAMPIONS</text>
                    <text x="160" y="52" fill="#38bdf8" font-family="Manrope, sans-serif" font-weight="700" font-size="14">Top 20% = 52%</text>

                    <rect x="282" y="18" width="120" height="44" rx="7" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.1"/>
                    <text x="292" y="34" fill="currentColor" fill-opacity="0.55" font-family="JetBrains Mono, monospace" font-size="8">SQL VIEWS</text>
                    <text x="292" y="52" fill="currentColor" fill-opacity="0.88" font-family="Manrope, sans-serif" font-weight="700" font-size="14">CTEs + DAX</text>
                </g>

                <!-- Cohort Retention Heatmap -->
                <text x="20" y="82" fill="currentColor" fill-opacity="0.62" font-family="JetBrains Mono, monospace" font-size="8.5">MONTHLY COHORT RETENTION HEATMAP</text>
                <g transform="translate(20, 90)">
                    <!-- Row 1 -->
                    <rect x="0" y="0" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.9"/>
                    <rect x="64" y="0" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.68"/>
                    <rect x="128" y="0" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.5"/>
                    <rect x="192" y="0" width="60" height="17" rx="3" fill="#38bdf8" fill-opacity="0.38"/>
                    <rect x="256" y="0" width="60" height="17" rx="3" fill="#38bdf8" fill-opacity="0.26"/>
                    <rect x="320" y="0" width="60" height="17" rx="3" fill="#38bdf8" fill-opacity="0.18"/>
                    <!-- Row 2 -->
                    <rect x="0" y="21" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.88"/>
                    <rect x="64" y="21" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.64"/>
                    <rect x="128" y="21" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.46"/>
                    <rect x="192" y="21" width="60" height="17" rx="3" fill="#38bdf8" fill-opacity="0.34"/>
                    <rect x="256" y="21" width="60" height="17" rx="3" fill="#38bdf8" fill-opacity="0.22"/>
                    <!-- Row 3 -->
                    <rect x="0" y="42" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.9"/>
                    <rect x="64" y="42" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.72"/>
                    <rect x="128" y="42" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.52"/>
                    <rect x="192" y="42" width="60" height="17" rx="3" fill="#38bdf8" fill-opacity="0.36"/>
                    <!-- Row 4 -->
                    <rect x="0" y="63" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.92"/>
                    <rect x="64" y="63" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.74"/>
                    <rect x="128" y="63" width="60" height="17" rx="3" fill="#14b8a6" fill-opacity="0.56"/>
                </g>
            </svg>
        `;
    }

    /* ======================================================================
       Content Rendering Functions
       ====================================================================== */
    function renderHero() {
        const { meta } = PORTFOLIO_DATA;
        document.getElementById('hero-availability').textContent = meta.availability;
        document.getElementById('hero-name').textContent = meta.name;
        document.getElementById('hero-headline').textContent = meta.headline;
        document.getElementById('hero-description').textContent = meta.description;

        const chipsEl = document.getElementById('hero-focus-chips');
        chipsEl.innerHTML = meta.focusAreas
            .map((area) => `<span class="focus-chip">${escapeHtml(area)}</span>`)
            .join('');

        const socialsEl = document.getElementById('hero-socials');
        socialsEl.innerHTML = `
            <a class="hero-social-link" href="${escapeHtml(meta.github)}" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github" aria-hidden="true"></i>
                <span>GitHub</span>
            </a>
            <a class="hero-social-link" href="${escapeHtml(meta.linkedin)}" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                <span>LinkedIn</span>
            </a>
            <a class="hero-social-link" href="mailto:${escapeHtml(meta.email)}">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                <span>${escapeHtml(meta.email)}</span>
            </a>
        `;
    }

    function renderAbout() {
        const { about } = PORTFOLIO_DATA;
        document.getElementById('about-narrative').innerHTML = about.paragraphs
            .map((p) => `<p>${escapeHtml(p)}</p>`)
            .join('');

        document.getElementById('about-highlights').innerHTML = about.highlights
            .map(
                (item) => `
                <div class="highlight-card">
                    <span class="highlight-label">${escapeHtml(item.label)}</span>
                    <span class="highlight-value">${escapeHtml(item.value)}</span>
                </div>
            `
            )
            .join('');
    }

    function renderSkills() {
        const { skills } = PORTFOLIO_DATA;
        const grid = document.getElementById('skills-grid');

        grid.innerHTML = skills.categories
            .map(
                (cat) => `
                <article class="skill-card reveal">
                    <div class="skill-card-head">
                        <span class="skill-cat-icon" aria-hidden="true">
                            <i class="${escapeHtml(cat.icon)}"></i>
                        </span>
                        <h3 class="skill-card-title">${escapeHtml(cat.name)}</h3>
                    </div>
                    <div class="skill-pills">
                        ${cat.items
                            .map(
                                (item) => `
                                <span class="skill-pill">
                                    <i class="${escapeHtml(item.icon)}" aria-hidden="true"></i>
                                    <span>${escapeHtml(item.name)}</span>
                                </span>
                            `
                            )
                            .join('')}
                    </div>
                </article>
            `
            )
            .join('');

        const learningEl = document.getElementById('currently-learning');
        learningEl.innerHTML = `
            <div class="learning-title">
                <i class="fa-solid fa-compass" aria-hidden="true"></i>
                <span>CURRENTLY LEARNING &amp; EXPLORING</span>
            </div>
            <div class="learning-tags">
                ${skills.currentlyLearning
                    .map((topic) => `<span class="learning-tag">${escapeHtml(topic)}</span>`)
                    .join('')}
            </div>
        `;
    }

    function renderProjectFilters() {
        const categories = [
            'All',
            'Data Analytics',
            'Data Visualization',
            'Machine Learning',
            'SQL / Database',
            'Python'
        ];

        const container = document.getElementById('project-filters');
        container.innerHTML = categories
            .map(
                (cat) => `
                <button
                    type="button"
                    class="filter-btn ${cat === activeProjectFilter ? 'active' : ''}"
                    role="tab"
                    aria-selected="${cat === activeProjectFilter ? 'true' : 'false'}"
                    data-filter="${escapeHtml(cat)}"
                >${escapeHtml(cat)}</button>
            `
            )
            .join('');

        container.querySelectorAll('.filter-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                activeProjectFilter = btn.dataset.filter;
                container.querySelectorAll('.filter-btn').forEach((b) => {
                    const isActive = b.dataset.filter === activeProjectFilter;
                    b.classList.toggle('active', isActive);
                    b.setAttribute('aria-selected', String(isActive));
                });
                renderProjects(false);
            });
        });
    }

    function renderProjects(withReveal = true) {
        const grid = document.getElementById('projects-grid');
        const filtered =
            activeProjectFilter === 'All'
                ? PORTFOLIO_DATA.projects
                : PORTFOLIO_DATA.projects.filter((p) => p.categories.includes(activeProjectFilter));

        if (!filtered.length) {
            grid.innerHTML = `<p class="section-subtitle">No projects in this category yet.</p>`;
            return;
        }

        grid.innerHTML = filtered
            .map(
                (project) => `
                <article class="project-card ${withReveal ? 'reveal' : ''}">
                    <div class="project-thumb">
                        ${renderProjectSvg(project.visualType)}
                        <span class="project-metric-pill">${escapeHtml(project.metricBadge)}</span>
                    </div>
                    <div class="project-body">
                        <div class="project-cat-row">
                            <span class="project-category-badge">${escapeHtml(project.primaryCategory)}</span>
                        </div>
                        <h3 class="project-title">${escapeHtml(project.title)}</h3>
                        <p class="project-desc">${escapeHtml(project.shortDescription)}</p>
                        <div class="project-tools">
                            ${project.tools
                                .map((tool) => `<span class="tool-tag">${escapeHtml(tool)}</span>`)
                                .join('')}
                        </div>
                        <div class="project-actions">
                            <button type="button" class="btn btn-primary btn-sm open-case-study" data-project-id="${escapeHtml(project.id)}">
                                <span>Case Study</span>
                                <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                            </button>
                            <a href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                                <i class="fa-brands fa-github" aria-hidden="true"></i>
                                <span>GitHub</span>
                            </a>
                            ${
                                project.demo
                                    ? `<a href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                                           <i class="fa-solid fa-globe" aria-hidden="true"></i>
                                           <span>Live</span>
                                       </a>`
                                    : ''
                            }
                        </div>
                    </div>
                </article>
            `
            )
            .join('');

        grid.querySelectorAll('.open-case-study').forEach((btn) => {
            btn.addEventListener('click', () => openProjectModal(btn.dataset.projectId));
        });
    }

    function renderExperience() {
        const list = document.getElementById('experience-list');
        list.innerHTML = PORTFOLIO_DATA.experience
            .map(
                (exp) => `
                <article class="experience-card reveal">
                    <div class="exp-header">
                        <div>
                            <h3 class="exp-role">${escapeHtml(exp.role)}</h3>
                            <p class="exp-org">${escapeHtml(exp.organization)}</p>
                        </div>
                        <span class="exp-type">${escapeHtml(exp.type)}</span>
                    </div>
                    <ul class="exp-bullets">
                        ${exp.responsibilities.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}
                    </ul>
                    <div class="exp-result">
                        <strong>Outcome:</strong> ${escapeHtml(exp.result)}
                    </div>
                    <div class="exp-tech">
                        ${exp.technologies.map((t) => `<span class="tool-tag">${escapeHtml(t)}</span>`).join('')}
                    </div>
                </article>
            `
            )
            .join('');
    }

    function renderEducation() {
        const { education } = PORTFOLIO_DATA;
        const grid = document.getElementById('education-grid');

        grid.innerHTML = education.institutions
            .map(
                (edu) => `
                <article class="edu-card reveal">
                    <div class="edu-top">
                        <span class="edu-icon" aria-hidden="true">
                            <i class="fa-solid fa-graduation-cap"></i>
                        </span>
                        <span class="edu-badge">${escapeHtml(edu.badge)}</span>
                    </div>
                    <h3 class="edu-degree">${escapeHtml(edu.degree)}</h3>
                    <p class="edu-spec">${escapeHtml(edu.specialization)}</p>
                    <p class="edu-inst">${escapeHtml(edu.institution)}</p>
                    <p class="edu-location">
                        <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                        <span>${escapeHtml(edu.location)}</span>
                    </p>
                </article>
            `
            )
            .join('');

        const coursework = document.getElementById('coursework-card');
        coursework.innerHTML = `
            <h3 class="coursework-heading">
                <i class="fa-solid fa-book-open" aria-hidden="true"></i>
                <span>Relevant Coursework</span>
            </h3>
            <div class="coursework-tags">
                ${education.coursework
                    .map((course) => `<span class="course-tag">${escapeHtml(course)}</span>`)
                    .join('')}
            </div>
        `;
    }

    function renderCertificationsAndAchievements() {
        const certGrid = document.getElementById('certifications-grid');
        certGrid.innerHTML = PORTFOLIO_DATA.certifications
            .map(
                (cert) => `
                <article class="cert-card reveal">
                    <div class="cert-meta-row">
                        <span class="cert-cat">${escapeHtml(cert.category)}</span>
                        <span class="cert-date">${escapeHtml(cert.date)}</span>
                    </div>
                    <h3 class="cert-title">${escapeHtml(cert.title)}</h3>
                    <p class="cert-issuer">${escapeHtml(cert.issuer)}</p>
                    <div class="cert-id">ID: ${escapeHtml(cert.credentialId)}</div>
                    <div class="cert-actions">
                        <a href="${escapeHtml(cert.verifyUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                            <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
                            <span>Verify</span>
                        </a>
                        ${
                            cert.certificatePdf
                                ? `<a href="${encodeURI(cert.certificatePdf)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                                       <i class="fa-regular fa-file-pdf" aria-hidden="true"></i>
                                       <span>Certificate PDF</span>
                                   </a>`
                                : ''
                        }
                    </div>
                </article>
            `
            )
            .join('');

        const achGrid = document.getElementById('achievements-grid');
        achGrid.innerHTML = PORTFOLIO_DATA.achievements
            .map(
                (ach) => `
                <article class="achievement-card reveal">
                    <div class="ach-head">
                        <span class="ach-icon" aria-hidden="true">
                            <i class="${escapeHtml(ach.icon)}"></i>
                        </span>
                        <span class="cert-date">${escapeHtml(ach.date)}</span>
                    </div>
                    <h3 class="ach-title">${escapeHtml(ach.title)}</h3>
                    <p class="ach-issuer">${escapeHtml(ach.issuer)}</p>
                    <p class="ach-desc">${escapeHtml(ach.description)}</p>
                    ${
                        ach.certificatePdf
                            ? `<div class="cert-actions">
                                   <a href="${encodeURI(ach.certificatePdf)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                                       <i class="fa-regular fa-file-pdf" aria-hidden="true"></i>
                                       <span>View Certificate</span>
                                   </a>
                               </div>`
                            : ''
                    }
                </article>
            `
            )
            .join('');

        const profilesGrid = document.getElementById('profiles-grid');
        profilesGrid.innerHTML = PORTFOLIO_DATA.profiles
            .map(
                (prof) => `
                <a class="profile-card reveal" href="${escapeHtml(prof.url)}" target="_blank" rel="noopener noreferrer">
                    <div class="profile-top">
                        <span class="profile-icon" aria-hidden="true">
                            <i class="${escapeHtml(prof.icon)}"></i>
                        </span>
                        <i class="fa-solid fa-arrow-up-right-from-square profile-arrow" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h3 class="profile-name">${escapeHtml(prof.name)}</h3>
                        <p class="profile-handle">${escapeHtml(prof.handle)}</p>
                    </div>
                    <p class="profile-desc">${escapeHtml(prof.description)}</p>
                </a>
            `
            )
            .join('');
    }

    function renderContactAndFooter() {
        const { meta } = PORTFOLIO_DATA;

        document.getElementById('contact-info').innerHTML = `
            <p class="contact-closing">
                Whether you are hiring for a Data Analyst / Data Science internship, reviewing my project work, or looking to collaborate on analytical pipelines, feel free to reach out directly.
            </p>
            <div class="contact-channel">
                <div class="channel-left">
                    <span class="channel-icon" aria-hidden="true"><i class="fa-solid fa-envelope"></i></span>
                    <div>
                        <span class="channel-label">Email</span>
                        <a class="channel-value" href="mailto:${escapeHtml(meta.email)}">${escapeHtml(meta.email)}</a>
                    </div>
                </div>
                <button type="button" class="copy-btn" id="copy-email-btn">
                    <i class="fa-regular fa-copy" aria-hidden="true"></i>
                    <span>Copy</span>
                </button>
            </div>

            <a class="contact-channel" href="${escapeHtml(meta.linkedin)}" target="_blank" rel="noopener noreferrer">
                <div class="channel-left">
                    <span class="channel-icon" aria-hidden="true"><i class="fa-brands fa-linkedin-in"></i></span>
                    <div>
                        <span class="channel-label">LinkedIn</span>
                        <span class="channel-value">linkedin.com/in/madhur-shukla</span>
                    </div>
                </div>
                <i class="fa-solid fa-arrow-up-right-from-square profile-arrow" aria-hidden="true"></i>
            </a>

            <a class="contact-channel" href="${escapeHtml(meta.github)}" target="_blank" rel="noopener noreferrer">
                <div class="channel-left">
                    <span class="channel-icon" aria-hidden="true"><i class="fa-brands fa-github"></i></span>
                    <div>
                        <span class="channel-label">GitHub</span>
                        <span class="channel-value">github.com/Katsu6969</span>
                    </div>
                </div>
                <i class="fa-solid fa-arrow-up-right-from-square profile-arrow" aria-hidden="true"></i>
            </a>
        `;

        const copyBtn = document.getElementById('copy-email-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(meta.email);
                    showToast(`Email copied: ${meta.email}`);
                } catch {
                    showToast(`Email: ${meta.email}`);
                }
            });
        }

        document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
        document.getElementById('footer-links').innerHTML = `
            <a href="${escapeHtml(meta.github)}" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github" aria-hidden="true"></i>
                <span>GitHub</span>
            </a>
            <a href="${escapeHtml(meta.linkedin)}" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                <span>LinkedIn</span>
            </a>
            <a href="mailto:${escapeHtml(meta.email)}">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                <span>Email</span>
            </a>
        `;
    }

    /* ======================================================================
       Project Case Study Modal (Full 15-Part Structure)
       ====================================================================== */
    function openProjectModal(projectId, updateHash = true) {
        const project = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
        if (!project) return;

        const cs = project.caseStudy;
        const modal = document.getElementById('project-modal');
        document.getElementById('modal-project-category').textContent = project.categories.join(' · ');
        document.getElementById('modal-project-title').textContent = project.title;

        document.getElementById('modal-project-body').innerHTML = `
            <div class="cs-visual-frame">
                ${renderProjectSvg(project.visualType)}
            </div>

            <div class="cs-block">
                <h3>1. Project Overview</h3>
                <p>${escapeHtml(cs.overview)}</p>
            </div>

            <div class="cs-two-col">
                <div class="cs-block cs-callout">
                    <h3>2. Problem Statement</h3>
                    <p>${escapeHtml(cs.problemStatement)}</p>
                </div>
                <div class="cs-block cs-callout">
                    <h3>3. Project Objectives</h3>
                    <ul class="cs-list">
                        ${cs.objectives.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="cs-two-col">
                <div class="cs-block">
                    <h3>4. Dataset &amp; Source</h3>
                    <p>${escapeHtml(cs.dataset)}</p>
                </div>
                <div class="cs-block">
                    <h3>5. Tools &amp; Technologies</h3>
                    <div class="project-tools" style="margin-bottom:0;">
                        ${project.tools.map((t) => `<span class="tool-tag">${escapeHtml(t)}</span>`).join('')}
                    </div>
                </div>
            </div>

            <div class="cs-block">
                <h3>6. Data Preprocessing</h3>
                <ul class="cs-list">
                    ${cs.preprocessing.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                </ul>
            </div>

            <div class="cs-block">
                <h3>7. Exploratory Data Analysis (EDA)</h3>
                <ul class="cs-list">
                    ${cs.eda.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                </ul>
            </div>

            <div class="cs-block">
                <h3>8. Methodology &amp; Implementation</h3>
                <p>${escapeHtml(cs.methodology)}</p>
            </div>

            <div class="cs-two-col">
                <div class="cs-block cs-callout">
                    <h3>9. Visualizations</h3>
                    <ul class="cs-list">
                        ${cs.visualHighlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                    </ul>
                </div>
                <div class="cs-block cs-callout">
                    <h3>10. Model Performance</h3>
                    <p>${escapeHtml(cs.modelPerformance)}</p>
                </div>
            </div>

            <div class="cs-block">
                <h3>11. Key Findings &amp; Insights</h3>
                <ul class="cs-list">
                    ${cs.findings.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                </ul>
            </div>

            <div class="cs-two-col">
                <div class="cs-block">
                    <h3>12. Limitations</h3>
                    <ul class="cs-list">
                        ${cs.limitations.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                    </ul>
                </div>
                <div class="cs-block">
                    <h3>13. Future Improvements</h3>
                    <ul class="cs-list">
                        ${cs.futureImprovements.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="cs-actions">
                <a href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <i class="fa-brands fa-github" aria-hidden="true"></i>
                    <span>View GitHub Repository</span>
                </a>
                ${
                    project.demo
                        ? `<a href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                               <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                               <span>Live Demo</span>
                           </a>`
                        : ''
                }
            </div>
        `;

        modal.hidden = false;
        document.body.classList.add('modal-open');
        document.getElementById('modal-close-btn').focus();

        if (updateHash && window.location.hash !== `#project/${project.id}`) {
            history.replaceState(null, '', `#project/${project.id}`);
        }
    }

    function closeProjectModal() {
        const modal = document.getElementById('project-modal');
        if (!modal || modal.hidden) return;
        modal.hidden = true;
        document.body.classList.remove('modal-open');
        if (window.location.hash.startsWith('#project/')) {
            history.replaceState(null, '', '#projects');
        }
    }

    function setupModal() {
        const modal = document.getElementById('project-modal');
        const closeBtn = document.getElementById('modal-close-btn');

        closeBtn.addEventListener('click', closeProjectModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProjectModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeProjectModal();
        });

        // Open deep-linked project if hash matches
        if (window.location.hash.startsWith('#project/')) {
            const slug = window.location.hash.replace('#project/', '');
            openProjectModal(slug, false);
        }
    }

    /* ======================================================================
       Theme Switcher (Dark Default + Light Mode Persisted)
       ====================================================================== */
    function setupThemeToggle() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;

        function updateAriaLabel() {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            btn.setAttribute(
                'aria-label',
                current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }

        updateAriaLabel();

        btn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            try {
                localStorage.setItem('portfolio-theme', next);
            } catch {}
            updateAriaLabel();
        });
    }

    /* ======================================================================
       Navigation, Scroll Progress, Active Section Spy & Back to Top
       ====================================================================== */
    function setupNavigationAndScroll() {
        const navbar = document.getElementById('navbar');
        const progressBar = document.getElementById('scroll-progress');
        const floatingTopBtn = document.getElementById('floating-top-btn');
        const footerTopBtn = document.getElementById('footer-top-btn');
        const hamburger = document.getElementById('nav-hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = Array.from(document.querySelectorAll('.nav-link'));

        function closeMobileMenu() {
            navMenu.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }

        hamburger.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.forEach((link) => {
            link.addEventListener('click', () => closeMobileMenu());
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMobileMenu();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMobileMenu();
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }

        floatingTopBtn.addEventListener('click', scrollToTop);
        footerTopBtn.addEventListener('click', scrollToTop);

        // Scroll progress + sticky navbar + back-to-top visibility (hide floating btn when footer is visible)
        let isFooterVisible = false;
        const footerEl = document.querySelector('.footer');

        function updateFloatingTop() {
            const shouldShow = window.scrollY > 420 && !isFooterVisible;
            floatingTopBtn.classList.toggle('visible', shouldShow);
        }

        if (footerEl && 'IntersectionObserver' in window) {
            const footerObserver = new IntersectionObserver(
                (entries) => {
                    isFooterVisible = entries.some((entry) => entry.isIntersecting);
                    updateFloatingTop();
                },
                { threshold: 0.05 }
            );
            footerObserver.observe(footerEl);
        }

        function onScroll() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;

            progressBar.style.width = `${progress}%`;
            navbar.classList.toggle('scrolled', scrollTop > 24);
            updateFloatingTop();
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        // Active Nav Link Observer
        const sectionIds = [
            'home',
            'about',
            'skills',
            'projects',
            'experience',
            'education',
            'certifications',
            'contact'
        ];
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const spyObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        navLinks.forEach((link) => {
                            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                        });
                    }
                });
            },
            {
                rootMargin: '-32% 0px -58% 0px',
                threshold: 0
            }
        );

        sections.forEach((sec) => spyObserver.observe(sec));
    }

    /* ======================================================================
       Scroll Reveal (Once per Section/Card)
       ====================================================================== */
    function setupScrollReveals() {
        const targets = document.querySelectorAll('.reveal');
        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            targets.forEach((el) => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
        );

        targets.forEach((el) => observer.observe(el));
    }

    /* ======================================================================
       Subtle Hero Data Network Canvas
       ====================================================================== */
    function setupHeroCanvas() {
        const canvas = document.getElementById('hero-network-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        const nodes = Array.from({ length: 22 }, (_, i) => ({
            x: ((i * 73) % 100) / 100,
            y: ((i * 41 + 17) % 100) / 100,
            vx: ((i % 2 === 0 ? 1 : -1) * (0.00018 + (i % 5) * 0.00004)),
            vy: ((i % 3 === 0 ? 1 : -1) * (0.00016 + (i % 4) * 0.00004)),
            radius: i % 4 === 0 ? 4.2 : 2.6,
            accent: i % 3 === 0 ? 'blue' : 'teal'
        }));

        function resize() {
            const rect = canvas.parentElement.getBoundingClientRect();
            width = Math.max(260, rect.width);
            height = Math.max(220, rect.height);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function drawFrame() {
            const colors = getThemeColors();
            ctx.clearRect(0, 0, width, height);

            // Subtle chart reference lines
            ctx.strokeStyle = colors.grid;
            ctx.lineWidth = 1;
            for (let y = 48; y < height - 20; y += 54) {
                ctx.beginPath();
                ctx.moveTo(20, y);
                ctx.lineTo(width - 20, y);
                ctx.stroke();
            }

            // Update positions if motion allowed
            if (!prefersReducedMotion) {
                nodes.forEach((n) => {
                    n.x += n.vx;
                    n.y += n.vy;
                    if (n.x < 0.06 || n.x > 0.94) n.vx *= -1;
                    if (n.y < 0.1 || n.y > 0.9) n.vy *= -1;
                });
            }

            // Connect nearby nodes
            const maxDist = Math.min(width, height) * 0.42;
            ctx.strokeStyle = colors.nodeLine;
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = (nodes[i].x - nodes[j].x) * width;
                    const dy = (nodes[i].y - nodes[j].y) * height;
                    const dist = Math.hypot(dx, dy);
                    if (dist < maxDist) {
                        ctx.globalAlpha = (1 - dist / maxDist) * 0.7;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x * width, nodes[i].y * height);
                        ctx.lineTo(nodes[j].x * width, nodes[j].y * height);
                        ctx.stroke();
                    }
                }
            }
            ctx.globalAlpha = 1;

            // Draw nodes
            nodes.forEach((n) => {
                const px = n.x * width;
                const py = n.y * height;
                ctx.beginPath();
                ctx.arc(px, py, n.radius, 0, Math.PI * 2);
                ctx.fillStyle = n.accent === 'blue' ? colors.blue : colors.teal;
                ctx.fill();
            });

            // Subtle trend curve overlay at bottom
            ctx.beginPath();
            ctx.strokeStyle = colors.teal;
            ctx.globalAlpha = 0.45;
            ctx.lineWidth = 1.6;
            const pts = [0.76, 0.7, 0.72, 0.61, 0.56, 0.48, 0.4, 0.34];
            pts.forEach((val, idx) => {
                const x = 26 + (idx / (pts.length - 1)) * (width - 52);
                const y = val * height;
                if (idx === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.stroke();
            ctx.globalAlpha = 1;

            if (!prefersReducedMotion) {
                requestAnimationFrame(drawFrame);
            }
        }

        resize();
        drawFrame();
        window.addEventListener('resize', () => {
            resize();
            if (prefersReducedMotion) drawFrame();
        });
    }

    /* ======================================================================
       Resume Download Button
       ====================================================================== */
    function setupResumeDownload() {
        const btn = document.getElementById('download-resume-btn');
        if (!btn) return;

        btn.addEventListener('click', async () => {
            const path = PORTFOLIO_DATA.meta.resumePath;
            try {
                const res = await fetch(path, { method: 'HEAD' });
                if (res.ok) {
                    const link = document.createElement('a');
                    link.href = path;
                    link.download = 'Madhur_Shukla_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    showToast('Downloading Madhur_Shukla_Resume.pdf...');
                    return;
                }
            } catch {
                // Local file:// protocol fallback: attempt direct open/download
                if (window.location.protocol === 'file:') {
                    window.open(path, '_blank', 'noopener');
                    return;
                }
            }
            showToast('Resume is available on request — feel free to reach out via Email or LinkedIn.');
        });
    }

    /* ======================================================================
       Working Contact Form (Formspree/Web3Forms Endpoint OR Mailto Composer)
       ====================================================================== */
    function setupContactForm() {
        const form = document.getElementById('contact-form');
        const submitBtn = document.getElementById('contact-submit-btn');
        const helper = document.getElementById('form-helper');
        if (!form) return;

        const endpoint = (PORTFOLIO_DATA.meta.formEndpoint || '').trim();
        if (endpoint && helper) {
            helper.textContent = 'Your message will be delivered directly to my inbox.';
        }

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameEl = document.getElementById('contact-name');
            const emailEl = document.getElementById('contact-email');
            const subjectEl = document.getElementById('contact-subject');
            const messageEl = document.getElementById('contact-message');

            const fields = [nameEl, emailEl, subjectEl, messageEl];
            let valid = true;

            fields.forEach((field) => {
                const ok = field.value.trim().length > 0 && field.checkValidity();
                field.classList.toggle('invalid', !ok);
                if (!ok) valid = false;
            });

            if (!valid) {
                showToast('Please complete all fields with a valid email address.');
                return;
            }

            const payload = {
                name: nameEl.value.trim(),
                email: emailEl.value.trim(),
                subject: subjectEl.value.trim(),
                message: messageEl.value.trim()
            };

            if (endpoint) {
                submitBtn.disabled = true;
                try {
                    const res = await fetch(endpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        },
                        body: JSON.stringify(payload)
                    });
                    if (!res.ok) throw new Error('Request failed');
                    form.reset();
                    showToast('Message sent successfully. Thank you for reaching out!');
                } catch {
                    showToast('Could not send via form service — please email directly using the card on the left.');
                } finally {
                    submitBtn.disabled = false;
                }
                return;
            }

            // Functional mailto fallback on static GitHub Pages
            const mailtoSubject = encodeURIComponent(`[Portfolio] ${payload.subject}`);
            const mailtoBody = encodeURIComponent(
                `Hi Madhur,\n\n${payload.message}\n\nBest regards,\n${payload.name}\n${payload.email}`
            );
            window.location.href = `mailto:${PORTFOLIO_DATA.meta.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
            showToast('Opening your email client with your pre-filled message...');
            form.reset();
        });

        form.querySelectorAll('input, textarea').forEach((field) => {
            field.addEventListener('input', () => field.classList.remove('invalid'));
        });
    }

    /* ======================================================================
       Bootstrap
       ====================================================================== */
    document.addEventListener('DOMContentLoaded', () => {
        renderHero();
        renderAbout();
        renderSkills();
        renderProjectFilters();
        renderProjects(true);
        renderExperience();
        renderEducation();
        renderCertificationsAndAchievements();
        renderContactAndFooter();

        setupThemeToggle();
        setupNavigationAndScroll();
        setupScrollReveals();
        setupHeroCanvas();
        setupModal();
        setupResumeDownload();
        setupContactForm();
    });
})();
