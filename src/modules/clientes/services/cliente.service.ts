import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientesEntity } from '../entities/clientes.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ClienteDTO, ClienteUpdateDTO } from '../dto/cliente.dto';
import { ErrorManager } from '../../../utils/error.manager';

@Injectable()
export class ClientesService{
  constructor(
    @InjectRepository(ClientesEntity) private readonly clienteRespository: Repository<ClientesEntity>
  ){}

  public async createCliente(body: ClienteDTO): Promise<ClientesEntity>
  {
    try {
      const cliente : ClientesEntity = await this.clienteRespository.save(body);
      return cliente;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findClientes(): Promise<ClientesEntity[]>
  {
    try {
      const clientes : ClientesEntity[] = await this.clienteRespository.find();
      if(clientes.length === 0)
      {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontró ningun usuario.'
        });
      }
      return clientes;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findClienteById(id: string): Promise<ClientesEntity>
  {
    try {
      const cliente : ClientesEntity =  await this.clienteRespository
        .createQueryBuilder('cliente')
        .where({id})
        .getOne();

        if(!cliente)
        {
          throw new ErrorManager({
            type: 'BAD_REQUEST',
            message: `No se encontró al usuario de Id = ${id}`
          });
        }

        return cliente;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateCliente(body: ClienteUpdateDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const cliente: UpdateResult = await this.clienteRespository.update(id, body);
      if(cliente.affected === 0)
      {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo actualizar el usuario.'
        });
      }
      return cliente;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteCliente(id: string): Promise<DeleteResult> | undefined
  {
    try {
      const user: DeleteResult = await this.clienteRespository.delete(id);
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