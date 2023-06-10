import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MaterialesEntity } from '../entities/materiales.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { MaterialDTO, MaterialUpdatedDTO } from '../dto/material.dto';
import { ErrorManager } from '../../../../utils/error.manager';

@Injectable()
export class MaterialesService{
  constructor(
    @InjectRepository(MaterialesEntity) private readonly materialRepository: Repository<MaterialesEntity>
  ){}

  public async createMaterial(body: MaterialDTO): Promise<MaterialesEntity>
  {
    try {
      const material : MaterialesEntity = await this.materialRepository.save(body);
      return material;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findMateriales(): Promise<MaterialesEntity[]>
  {
    try {
      const materiales : MaterialesEntity[] = await this.materialRepository.find();
      if(materiales.length === 0)
      {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontró ningun material.'
        });
      }
      return materiales;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findMaterialById(id: string): Promise<MaterialesEntity>
  {
    try {
      const material : MaterialesEntity =  await this.materialRepository
        .createQueryBuilder('material')
        .where({id})
        .getOne();

        if(!material)
        {
          throw new ErrorManager({
            type: 'BAD_REQUEST',
            message: `No se encontró al material de Id = ${id}`
          });
        }

        return material;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateMaterial(body: MaterialUpdatedDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const material: UpdateResult = await this.materialRepository.update(id, body);
      if(material.affected === 0)
      {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo actualizar el material.'
        });
      }
      return material;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteMaterial(id: string): Promise<DeleteResult> | undefined
  {
    try {
      const material: DeleteResult = await this.materialRepository.delete(id);
      if(material.affected === 0)
      {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo eliminar el material, porque no existe.'
        });
      }
      return material;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}