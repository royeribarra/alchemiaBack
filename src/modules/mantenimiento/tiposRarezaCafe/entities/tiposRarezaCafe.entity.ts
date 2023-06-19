import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { ITipoVariedad } from '../../../../interfaces/tipoRarezaCafe.interface';
import { ProductosTiposRarezaCafeEntity } from '../../productos/entities/productosTiposRarezaCafe.entity';

@Entity({name:'tiposRarezaCafe'})
export class TiposRarezaCafeEntity extends BaseEntity implements ITipoVariedad{

  @Column()
  nombre: string;

  @Column()
  valor: number;

  @Column({ default: true})
  isActive: boolean;

  @OneToMany(() => ProductosTiposRarezaCafeEntity, producto => producto.rareza)
  productos: ProductosTiposRarezaCafeEntity[];
}