export interface Logger {
  trace(data:any, message:string);
  debug(data:any, message:string);
  info(data:any, message:string);
  warn(data:any, message:string);
  error(data:any, message:string);
  fatal(data:any, message:string);
}

export default Logger;
