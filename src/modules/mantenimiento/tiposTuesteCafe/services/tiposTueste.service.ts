import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiposTuesteEntity } from '../entities/tiposTueste.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TipoTuesteDTO, TipoTuesteUpdatedDTO } from '../dto/tipoTueste.dto';
import { ErrorManager } from '../../../../utils/error.manager';

@Injectable()
export class TiposTuesteService{
  constructor(
    @InjectRepository(TiposTuesteEntity) private readonly tuesteRepository: Repository<TiposTuesteEntity>
  ){}

  public async createTipoVariedad(body: TipoTuesteDTO): Promise<TiposTuesteEntity>
  {
    try {
      const user : TiposTuesteEntity = await this.tuesteRepository.save(body);
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findTiposVariedad(): Promise<TiposTuesteEntity[]>
  {
    try {
      const users : TiposTuesteEntity[] = await this.tuesteRepository.find();
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

  public async findTipoVariedadById(id: string): Promise<TiposTuesteEntity>
  {
    try {
      const user : TiposTuesteEntity =  await this.tuesteRepository
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

  public async updateTipoVariedad(body: TipoTuesteUpdatedDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const user: UpdateResult = await this.tuesteRepository.update(id, body);
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
      const user: DeleteResult = await this.tuesteRepository.delete(id);
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