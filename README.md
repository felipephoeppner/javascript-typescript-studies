# JavaScript & TypeScript Learning

A personal **learning archive and quick-reference library** containing isolated JavaScript lessons, examples, and exercises from courses and self-study. This is **not** a production application or a single end-to-end project.

The main goals are to keep study material versioned, revisit syntax and language behavior, and compare examples as learning progresses.

## Browse by topic

| Topic | Lessons | Exercises / browser examples |
| --- | --- | --- |
| **Fundamentals** | [Variables, data types and references](javascript/fundamentals/variables-and-types.js), [operators](javascript/fundamentals/operators.js), [console output](javascript/fundamentals/console-output.js) | [Swap variable values](javascript/fundamentals/exercicios/swap-variables.exercise.js) |
| **Arrays** | [Array basics](javascript/arrays/array-basics.js), [array methods](javascript/arrays/array-methods.js) (`splice`, `concat`, `filter`, `map`, `reduce`) | [Collect people from a form](javascript/arrays/exercicios/collect-people.exercise.html) |
| **Strings** | [String methods](javascript/strings/string-methods.js) | [String information](javascript/strings/exercicios/string-information.exercise.html) |
| **Numbers** | [Number and Math methods](javascript/numbers/numbers-and-math.js) | [BMI](javascript/numbers/exercicios/bmi.exercise.js), [Math properties](javascript/numbers/exercicios/math-properties.exercise.html) |
| **Functions** | [Function basics](javascript/functions/functions.js) | — |
| **Objects** | [Object factories and methods](javascript/objects/objects.js) | — |
| **Classes** | [Class basics](javascript/classes/classes.js) | — |
| **Browser** | [Linking JavaScript to HTML](javascript/browser/linking-javascript.html), [browser dialogs](javascript/browser/browser-dialogs.html) | — |

## Folder structure

```text
javascript-typescript-learning/
├── javascript/
│   ├── fundamentals/       # Variables, types, operators, console
│   │   └── exercicios/    # Swap variable values
│   ├── arrays/             # Array basics and methods
│   │   └── exercicios/    # Collect people from a form (HTML + JS)
│   ├── strings/            # String methods
│   │   └── exercicios/    # String information (HTML)
│   ├── numbers/            # Number/Math methods
│   │   └── exercicios/    # BMI and Math properties (HTML + JS)
│   ├── functions/
│   ├── objects/
│   ├── classes/
│   └── browser/            # HTML/JavaScript integration and dialogs
├── docs/
│   └── source-map.md       # Original paths -> current paths
├── .gitignore
└── README.md
```

There are no TypeScript source files yet. TypeScript lessons will be added by topic as they are studied, rather than creating empty folders in advance.

## Naming conventions

- **Folder and file names:** English, lowercase `kebab-case`, except for the exercise subfolders named `exercicios`.
- **Lessons:** descriptive `.js` file names, e.g. `array-methods.js`.
- **Exercises:** `topic.exercise.js` / `topic.exercise.html` where applicable, grouped in an `exercicios/` subfolder within their original topic folder. Related HTML and JavaScript files stay together.
- **Code:** examples are left close to the original lesson, including imperfect or unfinished exercises. Comments are in English.
- **Lesson grouping:** closely related small examples are consolidated into topic files, with labeled sections and lightweight `{ ... }` blocks where needed to prevent `let`/`const` redeclaration. These blocks are **not** application architecture or refactoring patterns; they just allow independent lesson snippets to coexist.

## Running examples

**Node.js lessons:** execute a file directly from the repository root (Node.js is needed):

```bash
node javascript/arrays/array-methods.js
node javascript/fundamentals/variables-and-types.js
node javascript/numbers/numbers-and-math.js
```

**Browser exercises:** open any `.html` example directly in a browser. Where the JavaScript is in a separate file, the HTML uses a relative script reference to the neighboring `.js`. Some examples use `alert()`, `confirm()`, `prompt()`, or the DOM and will not run directly with Node.js.

No dependencies, build step, or `npm install` are required for the current lessons.

## Learning notes and intentional limitations

This is a snapshot of lessons completed at different times. Some examples are intentionally incomplete or contain errors that were part of the learning process:

- In [`array-methods.js`](javascript/arrays/array-methods.js), the **reduce** callback is empty. In the **map** example, a copied object is modified but the original object is returned.
- In [`math-properties.exercise.js`](javascript/numbers/exercicios/math-properties.exercise.js), the last expression refers to `aux1`, which is undefined and causes a `ReferenceError` when that statement runs.
- Some lesson files use names, ages, and measurements as example data. **Review these before making the repository public**, and replace any information you do not want published.
- A grouped lesson file executes all of its examples in sequence; the separate labeled sections still document the original concepts.

The examples are **not** automatically corrected, modernized, or converted into a complete application. Their instructional context takes priority.

For a history of how original course files were grouped, see [Original-to-current path map](docs/source-map.md).

## License

No license is included yet. Unless a license is added, default copyright restrictions apply to others who want to reuse the content.
