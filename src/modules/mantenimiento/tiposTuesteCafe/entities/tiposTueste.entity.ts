import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { ITipoTueste } from '../../../../interfaces/tipoTuesteCafe.interface';

@Entity({name:'tiposTuesteCafe'})
export class TiposTuesteEntity extends BaseEntity implements ITipoTueste{

  @Column()
  nombre: string;

  @Column()
  valor: number;

  @Column({ default: true})
  isActive: boolean;

  @Column({ default: true})
  orden: number;
}