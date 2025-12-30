# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) and other coding agents when working with code in this repository.

## Repository Overview

This is the **Roll20 Character Sheets** repository – a community-contributed collection of 800+ character sheets for tabletop RPGs used on Roll20.net. Each sheet is in its own directory and consists of HTML, CSS, preview images, and metadata files.

## Project Focus

This repository was forked from the original Roll20 Character Sheets repository to build the MechWarrior 1e Character Sheet. All development should only happen in the `MechWarrior_1e` directory. Any pull requests or issues should be directed there.

## Repository Structure

### Sheet Directories
Each game system has its own directory (e.g., `DnD_5e/`, `Call_of_Cthulhu_7th_Ed/`, `5eShaped/`) containing:
- `<sheetname>.html` - Sheet structure and functionality
- `<sheetname>.css` - Styling for the sheet
- `preview.(jpg|png|gif)` - Preview image shown to users
- `sheet.json` - **Critical metadata file** defining sheet configuration
- `translation.json` - (Optional) Internationalization support
- `translations/` - (Optional) Directory with language-specific translation files

### Key Root Files
- `approved.yaml` - Registry of officially approved sheets with publisher information
- `CODEOWNERS` / `CODEOWNERS.json` - Defines who maintains each sheet
- `.circleci/config.yml` - CI/CD pipeline for deploying sheets to Roll20
- `.github/workflows/` - GitHub Actions for validation and testing

### Important Directories
- `.actions/sheet-checks/` - TypeScript validation tool that runs on all PRs
- `contrib/` - Contributed tools like `sheet-pixie` for sheet development
- Individual sheet folders may have `src/`, `source/`, or `development/` subdirectories for build processes

## sheet.json Format

The `sheet.json` file is **critical** for every sheet. Required fields:
```json
{
  "html": "SheetName.html",
  "css": "SheetName.css",
  "authors": "Author Name (Roll20 username)",
  "roll20userid": "123456",
  "preview": "preview.png",
  "instructions": "Description of the sheet"
}
```

Optional but important fields:
- `"compendium": "dnd5e"` - Links to Roll20 compendium
- `"legacy": true` - Marks deprecated sheets
- `"version": "1234567890"` - Unix timestamp for versioning
- `"patreon": "https://..."` - Author's Patreon link

## Building Character Sheets: Technical Details

> **📚 Complete Documentation Available**: The entire Roll20 wiki for character sheet development has been saved locally to `docs/Roll20 Wiki/`. When building character sheets, read these files directly rather than trying to access external wikis.

### Required Files (Minimum)
A character sheet **requires four files minimum** in an appropriately named subfolder:

1. **`<sheetname>.html`** - Structure and functionality
   - Inputs to store user data
   - Buttons to make rolls to the VTT
   - Repeating sections for lists (inventory, skills, etc.)
   - Roll templates for chat output formatting
   - Sheet workers for complex calculations

2. **`<sheetname>.css`** - Styling and layout
   - Visual design of the sheet
   - CSS can also handle tabs, progress bars, custom UI elements
   - See: https://wiki.roll20.net/CSS_Wizardry
   - **IMPORTANT**: Always check Roll20's default stylesheet (`base.css`) when styling components
     - Roll20 applies default styles to common elements (buttons, inputs, selects, etc.)
     - **CRITICAL**: Common issues that require explicit overrides:
       - `input, textarea, select, .uneditable-input` have `width: 210px` by default
       - `input, textarea, select` have `margin-bottom: 9px` by default
       - `button[type="roll"]` has `justify-content: center` by default
       - Use `!important` when necessary to override Roll20's defaults
     - When UI doesn't behave as expected (overflow, wrong widths, unexpected spacing), check if Roll20's base.css is interfering
     - **Roll Templates**: CSS variables (custom properties) don't work in roll templates because they're rendered in chat outside the character sheet scope. Always use hardcoded values for roll template styling.

3. **`preview.(jpg|png|gif)`** - Preview image shown before sheet selection

4. **`sheet.json`** - **CRITICAL** metadata file
   - See: https://wiki.roll20.net/Sheet.json for complete specification

### Essential Roll20 Concepts & Local Documentation

