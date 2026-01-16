// قائمة المباريات مع الشعارات والنتائج
const matches = [
  { date: "16-01-2026", team1: "مصر", team2: "السنغال", score: "2-1", logo1: "egypt.png", logo2: "senegal.png" },
  { date: "17-01-2026", team1: "الجزائر", team2: "مصر", score: "0-0", logo1: "algeria.png", logo2: "egypt.png" },
  { date: "18-01-2026", team1: "تونس", team2: "المغرب", score: "1-3", logo1: "tunisia.png", logo2: "morocco.png" }
];

const matchesDiv = document.getElementById("matches");

// دالة لتحديد الفائز والخاسر لكل مباراة
function getResultClass(score1, score2) {
  if (score1 > score2) return ["win", "lose"];
  if (score1 < score2) return ["lose", "win"];
  return ["draw", "draw"];
}

// نضيف كل مباراة للصفحة
matches.forEach(match => {
  const matchElement = document.createElement("div");
  matchElement.classList.add("match");

  const [score1, score2] = match.score.split("-").map(Number);
  const [team1Class, team2Class] = getResultClass(score1, score2);

  matchElement.innerHTML = `
    <div class="match-date">${match.date}</div>
    <div class="teams">
      <div class="team ${team1Class}">
        <img src="${match.logo1}" alt="${match.team1}" class="logo">
        <span class="team-name">${match.team1}</span>
      </div>
      <div class="score">${match.score}</div>
      <div class="team ${team2Class}">
        <img src="${match.logo2}" alt="${match.team2}" class="logo">
        <span class="team-name">${match.team2}</span>
      </div>
    </div>
  `;

  matchesDiv.appendChild(matchElement);
});

// دالة فلتر البحث
function filterMatches() {
  const filter = document.getElementById("searchInput").value.toLowerCase();
  const matchElements = document.querySelectorAll(".match");

  matchElements.forEach(match => {
    const teamNames = match.querySelectorAll(".team-name");
    let show = false;

    teamNames.forEach(name => {
      if(name.textContent.toLowerCase().includes(filter)) {
        show = true;
      }
    });

    match.style.display = show ? "block" : "none";
  });
}
