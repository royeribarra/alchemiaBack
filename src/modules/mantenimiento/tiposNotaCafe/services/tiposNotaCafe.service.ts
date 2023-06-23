import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiposNotaCafeEntity } from '../entities/tiposNotaCafe.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TipoNotaCafeDTO, TipoNotaCafeUpdatedDTO } from '../dto/tipoNotaCafe.dto';
import { ErrorManager } from '../../../../utils/error.manager';

@Injectable()
export class TiposNotaCafeService{
  constructor(
    @InjectRepository(TiposNotaCafeEntity) private readonly notaRepository: Repository<TiposNotaCafeEntity>
  ){}

  public async createTipoVariedad(body: TipoNotaCafeDTO): Promise<TiposNotaCafeEntity>
  {
    try {
      const user : TiposNotaCafeEntity = await this.notaRepository.save(body);
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findTiposVariedad(): Promise<TiposNotaCafeEntity[]>
  {
    try {
      const users : TiposNotaCafeEntity[] = await this.notaRepository.find();
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

  public async findTipoVariedadById(id: string): Promise<TiposNotaCafeEntity>
  {
    try {
      const user : TiposNotaCafeEntity =  await this.notaRepository
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

  public async updateTipoVariedad(body: TipoNotaCafeUpdatedDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const user: UpdateResult = await this.notaRepository.update(id, body);
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
      const user: DeleteResult = await this.notaRepository.delete(id);
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