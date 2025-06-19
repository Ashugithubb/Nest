import { Controller, Get } from '@nestjs/common';
import { P3Service } from './p3.services';
import { Provider4 } from 'src/provider4/p4.services';


@Controller('p3')
export class P3Controller {
  constructor(private readonly p3Service: P3Service,
    private readonly p4Service:Provider4,
  ) {}

  @Get('world')
  getWorldMessage() {
    return {
     P1: this.p4Service.getHello(),
     P3:this.p3Service.world(),
     p4:this.p4Service.getCurrentTime()
    }
  }
}
