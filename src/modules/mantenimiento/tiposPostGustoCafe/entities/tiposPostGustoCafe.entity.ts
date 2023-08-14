import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ITipoPostGusto } from '../../../../interfaces/tipoPostGustoCafe.interface';
import { ProductosTiposPostGustoCafeEntity } from '../../productos/entities/productosTiposPostGustoCafe.entity';

@Entity({name:'tiposPostGustoCafe'})
export class TiposPostGustoCafeEntity extends BaseEntity implements ITipoPostGusto
{
  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  valor: number;

  @Column({ default: true})
  isActive: boolean;

  @OneToMany(() => ProductosTiposPostGustoCafeEntity, producto => producto.gusto)
  productos: ProductosTiposPostGustoCafeEntity[];
}