import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { IDistrito } from 'src/interfaces/distrito.interface';

@Entity({name:'distritos'})
export class DistritosEntity extends BaseEntity implements IDistrito{

  @Column()
  nombre: string;

  @Column()
  codigo: string;

  @Column()
  tarifa: number;
}