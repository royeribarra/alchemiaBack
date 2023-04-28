import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { ITipoCafe } from '../../../interfaces/tipoCafe.interface';

@Entity({name:'tiposCafe'})
export class TiposCafeEntity extends BaseEntity implements ITipoCafe{

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  imagen: string;

  @Column({ default: true})
  isActive: boolean;
}