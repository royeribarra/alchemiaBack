import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { IProducto } from '../../../../interfaces/producto.interface';
import { TiposRarezaCafeEntity } from '../../tiposRarezaCafe/entities/tiposRarezaCafe.entity';

@Entity({name:'productos'})
export class ProductosEntity extends BaseEntity implements IProducto{

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  empaque: string;

  @Column()
  puntaje: number;

  @Column()
  origen: string;

  @Column()
  altura: string;

  @Column()
  variedad: string;

  @Column()
  proceso: string;

  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  precioUnitario: number;

  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00})
  precioDescuento: number;

  @Column()
  imagen: string;

  @Column()
  stock: number;

  @Column()
  isActive: boolean;

  @ManyToMany(() => TiposRarezaCafeEntity)
  @JoinTable()
  rarezas: TiposRarezaCafeEntity[];
}