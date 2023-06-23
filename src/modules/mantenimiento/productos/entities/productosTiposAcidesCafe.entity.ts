import { Entity, ManyToOne } from 'typeorm';
import { ProductosEntity } from './productos.entity';
import { BaseEntity } from '../../../../config/base.entity';
import { TiposAcidesCafeEntity } from '../../tiposAcidesCafe/entities/tiposAcidesCafe.entity';

@Entity({ name: 'productos_tipos_acides_cafe' })
export class ProductosTiposAcidesCafeEntity extends BaseEntity {

  @ManyToOne(()=> ProductosEntity, (producto)=> producto.acideces)
  producto: ProductosEntity;

  @ManyToOne(() => TiposAcidesCafeEntity, (acidez)=> acidez.productos)
  acidez: TiposAcidesCafeEntity;
}