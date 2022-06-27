const { Telegraf } = require('telegraf')

let range = 600
const bot = new Telegraf("5446372357:AAF2Yg5oFQ0utgK1iZ-5NvOUAFxSre3tTxs")
bot.start((ctx) => ctx.reply('1000-7?'))
bot.hears(`hi`, (ctx) => {
    ctx.reply(`${range}`)
    range = range - 75
})
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
