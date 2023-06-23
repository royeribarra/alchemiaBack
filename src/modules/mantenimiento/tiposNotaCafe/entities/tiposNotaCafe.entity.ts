import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { ITipoNota } from 'src/interfaces/tipoNotaCafe.interface';

@Entity({name:'tiposNotaCafe'})
export class TiposNotaCafeEntity extends BaseEntity implements ITipoNota
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