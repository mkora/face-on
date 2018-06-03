# Face ON

Make your own avatar

## Notes

- Uses [Adorable Avatars API](http://avatars.adorable.io/)

- Call `ava` utility with parameters:

  - `get` to get a random avatar

  - `make` to get a customized one

- `ava` gives you an URL to a generated avatar

- Also `ava` saves pictures to `face-on/` in the user home folder (see `config/` if you want to redefine it)

- Uses `meow` and `inquirer` as CLI helpers

- Uses `terminal-image` to display an image after it was generated

- NOTE: Don't forget to create `.env` (see `.env.example`)


## Quick Start

1. Install dependencies

  ```
  npm i
  ```

2. Run a CLI tool

  ```
  # Help
  ava --help
  node cli.js --help
  # Get a random image
  ava get
  node cli.js get
  # Build an avatar from scratch
  ava make
  node cli.js make
  ```

3. Make it a real CLI tool:

  - NOTE: Don't forget to add a shebang `#!/usr/bin/env node` to `cli.js` and update `bin` section in `package.js`

  - Make it global

    ```
    npm install -g
    ```

  - IMPORTANT: After any changes in `./cli.js` don't forget to run

    ```
    npm link
    ```
