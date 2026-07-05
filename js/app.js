/* ============================================================
   KitZone – Global app JS: header, search, cart badge, animations
   ============================================================ */

// -- Header render --
function renderHeader(active) {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  header.innerHTML = `
    <div class="container">
      <nav class="nav">
        <a href="index.html" class="logo"><span class="dot"></span> Kit<span class="gold">Zone</span></a>
        <div class="nav-links" id="navLinks">
          <a href="index.html" ${active==='home'?'class="active"':''}>Home</a>
          <a href="clubs.html" ${active==='clubs'?'class="active"':''}>Clubs</a>
          <a href="nationalteams.html" ${active==='nt'?'class="active"':''}>National Teams</a>
          <a href="cart.html" ${active==='cart'?'class="active"':''}>Cart</a>
          <a href="account.html" ${active==='account'?'class="active"':''}>Account</a>
          <a href="contact.html" ${active==='contact'?'class="active"':''}>Contact</a>
        </div>
        <div class="search-wrap" id="searchWrap">
          <input type="text" placeholder="Search clubs, teams…" id="globalSearch" autocomplete="off"/>
          <div class="search-suggestions" id="searchSuggestions"></div>
        </div>
        <div class="nav-icons">
          <a href="cart.html" class="icon-btn" aria-label="Cart">
            <svg viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6L5 3H2"/></svg>
            <span class="cart-count" id="cartCount">0</span>
          </a>
          <a href="account.html" class="icon-btn" aria-label="Account">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>
          </a>
          <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
      </nav>
    </div>
  `;

  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
    document.getElementById('searchWrap').classList.toggle('open');
  });

  updateCartBadge();
  initGlobalSearch();
}

// -- Footer render --
function renderFooter() {
  const footer = document.querySelector('[data-footer]');
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="logo" style="margin-bottom:12px"><span class="dot"></span> Kit<span class="gold">Zone</span></div>
          <p style="max-width:320px">Find your kit. Own the season. Premium football jerseys from the world's biggest clubs and national teams.</p>
        </div>
        <div>
          <h5>Shop</h5>
          <ul>
            <li><a href="clubs.html">Clubs</a></li>
            <li><a href="nationalteams.html">National Teams</a></li>
            <li><a href="index.html#new">New Arrivals</a></li>
            <li><a href="index.html#trending">Trending</a></li>
          </ul>
        </div>
        <div>
          <h5>Help</h5>
          <ul>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Size Guide</a></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© ${new Date().getFullYear()} KitZone. All rights reserved.</div>
        <div>Made for football fans, everywhere.</div>
      </div>
    </div>
  `;
}

// -- Cart badge --
function getCart() { try { return JSON.parse(localStorage.getItem('kz_cart') || '[]'); } catch { return []; } }
function saveCart(c) { localStorage.setItem('kz_cart', JSON.stringify(c)); updateCartBadge(); }
function updateCartBadge() {
  const el = document.getElementById('cartCount');
  if (!el) return;
  const total = getCart().reduce((a,b) => a + (b.qty||1), 0);
  el.textContent = total;
  el.style.display = total > 0 ? 'grid' : 'none';
}

// -- Global search across clubs + national teams --
function initGlobalSearch() {
  const input = document.getElementById('globalSearch');
  const box = document.getElementById('searchSuggestions');
  if (!input || !box) return;
  const all = [
    ...(window.clubs || []).map(c => ({...c, type: 'Club', href: `club.html?id=${c.id}`})),
    ...(window.nationalTeams || []).map(c => ({...c, type: 'National', href: `country.html?id=${c.id}`})),
  ];
  const render = q => {
    if (!q) { box.classList.remove('show'); return; }
    const results = all.filter(x => x.name.toLowerCase().includes(q.toLowerCase())).slice(0, 6);
    if (!results.length) { box.innerHTML = `<a><span>No results for "${q}"</span></a>`; box.classList.add('show'); return; }
    box.innerHTML = results.map(r => `
      <a href="${r.href}">
        <span>${r.name}</span>
        <span class="badge">${r.type}</span>
      </a>
    `).join('');
    box.classList.add('show');
  };
  input.addEventListener('input', e => render(e.target.value.trim()));
  input.addEventListener('focus', e => render(e.target.value.trim()));
  document.addEventListener('click', e => {
    if (!input.parentElement.contains(e.target)) box.classList.remove('show');
  });
}

// -- Reveal on scroll --
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

// -- Card cursor spotlight --
function initCardSpotlight() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });
}

// -- Toast --
window.showToast = function (msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastT);
  window._toastT = setTimeout(() => t.classList.remove('show'), 2200);
};

// -- Query param helper --
window.qp = function (name) { return new URLSearchParams(location.search).get(name); };

// -- URL builder for jersey --
window.jerseyUrl = function (kind, id, season, type) {
  return `product.html?kind=${kind}&id=${id}&season=${encodeURIComponent(season)}&type=${type}`;
};

document.addEventListener('DOMContentLoaded', () => {
  renderHeader(document.body.dataset.page);
  renderFooter();
  initReveal();
  initCardSpotlight();
});
