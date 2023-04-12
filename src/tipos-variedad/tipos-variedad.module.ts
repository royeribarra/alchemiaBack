import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposVariedadEntity } from './entities/tiposVariedad.entity';
import { TiposVariedadService } from './services/tiposVariedad.service';
import { TiposVariedadController } from './controllers/tiposVariedad.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposVariedadEntity])
  ],
  providers:[TiposVariedadService],
  controllers: [TiposVariedadController]
})

export class TiposVariedadModule {}
