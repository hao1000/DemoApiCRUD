import {LoggerService, Logger} from '@nestjs/common';

export class MyLogger implements LoggerService{
    error(message: any, trace?: string, context?: string) {
        throw new Error("Method not implemented.");
    }
    warn(message: any, context?: string) {
        throw new Error("Method not implemented.");
    }
    debug?(message: any, context?: string) {
        throw new Error("Method not implemented.");
    }
    verbose?(message: any, context?: string) {
        throw new Error("Method not implemented.");
    }
    log(message:string){
        Logger.log("chay binh thuong");
    }
}