import {Logger} from "../interfaces/Logger";
import {ConsoleLogger} from "../loggers/ConsoleLogger";

export class LoggerFactory {
  static build(module:string):Logger {
    return new ConsoleLogger(module);
  }
}

export default LoggerFactory;
