// time.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Provider1 } from 'provider1/p1.services';

@Injectable()
export class TimeService {
  constructor(@Inject('CONNECTION') private readonly time: string) {}
  getTime(): string {
    return this.time;
  }
}
