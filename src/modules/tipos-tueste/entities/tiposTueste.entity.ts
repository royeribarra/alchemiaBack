import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { ROLES } from '../../../constants/roles';
import { ITipoTueste } from '../../../interfaces/tipoTueste.interface';

@Entity({name:'tiposTueste'})
export class TiposTuesteEntity extends BaseEntity implements ITipoTueste{

  @Column()
  name: string;

  @Column()
  value: number;

  @Column({ default: true})
  isActive: boolean;

  @Column({type: 'enum', enum: ROLES})
  role: ROLES;
}