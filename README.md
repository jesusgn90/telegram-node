# Telegram bot boilerplate

Basic boilerplate to create a Telegram Bot using Node.js + TypeScript

## How to use

You need to create a bot with @botfather, then you'll got a TOKEN.

Add your token in file [config.ts](src/config.ts):

```js
const TOKEN: string = 'PUTYOURTOKENHERE';
export { TOKEN };
```

Install dependencies:

```sh
# Global TypeScript compiler
$ sudo npm install --global typescript@latest

# Bot dependencies
$ npm install
```

Running the bot:

```sh
# This actually runs "npm run build" and then, "node dist/bot.js"
$ npm start
```

Just build:

```sh
# Compiled files will be under dist/*
$ npm run build
```

## Contribution?

Of course you are welcome! Feel free to fork and to make a pull request against this repository.

But remember, this is not a complex project, it's a starter template.