**IMPORTANT**: Complete Roll20 wiki documentation is available locally in `MechWarrior 1e/docs/Roll20 Wiki/`.

#### Core Documentation Files
Read these files in order when learning to build sheets:

1. **`Building Character Sheets - Roll20 Wiki.html`** - Main overview
2. **`Character Sheet Development_HTML - Roll20 Wiki.html`** - HTML structure
3. **`Button - Roll20 Wiki.html`** - Roll buttons and macros
4. **`Character Sheet Development_Repeating Section - Roll20 Wiki.html`** - Repeating sections
5. **`Building Character Sheets_Roll Templates - Roll20 Wiki.html`** - Roll templates
6. **`Sheet Worker Scripts - Roll20 Wiki.html`** - JavaScript sheet workers
7. **`Sheet.json - Roll20 Wiki.html`** - Metadata file format
8. **`Building Character Sheets_Auto-Calc - Roll20 Wiki.html`** - Auto-calculations
9. **`CSS Wizardry - Roll20 Wiki.html`** - Advanced CSS techniques
10. **`Complete Guide to Macros & Rolls - Roll20 Wiki.html`** - Comprehensive Guid for Text Chat, Dice Rolling and Macros
11. **`Roll Templates - Roll20 Wiki.html`** - Displaying roll results
12. **`Inline Rolls - Roll20 Wiki.html`** - Dice roll macros for Roll Templates
13. **`Custom Roll Parsing - Roll20 Wiki.html`** - Combine the functionality of roll buttons and action buttons

#### Tutorial: A Sheet Author's Journey
Step-by-step tutorial in `docs/Roll20 Wiki/A Sheet Author's Journey/`:
- **`1.html`** - The Beginning
- **`2.html`** - (Continue reading in sequence)
- **`3.html`** through **`6.html`** - Progressive tutorial

#### Best Practices & Common Patterns
- **`Character Sheet Development_Best Practice - Roll20 Wiki.html`**
- **`Character Sheet Development_Common Mistakes - Roll20 Wiki.html`**
- **`Character Sheet Development_Bugs & Quirks - Roll20 Wiki.html`**
- **`Character Sheet Development_Pattern Libraries - Roll20 Wiki.html`**
- **`Sheet Worker Snippets - Roll20 Wiki.html`**
- **`Sheetworker examples for Non-programmers - Roll20 Wiki.html`**

#### Advanced Topics
- **`Character Sheet Development_Complete Examples - Roll20 Wiki.html`**
- **`Character Sheet Development_Tools - Roll20 Wiki.html`**
- **`Character Sheet Development_Debugging - Roll20 Wiki.html`**
- **`Charactermancer Development - Roll20 Wiki.html`** - Character creation wizard
- **`Compendium Integration – Roll20 Help Center.html`** - Content integration
- **`Beacon Sheet Development Kit - Roll20 Wiki.html`** - Modern development framework

#### Reference Documentation
- **`Designing Character Sheet Layout - Roll20 Wiki.html`** - UI/UX guidance
- **`Complete Guide to Macros & Rolls - Roll20 Wiki.html`** - Roll syntax
- **`Dice Reference - Roll20 Wiki.html`** - Dice rolling mechanics
- **`Glossary - Roll20 Wiki.html`** - Terms and definitions
- **`Minimum Requirements & Best Practices – Roll20 Help Center.html`** - Standards

**Online Documentation** (if docs unavailable):
- Building Character Sheets: https://wiki.roll20.net/Building_Character_Sheets
- Roll Buttons: https://wiki.roll20.net/Button#Roll_Button
- Repeating Sections: https://wiki.roll20.net/Repeating_Sections
- Roll Templates: https://wiki.roll20.net/Building_Character_Sheets/Roll_Templates
- Sheet Workers: https://wiki.roll20.net/Sheet_Worker_Scripts
- sheet.json format: https://wiki.roll20.net/Sheet.json

### Attribute Naming Convention
**All Roll20 attributes MUST use the `name="attr_<name>"` format**:
```html
<!-- Correct -->
<input type="number" name="attr_strength" value="10" />
<input type="text" name="attr_character_name" />

<!-- Attributes can be referenced with @{} syntax -->
<input name="attr_total_bonus" value="@{strength} + @{dexterity}" disabled="true" />
```

