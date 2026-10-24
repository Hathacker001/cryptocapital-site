const app = document.querySelector('#app');
const notice = document.querySelector('#notice');
const route = window.location.pathname.replace(/\/$/, '') || '/';
// Fictional front-end visual review only. No backend, financial API, or payment service is connected.
const authFlag = 'isClientAuthenticated';
const mockAccess = { id: 'cc-847691', passcode: '5643388' };
const mockAuthorizationCode = '6745';

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
  <main class="home-page">
    <section class="cinematic-hero" aria-labelledby="cinematic-title">
      <div class="cinematic-content">
        <div class="cinematic-copy">
          <span class="cinematic-tag">Private Investment Group · Est. 2016</span>
          <h1 class="cinematic-title" id="cinematic-title"><span>CAPITAL,</span><span>PLACED WITH</span><em>PRECISION.</em></h1>
          <p class="cinematic-subtext">We spot market opportunities ahead of consensus—leveraging deep institutional research and strategic allocation to secure optimal market positions for qualified investors.</p>
          <div class="cinematic-actions"><a class="button button--lime" href="/login">Request access <span aria-hidden="true">-&gt;</span></a><a class="button button--outline" href="/cards">See the new cards</a></div>
        </div>
      </div>
    </section>
    <section class="hero home-hero" aria-labelledby="hero-title">
      <div class="hero-content">
        <div class="hero-copy-column">
          <span class="eyebrow hero-label">01 — What we offer</span>
          <h1 id="hero-title">One secure wallet for <em>modern capital.</em></h1>
          <p class="hero-copy">Payments, cards, insights and global access — combined into one intelligent investment account.</p>
          <div class="hero-actions"><a class="button button--lime" href="/login">Request access <span aria-hidden="true">→</span></a><a class="button button--outline" href="/cards">Explore cards</a></div>
        </div>
        <div class="hero-graphic" role="group" aria-label="CryptoCapital account with four integrated benefits">
          <div class="hero-orbit hero-orbit--outer" aria-hidden="true"><i></i><b></b></div>
          <div class="hero-orbit hero-orbit--inner" aria-hidden="true"><i></i></div>
          <div class="hero-core"><span class="brand-mark">CC</span><span class="hero-core-title">Capital<br /><strong>in motion</strong></span><span class="hero-core-status"><i></i> Account access</span></div>
          <span class="hero-floating-tag hero-floating-tag--fee">No transaction fee</span>
          <span class="hero-floating-tag hero-floating-tag--tracking">Real-time tracking</span>
          <span class="hero-floating-tag hero-floating-tag--verification">One-time verification</span>
          <span class="hero-floating-tag hero-floating-tag--account">Virtual account</span>
        </div>
      </div>
    </section>

    <section class="section proof-section" aria-label="Capital metrics and fund growth">
      <div class="section-inner">
        <p class="section-label proof-label">A record built with intention</p>
        <div class="proof-layout">
          <div class="proof-stats" aria-label="CryptoCapital metrics">
            <article class="proof-stat"><strong>$250M+</strong><span>CAPITAL DEPLOYED</span></article>
            <article class="proof-stat"><strong>21%</strong><span>AVG. ANNUAL RETURN</span></article>
            <article class="proof-stat"><strong>48</strong><span>MANDATES COMPLETED</span></article>
            <article class="proof-stat"><strong>&lt;500</strong><span>ACTIVE CLIENT SEATS</span></article>
          </div>
          <article class="fund-chart-card" aria-labelledby="fund-chart-title">
            <div class="fund-chart-heading">
              <div><p class="chart-overline">Long-term perspective</p><h2 id="fund-chart-title">Fund growth · 2016–2026</h2></div>
              <strong>+412%</strong>
            </div>
            <div class="fund-chart-wrap">
              <svg class="fund-chart" viewBox="0 0 640 280" role="img" aria-labelledby="fund-chart-svg-title fund-chart-svg-desc">
                <title id="fund-chart-svg-title">Fund growth from 2016 to 2026</title>
                <desc id="fund-chart-svg-desc">A steadily rising line across the ten-year period.</desc>
                <defs>
                  <linearGradient id="fund-chart-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#c9ff00" stop-opacity=".24"/><stop offset="1" stop-color="#c9ff00" stop-opacity="0"/></linearGradient>
                </defs>
                <g class="fund-chart-grid" aria-hidden="true"><path d="M24 48H624M24 102H624M24 156H624M24 210H624"/><path d="M24 34V238M174 34V238M324 34V238M474 34V238M624 34V238"/></g>
                <path class="fund-chart-area" d="M24 218 C72 214 91 205 126 210 S178 199 206 184 S254 190 285 165 S330 171 358 148 S402 155 432 125 S476 137 506 101 S551 99 577 69 S607 52 624 32 L624 238 L24 238 Z"/>
                <path class="fund-chart-line" d="M24 218 C72 214 91 205 126 210 S178 199 206 184 S254 190 285 165 S330 171 358 148 S402 155 432 125 S476 137 506 101 S551 99 577 69 S607 52 624 32"/>
                <circle class="fund-chart-point" cx="24" cy="218" r="4"/><circle class="fund-chart-point" cx="358" cy="148" r="4"/><circle class="fund-chart-point fund-chart-point--current" cx="624" cy="32" r="6"/>
              </svg>
            </div>
            <div class="fund-chart-years"><span>2016</span><span>2019</span><span>2022</span><span>2026</span></div>
            ${annualTrackRecordTable()}
          </article>
        </div>
      </div>
    </section>

    ${marketContextSection()}

    <section class="section about-section" aria-labelledby="about-title">
      <div class="section-inner about-layout">
        <div class="about-intro"><p class="section-label">About the desk</p><h2 class="section-heading" id="about-title">A private desk for <em>discerning capital.</em></h2><p class="section-intro">Founded on a simple conviction: exceptional returns come from seeing the market differently — earlier, calmer, and with more discipline than the crowd.</p></div>
        <div class="about-principles" aria-label="How the desk operates">
          <article class="about-row"><span class="about-number">01</span><div><h3>Conviction over consensus</h3><p>Independent research and measured conviction, ahead of the market cycle.</p></div><span class="about-mark" aria-hidden="true">↗</span></article>
          <article class="about-row"><span class="about-number">02</span><div><h3>Skin in the game</h3><p>We commit our own capital alongside client mandates.</p></div><span class="about-mark" aria-hidden="true">↗</span></article>
          <article class="about-row"><span class="about-number">03</span><div><h3>Discretion by design</h3><p>Selective access, private reporting and careful information stewardship.</p></div><span class="about-mark" aria-hidden="true">↗</span></article>
        </div>
      </div>
    </section>

    ${partnersSection()}

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

    ${securitySection()}

    <section class="section">
      <div class="section-inner card-promo">
        <div class="promo-cards" aria-hidden="true">
          <div class="bank-card bank-card--back"><div class="bank-card-head"><span>Black</span><strong>◐◑</strong></div><span class="bank-card-cc">CC</span><div class="bank-card-foot"><span>•••• 8823</span><span>VISA</span></div></div>
          <div class="bank-card bank-card--middle"><div class="bank-card-head"><span>Premium</span><strong>VISA</strong></div><span class="bank-card-cc">CC</span><div class="bank-card-foot"><span>•••• 8823</span><span>CC</span></div></div>
          <div class="bank-card bank-card--front"><div class="bank-card-head"><span>Regular</span><strong>VISA</strong></div><span class="bank-card-cc">CC</span><div class="bank-card-foot"><span>•••• 8823</span><span>CC</span></div></div>
        </div>
        <div>
          <p class="section-label">New feature</p>
          <h2 class="section-heading">Spend your gains with CryptoCapital cards</h2>
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

    ${marketInsightSection()}

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

    <section class="final-cta"><h2>THE MARKET REWARDS THOSE WHO ARRIVE EARLY.</h2><a class="button button--dark" href="/login">Request private access <span aria-hidden="true">→</span></a></section>
  </main>
  <footer class="home-footer">
    <div class="home-footer-inner">
      <div class="home-footer-brand"><a class="brand" href="/" aria-label="CryptoCapital home"><span class="brand-mark">CC</span><span>CryptoCapital</span></a><p>Private capital, placed with precision.</p></div>
      <div class="home-footer-contact"><span class="home-footer-label">Office</span><address>1 Capital Square<br />City of London<br />United Kingdom</address></div>
      <div class="home-footer-contact"><span class="home-footer-label">Private enquiries</span><a href="mailto:cryptocapitalfx@aol.com">cryptocapitalfx@aol.com</a></div>
    </div>
    <div class="home-footer-legal"><span>CryptoCapital Group © 2026</span><p>All investing involves risk, including possible loss of principal. Past performance does not guarantee future results.</p></div>
  </footer>`;

const marketContextSection = () => `
  <section class="section market-context" aria-label="Market context">
    <div class="section-inner market-context-inner">
      <span class="market-context-label">MARKET CONTEXT</span>
      <div class="market-context-list" aria-label="Topics">
        <span class="market-context-item">Digital assets</span><span class="market-context-item">Macro</span><span class="market-context-item">Private markets</span><span class="market-context-item">Custody systems</span>
      </div>
    </div>
  </section>`;

const partnersSection = () => `
  <section class="section partners-section" aria-labelledby="partners-title">
    <div class="section-inner">
      <div class="section-topline"><div><p class="section-label">THE PEOPLE</p><h2 class="section-heading" id="partners-title">The Partners</h2></div></div>
      <div class="partner-grid">
        <article class="partner-card"><span class="partner-role">MANAGING PARTNER</span><h3>Marcus Thorne</h3><p>Former Head of Digital Assets at a top-tier European investment bank with 15 years of macro trading experience.</p><span class="partner-index">01 / 03</span></article>
        <article class="partner-card"><span class="partner-role">HEAD OF RESEARCH</span><h3>Elena Rostova</h3><p>Ex-Goldman Sachs analyst specializing in asymmetric risk and digital asset infrastructure.</p><span class="partner-index">02 / 03</span></article>
        <article class="partner-card"><span class="partner-role">HEAD OF CUSTODY &amp; SECURITY</span><h3>David Chen</h3><p>Cybersecurity veteran with a background in institutional cold-storage architecture.</p><span class="partner-index">03 / 03</span></article>
      </div>
    </div>
  </section>`;

const securitySection = () => `
  <section class="section security-section" aria-labelledby="security-title">
    <div class="section-inner">
      <div class="section-topline"><div><p class="section-label">CUSTODY FRAMEWORK</p><h2 class="section-heading" id="security-title">Security &amp; custody considerations</h2></div></div>
      <div class="security-grid">
        <article class="security-card"><span class="security-icon" aria-hidden="true">◈</span><span class="security-index">01</span><h3>Multi-Sig Cold Storage</h3><p>98% of client assets are held in geographically distributed, offline cold storage.</p></article>
        <article class="security-card"><span class="security-icon" aria-hidden="true">◎</span><span class="security-index">02</span><h3>Independent Audits</h3><p>Quarterly third-party attestations and continuous real-time monitoring.</p></article>
        <article class="security-card"><span class="security-icon" aria-hidden="true">◇</span><span class="security-index">03</span><h3>Insured Custody</h3><p>Assets are protected by a comprehensive, institutional-grade insurance policy.</p></article>
      </div>
    </div>
  </section>`;

const annualTrackRecordTable = () => `
  <section class="track-record-card" aria-labelledby="track-record-title">
    <div class="track-record-heading"><div><p class="chart-overline">REPORTING FORMAT</p><h3 id="track-record-title">Annualized Track Record</h3></div></div>
    <div class="track-record-table-wrap"><table class="track-record-table"><thead><tr><th>Year</th><th>Return</th><th>Status</th></tr></thead><tbody>
      <tr><td>2021</td><td>+18.4%</td><td>Audited</td></tr>
      <tr><td>2022</td><td>+12.1%</td><td>Audited</td></tr>
      <tr><td>2023</td><td>+15.7%</td><td>Audited</td></tr>
      <tr><td>2024</td><td>+21.0%</td><td>Audited</td></tr>
      <tr><td>2025</td><td>+19.2%</td><td>Audited</td></tr>
    </tbody></table></div>
  </section>`;

const marketInsightSection = () => `
  <section class="section insight-section" aria-labelledby="insight-section-title">
    <div class="section-inner insight-layout">
      <div><p class="section-label">RESEARCH NOTE</p><h2 class="section-heading" id="insight-section-title">From the Desk</h2></div>
      <details class="insight-card">
        <summary><span class="insight-tag">Q3 Market Outlook</span><h3>Navigating Liquidity Cycles in Digital Assets</h3><p>An editorial layout concept about liquidity, market structure, and macro conditions—not investment advice.</p><span class="insight-read">Read Memo <span aria-hidden="true">→</span></span></summary>
        <div class="insight-expanded"><p>This visual-only note introduces liquidity and volatility as general educational topics. It contains no portfolio positions, recommendations, or performance claims.</p></div>
      </details>
    </div>
  </section>`;

// The final checksum character is intentionally altered so this visual address cannot receive mainnet funds.
const bitcoinDepositAddress = 'bc1qfke2sv4w83ll4suetutn3s564tsczvkvkyg7rq';
const bitcoinDepositPanel = () => `
  <article class="reference-panel deposit-panel" id="deposit" aria-labelledby="deposit-title">
    <div class="reference-panel-heading"><div><p class="section-label">BITCOIN</p><h2 id="deposit-title">Deposit</h2></div></div>
    <div class="deposit-code-art" role="img" aria-label="Decorative Bitcoin code artwork"><span class="deposit-code-pattern" aria-hidden="true"></span><span class="deposit-bitcoin-mark" aria-hidden="true">₿</span></div>
    <h3 class="deposit-address-title">Bitcoin Address</h3>
    <p class="deposit-address-copy">Bitcoin · BTC</p>
    <div class="deposit-address-display"><code data-deposit-address>${bitcoinDepositAddress}</code><span>BTC</span></div>
    <div class="deposit-actions"><button class="button button--lime" type="button" data-copy-deposit-address><span aria-hidden="true">▢</span>Copy address</button><a class="button button--outline" href="https://mempool.space/address/${bitcoinDepositAddress}" target="_blank" rel="noopener noreferrer">View on Mempool</a></div>
  </article>`;

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

const dashboardHeader = () => {
  const settingsLinks = route === '/settings' ? '<a href="/">Home</a><a href="/dashboard">Dashboard</a>' : '';
  const depositLink = route === '/dashboard' ? '<a href="/dashboard#deposit">Deposit</a>' : '';
  return `
  <header class="dashboard-topbar">
    <div class="dashboard-topbar-inner">
      <div class="dashboard-heading"><span>Hi, Eliana</span><h1>Welcome back, Eliana.</h1><p>Good morning</p></div>
      <nav class="portal-nav" aria-label="Account navigation">${settingsLinks}${depositLink}<a href="/settings">Settings</a><button type="button" data-signout>Sign out</button></nav>
    </div>
  </header>`;
};

const activityRows = () => `
  <tr><td>Oct 01, 2026</td><td>Monthly yield distribution</td><td><span class="type-pill">YIELD</span></td><td class="yield-amount">+$25,005.00</td><td><span class="complete-status">COMPLETED</span></td></tr>
  <tr><td>Sep 01, 2026</td><td>Monthly yield distribution</td><td><span class="type-pill">YIELD</span></td><td class="yield-amount">+$24,755.00</td><td><span class="complete-status">COMPLETED</span></td></tr>
  <tr><td>Aug 01, 2026</td><td>Monthly yield distribution</td><td><span class="type-pill">YIELD</span></td><td class="yield-amount">+$24,510.00</td><td><span class="complete-status">COMPLETED</span></td></tr>
  <tr><td>Jul 01, 2026</td><td>Monthly yield distribution</td><td><span class="type-pill">YIELD</span></td><td class="yield-amount">+$24,268.00</td><td><span class="complete-status">COMPLETED</span></td></tr>
  <tr><td>Jun 01, 2026</td><td>Monthly yield distribution</td><td><span class="type-pill">YIELD</span></td><td class="yield-amount">+$24,030.00</td><td><span class="complete-status">COMPLETED</span></td></tr>`;

const brandTransition = () => `<div class="brand-transition" data-brand-transition role="status" aria-label="CryptoCapital">
  <div class="brand-transition-lockup"><span class="brand-mark">CC</span><span>CryptoCapital</span></div>
