export interface IDetallePedido{
  pedidoId: number,
  productoId: number,
  nombreProducto: string,
  tipoProducto: number,
  cantidad: number,
  precioUnitario: number,
  total: number,
  isActive: boolean
}