import { Module } from "@nestjs/common";
import { Provider1 } from "provider1/p1.services";
import { TimeController } from "./p2.controller";
import { TimeService } from "./p2.services";

const connectionProvider = {
  provide: 'CONNECTION',
  useFactory: (Provider: Provider1) => {
    const time = Provider.Heloo();
    return time ;
  },
  inject: [Provider1],
  
};

@Module({
  providers: [
    connectionProvider,
    Provider1,
    TimeService
  ],
  controllers : [TimeController],
exports: ['CONNECTION',TimeService],
})
export class P2Module{}
