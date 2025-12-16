#!/usr/bin/env node

/**
 * Sync Script for MechWarrior 1e Character Sheet
 *
 * This script extracts the sheet content from MechWarrior_1e.html
 * and updates MW1e_preview.html to match.
 *
 * Usage: node sync-sheet.js
 */

const fs = require('fs');
const path = require('path');

const MAIN_SHEET = 'MechWarrior_1e.html';
const PREVIEW_SHEET = 'MW1e_preview.html';

// Markers for extracting content
const START_MARKER = '<div class="sheet-mechwarrior">';
const END_MARKER = '</div>\n\n<!-- Roll Templates -->';

function readFile(filename) {
    const filepath = path.join(__dirname, filename);
    try {
        return fs.readFileSync(filepath, 'utf8');
    } catch (err) {
        console.error(`Error reading ${filename}:`, err.message);
        process.exit(1);
    }
}

function writeFile(filename, content) {
    const filepath = path.join(__dirname, filename);
    try {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`✓ Updated ${filename}`);
    } catch (err) {
        console.error(`Error writing ${filename}:`, err.message);
        process.exit(1);
    }
}

function extractSheetContent(html) {
    const startIdx = html.indexOf(START_MARKER);
    const endIdx = html.indexOf(END_MARKER);

    if (startIdx === -1 || endIdx === -1) {
        console.error('Error: Could not find sheet content markers');
        process.exit(1);
    }

    return html.substring(startIdx, endIdx);
}

function updatePreview(previewHtml, sheetContent) {
    const startIdx = previewHtml.indexOf(START_MARKER);
    const endIdx = previewHtml.indexOf(END_MARKER);

    if (startIdx === -1 || endIdx === -1) {
        console.error('Error: Could not find markers in preview file');
        process.exit(1);
    }

    const before = previewHtml.substring(0, startIdx);
    const after = previewHtml.substring(endIdx);

    return before + sheetContent + after;
}

function main() {
    console.log('MechWarrior 1e Sheet Sync Script');
    console.log('=================================\n');

    // Read both files
    console.log(`Reading ${MAIN_SHEET}...`);
    const mainHtml = readFile(MAIN_SHEET);

    console.log(`Reading ${PREVIEW_SHEET}...`);
    const previewHtml = readFile(PREVIEW_SHEET);

    // Extract sheet content from main file
    console.log('Extracting sheet content...');
    const sheetContent = extractSheetContent(mainHtml);

    // Update preview file
    console.log('Updating preview file...');
    const updatedPreview = updatePreview(previewHtml, sheetContent);

    // Write updated preview
    writeFile(PREVIEW_SHEET, updatedPreview);

    console.log('\n✓ Synchronization complete!');
}

// Run the script
main();
