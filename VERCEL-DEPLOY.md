# Deploying CryptoCapital on Vercel

This project is a static HTML/CSS/JavaScript demo. `server.mjs` is only for local preview; Vercel's static deployment does not run it as a persistent server.

## Deploy

1. Commit `vercel.json` to the repository's production branch (`main`).
2. In Vercel, open the project and select **Settings → Build and Deployment**.
3. Set **Framework Preset** to **Other**.
4. Leave the Build Command empty (or use the `vercel.json` configuration), and set **Output Directory** to `.`.
5. Redeploy the latest commit from **Deployments**.
6. Test `/`, `/cards`, `/login`, `/dashboard`, and `/settings` on the deployed domain.

If the deployment still returns 404, open the latest deployment and check its **Build Logs** and **Deployment Details**. Confirm the production branch is `main` and that the deployment is assigned to `cryptocapital-site.vercel.app`.

## Important demo limitation

The current JavaScript describes this as a fictional front-end visual review and uses mock client access and mock withdrawal authorization. It does not connect to a real authentication system, account database, wallet, or payment processor. Do not use it to accept deposits or represent displayed balances/withdrawals as real. A production financial service needs secure server-side authentication, transaction processing, audit logs, and appropriate compliance review.
