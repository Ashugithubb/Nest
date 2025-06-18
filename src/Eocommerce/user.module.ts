import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { RegisterService } from "./user.services";

@Module({
    controllers: [UserController],
    providers: [RegisterService]
})
export class UserModule{
}
// {
//   "uid": 101,
//   "name": "Ashutosh Kumari",
//   "email": "ashu@example.com",
//   "age": 25,
//   "gender": "Male",
//   "password": "StrongPass@123",
//   "phone": "+911234567890",
//   "role": "User",
//   "avatar": "https://example.com/avatar.jpg",
//   "bio": "Software Developer based in India",
//   "Adress": {
//     "street": "123 Main Street",
//     "city": "Delhi",
//     "state": "Delhi",
//     "country": "India",
//     "postalCode": "110001",
//     "landmark": "Near Central Park"
//   }
// }
