import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposTuesteEntity } from './entities/tiposTueste.entity';
import { TiposTuesteController } from './controllers/tiposTueste.controller';
import { TiposTuesteService } from './services/tiposTueste.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposTuesteEntity])
  ],
  providers:[
    TiposTuesteService
  ],
  controllers:[
    TiposTuesteController
  ]
})

export class TiposTuesteModule {}
