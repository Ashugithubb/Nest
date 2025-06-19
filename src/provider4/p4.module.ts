import { Module, Scope } from "@nestjs/common";
import { P1Module } from "src/provider1/p1.module";
import { Provider1 } from "src/provider1/p1.services";
import { Provider4 } from "./p4.services";

class CurrentTime{
    public create() :string{
        return new Date().toISOString();
    }
}
@Module(
    {
        imports:[P1Module],
        providers:[{
            provide:Provider4,
            useFactory:(P1:Provider1)=>{
                const Time = new CurrentTime().create();
                return new Provider4(P1,Time);
            },
            inject:[Provider1],
            scope:Scope.REQUEST,
        }],
        exports:[Provider4]
    }
)
export class P4Module{}