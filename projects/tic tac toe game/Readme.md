# Tic Tac Toe

Live demo: https://web-developent-vzc6.vercel.app

## Description

A simple, responsive two-player Tic Tac Toe game built with vanilla HTML, CSS and JavaScript. Click any empty cell to place the current player's mark (X or O). The game detects wins and draws and provides restart controls.

## Features

- Win and draw detection
- Restart buttons for both win and draw screens
- Lightweight, dependency-free (just static files)

## Tech

- HTML
- CSS
- JavaScript (vanilla)

## How to run locally

1. Open `index.html` directly in your browser.
2. Or serve the folder with a simple HTTP server (recommended for some browsers):

```
npx http-server .
```

Then open the provided local URL in your browser.

## Usage

- Click any empty cell to place a mark.
- The top indicator shows whose move it is.
- When a player wins, the win overlay appears with a restart button.
- If all cells are filled without a winner, the draw overlay appears.

## Files

- `index.html` — main page
- `style.css` — styles
- `script.js` — game logic
- `readme photos/` — example screenshots

## Screenshots

Gallery (files located in the `readme photos/` folder):

- Home view:

	<p align="center"><img src="./readme%20photos/home.png" alt="Home" style="border-radius:10px; max-width:320px; width:100%; height:auto;"></p>

- O's move:

	<p align="center"><img src="./readme%20photos/o%20move.png" alt="O's move" style="border-radius:10px; max-width:320px; width:100%; height:auto;"></p>

- Draw screen:

	<p align="center"><img src="./readme%20photos/Draw.png" alt="Draw" style="border-radius:10px; max-width:320px; width:100%; height:auto;"></p>

- Win screen:

	<p align="center"><img src="./readme%20photos/win.png" alt="Win" style="border-radius:10px; max-width:320px; width:100%; height:auto;"></p>

## Contributing & Usage

Thanks for your interest in contributing! This project is open for contribution and reuse under the MIT license. Please follow the guidelines below when reporting issues or submitting pull requests.

### Reporting issues

- Open a clear issue describing the bug, enhancement, or suggestion.
- Include steps to reproduce, expected vs actual behavior, and screenshots when helpful.

### Local setup

1. Clone your fork locally and change into the project folder.
2. Open `index.html` in your browser or run a local server (recommended for some browsers):

```bash
npx http-server .
```

Then open the provided local URL in your browser.

### Pull request process

1. Fork the repository and create a descriptive branch: `git checkout -b feat/my-feature`.
2. Keep changes focused and add a short description in your PR.
3. Commit and push your changes to your fork and open a pull request against the main branch.
4. Add screenshots for UI changes by placing them in the `readme photos/` folder and reference them in this README.

Suggested improvements: styling polish, accessibility fixes, mobile layout improvements, and adding a single-player AI opponent.

### Code style

- Use plain HTML/CSS/JS. Keep code readable and minimal.
- Avoid adding build steps or heavy dependencies unless necessary.

### Help wanted

If you need help getting started, open an issue and tag it `help wanted`.

---

## License

MIT
