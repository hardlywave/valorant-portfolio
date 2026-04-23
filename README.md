# Valorant Wikipedia

An interactive web reference guide for Riot Games' **VALORANT**. All content is sourced directly from the **official Valorant database**, so every agent, weapon, map, and skin on the site reflects the real, up-to-date data used by the game itself.

🌐 **Live demo:** [valorant-wikipedia.vercel.app](https://valorant-wikipedia.vercel.app/)
📦 **Repository:** [github.com/hardlywave/valorant-portfolio](https://github.com/hardlywave/valorant-portfolio)

---

## 🎯 About

This is a portfolio / pet project built to practice a full SPA workflow with React + TypeScript: routing, consuming an external REST API, component-driven architecture, responsive layout, and hybrid styling with SCSS and MUI.

The project does not store or hardcode any game information locally. **Every piece of content — agents, abilities, weapons, stats, maps, skins, and artwork — is fetched at runtime directly from the official Valorant database** ([valorant-api.com](https://valorant-api.com/), which mirrors the data Riot Games exposes from the game client). This means the site automatically stays in sync with the game: whenever Riot ships a new agent, weapon, or skin, it shows up here without any code changes.

---

## ✨ Features

- **Agents catalog** — full roster of characters with roles, bios, and ability kits.
- **Weapons** — stats, categories, damage numbers, and fire rate.
- **Maps** — overview of every in-game location with official splash art and minimaps.
- **Skins** — gallery of cosmetic weapon variants.
- **Client-side routing** between pages via `react-router-dom` with no full reloads.
- **Responsive UI** — works cleanly on desktop, tablet, and mobile (`react-responsive`).
- **Game-inspired styling** — dark palette, signature red accents, and custom typography.

---

## 🛠 Tech Stack

**Language & Framework**
- TypeScript
- React 18 (Create React App)

**UI & Styling**
- Material UI (MUI) v5 — component library and icons
- `@mui/x-data-grid` — tables with filtering and sorting
- SCSS (Sass) — custom styles
- styled-components + Emotion
- `@fontsource/roboto`

**Routing & Data**
- React Router DOM v6
- Axios — HTTP client for API requests
- React Hooks (`useState`, `useEffect`, custom hooks)

**Responsiveness & Utilities**
- react-responsive

**Dev Tooling**
- ESLint + Prettier
- Jest + React Testing Library
- `gh-pages` (alternative deployment target)

**Deployment**
- Vercel

---

## 📂 Project Structure

```
valorant-portfolio/
├── public/              # Static assets and index.html
├── src/                 # Application source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route-level pages (agents, weapons, maps, etc.)
│   ├── api/             # Axios instance and Valorant API wrappers
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Global SCSS styles
│   └── types/           # TypeScript types and interfaces
├── tsconfig.json
├── .prettierrc.json
└── package.json
```

---

## 🚀 Running Locally

Requires **Node.js 16+** and npm.

```bash
# 1. Clone the repository
git clone https://github.com/hardlywave/valorant-portfolio.git
cd valorant-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Description |
|---|---|
| `npm start` | Run dev server with hot reload |
| `npm run build` | Create a production build in `build/` |
| `npm test` | Run tests in watch mode |
| `npm run deploy` | Deploy to GitHub Pages via `gh-pages` |

---

## 🔌 Data Source — Official Valorant Database

The entire site is powered by the **official Valorant database** via the public [Valorant API](https://valorant-api.com/). This endpoint mirrors the game client's own asset files, meaning the data is the same information Riot Games uses internally for VALORANT.

What this means in practice:

- ✅ **Authentic data** — all agent kits, weapon stats, and skin artwork come straight from the game.
- ✅ **Always up-to-date** — new patches, agents, and cosmetic releases appear automatically.
- ✅ **No manual content maintenance** — the project has zero hardcoded game data.
- ✅ **No API key required** — the database is publicly available and free to use.

Requests are made with Axios and typed on the client side with TypeScript interfaces that mirror the API response shapes.

---

## 📝 What I Learned

- Structuring a mid-sized React app in TypeScript with strict typing for API responses.
- Handling async requests with Axios and cleanly wiring them into `useEffect`.
- Combining MUI with custom SCSS without style conflicts.
- Setting up client-side routing with nested routes in React Router v6.
- Writing responsive layouts and conditional rendering across breakpoints.
- CI/CD deployment to Vercel straight from the `master` branch.

---

## 👤 Author

**hardlywave**
GitHub: [@hardlywave](https://github.com/hardlywave)

---

> This project is not affiliated with Riot Games. VALORANT, all logos, and artwork are property of Riot Games, Inc.
