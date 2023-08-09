import { Body, Controller, Get, Param, Post, Put, Res} from '@nestjs/common';
import { ProductosService } from '../services/productos.service';
import { ProductoDTO, ProductoToRarezaDTO, ProductoUpdateDTO } from '../dto/producto.dto';
import { Delete } from '@nestjs/common/decorators';
import { Response } from 'express';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post('create')
  public async registerProducto(@Body() producto:ProductoDTO, @Res() response: Response){
    const newProducto = await this.productosService.createProducto(producto);
    if(newProducto){
      return response.json({
        message: 'Producto creado correctamente.',
        state: true
      });
    }

    return response.json({
      message: 'Error al crear producto.',
      state: false
    });
  }

  @Post('add-to-rareza')
  public async addToRareza(@Body() body:ProductoToRarezaDTO){
    return await this.productosService.addToRareza(body);
  }

  @Get('all')
  public async findAllProductos()
  {
    return await this.productosService.findProductos();
  }

  @Get(':id')
  public async findProductoById(@Param('id') id: string){
    return await this.productosService.findProductoById(id);
  }

  @Get('rareza/:rarezaId')
  public async findProductoByRarezaId(@Param('rarezaId') rarezaId: string){
    return await this.productosService.findProductoByRarezaId(rarezaId);
  }

  @Get('rarezaValue/:rarezaValue')
  public async findProductoByRarezaValue(@Param('rarezaValue') rarezaValue: string){
    return await this.productosService.findProductoByRarezaValue(rarezaValue);
  }

  @Put('edit/:id')
  public async updateProducto(@Body() body: ProductoUpdateDTO, @Param('id') id:string){
    return await this.productosService.updateProducto(body, id);
  }

  @Delete(':id')
  public async deleteProducto(@Param('id') id:string){
    return await this.productosService.deleteProducto(id);
  }

}
