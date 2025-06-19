import { Logger } from './logger.decorator';
import { Injectable, OnModuleDestroy } from '@nestjs/common';

@Logger()
export class MyServices  {
  sayHello() {
    console.log('Hello from MyService');
  }
}
