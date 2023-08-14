import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ICliente } from '../../../interfaces/cliente.interface';
import { IPayU, IPayUTarjeta } from '../../../interfaces/payU.interface';

export class PayUDTO{
  @IsNotEmpty()
  cliente: ICliente;

  @IsNotEmpty()
  datosTarjeta: IPayUTarjeta;

  @IsNotEmpty()
  @IsNumber()
  total: number;

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