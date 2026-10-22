const app = document.querySelector('#app');
const notice = document.querySelector('#notice');
const route = window.location.pathname.replace(/\/$/, '') || '/';

const header = (active = '') => `
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="/" aria-label="CryptoCapital home"><span class="brand-mark">CC</span><span>CryptoCapital</span></a>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
      <nav class="main-nav" aria-label="Main navigation">
        <a href="/" ${active === 'home' ? 'aria-current="page"' : ''}>Home</a>
        <a href="/cards" ${active === 'cards' ? 'aria-current="page"' : ''}>Cards</a>
        <a href="/login" ${active === 'login' ? 'aria-current="page"' : ''}>Client Login</a>
      </nav>
      <a class="button button--lime header-action" href="/login">Get started</a>
    </div>
  </header>`;

const footer = () => `
  <footer class="site-footer">
    <div class="footer-inner">
      <a class="footer-brand" href="/">CryptoCapital</a>
      <p class="footer-disclaimer">All investing involves risk, including possible loss of principal. Past performance does not guarantee future results.</p>
      <span class="footer-copy">© 2026 CryptoCapital Group</span>
    </div>
  </footer>`;

const paymentCard = (kind, label, network = 'VISA') => `
  <div class="payment-card payment-card--${kind}" aria-label="${label} card illustration">
    <div class="payment-card-row"><span>${label}</span><strong>${network}</strong></div>
    <div class="payment-card-row"><span class="payment-chip"></span><span class="card-contactless" aria-hidden="true">)))</span></div>
    <div class="payment-card-row"><span>•••• 8823</span><span>CC</span></div>
  </div>`;

const homePage = () => `${header('home')}
  <main>
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-content">
        <span class="eyebrow eyebrow-pill">Private Investment Group · Est. 2016</span>
        <h1 id="hero-title">Capital,<br />placed with<br /><span>precision.</span></h1>
        <p class="hero-copy">We spot crypto opportunities before they become consensus — and open a limited number of seats to qualified investors.</p>
        <div class="hero-actions"><a class="button button--lime" href="/login">Request access <span aria-hidden="true">→</span></a><a class="button button--outline" href="/cards">See the new cards</a></div>
        <div class="stats" aria-label="CryptoCapital metrics">
          <div class="stat"><strong>$250M+</strong><span>Assets monitored</span></div>
          <div class="stat"><strong>21%</strong><span>Avg. annual return</span></div>
          <div class="stat"><strong>48</strong><span>Mandates completed</span></div>
        </div>
      </div>
    </section>

    <section class="section offer-section">
      <div class="section-inner offer-layout">
        <div>
          <p class="section-label">01 — What we offer</p>
          <h2 class="section-heading">One secure wallet for modern capital.</h2>
          <p class="section-intro">Payments, cards, insights and global access — combined into one intelligent investment account.</p>
          <div class="wallet-features"><span>No transaction fee</span><span>Real-time tracking</span><span>One-time verification</span><span>Virtual account</span></div>
        </div>
        <div class="wallet-card" aria-label="Illustration of a CryptoCapital account">
          <div class="wallet-top"><div><span class="wallet-balance-label">Total account value</span><strong class="wallet-balance">$84,290<span style="color:var(--acid);font-size:.52em">.00</span></strong></div><span class="wallet-chip" aria-hidden="true"></span></div>
          <div class="wallet-bottom"><span class="brand"><span class="brand-mark">CC</span><span>CryptoCapital</span></span><span style="color:var(--muted);font-size:11px">Private account</span></div>
        </div>
      </div>
    </section>

    <section class="section mandates-section">
      <div class="section-inner">
        <div class="section-topline"><div><p class="section-label">02 — Mandates</p><h2 class="section-heading">Where we allocate.</h2></div></div>
        <div class="mandate-grid">
          <article class="mandate-card"><div class="mandate-kicker"><span>Mandate I · Growth</span><em>01 / 03</em></div><div><h3>Digital Asset Growth</h3><span class="return-value">+28.9%</span><div class="return-label">Cycle return</div></div><div class="mandate-bottom"><span>$136M allocated</span><span class="status">Open</span></div></article>
          <article class="mandate-card"><div class="mandate-kicker"><span>Mandate II · Private</span><em>02 / 03</em></div><div><h3>Private Market Entries</h3><span class="return-value">+21.3%</span><div class="return-label">Cycle return</div></div><div class="mandate-bottom"><span>$74M allocated</span><span class="status status--wait">Waitlist</span></div></article>
          <article class="mandate-card"><div class="mandate-kicker"><span>Mandate III · Yield</span><em>03 / 03</em></div><div><h3>Defensive Yield</h3><span class="return-value">+8.4%</span><div class="return-label">Cycle return</div></div><div class="mandate-bottom"><span>$41M allocated</span><span class="status">Open</span></div></article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-inner card-promo">
        <div class="promo-cards" aria-hidden="true">
          <div class="bank-card bank-card--back"><div class="bank-card-head"><span>Black</span><strong>◐◑</strong></div><span class="bank-card-cc">CC</span><div class="bank-card-foot"><span>•••• 8823</span><span>VISA</span></div></div>
          <div class="bank-card bank-card--middle"><div class="bank-card-head"><span>Premium</span><strong>VISA</strong></div><span class="bank-card-cc">CC</span><div class="bank-card-foot"><span>•••• 8823</span><span>CC</span></div></div>
          <div class="bank-card bank-card--front"><div class="bank-card-head"><span>Regular</span><strong>VISA</strong></div><span class="bank-card-cc">CC</span><div class="bank-card-foot"><span>•••• 8823</span><span>CC</span></div></div>
        </div>
        <div>
          <p class="section-label">New feature</p>
          <h2 class="section-heading">Spend your gains with CryptoCapital cards.</h2>
          <p class="section-intro">Three tiers, instant virtual issue, and spending straight from your investment balance — anywhere in the world.</p>
          <ul class="promo-list"><li>Instant issue</li><li>Global spend</li><li>Freeze in a tap</li></ul>
          <a class="button button--outline" href="/cards">Compare cards <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>

    <section class="section process-section">
      <div class="section-inner">
        <p class="section-label">03 — Process</p><h2 class="section-heading">How access works.</h2>
        <div class="process-grid">
          <article class="process-card"><span class="process-number">01</span><h3>Application</h3><p>Submit a short, confidential interest form.</p></article>
          <article class="process-card"><span class="process-number">02</span><h3>Qualification</h3><p>Our desk reviews fit and issues your private account ID.</p></article>
          <article class="process-card"><span class="process-number">03</span><h3>Funding</h3><p>Fund through our secured on-ramp. Minimum from $5,000.</p></article>
          <article class="process-card"><span class="process-number">04</span><h3>Growth</h3><p>Track balance, growth and statements in your dashboard.</p></article>
        </div>
      </div>
    </section>

    <section class="section faq-section">
      <div class="section-inner faq-wrap">
        <h2 class="section-heading">Questions.</h2>
        <div class="faq-list">
          <details open><summary>What is the minimum investment?</summary><p class="faq-answer">Positions begin at $5,000. Larger allocations are structured individually with our desk.</p></details>
          <details><summary>Can I withdraw at any time?</summary><p class="faq-answer">Withdrawal terms depend on the selected mandate. Review the applicable terms and risk disclosures before making an investment decision.</p></details>
          <details><summary>How do the cards work?</summary><p class="faq-answer">The cards are presented here as a visual concept only; no balance, payment or card service is connected in this recreation.</p></details>
        </div>
      </div>
    </section>

    <section class="final-cta"><h2>The market rewards those who arrive early.</h2><a class="button button--dark" href="/login">Request private access <span aria-hidden="true">→</span></a></section>
  </main>
  ${footer()}`;

