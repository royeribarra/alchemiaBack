export interface IPedido{
  clienteId: number,
  totalProductos: number,
  total: number,
  costoDelivery: number,
  observacion: string,
  fechaPago: string,
  fechaEntrega: string,
  fechaPedido: string,
  isActive: boolean
}