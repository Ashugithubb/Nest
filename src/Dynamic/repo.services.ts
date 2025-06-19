import { Injectable } from "@nestjs/common";
import { CreateUserDto, Productdto } from "./dto/user.dto";

@Injectable()
export class Repo {
    private readonly users: CreateUserDto[] = [];

    create(user: CreateUserDto) {
        this.users.push(user);
        return user;
    }

    getAllUser() {
        return this.users;
    }

     update(id: number, updatedUser: Partial<CreateUserDto>): CreateUserDto | undefined {
        const userIndex = this.users.findIndex(u => u.uid === id);
    
        if (userIndex === -1) return undefined;
    
        this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
        return this.users[userIndex];
      }

      delete(id: number): boolean {
        const index = this.users.findIndex(u => u.uid === id);
        if (index === -1) return false;
    
        this.users.splice(index, 1);
        return true;
      }

      
      upSert(user:CreateUserDto){
        const index = user.uid;
        const exist = this.users.findIndex(c => c.uid === index);
        if(exist){
          this.users[index] = {...this.users[index],...user}
        }
        else{
          this.create(user);
        }
      }

      private readonly Product:Productdto[]=[];
      AddProduct(pro : Productdto){
            return this.Product.push(pro);
      }

      SearchItem(id:number){
        return this.Product.filter((items)=> items.id===id)
      }    
       
      getProducts(){
        return this.Product;
      }
}
