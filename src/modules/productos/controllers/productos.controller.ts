import { Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { ProductosService } from '../services/productos.service';
import { ProductoDTO, ProductoUpdateDTO } from '../dto/producto.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post('register')
  public async registerProducto(@Body() body:ProductoDTO){
    return await this.productosService.createProducto(body);
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

  @Put('edit/:id')
  public async updateProducto(@Body() body: ProductoUpdateDTO, @Param('id') id:string){
    return await this.productosService.updateProducto(body, id);
  }

  @Delete(':id')
  public async deleteProducto(@Param('id') id:string){
    return await this.productosService.deleteProducto(id);
  }

}
