'use strict';
const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
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
module.exports = HelloController;