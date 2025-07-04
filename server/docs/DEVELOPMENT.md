# ⚙️ DEVELOPMENT.md - Developer Guide

This guide is for developers contributing to the project, including environment setup, testing, and CI/CD.

---

## 🧪 Setup for Testing

```bash
cd server/website

# Run tests with Django settings
pytest

# Run reporting test coverage.
pytest --cov --cov-report=xml
```

## 🐋 Docker for Development and Testing

```bash
# Build the container
# Install dependencies
docker-compose up --build
```

## Author

Presented &copy; 2025 by [ZIN](https://github.com/zin-it-dev/).
