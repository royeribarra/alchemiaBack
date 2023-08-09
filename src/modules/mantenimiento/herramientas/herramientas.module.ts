import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { HerramientasEntity } from './entities/herramientas.entity';
import { HerramientasService } from './services/herramientas.service';
import { HerramientasController } from './controllers/herramientas.controller';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './public/imagenes/herramientas', // Directorio donde se guardarán los archivos
        filename: (req, file, callback) => {
          // Generar un nuevo nombre de archivo con la extensión original
          const uniqueName = Date.now() + extname(file.originalname);
          callback(null, uniqueName);
        },
      }),
    }),
    TypeOrmModule.forFeature([HerramientasEntity])
  ],
  providers: [
    HerramientasService
  ],
  controllers: [
    HerramientasController
  ]
})

export class HerramientasModule {}