</div>`;

const withdrawalAuthModal = () => `<div class="auth-code-overlay" data-auth-overlay hidden>
  <section class="auth-code-modal" role="dialog" aria-modal="true" aria-labelledby="auth-code-title">
    <button class="auth-code-close" type="button" data-auth-cancel aria-label="Close authorization dialog">×</button>
    <span class="auth-modal-mark" aria-hidden="true">CC</span>
    <p class="section-label">WITHDRAWAL AUTHORIZATION</p>
    <h2 id="auth-code-title">Confirm withdrawal</h2>
    <p class="auth-code-copy">Enter your four-digit authorization code to continue.</p>
    <form data-auth-form novalidate>
      <label class="withdraw-label" for="authorization-code">Authorization Code</label>
      <input class="auth-code-input" id="authorization-code" type="password" inputmode="numeric" autocomplete="one-time-code" maxlength="4" pattern="[0-9]{4}" aria-describedby="auth-code-error" />
      <p class="auth-code-error" id="auth-code-error" data-auth-error role="alert" aria-live="polite"></p>
      <div class="auth-modal-actions"><button class="button button--outline" type="button" data-auth-cancel>Cancel</button><button class="button button--lime" type="submit" data-auth-submit>Confirm withdrawal</button></div>
    </form>
  </section>
