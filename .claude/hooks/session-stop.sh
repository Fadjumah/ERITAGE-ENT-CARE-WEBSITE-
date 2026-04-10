#!/bin/bash
set -euo pipefail
cd "$CLAUDE_PROJECT_DIR"

[ ! -f "CLAUDE.md" ] && exit 0

RECENT_COMMITS=$(git log --oneline -5 2>/dev/null || echo "No commits yet")
NOW=$(date '+%Y-%m-%d %H:%M UTC')
BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")

NEW_STATUS="## Last Session Snapshot (auto-updated: $NOW)
- **Branch:** \`$BRANCH\`
- **Last 5 commits:**
\`\`\`
$RECENT_COMMITS
\`\`\`"

if grep -q "## Last Session Snapshot" CLAUDE.md; then
  BEFORE=$(sed '/^## Last Session Snapshot/,$d' CLAUDE.md)
  printf '%s\n\n%s\n' "$BEFORE" "$NEW_STATUS" > CLAUDE.md
else
  printf '\n---\n\n%s\n' "$NEW_STATUS" >> CLAUDE.md
fi

git add CLAUDE.md 2>/dev/null || true
git diff --cached --quiet 2>/dev/null || \
  git commit -m "chore: auto-update CLAUDE.md session snapshot [$NOW]" \
             --no-verify 2>/dev/null || true

# ── Auto-push to origin so Vercel picks up changes ───────────────────────────
# Retries up to 4 times with exponential backoff (2s, 4s, 8s, 16s).
PUSH_BRANCH="${BRANCH}"
ATTEMPTS=0
MAX_ATTEMPTS=4
DELAY=2

while [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; do
  if git push origin "$PUSH_BRANCH" 2>/dev/null; then
    echo "[session-stop] Pushed $PUSH_BRANCH to origin."
    break
  fi
  ATTEMPTS=$((ATTEMPTS + 1))
  if [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; then
    echo "[session-stop] Push failed (attempt $ATTEMPTS). Retrying in ${DELAY}s..."
    sleep $DELAY
    DELAY=$((DELAY * 2))
  else
    echo "[session-stop] WARNING: Could not push $PUSH_BRANCH to origin after $MAX_ATTEMPTS attempts."
  fi
done

exit 0
