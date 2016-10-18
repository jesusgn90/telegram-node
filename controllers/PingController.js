'use strict';
const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
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
module.exports = PingController;