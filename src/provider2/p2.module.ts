import { Module, Scope } from "@nestjs/common";
import { Provider1 } from "src/provider1/p1.services";
import { Provider2 } from "./p2.services";

const connectionProvider = {
  provide: "CURRENT_TIME",
  useFactory: () => new Date().toISOString(),
  scope : Scope.REQUEST
};  

@Module({
  providers: [
    connectionProvider,
    Provider1,
    Provider2
  ],

  exports: ['CURRENT_TIME', Provider1,Provider2],
})
export class P2Module { }
