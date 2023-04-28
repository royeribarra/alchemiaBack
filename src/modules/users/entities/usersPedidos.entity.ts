import { Column, ManyToOne, Entity } from 'typeorm';
import { BaseEntity } from '../../../config/base.entity';
import { ACCESS_LEVEL } from '../../../constants/roles';
import { UsersEntity } from './users.entity';
import { PedidosEntity } from '../../pedidos/entities/pedidos.entity';

@Entity({ name: 'users_pedidos' })
export class UsersPedidosEntity extends BaseEntity{
  
  @Column({type: 'enum', enum: ACCESS_LEVEL})
  accessLevel: ACCESS_LEVEL;

  @ManyToOne(()=> UsersEntity, (user)=> user.projectsIncludes)
  user: UsersEntity;

  @ManyToOne(()=> PedidosEntity, (pedido)=> pedido.usersIncludes)
  pedido: PedidosEntity;
}