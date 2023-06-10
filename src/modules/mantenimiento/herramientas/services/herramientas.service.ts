import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { HerramientaDTO, HerramientaUpdateDTO } from '../dto/herramienta.dto';
import { ErrorManager } from '../../../../utils/error.manager';
import { HerramientasEntity } from '../entities/herramientas.entity';

@Injectable()
export class HerramientasService{
  constructor(
    @InjectRepository(HerramientasEntity) private readonly herramientasRespository: Repository<HerramientasEntity>
  ){}

  public async createHerramienta(body: HerramientaDTO): Promise<HerramientasEntity>
  {
    try {
      const user : HerramientasEntity = await this.herramientasRespository.save(body);
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findHerramientas(): Promise<HerramientasEntity[]>
  {
    try {
      const users : HerramientasEntity[] = await this.herramientasRespository.find();
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

  public async findHerramientaById(id: string): Promise<HerramientasEntity>
  {
    try {
      const user : HerramientasEntity =  await this.herramientasRespository
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

  public async updateHerramienta(body: HerramientaUpdateDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const user: UpdateResult = await this.herramientasRespository.update(id, body);
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

  public async deleteHerramienta(id: string): Promise<DeleteResult> | undefined
  {
    try {
      const user: DeleteResult = await this.herramientasRespository.delete(id);
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