import { Type } from "class-transformer";
import { IsInt, IsString, ValidateNested } from "class-validator";

export class startTime{
    start:Date=new Date();
}
export class Tasks {
    Tasks :Symbol;
    start: Date=new Date();
    end: startTime
}
export class User {
    @IsString()
    name: string;
    @IsInt()
    age: 12;
    @ValidateNested()
    @Type(() => Tasks)
    Task: [Tasks]
}