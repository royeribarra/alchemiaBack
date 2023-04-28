import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HerramientasEntity } from './entities/herramientas.entity';
import { HerramientasService } from './services/herramientas.service';
import { HerramientasController } from './controllers/herramientas.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([HerramientasEntity])
  ],
  providers: [
    HerramientasService
  ],
  controllers: [
    HerramientasController
  ]
})

export class HerramientasModule {}
