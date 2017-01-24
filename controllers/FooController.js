/* jshint esversion: 6 */
'use strict';
const Telegram = require('telegram-node-bot'),
    TelegramBaseController = Telegram.TelegramBaseController;

class FooController extends TelegramBaseController {
    handle($) {
        let text = $.message.text,
            username = $.message.from.username;
        console.log('This is the text entered:',text);
        console.log('This is the user that entered the text:',username);

    }
}
module.exports = FooController;