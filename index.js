const { WebClient } = require('@slack/web-api');
const axios = require('axios')
const dotenv = require('dotenv')
const ngrok = require('ngrok'); //in package.json node is default because nodemon doesn't like ngrok that much

dotenv.config()

const s_token = process.env.SLACK_TOKEN;
const bot = new WebClient(s_token);
const conversationId = 'UDNU27V39';
const n_token = process.env.NGROK_TOKEN;

(async () => {
    
    const url = await ngrok.connect({
        proto: 'http', // http|tcp|tls, defaults to http
        addr: 4040, // port or network address, defaults to 80
        authtoken: n_token, // your authtoken from ngrok.com
    });

    console.log(url)
    console.log(ngrok.getUrl())

    // See: https://api.slack.com/methods/chat.postMessage
    //const res = await bot.chat.postMessage({ channel: conversationId, text: 'Hello there' });
  
    // `res` contains information about the posted message
    //console.log('Message sent: ', res.ts);
    
    //await ngrok.disconnect()
  })();