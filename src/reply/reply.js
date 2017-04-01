const https = require('https'),
    querystring = require('querystring'),
    replyApi = 'https://api.line.me/v2/bot/message/reply';

var Reply123 = {
    SendMsg: (channelToken, msgbody) => {
        // Build the post string from an object
        let post_data = querystring.stringify({
            'compilation_level': 'ADVANCED_OPTIMIZATIONS',
            'output_format': 'json',
            'output_info': 'compiled_code',
            'warning_level': 'QUIET',
            'js_code': msgbody
        }),

            // An object of options to indicate where to post to
            post_options = {
                host: replyApi,
                port: '143',
                //path: '/compile',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(post_data),
                    'Authorization': `Bearer {${channelToken}}`
                }
            },

            // Set up the request
            post_req = https.request(post_options, function (res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    console.log('Response: ' + chunk);
                });
            });

        // post the data
        post_req.write(post_data);
        post_req.end();

        return;
    }
};

module.exports = Reply123;