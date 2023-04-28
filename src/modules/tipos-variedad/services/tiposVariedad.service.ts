import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiposVariedadEntity } from '../entities/tiposVariedad.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TipoVariedadDTO, TipoVariedaUpdatedDTO } from '../dto/tipoVariedad.dto';
import { ErrorManager } from '../../../utils/error.manager';

@Injectable()
export class TiposVariedadService{
  constructor(
    @InjectRepository(TiposVariedadEntity) private readonly variedadRepository: Repository<TiposVariedadEntity>
  ){}

  public async createTipoVariedad(body: TipoVariedadDTO): Promise<TiposVariedadEntity>
  {
    try {
      const user : TiposVariedadEntity = await this.variedadRepository.save(body);
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findTiposVariedad(): Promise<TiposVariedadEntity[]>
  {
    try {
      const users : TiposVariedadEntity[] = await this.variedadRepository.find();
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

  public async findTipoVariedadById(id: string): Promise<TiposVariedadEntity>
  {
    try {
      const user : TiposVariedadEntity =  await this.variedadRepository
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

  public async updateTipoVariedad(body: TipoVariedaUpdatedDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const user: UpdateResult = await this.variedadRepository.update(id, body);
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
      const user: DeleteResult = await this.variedadRepository.delete(id);
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