import {BotTransport, ListeningTo} from "../interfaces/BotTransport";
import {LoggerFactory} from "../factories/LoggerFactory";
import {Logger} from "../interfaces/Logger";
const logger:Logger = LoggerFactory.build('SlackBotConsumer');

const Botkit = require('botkit');

export class SlackBotConsumer implements BotTransport {

  controller:any;
  bot:any;
  listeningTo:Array<ListeningTo>;
  token:string;

  constructor(token:string) {
    this.token = token;
    this.listeningTo = new Array<ListeningTo>();
  }

  connect():Promise<BotTransport> {
    return new Promise((resolve, reject) => {
      this.controller = Botkit.slackbot({
        debug: process.env.DEBUG || false,
      });

      this.bot = this.controller.spawn({
        token: this.token
      }).startRTM();

      this.controller.hears('.*', ['direct_message', 'direct_mention', 'mention'], (bot, message) => {
        console.log(message);
        this.listeningTo.forEach((listener:ListeningTo) => {
          if (listener.pattern.exec(message.text)) {
            listener.received(message.text, message);
          }
        })
      });

      resolve(this);
    });
  }

  reply(sourceMessage:any, response:string):Promise<any> {
    return new Promise((resolve, reject) => {
      this.bot.reply(sourceMessage, response);
      return resolve();
    });
  }

  listen(callback:ListeningTo):Promise<any> {
    return new Promise((resolve, reject) => {
      this.listeningTo.push(callback);
      resolve();
    });
  }
}

export default SlackBotConsumer;
