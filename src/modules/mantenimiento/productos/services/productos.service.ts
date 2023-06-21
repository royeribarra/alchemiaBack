import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductoDTO, ProductoToRarezaDTO, ProductoUpdateDTO } from '../dto/producto.dto';
import { ErrorManager } from '../../../../utils/error.manager';
import { ProductosEntity } from '../entities/productos.entity';
import { ProductosTiposRarezaCafeEntity } from '../entities/productosTiposRarezaCafe.entity';

@Injectable()
export class ProductosService{
  constructor(
    @InjectRepository(ProductosEntity) private readonly productoRespository: Repository<ProductosEntity>,
    @InjectRepository(ProductosTiposRarezaCafeEntity) private readonly productoRarezaRespository: Repository<ProductosTiposRarezaCafeEntity>,
  ){}

  public async createProducto(producto: ProductoDTO): Promise<ProductosEntity>
  {
    try {
      const newProducto : ProductosEntity = await this.productoRespository.save(producto);
      return newProducto;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async addToRareza(body: ProductoToRarezaDTO)
  {
    try {
      const newProducto = await this.productoRarezaRespository.save(body);
      return newProducto;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findProductos(): Promise<ProductosEntity[]>
  {
    try {
      const users : ProductosEntity[] = await this.productoRespository.find();
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

  public async findProductoById(id: string): Promise<ProductosEntity>
  {
    try {
      const user : ProductosEntity =  await this.productoRespository
        .createQueryBuilder('productos')
        .where({id})
        .leftJoinAndSelect('productos.rarezas', 'rarezas')
        .leftJoinAndSelect('rarezas.rareza', 'rareza')
        .getOne();

        // if(!user)
        // {
        //   throw new ErrorManager({
        //     type: 'BAD_REQUEST',
        //     message: `No se encontró al usuario de Id = ${id}`
        //   });
        // }

        return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findProductoByRarezaId(rarezaId: string): Promise<ProductosEntity[]>
  {
    try {
      const productos : ProductosEntity[] =  await this.productoRespository
      .createQueryBuilder('productos')
      .leftJoin('productos.rarezas', 'tiposrarezacafe')
      .innerJoin('tiposrarezacafe.rareza', 'rarezas')
      .where('rarezas.id = :rarezaId', { rarezaId })
      .getMany();

      return productos;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findProductoByRarezaValue(rarezaValue: string): Promise<ProductosEntity[]>
  {
    try {
      const productos : ProductosEntity[] =  await this.productoRespository
      .createQueryBuilder('productos')
      .innerJoin('productos.rarezas', 'tiposrarezacafe')
      .innerJoin('tiposrarezacafe.rareza', 'rarezas')
      .where('rarezas.valor = :rarezaValue', { rarezaValue })
      .getMany();

      return productos;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateProducto(body: ProductoUpdateDTO, id: string): Promise<UpdateResult> | undefined
  {
    try {
      const user: UpdateResult = await this.productoRespository.update(id, body);
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

  public async deleteProducto(id: string): Promise<DeleteResult> | undefined
  {
    try {
      const user: DeleteResult = await this.productoRespository.delete(id);
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