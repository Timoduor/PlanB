@echo off
echo ===========================================
echo       PlanB Fullstack Environment Setup
echo ===========================================
echo.

echo 1. Creating the PostgreSQL Database 'planB'...
set PGPASSWORD=0723200014@Timtim
psql -U postgres -c "CREATE DATABASE ""planB"";"
if %errorlevel% neq 0 (
    echo Note: If psql failed, the database might already exist or psql isn't in your PATH.
    echo But don't worry, setup will continue.
)

echo.
echo 2. Applying Django Migrations...
cd planb_backend
call venv\Scripts\activate.bat
python manage.py makemigrations
python manage.py migrate

echo.
echo 3. Starting the Django Backend Server...
start "PlanB Backend (Django)" cmd /k "cd planb_backend && call venv\Scripts\activate.bat && python manage.py runserver"

echo.
echo 4. Starting the Next.js Frontend Server...
start "PlanB Frontend (Next.js)" cmd /k "cd planb_frontend && npm run dev"

echo.
echo ===========================================
echo    All services have been started!
echo    Frontend running at: http://localhost:3000
echo    Backend running at:  http://localhost:8000/api
echo ===========================================
echo You can now close this window or press any key to exit.
pause >nul
