import { IHerramienta } from "./herramienta.interface";
import { IMaterial } from "./material.interface";

export interface IPedido{
  herramientas?: IHerramienta[],
  materiales?: IMaterial[],
  totalProductos: number,
  total: number,
  costoDelivery: number,
  observacion: string,
  fechaPago?: string,
  fechaEntrega: string,
  fechaPedido?: string,
  isActive?: boolean
}