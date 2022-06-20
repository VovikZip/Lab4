const { Telegraf } = require('telegraf')

let range = 1000
const bot = new Telegraf("Telegram bot token")
bot.start((ctx) => ctx.reply('1000-7?'))
bot.hears(`sf banned`, (ctx) => {
    ctx.reply(`${range}`)
    range = range - 77
})
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
