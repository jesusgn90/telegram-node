const Telegram      = require('telegram-node-bot');
const config        = require('./config');
const TextCommand   = Telegram.TextCommand;
const tg            = new Telegram.Telegram(config.TOKEN);
const FooController = require('./controllers/FooController');
const BarController = require('./controllers/BarController');

tg.router
    .when(new TextCommand('bar', 'barCommand'), new BarController())
    .otherwise(new FooController());