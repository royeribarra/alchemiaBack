import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean, IsArray, IsUUID } from 'class-validator';
import { ProductosEntity } from '../entities/productos.entity';
import { TiposRarezaCafeEntity } from '../../tiposRarezaCafe/entities/tiposRarezaCafe.entity';

export class ProductoDTO{
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsString()
  empaque: string;

  @IsNotEmpty()
  @IsNumber()
  puntaje: number;

  @IsNotEmpty()
  @IsString()
  origen: string;

  @IsNotEmpty()
  @IsString()
  altura: string;

  @IsNotEmpty()
  @IsString()
  variedad: string;

  @IsNotEmpty()
  @IsString()
  proceso: string;

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

export class ProductoToRarezaDTO{
  @IsNotEmpty()
  @IsNumber()
  producto: ProductosEntity;

  @IsNotEmpty()
  @IsNumber()
  rareza: TiposRarezaCafeEntity;
}