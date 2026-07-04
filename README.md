# Leonard Law — Portfolio Website

A personal portfolio site built with HTML, CSS, and JavaScript, with the blog
powered by Jekyll — which GitHub Pages builds natively, no extra setup or
npm required.

---

## File Structure

```
portfolio/
├── index.html              ← Main page (About, Projects, Blog teaser, Contact)
├── _config.yml             ← Site title/description, permalink settings
├── _layouts/
│   ├── default.html        ← Shared page chrome (head, nav, footer)
│   └── post.html           ← Blog post layout (title, date, body)
├── _posts/
│   ├── 2026-04-22-post-1.md  ← Blog posts as Markdown + front matter
│   └── 2026-05-13-post-2.md
├── blog/
│   └── index.html           ← Blog index page — auto-lists every post
├── assets/
│   ├── css/style.css       ← All styling (unchanged by the Jekyll conversion)
│   ├── js/main.js          ← Mobile nav + scroll behaviour
│   └── images/
│       └── profile-placeholder.svg  ← Replace with your real photo
├── Gemfile                 ← For local preview only (`bundle exec jekyll serve`)
└── README.md               ← This file
```

---

## How to Update the Site

### Add a New Blog Post

1. Open the `_posts/` folder
2. Copy an existing post (e.g. `2026-05-13-post-2.md`) and rename it to
   `YYYY-MM-DD-your-post-slug.md` — the date becomes part of the post's date,
   and the slug becomes its URL: `/blog/your-post-slug.html`
3. Update the front matter at the top of the file:
   - `title` — the post title
   - `date` — must match the date in the filename
   - `description` — one sentence, used for the page's meta description
   - `excerpt` — the one-line summary shown on the blog index and homepage
   - `read_time` — estimated reading time (roughly 200 words per minute)
4. Replace the body below the `---` with your post in Markdown (`##` for
   headings, blank lines between paragraphs, `- ` for bullet lists, `> ` for
   blockquotes)
5. Save and deploy (see Deploying below) — the new post automatically
   appears on the blog index page (`/blog/`) and the homepage teaser
   (newest 2 posts), newest first. No other files need editing.

---

### Add a New Project Card

1. Open `index.html` and find the **Projects** section (`<section id="projects">`)
2. Find the `<div class="projects-grid">` block
3. Copy one of the existing `<article class="card">` blocks
4. Update:
   - `<h3 class="card-title">` — project name
   - `<p class="card-description">` — what it does
   - `<span class="tag">` — relevant technology tags
   - `<a href="#">` — link to your project (GitHub, demo, etc.)
5. Save and deploy

---

### Update Your About Me Text

1. Open `index.html`
2. Find `<section id="about">`
3. Edit the three `<p>` paragraphs inside `.about-bio`
4. Save and deploy

---

### Replace Your Profile Photo

1. Prepare your photo: square crop, at least 500×500px
2. Save it as `assets/images/profile.jpg` (use lowercase, no spaces)
3. Open `index.html` and find the `<img>` tag inside `.about-photo`
4. Change `src="assets/images/profile-placeholder.svg"` to `src="assets/images/profile.jpg"`
5. Save and deploy

---

### Deploy to GitHub Pages

After making any changes, run these three commands in your terminal from the `portfolio/` folder:

```bash
git add .
git commit -m "Brief description of what you changed"
git push
```

Your site will update within 1–2 minutes at `https://leonard-law.github.io`.

---

## First-Time GitHub Pages Setup

If you haven't set up GitHub Pages yet:

1. Create a new GitHub repository named exactly: `leonard-law.github.io`
2. In the `portfolio/` folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git remote add origin https://github.com/leonard-law/leonard-law.github.io.git
   git push -u origin main
   ```
3. Go to your repo on GitHub → **Settings** → **Pages**
4. Under **Source**, select: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)` → **Save**
5. Your site will be live at `https://leonard-law.github.io` within a few minutes

---

## Tips

- **All file names must be lowercase** — GitHub Pages runs on Linux, which is case-sensitive. `Style.css` and `style.css` are different files.
- **Test locally before pushing** — because the homepage and blog now use Jekyll's `{% for %}` templating, opening `index.html` directly in a browser won't render the blog teaser correctly (you'll see the raw Liquid tags). Install Ruby + Jekyll and run `bundle exec jekyll serve`, then check `http://localhost:4000`, or push to a branch and preview the GitHub Pages build before merging to `main`.
- **Blog post filenames** — always `YYYY-MM-DD-slug.md` in `_posts/`. The date must be valid and match the front matter `date`.
- **Updating the footer year** — the footer in `index.html` and `_layouts/default.html` includes `© 2026`. Update both each January.
