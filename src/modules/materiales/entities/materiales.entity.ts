import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IMaterial } from '../../../interfaces/material.interface';

@Entity({name:'materiales'})
export class MaterialesEntity extends BaseEntity implements IMaterial{

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  precio: number;

  @Column()
  imagen: string;
  
  @Column()
  variedad: string;

  @Column({default: 1})
  isActive: boolean;
}