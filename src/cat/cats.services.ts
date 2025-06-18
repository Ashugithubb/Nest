
import { Injectable } from '@nestjs/common';
import { Cat } from '../interface/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  update(id: number, updatedCat: Partial<Cat>): Cat | undefined {
    const catIndex = this.cats.findIndex(cat => cat.id === id);

    if (catIndex === -1) return undefined;

    this.cats[catIndex] = { ...this.cats[catIndex], ...updatedCat };
    return this.cats[catIndex];
  }
  delete(id: number): boolean {
    const index = this.cats.findIndex(cat => cat.id === id);
    if (index === -1) return false;

    this.cats.splice(index, 1);
    return true;
  }
  
  upSert(cat:Cat){
    const index = cat.id;
    const exist = this.cats.findIndex(c => c.id === index);
    if(exist){
      this.cats[index] = {...this.cats[index],...cat}
    }
    else{
      this.create(cat);
    }
  }

}

