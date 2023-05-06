import {
  IsString,
  MinLength,
  IsNumber,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsString()
  @MinLength(7)
  description: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  stock?: number;
}
