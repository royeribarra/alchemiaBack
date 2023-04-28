import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IMaterial } from '../../../interfaces/material.interface';

@Entity({name:'materiales'})
export class MaterialesEntity extends BaseEntity implements IMaterial{

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  precio: number;

  @Column()
  imagen: string;
  
  @Column()
  variedad: string;
}