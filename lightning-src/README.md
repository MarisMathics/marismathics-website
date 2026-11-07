# Beat The Lightning – source

The game at marismathics.com/lightning is one self-contained page: `public/lightning/index.html`.
It is generated from the files in this folder:

- `app_head.html` – title, fonts and styles
- `app_body.html` – the screens (home, Your lightning, play, results)
- `challenges.js` – the challenges from the Beat The Lightning videos
- `levels.js`, `check.js`, `figs.js`, `gen.js`, `game.js` – levels, answer checking, figures, generator, game logic
- `sounds.js`, `timer.js` – embedded sounds and timer image

Rebuild after a change: `python3 lightning-src/build.py`
