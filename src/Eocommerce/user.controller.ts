import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CreateUserDto, Productdto } from "./dto/user.dto";
import { RegisterService } from "./user.services";

@Controller('user')
export class UserController {
  constructor(private readonly userService: RegisterService) { }

  @Post('register')
  async create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Get('get')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Put(':id')
  updata(@Param('id') id: string, @Body() updateUser: Partial<CreateUserDto>) {
    return this.userService.update(Number(id), updateUser)
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    const deleted = this.userService.delete(Number(id));
    return deleted ? { message: `Cat with id ${id} deleted` }
      : { message: `Cat with id ${id} not found` };
  }

  @Put('up')
  upsert(@Body() creatUser: CreateUserDto) {
    return this.upsert(creatUser)
  }

  @Post('product')
  AddProduct(@Body() pro: Productdto) {
    return this.userService.AddProduct(pro)
  }
  @Get('item')
  SearchItem(@Query('id') id: number) {
    return this.userService.SearchItem(Number(id));
  }
  
  @Get('allproducts')
  getProducts(){
    return this.userService.getProducts();
  }

}

// http://localhost:3333/user/item?name=phone&id=1