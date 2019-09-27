import TeleBot from 'telebot';
import { TOKEN } from './config';

// Create the bot instance
const bot = new TeleBot(TOKEN);

// Sample command handler
bot.on(['/bar'], async (msg: any) => {
  await msg.reply.text('You are under /bar command controller');
});

// Sample text handler
bot.on('text', async (msg: any) => {
  await msg.reply.text('Someone write something');
});

// Sample sticker handler
bot.on('sticker', async (msg: any) => {
  await msg.reply.text('Someone sent a sticker');
});

bot.start();
