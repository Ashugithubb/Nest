import { Module } from "@nestjs/common";
import { MyServices } from "./loggerservices";


@Module({
    providers: [MyServices],

})
export class LoggerModule {

}