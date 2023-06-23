import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiposCuerpoCafeEntity } from '../entities/tiposCuerpoCafe.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TipoCuerpoCafeDTO, TipoCuerpoCafeUpdatedDTO } from '../dto/tipoCuerpoCafe.dto';
import { ErrorManager } from '../../../../utils/error.manager';

@Injectable()
export class TiposCuerpoCafeService{
  constructor(
    @InjectRepository(TiposCuerpoCafeEntity) private readonly cuerpoRepository: Repository<TiposCuerpoCafeEntity>
  ){}

  public async createTipoVariedad(body: TipoCuerpoCafeDTO): Promise<TiposCuerpoCafeEntity>
  {
    try {
      const user : TiposCuerpoCafeEntity = await this.cuerpoRepository.save(body);
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findTiposVariedad(): Promise<TiposCuerpoCafeEntity[]>
  {
    try {
      const users : TiposCuerpoCafeEntity[] = await this.cuerpoRepository.find();
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

  public async findTipoVariedadById(id: string): Promise<TiposCuerpoCafeEntity>
  {
    try {
      const user : TiposCuerpoCafeEntity =  await this.cuerpoRepository
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

  public async updateTipoVariedad(body: TipoCuerpoCafeUpdatedDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const user: UpdateResult = await this.cuerpoRepository.update(id, body);
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
      const user: DeleteResult = await this.cuerpoRepository.delete(id);
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