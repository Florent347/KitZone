/* ============================================================
   KitZone – Static data
   ============================================================ */

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

window.clubSeasons = ["2026/27", "2025/26"];
window.countryYears = [2026];

window.findClub = (id) => window.clubs.find((club) => club.id === id);
window.findCountry = (id) =>
  window.nationalTeams.find((team) => team.id === id);

/* ============================================================
   Image mapping
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

/* ============================================================
   Logo mapping
   ============================================================ */

window.clubLogoFiles = {
  chelsea: "chelsea.webp",
  real: "madrid.png",
  barca: "barcelona.png",
  mancity: "city.png",
  liverpool: "liverpool.png",
  bayern: "bayern.png",
  psg: "psg.png",
  juventus: "juventus.png",
  inter: "inter.png",
  dortmund: "dortmund.png",
};

window.countryLogoFiles = {
  portugal: "portugal.png",
  argentina: "argentina.png",
  brazil: "brazil.png",
  france: "france.png",
  england: "england.png",
  germany: "germany.png",
  spain: "spain.png",
  switzerland: "swiss.png",
  italy: "italy.png",
  netherlands: "netherlands.png",
};

window.getLogoImage = function (kind, id) {
  if (kind === "club") {
    const file = window.clubLogoFiles[id];
    return file ? `assets/logos/club/${file}` : null;
  }

  if (kind === "country") {
    const file = window.countryLogoFiles[id];
    return file ? `assets/logos/country/${file}` : null;
  }

  return null;
};

