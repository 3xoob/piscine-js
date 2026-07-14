# piscine-js

A collection of small, self-contained JavaScript exercises completed as part of a coding-school "piscine" (an intensive, exercise-driven bootcamp format). Each file in the repository is an individual exercise solution named after its subject/kata.

## Overview

The repository is a flat set of over 100 standalone JavaScript files. There is no shared application, build step, or entry point tying the exercises together — each `.js`/`.mjs` file implements the function(s) required by one exercise and can be read or run independently. Topics range from core language fundamentals (types, mutability, closures) up through regular expressions, dates, asynchronous programming, DOM manipulation, and Node.js scripting (CLI, file system, HTTP).

## Features

Exercise topics actually present in the source, grouped by theme:

- **Language fundamentals**: `primitives.js`, `declarations.js`, `mutability.js`, `returns.js`, `is.js`, `replica.js`, `circular.js`, `biggie-smalls.js`
- **Numbers/math**: `abs.js`, `sign.js`, `min-max.js`, `elementary.js` (manual multiplication), `cut-corners.js` (custom rounding), `physics.js`
- **Array utilities (reimplementing built-ins)**: `flat.js`, `chunky.js`, `index-of.js`, `slicer.js`, `reverser.js`, `last-first-kiss.js`, `long-words.js`, `for-each.js`, `mapper.js`, `filter.js`, `reduce.js`, `quantifiers.js` (`every`/`some`/`none`), `using-map.js`, `using-filter.js`, `using-reduce.js`, `unbreakable.js` (custom `join`)
- **Objects**: `invert.js`, `fusion.js`, `get.js`, `pick-omit.js`, `manipulate-keys.js`, `manipulate-values.js`, `manipulate-entries.js`, `collections.js` (Set conversions), `curry-entries.js`, `change.js`
- **Functional programming / currying / closures**: `currify.js`, `sweet-curry.js`, `flow.js`, `has-city.js`, `method-man.js`, `debounce.js`, `throttle.js`
- **Regular expressions**: `valid-ip.js`, `group-price.js`, `greedy-url.js`, `letter-space-number.js`, `same-amount.js`, `its-a-match.js`, `vowel-dots.js`
- **Dates**: `date-is.js`, `day-of-the-year.js`, `count-leap-years.js`, `dog-years.js`, `rebecca-black.js`, `dr-strange.js`, `get-some-time.js`
- **Asynchronous JavaScript / Promises**: `all.js`, `race.js`, `series.js`, `keep-trying-or-giveup.js` (retry/timeout), `get-json.js`, `gougle-search.js`, `is-winner.js`, `interpolation.js`
- **DOM manipulation (browser scripts)**: `build-brick-and-break.js`, `get-them-all.js`, `harder-bigger-bolder-stronger.js`, `keycodes-symphony.js`, `mouse-trap.js`, `pick-and-click.js`, `pimp-my-style.js`, `gossip-grid.js`, `fifty-shades-of-cold.js`, `where-do-we-go.js`
- **Node.js CLI scripting / file system / HTTP**: `tell-me-how-many.mjs`, `tell-me-who.mjs`, `tell-me-vip.mjs`, `tell-it-cypher.mjs` (base64 encode/decode), `verydisco.mjs` / `verydisco-forever.mjs` / `verydisco-reverso.mjs`, `friend-support.mjs`, `gatecrashers.mjs`, `uninvited.mjs` (each spins up an `http` server)
- **Text/data parsing puzzles**: `nasa.js`, `pyramid.js`, `triangle.js`, `molecules-cells.js` (DNA/RNA conversion), `neuron.js`, `pronoun.js`, `match-cron.js`, `sums.js`, `flagger.js`, `find-expression.js`, `keep-cut.js`, `deep-copy.js`

## Technologies

- Plain JavaScript (ES6+), run either directly with Node.js or in a browser — no frameworks or libraries.
- Node.js core/built-in modules only: `fs`, `fs/promises`, `http`, `path`, `process`, `stream`, `util`, `node:buffer`. There is no `package.json`, so no external npm dependencies are declared.
- A mix of CommonJS-style scripts (`.js`) and native ES modules (`.mjs`, using `import`/`export`).

