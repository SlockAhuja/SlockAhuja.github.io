# Slock Ahuja | Personal Portfolio

A professional, production-ready portfolio website for Slock Ahuja, designed for an ICT Engineer and IEEE ComSoc Student Ambassador.

## Content Inventory & Sources

### Verified / Publicly Documented Sources
*As of the current implementation, web searches on GitHub and LinkedIn did not yield publicly verified datasets or pages directly matching the precise names without authentication. Therefore, the information provided below relies on the **user-provided** prompt dataset.*

### User-Provided Information (Integrated)
- **Identity:** Slock Ahuja, B.Tech ICT, Marwadi University (2028).
- **Leadership:** IEEE ComSoc Student Ambassador (Region 10), Chair IEEE ComSoc Marwadi University Chapter.
- **Experience:** DRDO Research Intern, eDC IIT Delhi Campus Ambassador (BECON 2026, Gold Tier).
- **Research:** "AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems" (Accepted/Presented).
- **Projects:** EnhanceX, EnhanceX-Labs, Smart Pot, Farmer Friend AI.
- **Patents:** Automated Load Carrier System (Filed).
- **Skills:** Python, C++, ESP32, FPGA, 6G, NTN, AI/ML (PyTorch), MATLAB, React.

### Assumptions
- **Images:** Due to lack of verified portrait URLs, an abstract technology-focused hero animation is used to convey "AI + Communications + Hardware".
- **Links:** GitHub and LinkedIn URLs are hardcoded as provided (`https://github.com/SlockAhuja` and `https://www.linkedin.com/in/slock-ahuja-32839b315`).
- **Stats:** Removed fake statistics per constraints. Only provided titles and timeline events are listed.
- **Publications Status:** Marked the primary paper as "Presented" since full publication verification was not available on IEEE Xplore.

## SEO Checklist
- [x] Semantic HTML5 structure (main, section, nav, footer, h1-h4 hierarchy).
- [x] Descriptive meta `title` and `description` targeting ICT, AI, 6G, IEEE ComSoc.
- [x] Open Graph (`og:`) tags for Facebook/LinkedIn preview integration.
- [x] Twitter Card metadata implemented.
- [x] Proper `robots.txt` configuration to allow indexing.
- [x] Added `sitemap.xml` for structural crawling.
- [x] `Person` schema.org structured data (JSON-LD) injected.

## Lighthouse & Performance Optimization
- Built using **React + Vite + Tailwind CSS v4** for lightning-fast compilation and minimal bundle size.
- Lazy-loaded scroll animations via `framer-motion` using `whileInView` with `viewport={{ once: true }}` to reduce browser layout thrashing.
- Abstract animations utilize CSS mix-blend modes and hardware-accelerated transforms rather than heavy video files.
- Perfect mobile responsiveness (tested down to 320px).

## Deployment Instructions (GitHub Pages)

Since the repository is `https://github.com/SlockAhuja`, if this is deployed to a User Page (i.e. repository name `SlockAhuja.github.io`), follow these steps:

1. **Install `gh-pages` module:**
   \`\`\`bash
   npm install gh-pages --save-dev
   \`\`\`
2. **Update `package.json`:**
   Add a `homepage` field at the top level:
   \`\`\`json
   "homepage": "https://SlockAhuja.github.io/",
   \`\`\`
   Add deployment scripts to the `"scripts"` section:
   \`\`\`json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   \`\`\`
3. **Deploy the site:**
   Run the deployment command:
   \`\`\`bash
   npm run deploy
   \`\`\`
   This will build the production files and push them to the `gh-pages` branch.
4. **Configure GitHub Repo Settings:**
   Go to your GitHub repository -> Settings -> Pages. Under "Build and deployment", set the source to "Deploy from a branch" and select the `gh-pages` branch.

## Future Update Instructions

The architecture strictly separates data from presentation. To update the website content, you **do not need to touch the UI code**.

Simply edit the corresponding file in the `src/data/` folder:
- **`profile.ts`**: Edit name, tagline, university, about paragraph, or social links.
- **`research.ts`**: Add new research papers or change statuses.
- **`projects.ts`**: Add hackathon projects or personal repos.
- **`experience.ts`**: Update internship dates and roles.
- **`achievements.ts`**: Append new awards or patent statuses (e.g. changing FILED to GRANTED).
- **`skills.ts`**: Add new frameworks or languages as you learn them.
