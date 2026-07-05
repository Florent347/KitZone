/* ============================================================
   KitZone – Static data (clubs, national teams, jerseys)
   ============================================================ */

// Reusable SVG jersey template (color scheme via params)
window.jerseySVG = function (primary, secondary, accent, sleeve) {
  sleeve = sleeve || primary;
  accent = accent || "#ffffff";
  return `
  <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${primary}"/>
        <stop offset="1" stop-color="${secondary}"/>
      </linearGradient>
    </defs>
    <path d="M60 20 L100 40 L140 20 L180 40 L165 80 L140 70 L140 200 Q100 210 60 200 L60 70 L35 80 L20 40 Z" fill="url(#g)" stroke="rgba(0,0,0,.15)" stroke-width="1"/>
    <path d="M60 20 L100 40 L140 20 L130 55 Q100 65 70 55 Z" fill="${sleeve}" opacity=".85"/>
    <circle cx="100" cy="50" r="6" fill="${accent}" opacity=".8"/>
    <rect x="88" y="120" width="24" height="24" fill="${accent}" opacity=".22"/>
  </svg>`;
};

// Crest SVG generator
window.crestSVG = function (label, color1, color2) {
  return `
  <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="c${label}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${color1}"/>
        <stop offset="1" stop-color="${color2}"/>
      </linearGradient>
    </defs>
    <path d="M50 5 L90 20 L90 65 Q90 95 50 105 Q10 95 10 65 L10 20 Z" fill="url(#c${label})" stroke="rgba(255,255,255,.25)" stroke-width="2"/>
    <text x="50" y="62" font-family="Inter, sans-serif" font-size="26" font-weight="900" text-anchor="middle" fill="#fff" letter-spacing="-1">${label}</text>
  </svg>`;
};

window.clubs = [
  {
    id: "chelsea",
    name: "Chelsea",
    league: "Premier League",
    abbr: "CFC",
    c1: "#034694",
    c2: "#022f6b",
    jersey: ["#034694", "#022f6b", "#f5c542"],
  },
  {
    id: "real",
    name: "Real Madrid",
    league: "La Liga",
    abbr: "RMA",
    c1: "#ffffff",
    c2: "#e8ecf3",
    jersey: ["#ffffff", "#e5e9f0", "#F5C542"],
  },
  {
    id: "barca",
    name: "Barcelona",
    league: "La Liga",
    abbr: "FCB",
    c1: "#a50044",
    c2: "#004d98",
    jersey: ["#a50044", "#004d98", "#ffcb05"],
  },
  {
    id: "mancity",
    name: "Manchester City",
    league: "Premier League",
    abbr: "MCI",
    c1: "#6cabdd",
    c2: "#1c2c5b",
    jersey: ["#6cabdd", "#4a89bd", "#ffffff"],
  },
  {
    id: "liverpool",
    name: "Liverpool",
    league: "Premier League",
    abbr: "LFC",
    c1: "#c8102e",
    c2: "#7a0f1e",
    jersey: ["#c8102e", "#8a0f22", "#ffd447"],
  },
  {
    id: "bayern",
    name: "Bayern München",
    league: "Bundesliga",
    abbr: "FCB",
    c1: "#dc052d",
    c2: "#8a0018",
    jersey: ["#dc052d", "#8a0018", "#ffffff"],
  },
  {
    id: "psg",
    name: "Paris Saint-Germain",
    league: "Ligue 1",
    abbr: "PSG",
    c1: "#004170",
    c2: "#001d3a",
    jersey: ["#004170", "#001d3a", "#e30613"],
  },
  {
    id: "juventus",
    name: "Juventus",
    league: "Serie A",
    abbr: "JUV",
    c1: "#000000",
    c2: "#2a2a2a",
    jersey: ["#ffffff", "#111111", "#000000"],
  },
  {
    id: "inter",
    name: "Inter Mailand",
    league: "Serie A",
    abbr: "INT",
    c1: "#0068a8",
    c2: "#001b3f",
    jersey: ["#0a1f44", "#0068a8", "#000000"],
  },
  {
    id: "dortmund",
    name: "Borussia Dortmund",
    league: "Bundesliga",
    abbr: "BVB",
    c1: "#fde100",
    c2: "#f0c000",
    jersey: ["#fde100", "#000000", "#000000"],
  },
];

