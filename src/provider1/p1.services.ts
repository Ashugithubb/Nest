import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST })
export class Provider1 {
  Heloo() {
   return { message: "Hello from Provider1" };
  }
}
