import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ITipoVariedad } from '../../../interfaces/tipoVariedad.interface';

@Entity({name:'tiposVariedad'})
export class TiposVariedadEntity extends BaseEntity implements ITipoVariedad{

  @Column()
  name: string;

  @Column()
  value: number;

  @Column({ default: true})
  isActive: boolean;
}