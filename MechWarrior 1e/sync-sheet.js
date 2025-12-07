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

// Extract the sheet content from main file (everything inside)
// The main file is just the sheet content without HTML wrapper
const sheetContent = mainContent;

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

// Build new preview content
const newPreviewContent =
    previewContent.substring(0, bodyStart) +
    '\n    ' + sheetContent.trim() + '\n' +
    previewContent.substring(bodyEnd);

// Write updated preview file
console.log('Updating MW1e_preview.html...');
fs.writeFileSync(PREVIEW_SHEET, newPreviewContent, 'utf8');

console.log('✓ Sync complete! MW1e_preview.html has been updated.');
console.log('\nFiles synchronized:');
console.log('  Source:      MechWarrior_1e.html');
console.log('  Destination: MW1e_preview.html');
