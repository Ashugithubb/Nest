import { Module } from "@nestjs/common";
import { P1Controller } from "./p1.controller";
import { Provider1 } from "./p1.services";
@Module({
   controllers : [P1Controller],
   providers: [Provider1]
})
export class P1Module{}