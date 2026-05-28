import './index.css'

// ── Data ──────────────────────────────────────────────

const experience = [
  {
    title: 'AI and ML Engineering',
    date: 'Ongoing',
    company: 'Shivansh Software Innovations and AI Labs',
    bullets: [],
  },
  {
    title: 'AI Trainee — NestLabs Department',
    date: 'Jan 2026 – Mar 2026',
    company: 'LabelNest India Private Limited · Bengaluru (Remote)',
    bullets: [
      'Built 500+ structured AI training datasets, optimizing LLM input-output pipelines for accuracy.',
      'Developed quality evaluation frameworks, benchmarking generative AI behavior across use cases.',
      'Researched 60–100 VC firms & family offices, analyzing AUM, portfolio focus, and deal flow.',
      'Delivered market intelligence reports supporting strategic outreach and partnership pipelines.',
    ],
  },
]

const projects = [
  {
    name: 'Pulse Analytics',
    desc: 'An agentic AI system that autonomously investigates metric anomalies in product dashboards. Given a spike or drop in signups, revenue, or conversions, the agent runs multi-step SQL queries — slicing by country, platform, device, and event type — and surfaces a specific, data-backed root-cause hypothesis without human intervention. The core is an agentic tool-use loop where the LLM decides which queries to run based on previous results, operating within a fixed 6-call budget. Anomalies are detected using z-score analysis on a 7-day rolling baseline across 72,000 mock events, with 90-day metric trends visualized using React and inline SVG charts. Built a provider-agnostic LLM abstraction layer supporting Groq, Gemini Flash, OpenRouter, and local Ollama.',
    tags: ['Python', 'FastAPI', 'SQLite', 'React', 'Vite', 'Agentic Tool Use', 'LLM APIs'],
  },
  {
    name: 'Volsurf',
    desc: 'A quantitative finance research tool for implied volatility surface modeling and forecasting, combining classical financial mathematics with modern machine learning. Implemented Gaussian Process Regression (Matérn ν=2.5 kernel) for smooth vol surface interpolation across strike and expiry dimensions, benchmarked against cubic spline interpolation. Designed LSTM and Transformer-based forecasting pipelines for one-step-ahead ATM implied vol prediction, evaluated against AR(1)/GARCH baselines with proper 70/15/15 splits. Visualized as an interactive 3D surface with live smile slices and ATM term structure panels.',
    tags: ['Python', 'PyTorch', 'scikit-learn (GPR)', 'Streamlit', 'Plotly'],
  },
  {
    name: 'AlphaDesk',
    desc: 'Full-stack real-time financial research platform with a proprietary NLP contradiction engine that cross-references management narrative against reported financials across 10-K, 10-Q, and 8-K filings for 10,000+ US and Indian stocks. Reduced manual filing review time from 5–6 hours to under 20 minutes, with live price tracking updating every 60 seconds, automated research note generation, and a pattern-matching engine covering 25+ bullish/bearish linguistic signals across 8 financial topics.',
    tags: ['Node.js', 'WebSockets', 'SEC EDGAR XBRL API', 'BSE/NSE', 'Yahoo Finance', 'NLP'],
  },
  {
    name: 'Vigilis',
    desc: 'CCTV-based person-of-interest identification system. Detects faces via YOLOv8 at 30 FPS, generates 512-D embeddings using InceptionResNetV2-based ArcFace trained on 13,233 LFW images across 5,749 identities, and matches against a watchlist through FAISS (sub-10ms search). Achieves 99.2% verification accuracy with temporal tracking across frames and automated real-time alerts, reducing manual monitoring workload by 95%.',
    tags: ['YOLOv8', 'ArcFace', 'FAISS', 'FastAPI', 'PostgreSQL', 'PyTorch'],
  },
]

const skills = [
  { category: 'Languages',      values: 'JavaScript (ES6+), Python, C/C++, Java' },
  { category: 'Frontend',       values: 'React.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Figma' },
  { category: 'Backend & APIs', values: 'Node.js (Express), FastAPI, Flask, REST, GraphQL, Supabase Auth' },
  { category: 'Databases',      values: 'PostgreSQL, MongoDB, Supabase, MySQL, SQLite' },
  { category: 'Cloud & DevOps', values: 'AWS (EC2, S3, RDS), Docker, GitHub Actions (CI/CD), GCP Fundamentals' },
  { category: 'AI / ML',        values: 'PyTorch, Hugging Face Transformers, Scikit-learn, OpenCV, FAISS, NLP' },
  { category: 'Other',          values: 'DSA, OOP, Competitive Programming, Git, Microsoft Excel, Figma' },
]

