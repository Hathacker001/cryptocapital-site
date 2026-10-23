const app = document.querySelector('#app');
const notice = document.querySelector('#notice');
const route = window.location.pathname.replace(/\/$/, '') || '/';
// Fictional front-end visual review only. No backend, financial API, or payment service is connected.
const authFlag = 'isClientAuthenticated';
const mockAccess = { id: 'cc-847691', passcode: '5643388' };

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
          <details><summary>How do the cards work?</summary><p class="faq-answer">Spend from your CryptoCapital balance, set limits, and freeze your card any time from your account.</p></details>
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
    <form class="login-form" data-login-form novalidate>
      <label class="login-label" for="login-id">Account ID</label><input class="login-input" id="login-id" name="accountId" type="text" placeholder="CC-0000-0000" autocomplete="username" />
      <label class="login-label" for="login-passcode">Passcode</label><input class="login-input" id="login-passcode" name="passcode" type="password" placeholder="Enter your passcode" autocomplete="current-password" />
      <p class="login-error" data-login-error role="alert" aria-live="polite"></p>
      <button class="button button--lime login-button" type="submit" data-login-submit>Enter dashboard <span aria-hidden="true">→</span></button>
    </form>
  </section></main>`;

const dashboardHeader = () => `
  <header class="dashboard-topbar">
    <div class="dashboard-topbar-inner">
      <div class="dashboard-heading"><span>Hi, Eliana</span><h1>Welcome back, Eliana.</h1><p>Good morning</p></div>
      <nav class="portal-nav" aria-label="Account navigation"><a href="/settings">Settings</a><button type="button" data-signout>Sign out</button></nav>
    </div>
  </header>`;

const activityRows = () => `
  <tr><td>Oct 01, 2026</td><td>Monthly yield distribution</td><td><span class="type-pill">YIELD</span></td><td class="yield-amount">+$25,005.00</td><td><span class="complete-status">COMPLETED</span></td></tr>
  <tr><td>Sep 01, 2026</td><td>Monthly yield distribution</td><td><span class="type-pill">YIELD</span></td><td class="yield-amount">+$24,755.00</td><td><span class="complete-status">COMPLETED</span></td></tr>
  <tr><td>Aug 01, 2026</td><td>Monthly yield distribution</td><td><span class="type-pill">YIELD</span></td><td class="yield-amount">+$24,510.00</td><td><span class="complete-status">COMPLETED</span></td></tr>
  <tr><td>Jul 01, 2026</td><td>Monthly yield distribution</td><td><span class="type-pill">YIELD</span></td><td class="yield-amount">+$24,268.00</td><td><span class="complete-status">COMPLETED</span></td></tr>
  <tr><td>Jun 01, 2026</td><td>Monthly yield distribution</td><td><span class="type-pill">YIELD</span></td><td class="yield-amount">+$24,030.00</td><td><span class="complete-status">COMPLETED</span></td></tr>`;

const dashboardPage = () => `${dashboardHeader()}
  <main class="dashboard-page"><div class="account-layout">
    <section class="dashboard-main-column" aria-label="Account overview">
      <article class="account-balance-card">
        <div class="account-balance-top"><span>Total balance</span><span class="account-chip" aria-hidden="true"></span></div>
        <strong class="account-balance-value">$2,500,500.00</strong>
        <p class="account-balance-meta">Account ·••• 8823 <span>▲ +1.78% this month</span></p>
        <div class="account-accrual"><strong>+$25,005.00</strong><span>+1.00% accrued today</span></div>
      </article>
      <nav class="dashboard-actions" aria-label="Account actions">
        <button type="button" data-action-notice="Send"><span>↗</span>Send</button>
        <button type="button" data-action-notice="Add money"><span>＋</span>Add money</button>
        <a href="#withdrawal"><span>↙</span>Withdraw</a>
      </nav>
      <section class="quick-metrics" aria-label="Account balances">
        <article><span>Savings balance</span><strong>$100,000.00</strong><small>+1.00% daily interest</small></article>
        <article><span>Approved withdrawal</span><strong>$50,000.00</strong><small>Ready to disburse</small></article>
        <article><span>Pending withdrawal</span><strong>$500,000.00</strong><small>Batch withdrawal · processing</small></article>
      </section>
      <article class="reference-panel holdings-panel">
        <div class="reference-panel-heading"><h2>Holdings</h2><span>Daily yield</span></div>
        <div class="holding-row"><div class="holding-label"><span>Digital Asset Growth</span><strong>$1,375,275.00 <em>+28.9%</em></strong></div><div class="holding-track"><span style="width:55%"></span></div></div>
        <div class="holding-row"><div class="holding-label"><span>Private Market Entries</span><strong>$750,150.00 <em>+21.3%</em></strong></div><div class="holding-track"><span style="width:30%"></span></div></div>
        <div class="holding-row"><div class="holding-label"><span>Defensive Yield</span><strong>$375,075.00 <em>+8.4%</em></strong></div><div class="holding-track"><span style="width:15%"></span></div></div>
        <div class="yield-summary"><div><span>Daily yield accrual</span><strong>+1.00% <small>RATE / DAY</small></strong></div><div><span>Accrued today</span><strong>+$25,005.00</strong></div><div><span>Next accrual in</span><strong data-countdown>10:37:08</strong></div></div>
      </article>
      <article class="reference-panel recent-activity" id="activity">
        <div class="reference-panel-heading"><h2>Recent activity</h2><a href="#activity">View all <span aria-hidden="true">→</span></a></div>
        <div class="activity-table-wrap"><table class="activity-table"><thead><tr><th>Date</th><th>Description</th><th>Type</th><th>Amount</th><th>Status</th></tr></thead><tbody>${activityRows()}</tbody></table></div>
      </article>
    </section>
    <aside class="dashboard-side-column" aria-label="Cards and withdrawals">
      <article class="reference-panel my-cards-panel">
        <div class="reference-panel-heading"><h2>My cards</h2><span class="card-menu-dots" aria-hidden="true">•••</span></div>
        <div class="dashboard-card-stage"><div data-dashboard-card>${paymentCard('regular', 'Regular')}</div></div>
        <div class="card-tier-switcher" role="group" aria-label="Choose card"><button type="button" data-card-tier="regular" aria-pressed="true">Regular</button><button type="button" data-card-tier="premium" aria-pressed="false">Premium</button><button type="button" data-card-tier="black" aria-pressed="false">Black</button></div>
        <button class="freeze-card-button" type="button" data-freeze-card>Freeze card</button>
        <div class="cashback-card"><strong>Get 5% cashback</strong><p>Upgrade to Black for the highest rewards.</p><button type="button" data-upgrade-black>Explore Black <span aria-hidden="true">→</span></button></div>
      </article>
      <article class="reference-panel withdrawal-panel" id="withdrawal">
        <div class="reference-panel-heading"><h2>Withdraw</h2><span class="withdrawal-state">CONNECTED</span></div>
        <p class="withdraw-copy">This amount is available for immediate withdrawal to your linked wallet address.</p>
        <label class="withdraw-label" for="withdraw-amount">Amount (USD)</label>
        <div class="withdraw-input-wrap"><span>$</span><input id="withdraw-amount" type="number" min="0" placeholder="0.00" inputmode="decimal" aria-label="Withdrawal amount in US dollars" /></div>
        <div class="amount-options" aria-label="Choose amount"><button type="button" data-amount="10000">$10,000</button><button type="button" data-amount="25000">$25,000</button><button type="button" data-amount="50000">$50,000</button><button type="button" data-amount="2500500">Full balance</button></div>
        <div class="wallet-readonly"><span><small>Linked wallet · Base Wallet</small><strong>bc1qtdqwxwygmamf5ttdjpu68gs0x5wjc6qpq0cfx2</strong></span><b>CONNECTED</b></div>
        <button class="button button--lime withdrawal-action" type="button" data-withdrawal>Request Withdrawal <span aria-hidden="true">→</span></button>
        <div class="batch-note"><span class="batch-dot"></span><span><strong>Batch withdrawal in progress</strong><small>Reference B-1042 · settles with next batch cycle · $500,000.00</small></span></div>
      </article>
    </aside>
  </div>${footer()}</main>`;

const settingsPage = () => `${dashboardHeader()}
  <main class="dashboard-page settings-page"><div class="settings-layout">
    <div class="settings-page-heading"><p class="section-label">ACCOUNT SETTINGS</p><h2>Profile & identity verification</h2><p>Manage your personal information and account details.</p></div>
    <section class="reference-panel identity-card">
      <div class="identity-card-heading"><div class="identity-avatar">EC</div><div><p>Identity verification</p><h3>CARRENO, ELIANA</h3></div><span class="verified-pill"><i aria-hidden="true">✓</i> VERIFIED</span></div>
      <dl class="identity-details">
        <div><dt>Full Name</dt><dd>CARRENO, ELIANA</dd></div><div><dt>License Number</dt><dd>C650-2099-1782</dd></div>
        <div><dt>State</dt><dd>ILLINOIS</dd></div><div><dt>Date of Birth</dt><dd>06/27/1991</dd></div>
        <div><dt>Expiration Date</dt><dd>06/27/2029</dd></div><div><dt>Issue Date</dt><dd>11/07/2025</dd></div>
        <div><dt>Sex</dt><dd>F</dd></div><div><dt>Class</dt><dd>DM</dd></div>
        <div><dt>Login Access ID</dt><dd>cc-847691</dd></div>
      </dl>
      <div class="identity-card-footer"><span>Profile status</span><strong><i></i> Verified</strong></div>
    </section>
    <a class="back-to-dashboard" href="/dashboard">← Back to dashboard</a>
  </div>${footer()}</main>`;

if ((route === '/dashboard' || route === '/settings') && localStorage.getItem(authFlag) !== 'true') {
  window.location.replace('/');
} else if (route === '/dashboard') {
  document.title = 'Dashboard — CryptoCapital';
  app.innerHTML = dashboardPage();
} else if (route === '/settings') {
  document.title = 'Settings — CryptoCapital';
  app.innerHTML = settingsPage();
} else if (route === '/cards') {
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
const showNotice = (message, variant = 'success', duration = 3600) => {
  notice.textContent = message;
  notice.classList.remove('notice--error', 'notice--success');
  notice.classList.add(`notice--${variant}`, 'is-visible');
  window.clearTimeout(noticeTimer);
  noticeTimer = window.setTimeout(() => notice.classList.remove('is-visible'), duration);
};

document.querySelector('[data-login-form]')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const idInput = form.querySelector('#login-id');
  const passInput = form.querySelector('#login-passcode');
  const error = form.querySelector('[data-login-error]');
  const button = form.querySelector('[data-login-submit]');
  if (idInput.value !== mockAccess.id || passInput.value !== mockAccess.passcode) {
    error.textContent = 'Account ID or passcode is incorrect. Please try again.';
    error.classList.add('is-visible');
    idInput.setAttribute('aria-invalid', 'true');
    passInput.setAttribute('aria-invalid', 'true');
    return;
  }
  error.textContent = '';
  error.classList.remove('is-visible');
  idInput.removeAttribute('aria-invalid');
  passInput.removeAttribute('aria-invalid');
  button.disabled = true;
  button.setAttribute('aria-busy', 'true');
  button.innerHTML = '<span class="button-spinner" aria-hidden="true"></span> Authenticating…';
  window.setTimeout(() => {
    localStorage.setItem(authFlag, 'true');
    window.location.assign('/dashboard');
  }, 1500);
});

document.querySelectorAll('[data-signout]').forEach((button) => {
  button.addEventListener('click', () => {
    localStorage.removeItem(authFlag);
    window.location.assign('/');
  });
});

document.querySelectorAll('[data-action-notice]').forEach((button) => {
  button.addEventListener('click', () => showNotice(`${button.dataset.actionNotice} is not available yet.`, 'success'));
});

const cardHolder = document.querySelector('[data-dashboard-card]');
const selectCard = (tier) => {
  const names = { regular: 'Regular', premium: 'Premium', black: 'Black' };
  if (!cardHolder || !names[tier]) return;
  cardHolder.innerHTML = paymentCard(tier, names[tier], tier === 'black' ? '◐◑' : 'VISA');
  document.querySelectorAll('[data-card-tier]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.cardTier === tier));
  });
};
document.querySelectorAll('[data-card-tier]').forEach((button) => {
  button.addEventListener('click', () => selectCard(button.dataset.cardTier));
});
document.querySelector('[data-upgrade-black]')?.addEventListener('click', () => selectCard('black'));
document.querySelector('[data-freeze-card]')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const frozen = button.getAttribute('aria-pressed') === 'true';
  button.setAttribute('aria-pressed', String(!frozen));
  button.textContent = frozen ? 'Freeze card' : 'Unfreeze card';
});

document.querySelectorAll('[data-amount]').forEach((button) => {
  button.addEventListener('click', () => {
    const amount = document.querySelector('#withdraw-amount');
    if (amount) amount.value = button.dataset.amount || '';
  });
});

document.querySelector('[data-withdrawal]')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const amountInput = document.querySelector('#withdraw-amount');
  const amount = Number(amountInput?.value);
  if (!Number.isFinite(amount) || amount <= 0) {
    showNotice('Enter an amount to continue.', 'error');
    amountInput?.focus();
    return;
  }
  if (button.disabled) return;

  const originalLabel = 'Request Withdrawal <span aria-hidden="true">→</span>';
  button.disabled = true;
  button.innerHTML = '<span class="button-spinner" aria-hidden="true"></span> Processing…';
  window.setTimeout(() => {
    const tableBody = document.querySelector('.activity-table tbody');
    if (tableBody) {
      const date = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
      const formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(amount);
      tableBody.insertAdjacentHTML('afterbegin', `<tr><td>${date}</td><td>Withdrawal request</td><td><span class="type-pill type-pill--withdrawal">WITHDRAWAL</span></td><td class="yield-amount">−${formattedAmount}</td><td><span class="pending-status">PENDING</span></td></tr>`);
    }
    button.disabled = false;
    button.innerHTML = originalLabel;
    showNotice('Withdrawal Requested', 'success', 4500);
  }, 2000);
});

const countdown = document.querySelector('[data-countdown]');
if (countdown) {
  let secondsLeft = (10 * 60 * 60) + (37 * 60) + 8;
  window.setInterval(() => {
    secondsLeft = secondsLeft > 0 ? secondsLeft - 1 : (10 * 60 * 60) + (37 * 60) + 8;
    const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
    const seconds = String(secondsLeft % 60).padStart(2, '0');
    countdown.textContent = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}
