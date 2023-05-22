import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PayUEntity } from './entities/payU.entity';
import { PayUService } from './services/payU.service';
import { PayUController } from './controllers/payU.controller';


@Module({
    imports:[
        TypeOrmModule.forFeature([PayUEntity]),
        
    ],
    providers: [
        PayUService
    ],
    controllers:[
        PayUController
    ]
})

export class PayUModule {}