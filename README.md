# Workshop Contributors Board

A simple, beginner-friendly website that displays contributor profiles as cards on a modern dark-themed board. Built for the **Git & GitHub Workshop** so students can practice forking, branching, and creating pull requests.

---

## How It Works

1. Each contributor adds a **JSON file** inside the `contributors/` folder.
2. The website **automatically fetches** all JSON files and renders them as cards.
3. A **GitHub Actions workflow** validates and auto-merges valid pull requests.

No one needs to edit `index.html`, `styles.css`, or `script.js`.

---

## How to Contribute

### Step 1 — Fork this Repository

Click the **Fork** button at the top-right corner of this page.

### Step 2 — Clone Your Fork

```bash
git clone https://github.com/<your-username>/Git-Github-Workshop-Demo.git
cd Git-Github-Workshop-Demo
```

### Step 3 — Create a New Branch

```bash
git checkout -b add-<your-name>
```

### Step 4 — Add Your JSON File

Create a new file inside the `contributors/` folder. Name it `<your-name>.json` (lowercase, no spaces).

**Example:** `contributors/darshan.json`

```json
{
  "name": "Darshan",
  "year": "3rd Year",
  "branch": "CSE",
  "favoriteTech": "Blockchain",
  "github": "https://github.com/darshsingh116"
}
```

#### Required Fields

| Field          | Description                        | Example                                |
| -------------- | ---------------------------------- | -------------------------------------- |
| `name`         | Your display name                  | `"Darshan"`                            |
| `year`         | Current year of study              | `"3rd Year"`                           |
| `branch`       | Your branch / department           | `"CSE"`                                |
| `favoriteTech` | A technology you love              | `"Blockchain"`                         |
| `github`       | Full URL to your GitHub profile    | `"https://github.com/darshsingh116"`   |

### Step 5 — Commit and Push

```bash
git add contributors/<your-name>.json
git commit -m "Add <your-name> to contributors"
git push origin add-<your-name>
```

### Step 6 — Create a Pull Request

Go to your fork on GitHub and click **"Compare & pull request"**. Submit it to the original repository.

### Step 7 — Wait for Auto-Merge

The GitHub Actions bot will:
- Validate your JSON file
- Check that no protected files were modified
- Auto-approve and merge your PR if everything is valid

---

## Rules

- **Only add one JSON file** inside `contributors/`.
- **Do not modify** `index.html`, `styles.css`, or `script.js`.
- Make sure your JSON has **all five required fields**.
- Use **valid JSON syntax** (double quotes, no trailing commas).

---

## Project Structure

```
Git-Github-Workshop-Demo/
├── index.html              ← Main HTML page
├── styles.css              ← Dark theme styling
├── script.js               ← Fetches & renders contributor cards
├── contributors/           ← Each student adds their JSON file here
│   └── darshan.json        ← Example contributor
├── .github/
│   └── workflows/
│       ├── auto-merge.yml    ← Auto-validation & merge workflow
│       └── update-index.yml  ← Regenerates contributors/index.json on merge
└── README.md                 ← You are here
```

---

## Live Preview

Once deployed to GitHub Pages, the board automatically shows every contributor whose JSON file is merged into `main`.

To enable GitHub Pages: **Settings → Pages → Source → Deploy from branch → `main` → `/ (root)`**.

---

## Tech Stack

- **HTML** — Page structure
- **CSS** — Dark theme, responsive grid, hover animations
- **Vanilla JavaScript** — Fetches contributor data from GitHub API
- **GitHub Actions** — Automated PR validation and merging
