import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { DetallesPedidoService } from '../services/detallesPedido.service';
import { DetallePedidoDTO, DetallePedidoUpdatedDTO } from '../dto/detallePedido.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('detalles-pedido')
export class DetallesPedidoController {
  constructor(private readonly detallePedidoService: DetallesPedidoService) {}

  @Post('register')
  public async registerUser(@Body() body:DetallePedidoDTO[]){
    return await this.detallePedidoService.createDetallePedidoHerramientas(body);
  }

  @Get('all')
  public async findAllUsers()
  {
    return await this.detallePedidoService.findPedidos();
  }

  @Get(':id')
  public async findUserById(@Param('id') id: string){
    return await this.detallePedidoService.findPedidoById(id);
  }

  @Put('edit/:id')
  public async updateUser(@Body() body: DetallePedidoUpdatedDTO, @Param('id') id:string){
    return await this.detallePedidoService.updatePedido(body, id);
  }

  @Delete(':id')
  public async deleteUser(@Param('id') id:string){
    return await this.detallePedidoService.deletePedido(id);
  }

  @Get('all/cats')
  @HttpCode(204)
  findAll(): string {
    return 'This action returns all cats';
  }

  
}
