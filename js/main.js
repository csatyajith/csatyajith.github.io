const resumePath = "assets/Satyajith%20Chilappagari%20Resume%20Aug%2029.pdf";

const profile = {
  name: "Satyajith Chilappagari",
  title: "Machine Learning Engineer II",
  company: "Amazon Annapurna Labs",
  location: "San Jose, California",
  email: "csatyajith@gmail.com",
  linkedin: "https://www.linkedin.com/in/csatyajith/",
  github: "https://github.com/csatyajith",
  summary:
    "I build production ML infrastructure for large-model inference, benchmarking automation, and cloud-scale data systems across AWS Neuron, vLLM, Trainium, Inferentia, and real-time analytics platforms."
};

const stats = [
  ["30K+", "TPS supported by Alexa ingestion systems"],
  ["90%", "less developer time spent on LLM benchmarks"],
  ["6 weeks to 1", "validation cycle reduction for benchmark reviews"],
  ["60+ days to 2", "release timeline reduction for Neuron vLLM work"],
  ["50%", "memory reduction enabled with FP8 support"],
  ["5%", "revenue lift supported by fit recommendations"]
];

const specialties = [
  {
    label: "LLM Inference",
    text: "vLLM support for AWS Neuron across standard inference, multi-modal inference, speculative decoding, quantization, and multi-LoRA."
  },
  {
    label: "Benchmarking Automation",
    text: "CI/CD-friendly pipelines that evaluate frontier models, catch inference regressions, and shorten validation loops."
  },
  {
    label: "Distributed Data Systems",
    text: "Event-driven ingestion, schema validation, staged rollouts, Parquet pipelines, and analytics datasets at production scale."
  }
];

const experience = [
  {
    role: "Machine Learning Engineer II",
    org: "Amazon Annapurna Labs",
    place: "Cupertino, CA",
    period: "July 2024 - Present",
    points: [
      "Extended vLLM support for AWS Trainium and Inferentia using AWS Neuron.",
      "Created validation pipelines for large models, including LLaMA 3.1 405B.",
      "Built vLLM and LLMPerf benchmarking automation that reduced benchmark time by more than 90%.",
      "Designed an upstream workflow that reduced Neuron vLLM release timelines from 60+ days to 2 days.",
      "Enabled FP8 support in PyTorch XLA, reducing memory usage for quantized model results by 50%."
    ]
  },
  {
    role: "Software Development Engineer",
    org: "Amazon Alexa",
    place: "Cupertino, CA",
    period: "Feb 2022 - July 2024",
    points: [
      "Developed a real-time ingestion platform for Alexa Proactive Experiences supporting 30K+ TPS.",
      "Designed version-supported schema validation for uniform event structure.",
      "Implemented staged production rollouts that limited faulty deployments to 1% of traffic.",
      "Reduced monthly costs by 40% by replacing Firehose with a custom Parquet writer for S3.",
      "Managed dataset pipeline dependencies with Apache Airflow."
    ]
  },
  {
    role: "Backend Developer",
    org: "Dresslife GmbH",
    place: "Hannover, Germany",
    period: "Mar 2017 - Dec 2019",
    points: [
      "Engineered an event-driven backend with Apache Kafka, Cassandra, and Elasticsearch.",
      "Built size recommendation logic from customer body-fit signals.",
      "Developed style recommendations with autoencoders, CNN embeddings, and nearest-neighbor retrieval.",
      "Deployed production systems for two German clothing brands."
    ]
  }
];

const projects = [
  {
    name: "vLLM on AWS Neuron",
    type: "GenAI infrastructure",
    detail:
      "Extended vLLM capabilities for Trainium and Inferentia across inference modes, quantization, speculative decoding, and multi-LoRA.",
    tags: ["vLLM", "AWS Neuron", "Trainium", "Inferentia"]
  },
  {
    name: "LLM Benchmarking System",
    type: "Platform automation",
    detail:
      "Integrated vLLM and LLMPerf to evaluate model performance on AWS silicon and reduce developer benchmark effort by more than 90%.",
    tags: ["LLMPerf", "CI/CD", "Python", "Grafana"]
  },
  {
    name: "Neuron Upstream Workflow",
    type: "Open-source release",
    detail:
      "Moved Neuron vLLM enhancements from internal packages to open source faster, cutting release timelines from 60+ days to 2 days.",
    tags: ["Git", "Validation", "Release flow"]
  },
  {
    name: "Alexa Proactive Ingestion",
    type: "Real-time systems",
    detail:
      "Built validation, transformation, dispatch, and analytics pipelines for Alexa Proactive Experiences at 30K+ TPS.",
    tags: ["AWS", "S3", "Parquet", "Athena"]
  },
  {
    name: "Fashion Recommendations",
    type: "Applied ML",
    detail:
      "Built size and style recommendation systems using fit signals, autoencoders, CNN embeddings, Kafka, Cassandra, and Elasticsearch.",
    tags: ["Kafka", "CNNs", "Cassandra", "Search"]
  },
  {
    name: "NLP Bug Search",
    type: "Intern project",
    detail:
      "Developed an NLP-based bug-search tool at Commvault and placed second among 70 interns in the project competition.",
    tags: ["NLP", "Search", "ML", "Python"]
  }
];

