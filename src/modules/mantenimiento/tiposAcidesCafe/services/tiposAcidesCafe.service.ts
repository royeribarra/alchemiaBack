import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TiposAcidesCafeEntity } from '../entities/tiposAcidesCafe.entity';
import { TipoAcidesCafeDTO, TipoAcidesCafeUpdatedDTO } from '../dto/tipoAcidesCafe.dto';
import { ErrorManager } from '../../../../utils/error.manager';

@Injectable()
export class TiposAcidesCafeService{
  constructor(
    @InjectRepository(TiposAcidesCafeEntity) private readonly acidesRepository: Repository<TiposAcidesCafeEntity>
  ){}

  public async createTipoVariedad(body: TipoAcidesCafeDTO): Promise<TiposAcidesCafeEntity>
  {
    try {
      const user : TiposAcidesCafeEntity = await this.acidesRepository.save(body);
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findTiposVariedad(): Promise<TiposAcidesCafeEntity[]>
  {
    try {
      const users : TiposAcidesCafeEntity[] = await this.acidesRepository.find();
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

  public async findTipoVariedadById(id: string): Promise<TiposAcidesCafeEntity>
  {
    try {
      const user : TiposAcidesCafeEntity =  await this.acidesRepository
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

  public async updateTipoVariedad(body: TipoAcidesCafeUpdatedDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const user: UpdateResult = await this.acidesRepository.update(id, body);
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
      const user: DeleteResult = await this.acidesRepository.delete(id);
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