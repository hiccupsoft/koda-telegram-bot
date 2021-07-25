require('dotenv').config()

const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome to KODA tipping bot, you need to goto koda.finance/tip-bot to register for our tipping service. Username is mandatory to use this service',))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('/+', (ctx) => ctx.reply('tip updated'))
bot.hears('/++', (ctx) => ctx.reply('tip doubled'))
bot.hears('/Balance', (ctx) => ctx.reply('you dont have an account yet.'))
bot.hears('/BalanceAll', (ctx) => ctx.reply('you are not admin'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))