# Roster

<!-- GENERATED FILE — do not edit by hand. Run `npm run roster:doc`. -->

The 43 pokémon the app can identify. Source of truth is
[`src/data/roster.ts`](../src/data/roster.ts).

Two rules govern this list:

1. **At most one pokémon per evolution family.** An origami fold is abstract, so
   two stages of the same line are indistinguishable once folded.
2. **No two entries share the same (fold, colour) pair.** `fold` is the shape a
   folder would make; `color` is its dominant colour. `roster.ts` throws at
   import time if this is ever violated.

Every generation is represented — Gen 1: 21 · Gen 2: 8 · Gen 3: 4 · Gen 4: 2 · Gen 5: 2 · Gen 6: 2 · Gen 7: 2 · Gen 8: 1 · Gen 9: 1.

`fold` and `color` are fed to the Claude vision prompt as `Name — colour fold`
lines (see `ROSTER_PROMPT_LINES`), so they are load-bearing, not documentation.
Vivillon's colour is `any` because its wings ship in 20 patterns; it is matched
on shape alone.

| # | Pokémon | Gen | Fold | Colour |
|---|---------|-----|------|--------|
| 2 | Ivysaur | 1 | rose | pink |
| 6 | Charizard | 1 | dragon | orange |
| 7 | Squirtle | 1 | turtle | blue |
| 25 | Pikachu | 1 | mouse | yellow |
| 39 | Jigglypuff | 1 | ball | pink |
| 41 | Zubat | 1 | bat | purple |
| 56 | Mankey | 1 | monkey | white |
| 77 | Ponyta | 1 | horse | red |
| 90 | Shellder | 1 | clam shell | purple |
| 94 | Gengar | 1 | ghost | purple |
| 95 | Onix | 1 | snake | gray |
| 100 | Voltorb | 1 | ball | red-and-white |
| 120 | Staryu | 1 | star | orange |
| 129 | Magikarp | 1 | fish | orange |
| 132 | Ditto | 1 | blob | purple |
| 133 | Eevee | 1 | dog | brown |
| 138 | Omanyte | 1 | spiral shell | blue |
| 143 | Snorlax | 1 | cat | black |
| 144 | Articuno | 1 | bird | blue |
| 145 | Zapdos | 1 | bird | yellow |
| 151 | Mew | 1 | cat | pink |
| 167 | Spinarak | 2 | spider | green |
| 175 | Togepi | 2 | egg | white |
| 185 | Sudowoodo | 2 | tree | brown |
| 192 | Sunflora | 2 | sunflower | yellow |
| 198 | Murkrow | 2 | bird | black |
| 214 | Heracross | 2 | beetle | blue |
| 248 | Tyranitar | 2 | dinosaur | green |
| 249 | Lugia | 2 | bird | white |
| 255 | Torchic | 3 | chick | orange |
| 321 | Wailord | 3 | whale | blue |
| 352 | Kecleon | 3 | chameleon | green |
| 370 | Luvdisc | 3 | heart | pink |
| 393 | Piplup | 4 | penguin | blue |
| 427 | Buneary | 4 | rabbit | brown |
| 498 | Tepig | 5 | pig | orange |
| 583 | Vanillish | 5 | ice cream | white |
| 658 | Greninja | 6 | frog | blue |
| 666 | Vivillon | 6 | butterfly | any |
| 775 | Komala | 7 | koala | gray |
| 798 | Kartana | 7 | sheet of paper | white |
| 815 | Cinderace | 8 | rabbit | red |
| 963 | Finizen | 9 | dolphin | blue |
