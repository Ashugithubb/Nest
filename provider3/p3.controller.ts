import { Controller, Get, Inject } from '@nestjs/common';
import { TimeService } from 'provider2/p2.services';

@Controller('time')
export class TimeController3 {
  constructor( private time: TimeService) {}

  @Get('/p3')
  getTime3() {
    return { P3time: this.time };
  }
}