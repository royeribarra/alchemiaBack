import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { IDetallePedido } from '../../../../interfaces/detallePedido.interface';

@Entity({name:'detallespedido'})
export class DetallesPedidoEntity extends BaseEntity implements IDetallePedido{

  @Column()
  pedidoId: number;

  @Column()
  productoId: number;

  @Column()
  nombreProducto: string;

  @Column()
  tipoProducto: number;
  
  @Column()
  cantidad: number;
  
  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  precioUnitario: number;
  
  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  total: number;
  
  @Column({default: 1})
  isActive: boolean;
}