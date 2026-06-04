#!/usr/bin/env bash
# =============================================================================
# Render build script — runs on every deploy before the web process starts.
# Render executes this as the "Build Command" in the web service settings.
# =============================================================================
set -o errexit   # Exit immediately on any error

echo "--- Installing staging dependencies ---"
pip install -r requirements-staging.txt

echo "--- Collecting static files ---"
python manage.py collectstatic --no-input

echo "--- Running database migrations ---"
python manage.py migrate --run-syncdb

echo "--- Build complete ---"