const cardsPage = () => `${header('cards')}
  <main class="cards-page"><div class="cards-page-inner">
    <div class="cards-intro"><span class="eyebrow eyebrow-pill">New</span><h1>Pick your card.</h1><p>Every tier links to your CryptoCapital balance. Freeze, unfreeze and set limits from your dashboard.</p></div>
    <div class="price-grid">
      <article class="price-card">${paymentCard('regular', 'Regular')}<div class="price-title"><h2>Regular</h2><strong>Free</strong></div><ul class="price-features"><li>Virtual card in seconds</li><li>Spend from balance</li><li>1% cashback</li></ul><a class="button button--lime" href="/login">Get regular</a></article>
      <article class="price-card">${paymentCard('premium', 'Premium')}<div class="price-title"><h2>Premium</h2><strong>$9 / mo</strong></div><ul class="price-features"><li>Metal physical card</li><li>No FX fees</li><li>3% cashback</li><li>Airport lounges</li></ul><a class="button button--lime" href="/login">Get premium</a></article>
      <article class="price-card">${paymentCard('black', 'Black', '◐◑')}<div class="price-title"><h2>Black</h2><strong>$29 / mo</strong></div><ul class="price-features"><li>Dedicated account officer</li><li>Unlimited withdrawals</li><li>5% cashback</li><li>Concierge 24/7</li></ul><a class="button button--lime" href="/login">Get black</a></article>
    </div>
  </div>${footer()}</main>`;

const loginPage = () => `${header('login')}
  <main class="login-page"><section class="login-panel" aria-labelledby="login-title">
    <h1 id="login-title">Client Login</h1><p class="login-subtitle">Private client portal</p>
    <span class="login-label">Account ID</span><div class="mock-input" aria-label="Demo account ID field, disabled">CC-0000-0000</div>
    <span class="login-label">Passcode</span><div class="mock-input mock-input--secret" aria-label="Demo passcode field, disabled">••••••••••</div>
    <button class="button button--lime login-button" type="button" data-demo-login>Enter dashboard <span aria-hidden="true">→</span></button>
    <p class="login-demo">Demo preview · Sign-in is disabled</p><p class="login-note">This visual recreation does not accept or store account details.</p>
  </section></main>`;

if (route === '/cards') {
  document.title = 'Cards — CryptoCapital';
  app.innerHTML = cardsPage();
} else if (route === '/login') {
  document.title = 'Client Login — CryptoCapital';
  app.innerHTML = loginPage();
} else {
  document.title = 'CryptoCapital — Capital, placed with precision';
  app.innerHTML = homePage();
}

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  nav?.classList.toggle('is-open', !open);
});

let noticeTimer;
document.querySelector('[data-demo-login]')?.addEventListener('click', () => {
  notice.textContent = 'Demo only — sign-in is not connected.';
  notice.classList.add('is-visible');
  window.clearTimeout(noticeTimer);
  noticeTimer = window.setTimeout(() => notice.classList.remove('is-visible'), 3000);
});
