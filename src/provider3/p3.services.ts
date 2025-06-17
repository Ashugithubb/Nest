import { Injectable } from '@nestjs/common';
import { Provider2 } from '../provider2/p2.services'; 

@Injectable()
export class P3Service {
  constructor(private readonly provider2: Provider2) {}

 world(): object {
  const timeInfo = this.provider2.getTime();
  return {
    message: 'Provider3 says:',
    timeInfo, 
  };
}

}
