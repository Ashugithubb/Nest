// time.service.ts
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class TimeService {
  constructor(@Inject('CONNECTION') private readonly time: string) {}

  getTime(): string {
    return `From Provider2 ${this.time}`;
  }
}
