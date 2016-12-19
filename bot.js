'use strict'
/**
 *
 */
const Telegram = require('telegram-node-bot'),
    config = require('./config'),
    mongoose = require('mongoose'),
    TextCommand = Telegram.TextCommand,
    tg = new Telegram.Telegram(config.TOKEN),
    PingController = require('./controllers/PingController'),
    HelloController = require('./controllers/HelloController'),
    OtherwiseController = require('./controllers/OtherwiseController'),
    ParticipationController = require('./controllers/ParticipationController');
/**
 *
 */
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

/**
 *
 */
tg.router
    .when(new TextCommand('ping', 'pingCommand'), new PingController())
    .when(new TextCommand('hello', 'helloCommand'), new HelloController())
    .when(new TextCommand('participation', 'participationCommand'), new ParticipationController())
    .otherwise(new OtherwiseController());