</div>`;

const dashboardPage = (showTransition = false) => `${dashboardHeader()}${showTransition ? brandTransition() : ''}
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
        <a class="quick-metric-card" href="#savings-details"><span>Savings balance</span><strong>$100,000.00</strong><small>+1.00% daily interest</small><span class="metric-arrow" aria-hidden="true">↗</span></a>
        <a class="quick-metric-card" href="#withdrawal"><span>Approved withdrawal</span><strong>$50,000.00</strong><small>Ready to disburse</small><span class="metric-arrow" aria-hidden="true">↗</span></a>
        <a class="quick-metric-card" href="#batch-note"><span>Pending withdrawal</span><strong>$500,000.00</strong><small>Batch withdrawal · processing</small><span class="metric-arrow" aria-hidden="true">↗</span></a>
      </section>
      <article class="reference-panel holdings-panel" id="savings-details">
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
    <aside class="dashboard-side-column" aria-label="Cards, withdrawals, and deposits">
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
        <div class="batch-note" id="batch-note"><span class="batch-dot"></span><span><strong>Batch withdrawal in progress</strong><small>Reference B-1042 · settles with next batch cycle · $500,000.00</small></span></div>
      </article>
      ${bitcoinDepositPanel()}
    </aside>
  </div>${footer()}</main>${withdrawalAuthModal()}`;

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
  const showTransition = sessionStorage.getItem('cryptoCapitalBrandTransition') === '1';
  sessionStorage.removeItem('cryptoCapitalBrandTransition');
  app.innerHTML = dashboardPage(showTransition);
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

const initializeHomepageMotion = async () => {
  const elements = [...document.querySelectorAll('.home-page .cinematic-copy > *, .home-page .cinematic-actions > *, .home-page .hero-content > *, .home-page .section-inner > *, .home-page .hero-floating-tag, .home-page .proof-stat, .home-page .fund-chart-card, .home-page .about-row, .home-page .bank-card, .home-page .mandate-card, .home-page .process-card, .home-page .faq-list details, .home-page .final-cta, .home-footer-inner > *, .home-page .market-context-item, .home-page .partner-card, .home-page .security-card, .home-page .track-record-card, .home-page .insight-card')];
  if (!elements.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let motionApi = null;
  try {
    // Motion is Framer's framework-agnostic animation API; the page remains usable without its CDN.
    motionApi = await import('https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm');
  } catch {
    motionApi = null;
  }

  elements.forEach((element, index) => {
    element.classList.add('scroll-reveal');
    element.style.setProperty('--reveal-delay', `${(index % 5) * 65}ms`);
  });

  if (motionApi?.inView && motionApi?.animate) {
    try {
      elements.forEach((element) => element.classList.add('scroll-reveal--motion'));
      elements.forEach((element, index) => {
        let revealed = false;
        motionApi.inView(element, () => {
          if (revealed) return;
          revealed = true;
          motionApi.animate(element, { opacity: [0, 1] }, { duration: .72, delay: (index % 5) * .065, ease: [.22, .7, .25, 1] });
          element.classList.add('is-visible');
        });
      });
      return;
    } catch {
      elements.forEach((element) => element.classList.remove('scroll-reveal--motion', 'is-visible'));
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -36px 0px' });
  elements.forEach((element) => observer.observe(element));
};
void initializeHomepageMotion();

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

const depositCopyButton = document.querySelector('[data-copy-deposit-address]');
depositCopyButton?.addEventListener('click', async () => {
  const address = document.querySelector('[data-deposit-address]')?.textContent?.trim();
  if (!address) return;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(address);
    } else {
      const field = document.createElement('textarea');
      field.value = address;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.append(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      if (!copied) throw new Error('Clipboard unavailable');
    }
    const originalMarkup = depositCopyButton.innerHTML;
    depositCopyButton.innerHTML = '<span aria-hidden="true">✓</span> Copied';
    showNotice('Address copied to clipboard.', 'success');
    window.setTimeout(() => { depositCopyButton.innerHTML = originalMarkup; }, 1800);
  } catch {
    showNotice('Clipboard unavailable in this browser.', 'error');
  }
});

const brandOverlay = document.querySelector('[data-brand-transition]');
if (brandOverlay) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    brandOverlay.remove();
  } else {
    window.setTimeout(() => brandOverlay.classList.add('is-leaving'), 1300);
    window.setTimeout(() => brandOverlay.remove(), 1660);
  }
}

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
    sessionStorage.setItem('cryptoCapitalBrandTransition', '1');
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
  requestedWithdrawal = amount;
  button.disabled = true;
  authInput.value = '';
  authInput.removeAttribute('aria-invalid');
  authError.textContent = '';
  authError.classList.remove('is-visible');
  authOverlay.hidden = false;
  requestAnimationFrame(() => {
    authOverlay.classList.add('is-open');
    authInput.focus();
  });
});

let requestedWithdrawal = null;
let isProcessingAuthorization = false;
const authOverlay = document.querySelector('[data-auth-overlay]');
const authInput = document.querySelector('#authorization-code');
const authError = document.querySelector('[data-auth-error]');
const authSubmit = document.querySelector('[data-auth-submit]');
const withdrawalButton = document.querySelector('[data-withdrawal]');
authInput?.addEventListener('input', () => {
  authInput.value = authInput.value.replace(/\D/g, '').slice(0, 4);
});
const closeAuthorizationModal = () => {
  if (!authOverlay || isProcessingAuthorization) return;
  authOverlay.classList.remove('is-open');
  window.setTimeout(() => { authOverlay.hidden = true; }, 220);
  if (withdrawalButton) withdrawalButton.disabled = false;
  requestedWithdrawal = null;
};

document.querySelectorAll('[data-auth-cancel]').forEach((button) => button.addEventListener('click', closeAuthorizationModal));
authOverlay?.addEventListener('click', (event) => {
  if (event.target === authOverlay) closeAuthorizationModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && authOverlay && !authOverlay.hidden) closeAuthorizationModal();
});

document.querySelector('[data-auth-form]')?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (isProcessingAuthorization || requestedWithdrawal === null) return;
  if (authInput.value !== mockAuthorizationCode) {
    authError.textContent = 'Incorrect Authorization Code. Please try again.';
    authError.classList.add('is-visible');
    authInput.setAttribute('aria-invalid', 'true');
    authInput.focus();
    return;
  }

  isProcessingAuthorization = true;
  authError.textContent = '';
  authError.classList.remove('is-visible');
  authInput.removeAttribute('aria-invalid');
  authInput.disabled = true;
  authSubmit.disabled = true;
  authSubmit.innerHTML = '<span class="button-spinner" aria-hidden="true"></span> Processing…';
  window.setTimeout(() => {
    const tableBody = document.querySelector('.activity-table tbody');
    if (tableBody) {
      const date = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
      const amount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(requestedWithdrawal);
      tableBody.insertAdjacentHTML('afterbegin', `<tr><td>${date}</td><td>Withdrawal request</td><td><span class="type-pill type-pill--withdrawal">WITHDRAWAL</span></td><td class="yield-amount">−${amount}</td><td><span class="pending-status">PENDING</span></td></tr>`);
    }
    authOverlay.classList.remove('is-open');
    window.setTimeout(() => { authOverlay.hidden = true; }, 220);
    authInput.disabled = false;
    authInput.value = '';
    authSubmit.disabled = false;
    authSubmit.innerHTML = 'Confirm withdrawal';
    if (withdrawalButton) withdrawalButton.disabled = false;
    requestedWithdrawal = null;
    isProcessingAuthorization = false;
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
