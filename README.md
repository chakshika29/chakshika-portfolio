# ⚡ Chakshika Pawar - Interactive Developer Portfolio

> **Software Engineer & LLM Specialist**  
> B.Tech in Computer Science and Engineering (Specialization: E-commerce Technology), VIT Bhopal (2022 – 2026)  
> **GitHub:** [https://github.com/chakshika29](https://github.com/chakshika29) • **LinkedIn:** [https://www.linkedin.com/in/chakshika-pawar](https://www.linkedin.com/in/chakshika-pawar)

An immersive, high-performance developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed with dark glassmorphic aesthetics, physics-driven stacking cards, real-time GitHub activity synchronization, and a centralized configuration architecture.

---

## 🚀 Key Features

* **Parallax 3D Command Hub:** Interactive physics-driven tilt hero card with live status indicator, photo avatar, terminal typing emulation, and quick contact artifacts.
* **Centralized Data Architecture:** All portfolio information (personal info, projects, skills, experience, education, certifications, and leadership) is cleanly centralized in [`src/data/portfolioData.js`](src/data/portfolioData.js) for effortless updates.
* **Modular Component System:** Reusable components for `FloatingNav`, `Hero`, `TechMarquee`, `BentoGrid`, `Experience`, `Education`, `Projects`, `Certifications`, `Leadership`, and `ContributionGraph`.
* **Featured Projects Showcase:**
  - **Agro-Aid (Smart Agriculture Platform):** 95%+ ML crop yield prediction accuracy, intelligent weather forecasting, multilingual translation with Google Translate.
  - **Git Docs (AI Technical Documentation Generator):** AST and NLP engine extracting insights from 1,000+ code files with 95%+ accuracy, supporting 500+ concurrent users.
  - **Foodolio (Full-Stack Food Ordering Platform):** MERN stack architecture with JWT authentication, Stripe payment processing, and dedicated React.js admin console.
* **Industry Experience & Academic Rigor:** Dedicated timeline sections for **Ethara AI** (LLM Trainee Intern) and **VIT Bhopal** B.Tech CSE degree.
* **Stacking Certifications:** Scroll-velocity stacked cards showcasing certifications from IBM, Kaggle, AWS, and JPMorganChase.
* **Live GitHub Code Activity:** Live synced commit graph and repository stats for `@chakshika29`.
* **Floating Glassmorphic Navigation:** Scroll-spy navigation with active pill transitions, instant email copy toast, and direct resume download.

---

## 🛠️ Tech Stack

* **Framework:** [React.js](https://react.dev/) (Vite)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment Ready:** Vercel / Netlify / Render

---

## 📂 Project Structure

```bash
├── public/                     # Static assets (images, avatar, resume PDF)
│   ├── chakshika-avatar.png    # High-resolution portrait photo
│   ├── Agro-Aid.png            # Project preview image
│   ├── GitDocs.png             # Project preview image
│   ├── Foodolio.png            # Project preview image
│   └── Chakshika_Pawar_Resume.pdf # Printable PDF resume
├── src/
│   ├── data/
│   │   └── portfolioData.js    # 🌟 Centralized data & config
│   ├── components/
│   │   ├── FloatingNav.jsx     # Glassmorphic floating nav with scroll-spy
│   │   ├── Hero.jsx            # 3D tilt hero with command hub
│   │   ├── TechMarquee.jsx     # Endless marquee tech ticker
│   │   ├── BentoGrid.jsx       # Technical arsenal bento grid
│   │   ├── Experience.jsx      # Ethara AI LLM internship section
│   │   ├── Education.jsx       # VIT Bhopal academic background
│   │   ├── Projects.jsx        # Project showcases
│   │   ├── ProjectCard.jsx     # Reusable project card with metrics
│   │   ├── Certifications.jsx  # Stacking credential cards
│   │   ├── Leadership.jsx      # Co-curricular & NGO impact cards
│   │   └── github/
│   │       ├── ContributionGraph.jsx # Live contribution graph
│   │       ├── LanguagesBar.jsx      # Primary languages breakdown
│   │       └── PinnedRepos.jsx       # Pinned repositories from API
│   ├── App.jsx                 # Master layout assembly
│   ├── main.jsx                # Application root
│   └── index.css               # Design system & dark theme tokens
├── package.json
└── vite.config.js
```

---

## 💻 Quick Start

### 1. Install Dependencies
```bash
cd Portfolio-main/om-portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
