import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ICliente } from '../../../interfaces/cliente.interface';

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

  @Column()
  referencia: string;

  @Column()
  distrito: string;

  @Column()
  telefono: string;
}