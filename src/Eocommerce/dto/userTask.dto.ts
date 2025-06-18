import { Type } from "class-transformer";
import {
    ArrayMaxSize,
    ArrayUnique,
    IsArray,
    IsDate,
    IsInt,
    IsString,
    ValidateNested
} from "class-validator";

export class Tasks {
    @IsArray()
    @ArrayUnique((task:Tasks)=>{task.TasksTitle},{ message: "Array must be unique" })
    @ArrayMaxSize(5)
    TasksTitle: string[];

    @IsDate()
    @Type(() => Date)
    start: Date = new Date();

    @IsDate()
    @Type(() => Date)
    end: Date = new Date(new Date().getTime());
}

export class User {
    @IsString()
    name: string;

    @IsInt()
    age: number;

    @ValidateNested({ each: true })
    @Type(() => Tasks)
    Task: Tasks[];
}
