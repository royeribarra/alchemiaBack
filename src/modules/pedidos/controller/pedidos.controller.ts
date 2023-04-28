import { Body, Controller, Get, HttpCode, Param, Post, Put, Res} from '@nestjs/common';
import { PedidosService } from '../services/pedidos.service';
import { PedidoDTO, PedidoUpdatedDTO } from '../dto/pedido.dto';
import { Delete } from '@nestjs/common/decorators';
import { ClientesService } from '../../clientes/services/cliente.service';
import { ClienteDTO } from '../../clientes/dto/cliente.dto';
import { Response } from 'express';

@Controller('pedidos')
export class PedidosController {
  constructor(
    private readonly pedidoService: PedidosService,
    private readonly clienteService: ClientesService
  ) {}

  @Post('register')
  public async registerPedido(@Body() body, @Res() res: Response){
    try {
      const cliente = await this.clienteService.createCliente(body.cliente);
      body.pedido.clienteId = cliente.id;
      const pedido = await this.pedidoService.createPedido(body.pedido);
      const response = {
        status: 200,
        message: 'Pedido creado exitosamente',
        data: pedido
      };
      res.json(response);
    } catch (error) {
      const response = {
        status: 400,
        message: 'No se pudo crear el usuario',
        error: error.message
      };
      res.status(400).json(response);
    }
    
    //return pedido;
  }

  @Get('all')
  public async findAllPedidos()
  {
    return await this.pedidoService.findPedidos();
  }

  @Get(':id')
  public async findPedidoById(@Param('id') id: string){
    return await this.pedidoService.findPedidoById(id);
  }

  @Put('edit/:id')
  public async updatePedido(@Body() body: PedidoUpdatedDTO, @Param('id') id:string){
    return await this.pedidoService.updatePedido(body, id);
  }

  @Delete(':id')
  public async deletePedido(@Param('id') id:string){
    return await this.pedidoService.deletePedido(id);
  }
}
