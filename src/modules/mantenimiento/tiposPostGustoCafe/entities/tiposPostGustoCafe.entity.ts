import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { ITipoPostGusto } from 'src/interfaces/tipoPostGustoCafe.interface';

@Entity({name:'tiposPostGustoCafe'})
export class TiposPostGustoCafeEntity extends BaseEntity implements ITipoPostGusto
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