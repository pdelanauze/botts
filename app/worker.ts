import {Logger} from "./interfaces/Logger";
import LoggerFactory from "./factories/LoggerFactory";
import {SlackBotConsumer} from "./consumers/SlackBotConsumer";
const logger:Logger = LoggerFactory.build('worker');

new SlackBotConsumer(process.env.SLACK_TOKEN).connect().then((bot) => {
  logger.info({}, 'Consuming slack channel!');

  bot.listen({
    pattern: new RegExp('hello world', 'i'),
    received: (message:string, sourceMessage:any) => {
      logger.info({message: message}, 'Received message');
      return bot.reply(sourceMessage, 'This is my world');
    }
  })
});
