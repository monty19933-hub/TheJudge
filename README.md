# Tribunal Inquisition

Tribunal Inquisition is a mobile-first idle clicker prototype inspired by the broad progression formula of classic browser clickers, with original naming, currencies, creatures, environments, and generated canvas art.

## Play locally

Open `index.html` in a browser, or run a local static server:

```powershell
node dev-server.mjs
```

Then visit `http://localhost:5173`.

## Current gameplay

- Tap the enemy or strike button to deal damage.
- Taps now produce gentle sound effects, a small gold chip reward, and start the quiet looping music after the first interaction.
- Defeated creatures drop gold nuggets.
- Defeated creatures trigger a gold loot explosion scaled to the reward amount.
- Spend gold nuggets on tap damage, automatic DPS, and nugget multiplier upgrades.
- The upgrade panel now includes eight upgrade tracks with generated item art.
- Every tenth encounter is a timed boss.
- Defeating a boss advances to the next realm and swaps the environment and creature set.
- Bosses have a low diamond drop chance that rises with boss kills, and higher boss counts can award more diamonds.
- Diamonds are the premium currency.
- Relics spend diamonds on temporary boosts.
- Shop purchases are mocked locally, while the `window.AndroidBilling.purchaseSku(sku)` hook is ready for a native Android billing bridge.
- Progress is saved in `localStorage`, including simple offline miner rewards.

## Content roster

The prototype contains six realms and sixty named enemy slots:

- Mossglow Grove
- Emberglass Dunes
- Frostvein Peaks
- Moonlit Marsh
- Stormforge Cliffs
- Starfall Abyss

After the first full cycle, enemies receive variant suffixes such as weapons or armor so the roster can keep scaling while you replace placeholders with custom art.

## Android and Google Play path

For Play Store release, the next production step is wrapping the web game with Capacitor or converting it into a native Android project. The smallest practical path is:

1. Add Capacitor and generate the Android project.
2. Implement a small Kotlin bridge named `AndroidBilling` using the Google Play Billing Library.
3. Replace the local mock grant in `purchaseSku` with verified purchase acknowledgements.
4. Add product IDs in Play Console matching `diamonds_small`, `diamonds_medium`, and `starter_bundle`.
5. Add Play Integrity checks and server-side receipt validation before real-money launch.

The current shop is intentionally a client-side mock so the game loop can be tested before billing credentials and Play Console products exist.
