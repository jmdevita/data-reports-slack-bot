const { createServer } = require('http')
const express = require('express');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

const dotenv = require('dotenv');
const axios = require('axios');

const { WebClient } = require('@slack/web-api');

const { createEventAdapter } = require('@slack/events-api');

// Initialize dotenv
dotenv.config()

// Create an express app
const app = express();

// Read the signing secret from the environment variables
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;

// Initialize
const slackEvents = createEventAdapter(signingSecret = slackSigningSecret);

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
slackEvents.on('message', (event) => {
    console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
  });

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

(async () => {
// Start a basic HTTP server
    await slackEvents.start(PORT).then(() => {
        // Listening on path '/slack/events' by default
        console.log(`server listening on port ${PORT}`);
    });
  })();