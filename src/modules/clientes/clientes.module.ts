import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesEntity } from './entities/clientes.entity';
import { ClientesController } from './controllers/clientes.controller';
import { ClientesService } from './services/cliente.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([ClientesEntity])
  ],
  providers: [
    ClientesService
  ],
  controllers: [
    ClientesController
  ],
  exports: [
    ClientesService
  ]
})

export class ClientesModule {}
