import { Body, Controller, Get, HttpCode, Param, Post, Put, Res} from '@nestjs/common';
import { PedidosService } from '../services/pedidos.service';
import { PedidoDTO, PedidoUpdatedDTO } from '../dto/pedido.dto';
import { Delete } from '@nestjs/common/decorators';
import { ClientesService } from '../../clientes/services/cliente.service';
import { Response } from 'express';
import { ClienteDTO } from 'src/modules/clientes/dto/cliente.dto';
import { MaterialDTO } from 'src/modules/materiales/dto/material.dto';
import { HerramientaDTO } from 'src/modules/herramientas/dto/herramienta.dto';
import { DetallesPedidoService } from 'src/modules/detalles-pedido/services/detallesPedido.service';
import { DetallePedidoDTO } from 'src/modules/detalles-pedido/dto/detallePedido.dto';

@Controller('pedidos')
export class PedidosController {
  constructor(
    private readonly pedidoService: PedidosService,
    private readonly clienteService: ClientesService,
    private readonly detallePedidoService: DetallesPedidoService
  ) {}

  @Post('register')
  public async registerPedido(@Body() body : PedidoDTO, @Res() res: Response){
    try {
      const bodyCliente : ClienteDTO = body.cliente;
      const bodyPedido : PedidoDTO = body;
      const bodyMateriales : DetallePedidoDTO[] = body.materiales;
      const bodyHerramientas : DetallePedidoDTO[] = body.herramientas;

      const cliente = await this.clienteService.createCliente(bodyCliente);

      const pedido = await this.pedidoService.createPedido({...bodyPedido, clienteId: cliente.id});

      const detalleMaterial = await this.detallePedidoService.createDetallePedidoMateriales([...bodyMateriales.map((elemento) => (
        { ...elemento, pedidoId: pedido.id, total: elemento.cantidad * elemento.precioUnitario}
     ))]);
      const detalleHerramienta = await this.detallePedidoService.createDetallePedidoHerramientas([...bodyHerramientas.map((elemento) => (
        { ...elemento, pedidoId: pedido.id, total: elemento.cantidad * elemento.precioUnitario}
     ))]);

      const response = {
        status: 200,
        message: 'Pedido creado exitosamente',
        data: {
          pedido: pedido,
          detalleMaterial: detalleMaterial,
          detalleHerramienta: detalleHerramienta
        }
      };
      res.json(response);

    } catch (error) {
      const response = {
        status: 500,
        message: 'No se pudo crear el pedido',
        error: error.message
      };
      res.status(500).json(response);
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
