import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetallesPedidoEntity } from '../entities/detallesPedido.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { DetallePedidoDTO, DetallePedidoUpdatedDTO } from '../dto/detallePedido.dto';
import { ErrorManager } from '../../../utils/error.manager';
import { HerramientaDTO } from 'src/modules/herramientas/dto/herramienta.dto';
import { MaterialDTO } from 'src/modules/materiales/dto/material.dto';

@Injectable()
export class DetallesPedidoService{
  constructor(
    @InjectRepository(DetallesPedidoEntity) private readonly detallePedidoRepository: Repository<DetallesPedidoEntity>
  ){}

  public async createDetallePedidoHerramientas(body: DetallePedidoDTO[]): Promise<any>
  {
    try {
      //const detallePedido : DetallesPedidoEntity = await this.detallePedidoRepository.save(body);
      
      const promesas = body.map(async (dato) => {
        // Crea un registro utilizando el repositorio y retorna el resultado
        return this.detallePedidoRepository.save(dato);
      });
  
      // Espera a que se completen todas las promesas
      return Promise.all(promesas);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async createDetallePedidoMateriales(body: DetallePedidoDTO[]): Promise<any>
  {
    try {
      const promesas = body.map(async (dato) => {
        // Crea un registro utilizando el repositorio y retorna el resultado
        return this.detallePedidoRepository.save(dato);
      });
  
      // Espera a que se completen todas las promesas
      return Promise.all(promesas);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    } 
  }

  public async findPedidos(): Promise<DetallesPedidoEntity[]>
  {
    try {
      const pedidos : DetallesPedidoEntity[] = await this.detallePedidoRepository.find();
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

  public async findPedidoById(id: string): Promise<DetallesPedidoEntity>
  {
    try {
      const pedido : DetallesPedidoEntity =  await this.detallePedidoRepository
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

  public async updatePedido(body: DetallePedidoUpdatedDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const pedido: UpdateResult = await this.detallePedidoRepository.update(id, body);
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
      const pedido: DeleteResult = await this.detallePedidoRepository.delete(id);
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