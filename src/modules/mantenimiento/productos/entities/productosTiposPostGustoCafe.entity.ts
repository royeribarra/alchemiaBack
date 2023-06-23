import { Entity, ManyToOne } from 'typeorm';
import { ProductosEntity } from './productos.entity';
import { BaseEntity } from '../../../../config/base.entity';
import { TiposPostGustoCafeEntity } from '../../tiposPostGustoCafe/entities/tiposPostGustoCafe.entity';

@Entity({ name: 'productos_tipos_postgusto_cafe' })
export class ProductosTiposPostGustoCafeEntity extends BaseEntity {

  @ManyToOne(()=> ProductosEntity, (producto)=> producto.gustos)
  producto: ProductosEntity;

  @ManyToOne(() => TiposPostGustoCafeEntity, (gusto)=> gusto.productos)
  gusto: TiposPostGustoCafeEntity;
}