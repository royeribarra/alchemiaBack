import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { ITipoMolido } from '../../../interfaces/tipoMolido.interface';

@Entity({name:'tiposMolido'})
export class TiposMolidoEntity extends BaseEntity implements ITipoMolido{

  @Column()
  name: string;

  @Column()
  value: number;

  @Column({ default: true})
  isActive: boolean;
}