import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { ICliente } from '../../../interfaces/cliente.interface';
import { PedidosEntity } from '../../pedidos/entities/pedidos.entity';

@Entity({name:'clientes'})
export class ClientesEntity extends BaseEntity implements ICliente{

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  email: string;

  @Column()
  direccion: string;

  @Column({ nullable: true })
  referencia: string;

  @Column()
  distrito: string;

  @Column()
  telefono: string;

  @OneToOne(() => PedidosEntity, (pedido) => pedido.cliente)
  pedido: PedidosEntity
}