/* jshint esversion: 6 */
'use strict';
const Telegram = require('telegram-node-bot'),
    TelegramBaseController = Telegram.TelegramBaseController;
/**
 * @description
 * @class HelloController
 */
class HelloController extends TelegramBaseController {
    /**
     *
     * @param $
     */
    helloHandler($) {
        $.sendMessage('Hello!');
    }

    /**
     *
     * @return {{helloCommand: string}}
     */
    get routes() {
        return {
            'helloCommand': 'helloHandler'
        };
    }
}
module.exports = HelloController;