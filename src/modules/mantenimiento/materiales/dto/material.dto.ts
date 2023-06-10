import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class MaterialDTO{
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  descripcion: string;

  @IsNotEmpty()
  @IsBoolean()
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  imagen: string;

  @IsNotEmpty()
  @IsNumber()
  variedad: string;
}

export class MaterialUpdatedDTO{
  @IsOptional()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsNumber()
  descripcion: string;

  @IsOptional()
  @IsBoolean()
  precio: number;

  @IsOptional()
  @IsNumber()
  imagen: string;

  @IsOptional()
  @IsNumber()
  variedad: string;
}