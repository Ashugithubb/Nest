import { OnModuleDestroy, Injectable } from '@nestjs/common';

export function Logger(): ClassDecorator {
  return function (target: any) {
    const className = target.name;


    const original = target;


    const newConstructor: any = function (...args: any[]) {
      console.log(`${className} class instantiated at: ${new Date().toISOString()}`);
      return new original(...args);
    };


    newConstructor.prototype = original.prototype;


    if (!newConstructor.prototype.onModuleDestroy) {
      newConstructor.prototype.onModuleDestroy = function () {
        console.log(`${className} class destroyed at: ${new Date().toISOString()}`);
      };
    }


    Injectable()(newConstructor);

    return newConstructor;
  };
}
