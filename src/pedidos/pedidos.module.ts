import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosController } from './controller/pedidos.controller';
import { PedidoEntity } from './entities/pedidos.entity';
import { PedidosService } from './services/pedidos.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([PedidoEntity])
    ],
    providers: [
        PedidosService
    ],
    controllers:[
        PedidosController
    ]
})

export class PedidosModule {}
