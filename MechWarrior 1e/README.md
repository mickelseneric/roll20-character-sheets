# MechWarrior 1st Edition Character Sheet

Interactive character sheet for MechWarrior 1st Edition RPG.

## Files

- **MechWarrior_1e.html** - Production sheet (submitted to Roll20)
- **MechWarrior_1e.css** - Stylesheet
- **MW1e_preview.html** - Local testing version (includes HTML wrapper)
- **sheet.json** - Sheet metadata
- **sync-sheet.js** - Script to sync changes between HTML files

## Development Workflow

### Making Changes

1. Edit `MechWarrior_1e.html` (the main production file)
2. Run the sync script to update the preview file:
   ```bash
   node sync-sheet.js
   ```
3. Open `MW1e_preview.html` in your browser to test changes
4. Repeat as needed

### Why Two HTML Files?

- **MechWarrior_1e.html**: Contains only the sheet markup (no `<!DOCTYPE>`, `<html>`, `<head>`, or `<body>` tags). This is what Roll20 requires.
- **MW1e_preview.html**: Full HTML document with proper structure for testing in a regular browser.

The sync script automatically copies the sheet content from the main file into the preview file's `<body>` tag.

### Manual Sync (Alternative)

If you prefer not to use the script, manually copy the entire contents of `MechWarrior_1e.html` and paste it between the `<body>` tags in `MW1e_preview.html`.

## Testing

Open `MW1e_preview.html` in a web browser to see how the sheet looks. Note that Roll20-specific features (sheet workers, roll buttons) won't function outside the Roll20 environment.

## Resources

See the main repository [CLAUDE.md](../CLAUDE.md) for complete development documentation and Roll20 sheet building guides.
