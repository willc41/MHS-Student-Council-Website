#!/bin/bash
# Publishes the site: bumps the cache-busting version on data.js, main.js,
# and styles.css in every HTML page (so edits actually show up instead of
# being served from a stale browser/CDN cache), then commits and pushes.
#
# Usage: ./publish.sh "commit message here"

set -e
cd "$(dirname "$0")"

MSG="${1:-Update site content}"
PAGES="index.html officers.html events.html gallery.html resources.html contact.html"

for FILE in js/data.js js/main.js css/styles.css; do
  CURRENT=$(grep -o "${FILE}?v=[0-9]*" index.html | head -1 | grep -o "[0-9]*$")
  NEXT=$((CURRENT + 1))
  ESCAPED=$(echo "$FILE" | sed 's/\//\\\//g')
  sed -i '' "s/${ESCAPED}?v=${CURRENT}/${ESCAPED}?v=${NEXT}/g" $PAGES
  echo "Bumped ${FILE}: v${CURRENT} -> v${NEXT}"
done

git add -A
git commit -m "$MSG"
git push

echo ""
echo "Published. Live within about 10 minutes at https://mamkstudentcouncil.org"
