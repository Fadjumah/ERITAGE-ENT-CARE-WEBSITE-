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

exit 0
