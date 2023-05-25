import { ICliente } from "./cliente.interface"
import { IPedido } from "./pedido.interface"

export interface IPayU{
  datosTarjeta: IPayUTarjeta,
  cliente: ICliente,
  pedido: IPedido
}

export interface IPayUTarjeta{
  numeroTarjeta: string,
  fechaVencimiento: string,
  cvv: string,
  nombreTarjeta: string,
  tipoBanco: string
}