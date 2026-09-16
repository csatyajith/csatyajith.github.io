const resumePath = "assets/Satyajith%20Chilappagari%20Resume%20-%20Sep%2026.pdf";

const profile = {
  name: "Satyajith Chilappagari",
  title: "Machine Learning Engineer II",
  company: "Amazon Annapurna Labs",
  location: "San Jose, California",
  email: "csatyajith@gmail.com",
  linkedin: "https://www.linkedin.com/in/csatyajith/",
  github: "https://github.com/csatyajith",
  awsGithub: "https://github.com/aws-satyajith",
  summary:
    "I build production ML infrastructure for large-model inference across AWS Neuron, vLLM, Trainium, and Inferentia, with recent work in async scheduling, speculative decoding, disaggregated inference, release workflows, and benchmarking automation."
};

const stats = [
  ["20-50%", "TPOT reduction from async scheduling on AWS Neuron"],
  ["~47%", "device execution time reduction for GPT-OSS draft model"],
  ["7", "vLLM-Neuron releases shipped from 0.2.0 to 0.5.3"],
  ["90%", "less developer time spent on LLM benchmarks"],
  ["6 weeks to 1", "validation cycle reduction for benchmark reviews"],
  ["30K+", "TPS supported by Alexa ingestion systems"]
];

const specialties = [
  {
    label: "Async LLM Serving",
    text: "Async scheduling and execution on AWS Neuron without per-token CPU-device round trips.",
    link: ["Design doc", "https://awsdocs-neuron.readthedocs-hosted.com/en/latest/vllm-neuron/docs/design/vllm/async-scheduling-and-async-execution.html"]
  },
  {
    label: "Speculative Decoding",
    text: "EAGLE3 draft models, data-parallel layers, and fused kernels for faster device execution."
  },
  {
    label: "vLLM Integration",
    text: "Trainium and Inferentia support for multimodal inference, quantization, and multi-LoRA.",
    link: ["Merged PRs", "https://github.com/vllm-project/vllm/pulls?q=is:pr+is:merged+author:aws-satyajith"]
  },
  {
    label: "Upstream Releases",
    text: "Workflows that bring AWS Neuron features from internal packages into open-source vLLM releases.",
    link: ["Releases", "https://github.com/vllm-project/vllm-neuron/releases?page=1#release-0.5.3"]
  },
  {
    label: "Benchmark Automation",
    text: "vLLM and LLMPerf pipelines, regression checks, and isolated prefill/decode benchmarks."
  },
  {
    label: "Real-Time Ingestion",
    text: "Event validation, transformation, dispatch, and analytics pipelines for Alexa Proactive Experiences."
  }
];

const experience = [
  {
    role: "Machine Learning Engineer II",
    org: "Amazon Annapurna Labs",
    place: "Cupertino, CA",
    period: "July 2024 - Present",
    points: [
      "Owned async scheduling on AWS Neuron end to end, eliminating per-token CPU-device round trips and cutting TPOT by 20-50% across models.",
      "Optimized EAGLE3 speculative decoding draft models with data-parallel support for the LM head, embedding, and MLP layers.",
      "Built a fused kernel for the GPT-OSS draft model, cutting device execution time by about 47%.",
      "Extended vLLM support for Trainium and Inferentia across standard inference, multimodal inference, speculative decoding, quantization, and multi-LoRA.",
      "Built automated LLM benchmarking and regression pipelines with vLLM and LLMPerf, cutting benchmarking time by 90%+ and validation cycles from 6 weeks to 1.",
      "Implemented isolated prefill and decode benchmarking for disaggregated inference, improving prioritization and reporting across the organization.",
      "Designed an upstreaming workflow for AWS Neuron vLLM and the vLLM-Neuron plugin, cutting release timelines from 60+ days to 2 days and personally shipping 7 releases."
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
      "Reduced monthly costs by 40% by replacing Firehose with a custom Parquet writer for S3."
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

const skills = [
  "Python",
  "Java",
  "C++",
  "TypeScript",
  "PyTorch",
  "vLLM",
  "AWS Neuron",
  "AWS Neuron SDK",
  "Trainium",
  "Inferentia",
  "Speculative decoding",
  "EAGLE3",
  "Async scheduling",
  "Disaggregated inference",
  "LLMPerf",
  "Custom kernel development",
  "Apache Kafka",
  "Docker",
  "DynamoDB",
  "Cassandra",
  "Elasticsearch",
  "Lambda",
  "S3",
  "Athena",
  "Kinesis",
  "Grafana"
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

const app = document.querySelector("#app");
const navLinks = document.querySelectorAll("[data-section-link]");
const nav = document.querySelector("#site-nav");
const menuToggle = document.querySelector("[data-menu-toggle]");
const sectionIds = ["home", "build", "experience", "contact"];

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
          <a class="primary-action" href="#build">Explore Work</a>
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
    </section>
  `;
}

function renderBuild() {
  return `
    <section class="scroll-section" id="build" aria-labelledby="build-heading">
      <div class="section-heading">
        <h2 id="build-heading">What I build</h2>
      </div>
      <div class="specialty-grid">
        ${specialties.map(item => `
          <article class="specialty-card">
            <h3>${item.label}</h3>
            <p>${item.text}</p>
            ${item.link ? `<a href="${item.link[1]}" target="_blank" rel="noopener noreferrer">${item.link[0]}</a>` : ""}
          </article>
        `).join("")}
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
      <h2>Recent roles and measurable outcomes.</h2>
      <p>From GenAI infrastructure at Amazon Annapurna Labs to real-time Alexa data systems and applied recommendation engines.</p>
      </div>

      <div class="timeline">
      ${experience.map(job => `
        <article class="timeline-card">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span>${job.period}</span>
            <h3>${job.role}</h3>
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

function renderContact() {
  return `
    <section class="scroll-section" id="contact">
      <div class="page-intro contact-intro">
      <p class="eyebrow">Contact</p>
      <h2>Let us talk about ML infrastructure, LLM inference, and backend systems.</h2>
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
      <a class="contact-card" href="${profile.awsGithub}" target="_blank" rel="noopener noreferrer">
        <span>AWS GitHub</span>
        <strong>github.com/aws-satyajith</strong>
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
    renderBuild(),
    renderExperience(),
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
