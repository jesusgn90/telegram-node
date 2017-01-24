# telegram-node
Basic starter template to create a Telegram Bot using NodeJS (ECMAScript 6).

## Contribution?

Of course you are welcome! You are free to fork and pull request the repository.
But remember this is not a complex project, it's a starter template.

## How to use 

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

### Simple run

If you setup and run this simple skelleton you can do two things.

Say anything to the bot and it shows in console:

   > This is the text entered: anything
   
   > This is the user that entered the text: yourusername

Execute /bar command:

   > The bot chat with you and says 'Hello from BarController'
    
## File description

**/controllers/\*.js**

It will handle commands or actions of the users.

**/modules/util.js**

You may need an util.js to write some functions and not overload the controllers.

**/test/foo.js**

The test file, only for developers.

**/bot.js**

The main script, you must to run it to turn on the bot, its like app.js or server.js in a 
NodeJS web project.