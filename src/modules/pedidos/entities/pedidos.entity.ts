import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IPedido } from '../../../interfaces/pedido.interface';
import { UsersPedidosEntity } from '../../users/entities/usersPedidos.entity';


@Entity({name:'pedidos'})
export class PedidosEntity extends BaseEntity implements IPedido{

  @Column()
  clienteId: string;

  @Column({type: 'decimal', precision: 10, default: 0.00})
  totalProductos: number;

  @Column({type: 'decimal', precision: 10, default: 0.00})
  costoDelivery: number;

  @Column({type: 'decimal', precision: 10, default: 0.00})
  total: number;

  @Column()
  observacion: string;
  
  @Column()
  fechaPago: string;
  
  @Column()
  fechaEntrega: string;
  
  @Column()
  fechaPedido: string;
  
  @Column({default: 1})
  isActive: boolean;

  @OneToMany(()=> UsersPedidosEntity, (usersPedido)=> usersPedido.pedido)
  usersIncludes: UsersPedidosEntity[];
}