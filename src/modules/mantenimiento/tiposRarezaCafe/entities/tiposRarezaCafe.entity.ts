import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { ITipoVariedad } from '../../../../interfaces/tipoRarezaCafe.interface';
import { ProductosEntity } from '../../productos/entities/productos.entity';

@Entity({name:'tiposRarezaCafe'})
export class TiposRarezaCafeEntity extends BaseEntity implements ITipoVariedad{

  @Column()
  nombre: string;

  @Column()
  valor: number;

  @Column({ default: true})
  isActive: boolean;

  @ManyToMany(() => ProductosEntity, producto => producto.rarezas)
  productos: ProductosEntity[];
}