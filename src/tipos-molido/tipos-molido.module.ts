import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposMolidoEntity } from './entities/tiposMolido.entity';
import { TipoMolidoService } from '../modules/tipoMolido/tipoMolido.service';
import { TipoMolidoController } from '../modules/tipoMolido/tipoMolido.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposMolidoEntity])
  ],
  providers:[
    TipoMolidoService
  ],
  controllers:[
    TipoMolidoController
  ]
})

export class TiposMolidoModule {}
