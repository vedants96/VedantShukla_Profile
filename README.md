# Vedant Shukla — Portfolio Website

A modern, responsive single-page portfolio designed to showcase Vedant Shukla's experience as a data scientist. The site highlights key skills, projects, and professional history while offering quick access to a downloadable resume and contact information.

## ✨ Features

- **Hero introduction** with quick stats and call-to-action buttons.
- **Dynamic skills, experience, and project sections** hydrated from structured data files for easy editing.
- **Responsive layout** that works beautifully on desktops, tablets, and phones.
- **Accessible navigation** with skip links, semantic markup, and keyboard-friendly controls.
- **Theme toggle** that respects the visitor's preferred color scheme and persists locally.
- **Resume download** via `/assets/Vedant_Shukla_Resume.pdf` (placeholder provided).

## 🗂 Project structure

```
.
├── assets/
│   └── Vedant_Shukla_Resume.pdf   # Replace with your latest resume
├── data/
│   ├── experience.js              # Experience timeline data
│   ├── projects.js                # Projects showcased on the site
│   └── skills.js                  # Skill categories and highlights
├── index.html                     # Main landing page
├── scripts/
│   └── main.js                    # UI interactions + data hydration
└── styles/
    └── main.css                   # Styling for the entire site
```

Add a screenshot of the site (recommended size 1200×630) if you plan to use visuals in the README or social previews.

## 🚀 Getting started locally

1. Clone the repository:
   ```bash
   git clone git@github.com:YOUR_GITHUB_USERNAME/VedantShukla_Profile.git
   cd VedantShukla_Profile
   ```
2. Open `index.html` directly in your browser **or** serve it locally (recommended):
   ```bash
   python -m http.server 3000
   ```
3. Visit <http://localhost:3000> to explore the site.

## 🧩 Customisation guide

- **Update resume**: Replace `assets/Vedant_Shukla_Resume.pdf` with your latest PDF.
- **Edit personal info**: Adjust hero text, contact links, and stats directly inside `index.html`.
- **Modify skills, experience, or projects**: Edit the respective arrays in `data/*.js`. The UI will update automatically.
- **Tweak styling**: All styles live in `styles/main.css`. Variables at the top of the file make it easy to adjust colors and spacing.

## 🌐 Deploying to GitHub Pages

1. Commit your changes and push to GitHub.
2. In your repository settings, enable **GitHub Pages** and select the `main` branch with the `/ (root)` directory.
3. Your portfolio will be available at `https://<username>.github.io/VedantShukla_Profile/`.

> **Tip:** Create a custom domain (e.g., `vedantshukla.dev`) and configure it under GitHub Pages for a polished finish.

## 🤝 Contributing

This project is personal, but if you spot improvements or accessibility fixes, feel free to open a pull request or issue.

## 📄 License

MIT License. You're welcome to fork, adapt, and share with attribution.
