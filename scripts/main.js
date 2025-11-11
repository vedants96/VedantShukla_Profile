import { skills } from '../data/skills.js';
import { experience } from '../data/experience.js';
import { projects } from '../data/projects.js';

const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
const themeToggle = document.querySelector('.theme-toggle');
const footerYear = document.getElementById('footer-year');

const hydrateSkills = () => {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = skills
    .map(
      (skill) => `
        <article class="skill-card">
          <h3>${skill.title}</h3>
          <p>${skill.description}</p>
          <ul>
            ${skill.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
};

const hydrateExperience = () => {
  const container = document.getElementById('experience-timeline');
  if (!container) return;
  container.innerHTML = experience
    .map(
      (item) => `
        <article class="timeline-item">
          <h3>${item.role} · ${item.company}</h3>
          <p class="timeline-meta">${item.period}</p>
          <ul>
            ${item.description.map((point) => `<li>${point}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
};

const hydrateProjects = () => {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects
    .map((project) => {
      const tags = project.tags.map((tag) => `<li>${tag}</li>`).join('');
      const links = Object.entries(project.links)
        .map(([type, url]) => {
          const label = type === 'source' ? 'Source' : 'Live Demo';
          return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
        })
        .join('');

      return `
        <article class="project-card">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__description">${project.description}</p>
          <ul class="project-card__tags">${tags}</ul>
          <div class="project-card__links">${links}</div>
        </article>
      `;
    })
    .join('');
};

const initialiseNav = () => {
  if (!navToggle || !navList) return;
  navToggle.addEventListener('click', () => {
    const isOpen = navList.dataset.open === 'true';
    navList.dataset.open = String(!isOpen);
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.dataset.open = 'false';
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
};

const STORAGE_KEY = 'vedantshukla-theme';

const applyTheme = (theme) => {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

const getPreferredTheme = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const initialiseThemeToggle = () => {
  if (!themeToggle) return;
  let theme = getPreferredTheme();
  applyTheme(theme);

  themeToggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  });
};

const initialiseFooterYear = () => {
  if (!footerYear) return;
  footerYear.textContent = new Date().getFullYear();
};

hydrateSkills();
hydrateExperience();
hydrateProjects();
initialiseNav();
initialiseThemeToggle();
initialiseFooterYear();
