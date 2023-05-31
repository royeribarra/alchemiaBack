import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IProducto } from '../../../interfaces/producto.interface';

@Entity({name:'productos'})
export class ProductosEntity extends BaseEntity implements IProducto{

  @Column()
  name: string;

  @Column()
  tipoProducto: number;

  @Column()
  tipoMolido: number;

  @Column()
  tipoTueste: number;

  @Column()
  tipoVariedad: number;

  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  precioUnitario: number;

  @Column()
  imagen: string;

  @Column()
  stock: number;

  @Column()
  isActive: boolean;
}