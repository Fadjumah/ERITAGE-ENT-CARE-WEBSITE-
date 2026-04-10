#!/bin/bash
set -euo pipefail
cd "$CLAUDE_PROJECT_DIR"

NOW=$(date '+%Y-%m-%d %H:%M UTC')
BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")

# ── 1. Update CLAUDE.md session snapshot ─────────────────────────────────────
if [ -f "CLAUDE.md" ]; then
  RECENT_COMMITS=$(git log --oneline -5 2>/dev/null || echo "No commits yet")

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
fi

# ── 2. Commit ALL uncommitted changes (staged + unstaged tracked files) ───────
# Stage everything tracked that has changes
git add -u 2>/dev/null || true
# Also stage CLAUDE.md explicitly in case it's new/untracked
git add CLAUDE.md 2>/dev/null || true

# Commit if anything is staged
if ! git diff --cached --quiet 2>/dev/null; then
  git commit -m "chore: auto-update CLAUDE.md session snapshot [$NOW]" \
             --no-verify 2>/dev/null || true
fi

# ── 3. Push to origin (pull first if remote is ahead) ────────────────────────
ATTEMPTS=0
MAX_ATTEMPTS=4
DELAY=2

while [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; do
  if git push origin "$BRANCH" 2>/dev/null; then
    echo "[session-stop] Pushed $BRANCH to origin."
    break
  fi

  # Push failed — try pulling (rebase) to catch remote-ahead situations
  git pull origin "$BRANCH" --rebase --autostash 2>/dev/null || true

  ATTEMPTS=$((ATTEMPTS + 1))
  if [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; then
    echo "[session-stop] Push failed (attempt $ATTEMPTS). Retrying in ${DELAY}s..."
    sleep $DELAY
    DELAY=$((DELAY * 2))
  else
    echo "[session-stop] WARNING: Could not push $BRANCH to origin after $MAX_ATTEMPTS attempts."
  fi
done

exit 0