### Roll Buttons
Create clickable buttons that post rolls to chat:
```html
<!-- Basic roll button -->
<button type="roll" name="roll_strength"
        value="/roll 1d20 + @{strength}">
    Roll Strength
</button>

<!-- Using default roll template -->
<button type="roll" name="roll_save"
        value="&{template:default} {{name=Reflexes Save}} {{roll=[[3d6kh2 + ?{Modifier|0} - 12 + @{ref}]]}}">
</button>

<!-- Roll syntax -->
<!-- [[2d6 + 3]] - inline roll -->
<!-- ?{Modifier|0} - query user for input, default 0 -->
<!-- 3d6kh2 - roll 3d6, keep highest 2 -->
<!-- @{attribute_name} - reference character attribute -->
```

### Auto-Calculation Fields
Use `disabled="true"` with attribute references for auto-calculated values:
```html
<!-- Auto-calculates from other attributes -->
<input type="number" name="attr_total_defense"
       value="@{armor_bonus} + @{dexterity_mod}"
       disabled="true" />

<!-- Complex calculations -->
<input type="number" name="attr_athletic_save"
       value="(18 - @{build} - @{reflexes})"
       disabled="true" />
```

### Repeating Sections
For variable-length lists (skills, inventory, weapons):
```html
<!-- Repeating section container -->
<fieldset class="repeating_weapons">
    <input type="text" name="attr_weapon_name" />
    <input type="number" name="attr_weapon_damage" />
    <button type="roll" name="roll_attack"
            value="/roll 1d20 + @{attack_bonus}">
        Attack
    </button>
</fieldset>

<!-- Other examples from real sheets -->
<fieldset class="repeating_skills">...</fieldset>
<fieldset class="repeating_inventory">...</fieldset>
<fieldset class="repeating_specialization">...</fieldset>
```

### Roll Templates
Define custom chat output formatting at the end of HTML:
```html
<!-- Define a custom roll template -->
<rolltemplate class="sheet-rolltemplate-custom">
    <table>
        <tr>
            <th colspan="2">{{title}}</th>
        </tr>
        {{#roll}}
        <tr>
            <td colspan="2">{{roll}}</td>
        </tr>
        {{/roll}}
        {{#description}}
        <tr>
            <td colspan="2">{{description}}</td>
        </tr>
        {{/description}}
    </table>
</rolltemplate>

<!-- Use in a button -->
<button type="roll" value="&{template:custom} {{title=Attack}} {{roll=[[1d20]]}}">
</button>
```

### Sheet Workers
JavaScript for complex logic and reactive calculations:
```html
<script type="text/worker">
    // Listen for attribute changes
    on("change:strength change:strength_mod", function() {
        getAttrs(["strength"], function(values) {
            var str = parseInt(values.strength) || 10;
            var mod = Math.floor((str - 10) / 2);
            setAttrs({
                strength_mod: mod
            });
        });
    });

    // Repeating section listeners
    on("change:repeating_skills", function(eventInfo) {
        // Handle skill changes
    });
</script>
```

### Tabs (CSS-based)
Use radio inputs + CSS for tabbed interfaces:
```html
<!-- Tab controls -->
<input type="radio" name="attr_sheet_tab" class="sheet-tab-character" value="1" checked />
<span class="sheet-tab">Character</span>
<input type="radio" name="attr_sheet_tab" class="sheet-tab-inventory" value="2" />
<span class="sheet-tab">Inventory</span>

<!-- Tab content (shown/hidden via CSS) -->
<div class="sheet-character">
    <!-- Character tab content -->
</div>
<div class="sheet-inventory">
    <!-- Inventory tab content -->
</div>
```

CSS controls visibility:
```css
.sheet-character { display: none; }
.sheet-tab-character:checked ~ .sheet-character { display: block; }
.sheet-inventory { display: none; }
.sheet-tab-inventory:checked ~ .sheet-inventory { display: block; }
```

## Current Project: MechWarrior 1e Character Sheet

