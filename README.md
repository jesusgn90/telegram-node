# telegram-node
Small bot for Telegram using NodeJS

## How to use ##

You need to create a bot with @botfather, then you'll got a TOKEN.

Create a file called config.js with this:

    module.exports = {
        'TOKEN' : 'PUTYOURTOKENHERE'
    }

I like nodemon:

    npm i -g nodemon

Change start script in package.json if you don't like nodemon.

Install dependencies:

    npm i

Run your bot:

    npm start
    
