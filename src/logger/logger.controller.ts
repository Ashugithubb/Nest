import { Controller, Get } from "@nestjs/common";
import { MyServices } from "./loggerservices";

@Controller('log')
export class LoggerController{
    constructor(private readonly log :MyServices){}
    @Get()
    sayHeloo(){
        return this.log.sayHello();
    }

}