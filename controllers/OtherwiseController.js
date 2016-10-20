'use strict';
const Telegram = require('telegram-node-bot'),
      TelegramBaseController = Telegram.TelegramBaseController;

class OtherwiseController extends TelegramBaseController {
    handle($) {
        var text = $.message.text,
            usuario = $.message.from.username;

        var censuradas = ['palabra1','palabra2'],
            textArray = text.split(' ');

        for(var i = 0, len = censuradas.length; i < len; i++){
            if(textArray.indexOf(censuradas[i]) !== -1) {
                console.log('Palabra censurada detectada.');
                console.log('Autor: ' + usuario + ', palabra:' + censuradas[i]);
            }
        }
    }
}
module.exports = OtherwiseController;