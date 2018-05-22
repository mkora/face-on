# Face ON

Node.js, Meow.js, Inquirer.js

## Overview

Make your own avatar

## Notes

- Uses [Adorable Avatars API](http://avatars.adorable.io/)

- A CLI input param `get` saves to `./data/` by default (see `config/` to redefine folder name)

- ?

- Uses `meow` as CLI helper

- Uses `inquirer` as interctive CLI user interface

- Loads environment variables from `.env` file


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
  # ...


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
