import { Module } from "@nestjs/common";
import { Provider1 } from "./p1.services";

@Module({
    providers:[Provider1],
    exports:[Provider1]
})
export class P1Module{}