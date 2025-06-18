import { Module, Scope } from "@nestjs/common";
import { Provider1 } from "src/provider1/p1.services";
import { Provider2 } from "./p2.services";
import { P1Module } from "src/provider1/p1.module";

// const connectionProvider = {
//   provide: "CURRENT_TIME",
//   useFactory: () => new Date().toISOString(),
//   scope : Scope.REQUEST
// };

@Module({
  imports:[P1Module],
  providers: [
    // connectionProvider,
    Provider2
  ],

  exports: [Provider2],
})
export class P2Module { }
