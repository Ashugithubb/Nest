import { Inject, Injectable, Scope } from '@nestjs/common';
import { Provider1 } from '../provider1/p1.services';

@Injectable({ scope: Scope.REQUEST }) 
export class Provider2 {
  constructor(private readonly p1: Provider1,
       @Inject("CURRENT_TIME") private readonly time:string){}


  getTime() {
    const helloMsg = this.p1.Heloo();
    return {
      time: `Provider2 service Instance creation Time ${this.time}`, 
      message: helloMsg.message,
    };
  }
}







