import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposAromaCafeController } from './controllers/tiposAromaCafe.controller';
import { TiposAromaCafeEntity } from './entities/tiposAromaCafe.entity';
import { TiposAromaCafeService } from './services/tiposAromaCafe.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposAromaCafeEntity])
  ],
  providers:[
    TiposAromaCafeService
  ],
  controllers:[
    TiposAromaCafeController
  ]
})

export class TiposAromaCafeModule {}
