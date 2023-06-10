import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { IPedido } from '../../../../interfaces/pedido.interface';
import { UsersPedidosEntity } from '../../../mantenimiento/users/entities/usersPedidos.entity';
import { ClientesEntity } from '../../clientes/entities/clientes.entity';
import { PayUTransactionEntity } from '../../../payu/entities/payU.entity';


@Entity({name:'pedidos'})
export class PedidosEntity extends BaseEntity implements IPedido{

  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  totalProductos: number;

  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  costoDelivery: number;

  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  total: number;

  @Column()
  observacion: string;
  
  @Column({ nullable: true })
  fechaPago: string;
  
  @Column()
  fechaEntrega: string;
  
  @Column({ nullable: true })
  fechaPedido: string;
  
  @Column({default: 1})
  isActive: boolean;

  @OneToMany(()=> UsersPedidosEntity, (usersPedido)=> usersPedido.pedido)
  usersIncludes: UsersPedidosEntity[];

  @OneToOne(() => ClientesEntity, (cliente) => cliente.pedido)
  @JoinColumn()
  cliente: ClientesEntity

  @OneToOne(() => PayUTransactionEntity, (transaction) => transaction.pedido)
  @JoinColumn()
  transaction: PayUTransactionEntity
}