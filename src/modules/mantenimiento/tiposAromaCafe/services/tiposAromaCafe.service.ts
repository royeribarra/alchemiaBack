import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiposAromaCafeEntity } from '../entities/tiposAromaCafe.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TipoAromaCafeDTO, TipoAromaCafeUpdatedDTO } from '../dto/tipoAromaCafe.dto';
import { ErrorManager } from '../../../../utils/error.manager';

@Injectable()
export class TiposAromaCafeService{
  constructor(
    @InjectRepository(TiposAromaCafeEntity) private readonly aromaRepository: Repository<TiposAromaCafeEntity>
  ){}

  public async createTipoVariedad(body: TipoAromaCafeDTO): Promise<TiposAromaCafeEntity>
  {
    try {
      const user : TiposAromaCafeEntity = await this.aromaRepository.save(body);
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findTiposVariedad(): Promise<TiposAromaCafeEntity[]>
  {
    try {
      const users : TiposAromaCafeEntity[] = await this.aromaRepository.find();
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

  public async findTipoVariedadById(id: string): Promise<TiposAromaCafeEntity>
  {
    try {
      const user : TiposAromaCafeEntity =  await this.aromaRepository
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

  public async updateTipoVariedad(body: TipoAromaCafeUpdatedDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const user: UpdateResult = await this.aromaRepository.update(id, body);
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
      const user: DeleteResult = await this.aromaRepository.delete(id);
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