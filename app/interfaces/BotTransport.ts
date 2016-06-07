export interface ListeningTo {
  pattern:RegExp
  received:(message:string, sourceMessage:any) => Promise<void>
}

export interface BotTransport {
  connect():Promise<BotTransport>;
  reply(sourceMessage:any, msg:string):Promise<void>;
  listen(callback:ListeningTo):Promise<void>;
}
