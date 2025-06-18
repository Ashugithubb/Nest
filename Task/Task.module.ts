import { Module } from "@nestjs/common";
import { TaskProvider } from "./task.services";
import { TaskController } from "./task.controller";

@Module({
    providers:[TaskProvider],
    controllers:[TaskController]
})
export class TaskModule{}