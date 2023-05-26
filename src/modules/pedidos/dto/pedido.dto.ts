import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ICliente } from 'src/interfaces/cliente.interface';

export class PedidoDTO{
  @IsNotEmpty()
  @IsString()
  clienteId: number;

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

  @IsNotEmpty()
  @IsNumber()
  fechaEntrega: string;
}

export class PedidoUpdatedDTO{
  @IsOptional()
  @IsString()
  clienteId: number;

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