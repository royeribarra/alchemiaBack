import { ITipoAcides } from 'src/interfaces/tipoAcidesCafe.interface';
import { BaseEntity } from '../../../../config/base.entity';
import { Entity, Column } from 'typeorm';

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
}