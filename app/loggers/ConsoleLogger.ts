import Logger from "../interfaces/Logger";

export class ConsoleLogger implements Logger {

  module:string

  constructor(module:string) {
    this.module = module;
  }

  private _log(level:string, data:any, message:string) {
    if (level === 'error' || level === 'fatal') {
      console.trace(JSON.stringify(data, null, 2), ['[', this.module.toUpperCase(), '] ', message].join(''));
    } else {
      console.log(JSON.stringify(data, null, 2), ['[', this.module.toUpperCase(), '] ', message].join(''));
    }
  }

  trace(data:any, message:string) {
    this._log('trace', data, message);
  }

  debug(data:any, message:string) {
    this._log('debug', data, message);
  }

  info(data:any, message:string) {
    this._log('info', data, message);
  }

  warn(data:any, message:string) {
    this._log('warn', data, message);
  }

  error(data:any, message:string) {
    this._log('error', data, message);
  }

  fatal(data:any, message:string) {
    this._log('fatal', data, message);
  }
}

export default ConsoleLogger;
