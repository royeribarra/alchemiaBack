import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposAcidesCafeController } from './controllers/tiposAcidesCafe.controller';
import { TiposAcidesCafeEntity } from './entities/tiposAcidesCafe.entity';
import { TiposAcidesCafeService } from './services/tiposAcidesCafe.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposAcidesCafeEntity])
  ],
  providers:[
    TiposAcidesCafeService
  ],
  controllers:[
    TiposAcidesCafeController
  ]
})

export class TiposAcidesCafeModule {}
