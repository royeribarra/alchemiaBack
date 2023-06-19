import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposRarezaCafeEntity } from './entities/tiposRarezaCafe.entity';
import { TiposVariedadService } from './services/tiposRarezaCafe.service';
import { TiposVariedadController } from './controllers/tiposRarezaCafe.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([TiposRarezaCafeEntity])
  ],
  providers:[TiposVariedadService],
  controllers: [TiposVariedadController]
})

export class TiposRarezaCafeModule {}
