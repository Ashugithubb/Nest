import { Injectable,Scope } from "@nestjs/common";
import { Provider1 } from "src/provider1/p1.services";

@Injectable({scope:Scope.REQUEST})
export class Provider4{
    constructor(private readonly Provider1:Provider1,
        private readonly currentTime:string
    ){}

    getHello() {
        return this.Provider1.Heloo();
    }
    getCurrentTime():string{
        return this.currentTime;
    }
}