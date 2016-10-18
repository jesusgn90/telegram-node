'use strict'

const Telegram = require('telegram-node-bot');
const config = require('./config');
const http = require('http');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram(config.TOKEN);

class PingController extends TelegramBaseController {
    pingHandler($) {
        $.sendMessage('pong');
    }

    get routes() {
        return {
            'pingCommand': 'pingHandler'
        };
    }
}
class HelloController extends TelegramBaseController {
    helloHandler($) {
        $.sendMessage('Hello!');
    }

    get routes() {
        return {
            'helloCommand': 'helloHandler'
        };
    }
}
class OtherwiseController extends TelegramBaseController {
    handle($) {
        $.sendMessage('Not found!')
    }
}

tg.router
    .when(new TextCommand('ping', 'pingCommand'),new PingController())
    .when(new TextCommand('hello', 'helloCommand'),new HelloController())
    .otherwise(new OtherwiseController())

