import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ITipoCuerpo } from 'src/interfaces/tipoCuerpoCafe.interface';
import { ProductosTiposCuerpoCafeEntity } from '../../productos/entities/productosTiposCuerpoCafe.entity';

@Entity({name:'tiposCuerpoCafe'})
export class TiposCuerpoCafeEntity extends BaseEntity implements ITipoCuerpo
{
  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  valor: number;

  @Column({ default: true})
  isActive: boolean;

  @OneToMany(() => ProductosTiposCuerpoCafeEntity, producto => producto.cuerpo)
  productos: ProductosTiposCuerpoCafeEntity[];
}