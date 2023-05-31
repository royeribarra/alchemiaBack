import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosController } from './controller/pedidos.controller';
import { PedidosEntity } from './entities/pedidos.entity';
import { PedidosService } from './services/pedidos.service';
import { ClientesService } from '../clientes/services/cliente.service';
import { ClientesEntity } from '../clientes/entities/clientes.entity';
import { DetallesPedidoService } from '../detalles-pedido/services/detallesPedido.service';
import { DetallesPedidoEntity } from '../detalles-pedido/entities/detallesPedido.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([PedidosEntity, ClientesEntity, DetallesPedidoEntity]),
        
    ],
    providers: [
        PedidosService,
        ClientesService,
        DetallesPedidoService
    ],
    controllers:[
        PedidosController
    ]
})

export class PedidosModule {}
