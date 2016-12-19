'use strict'
/**
 *
 */
const Telegram = require('telegram-node-bot'),
    config = require('./config'),
    mongoose = require('mongoose'),
    TextCommand = Telegram.TextCommand,
    tg = new Telegram.Telegram(config.TOKEN),
    ProcessorController = require('./controllers/ProcessorController'),
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
    .when(new TextCommand('participation', 'participationCommand'), new ParticipationController())
    .otherwise(new ProcessorController());