window.nationalTeams = [
  {
    id: "portugal",
    name: "Portugal",
    continent: "Europe",
    abbr: "POR",
    c1: "#c8102e",
    c2: "#046a38",
    jersey: ["#7a0f1e", "#c8102e", "#F5C542"],
  },
  {
    id: "argentina",
    name: "Argentina",
    continent: "South America",
    abbr: "ARG",
    c1: "#74acdf",
    c2: "#3a7bc2",
    jersey: ["#74acdf", "#ffffff", "#F5C542"],
  },
  {
    id: "brazil",
    name: "Brazil",
    continent: "South America",
    abbr: "BRA",
    c1: "#ffcc00",
    c2: "#009c3b",
    jersey: ["#ffcc00", "#f0b800", "#009c3b"],
  },
  {
    id: "france",
    name: "France",
    continent: "Europe",
    abbr: "FRA",
    c1: "#002395",
    c2: "#001256",
    jersey: ["#002395", "#001256", "#F5C542"],
  },
  {
    id: "england",
    name: "England",
    continent: "Europe",
    abbr: "ENG",
    c1: "#ffffff",
    c2: "#e5e9f0",
    jersey: ["#ffffff", "#e5e9f0", "#c8102e"],
  },
  {
    id: "germany",
    name: "Germany",
    continent: "Europe",
    abbr: "GER",
    c1: "#000000",
    c2: "#2b2b2b",
    jersey: ["#ffffff", "#e5e9f0", "#000000"],
  },
  {
    id: "spain",
    name: "Spain",
    continent: "Europe",
    abbr: "ESP",
    c1: "#aa151b",
    c2: "#7a0f1e",
    jersey: ["#aa151b", "#7a0f1e", "#F5C542"],
  },
  {
    id: "switzerland",
    name: "Switzerland",
    continent: "Europe",
    abbr: "SUI",
    c1: "#d52b1e",
    c2: "#8a1c14",
    jersey: ["#d52b1e", "#8a1c14", "#ffffff"],
  },
  {
    id: "italy",
    name: "Italy",
    continent: "Europe",
    abbr: "ITA",
    c1: "#0068a8",
    c2: "#001b3f",
    jersey: ["#0a3d6b", "#0068a8", "#F5C542"],
  },
  {
    id: "netherlands",
    name: "Netherlands",
    continent: "Europe",
    abbr: "NED",
    c1: "#f36c21",
    c2: "#c25519",
    jersey: ["#f36c21", "#c25519", "#000000"],
  },
];

// Club seasons 2009/10 .. 2026/27
window.clubSeasons = (function () {
  const out = [];
  for (let y = 2026; y >= 2009; y--) out.push(`${y}/${String(y + 1).slice(2)}`);
  return out;
})();

// Country years
window.countryYears = [2026, 2024, 2022, 2021, 2020, 2018, 2016];

// Helpers
window.findClub = (id) => window.clubs.find((c) => c.id === id);
window.findCountry = (id) => window.nationalTeams.find((c) => c.id === id);

// Price rule: newest = 99, older cheaper
window.priceForYear = function (yearNum) {
  const now = 2026;
  const diff = Math.max(0, now - yearNum);
  return Math.max(49, 99 - diff * 2);
};

/* ============================================================
   KitZone – Real jersey image mapping
   ============================================================ */

window.clubImageIds = {
  chelsea: "chelsea",
  real: "madrid",
  barca: "barcelona",
  mancity: "city",
  liverpool: "liverpool",
  bayern: "bayern",
  psg: "psg",
  juventus: "juventus",
  inter: "inter",
  dortmund: "dortmund",
};

window.countryImageIds = {
  portugal: "portugal",
  argentina: "argentina",
  brazil: "brazil",
  france: "france",
  england: "england",
  germany: "germany",
  spain: "spain",
  switzerland: "swiss",
  italy: "italy",
  netherlands: "netherlands",
};

window.getJerseyImage = function (kind, id, season, type) {
  const typeMap = {
    Home: "h",
    Away: "a",
    Third: "3",
  };

  const typeCode = typeMap[type];

  if (kind === "club") {
    const team = window.clubImageIds[id];
    const year = season && season.startsWith("2026") ? "2026" : "2025";

    // Für 2026/27 gibt es aktuell nur Home.
    // Away und Third bleiben professionell als Coming Soon.
    if (year === "2026" && type !== "Home") {
      return null;
    }

    const fileBase = `${team}-${typeCode}-${year}`;

    const customExtensions = {
      "city-h-2026": "avif",
      "dortmund-3-2025": "avif",
      "liverpool-h-2026": "jpg",
    };

    const ext = customExtensions[fileBase] || "webp";

    return `assets/jerseys/club/${fileBase}.${ext}`;
  }

  if (kind === "country") {
    const team = window.countryImageIds[id];
    const fileBase = `${team}-${typeCode}-2026`;

    return `assets/jerseys/country/${fileBase}.webp`;
  }

  return null;
};

window.renderJerseyImage = function (kind, id, season, type, altText) {
  const imagePath = window.getJerseyImage(kind, id, season, type);

  if (!imagePath) {
    return `
      <div class="coming-soon-card">
        <div class="coming-soon-icon">⏳</div>
        <strong>Coming Soon</strong>
        <span>Official kit not released yet</span>
      </div>
    `;
  }

  return `<img class="real-jersey-img" src="${imagePath}" alt="${altText || "Football jersey"}">`;
};
s;
