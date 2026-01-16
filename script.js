const matchesData = [
  {
    date: "16-01-2026",
    team1: "مصر",
    team2: "السنغال",
    score: "2-1",
    logo1: "egypt.png",
    logo2: "senegal.png"
  },
  {
    date: "17-01-2026",
    team1: "الجزائر",
    team2: "مصر",
    score: "0-0",
    logo1: "algeria.png",
    logo2: "egypt.png"
  },
  {
    date: "18-01-2026",
    team1: "تونس",
    team2: "المغرب",
    score: "1-3",
    logo1: "tunisia.png",
    logo2: "morocco.png"
  }
];

const matchesContainer = document.getElementById("matches");

function getClasses(a, b) {
  if (a > b) return ["win", "lose"];
  if (a < b) return ["lose", "win"];
  return ["draw", "draw"];
}

function renderMatches() {
  matchesContainer.innerHTML = "";

  matchesData.forEach(match => {
    const [s1, s2] = match.score.split("-").map(Number);
    const [c1, c2] = getClasses(s1, s2);

    const div = document.createElement("div");
    div.className = "match";

    div.innerHTML = `
      <div class="match-date">${match.date}</div>
      <div class="teams">
        <div class="team ${c1}">
          <img src="${match.logo1}">
          <div class="team-name">${match.team1}</div>
        </div>

        <div class="score">${match.score}</div>

        <div class="team ${c2}">
          <img src="${match.logo2}">
          <div class="team-name">${match.team2}</div>
        </div>
      </div>
    `;

    matchesContainer.appendChild(div);
  });
}

function filterMatches() {
  const value = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".match");

  cards.forEach(card => {
    const names = card.innerText.toLowerCase();
    card.style.display = names.includes(value) ? "block" : "none";
  });
}

renderMatches();
