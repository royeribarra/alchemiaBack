import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiposMolidoEntity } from '../entities/tiposMolido.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TipoMolidoDTO, TipoMolidoUpdatedDTO } from '../dto/tipoMolido.dto';
import { ErrorManager } from '../../../utils/error.manager';

@Injectable()
export class TiposMolidoService{
  constructor(
    @InjectRepository(TiposMolidoEntity) private readonly molidoRepository: Repository<TiposMolidoEntity>
  ){}

  public async createTipoVariedad(body: TipoMolidoDTO): Promise<TiposMolidoEntity>
  {
    try {
      const user : TiposMolidoEntity = await this.molidoRepository.save(body);
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findTiposVariedad(): Promise<TiposMolidoEntity[]>
  {
    try {
      const users : TiposMolidoEntity[] = await this.molidoRepository.find();
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

  public async findTipoVariedadById(id: string): Promise<TiposMolidoEntity>
  {
    try {
      const user : TiposMolidoEntity =  await this.molidoRepository
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

  public async updateTipoVariedad(body: TipoMolidoUpdatedDTO, id: string): Promise<UpdateResult> | undefined
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