import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { ErrorManager } from '../../utils/error.manager';

@Injectable()
export class UsersService{
  constructor(
    @InjectRepository(UsersEntity) private readonly userRespository: Repository<UsersEntity>
  ){}

  getHello(): string
  {
    return "hola";
  }

  public async createUser(body: UserDTO): Promise<UsersEntity>
  {
    try {
      const user : UsersEntity = await this.userRespository.save(body);
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findUsers(): Promise<UsersEntity[]>
  {
    try {
      const users : UsersEntity[] = await this.userRespository.find();
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

  public async findUserById(id: string): Promise<UsersEntity>
  {
    try {
      const user : UsersEntity =  await this.userRespository
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

  public async updateUser(body: UserUpdateDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const user: UpdateResult = await this.userRespository.update(id, body);
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

  public async deleteUser(id: string): Promise<DeleteResult> | undefined
  {
    try {
      const user: DeleteResult = await this.userRespository.delete(id);
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