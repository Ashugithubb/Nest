import { Module } from "@nestjs/common";
import { TimeService3 } from "./p3.services";
import { TimeController3 } from "./p3.controller";
import { P2Module } from "provider2/p2.module";
@Module({
  imports : [P2Module],
  providers: [TimeService3],
  controllers : [TimeController3],

})
export class P3Module{}
