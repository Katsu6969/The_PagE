# Madhur Shukla — Data Science & AI Portfolio

Personal portfolio website for **Madhur Shukla**, B.Tech Computer Science & Engineering student (Data Science & AI) at Shri Ramswaroop Memorial University (SRMU). Built cleanly with semantic **HTML5**, modern **CSS3**, and vanilla **JavaScript** for GitHub Pages deployment.

## Key Features
- **Dark & Light Themes**: Deep navy/charcoal dark mode with teal/cyan and soft blue accents, plus a persisted light mode toggle (`localStorage`).
- **Data-Driven Configuration**: All portfolio content (projects, skills, experience, education, certifications, links) lives in [`data.js`](./data.js) for quick updates.
- **Filterable Projects & Full Case Study Modal**: Category filtering (`Data Analytics`, `Data Visualization`, `Machine Learning`, `SQL / Database`, `Python`) and an expandable 13-part case study modal with custom analytical SVG visuals and `#project/<id>` URL hash support.
- **Verified Credentials**: Direct links to public IBM Credly badges.
- **Accessible & Responsive**: Sticky glassmorphic navigation, scroll progress indicator, active-section spy, mobile menu drawer, keyboard-accessible dialogs, `prefers-reduced-motion` support, and a working contact flow.

## Structure
```text
.
├── index.html                        # Semantic single-page portfolio structure
├── styles.css                        # Dark/Light theme tokens & responsive layout
├── data.js                           # Centralized editable portfolio content
├── script.js                         # Interactive UI, canvas, filters & modal logic
├── assets/
│   └── Madhur_Shukla_Resume.pdf      # Downloadable single-page resume PDF
└── resume/
    └── Madhur_Shukla_Resume.tex      # Overleaf-ready LaTeX resume source
```

## Updating Content
1. Edit `data.js` to add new projects, update GitHub links, or paste a Formspree/Web3Forms `formEndpoint`.
2. Edit `resume/Madhur_Shukla_Resume.tex` in Overleaf (or local LaTeX) and replace `assets/Madhur_Shukla_Resume.pdf` whenever you update your resume.
