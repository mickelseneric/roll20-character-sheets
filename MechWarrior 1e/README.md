# MechWarrior 1st Edition Character Sheet

Interactive character sheet for MechWarrior 1st Edition RPG.

## Files

- **MechWarrior_1e.html** - Production sheet (submitted to Roll20)
- **MechWarrior_1e.css** - Stylesheet
- **sheet.json** - Sheet metadata
- **MW1e_preview.html** - **DEPRECATED** local testing version (DO NOT USE)
- **sync-sheet.js** - **DEPRECATED** sync script (DO NOT USE)

## Core Features

- **Interactive Dialogs**: Skill, Attribute, and Attack rolls use custom modal-style dialogs for situational modifiers.
- **Unified Terminology**: Uses "Target Mods" to consistently handle penalties (positive) and bonuses (negative) added to the base target.
- **XP Integration**: Allows spending XP Die Roll Modifiers on any roll, with costs clearly displayed.
- **Pathfinder-Style Hover**: All rolls show the final result in chat, but hovering over the result displays the full mathematical breakdown.
- **Derived Stats**: Auto-calculation of PIB, Saving Rolls, and HTK.
- **Combat Tracking**: Integrated Hit Location and Critical Hit templates.

## Resources

- **Developer Documentation**: See the main repository [AGENTS.md](../AGENTS.md) for technical implementation details, development workflow, and Roll20 sheet building guides.
- **MechWarrior 1e Rules**: Reference files for rules and character creation are located in the `docs/` directory.
