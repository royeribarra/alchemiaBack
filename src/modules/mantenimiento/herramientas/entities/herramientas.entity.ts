import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IHerramienta } from '../../../../../src/interfaces/herramienta.interface';

@Entity({name:'herramientas'})
export class HerramientasEntity extends BaseEntity implements IHerramienta
{
  @Column({default: 2})
  tipoProducto: number;

  @Column({ unique: true })
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  precioUnitario: number;

  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  precioDescuento: number;

  @Column({ nullable: true })
  imagen: string;

  @Column({ default: 0 })
  stock: number;

  @Column({default: 1})
  isActive: boolean;
}