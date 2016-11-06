'use strict';
const Telegram = require('telegram-node-bot'),
    TelegramBaseController = Telegram.TelegramBaseController,
    User = require('./../models/user');
/**
 * Anything not catched by HelloController, ParticipationController, PingController
 */
class OtherwiseController extends TelegramBaseController {
    handle($) {
        var text = $.message.text,
            username = $.message.from.username;

        OtherwiseController.checkUser(username,callbackCheckUser);

        function callbackCheckUser(msg){
            console.log(msg);
            OtherwiseController.addMessage(username,text,callbackAddMessage);
        }

        function callbackAddMessage(){
            console.log(username + ' said: ' + text);
        }

    }

    static addMessage(username,text,done){

        User.findOne({username:username},callbackFindOne);

        function callbackFindOne(err,user){
            if(err) throw err;
            user.actions.push(text);
            user.save(callbackUserSave);

        }
        function callbackUserSave(err){
            if(err) throw err;
            done();
        }

    }
    static checkUser(username,done){
        User.findOne({username:username},callbackFindOne);

        function callbackFindOne(err,user) {
            if (err) throw err;
            if (!user) {
                var u = new User({username:username, actions:['FIRST INTERACTION']});
                u.save(callbackUserSave);
            } else{
                done('User already exists');
            }
        }

        function callbackUserSave(err){
            if(err) throw err;
            done('New user created');
        }
    }
}
module.exports = OtherwiseController;