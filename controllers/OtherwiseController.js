'use strict';
const Telegram = require('telegram-node-bot'),
      TelegramBaseController = Telegram.TelegramBaseController;

const fs = require('fs'),
      nodehun = require('nodehun'),
      affbuf = fs.readFileSync('./controllers/es_ES.aff'),
      dictbuf = fs.readFileSync('./controllers/es_ES.dic'),
      dict = new nodehun(affbuf,dictbuf);

class OtherwiseController extends TelegramBaseController {
    handle($) {
        var text = $.message.text,
            usuario = $.message.from.username;
        var textArray = text.split(' ');

        for(var i = 0, len = textArray.length; i < len; i++){
            // Spellcheck
            dict.spellSuggest(textArray[i],check);
        }

        function check(err, correct, suggestion, origWord){
            if(!correct){
                $.sendMessage(
                    usuario + ' has dicho ' +
                    origWord.toUpperCase() +
                    ', esa palabra no existe, te sugiero usar: ' +
                    suggestion.toUpperCase());
            }
        }
    }
}
module.exports = OtherwiseController;