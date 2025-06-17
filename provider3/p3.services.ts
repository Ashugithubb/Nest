// time.service.ts
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class TimeService3 {
  constructor(@Inject('CONNECTION') private readonly time: string) {}

  getTime3(): string {
    return `From Provider3 after calling Provider2 ${this.time}`;
  }
}