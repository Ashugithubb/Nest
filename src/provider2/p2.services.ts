import { Injectable, Inject, Scope } from '@nestjs/common';
import { Provider1 } from '../provider1/p1.services'; 

@Injectable()
export class Provider2 {
  constructor(
    @Inject('CURRENT_TIME') private readonly time: string,
    private readonly p1: Provider1,
  ) { }

  getTime(): object {
    const helloMsg = this.p1.Heloo();
    return {
      time: `Provider2 service Instance creation Time ${this.time}`,
      message: helloMsg.message, 
    };

  }
}
