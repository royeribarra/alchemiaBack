import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { IProducto } from '../../../../interfaces/producto.interface';
import { ProductosTiposRarezaCafeEntity } from './productosTiposRarezaCafe.entity';

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

  @Column({ nullable: true })
  imagen: string;

  @Column({ nullable: true })
  stock: number;

  @Column({default: 1})
  isActive: boolean;

  @OneToMany(() => ProductosTiposRarezaCafeEntity, rareza => rareza.producto)
  @JoinTable()
  rarezas: ProductosTiposRarezaCafeEntity[];
}