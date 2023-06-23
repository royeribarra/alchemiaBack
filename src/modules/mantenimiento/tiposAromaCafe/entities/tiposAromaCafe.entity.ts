import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { ITipoAroma } from 'src/interfaces/tipoAromaCafe.interface';

@Entity({name:'tiposAromaCafe'})
export class TiposAromaCafeEntity extends BaseEntity implements ITipoAroma
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