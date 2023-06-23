import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposCuerpoCafeController } from './controllers/tiposCuerpoCafe.controller';
import { TiposCuerpoCafeEntity } from './entities/tiposCuerpoCafe.entity';
import { TiposCuerpoCafeService } from './services/tiposCuerpoCafe.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposCuerpoCafeEntity])
  ],
  providers:[
    TiposCuerpoCafeService
  ],
  controllers:[
    TiposCuerpoCafeController
  ]
})

export class TiposCuerpoCafeModule {}
