'use strict';
const Telegram = require('telegram-node-bot'),
    TelegramBaseController = Telegram.TelegramBaseController,
    User = require('./../models/user'),
    Util = require('./../modules/util');

class ParticipationController extends TelegramBaseController {
    participationHandler($) {
        User.find({},callbackUser);
        function callbackUser(err,users){
            if(err) throw err;
            Util.calculate(users,callbackCalculate);
        }
        function callbackCalculate(results){
            var string = Util.buildRanking(results);
            $.sendMessage(string);
        }

    }

    get routes() {
        return {
            'participationCommand': 'participationHandler'
        };
    }
}
module.exports = ParticipationController;