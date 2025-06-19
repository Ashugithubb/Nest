import { Injectable } from "@nestjs/common";
import { CreateUserDto, Productdto } from "src/Eocommerce/dto/user.dto";
import { TaskDto } from "Task/userTask.dto";
export interface BaseDTO {
  id?: number;
  uid?: number;
}
type DTO = CreateUserDto | Productdto | TaskDto;

@Injectable()
export class Repo {
  private storage = new Map<string, DTO[]>();

  private getStorageKey(dto: BaseDTO): string {
    if (dto instanceof CreateUserDto) return "user";
    if (dto instanceof Productdto) return "product";
    if (dto instanceof TaskDto) return "task";
    throw new Error("Unsupported DTO type");
  }

  private getArrayByType(type: string): BaseDTO[] {
    if (!this.storage.has(type)) {
      this.storage.set(type, []);
    }
    return this.storage.get(type)!;
  }

  create<T extends BaseDTO>(dto: T): T {
    const type = this.getStorageKey(dto);
    const array = this.getArrayByType(type);
    array.push(dto);
    return dto;
  }

  getAll(type: string): BaseDTO[] {
    return this.getArrayByType(type);
  }

  update<T extends BaseDTO>(type: string, id: number, partial: Partial<T>): T | undefined {
    const array = this.getArrayByType(type);
    const index = array.findIndex(item => item.uid === id || item.id === id);
    if (index === -1) return undefined;
    array[index] = { ...array[index], ...partial };
    return array[index] as T;
  }

  delete(type: string, id: number): boolean {
    const array = this.getArrayByType(type);
    const index = array.findIndex(item => item.uid === id || item.id === id);
    if (index === -1) return false;
    array.splice(index, 1);
    return true;
  }

  upsert<T extends BaseDTO>(dto: T): T {
    const type = this.getStorageKey(dto);
    const array = this.getArrayByType(type);
    const key = dto.uid ?? dto.id;
    const index = array.findIndex(item => item.uid === key || item.id === key);
    if (index !== -1) {
      array[index] = { ...array[index], ...dto };
    } else {
      this.create(dto);
    }
    return dto;
  }

  search<T extends BaseDTO>(type: string, id: number): T[] {
    const array = this.getArrayByType(type);
    return array.filter(item => item.uid === id || item.id === id) as T[];
  }
}






























// import { Injectable } from "@nestjs/common";
// import { CreateUserDto, Productdto } from "src/Eocommerce/dto/user.dto";
// import { TaskDto } from "Task/userTask.dto";


// @Injectable()
// export class Repo {
  
//   private storage = new Map<string, any[]>();

//   private getStorageKey(dto: any): string {
//     if (dto instanceof CreateUserDto) return "user";
//     if (dto instanceof Productdto) return "product";
//     if(dto instanceof TaskDto) return "task";
//     throw new Error("Unsupported DTO type");
//   }

//   private getArrayByType(type: string): any[] { 
//     if (!this.storage.has(type)) {
//       this.storage.set(type, []);
//     }
//     return this.storage.get(type);
//   }

//   create(dto: any) {
//     const type = this.getStorageKey(dto);
//     const array = this.getArrayByType(type);
//     array.push(dto);
//     return dto;
//   }

//   getAll(type: string) {
//     return this.getArrayByType(type);
//   }

//   update(type: string, id: number, partial: any): any | undefined {
//     const array = this.getArrayByType(type);
//     const index = array.findIndex(item => item.uid === id || item.id === id);
//     if (index === -1) return undefined;
//     array[index] = { ...array[index], ...partial };
//     return array[index];
//   }

//   delete(type: string, id: number): boolean {
//     const array = this.getArrayByType(type);
//     const index = array.findIndex(item => item.uid === id || item.id === id);
//     if (index === -1) return false;
//     array.splice(index, 1);
//     return true;
//   }

//   upsert(dto: any) {
//     const type = this.getStorageKey(dto);
//     const array = this.getArrayByType(type);
//     const key = dto.uid ?? dto.id;
//     const index = array.findIndex(item => item.uid === key || item.id === key);
//     if (index !== -1) {
//       array[index] = { ...array[index], ...dto };
//     } else {
//         this.create(dto);
//     }
//     return dto;
//   }

//   search(type: string, id: number) {
//     const array = this.getArrayByType(type);
//     return array.filter(item => item.uid === id || item.id === id);
//   }
// }
