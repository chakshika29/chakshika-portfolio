// Centralized Data & Configuration for Chakshika Pawar's Portfolio

export const personalInfo = {
  name: "Chakshika Pawar",
  firstName: "Chakshika",
  lastName: "Pawar",
  title: "Software Engineer & LLM Specialist",
  roleHeadline: "Full Stack Engineer & AI/ML Specialist",
  tagline: "Building scalable web platforms, resilient architectures, and intelligent AI/LLM pipelines.",
  bio: "B.Tech in Computer Science and Engineering (Specialization: E-commerce Technology) from Vellore Institute of Technology, Bhopal (2022 – 2026). Passionate about full-stack web engineering, LLM dataset pipelines, and machine learning models.",
  email: "chakshikapawar@gmail.com",
  phone: "+91 8530730430",
  rawPhone: "+918530730430",
  github: "https://github.com/chakshika29",
  githubUsername: "chakshika29",
  linkedin: "https://www.linkedin.com/in/chakshika-pawar",
  leetcode: "https://leetcode.com/u/chakshika29/",
  avatar: "/chakshika-avatar.png",
  resume: "/Chakshika_Pawar_Resume.pdf",
  status: "Open to work",
  targetBatch: "2026 Batch",
  targetRoles: "Software Engineer • Full Stack • AI/ML",
  location: "India",
  openToWorkBadge: "Open to work • 2026 Batch",
};

export const marqueeTechs = [
  "Python",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Flask",
  "AI & ML",
  "LLM Pipelines",
  "SQL",
  "C++",
  "JavaScript",
  "Next.js",
  "AWS",
  "Docker",
  "REST APIs",
  "Playwright",
  "Tailwind CSS",
  "Git & GitHub"
];

export const skillsCategories = {
  languages: [
    { name: "Python", level: "Advanced" },
    { name: "C++", level: "Proficient" },
    { name: "SQL", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "HTML5", level: "Expert" },
    { name: "CSS3", level: "Expert" }
  ],
  frameworks: [
    { name: "React.js", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "Flask", level: "Proficient" },
    { name: "Next.js", level: "Proficient" },
    { name: "REST APIs", level: "Advanced" }
  ],
  aiAndData: [
    { name: "LLM Pipelines", level: "Specialist" },
    { name: "AI/ML Modeling", level: "Proficient" },
    { name: "Data Preprocessing", level: "Advanced" },
    { name: "Model Evaluation", level: "Advanced" },
    { name: "AST & NLP Parsing", level: "Proficient" }
  ],
  databases: [
    { name: "MongoDB", level: "Advanced" },
    { name: "SQL / Relational DBs", level: "Advanced" },
    { name: "Database Schema Design", level: "Proficient" }
  ],
  cloudAndTools: [
    { name: "Git & GitHub", level: "Advanced" },
    { name: "Docker", level: "Proficient" },
    { name: "AWS", level: "Proficient" },
    { name: "Postman", level: "Advanced" },
    { name: "Playwright", level: "Proficient" },
    { name: "Vercel / Render", level: "Advanced" }
  ],
  coreCs: [
    { name: "Data Structures & Algorithms", level: "Proficient" },
    { name: "Object Oriented Programming (OOPS)", level: "Advanced" },
    { name: "Database Management Systems (DBMS)", level: "Advanced" },
    { name: "Operating Systems", level: "Proficient" },
    { name: "SDLC & Agile Development", level: "Advanced" }
  ]
};

export const experienceData = [
  {
    company: "Ethara AI",
    role: "LLM Trainee Intern",
    period: "April 2026",
    statusBadge: "Industry Experience",
    location: "Remote / Hybrid",
    description: "Supported large language model training pipelines, benchmark evaluation, and structured dataset curation using Python and SQL.",
    highlights: [
      "Processed and analyzed structured datasets using Python and SQL to support LLM training, evaluation, and data-driven model improvement.",
      "Evaluated AI-generated responses for accuracy, consistency, and quality, identifying performance patterns and contributing to improved model outputs.",
      "Performed data preprocessing, annotation, validation, and quality assurance to support reliable machine learning and LLM pipelines."
    ],
    tech: ["Python", "SQL", "LLM Evaluation", "Data Pipelines", "Quality Assurance"]
  }
];

export const educationData = [
  {
    institution: "Vellore Institute of Technology, Bhopal",
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Specialization: E-commerce Technology",
    period: "2022 – 2026",
    badge: "Undergraduate Degree",
    description: "Rigorous computer science curriculum with specialized coursework in scalable web systems, e-commerce architectures, database systems, algorithms, and AI/ML applications.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOPS)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Software Development Life Cycle (SDLC)",
      "Web Technologies & E-Commerce Systems"
    ]
  }
];

