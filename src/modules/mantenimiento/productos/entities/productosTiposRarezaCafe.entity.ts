import { Column, Entity, ManyToOne } from 'typeorm';
import { ProductosEntity } from './productos.entity';
import { TiposRarezaCafeEntity } from '../../tiposRarezaCafe/entities/tiposRarezaCafe.entity';
import { BaseEntity } from '../../../../config/base.entity';

@Entity({ name: 'productos_rarezas_tipos_rareza_cafe' })
export class ProductosTiposRarezaCafeEntity extends BaseEntity {

  @ManyToOne(()=> ProductosEntity, (producto)=> producto.rarezas)
  producto: ProductosEntity;

  @ManyToOne(() => TiposRarezaCafeEntity, (rareza)=> rareza.productos)
  rareza: TiposRarezaCafeEntity;
}