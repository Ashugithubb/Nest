import { Module } from "@nestjs/common";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.services";

// mock-cats.service.ts
export const mockCatsService = {
  findAll: () => {
    console.log('🚀 MockCatsService.findAll called');
    return [{ name: 'MockCat', age: 3, breed: 'MockBreed' }];
  },
  create: (cat) => {
    console.log('🚀 MockCatsService.create called with', cat);
    return { ...cat, id: 'mock-id' };
  },
};

@Module({
    controllers:[CatsController],
    providers:[CatsService]
    //  providers: [
    // {
    //   provide: CatsService,
    //   useValue: mockCatsService,
    // },]
})
export class CatModule{}