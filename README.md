# 🐉 Grimoire — D&D Character Manager

An offline-first Progressive Web App (PWA) for managing D&D 5e characters on Android (works on iOS and desktop too). No app store, no account — installs from the browser and updates instantly when you change the code.

## Features

- **Multiple characters** with quick switching, duplicate, JSON export/import (backup or share with your party)
- **Main**: ability checks & saves with one-tap d20 rolls (advantage/disadvantage), HP with temp HP & damage/heal prompts, death saves, AC, initiative, speed, inspiration, conditions & exhaustion, hit dice, short/long rest automation, attacks with auto to-hit and damage rolls
- **Skills**: proficiency/expertise toggles, Jack of All Trades, auto-calculated modifiers, passive Perception/Investigation/Insight
- **Spells**: spell slots with tap-to-spend pips, auto-fill by caster level (full/half/third) + Warlock pact magic, "Cast" button that spends the right slot, save DC & spell attack auto-calc, prepared toggles, concentration/ritual tags
- **Inventory**: quantities, weight & encumbrance, currency (auto gp total), equipped/attuned tracking (warns past 3 attunements)
- **Features**: limited-use abilities (recharge on long rest), proficiencies, languages, notes
- **SRD library**: downloads the full 5e SRD once from [Open5e](https://open5e.com) — 2014 **and** 2024 spells, class & subclass features, weapons, armor, gear, magic items — then works fully offline. Search & filter, one tap to add to your sheet.
- **Edition choice per character**: pick 2014 or 2024 rules when creating a character (switchable later in Edit). The spell library and class features follow the character's edition.
- **Automatic class setup**: the creation wizard sets saving throws, armor/weapon proficiencies, hit die and spell slots from your class, walks you through your class skill choices, and adds every class & subclass feature up to your level. Level up later and new features appear automatically (with cleanup prompts if you change class or edition).
- Multiclass support; proficiency bonus, hit dice and combined caster slots follow your levels.

## Get it on your phone (one-time setup, ~10 minutes)

The app must be served over HTTPS to install. Easiest free way: **GitHub Pages**.

1. Create a free account at [github.com](https://github.com), then a new **public repository** (e.g. `grimoire`).
2. Upload the files in this folder (`index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`) — drag & drop via "Add file → Upload files".
3. In the repo: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. After ~1 minute your app is live at `https://<your-username>.github.io/grimoire/`.
5. Open that URL in **Chrome on your Android phone** → menu (⋮) → **"Add to Home screen" / "Install app"**.

It now behaves like a native app: home-screen icon, fullscreen, works offline. First thing to do in the app: tap **⬇️ Download SRD library** (needs internet once).

## Updating the app

1. Edit the files (yourself, or ask Claude for changes) and re-upload to GitHub.
2. **Important:** in `sw.js`, bump the version string, e.g. `grimoire-v1` → `grimoire-v2`. This tells installed phones to fetch the new files.
3. On the phone, close and reopen the app (twice at most). Done — no reinstall ever needed.

## Test locally on your PC

```
cd dnd-character-manager
python -m http.server 8080
```

Open http://localhost:8080. (Opening `index.html` directly also works, minus offline caching.)

## Your data

Characters are stored on-device (localStorage), the SRD library in IndexedDB. Nothing leaves your phone. Use **⋮ → Export JSON** regularly as a backup — clearing browser data for the site deletes characters.

## Credits

- SRD content via the [Open5e API](https://api.open5e.com) (2024 rules, spells, items) and the [5e-bits SRD database](https://github.com/5e-bits/5e-database) (2014 class features) — 5e SRD © Wizards of the Coast, licensed CC-BY-4.0 / OGL 1.0a.
- Note: the free SRD legally includes **one subclass per class** (Thief, Champion, Life Domain…). Other subclasses can be typed freely; add their features manually.
- App: vanilla HTML/JS, no dependencies, single file.
