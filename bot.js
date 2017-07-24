const TeleBot = require('telebot');
const config  = require('./config');
const bot     = new TeleBot(config.TOKEN);

bot.on(['/bar'], (msg) => {
    msg.reply.text('You are under /bar command controller');
});

bot.on('text', (msg) => {
    msg.reply.text('Someone write something');
});

bot.on('sticker', (msg) => {
    msg.reply.text('Someone sent a sticker');
});

bot.start();