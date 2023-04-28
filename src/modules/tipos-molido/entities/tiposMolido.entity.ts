import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { ROLES } from '../../../constants/roles';
import { ITipoMolido } from '../../../interfaces/tipoMolido.interface';

@Entity({name:'tiposMolido'})
export class TiposMolidoEntity extends BaseEntity implements ITipoMolido{

  @Column()
  name: string;

  @Column()
  value: number;

  @Column({ default: true})
  isActive: boolean;

  @Column({type: 'enum', enum: ROLES})
  role: ROLES;
}