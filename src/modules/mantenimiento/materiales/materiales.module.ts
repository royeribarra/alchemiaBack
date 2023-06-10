import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialesController } from './controllers/materiales.controller';
import { MaterialesEntity } from './entities/materiales.entity';
import { MaterialesService } from './services/materiales.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MaterialesEntity])
  ],
  providers: [MaterialesService],
  controllers: [MaterialesController]
})
export class MaterialesModule {}
