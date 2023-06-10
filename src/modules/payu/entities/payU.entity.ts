import { PedidosEntity } from '../../ventas/pedidos/entities/pedidos.entity';
import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity({name:'payutransactions'})
export class PayUTransactionEntity extends BaseEntity{

  @Column()
  tipo: number;

  @Column()
  responseCode: string;

  @Column()
  state: string;

  @Column({ nullable: true })
  orderId: string;
  
  @Column({ nullable: true })
  transactionId: string;
  
  @Column({ nullable: true })
  authorizationCode: string;
  
  @Column({ nullable: true })
  paymentNetworkResponseErrorMessage: string;

  @OneToOne(() => PedidosEntity, (pedido) => pedido.transaction)
  pedido: PedidosEntity
}