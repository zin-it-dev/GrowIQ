# 🛠️ INSTALL.md - Installation Guide

This guide walks you through setting up and running the project locally or on a development server.

---

## 📋 System Requirements

-   Python >= 3.10 (we're using Python 3.13)
-   pip >= 22.x
-   Git
-   SQLite (default) or PostgreSQL (for production)
-   (Optional) Docker + Docker Compose

---

## 📥 Clone and Setup Environment

```bash
git clone https://github.com/zin-it-dev/GrowIQ.git
cd server

# Create virtual environment
python -m venv .venv
source .venv/Scripts/activate  # (Linux/macOS: source .venv/bin/activate)

cd website

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser  # Create admin user
python manage.py runserver
```

## Author

Presented &copy; 2025 by [ZIN](https://github.com/zin-it-dev/).
