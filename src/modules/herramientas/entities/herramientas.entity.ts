import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IHerramienta } from '../../../../src/interfaces/herramienta.interface';

@Entity({name:'herramientas'})
export class HerramientasEntity extends BaseEntity implements IHerramienta{

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  precio: number;

  @Column()
  imagen: string;

  @Column()
  stock: number;

  @Column()
  isActive: boolean;
}