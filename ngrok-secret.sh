#!/bin/bash

# Exit on error
# set -e
clear
echo "Go to directory path"
cd ~/'Personal Projects'/'Data Reports Slack Bot'
pwd
sleep 1
echo "Grab secret from .env file"
eval "$(grep ^SLACK_SIGNING_SECRET= .env)"
echo "Start server with Slack Signing Secret"
./node_modules/.bin/slack-verify --secret $SLACK_SIGNING_SECRET