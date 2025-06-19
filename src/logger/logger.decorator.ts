import { OnModuleDestroy, Injectable } from '@nestjs/common';

export function Logger(): ClassDecorator {
  return function (target: any) {
    const className = target.name;

    // Original constructor
    const original = target;

    // New constructor with logging
    const newConstructor: any = function (...args: any[]) {
      console.log(`${className} class instantiated at: ${new Date().toISOString()}`);
      return new original(...args);
    };

    // // Copy prototype so instanceof works
    newConstructor.prototype = original.prototype;

    // Add OnModuleDestroy if not present
    if (!newConstructor.prototype.onModuleDestroy) {
      newConstructor.prototype.onModuleDestroy = function () {
        console.log(`${className} class destroyed at: ${new Date().toISOString()}`);
      };
    }

    // Ensure it's still treated as injectable
    Injectable()(newConstructor);

    return newConstructor;
  };
}
