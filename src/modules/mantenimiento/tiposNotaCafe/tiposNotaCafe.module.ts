import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposNotaCafeController } from './controllers/tiposNotaCafe.controller';
import { TiposNotaCafeEntity } from './entities/tiposNotaCafe.entity';
import { TiposNotaCafeService } from './services/tiposNotaCafe.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposNotaCafeEntity])
  ],
  providers:[
    TiposNotaCafeService
  ],
  controllers:[
    TiposNotaCafeController
  ]
})

export class TiposNotaCafeModule {}