window.renderLogo = function (kind, item) {
  const logoPath = window.getLogoImage(kind, item.id);
  const fallback = window.crestSVG(item.abbr, item.c1, item.c2);

  if (!logoPath) return fallback;

  return `
    <img class="team-logo-img" src="${logoPath}" alt="${item.name} logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
    <span class="logo-fallback" style="display:none">${fallback}</span>
  `;
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

    if (year === "2026" && type !== "Home") {
      return null;
    }

    const fileBase = `${team}-${typeCode}-${year}_no_bg`;
    return `assets/jerseys/club/${fileBase}.png`;
  }

  if (kind === "country") {
    const team = window.countryImageIds[id];
    const fileBase = `${team}-${typeCode}-2026_no_bg`;
    return `assets/jerseys/country/${fileBase}.png`;
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

/* ============================================================
   Official prices with original currencies
   ============================================================ */

window.clubPrices = {
  chelsea: {
    "2025/26": {
      Home: { value: 115, currency: "USD" },
      Away: { value: 113, currency: "USD" },
      Third: { value: 115, currency: "USD" },
    },
    "2026/27": {
      Home: { value: 121, currency: "USD" },
    },
  },

  real: {
    "2025/26": {
      Home: { value: 110, currency: "CHF" },
      Away: { value: 110, currency: "CHF" },
      Third: { value: 110, currency: "CHF" },
    },
    "2026/27": {
      Home: { value: 110, currency: "CHF" },
    },
  },

  barca: {
    "2025/26": {
      Home: { value: 115, currency: "CHF" },
      Away: { value: 115, currency: "CHF" },
      Third: { value: 115, currency: "CHF" },
    },
    "2026/27": {
      Home: { value: 115, currency: "CHF" },
    },
  },

  mancity: {
    "2025/26": {
      Home: { value: 100, currency: "EUR" },
      Away: { value: 100, currency: "EUR" },
      Third: { value: 100, currency: "EUR" },
    },
    "2026/27": {
      Home: { value: 100, currency: "EUR" },
    },
  },

  liverpool: {
    "2025/26": {
      Home: { value: 85, currency: "GBP" },
      Away: { value: 85, currency: "GBP" },
      Third: { value: 85, currency: "GBP" },
    },
    "2026/27": {
      Home: { value: 85, currency: "GBP" },
    },
  },

  bayern: {
    "2025/26": {
      Home: { value: 100, currency: "EUR" },
      Away: { value: 100, currency: "EUR" },
      Third: { value: 100, currency: "EUR" },
    },
    "2026/27": {
      Home: { value: 100, currency: "EUR" },
    },
  },

  psg: {
    "2025/26": {
      Home: { value: 115, currency: "USD" },
      Away: { value: 115, currency: "USD" },
      Third: { value: 115, currency: "USD" },
    },
    "2026/27": {
      Home: { value: 126, currency: "USD" },
    },
  },

  juventus: {
    "2025/26": {
      Home: { value: 100, currency: "EUR" },
      Away: { value: 100, currency: "EUR" },
      Third: { value: 100, currency: "EUR" },
    },
    "2026/27": {
      Home: { value: 110, currency: "CHF" },
    },
  },

  inter: {
    "2025/26": {
      Home: { value: 84.26, currency: "GBP" },
      Away: { value: 84.26, currency: "GBP" },
      Third: { value: 84.05, currency: "GBP" },
    },
    "2026/27": {
      Home: { value: 92.45, currency: "GBP" },
    },
  },

  dortmund: {
    "2025/26": {
      Home: { value: 100, currency: "EUR" },
      Away: { value: 100, currency: "EUR" },
      Third: { value: 100, currency: "EUR" },
    },
    "2026/27": {
      Home: { value: 100, currency: "EUR" },
    },
  },
};

window.countryPrices = {
  portugal: {
    Home: { value: 125, currency: "CHF" },
    Away: { value: 125, currency: "CHF" },
  },
  argentina: {
    Home: { value: 110, currency: "CHF" },
    Away: { value: 110, currency: "CHF" },
  },
  brazil: {
    Home: { value: 125, currency: "CHF" },
    Away: { value: 125, currency: "CHF" },
  },
  france: {
    Home: { value: 125, currency: "CHF" },
    Away: { value: 125, currency: "CHF" },
  },
  england: {
    Home: { value: 125, currency: "CHF" },
    Away: { value: 125, currency: "CHF" },
  },
  germany: {
    Home: { value: 110, currency: "CHF" },
    Away: { value: 110, currency: "CHF" },
  },
  spain: {
    Home: { value: 110, currency: "CHF" },
    Away: { value: 110, currency: "CHF" },
  },
  switzerland: {
    Home: { value: 110, currency: "CHF" },
    Away: { value: 110, currency: "CHF" },
  },
  italy: {
    Home: { value: 110, currency: "CHF" },
    Away: { value: 110, currency: "CHF" },
  },
  netherlands: {
    Home: { value: 125, currency: "CHF" },
    Away: { value: 125, currency: "CHF" },
  },
};

window.getJerseyPrice = function (kind, id, season, type) {
  if (kind === "club") {
    return (
      window.clubPrices?.[id]?.[season]?.[type] || {
        value: 95,
        currency: "CHF",
      }
    );
  }

  return (
    window.countryPrices?.[id]?.[type] || {
      value: 110,
      currency: "CHF",
    }
  );
};

/* ============================================================
   Manufacturers
   ============================================================ */

window.manufacturers = {
  club: {
    chelsea: "Nike",
    real: "adidas",
    barca: "Nike",
    mancity: "Puma",
    liverpool: "adidas",
    bayern: "adidas",
    psg: "Nike",
    juventus: "adidas",
    inter: "Nike",
    dortmund: "Puma",
  },

  country: {
    portugal: "Puma",
    argentina: "adidas",
    brazil: "Nike",
    france: "Nike",
    england: "Nike",
    germany: "adidas",
    spain: "adidas",
    switzerland: "Puma",
    italy: "adidas",
    netherlands: "Nike",
  },
};

window.getManufacturer = function (kind, id) {
  return window.manufacturers?.[kind]?.[id] || "Unknown";
};

/* ============================================================
   Currency switcher
   ============================================================ */

window.exchangeRatesToCHF = {
  CHF: 1,
  USD: 0.89,
  EUR: 0.93,
  GBP: 1.08,
  ILS: 0.27,
  JPY: 0.0057,
};

window.currencySymbols = {
  CHF: "CHF",
  USD: "$",
  EUR: "€",
  GBP: "£",
  ILS: "₪",
  JPY: "¥",
};

window.getSelectedCurrency = function () {
  return localStorage.getItem("kz_currency") || "CHF";
};

window.setSelectedCurrency = function (currency) {
  localStorage.setItem("kz_currency", currency);
  location.reload();
};

window.convertPrice = function (priceObj) {
  const selected = window.getSelectedCurrency();

  const fromRate = window.exchangeRatesToCHF[priceObj.currency] || 1;
  const toRate = window.exchangeRatesToCHF[selected] || 1;

  const priceInCHF = priceObj.value * fromRate;
  return priceInCHF / toRate;
};

window.formatPrice = function (priceObj) {
  const selected = window.getSelectedCurrency();
  const converted = window.convertPrice(priceObj);
  const symbol = window.currencySymbols[selected];

  if (selected === "JPY") return `${symbol}${Math.round(converted)}`;
  if (selected === "CHF") return `CHF ${converted.toFixed(2)}`;

  return `${symbol}${converted.toFixed(2)}`;
};

window.formatConvertedNumber = function (numberInSelectedCurrency) {
  const selected = window.getSelectedCurrency();
  const symbol = window.currencySymbols[selected];

  if (selected === "JPY")
    return `${symbol}${Math.round(numberInSelectedCurrency)}`;
  if (selected === "CHF") return `CHF ${numberInSelectedCurrency.toFixed(2)}`;

  return `${symbol}${numberInSelectedCurrency.toFixed(2)}`;
};
