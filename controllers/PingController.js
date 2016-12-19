/* jshint esversion: 6 */
'use strict';
const Telegram = require('telegram-node-bot'),
    TelegramBaseController = Telegram.TelegramBaseController;
/**
 * @description
 * @class PingController
 */
class PingController extends TelegramBaseController {
    /**
     *
     * @param $
     */
    pingHandler($) {
        $.sendMessage('pong');
    }

    /**
     *
     * @return {{pingCommand: string}}
     */
    get routes() {
        return {
            'pingCommand': 'pingHandler'
        };
    }
}
module.exports = PingController;