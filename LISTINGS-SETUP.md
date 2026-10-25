# Listings: update the website from one Google Sheet

The `/listings` page (and the "Plots" nav link) reads plots from **one Google Sheet**.
Edit the sheet, and the site refreshes within a few minutes. No code, no deploy.

## 1. Make the sheet

Create a Google Sheet with these columns in **row 1** (exact names, lowercase):

```
id, title, city, locality, type, size, price, status, approval, highlights, photo, map, published
```

- **city** — use `Sonipat`, `Gurgaon` or `Vrindavan` (these drive the filter tabs).
- **type** — e.g. `Plot`, `Farmland`, `Farmhouse`.
- **price** — write it how you want it shown, e.g. `45 Lakh` or `3.5 Cr`.
- **status** — `Available`, `Hold` or `Sold` (shown as a coloured tag).
- **approval** — e.g. `DTCP approved`, `MVDA approved`, `CLU in process`.
- **photo** — a public image link (optional; cards show a clean placeholder if empty).
- **map** — a Google Maps link (optional).
- **published** — `yes` to show the row, `no` to hide it.

A ready-made template with example rows is at `public/listings-template.csv` — open it to copy the exact columns.

## 2. Publish the sheet as CSV

In the sheet: **File → Share → Publish to web → (choose the sheet tab) → Comma-separated values (.csv) → Publish.**
Copy the link it gives you (it ends in `output=csv`).

## 3. Connect it

Add this one environment variable wherever the site is hosted (Vercel → Project → Settings → Environment Variables), and in a local `.env.local` for development:

```
LISTINGS_CSV_URL=<the published CSV link from step 2>
```

Redeploy once. After that, every edit to the sheet shows on the site within about 5 minutes.

## If it is not set

With no `LISTINGS_CSV_URL`, the `/listings` page shows an honest "call us for the current list" message — never fake plots. So it is safe to ship before the sheet is connected.
