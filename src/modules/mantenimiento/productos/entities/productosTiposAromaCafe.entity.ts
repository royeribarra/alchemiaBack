import { Entity, ManyToOne } from 'typeorm';
import { ProductosEntity } from './productos.entity';
import { BaseEntity } from '../../../../config/base.entity';
import { TiposAromaCafeEntity } from '../../tiposAromaCafe/entities/tiposAromaCafe.entity';

@Entity({ name: 'productos_tipos_aroma_cafe' })
export class ProductosTiposAromaCafeEntity extends BaseEntity {

  @ManyToOne(()=> ProductosEntity, (producto)=> producto.aromas)
  producto: ProductosEntity;

  @ManyToOne(() => TiposAromaCafeEntity, (aroma)=> aroma.productos)
  aroma: TiposAromaCafeEntity;
}