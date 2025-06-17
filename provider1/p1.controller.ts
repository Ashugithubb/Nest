import { Controller, Get, Post } from "@nestjs/common";
import { Provider1 } from "./p1.services";

@Controller('provider1')
export class P1Controller {
  constructor(private pro1: Provider1) {}

  @Get('/p1')
  async Heloo(){
    return this.pro1.Heloo();}
}