'use strict';
const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
class StartController extends TelegramBaseController {
    startHandler($) {
        $.sendMessage('F**k yeah!');
    }

    get routes() {
        return {
            'startCommand': 'startHandler'
        };
    }
}
module.exports = StartController;