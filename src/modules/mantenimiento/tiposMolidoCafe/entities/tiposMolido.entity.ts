import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { ITipoMolido } from '../../../../interfaces/tipoMolidoCafe.interface';

@Entity({name:'tiposMolidoCafe'})
export class TiposMolidoEntity extends BaseEntity implements ITipoMolido{

  @Column()
  nombre: string;

  @Column()
  valor: number;

  @Column({ default: true})
  isActive: boolean;
}