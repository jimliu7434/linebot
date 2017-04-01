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
    linebotParser = bot.parser(),
    eventHandler = require('./src/event');


bot.on('message', event => {
    console.log(event);
    eventHandler(event);
});

app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080,
    () => {
        console.log(`App is now running on ${server.address().port}`);
        global.GAMES = [];
    });