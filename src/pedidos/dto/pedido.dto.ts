import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ROLES } from 'src/constants/roles';

export class PedidoDTO{
  @IsNotEmpty()
  @IsString()
  clienteId: number;

  @IsNotEmpty()
  @IsNumber()
  totalProductos: number;

  @IsNotEmpty()
  @IsBoolean()
  total: number;

  @IsNotEmpty()
  @IsNumber()
  costoDelivery: number;

  @IsNotEmpty()
  @IsNumber()
  observacion: string;

  @IsNotEmpty()
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

  @IsNotEmpty()
  role: ROLES;
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

  @IsOptional()
  role: ROLES;
}