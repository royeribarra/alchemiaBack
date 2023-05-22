import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PayUEntity } from '../entities/payU.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PayUDTO, PayUUpdatedDTO } from '../dto/payU.dto';
import { ErrorManager } from '../../../utils/error.manager';

@Injectable()
export class PayUService{
  constructor(
    @InjectRepository(PayUEntity) private readonly pedidoRepository: Repository<PayUEntity>
  ){}

  public async createPedido(PayUDTO): Promise<PayUEntity>
  {
    try {
      const pedido : PayUEntity = await this.pedidoRepository.save(PayUDTO);
      return pedido;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findPedidos(): Promise<PayUEntity[]>
  {
    try {
      const pedidos : PayUEntity[] = await this.pedidoRepository.find();
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

  public async findPedidoById(id: string): Promise<PayUEntity>
  {
    try {
      const pedido : PayUEntity =  await this.pedidoRepository
        .createQueryBuilder('pedido')
        .where({id})
        .getOne();

        if(!pedido)
        {
          throw new ErrorManager({
            type: 'BAD_REQUEST',
            message: `No se encontró el pedido de Id = ${id}`
          });
        }

        return pedido;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updatePedido(body: PayUDTO, id: string): Promise<UpdateResult> | undefined
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