# Debugging: Website Blocked by “Advanced Security” on WiFi

When scriptlyapp.com is blocked only **sometimes** (e.g. on certain WiFi networks), the block happens **before** your site or Cloudflare sees the request. So you can’t fix this with app logs or backend changes alone—you need to find out **what** is being blocked (DNS, IP, TLS/SNI, or category) and then fix it at the right layer.

---

## 1. Why in-app logging can’t see the block

- **Block at DNS:** The device never gets the real IP for scriptlyapp.com.
- **Block at IP/firewall:** The TCP/TLS connection to Cloudflare is dropped.
- **Block at TLS/SNI (e.g. DPI):** The handshake is blocked or interfered with.

In all cases, the request never reaches your origin (or sometimes not even Cloudflare), so **no code on your server or in your React app runs**. Debugging must be done from the **client/network side** and in **Cloudflare**.

---

## 2. Run these checks when the site is blocked

Do this from a device on the **blocking** WiFi.

### A. DNS

- **Browser:** Try opening `https://www.scriptlyapp.com` and note the exact error (e.g. “site can’t be reached”, “connection refused”, “blocked”, etc.).
- **Terminal (macOS/Linux):**
  ```bash
  nslookup www.scriptlyapp.com
  # or
  dig www.scriptlyapp.com
  ```
- **Interpret:** If you get no answer or a wrong IP (e.g. block page), the block is **DNS-level** (router/ISP “Advanced Security” or corporate DNS filter).

### B. Bypass DNS (to see if it’s DNS-only)

- On the same blocking network, set the device DNS to **1.1.1.1** (Cloudflare) or **8.8.8.8** (Google), then reload the site.
- If it works after changing DNS only → the block is **DNS/category filtering** on that network.

### C. Direct IP (only for quick testing)

- From a network where the site works, run:
  ```bash
  nslookup www.scriptlyapp.com
  ```
  Note the A record IP (Cloudflare edge).
- On the blocking network, try opening `https://<that-ip>` in the browser (you’ll get a cert warning; only to test connectivity).
- If **IP works** but **domain doesn’t**, the block is likely **by domain/SNI**, not by IP.

### D. Corporate / DPI (Encrypted Client Hello)

- Some “Advanced Security” or corporate firewalls use **deep packet inspection (DPI)**. Cloudflare uses **ECH (Encrypted Client Hello)**; some firewalls block or break that and the site fails.
- **You can’t disable ECH in the Cloudflare dashboard** (especially on free tier). Workarounds:
  - **End users:** Use [Cloudflare WARP](https://one.one.one.one/) on the affected device so traffic goes through Cloudflare and can bypass local DPI for your site.
  - **Network admins:** Whitelist Cloudflare / “Content Delivery Networks” from TLS inspection, or allow ECH.

---

## 3. Make the site less likely to be blocked

These don’t fix the network, but help with filters that block “suspicious” or poorly configured sites.

### Your site / repo

- **HTTPS only:** Already the case with Cloudflare.
- **Security headers:** Add standard headers (see below) so the site looks correct to scanners and filters.
- **No mixed content:** All assets and links should be `https://` (your repo already uses HTTPS in meta/links).
- **Clean content:** Avoid anything that could be miscategorized (e.g. adult, gambling, proxy/VPN wording) in copy or meta.

### Cloudflare (dash.cloudflare.com)

- **Security Level:** Avoid “I’m Under Attack” for normal traffic; use “Medium” or “Low” so legitimate visitors aren’t challenged.
- **Bot Fight Mode / WAF:** If you have strict rules, make sure they don’t block whole regions or ISPs; add exceptions if needed.
- **SSL/TLS:** Use “Full (strict)” to your origin; keep “Minimum TLS Version” at 1.2 (or 1.3 if your origin supports it). No need to enable “Opportunistic Encryption” or nonstandard options that might confuse middleboxes.

### If the block is “Advanced Security” on home WiFi (e.g. xFi, Netgear, etc.)

- **Whitelist:** In the router or ISP app (e.g. xFi Advanced Security), add `scriptlyapp.com` and `www.scriptlyapp.com` to the allow list.
- **DNS:** On the device or router, use 1.1.1.1 or 8.8.8.8 so filtering isn’t done by the ISP’s default DNS.
- **False positive:** If the ISP has a “report incorrect block” or “request review” (e.g. Comcast’s form), submit scriptlyapp.com so they can recategorize it.

---

## 4. Summary

| What you see | Likely cause | What to do |
|--------------|--------------|------------|
| “Site can’t be reached” / no IP in `nslookup` | DNS block / category filter | Change DNS to 1.1.1.1 or 8.8.8.8; whitelist domain in router/Advanced Security; report false positive to ISP. |
| DNS resolves, connection fails or times out | IP/firewall or TLS/SNI (e.g. DPI) | Try WARP on the device; ask network admin to allow Cloudflare / CDN or ECH. |
| Works on some networks, not others | Different DNS or firewall policy per network | Use the checks above on the failing network; apply the matching fix (DNS vs firewall/ECH). |

You **cannot** guarantee “no fail across all WiFi networks” from your side alone—some networks block categories, CDNs, or ECH by policy. The above steps let you **debug** each case and apply the right fix (DNS, whitelist, WARP, or admin change).
