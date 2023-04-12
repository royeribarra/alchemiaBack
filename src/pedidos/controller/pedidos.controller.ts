import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { PedidosService } from '../services/pedidos.service';
import { PedidoDTO, PedidoUpdatedDTO } from '../dto/pedido.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidoService: PedidosService) {}

  @Post('register')
  public async registerUser(@Body() body:PedidoDTO){
    return await this.pedidoService.createPedido(body);
  }

  @Get('all')
  public async findAllUsers()
  {
    return await this.pedidoService.findPedidos();
  }

  @Get(':id')
  public async findUserById(@Param('id') id: string){
    return await this.pedidoService.findPedidoById(id);
  }

  @Put('edit/:id')
  public async updateUser(@Body() body: PedidoUpdatedDTO, @Param('id') id:string){
    return await this.pedidoService.updatePedido(body, id);
  }

  @Delete(':id')
  public async deleteUser(@Param('id') id:string){
    return await this.pedidoService.deletePedido(id);
  }

  @Get('all/cats')
  @HttpCode(204)
  findAll(): string {
    return 'This action returns all cats';
  }

  
}