export const projectsData = [
  {
    id: "agro-aid",
    title: "Agro-Aid",
    subtitle: "Smart Agriculture Platform",
    date: "Dec 2024",
    description: "Responsive, mobile-first smart agriculture platform built to empower regional farmers. Integrated machine learning models via RESTful APIs, achieving 95%+ accuracy in crop yield prediction and early disease detection while reducing data latency by 30%. Structured intelligent weather forecasting and real-time multilingual support with Google Translate.",
    tags: ["CSS3", "JavaScript", "REST APIs", "Machine Learning", "Node.js", "Express.js"],
    color: "#22c55e",
    accentBg: "from-green-500/20 to-emerald-500/5",
    repoLink: "https://github.com/chakshika29/agro-aid",
    demoLink: "https://agro-aid-ig5z.onrender.com/",
    image: "/Agro-Aid.png",
    metrics: [
      { label: "Prediction Accuracy", value: "95%+" },
      { label: "Data Latency Reduction", value: "30%" },
      { label: "Weather Forecast Precision", value: "80%+" }
    ]
  },
  {
    id: "git-docs",
    title: "Git Docs",
    subtitle: "AI-Powered Technical Documentation Generator",
    date: "Jan 2025",
    description: "AI-powered documentation engine that automatically converts GitHub repositories into structured technical docs and blogs, reducing developer documentation time by up to 85%. Engineered a smart parsing engine using NLP and AST (Abstract Syntax Tree) analysis across 1,000+ code files with 95%+ accuracy, supporting 500+ concurrent users.",
    tags: ["Next.js", "Python", "Flask", "NLP & AST", "CSS3"],
    color: "#3b82f6",
    accentBg: "from-blue-500/20 to-cyan-500/5",
    repoLink: "https://github.com/chakshika29/GIT-DOCS",
    demoLink: "https://git-docs-omega.vercel.app",
    image: "/GitDocs.png",
    metrics: [
      { label: "Doc Time Reduced", value: "85%" },
      { label: "AST Parse Accuracy", value: "95%+" },
      { label: "Concurrent Capacity", value: "500+" }
    ]
  },
  {
    id: "foodolio",
    title: "Foodolio",
    subtitle: "Full-Stack Food Ordering Platform",
    date: "July 2025",
    description: "Full-stack food ordering platform featuring responsive interfaces, RESTful API integration, JWT-based secure authentication, and Stripe payment gateway. Includes an interactive food catalog, persistent cart system, order tracking, and a dedicated React.js admin dashboard with Axios API communication for real-time inventory and order management.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "JWT Auth"],
    color: "#f97316",
    accentBg: "from-orange-500/20 to-amber-500/5",
    repoLink: "https://github.com/chakshika29/Foodolio",
    demoLink: "https://github.com/chakshika29/Foodolio",
    image: "/Foodolio.png",
    metrics: [
      { label: "Architecture", value: "Full-Stack MERN" },
      { label: "Payment Gateway", value: "Stripe Integrated" },
      { label: "Admin Console", value: "Dedicated Dashboard" }
    ]
  }
];

export const certificationsData = [
  {
    title: "AI Fundamentals — Foundations for Understanding AI",
    issuer: "IBM",
    desc: "Comprehensive certification covering fundamental artificial intelligence principles, modern neural architectures, and responsible AI system design.",
    date: "2024",
    color: "from-blue-500 to-cyan-500",
    link: "https://www.credly.com/org/ibm",
    credentialId: "IBM-AI-FUND"
  },
  {
    title: "Python Programming",
    issuer: "Kaggle",
    desc: "Certified proficiency in algorithmic Python, data manipulation, algorithm optimization, and data structures for scientific and ML computing.",
    date: "2024",
    color: "from-purple-500 to-pink-500",
    link: "https://www.kaggle.com/learn/certification",
    credentialId: "KAGGLE-PY"
  },
  {
    title: "AWS Solutions Architect — Associate Certification Program",
    issuer: "Amazon Web Services (AWS)",
    desc: "In-depth cloud architecture certification focusing on high availability, secure compute, distributed microservices, and storage optimization on AWS.",
    date: "2024",
    color: "from-amber-500 to-orange-500",
    link: "https://aws.amazon.com/certification/",
    credentialId: "AWS-SAA"
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMorganChase",
    desc: "Hands-on engineering simulation including financial data pipeline streaming, interface integration, and agile software development workflows.",
    date: "2024",
    color: "from-cyan-500 to-blue-600",
    link: "https://www.theforage.com/simulations/jpmorgan",
    credentialId: "JPMC-SWE"
  }
];

export const leadershipData = [
  {
    role: "President",
    organization: "E-Commerce Club, VIT Bhopal",
    badge: "Campus Leadership",
    accentColor: "from-purple-500 to-indigo-500",
    iconType: "leadership",
    highlights: [
      "Analyzed engagement metrics from e-commerce workshops and business strategy sessions to improve student participation.",
      "Coordinated cross-functional teams to execute high-impact campus events, fostering innovation in digital commerce and web technology."
    ]
  },
  {
    role: "Social Volunteer (NGO)",
    organization: "Foundation for Rural & Agri. Dev.",
    badge: "Community Impact",
    accentColor: "from-emerald-500 to-green-600",
    iconType: "volunteer",
    highlights: [
      "Participated in a comprehensive 7-day farmer awareness campaign across five regional villages, actively engaging with over 150 local farmers.",
      "Conducted hands-on demonstrations and workshops to promote sustainable organic farming practices and cost-effective vermicompost preparation methods."
    ]
  },
  {
    role: "Event Management Lead",
    organization: "Marathi Club, VIT Bhopal",
    badge: "Event Leadership",
    accentColor: "from-pink-500 to-rose-600",
    iconType: "event",
    highlights: [
      "Led the end-to-end planning and execution of large-scale cultural events, coordinating operational teams for the participation of 300+ students.",
      "Raised event sponsorships, increasing the annual festival budget by 25% and ensuring seamless operational execution."
    ]
  }
];

export const githubConfig = {
  username: "chakshika29",
  chartUrl: "https://ghchart.rshah.org/22c55e/chakshika29",
  profileApi: "https://api.github.com/users/chakshika29",
  reposApi: "https://api.github.com/users/chakshika29/repos?sort=updated&per_page=10",
  // Top languages representation based on Chakshika's actual codebases
  languages: [
    { name: "JavaScript", percent: 42.0, count: 45 },
    { name: "Python", percent: 28.5, count: 32 },
    { name: "TypeScript", percent: 14.5, count: 18 },
    { name: "HTML/CSS", percent: 10.0, count: 12 },
    { name: "C++ / SQL", percent: 5.0, count: 6 }
  ]
};
