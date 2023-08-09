import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class DetallePedidoDTO{
  @IsNotEmpty()
  @IsString()
  pedidoId: number;

  @IsNotEmpty()
  @IsNumber()
  productoId: number;

  @IsNotEmpty()
  @IsString()
  nombreProducto: string;

  @IsNotEmpty()
  @IsNumber()
  tipoProducto: number;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;

  @IsNotEmpty()
  @IsNumber()
  precioUnitario: number;

  @IsNotEmpty()
  @IsNumber()
  total: number;
}

export class DetallePedidoUpdatedDTO{
  @IsOptional()
  @IsString()
  pedidoId: number;

  @IsOptional()
  @IsNumber()
  productoId: number;

  @IsOptional()
  @IsBoolean()
  nombreProducto: string;

  @IsOptional()
  @IsNumber()
  tipoProducto: number;

  @IsOptional()
  @IsNumber()
  cantidad: number;

  @IsOptional()
  @IsNumber()
  precioUnitario: number;

  @IsOptional()
  @IsNumber()
  total: number;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}