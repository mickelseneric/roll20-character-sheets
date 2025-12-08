#!/usr/bin/env node
/**
 * sync-sheet.js
 *
 * Synchronizes the sheet content between MechWarrior_1e.html and MW1e_preview.html
 *
 * Usage: node sync-sheet.js
 */

const fs = require('fs');
const path = require('path');

const MAIN_SHEET = path.join(__dirname, 'MechWarrior_1e.html');
const PREVIEW_SHEET = path.join(__dirname, 'MW1e_preview.html');

// Read both files
console.log('Reading sheet files...');
const mainContent = fs.readFileSync(MAIN_SHEET, 'utf8');
const previewContent = fs.readFileSync(PREVIEW_SHEET, 'utf8');

// Extract the sheet HTML content (excluding Roll20 sheet workers)
// Split main content by script tag
const mainScriptMatch = mainContent.match(/<script type="text\/worker">[\s\S]*?<\/script>/);
let sheetHTMLOnly = mainContent;
if (mainScriptMatch) {
    sheetHTMLOnly = mainContent.substring(0, mainScriptMatch.index).trim();
}

// Extract existing browser JavaScript from preview file
const previewScriptMatch = previewContent.match(/<script>[\s\S]*?<\/script>/);
const previewScript = previewScriptMatch ? previewScriptMatch[0] : '';

// Find the position in preview file where sheet content starts and ends
// Sheet content is between <body> and </body>
const bodyStartMatch = previewContent.match(/<body>\s*/);
const bodyEndMatch = previewContent.match(/\s*<\/body>/);

if (!bodyStartMatch || !bodyEndMatch) {
    console.error('Error: Could not find <body> tags in preview file');
    process.exit(1);
}

const bodyStart = bodyStartMatch.index + bodyStartMatch[0].length;
const bodyEnd = bodyEndMatch.index;

// Build new preview content: HTML from main + preserved browser JavaScript
const newPreviewContent =
    previewContent.substring(0, bodyStart) +
    '\n    ' + sheetHTMLOnly +
    '\n\n' + previewScript + '\n' +
    previewContent.substring(bodyEnd);

// Write updated preview file
console.log('Updating MW1e_preview.html...');
fs.writeFileSync(PREVIEW_SHEET, newPreviewContent, 'utf8');

console.log('✓ Sync complete! MW1e_preview.html has been updated.');
console.log('\nFiles synchronized:');
console.log('  Source:      MechWarrior_1e.html');
console.log('  Destination: MW1e_preview.html');
