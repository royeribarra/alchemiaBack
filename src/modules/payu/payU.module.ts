import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PayUTransactionEntity } from './entities/payU.entity';
import { PayUService } from './services/payU.service';
import { PayUController } from './controllers/payU.controller';
import { ClientesService } from "../ventas/clientes/services/cliente.service";
import { ClientesEntity } from "../ventas/clientes/entities/clientes.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([
            PayUTransactionEntity, 
            ClientesEntity
        ]),
    ],
    providers: [
        PayUService,
        ClientesService
    ],
    controllers:[
        PayUController
    ]
})

export class PayUModule {}