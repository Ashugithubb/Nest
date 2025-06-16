import { Controller, Get, Req } from "@nestjs/common";
import { CatsService } from "./cats.services";

@Controller('cats')
export class CatsController{
    private catsServices = new CatsService

    constructor(private catsService:CatsService){}
    
    findAll(@Req() request:Request):string{
        console.log(request.url);
        return "THis action return all cats";
    }

}