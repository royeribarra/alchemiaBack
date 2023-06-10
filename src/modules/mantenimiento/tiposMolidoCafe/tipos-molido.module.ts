import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposMolidoController } from './controllers/tiposMolido.controller';
import { TiposMolidoEntity } from './entities/tiposMolido.entity';
import { TiposMolidoService } from './services/tiposMolido.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposMolidoEntity])
  ],
  providers:[
    TiposMolidoService
  ],
  controllers:[
    TiposMolidoController
  ]
})

export class TiposMolidoModule {}
