import { Entity, ManyToOne } from 'typeorm';
import { ProductosEntity } from './productos.entity';
import { BaseEntity } from '../../../../config/base.entity';
import { TiposNotaCafeEntity } from '../../tiposNotaCafe/entities/tiposNotaCafe.entity';

@Entity({ name: 'productos_tipos_nota_cafe' })
export class ProductosTiposNotaCafeEntity extends BaseEntity {

  // @ManyToOne(()=> ProductosEntity, (producto)=> producto.notas)
  // producto: ProductosEntity;

  @ManyToOne(() => TiposNotaCafeEntity, (nota)=> nota.productos)
  nota: TiposNotaCafeEntity;
}