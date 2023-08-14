import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ICliente } from '../../../../interfaces/cliente.interface';
import { IDetallePedido } from '../../../../interfaces/detallePedido.interface';

export class PedidoDTO{
  @IsOptional()
  @IsNumber()
  clienteId: number;

  @IsNotEmpty()
  cliente: ICliente;

  @IsNotEmpty()
  materiales: IDetallePedido[];

  @IsNotEmpty()
  herramientas: IDetallePedido[];

  @IsNotEmpty()
  @IsNumber()
  totalProductos: number;

  @IsNotEmpty()
  @IsNumber()
  costoDelivery: number;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsString()
  observacion: string;

  @IsNotEmpty()
  @IsString()
  fechaEntrega: string;

  @IsOptional()
  @IsNumber()
  transactionId: number;
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