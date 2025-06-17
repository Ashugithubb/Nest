import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateCatDto {
    @IsInt()
    id: number
    @IsString()
    name: string;

    @IsInt()
    @Min(0)
    age: number;

    @IsString()
    breed: string;
}
