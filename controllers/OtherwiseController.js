/* jshint esversion: 6 */
'use strict';
const Telegram = require('telegram-node-bot'),
    TelegramBaseController = Telegram.TelegramBaseController,
    User = require('../models/user'),
    Processor = require('../modules/processor');

/**
 * @description Anything not catched by HelloController, ParticipationController, PingController
 * @class OtherwiseController
 */
class OtherwiseController extends TelegramBaseController {
    /**
     *
     * @param $
     */
    handle($) {
        let text = $.message.text,
            username = $.message.from.username;

        OtherwiseController.checkUser(username, callbackCheckUser);

        /**
         *
         * @param msg
         */
        function callbackCheckUser(msg) {
            console.log(msg);
            OtherwiseController.addMessage(username, text, callbackAddMessage);
        }

        /**
         *
         */
        function callbackAddMessage() {
            console.log(username + ' said: ' + text);
            console.log('Text is processing...');
            Processor.process(text, function (err) {
                if (err) {
                    console.log('Error', err);
                } else {
                    console.log('Success');
                }
            });
        }


    }

    /**
     *
     * @param username
     * @param text
     * @param done
     */
    static addMessage(username, text, done) {
        User.findOne({username: username}, callbackFindOne);

        /**
         *
         * @param err
         * @param user
         */
        function callbackFindOne(err, user) {
            if (err) throw err;
            user.actions.push(text);
            user.save(callbackUserSave);

        }

        /**
         *
         * @param err
         */
        function callbackUserSave(err) {
            if (err) throw err;
            done();
        }

    }

    /**
     *
     * @param username
     * @param done
     */
    static checkUser(username, done) {
        User.findOne({username: username}, callbackFindOne);

        /**
         *
         * @param err
         * @param user
         */
        function callbackFindOne(err, user) {
            if (err) throw err;
            console.log('Checking if user exists...')
            if (!user) {
                let u = new User({username: username, actions: ['FIRST INTERACTION']});
                u.save(callbackUserSave);
            } else {
                done('User already exists');
            }
        }

        /**
         *
         * @param err
         */
        function callbackUserSave(err) {
            if (err) throw err;
            done('Success');
        }
    }
}
module.exports = OtherwiseController;