# PlanB (Full Stack)

A full-stack fleet management platform built with:

- **Backend:** Django + Django REST Framework (API lives under `planb_backend/`)
- **Frontend:** Next.js (app lives under `planb_frontend/`)

---

## ✅ Quick Start (Windows)

This repo includes a helper script to bootstrap the full stack locally.

### 1) Ensure prerequisites are installed

- **Python 3.11+** (used for Django backend)
- **Node.js 18+** (used for Next.js frontend)
- **PostgreSQL** (database)
- **Git** (for repo management)

> Windows note: The included script assumes `psql` is available on your `PATH`.

### 2) Run the full stack (backend + frontend)

From the repo root (`PlanB/`), run:

```powershell
.\setup_and_run.bat
```

The script will:

1. Create the PostgreSQL database `planB` (if it doesn't already exist)
2. Apply Django migrations (`planb_backend/`)
3. Start the Django backend at `http://localhost:8000/api`
4. Start the Next.js frontend at `http://localhost:3000`

> Press any key in the script window to stop the setup script. (It uses `pause` at the end.)

---

## 🧱 Project Structure

```
planb_backend/     # Django backend (REST API, auth, models, migrations)
planb_frontend/    # Next.js frontend (React UI + API integration)
setup_and_run.bat  # Windows helper to start dev environment
```

---

## 🧰 Running / Developing (Individual Parts)

### Backend (Django)

```powershell
cd planb_backend
# activate the venv (Windows)
venv\Scripts\activate.bat

# install dependencies (if not already installed)
pip install -r requirements.txt

# run migrations
python manage.py migrate

# start dev server
python manage.py runserver
```

### Frontend (Next.js)

```bash
cd planb_frontend
npm install
npm run dev
```

---

## 🧩 Notes

- The backend uses `.env` via `python-dotenv`. You can add a `.env` file in `planb_backend/` to override sensitive settings (e.g. `SECRET_KEY`, `DATABASE_URL`, etc.).
- The backend exposes its API under `/api` (e.g. `http://localhost:8000/api/<your-endpoint>`).

---

## ✅ Git Workflow (Push to GitHub)

1. Stage your changes:

```bash
git add .
```

2. Commit with a message:

```bash
git commit -m "Describe your changes"
```

3. Push to the remote:

```bash
git push origin main
```

> Replace `main` with your branch name if you're using a feature/topic branch.
