/* jshint esversion: 6 */
'use strict';
const Telegram = require('telegram-node-bot'),
    TelegramBaseController = Telegram.TelegramBaseController,
    User = require('./../models/user'),
    Util = require('./../modules/util');
/**
 * @description
 * @class ParticipationController
 */
class ParticipationController extends TelegramBaseController {
    /**
     *
     * @param $
     */
    participationHandler($) {
        User.find({},callbackUser);
        /**
         *
         * @param err
         * @param users
         */
        function callbackUser(err,users){
            if(err) throw err;
            Util.calculate(users,callbackCalculate);
        }

        /**
         *
         * @param results
         */
        function callbackCalculate(results){
            let string = Util.buildRanking(results);
            $.sendMessage(string);
        }

    }

    /**
     *
     * @return {{participationCommand: string}}
     */
    get routes() {
        return {
            'participationCommand': 'participationHandler'
        };
    }
}
module.exports = ParticipationController;