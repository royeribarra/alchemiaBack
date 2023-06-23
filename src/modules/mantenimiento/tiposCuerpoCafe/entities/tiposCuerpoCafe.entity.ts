import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { ITipoCuerpo } from 'src/interfaces/tipoCuerpoCafe.interface';

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
}