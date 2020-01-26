import TeleBot from 'telebot'
import { config } from 'dotenv'
config()

// Create the bot instance
const bot = new TeleBot(process.env.TELEGRAM_TOKEN as string)

// Command handler
bot.on(['/bar'], async (msg: any) => {
  await msg.reply.text('You are under /bar command controller')
})

// Text handler
bot.on('text', async (msg: any) => {
  await msg.reply.text('Someone write something')
})

// Sticker handler
bot.on('sticker', async (msg: any) => {
  await msg.reply.text('Someone sent a sticker')
})

bot.start()
