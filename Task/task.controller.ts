import { Body, Controller, Get, Post } from "@nestjs/common";
import { TaskProvider } from "./task.services";
import { UserDto } from "./userTask.dto";

@Controller('task')
export class TaskController{
    constructor(private TaskService:TaskProvider){}
    @Post()
    AddTask(@Body() task :UserDto){
        return this.TaskService.AddTask(task);
    }
    @Get()
    SeeAllTask(){
        return this.TaskService.SeeAllTask();
    }
}