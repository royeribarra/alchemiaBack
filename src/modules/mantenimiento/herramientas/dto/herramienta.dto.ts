import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class HerramientaDTO{
  @IsNotEmpty()
  @IsNumber()
  tipoProducto: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  precioUnitario: number;

  @IsNotEmpty()
  @IsNumber()
  precioDescuento: number;

  @IsNotEmpty()
  @IsString()
  imagen: string;

  @IsNotEmpty()
  @IsNumber()
  stock: number;
}

export class HerramientaUpdateDTO{
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  descripcion: string;

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