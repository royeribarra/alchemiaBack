import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class PayUDTO{
  @IsNotEmpty()
  @IsString()
  clienteId: string;

  @IsNotEmpty()
  @IsNumber()
  totalProductos: number;

  @IsNotEmpty()
  @IsNumber()
  costoDelivery: number;

  @IsNotEmpty()
  @IsBoolean()
  total: number;

  @IsNumber()
  observacion: string;

  @IsNumber()
  fechaPago: string;

  @IsNotEmpty()
  @IsNumber()
  fechaEntrega: string;

  @IsNotEmpty()
  @IsNumber()
  fechaPedido: string;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}

export class PayUUpdatedDTO{
  @IsOptional()
  @IsString()
  clienteId: string;

  @IsOptional()
  @IsNumber()
  totalProductos: number;

  @IsOptional()
  @IsBoolean()
  total: number;

  @IsOptional()
  @IsNumber()
  costoDelivery: number;

  @IsOptional()
  @IsNumber()
  observacion: string;

  @IsOptional()
  @IsNumber()
  fechaPago: string;

  @IsOptional()
  @IsNumber()
  fechaEntrega: string;

  @IsOptional()
  @IsNumber()
  fechaPedido: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}