## Project Structure

The repository is intentionally flat — there are no subdirectories for exercises. Every exercise is a single file at the repository root, named with a descriptive/thematic slug (e.g. `is.js`, `flat.js`, `debounce.js`). Root-level files besides the exercises:

- `index.html` — a minimal HTML page that loads `how-2-js.js` as a module script.
- `COPYRIGHT.md` / `LICENSE` — all-rights-reserved copyright notice.
- `.gitignore` — standard ignores for secrets, dependencies, build output, editors, etc.

There are no per-exercise subject/README files, no test directories, and no CI configuration in the repository.

## Requirements

- Node.js to run the `.js`/`.mjs` files from the command line. No specific Node version is pinned anywhere in the repository (no `package.json`, `engines` field, or `.nvmrc`), so a current LTS release is recommended.
- A web browser (or browser dev tools) to run the DOM-manipulation exercises, since they reference `document`/`window` and are not runnable under plain Node.

## Installation

There is nothing to install — the repository has no `package.json` and no external dependencies. Clone it and run the files directly:

```bash
git clone https://github.com/3xoob/piscine-js.git
cd piscine-js
```

## Usage

Run an individual exercise file with Node:

```bash
node is.js
node currify.js
```

Some `.mjs` scripts take command-line arguments:

```bash
node verydisco.mjs "hello world"
node tell-me-how-many.mjs .
node tell-me-who.mjs ./guests
```

The scripts that start an HTTP server (`friend-support.mjs`, `gatecrashers.mjs`, `uninvited.mjs`) listen on `localhost:5000` once run with `node <file>.mjs`.

For the DOM-based exercises, open `index.html` in a browser (it wires up `how-2-js.js`), or load an individual exercise file from a page/dev console, since those scripts rely on `document`/`window`.

## Testing

No test files, test runner, or CI configuration are present in this repository.

## Example

`is.js` implements a small type-checking utility used elsewhere in the exercises:

```js
is.num = (n) => typeof n === 'number'
is.arr = (n) => Array.isArray(n)
is.fun = (n) => typeof n === 'function'
```

`currify.js` implements a generic curry helper:

```js
function currify(func) {
    function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    }
    return curried;
}
```

## Learning Objectives

Based on the exercises present, this collection was built to practice:

- JavaScript fundamentals: primitive types, mutability, scope, and object references.
- Reimplementing built-in array/object methods (`map`, `filter`, `reduce`, `flat`, `pick`/`omit`, etc.) from scratch.
- Closures, currying, and function composition.
- Regular expressions for validation and text extraction.
- Working with `Date` objects and date arithmetic.
- Asynchronous JavaScript: `Promise`, `async`/`await`, retries, timeouts, debouncing, and throttling.
- DOM manipulation and browser event handling.
- Node.js scripting: reading CLI arguments (`process.argv`), the file system (`fs`/`fs/promises`), and building basic `http` servers.

## Limitations

- No `package.json` — there are no declared dependencies, npm scripts, or a pinned Node.js version.
- No automated tests or CI pipeline are included.
- A few exercises import companion data files that are not present in the repository (`gossip-grid.data.js`, `fifty-shades-of-cold.data.js`, `where-do-we-go.data.js`, `pimp-my-style.data.js`), so those scripts cannot run as-is without adding that data.
- The HTTP-server exercises (`friend-support.mjs`, `gatecrashers.mjs`, `uninvited.mjs`) read/write files under a `guests/` directory that is not included in the repository.
- `sunny-sunday.js` is an empty file (no implementation).
- `index.html` only loads a single exercise (`how-2-js.js`); it is not a runner for the rest of the collection.

## License

This project is copyrighted with all rights reserved (see `LICENSE` and `COPYRIGHT.md`). The source is published for portfolio/viewing purposes only — no permission is granted to copy, modify, distribute, sublicense, or reuse it without prior written permission from the copyright holder.
