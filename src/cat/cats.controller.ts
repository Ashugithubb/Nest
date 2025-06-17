
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.services';
import { Cat } from '../interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updatedCat: Partial<Cat>) {
    return this.catsService.update(Number(id), updatedCat);
  }
  @Delete(':id')
delete(@Param('id') id: string) {
  const deleted = this.catsService.delete(Number(id));
  return deleted
    ? { message: `Cat with id ${id} deleted` }
    : { message: `Cat with id ${id} not found` };
}
}
