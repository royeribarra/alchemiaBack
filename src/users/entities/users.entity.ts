import { IUser } from '../../interfaces/user.interface';
import { BaseEntity } from '../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ROLES } from '../../constants/roles';
import { UsersProjectsEntity } from './usersProjects.entity';
import { UsersPedidosEntity } from './usersPedidos.entity';

@Entity({name:'users'})
export class UsersEntity extends BaseEntity implements IUser{

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({unique: true})
  email: string;

  @Column({unique: true})
  username: string;

  @Column()
  password: string;

  @Column({type: 'enum', enum: ROLES})
  role: ROLES;

  @OneToMany(()=> UsersProjectsEntity, (usersProject)=> usersProject.user)
  projectsIncludes: UsersProjectsEntity[];

  @OneToMany(()=> UsersPedidosEntity, (usersPedido)=> usersPedido.user)
  pedidosIncludes: UsersPedidosEntity[];
}