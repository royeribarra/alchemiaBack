import { ITipoAcides } from 'src/interfaces/tipoAcidesCafe.interface';
import { BaseEntity } from '../../../../config/base.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { ProductosTiposAcidesCafeEntity } from '../../productos/entities/productosTiposAcidesCafe.entity';

@Entity({name:'tiposAcidesCafe'})
export class TiposAcidesCafeEntity extends BaseEntity implements ITipoAcides
{
  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ nullable: true })
  valor: number;

  @Column({ default: true})
  isActive: boolean;

  @OneToMany(() => ProductosTiposAcidesCafeEntity, producto => producto.acidez)
  productos: ProductosTiposAcidesCafeEntity[];
}