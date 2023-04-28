import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiposCafeEntity } from '../entities/tiposCafe.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TipoCafeDTO, TipoCafeUpdatedDTO } from '../dto/tipoCafe.dto';
import { ErrorManager } from '../../../utils/error.manager';

@Injectable()
export class TiposCafeService{
  constructor(
    @InjectRepository(TiposCafeEntity) private readonly molidoRepository: Repository<TiposCafeEntity>
  ){}

  public async createTipoVariedad(body: TipoCafeDTO): Promise<TiposCafeEntity>
  {
    try {
      const user : TiposCafeEntity = await this.molidoRepository.save(body);
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findTiposVariedad(): Promise<TiposCafeEntity[]>
  {
    try {
      const users : TiposCafeEntity[] = await this.molidoRepository.find();
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

  public async findTipoVariedadById(id: string): Promise<TiposCafeEntity>
  {
    try {
      const user : TiposCafeEntity =  await this.molidoRepository
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

  public async updateTipoVariedad(body: TipoCafeUpdatedDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const user: UpdateResult = await this.molidoRepository.update(id, body);
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
      const user: DeleteResult = await this.molidoRepository.delete(id);
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