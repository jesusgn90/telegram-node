'use strict';
const Telegram = require('telegram-node-bot'),
      TelegramBaseController = Telegram.TelegramBaseController;

class OtherwiseController extends TelegramBaseController {
    handle($) {
        var text = $.message.text,
            user = $.message.from.username;
        var textArray = text.split(' ');

        for(var i = 0, len = textArray.length; i < len; i++){
            //do something with each word
        }


    }
}
module.exports = OtherwiseController;