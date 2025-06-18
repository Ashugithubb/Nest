import { IsString, IsInt, Min, Max, IsStrongPassword, isEmail, IsEmail, IsPhoneNumber, IsEnum, IsUrl, IsNotEmpty, IsDate, IsEmpty, IsOptional, isString, isArray, IsPostalCode, ValidateNested, IsNumber } from 'class-validator';
import { Url } from 'node:url';
import { Transform, Type } from 'class-transformer';
export class AddressDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  street: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim().toLowerCase())
  city: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim().toUpperCase())
  state: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim().toUpperCase())
  country: string;

  @IsPostalCode('any')
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  postalCode: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  landmark?: string;
}

export class CreateUserDto {
    @Transform(({value}) => parseInt(value))
    @IsInt()
    uid: number

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @Transform(({ value }) => value.trim())
    email:string;

    @IsInt()
    @Min(0)
    age: number;

    @IsEnum(["Male","Female" ,"Other"])
    gender : ["Male" | "Female" | "Other"]

    @IsStrongPassword()
    password: string;
   
    @IsPhoneNumber()
    phone:string

    @IsEnum(["User","Admin"])
    role : "User" | "Admin";

    @IsUrl()
    @IsOptional()
    @Transform(({ value }) => value.trim())
    avatar : Url

  
    @IsDate()
    created_at : Date = new Date();
    
    @IsOptional()
    bio: string = "Add Your Bio"

    @ValidateNested()
    @Type(() => AddressDto)
    Adress : AddressDto
} 
 export class Productdto{
  @IsNumber()
  id:number;
  
  @Transform(({ value }) => value.trim())
  @IsString()
  productName:string;

  @IsNumber()
  price:number;

  @IsOptional()
  @IsString()
  discount:string;
 }



