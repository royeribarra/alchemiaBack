import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ITipoNota } from 'src/interfaces/tipoNotaCafe.interface';
import { ProductosTiposNotaCafeEntity } from '../../productos/entities/productosTiposNotaCafe.entity';

@Entity({name:'tiposNotaCafe'})
export class TiposNotaCafeEntity extends BaseEntity implements ITipoNota
{
  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  valor: number;

  @Column({ default: true})
  isActive: boolean;

  @OneToMany(() => ProductosTiposNotaCafeEntity, producto => producto.nota)
  productos: ProductosTiposNotaCafeEntity[];
}