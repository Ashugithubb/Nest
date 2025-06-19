import { Injectable } from '@nestjs/common';
import { Provider2 } from '../provider2/p2.services';

@Injectable()
export class P3Service {
  constructor() { }

  world() {
    return {
      message: 'Provider3 says World:',

    };
  }

}
