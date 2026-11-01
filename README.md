# Home Tasks

A free checklist app for Talent (housekeeper), Sattiel (gardener) and cat sitting, with an admin page for you to add and delete tasks. It runs on GitHub Pages, installs to the phone's home screen, and sends you a WhatsApp report. No app store, no accounts for staff, no cost.

## 1. Put it on GitHub (once)

1. Sign in at github.com and click **New repository**. Name it `home-tasks` and set it to **Public** (free GitHub Pages needs a public repo).
2. Click **uploading an existing file**, drag in all the files from the zip, and click **Commit changes**.
3. Go to **Settings → Pages**. Under *Branch*, pick `main` and `/ (root)`, then **Save**.
4. After a minute the app is live at `https://YOUR-USERNAME.github.io/home-tasks/`.

> The repo is public, so anyone who finds it can read the task list. Keep it to chores, with no alarm, key or gate details.

## 2. Send each person their link

- Talent: `https://YOUR-USERNAME.github.io/home-tasks/?who=talent`
- Sattiel: `https://YOUR-USERNAME.github.io/home-tasks/?who=sattiel`
- Cat sitting: `https://YOUR-USERNAME.github.io/home-tasks/?who=cats`

To install: on **Android (Chrome)**, tap **⋮**, then **Add to Home screen**. On **iPhone (Safari)**, tap **Share**, then **Add to Home Screen**.

## 3. Your admin page

Your admin page is at `https://YOUR-USERNAME.github.io/home-tasks/admin.html`. Bookmark it. Staff never see it.

**Create your admin key (once, about 3 minutes)**

1. On GitHub, click your photo, then **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
2. Name it `Home Tasks admin` and set the expiry to 1 year. Put a reminder in your calendar to renew it.
3. Under **Repository access**, choose **Only select repositories → home-tasks**.
4. Under **Permissions → Repository permissions**, set **Contents** to **Read and write**.
5. Click **Generate token** and copy it. It starts with `github_pat_`.
6. Open the admin page, paste the key, and tap **Log in**. Leave *Keep me logged in on this device* ticked on your own phone or laptop.

The key is your password. It can only change this one repository. If you ever lose the device, delete the key on GitHub and make a new one.

**What you can do there**

- Switch between Talent, Sattiel and Cat sitting.
- **Delete** a task, which you can undo before saving. **Add a task** to show every visit, on certain weeks of the month, in certain months, or on one day only.
- **Show only what appears on [date]**: check what this coming visit's list looks like.
- **Remove past one-day tasks**: clears old extras in one go.
- **Save to app** sends the changes to the phones. They get the new list the next time the app opens.

## How the staff app works

- Every task has **Done** / **Not done** buttons.
- Anything not marked Done (including tasks left unmarked) comes back at the top of the next visit under **Carried over from last visit**, until it's done.
- The lists follow your usual order: arrival, every visit, this week's rotation, pool, lawn and seasonal jobs, then before leaving.
- Monthly, 3-monthly and yearly deep cleans rotate through the weeks of the month. Seasonal garden jobs (lawn, pruning, frost protection, gutters) only appear in their months.
- **Send report on WhatsApp** sends you the day's ❌ not done, ⚪ not marked and ✅ done lists, plus their notes. Set your WhatsApp number in `tasks.json` (`"OWNER_WHATSAPP"`, e.g. 082 123 4567 becomes `27821234567`). You can edit it on GitHub with the pencil icon.

Done / Not done history is saved on each staff member's phone. You see it through the WhatsApp reports.
