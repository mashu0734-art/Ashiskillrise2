# Ashiskillrise — Learn, Practice & Grow

> **Tagline:** “Learn New Skills. Build Your Future.”

Ashiskillrise is a complete, modern, mobile-first educational website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**, architected specifically for **Cloudflare Workers with Static Assets** and **Cloudflare D1 (SQLite)**.

---

## Architecture Overview

```
├── public/                 # Static assets, sitemap.xml, robots.txt
├── src/                    # Frontend React SPA
│   ├── assets/images/      # Generated high-resolution course & hero images
│   ├── components/         # Navbar, Footer, CourseCard, SearchModal, DashboardLayout
│   ├── context/            # AuthContext, ThemeContext
│   ├── data/               # 60 complete courses across 6 core domains & 6 learning paths
│   ├── lib/                # API client with seamless Cloudflare / offline fallback
│   ├── pages/              # Homepage, Catalog, Detail, LessonViewer, LearningPaths, etc.
│   └── App.tsx             # Routing & application shell
├── worker/                 # Cloudflare Worker API backend
│   ├── index.ts            # Worker fetch entry point & API route handlers
│   └── lib/                # Web Crypto JWT authentication, CORS handling
├── migrations/             # Cloudflare D1 database migrations
│   └── 0001_initial.sql    # 13 tables, performance indexes, and initial seeds
├── wrangler.jsonc          # Cloudflare deployment configuration
├── .dev.vars.example       # Local development secrets template
├── .env.example            # Public frontend environment template
└── package.json            # Scripts for local dev, migrations, and deployment
```

---

## 1. Prerequisites

Before getting started, make sure you have:
- **Node.js**: v18.0.0 or later installed.
- **npm**: v9.0.0 or later.
- **Cloudflare Account**: A free or paid Cloudflare account ([dash.cloudflare.com](https://dash.cloudflare.com)).
- **Cloudflare Wrangler CLI**: Installed locally as a devDependency in this project (`npx wrangler`).

---

## 2. Local Development

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Local Environment Variables
Copy `.dev.vars.example` to `.dev.vars`:
```bash
cp .dev.vars.example .dev.vars
```

Edit `.dev.vars` and supply a secure 32+ character random string for `JWT_SECRET`:
```bash
JWT_SECRET="your_secure_random_string_min_32_characters_here"
APP_URL="http://localhost:3000"
```

### Step 3: Run the Vite Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Instant Demo Access**: You can sign in immediately using:
> - **Email:** `learner@ashiskillrise.org`
> - **Password:** `demo123`
> Or use the 1-click **"Quick Demo Login"** button on `/login`.

---

## 3. Cloudflare D1 Database Setup

Ashiskillrise uses **Cloudflare D1**, a fast, distributed serverless SQLite database.

### Step 1: Log in to Cloudflare via Wrangler
```bash
npx wrangler login
```
This opens your browser to authorize Wrangler with your Cloudflare account.

### Step 2: Create the D1 Database
Run the following command in your terminal:
```bash
npx wrangler d1 create ashiskillrise-db
```

Wrangler will output something like:
```text
✅ Successfully created DB 'ashiskillrise-db'!

[[d1_databases]]
binding = "DB"
database_name = "ashiskillrise-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

### Step 3: Connect Database Binding in `wrangler.jsonc`
Open `wrangler.jsonc` and replace `YOUR_D1_DATABASE_ID_HERE` with the actual `database_id` generated in Step 2:

```jsonc
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "ashiskillrise-db",
    "database_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" // <- Replace with your real D1 ID
  }
]
```

### Step 4: Apply Database Migrations

#### A. Apply Migrations Locally (for local testing):
```bash
npm run db:migrate:local
```
*(Executes `wrangler d1 execute ashiskillrise-db --local --file=./migrations/0001_initial.sql`)*

#### B. Apply Migrations to Production (Remote D1):
```bash
npm run db:migrate:prod
```
*(Executes `wrangler d1 execute ashiskillrise-db --remote --file=./migrations/0001_initial.sql`)*

---

## 4. Production Secrets Configuration

Set your production JWT secret in Cloudflare using Wrangler:
```bash
npx wrangler secret put JWT_SECRET
```
When prompted, paste your secret key (minimum 32 characters).

---

## 5. Building & Deploying to Cloudflare

### Step 1: Validate TypeScript & Build Frontend
```bash
npm run typecheck
npm run build
```
This produces the optimized production bundle inside `./dist`.

### Step 2: Deploy Application
```bash
npm run deploy
```
*(Executes `npm run build && wrangler deploy`)*

Wrangler will upload your assets and Worker code to Cloudflare's global edge network and provide your live URL (e.g., `https://ashiskillrise.<your-subdomain>.workers.dev`).

