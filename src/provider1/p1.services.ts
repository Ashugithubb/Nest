import { Injectable } from "@nestjs/common";

@Injectable()
export class Provider1 {
  Heloo() {
   return { message: "Hello from Provider1" };
  }
}
