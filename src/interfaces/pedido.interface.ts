import { ICliente } from "./cliente.interface"

export interface IPedido{
  clienteId: number,
  cliente?: ICliente,
  totalProductos: number,
  total: number,
  costoDelivery: number,
  observacion: string,
  fechaPago?: string,
  fechaEntrega: string,
  fechaPedido?: string,
  isActive?: boolean
}