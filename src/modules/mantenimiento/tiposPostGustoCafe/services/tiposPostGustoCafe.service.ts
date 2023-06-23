import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiposPostGustoCafeEntity } from '../entities/tiposPostGustoCafe.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TipoPostGustoCafeDTO, TipoPostGustoCafeUpdatedDTO } from '../dto/tipoPostGustoCafe.dto';
import { ErrorManager } from '../../../../utils/error.manager';

@Injectable()
export class TiposPostGustoCafeService{
  constructor(
    @InjectRepository(TiposPostGustoCafeEntity) private readonly gustoRepository: Repository<TiposPostGustoCafeEntity>
  ){}

  public async createTipoVariedad(body: TipoPostGustoCafeDTO): Promise<TiposPostGustoCafeEntity>
  {
    try {
      const user : TiposPostGustoCafeEntity = await this.gustoRepository.save(body);
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findTiposVariedad(): Promise<TiposPostGustoCafeEntity[]>
  {
    try {
      const users : TiposPostGustoCafeEntity[] = await this.gustoRepository.find();
      if(users.length === 0)
      {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontró ningun usuario.'
        });
      }
      return users;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findTipoVariedadById(id: string): Promise<TiposPostGustoCafeEntity>
  {
    try {
      const user : TiposPostGustoCafeEntity =  await this.gustoRepository
        .createQueryBuilder('user')
        .where({id})
        .getOne();

        if(!user)
        {
          throw new ErrorManager({
            type: 'BAD_REQUEST',
            message: `No se encontró al usuario de Id = ${id}`
          });
        }

        return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateTipoVariedad(body: TipoPostGustoCafeUpdatedDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const user: UpdateResult = await this.gustoRepository.update(id, body);
      if(user.affected === 0)
      {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo actualizar el usuario.'
        });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteTipoVariedad(id: string): Promise<DeleteResult> | undefined
  {
    try {
      const user: DeleteResult = await this.gustoRepository.delete(id);
      if(user.affected === 0)
      {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo eliminar el usuario, porque no existe.'
        });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}