const achievements = [
  "ADIT IDEATHON'23 — First Runners Up.",
  "Eureka'24 Finalists — Presented at IIT Bombay Zonal round.",
  "NEC (National Entrepreneurship Challenge) — Competed at national level, IIT Bombay.",
  "GeeksforGeeks — Global Rank 1184 in GfG Weekly-192; 3 Star (1643 rating).",
  "Selected as open-source contributor at GSSoC and NSOC.",
]

const positions = [
  "Decryptors – ADIT Coding Club: President",
  "IEEE ADIT SB: Secretary",
  "E-CELL, ADIT: Documentation Head",
]

// ── Components ────────────────────────────────────────

function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-name">Juhi Shahani</span>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#achievements">Achievements</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <div className="hero">
      <p className="hero-eyebrow">Computer Science &amp; Design · Gujarat, India</p>
      <h1>Juhi Shahani</h1>
      <p className="hero-desc">
        Building at the intersection of AI engineering and financial systems.
        Currently studying at ADIT, focused on agentic systems, quantitative research tools, and applied ML.
      </p>
      <div className="contact-row">
        <a className="contact-link" href="mailto:Juhishahani031@gmail.com">Email</a>
        <a className="contact-link" href="https://www.linkedin.com/in/juhishahani031/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="contact-link" href="https://github.com/Juhi0313" target="_blank" rel="noreferrer">GitHub</a>
        <a className="contact-link" href="https://www.upwork.com/freelancers/~0192e295ebbfc51f81" target="_blank" rel="noreferrer">Upwork</a>
        <span className="contact-plain">+91-9429713421</span>
      </div>
    </div>
  )
}

function SectionRow({ id, label, children, first }) {
  return (
    <>
      <div className="section-aside" id={id}>
        <p className="section-label">{label}</p>
      </div>
      <div className={`section-content${first ? ' first' : ''}`}>
        {children}
      </div>
    </>
  )
}

function Experience() {
  return (
    <SectionRow id="experience" label="Experience" first>
      {experience.map((exp, i) => (
        <div className="exp-item" key={i}>
          <div className="exp-meta">
            <span className="exp-title">{exp.title}</span>
            <span className="exp-date">{exp.date}</span>
          </div>
          <div className="exp-company">{exp.company}</div>
          {exp.bullets.length > 0 && (
            <ul className="exp-bullets">
              {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          )}
        </div>
      ))}
    </SectionRow>
  )
}

function Projects() {
  return (
    <SectionRow id="projects" label="Projects">
      {projects.map((p, i) => (
        <div className="project-item" key={i}>
          <div className="project-header">
            <span className="project-name">{p.name}</span>
            <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <p className="project-desc">{p.desc}</p>
          <div className="tags">
            {p.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
          </div>
        </div>
      ))}
    </SectionRow>
  )
}

function Skills() {
  return (
    <SectionRow id="skills" label="Skills">
      <table className="skills-table">
        <tbody>
          {skills.map((s, i) => (
            <tr key={i}>
              <td>{s.category}</td>
              <td>{s.values}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionRow>
  )
}

function Education() {
  return (
    <SectionRow id="education" label="Education">
      <p className="edu-name">A.D. Patel Institute of Technology</p>
      <p className="edu-degree">Bachelor of Technology — Computer Science and Design</p>
      <p className="edu-date">June 2023 – June 2027</p>
    </SectionRow>
  )
}

function Achievements() {
  return (
    <SectionRow id="achievements" label="Achievements">
      <ul className="plain-list">
        {achievements.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </SectionRow>
  )
}

function Positions() {
  return (
    <SectionRow label="Positions">
      <ul className="plain-list">
        {positions.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </SectionRow>
  )
}

// ── App ───────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="body-grid">
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Positions />
      </div>
    </>
  )
}
