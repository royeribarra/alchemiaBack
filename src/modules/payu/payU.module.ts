import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PayUEntity } from './entities/payU.entity';
import { PayUService } from './services/payU.service';
import { PayUController } from './controllers/payU.controller';
import { ClientesService } from "../clientes/services/cliente.service";
import { ClientesEntity } from "../clientes/entities/clientes.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([PayUEntity, ClientesEntity]),
        
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