import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PayUTransactionEntity } from '../entities/payU.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PayUDTO, PayUUpdatedDTO } from '../dto/payU.dto';
import { ErrorManager } from '../../../utils/error.manager';
import { PayUTransactionDTO } from '../dto/payUTransaction.dto';

@Injectable()
export class PayUService{
  constructor(
    @InjectRepository(PayUTransactionEntity) private readonly pedidoRepository: Repository<PayUTransactionEntity>
  ){}

  public async createTransaction(PayTransactionUDTO : PayUTransactionDTO): Promise<PayUTransactionEntity>
  {
    try {
      const pedido : PayUTransactionEntity = await this.pedidoRepository.save(PayTransactionUDTO);
      return pedido;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findPedidos(): Promise<PayUTransactionEntity[]>
  {
    try {
      const pedidos : PayUTransactionEntity[] = await this.pedidoRepository.find();
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

  public async findPedidoById(id: string): Promise<PayUTransactionEntity>
  {
    try {
      const pedido : PayUTransactionEntity =  await this.pedidoRepository
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
      
      return ;
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