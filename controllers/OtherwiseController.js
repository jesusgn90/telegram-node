'use strict';
const Telegram = require('telegram-node-bot'),
    TelegramBaseController = Telegram.TelegramBaseController,
    User = require('./../models/user');

class OtherwiseController extends TelegramBaseController {
    handle($) {
        var text = $.message.text,
            username = $.message.from.username;

        OtherwiseController.checkUser(username,function(msg){
            console.log(msg);
            OtherwiseController.addMessage(username,text,function(){
                console.log(username + ' said: ' + text);
            });
        });

    }

    static addMessage(username,text,done){
        User.findOne({username:username},function(err,user){
            if(err) throw err;
            user.actions.push(text);
            user.save(function(err){
                if(err) throw err;
                done();
            })
        })

    }
    static checkUser(username,done){
        User.findOne({username:username},function(err,user) {
            if (err) throw err;
            if (!user) {
                var u = new User({username:username, actions:['FIRST INTERACTION']});
                u.save(function(err){
                    if(err) throw err;
                    done('New user created');
                });
            } else{
                done('User already exists');
            }
        });
    }
}
module.exports = OtherwiseController;