/* jshint esversion: 6 */
'use strict';
const Telegram = require('telegram-node-bot'),
    config = require('./config'),
    TextCommand = Telegram.TextCommand,
    tg = new Telegram.Telegram(config.TOKEN),
    FooController = require('./controllers/FooController'),
    BarController = require('./controllers/BarController');

/**
 *
 */
tg.router
    .when(new TextCommand('bar', 'barCommand'), new BarController())
    .otherwise(new FooController());

