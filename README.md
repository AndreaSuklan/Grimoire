# 🐉 Grimoire — D&D Character Manager

An offline-first Progressive Web App (PWA) for managing D&D 5e characters on Android (works on iOS and desktop too). No app store, no account — installs from the browser and updates instantly when you change the code.

## Features

- **Multiple characters** with quick switching, duplicate, JSON export/import (backup or share with your party)
- **Main**: ability checks & saves with one-tap d20 rolls (advantage/disadvantage), HP with temp HP & damage/heal prompts, death saves, AC, initiative, speed, inspiration, conditions & exhaustion, hit dice, short/long rest automation, attacks with auto to-hit and damage rolls
- **Skills**: proficiency/expertise toggles, Jack of All Trades, auto-calculated modifiers, passive Perception/Investigation/Insight
- **Spells**: spell slots with tap-to-spend pips, auto-fill by caster level (full/half/third) + Warlock pact magic, "Cast" button that spends the right slot, save DC & spell attack auto-calc, prepared toggles, concentration/ritual tags
- **Inventory**: quantities, weight & encumbrance, currency (auto gp total), equipped/attuned tracking (warns past 3 attunements)
- **Features**: limited-use abilities with **short-rest or long-rest recharge**, auto-calculated max uses (formulas like `prof`, `1+cha`, `level/2`; well-known features like Rage, Channel Divinity, Second Wind are detected automatically), an **undo** button for accidental uses, plus proficiencies, languages, notes
- **All official subclasses**: every official subclass name (2014 incl. Xanathar's/Tasha's, and 2024 PHB) is selectable. SRD subclasses auto-fill full text; for the others the app scaffolds feature entries at the correct levels — paste the text from your own book once, or import a **subclass pack** (⚙️ → SRD database → Import pack) to fill them on every character. A template JSON is downloadable there; packs can be exported and shared.
- **SRD library**: downloads the full 5e SRD once from [Open5e](https://open5e.com) — 2014 **and** 2024 spells, class & subclass features, weapons, armor, gear, magic items — then works fully offline. Search & filter, one tap to add to your sheet.
- **Edition choice per character**: pick 2014 or 2024 rules when creating a character (switchable later in Edit). The spell library and class features follow the character's edition.
- **Automatic class setup**: the creation wizard sets saving throws, armor/weapon proficiencies, hit die and spell slots from your class, walks you through your class skill choices, and adds every class & subclass feature up to your level. Level up later and new features appear automatically (with cleanup prompts if you change class or edition).
- Multiclass support; proficiency bonus, hit dice and combined caster slots follow your levels.

### New in v1.1

- **Effects engine**: features, feats and equipped items can carry automatic bonuses (to saving throws, skills, ability scores, AC, initiative, speed, max HP, passive senses, weapon attack/damage, spell DC/attack). Values can be formulas (`prof`, `max(1,cha)`, `2*level`). Known features (Aura of Protection, fighting styles, Alert, Tough…) get their effects attached automatically.
- **Breakdown popups**: tap any save/skill name, AC, initiative, speed, HP "Edit", spell DC, or an attack's name to see exactly where the number comes from.
- **Equipment classes**: items are typed (Weapon / Armor / Shield / …) with structured data. Equip armor & shield → AC is calculated automatically (incl. Unarmored Defense, Defense style, magic +N); equip a weapon → it's offered as an attack with the right ability (finesse/ranged aware).
- **Split damage**: attacks support multiple damage parts (e.g. 1d8 slashing + 2d6 fire), rolled and totaled per type.
- **Feats**: built-in picker with ~40 feats; +1 ability / skills / Resilient choices prompted and bonuses applied automatically. ASI-or-feat prompt appears when you level past an ASI level.
- **Active vs passive**: the Features tab is split into ⚡ Active (actions, limited uses) and 🧬 Passive (always on).
- **Slot-powered abilities**: features that expend spell slots (Divine Smite & co.) are detected and get a Cast button in the Spells tab that spends the slot level you choose.
- **Channel Divinity** is always added for Paladins & Clerics with correct per-class/per-edition uses (incl. 2024 "regain 1 on short rest").
- **Level-up spell choice**: when a level grants new spells/cantrips or unlocks a new slot level, a picker opens with your class's spell list and the suggested number to learn/prepare.
- **Resistances & Immunities**: a collapsible Main-tab section (tap to expand, badge shows the count) tracks damage resistances / immunities / vulnerabilities (tap to cycle), condition immunities, and free-text "flavour" entries (e.g. "nonmagical bludgeoning"). Items and features can grant all of them — including condition immunities — via their Effects (shown with ✦, active while equipped/attuned).
- 🎆 Rolls that total exactly **14** get fireworks. You know why.

### New in v1.2

- **🧠 Concentration tracker**: casting a concentration spell (or toggling a concentration buff) sets it; taking damage prompts the CON save with the right DC; tap the badge to drop it. Cleared on long rest.
- **🔆 Active effects quick-bar** (Main): one-tap toggles for Rage, Shield, Shield of Faith, Bless/Bane/Guidance (their d4 is rolled into your d20 results automatically), Haste, Enlarge/Reduce — plus fully custom buffs with numeric effects, d20 dice and damage dice.
- **Condition reference**: ⓘ next to Conditions shows what each condition (and exhaustion) actually does.
- **Backgrounds**: pick from the 2014 list — skills and the background feature apply automatically; 2024 characters are prompted for the +2/+1 and origin feat.
- **Point buy & standard array** modes in the ability score editor (with live 27-point budget).
- **🗺️ Level-up planner**: plan ASIs/feats per class level in advance; leveling past a planned point applies it automatically.
- **🖨️ Print / PDF**: generates a clean printable sheet (browser print → save as PDF).
- **Homebrew builders**: create custom races and feats once (⚙️ → Homebrew), use them on every character; custom feats appear in the feat picker.
- **Roll history** in the dice roller (last rolls with timestamps).
- **📖 Journal**: dated entries on the Features tab for sessions, quests and NPCs.
- **🐾 Companions & forms** (Main): pets, familiars, wild-shape forms and summons with their own AC/HP trackers and attack rolls.
- **⚔️ Weapon Mastery (2024)**: tag weapons/attacks with Cleave, Graze, Nick, Push, Sap, Slow, Topple or Vex — shown on the attack card, rule text in the breakdown popup.
- **Artificer multiclass rounding**: rounds up per RAW in multiclass caster-level math (toggle in slot configuration).
- **Custom defenses from items/features**: Effects also offer "Custom resistance/immunity/vulnerability…" — type the text as the value (e.g. "nonmagical slashing"), shown in italics with ✦ while the item is equipped.
- **Race selection with automation**: pick a race in the wizard or character editor (2014 SRD list with subraces, plus Frost Giant). Ability increases are applied as automatic effects (cleanly removed if you change race), speed and size are set, and traits — Darkvision, poison/cold/fire resistance, Breath Weapon with uses, skill proficiencies, Powerful Build (doubles carry capacity) — are added as tagged features. Choices (draconic ancestry, Half-Elf +1s and skills) are prompted. In 2024 the ability increases are skipped (they come from backgrounds).
- **Details & flavour**: collapsible card at the bottom of Main with size, height, weight, age, eyes/hair/skin and a free-text flavour box.
- **Ammunition tracking**: arrows/bolts/bullets are an Ammo item category; link one to an attack (auto-linked when you equip a bow/crossbow/sling) and every attack roll spends 1, with the remaining count shown in the Attacks list and the roll toast. Rolling at 0 warns "out of ammo".
- **Weapon items with split damage**: items carry multiple damage parts (1d8 slashing + 2d6 fire) that flow into the linked attack.
- **Spell sources**: mark a spell **always prepared** (domain/oath) or **granted by an item** with free uses and a recovery mode (long rest / short rest / dawn) — Cast then spends a use instead of a slot.
- **Oath of the Ancients built in**: full feature scaffold with mechanical summaries (paraphrased — paste your book's exact text via ✏️ if preferred), Channel Divinity options, Aura of Warding as an automatic custom resistance, Undying Sentinel/Elder Champion uses, and **oath spells auto-added as always prepared** (Ancients, Devotion and Vengeance lists — all SRD spells) once the SRD library is downloaded.
- **Channel Divinity card** in the Spells tab: shared uses as gold pips, with your oath/domain options listed under it, each spending the shared pool. Options are added automatically for all official oaths & domains (SRD text auto-fills; the rest scaffold a paste-your-text entry). Homebrew options via ＋ Option.

### New in v1.5 — tidier feature list, simpler grant editing

- **🙈 Hide a feature** you're done reading. It drops into a collapsed **Hidden** section at the bottom of the Features tab — but it keeps working: bonuses, resistances, limited uses and grants all stay live. This is about clutter, not about switching something off. Pinning (⭐) and hiding are opposites: doing one clears the other.
- **Granting spells is its own menu now.** Instead of a comma-separated text box, ＋ Add spell opens a searchable picker over the SRD library, and what you've chosen shows as a tidy list you can remove from.
- **Custom granted spells.** A spell that isn't in the SRD can be written out in full — name, level, school, casting time, range, components, duration, concentration, ritual, description, at-higher-levels — and it's stored inside the feature itself, so it travels with it and needs no library. It lands on the Spells tab with its real details instead of a "fill in later" placeholder.
- **Describing a creature is its own menu too.** ＋ Add creature opens a proper statblock form (type, AC, HP, speed, initiative, concentration, notes, and attacks as name / to-hit / damage rows) rather than eight boxes squeezed onto one line.
- Half-finished feature edits survive opening those menus — type a name, go pick a spell, come back, and everything you'd written is still there.

### New in v1.4 — allies, grants, and things that stay in sight

- **🐾 Allies tab** (between Spells and Items). Companions, familiars, summons and Wild Shape forms are no longer a collapsed card at the bottom of Main — they have their own tab, grouped by type, each with its own HP bar, AC, initiative and attack rolls.
- **Summons are wired to concentration.** Tick "needs concentration" on a creature and summoning it claims your concentration; losing concentration — by dropping it, by a failed save, by being knocked to 0 HP, or by taking a long rest — dismisses it automatically. A summon or a form reduced to 0 HP ends and releases the concentration it was holding; a downed pet stays on your sheet.
- **Features can hand you things.** Any feature can carry a list of **spells** (added to the Spells tab as always-prepared and tagged with the feature that granted them) and **creature statblocks** (one tap to summon onto the Allies tab). Deleting the feature offers to take its grants with it. Useful for oath and domain spells, Find Familiar, Conjure Animals, Wild Shape forms and Pact of the Chain.
- **HP buttons tally up.** Tapping ± builds a running total you can see — `−7 → 30 HP` — before it lands, then commits after a pause or when you tap Apply. Seven taps is now one damage event with **one** concentration check instead of seven, and the toast carries an ↩ Undo that restores HP, temp HP, death saves and concentration together. Works for allies too.
- **Conditions follow you.** Active conditions, exhaustion and concentration sit in a strip under the top bar on *every* tab, tappable to inspect or drop. It disappears entirely when you have none.
- **⭐ Pin a feature** and it moves to a Pinned section above Active and Passive. Any feature can be pinned, not just passive ones, and the pin survives editing and class resync.
- Expanded cards no longer slam shut when you act on them — pressing a button inside a feature, spell or item keeps it open.

### New in v1.3 — the sheet now knows the rules it was already tracking

Conditions, exhaustion and armour were recorded but never affected a single number. They do now.

- **😵 Exhaustion (2024)** is applied automatically: −2 per level on every d20 test (checks, saves, attacks, spell attacks, initiative) and −5 ft of speed per level. Your **DCs are not affected** — that matches the 2024 PHB. It flows through the same effects pipeline as everything else, so tap any modifier and you'll see the exhaustion row in the breakdown.
- **😵 Exhaustion (2014)** is a ladder of *conditions*, not a number, so nothing is added to your totals. Instead you get a warning at roll time naming exactly which rungs apply ("disadvantage on ability checks; speed halved").
- **Conditions colour your rolls.** Poisoned, Blinded, Prone, Restrained and the rest now pre-select the Disadvantage pill and say which condition caused it. Conditional rules (Frightened only applies while the source is in sight) are shown as a warning and left to you. Advantage and disadvantage cancel to a straight roll, as they should. Auto-failing saves (Paralyzed, Stunned, Petrified, Unconscious on Str/Dex) are called out.
- **Ability checks are now a real thing.** The number on each ability box is your ability *check* modifier — what tapping actually rolls — with the plain modifier shown beside the score as `13 (+1)` whenever they differ. Damage, spell DCs and attack rolls still use the plain modifier. There's a new **check.\*** effect target, so a feature or item can grant "+2 to all ability checks" or "+1 to Dexterity checks", and ⓘ Breakdown explains every ability check.
- **Armour you're too weak for** costs 10 ft of speed (RAW), named in the speed breakdown. A Belt of Giant Strength that lifts you to the requirement removes the penalty automatically.
- **Stealth-disadvantage armour** is tagged on the Stealth row and warns when you roll it.
- **🎒 Variant encumbrance** (optional, per character): Str×5 = encumbered (−10 ft), Str×10 = heavily encumbered (−20 ft). Off by default; the thresholds are always shown so you know where you stand.
- **Death saves** are rolled and read for you — natural 20 puts you back on 1 HP, natural 1 counts as two failures, DC 10 otherwise — but you tap **Record it** to commit, so the dots stay yours to correct. 2024 exhaustion applies to the roll.
- **Multiclass spell capacity** lists one allowance per casting class instead of silently reporting only the first.

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

### Self-tests

Open `http://localhost:8080/index.html?selftest=1` — the app runs its built-in regression
suite (dice, formulas, AC, spell slots, rests, damage & concentration, save-file migration)
and shows a pass/fail report over the app. It never touches localStorage and restores your
characters when it finishes; without the `?selftest=1` flag it does nothing at all.
Run it after every change, and add a check whenever you fix a bug.

## Your data

Characters are stored on-device (localStorage), the SRD library in IndexedDB. Nothing leaves your phone. Use **⋮ → Export JSON** regularly as a backup — clearing browser data for the site deletes characters.

## Credits

- SRD content via the [Open5e API](https://api.open5e.com) (2024 rules, spells, items) and the [5e-bits SRD database](https://github.com/5e-bits/5e-database) (2014 class features) — 5e SRD © Wizards of the Coast, licensed CC-BY-4.0 / OGL 1.0a.
- Note: the free SRD legally includes **one subclass per class** (Thief, Champion, Life Domain…). Other subclasses can be typed freely; add their features manually.
- App: vanilla HTML/JS, no dependencies, single file.
