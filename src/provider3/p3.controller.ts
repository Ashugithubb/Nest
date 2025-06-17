import { Controller, Get } from '@nestjs/common';
import { P3Service } from './p3.services';


@Controller('p3')
export class P3Controller {
  constructor(private readonly p3Service: P3Service) {}

  @Get('world')
  getWorldMessage() {
    return this.p3Service.world();
  }
}
