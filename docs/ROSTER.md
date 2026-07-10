# Roster

<!-- GENERATED FILE — do not edit by hand. Run `npm run roster:doc`. -->

The 48 pokémon the app can identify. Source of truth is
[`src/data/roster.ts`](../src/data/roster.ts).

Two rules govern this list:

1. **At most one pokémon per evolution family.** An origami fold is abstract, so
   two stages of the same line are indistinguishable once folded.
2. **No two entries share the same (fold, colour) pair.** `fold` is the shape a
   folder would make; `color` is its dominant colour. `roster.ts` throws at
   import time if this is ever violated.

Every generation is represented — Gen 1: 26 · Gen 2: 7 · Gen 3: 2 · Gen 4: 2 · Gen 5: 2 · Gen 6: 3 · Gen 7: 2 · Gen 8: 2 · Gen 9: 2.

`fold` and `color` are fed to the Claude vision prompt as `Name — colour fold`
lines (see `ROSTER_PROMPT_LINES`), so they are load-bearing, not documentation.
Vivillon's colour is `any` because its wings ship in 20 patterns; it is matched
on shape alone.

| # | Pokémon | Gen | Fold | Colour |
|---|---------|-----|------|--------|
| 2 | Ivysaur | 1 | rose | pink |
| 6 | Charizard | 1 | dragon | orange |
| 7 | Squirtle | 1 | turtle | blue |
| 10 | Caterpie | 1 | caterpillar | green |
| 16 | Pidgey | 1 | bird | brown |
| 25 | Pikachu | 1 | mouse | yellow |
| 37 | Vulpix | 1 | fox | red |
| 39 | Jigglypuff | 1 | ball | pink |
| 41 | Zubat | 1 | bat | blue |
| 56 | Mankey | 1 | monkey | white |
| 77 | Ponyta | 1 | horse | red |
| 90 | Shellder | 1 | clam shell | purple |
| 94 | Gengar | 1 | ghost | purple |
| 95 | Onix | 1 | snake | gray |
| 98 | Krabby | 1 | crab | orange |
| 100 | Voltorb | 1 | ball | red-and-white |
| 120 | Staryu | 1 | star | orange |
| 129 | Magikarp | 1 | fish | orange |
| 131 | Lapras | 1 | sea dinosaur | blue |
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
| 198 | Murkrow | 2 | bird | black |
| 214 | Heracross | 2 | beetle | blue |
| 227 | Skarmory | 2 | bird | gray |
| 249 | Lugia | 2 | bird | white |
| 321 | Wailord | 3 | whale | blue |
| 370 | Luvdisc | 3 | heart | pink |
| 427 | Buneary | 4 | rabbit | brown |
| 449 | Hippopotas | 4 | hippo | sand |
| 498 | Tepig | 5 | pig | orange |
| 583 | Vanillish | 5 | ice cream | white |
| 658 | Greninja | 6 | frog | blue |
| 666 | Vivillon | 6 | butterfly | any |
| 716 | Xerneas | 6 | deer | blue |
| 775 | Komala | 7 | koala | gray |
| 798 | Kartana | 7 | sheet of paper | white |
| 815 | Cinderace | 8 | rabbit | red |
| 818 | Inteleon | 8 | chameleon | blue |
| 963 | Finizen | 9 | dolphin | blue |
| 973 | Flamigo | 9 | bird | pink |