### Project Overview
Developing an **interactive** character sheet for MechWarrior 1st Edition in the `MechWarrior 1e/` directory. This is an iterative development project focused on creating a modern, feature-rich sheet with auto-calculations and roll integration.

### Development Approach
- **Iterative development** - Build features incrementally
- **Interactive, not static** - Unlike the simplistic MechWarrior 2e sheet, this should include:
  - Click-to-roll buttons for skills
  - Auto-calculation of derived statistics
  - Sheet workers for reactive updates
  - Modern, clean visual design

### Sheet Worker Implementation

**`MechWarrior_1e.html` (Roll20 Production Sheet):**
- **ALWAYS** use `<script type="text/worker">` for sheet workers
- **ALWAYS** use Roll20 API functions:
  - `on()` for event listeners (e.g., `on('change:body change:dex', function() {...})`)
  - `getAttrs([...], function(values) {...})` to read attributes
  - `setAttrs({...})` to update attributes
  - `on('sheet:opened', function() {...})` for initialization
- Follow Roll20 sheet worker best practices
- Calculated fields MUST have `disabled="true"` attribute

### Reference Materials

1. **Documentation**: `MechWarrior 1e/docs/Roll20 Wiki/`
   - **COMPLETE Roll20 wiki saved locally** – All character sheet development guides
   - See "Essential Roll20 Concepts & Local Documentation" section above for index
   - **A Sheet Author's Journey tutorial**: `docs/Roll20 Wiki/A Sheet Author's Journey/`
     - Step-by-step tutorial files `1.html` through `6.html`

2. **Reference image**: `MechWarrior 1e/img/character-sheet.png` - Original 1e character sheet
   - Use this ONLY for understanding what data/stats to include
   - DO NOT replicate the visual design - create a modern layout instead

3. **Example sheets to study** (in order of priority):
   - `Pathfinder by Roll20/` - Roll20's official Pathfinder sheet
     - Modern design patterns
     - Complex auto-calculations
     - Professional layout
   - `Pathfinder Community/` - Community-contributed version
     - Source code in `dev/` subdirectory
     - Uses webpack build process
     - Advanced sheet worker patterns
   - `Star Wars FFG API-Compatible/` - Fantasy Flight Games Star Wars
     - Interactive skill rolls
     - Collapsible sections
     - Custom roll templates
     - Complex character progression system

4. **Avoid using as reference**:
   - `MechWarrior 2e/` - Too simplistic, lacks interactivity (marked as legacy)

### Key Features to Implement
Based on MechWarrior 1e mechanics, the sheet should support:
- Attribute management and derived stats
- Skill system with clickable roll buttons
- Combat statistics and tracking
- Equipment/inventory management
- Character progression tracking
- Custom roll templates for MechWarrior dice mechanics

### Technical Patterns to Use
From the reference sheets:
- **Roll buttons**: Use `<button type="roll">` with inline roll templates
- **Auto-calculations**: Use `disabled="true"` inputs with `value="@{attr1}+@{attr2}"`
- **Sheet workers**: JavaScript in `<script type="text/worker">` for complex logic
- **Repeating sections**: For inventory, skills, weapons, etc.
- **Roll templates**: Custom `<rolltemplate>` definitions for chat output
- **Tabs/sections**: Use CSS-based tabs for organizing large sheets

### File Structure Required
```
MechWarrior 1e/
├── MechWarrior_1e.html          # Main sheet HTML
├── MechWarrior_1e.css           # Styling
├── sheet.json                   # Metadata (critical!)
├── preview.png                  # Preview image
├── img/                         # Reference images
│   └── character-sheet.png      # Original 1e sheet reference
└── translation.json             # (Optional) i18n support
```

### MechWarrior 1e Rules References
The following files are found in `MechWarrior 1e/docs` directory and contain MechWarrior 1e rules and should be referenced when adding or updating features in the Character Sheet.
- **CHARACTER_CREATION_RULES_REFERENCE.md**: `MechWarrior 1e/docs/Roll20 Wiki/MechWarrior 1e Core Rules/`
- **RULES_REFERENCE.md**: `MechWarrior 1e/docs/Roll20 Wiki/MechWarrior 1e Skills Rules/`

