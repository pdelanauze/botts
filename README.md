## Slack bot consumer

### Requirements

Requires an environment variable named `SLACK_TOKEN` with a slack api token (starts with `xoxp-...`)
This token can be generated from https://api.slack.com/tokens (make sure it has a dedicated user).

### Booting up

`nvm use && npm install && ./node_modules/.bin/typings install && SLACK_TOKEN=xoxp- npm start`