const skills = [
  "Python",
  "Java",
  "TypeScript",
  "C++",
  "JavaScript",
  "PyTorch",
  "vLLM",
  "AWS Neuron",
  "Apache Kafka",
  "Docker",
  "Airflow",
  "DynamoDB",
  "Cassandra",
  "Elasticsearch",
  "MySQL",
  "MongoDB",
  "Lambda",
  "S3",
  "Athena",
  "CloudFormation"
];

const education = [
  {
    school: "Rutgers University - New Brunswick",
    degree: "MS in Computer Science, Machine Learning specialization",
    detail:
      "GPA 3.90/4. Part-time lecturer and grader for Data 101 using R. Interned at Commvault and built an NLP bug-search project."
  },
  {
    school: "Manipal University",
    degree: "B.Tech in Computer Science and Engineering",
    detail:
      "Built the software engineering foundation that led into backend systems, ML infrastructure, and production recommendation platforms."
  }
];

const writingItems = [
  {
    title: "My Journey of Choosing a Car",
    text:
      "A long-form decision essay from the earlier site, now summarized inside the SPA as a personal writing sample about tradeoffs, scoring, and taste."
  },
  {
    title: "How I Think",
    text:
      "The same pattern shows up in engineering: compare constraints, make the tradeoffs explicit, and turn subjective preferences into a practical decision."
  }
];

const app = document.querySelector("#app");
const navLinks = document.querySelectorAll("[data-section-link]");
const nav = document.querySelector("#site-nav");
const menuToggle = document.querySelector("[data-menu-toggle]");
const sectionIds = ["home", "experience", "projects", "writing", "contact"];

document.querySelector("[data-year]").textContent = new Date().getFullYear();

function renderHome() {
  return `
    <section class="scroll-section" id="home">
      <div class="hero-view view-grid">
      <div class="hero-copy">
        <p class="eyebrow">${profile.title} at ${profile.company}</p>
        <h1>${profile.name}</h1>
        <p class="hero-summary">${profile.summary}</p>
        <div class="hero-actions">
          <a class="primary-action" href="#projects">Explore Work</a>
          <a class="secondary-action" href="${resumePath}" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
      </div>
      <aside class="portrait-panel">
        <img src="img/profile.jpg" alt="Satyajith Chilappagari headshot">
        <div>
          <span>Current focus</span>
          <strong>LLM inference systems on AWS silicon</strong>
        </div>
      </aside>
      </div>

      <div class="stats-grid" aria-label="Impact metrics">
      ${stats.map(([value, label]) => `
        <article class="stat-card">
          <strong>${value}</strong>
          <span>${label}</span>
        </article>
      `).join("")}
      </div>

      <div class="section-block">
      <div class="section-heading">
        <p class="eyebrow">What I Build</p>
        <h2>Production systems where ML performance meets engineering reliability.</h2>
      </div>
      <div class="card-grid three-col">
        ${specialties.map(item => `
          <article class="info-card">
            <span class="card-index">${item.label}</span>
            <p>${item.text}</p>
          </article>
        `).join("")}
      </div>
      </div>

      <div class="section-block split-panel">
      <div>
        <p class="eyebrow">Toolkit</p>
        <h2>ML, backend, and cloud systems stack.</h2>
      </div>
      <div class="tag-cloud">
        ${skills.slice(0, 16).map(skill => `<span>${skill}</span>`).join("")}
      </div>
      </div>
    </section>
  `;
}

