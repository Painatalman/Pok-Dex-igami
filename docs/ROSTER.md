# Roster

<!-- GENERATED FILE — do not edit by hand. Run `npm run roster:doc`. -->

The 51 pokémon the app can identify. Source of truth is
[`src/data/roster.ts`](../src/data/roster.ts).

Two rules govern this list:

1. **No two same-family entries that are alike in both fold and colour.** An
   origami fold is abstract, so look-alike stages of one line collapse to the
   same shape — but stages as distinct as Magikarp (orange fish) and Gyarados
   (blue serpent) earn separate slots. A judgement call, not enforced in code.
2. **No two entries share the same (fold, colour) pair.** `fold` is the shape a
   folder would make; `color` is its dominant colour. `roster.ts` throws at
   import time if this is ever violated.

Every generation is represented — Gen 1: 25 · Gen 2: 5 · Gen 3: 6 · Gen 4: 4 · Gen 5: 4 · Gen 6: 2 · Gen 7: 3 · Gen 8: 1 · Gen 9: 1.

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
| 11 | Metapod | 1 | cocoon | green |
| 25 | Pikachu | 1 | mouse | yellow |
| 39 | Jigglypuff | 1 | ball | pink |
| 41 | Zubat | 1 | bat | purple |
| 56 | Mankey | 1 | monkey | white |
| 77 | Ponyta | 1 | horse | red |
| 94 | Gengar | 1 | ghost | purple |
| 95 | Onix | 1 | snake | gray |
| 100 | Voltorb | 1 | ball | red-and-white |
| 104 | Cubone | 1 | dog | brown-and-white |
| 109 | Koffing | 1 | ball | purple |
| 120 | Staryu | 1 | star | orange |
| 129 | Magikarp | 1 | fish | orange |
| 130 | Gyarados | 1 | snake | blue |
| 132 | Ditto | 1 | blob | purple |
| 133 | Eevee | 1 | fox | brown |
| 138 | Omanyte | 1 | spiral shell | blue |
| 144 | Articuno | 1 | bird | blue |
| 145 | Zapdos | 1 | bird | yellow |
| 147 | Dratini | 1 | snake | purple |
| 151 | Mew | 1 | cat | pink |
| 167 | Spinarak | 2 | spider | green |
| 185 | Sudowoodo | 2 | tree | brown |
| 192 | Sunflora | 2 | sunflower | yellow |
| 248 | Tyranitar | 2 | dinosaur | green |
| 249 | Lugia | 2 | bird | white |
| 255 | Torchic | 3 | chick | orange |
| 321 | Wailord | 3 | whale | blue |
| 337 | Lunatone | 3 | crescent moon | yellow |
| 352 | Kecleon | 3 | chameleon | green |
| 366 | Clamperl | 3 | clam shell | blue |
| 370 | Luvdisc | 3 | heart | pink |
| 393 | Piplup | 4 | penguin | blue |
| 427 | Buneary | 4 | rabbit | brown |
| 458 | Mantyke | 4 | ray | blue |
| 479 | Rotom | 4 | lightning bolt | orange |
| 511 | Pansage | 5 | monkey | green |
| 513 | Pansear | 5 | monkey | red |
| 515 | Panpour | 5 | monkey | blue |
| 583 | Vanillish | 5 | ice cream | white |
| 658 | Greninja | 6 | frog | blue |
| 666 | Vivillon | 6 | butterfly | any |
| 722 | Rowlet | 7 | bird | brown |
| 775 | Komala | 7 | koala | gray |
| 798 | Kartana | 7 | sheet of paper | white |
| 823 | Corviknight | 8 | bird | black |
| 915 | Lechonk | 9 | pig | brown |
