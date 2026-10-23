# Lafda Ladder 🎲

A local multiplayer snakes-and-ladders game with Indian meme reactions, animated moves, and optional sound effects. Play on one device with 2–4 players and see whose luck—and izzat—survives.

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) (LTS recommended), which includes npm

### Install and run

From the project folder, run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually <http://localhost:5173>) in your browser.

## How to play

- Choose 2, 3, or 4 players and edit player names in the Players panel.
- Players take turns rolling the die. Roll a six to enter the board at square 1.
- Landing on a ladder moves you up; landing on a snake sends you down.
- You must roll the exact number needed to reach square 100. An overshoot leaves you where you are.
- The first player to reach square 100 wins.
- Use **Restart game** to start over. Toggle sound effects with the sound button.

The board is designed for local, pass-and-play use; it does not require an account or network connection.

## Available commands

```bash
npm run dev      # Start the Vite development server
npm test         # Run the game-logic tests
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Built with

- React 18
- Vite
- JavaScript and CSS
- Web Audio API for locally generated sound effects

## Project structure

```text
public/
  board.png          Game board artwork
src/
  App.jsx            Game interface and turn flow
  gameLogic.js       Board mapping and move rules
  gameLogic.test.js  Tests for board mapping and game rules
  main.jsx           React entry point
  styles.css         Application styles
index.html           HTML entry point
```

The snake and ladder endpoints are defined in `src/gameLogic.js`. They determine game behavior and should be checked against `public/board.png` if the board artwork is changed.
