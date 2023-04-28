import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class ProductoDTO{
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  tipoProducto: number;

  @IsNotEmpty()
  @IsNumber()
  tipoMolido: number;

  @IsNotEmpty()
  @IsNumber()
  tipoTueste: number;

  @IsNotEmpty()
  @IsNumber()
  tipoVariedad: number;

  @IsNotEmpty()
  @IsNumber()
  precioUnitario: number;

  @IsNotEmpty()
  @IsString()
  imagen: string;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}

export class ProductoUpdateDTO{
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  tipoProducto: number;

  @IsOptional()
  @IsNumber()
  tipoMolido: number;

  @IsOptional()
  @IsNumber()
  tipoTueste: number;

  @IsOptional()
  @IsNumber()
  tipoVariedad: number;

  @IsOptional()
  @IsNumber()
  precioUnitario: number;

  @IsOptional()
  @IsNumber()
  imagen: string;

  @IsOptional()
  @IsNumber()
  stock: number;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}