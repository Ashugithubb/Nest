import { Injectable, Scope } from '@nestjs/common';
import { Provider1 } from '../provider1/p1.services';

@Injectable({ scope: Scope.REQUEST }) 
export class Provider2 {
  private readonly time: string;

  constructor(private readonly p1: Provider1) {
    this.time = new Date().toISOString(); 
  }

  getTime(): object {
    const helloMsg = this.p1.Heloo();
    return {
      time: `Provider2 service Instance creation Time ${this.time}`, 
      message: helloMsg.message,
    };
  }
}






// import { Injectable, Inject, Scope } from '@nestjs/common';
// import { Provider1 } from '../provider1/p1.services';
// import { time } from 'console'

// @Injectable()
// export class Provider2 {
//   // constructor(
//   //   // @Inject('CURRENT_TIME') private readonly time: string,

//   //   private readonly p1: Provider1,
//   // ) { }
//   private readonly time: string;
//   constructor(private readonly p1: Provider1) {
//     this.time = new Date().toISOString(); 
//      scope : Scope.REQUEST
//   }
//   getTime(): object {
//     const helloMsg = this.p1.Heloo();
//     return {
//       time: `Provider2 service Instance creation Time ${time}`,
//       message: helloMsg.message,
//     };

//   }
// }
