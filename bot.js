const { Telegraf } = require('telegraf')
const request = require('request')

const token = '5939093260:AAHOC1FOucUYJrvk_4vjIA3KtePnbI-qsw8'

const bot = new Telegraf(token, {polling:true})

bot.command('start', async (ctx) => {
    await ctx.replyWithHTML('Please , send Instagram Url')
})


bot.on('message', async (ctx) => {
    const link = ctx.update.message.text
    llink = link.split('')
    if (link[0] === 'h', link[1] === 't', link[2] === 't', link[3] === 'p', link[4] === 's', link[5] === ':', link[6] === '/', link[7] === '/', link[8] === 'w', link[9] === 'w', link[10] === 'w', link[11] === '.', link[12] === 'I', link[13] === 'n', link[14] === 's', link[15] === 't', link[16] === 'a', link[17] === 'g', link[18] === 'r',link[19] ==='a', link[20] === 'm') {
        const options = {
            method: 'GET',
            url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
            qs: { url: link },
            headers: {
                'X-RapidAPI-Key': '3d601e97d3mshcfdc975a4c819dep1c27f7jsnf1c21aa233d4',
                'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
            }
        };
        request(options, async function (error, response, body) {
            if (error) throw new Error(error);
            const data = JSON.parse(body)
            await ctx.telegram.sendVideo(ctx.chat.id, `${data.media}`)
            console.log(body);
        });
    } else {
        await ctx.replyWithHTML('Please enter valid url')
    }

})

bot.launch().then(() => {
    console.log('Bot stated....')
})