import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidosEntity } from '../entities/pedidos.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PedidoDTO, PedidoUpdatedDTO } from '../dto/pedido.dto';
import { ErrorManager } from '../../utils/error.manager';

@Injectable()
export class PedidosService{
  constructor(
    @InjectRepository(PedidosEntity) private readonly pedidoRepository: Repository<PedidosEntity>
  ){}

  public async createPedido(body: PedidoDTO): Promise<PedidosEntity>
  {
    try {
      const pedido : PedidosEntity = await this.pedidoRepository.save(body);
      return pedido;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findPedidos(): Promise<PedidosEntity[]>
  {
    try {
      const pedidos : PedidosEntity[] = await this.pedidoRepository.find();
      if(pedidos.length === 0)
      {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontró ningun usuario.'
        });
      }
      return pedidos;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findPedidoById(id: string): Promise<PedidosEntity>
  {
    try {
      const pedido : PedidosEntity =  await this.pedidoRepository
        .createQueryBuilder('pedido')
        .where({id})
        .getOne();

        if(!pedido)
        {
          throw new ErrorManager({
            type: 'BAD_REQUEST',
            message: `No se encontró al usuario de Id = ${id}`
          });
        }

        return pedido;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updatePedido(body: PedidoUpdatedDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const pedido: UpdateResult = await this.pedidoRepository.update(id, body);
      if(pedido.affected === 0)
      {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo actualizar el usuario.'
        });
      }
      return pedido;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deletePedido(id: string): Promise<DeleteResult> | undefined
  {
    try {
      const pedido: DeleteResult = await this.pedidoRepository.delete(id);
      if(pedido.affected === 0)
      {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo eliminar el usuario, porque no existe.'
        });
      }
      return pedido;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}