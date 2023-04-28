import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { ROLES } from '../../../constants/roles';
import { IDetallePedido } from '../../../interfaces/detallePedido.interface';

@Entity({name:'detalles-pedido'})
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
  
  @Column()
  precioUnitario: number;
  
  @Column()
  total: number;
  
  @Column()
  isActive: boolean;

  @Column({type: 'enum', enum: ROLES})
  role: ROLES;
}