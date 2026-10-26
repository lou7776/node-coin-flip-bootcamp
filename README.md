# CoinFlip

A simple Node.js web app where the user guesses whether a coin lands on heads or tails. The server generates a random outcome, compares it to the player's choice, and returns the result to the browser.

## Demo

<img width="984" height="379" alt="Screenshot 2026-10-25 at 6 39 04 PM" src="https://github.com/user-attachments/assets/ea14358d-bca3-43b4-9da9-91048cf84b79" />


## Overview

This project demonstrates:

* Node.js built-in `http` module for serving the app
* Node.js built-in `fs` module for reading static files
* Vanilla JavaScript for client-side interaction
* A lightweight fetch-based API endpoint for the game logic
* Basic CSS styling for a clean, centered layout

## How it works

1. The user enters either `heads` or `tails` in the input field (not case sensitive).
2. The browser sends a request to `/api?coinFlip=<guess>`.
3. The server randomly chooses a result: `heads` or `tails`.
4. The server compares the result with the player's guess.
5. The browser updates the page to show the player's guess, the server's flip, and whether they won or lost.

If the input isn't `heads` or `tails`, the server responds with a message asking for a valid choice.

## Tech stack

* Node.js
* HTML, CSS, JavaScript
* [figlet](https://www.npmjs.com/package/figlet) for the ASCII 404 page

## Getting started

1. Clone the repo:

   ```bash
   git clone https://github.com/lou7776/<repo-name>.git
   cd <repo-name>
   ```

2. Install the dependency:

   ```bash
   npm install figlet
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. Open `http://localhost:8000` in your browser.

## API

**GET** `/api?coinFlip=heads` or `/api?coinFlip=tails`

Example response:

```json
{
  "name": "Heads",
  "winOrLoseMessage": "you win",
  "outcome": "the flip was heads"
}
```

## What I learned

* How to build a basic server with Node's `http` module
* How to serve static files (HTML, CSS, JS) by hand
* How to build an API route and return JSON
* How to use `fetch` on the client to update the page without a reload
* How to handle user input safely, like case differences and invalid values
