const
    express = require('express'),
    linebot = require('linebot'),
    channel = require('./config/channel.js'),
    bot = linebot({
        channelId: channel.id,
        channelSecret: channel.scrt,
        channelAccessToken: channel.token,
    }),
    app = express(),
    linebotParser = bot.parser();


bot.on('message', event => {
    console.log(event);
});

app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080,
    () => {
        console.log(bot);
        console.log(`App is now running on ${server.address().port}`)
    });