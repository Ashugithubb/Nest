import { Get, Injectable } from "@nestjs/common";

@Injectable({})
export class Provider1 {

    Heloo() {
         const currentTime = new Date().toISOString();
        return {msg: `I am Provider 1 hit timr ${currentTime}`}
    } 
}
