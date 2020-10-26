const PORT = process.env.PORT || 3000;

const dotenv = require('dotenv');

// Initialize dotenv
dotenv.config()

// ------------------------------------ \\

const { App } = require('@slack/bolt');

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

/* Add functionality here */

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
  console.log(`Responded hello to ${message.user}`)
});

app.event('app_home_opened', ({ event, say }) => {  
  say(`Hey <@${event.user}>!`);
  console.log(`${event.user} opened app.`)
});

(async () => {
  // Start the app
  await app.start(PORT);
  console.log(`App is running! On Server Port ${PORT}`);
})();