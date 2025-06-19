import { Module } from "@nestjs/common";
import { MyServices } from "./loggerservices";
import { LoggerController } from "./logger.controller";

@Module({
    providers:[MyServices],
    controllers:[LoggerController]
})
export class LoggerModule{

}