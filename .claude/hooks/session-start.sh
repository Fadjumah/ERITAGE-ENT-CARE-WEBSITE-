#!/bin/bash
set -euo pipefail
cd "$CLAUDE_PROJECT_DIR"

# Install dependencies if a known package manager file is present
if [ -f "package.json" ]; then
  echo "[session-start] Installing npm dependencies..."
  npm install --silent
  echo "[session-start] npm install complete."
elif [ -f "requirements.txt" ]; then
  echo "[session-start] Installing Python dependencies..."
  pip install -r requirements.txt -q
  echo "[session-start] pip install complete."
elif [ -f "Gemfile" ]; then
  echo "[session-start] Installing Ruby dependencies..."
  bundle install -q
  echo "[session-start] bundle install complete."
fi

# Warn if .env is missing
if [ ! -f ".env" ] && [ -f ".env.example" ]; then
  echo "[session-start] WARNING: .env file is missing. Copy .env.example and fill in values."
elif [ ! -f ".env" ]; then
  echo "[session-start] WARNING: .env file is missing."
fi

echo "[session-start] Session ready."
