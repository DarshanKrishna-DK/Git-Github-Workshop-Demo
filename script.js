/*
  script.js — Workshop Contributors Board
  ─────────────────────────────────────────
  Reads contributors/index.json to get the list of contributor files,
  then fetches each JSON file and renders a profile card.

  How it works:
    1. Fetch contributors/index.json (an array of filenames).
    2. Fetch each contributor JSON file using a relative path.
    3. Validate required fields and render a card for each.
*/

// ── DOM Reference ────────────────────────────────────
const grid = document.getElementById("contributors-grid");

// ── Create a card element from contributor data ──────
function createCard(data) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${escapeHTML(data.name)}</h2>
    <div class="info">
      <span><span class="label">Year</span> ${escapeHTML(data.year)}</span>
      <span><span class="label">Branch</span> ${escapeHTML(data.branch)}</span>
      <span><span class="label">Fav Tech</span> ${escapeHTML(data.favoriteTech)}</span>
    </div>
    <a class="github-link" href="${escapeHTML(data.github)}" target="_blank" rel="noopener noreferrer">
      View GitHub Profile
    </a>
  `;

  return card;
}

// ── Escape HTML to prevent XSS ──────────────────────
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ── Show an empty state message ─────────────────────
function showEmpty(message) {
  grid.innerHTML = `<div class="empty-state">${message}</div>`;
}

// ── Main: Fetch contributors and render cards ────────
async function loadContributors() {
  try {
    // Step 1 — Fetch the index file that lists all contributor filenames
    const indexResponse = await fetch("contributors/index.json");

    if (!indexResponse.ok) {
      showEmpty("Could not load contributors list. Check back later!");
      return;
    }

    const fileNames = await indexResponse.json();

    if (!Array.isArray(fileNames) || fileNames.length === 0) {
      showEmpty("No contributors yet. Be the first to add yours!");
      return;
    }

    // Step 2 — Fetch each contributor JSON file
    const fetchPromises = fileNames.map(async (fileName) => {
      try {
        const res = await fetch(`contributors/${fileName}`);
        if (!res.ok) return null;
        const data = await res.json();

        // Validate: make sure all required fields exist
        if (data.name && data.year && data.branch && data.favoriteTech && data.github) {
          return data;
        }
        return null;
      } catch {
        return null;
      }
    });

    const contributors = (await Promise.all(fetchPromises)).filter(Boolean);

    if (contributors.length === 0) {
      showEmpty("No valid contributor files found.");
      return;
    }

    // Step 3 — Clear the grid and render cards
    grid.innerHTML = "";
    contributors.forEach((contributor) => {
      grid.appendChild(createCard(contributor));
    });
  } catch {
    showEmpty("Something went wrong while loading contributors.");
  }
}

// ── Start ────────────────────────────────────────────
loadContributors();
