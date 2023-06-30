import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ITipoAroma } from 'src/interfaces/tipoAromaCafe.interface';
import { ProductosTiposAromaCafeEntity } from '../../productos/entities/productosTiposAromaCafe.entity';

@Entity({name:'tiposAromaCafe'})
export class TiposAromaCafeEntity extends BaseEntity implements ITipoAroma
{
  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  valor: number;

  @Column({ default: true})
  isActive: boolean;

  @OneToMany(() => ProductosTiposAromaCafeEntity, producto => producto.aroma)
  productos: ProductosTiposAromaCafeEntity[];
}