function renderExperience() {
  return `
    <section class="scroll-section" id="experience">
      <div class="page-intro">
      <p class="eyebrow">Experience</p>
      <h1>Recent roles and measurable outcomes.</h1>
      <p>From GenAI infrastructure at Amazon Annapurna Labs to real-time Alexa data systems and applied recommendation engines.</p>
      </div>

      <div class="timeline">
      ${experience.map(job => `
        <article class="timeline-card">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span>${job.period}</span>
            <h2>${job.role}</h2>
            <p class="role-meta">${job.org} | ${job.place}</p>
            <ul>
              ${job.points.map(point => `<li>${point}</li>`).join("")}
            </ul>
          </div>
        </article>
      `).join("")}
      </div>

      <div class="section-block">
      <div class="section-heading">
        <p class="eyebrow">Education</p>
        <h2>Computer science and machine learning foundation.</h2>
      </div>
      <div class="card-grid two-col">
        ${education.map(item => `
          <article class="info-card">
            <span class="card-index">${item.school}</span>
            <h3>${item.degree}</h3>
            <p>${item.detail}</p>
          </article>
        `).join("")}
      </div>
      </div>
    </section>
  `;
}

function renderProjects() {
  return `
    <section class="scroll-section" id="projects">
      <div class="page-intro">
      <p class="eyebrow">Projects</p>
      <h1>Selected engineering work.</h1>
      <p>A focused set of infrastructure, ML platform, backend, and applied AI projects drawn from the resume.</p>
      </div>

      <div class="project-board">
      ${projects.map((project, index) => `
        <article class="project-card">
          <div class="project-topline">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <small>${project.type}</small>
          </div>
          <h2>${project.name}</h2>
          <p>${project.detail}</p>
          <div class="tag-cloud compact">
            ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `).join("")}
      </div>
    </section>
  `;
}

function renderWriting() {
  return `
    <section class="scroll-section" id="writing">
      <div class="page-intro">
      <p class="eyebrow">Writing</p>
      <h1>Clear thinking, written out loud.</h1>
      <p>A small personal corner for long-form decision-making and the tradeoff-heavy thinking that also shows up in engineering work.</p>
      </div>

      <div class="writing-layout">
      <article class="feature-note">
        <span>Personal essay</span>
        <h2>My Journey of Choosing a Car</h2>
        <p>The earlier site had a long car-comparison essay. Rather than keep a separate old page, this SPA preserves it as a writing sample concept: a decision matrix, constraints, observations, and a final call.</p>
      </article>
      <div class="writing-list">
        ${writingItems.map(item => `
          <article class="info-card">
            <span class="card-index">${item.title}</span>
            <p>${item.text}</p>
          </article>
        `).join("")}
      </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="scroll-section" id="contact">
      <div class="page-intro contact-intro">
      <p class="eyebrow">Contact</p>
      <h1>Let us talk about ML infrastructure, LLM inference, and backend systems.</h1>
      <p>Based in ${profile.location}. Best reached through email or LinkedIn.</p>
      </div>

      <div class="contact-grid">
      <a class="contact-card" href="mailto:${profile.email}">
        <span>Email</span>
        <strong>${profile.email}</strong>
      </a>
      <a class="contact-card" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">
        <span>LinkedIn</span>
        <strong>linkedin.com/in/csatyajith</strong>
      </a>
      <a class="contact-card" href="${profile.github}" target="_blank" rel="noopener noreferrer">
        <span>GitHub</span>
        <strong>github.com/csatyajith</strong>
      </a>
      <a class="contact-card" href="${resumePath}" target="_blank" rel="noopener noreferrer">
        <span>Resume</span>
        <strong>Download PDF</strong>
      </a>
      </div>
    </section>
  `;
}

function setActiveSection(sectionId) {
  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.sectionLink === sectionId);
  });
}

function closeMenu() {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function renderPage() {
  app.innerHTML = [
    renderHome(),
    renderExperience(),
    renderProjects(),
    renderWriting(),
    renderContact()
  ].join("");
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    setActiveSection(link.dataset.sectionLink);
    closeMenu();
  });
});

renderPage();

const initialSection = (window.location.hash || "#home").replace("#", "");
setActiveSection(sectionIds.includes(initialSection) ? initialSection : "home");

const sections = sectionIds
  .map(id => document.getElementById(id))
  .filter(Boolean);

requestAnimationFrame(() => {
  const target = document.getElementById(initialSection);

  if (target) {
    target.scrollIntoView();
  }
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveSection(visible.target.id);
    }
  }, {
    rootMargin: "-28% 0px -52% 0px",
    threshold: [0.08, 0.2, 0.4, 0.6]
  });

  sections.forEach(section => observer.observe(section));
}

window.addEventListener("hashchange", () => {
  const nextSection = window.location.hash.replace("#", "");

  if (sectionIds.includes(nextSection)) {
    setActiveSection(nextSection);
  }
});
