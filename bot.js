'use strict'

const Telegram = require('telegram-node-bot');
const config = require('./config');
const http = require('http');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram(config.TOKEN);

class PingController extends TelegramBaseController {
    pingHandler($) {
        $.sendMessage('pong')
    }

    get routes() {
        return {
            'pingCommand': 'pingHandler'
        }
    }
}
class HelloController extends TelegramBaseController {
    helloHandler($) {
        var url = 'http://api.elpais.com/ws/LoteriaNavidadPremiados?n=resumen';
        http.get(url, function(res){
            var body = '';

            res.on('data', function(chunk){
                body += chunk;
            });

            res.on('end', function(){
                var msg = JSON.parse(body);
                $.sendMessage(msg.premios.numero1);
            });
        }).on('error', function(e){
            $.sendMessage("Got an error: ", e);
        });


    }

    get routes() {
        return {
            'helloCommand': 'helloHandler'
        }
    }
}
class OtherwiseController extends TelegramBaseController {
    handle($) {
        $.sendMessage('Not found!')
    }
}

tg.router
    .when(new TextCommand('ping', 'pingCommand'),new PingController())
    .when(new TextCommand('hello', 'helloCommand'),new HelloController())
    .otherwise(new OtherwiseController())

