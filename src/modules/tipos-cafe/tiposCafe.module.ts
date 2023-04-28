import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposCafeController } from './controllers/tiposCafe.controller';
import { TiposCafeService } from './services/tiposCafe.service';
import { TiposCafeEntity } from './entities/tiposCafe.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposCafeEntity])
  ],
  providers:[
    TiposCafeService
  ],
  controllers:[
    TiposCafeController
  ]
})

export class TiposCafeModule {}
