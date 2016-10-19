'use strict'
/**
 * Telegram api + token
 */
const Telegram = require('telegram-node-bot'),
      config = require('./config');

const TextCommand = Telegram.TextCommand,
      tg = new Telegram.Telegram(config.TOKEN);

const PingController = require('./controllers/PingController'),
      HelloController = require('./controllers/HelloController'),
      OtherwiseController = require('./controllers/OtherwiseController'),
      StartController = require('./controllers/StartController');

tg.router
    .when(new TextCommand('start', 'startCommand'),new StartController())
    .when(new TextCommand('ping', 'pingCommand'),new PingController())
    .when(new TextCommand('hello', 'helloCommand'),new HelloController())
    .otherwise(new OtherwiseController())

