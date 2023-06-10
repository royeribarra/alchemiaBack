import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IProject } from '../../../interfaces/project.interface';

@Entity({name:'projects'})
export class ProjectsEntity extends BaseEntity implements IProject{

  @Column()
  name: string;

  @Column()
  description: string;
}