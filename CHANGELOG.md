# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [0.2.0] — 2026-07-10

### Added

- Language selector for the whole UI (English, Português, Español, Français, Deutsch), with the choice remembered between visits
- Identification reasoning now written in the chosen language, while Pokémon names stay in English
- Clear, localized error messages for each failure, including an out-of-credits prompt when the Pokédex runs low
- Curated roster of distinct Pokémon, each defined by a fold-shape and a colour, with no two sharing the same shape-and-colour pair so the Pokédex tells look-alikes apart reliably
- Ditto is returned only when the photo isn't paper at all — a face, a pet, an object — cheerfully naming whatever it sees
- Kartana is returned for flat, unfolded paper — a flyer, a receipt, a blank sheet — and suggests an origami shape to fold it into
- The camera now freezes on the captured frame while your guess is scored, so you can see exactly what was scanned

### Changed

- The app opens in Quiz mode by default
- Roster rebalanced toward distinct, popular Pokémon and away from an over-reliance on blue — including swapping Lapras for a green dinosaur (Tyranitar) and adding a sunflower, a chicken, and a purple ball to widen the mix

### Removed

- Scan mode is temporarily hidden behind a feature flag, so the app runs quiz-only until it's re-enabled
