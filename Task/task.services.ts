import { Injectable } from "@nestjs/common";
import { UserDto } from "./userTask.dto";

@Injectable()
export class TaskProvider{
    private readonly Task : UserDto[] =[];

    AddTask(task:UserDto){
        
         this.Task.push(task);
         return this.Task;
    }
    SeeAllTask(){
            return this.Task;
    }
}

