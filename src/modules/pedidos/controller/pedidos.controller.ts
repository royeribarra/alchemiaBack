import { Body, Controller, Get, HttpCode, Param, Post, Put, Res} from '@nestjs/common';
import { PedidosService } from '../services/pedidos.service';
import { PedidoDTO, PedidoUpdatedDTO } from '../dto/pedido.dto';
import { Delete } from '@nestjs/common/decorators';
import { ClientesService } from '../../clientes/services/cliente.service';
import { ClienteDTO } from '../../clientes/dto/cliente.dto';
import { Response } from 'express';
import { IPedido } from 'src/interfaces/pedido.interface';
import { ICliente } from 'src/interfaces/cliente.interface';

@Controller('pedidos')
export class PedidosController {
  constructor(
    private readonly pedidoService: PedidosService,
    private readonly clienteService: ClientesService
  ) {}

  @Post('register')
  public async registerPedido(@Body() body : IPedido, @Res() res: Response){
    try {
      const bodyCliente : ICliente = body.cliente;
      const bodyPedido : IPedido = body;

      const cliente = await this.clienteService.createCliente(bodyCliente);

      bodyPedido.clienteId = cliente.id;

      const pedido = await this.pedidoService.createPedido(bodyPedido);

      const response = {
        status: 200,
        message: 'Pedido creado exitosamente',
        data: body
      };
      res.json(response);

    } catch (error) {
      const response = {
        status: 500,
        message: 'No se pudo crear el pedido',
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
