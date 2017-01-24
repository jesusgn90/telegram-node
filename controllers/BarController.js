/* jshint esversion: 6 */
'use strict';
const Telegram = require('telegram-node-bot'),
    TelegramBaseController = Telegram.TelegramBaseController;

class BarController extends TelegramBaseController {

    barHandler($) {
        $.sendMessage('Hello from BarController');
    }

    get routes() {
        return {
            'barCommand': 'barHandler'
        };
    }
}
module.exports = BarController;