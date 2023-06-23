import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposPostGustoCafeController } from './controllers/tiposPostGustoCafe.controller';
import { TiposPostGustoCafeEntity } from './entities/tiposPostGustoCafe.entity';
import { TiposPostGustoCafeService } from './services/tiposPostGustoCafe.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposPostGustoCafeEntity])
  ],
  providers:[
    TiposPostGustoCafeService
  ],
  controllers:[
    TiposPostGustoCafeController
  ]
})

export class TiposPostGustoCafeoModule {}
