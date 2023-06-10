import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IHerramienta } from '../../../../../src/interfaces/herramienta.interface';

@Entity({name:'herramientas'})
export class HerramientasEntity extends BaseEntity implements IHerramienta{

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  precio: number;

  @Column()
  imagen: string;

  @Column()
  valor: number;

  @Column()
  stock: number;

  @Column({default: 1})
  isActive: boolean;
}