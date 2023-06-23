import { Entity, ManyToOne } from 'typeorm';
import { ProductosEntity } from './productos.entity';
import { BaseEntity } from '../../../../config/base.entity';
import { TiposCuerpoCafeEntity } from '../../tiposCuerpoCafe/entities/tiposCuerpoCafe.entity';

@Entity({ name: 'productos_tipos_cuerpo_cafe' })
export class ProductosTiposCuerpoCafeEntity extends BaseEntity {

  @ManyToOne(()=> ProductosEntity, (producto)=> producto.cuerpos)
  producto: ProductosEntity;

  @ManyToOne(() => TiposCuerpoCafeEntity, (cuerpo)=> cuerpo.productos)
  cuerpo: TiposCuerpoCafeEntity;
}