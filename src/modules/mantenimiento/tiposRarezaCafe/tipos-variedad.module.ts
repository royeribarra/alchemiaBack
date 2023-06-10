import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposRarezaCafeEntity } from './entities/tiposRarezaCafe.entity';
import { TiposVariedadService } from './services/tiposVariedad.service';
import { TiposVariedadController } from './controllers/tiposVariedad.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposRarezaCafeEntity])
  ],
  providers:[TiposVariedadService],
  controllers: [TiposVariedadController]
})

export class TiposVariedadModule {}