---

## 6. Connecting a Custom Domain

To bind your custom domain (e.g. `learn.yourdomain.com` or `ashiskillrise.org`):

1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Navigate to **Workers & Pages** > **ashiskillrise**.
3. Click on the **Settings** tab > **Domains & Routes**.
4. Click **Add** > **Custom Domain**.
5. Enter your domain or subdomain (e.g., `courses.example.com`).
6. Cloudflare will automatically provision SSL certificates and route traffic to your Worker and Static Assets.

---

## 7. Troubleshooting & Common Questions

### Q1: Client routes show 404 on page refresh in production
**Solution:** Ensure `wrangler.jsonc` includes:
```jsonc
"assets": {
  "directory": "./dist",
  "binding": "ASSETS",
  "not_found_handling": "single-page-application"
}
```
`not_found_handling: "single-page-application"` instructs Cloudflare to serve `index.html` for client-side React routes (`/courses`, `/dashboard`, etc.).

### Q2: `D1_ERROR: no such table: users`
**Solution:** Run the database migration on remote:
```bash
npm run db:migrate:prod
```

### Q3: `Error: No D1 Database found with ID`
**Solution:** Check that the `database_id` in `wrangler.jsonc` matches the ID generated by `npx wrangler d1 create ashiskillrise-db`.

---

## 8. Part 1 Verification Summary

- [x] **Frontend:** React 19 + TypeScript + Vite + Tailwind CSS with responsive mobile-first layouts.
- [x] **Top Navigation:** 3-zone contract with brand wordmark, clean links, search modal, and theme toggle.
- [x] **Course Catalog:** 10 comprehensive digital courses with filtering by category, difficulty, pricing, and language.
- [x] **Course Detail:** Learning objectives, curriculum outline, instructor profiles, and enrollment actions.
- [x] **Lesson Viewer:** Distraction-free reading, video demo stage, practical exercise sandbox, interactive quiz check, and personal notes.
- [x] **Learning Paths:** 6 curated career tracks with ordered courses and target roles.
- [x] **Student Dashboard:** Overview, enrolled courses, progress tracking, milestones, bookmarks, and profile settings.
- [x] **Authentication:** Web Crypto JWT session management with demo quick-login.
- [x] **Cloudflare Ready:** `worker/index.ts`, `wrangler.jsonc`, and D1 migration `migrations/0001_initial.sql`.
- [x] **SEO:** OpenGraph metadata, `robots.txt`, and `sitemap.xml`.


---

## Quick deployment notes (Cloudflare)

**This project contains React/TypeScript source files, not a ready-to-upload static build.**
Do not upload the project ZIP directly to Cloudflare's "Upload your static files" flow.
That uploader expects already-built HTML/CSS/JavaScript files and does not compile `.tsx`.

### Recommended: deploy through GitHub (full Worker + frontend)

1. Upload this project folder to a GitHub repository. Keep `package.json`, `vite.config.ts`,
   `wrangler.jsonc`, `worker/`, `src/`, `public/`, and `migrations/` at the repository root.
2. In Cloudflare Dashboard, open **Workers & Pages → Create application → Workers** and choose
   the Git/repository deployment option (the exact label may vary).
3. Connect the repository and configure the build command as `npm run build`.
4. The output directory is `dist`. The Wrangler configuration deploys the Worker entry point
   at `worker/index.ts` and serves the built frontend from `dist`.
5. Add a secret named `JWT_SECRET` in the Worker settings before using account features.
   Use a unique random value of at least 32 characters; do not publish it in source control.

### Important limitations in this quick-start configuration

- The placeholder D1 database binding has been removed so a missing database ID will not block
  the first deployment. The Worker has in-memory demo fallbacks when D1 is not bound.
- Without a configured D1 database and applied migration, user accounts/progress are not
  persistent across Worker instances or restarts. This is suitable only for a preview/demo.
- For production use, create a Cloudflare D1 database, apply `migrations/0001_initial.sql`,
  and add its real database ID to `wrangler.jsonc` before deploying.
- A successful build/deployment has **not** been verified in this environment because dependency
  installation did not finish. Run `npm install`, then `npm run build` and fix any reported
  errors before deploying.

### Local build commands

```bash
npm install
npm run typecheck
npm run build
npm run deploy
```
