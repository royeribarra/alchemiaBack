import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistritosEntity } from './entities/distritos.entity';
import { DistritosService } from './services/distritos.service';
import { DistritosController } from './controllers/distritros.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([DistritosEntity])
  ],
  providers: [
    DistritosService
  ],
  controllers: [
    DistritosController
  ]
})

export class DistritosModule {}
