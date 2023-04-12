import { BaseEntity } from '../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IPedido } from '../../interfaces/pedido.interface';
import { UsersPedidosEntity } from '../../../src/users/entities/usersPedidos.entity';

@Entity({name:'pedidos'})
export class PedidosEntity extends BaseEntity implements IPedido{

  @Column()
  clienteId: number;

  @Column()
  totalProductos: number;

  @Column()
  total: number;

  @Column()
  costoDelivery: number;
  
  @Column()
  observacion: string;
  
  @Column()
  fechaPago: string;
  
  @Column()
  fechaEntrega: string;
  
  @Column()
  fechaPedido: string;
  
  @Column()
  isActive: boolean;

  @OneToMany(()=> UsersPedidosEntity, (usersPedido)=> usersPedido.pedido)
  usersIncludes: UsersPedidosEntity[];
}