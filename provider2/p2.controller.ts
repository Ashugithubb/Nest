// time.controller.ts
import { Controller, Get, Inject } from '@nestjs/common';

@Controller('time')
export class TimeController {
  constructor(@Inject('CONNECTION',) private readonly time: string) {}

  @Get('/p2')
  getTime2() {
    return { P2time: this.time };
  }
}
