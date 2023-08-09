import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { ProductosEntity } from './entities/productos.entity';
import { ProductosService } from './services/productos.service';
import { ProductosController } from './controllers/productos.controller';
import { ProductosTiposRarezaCafeEntity } from './entities/productosTiposRarezaCafe.entity';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Module({
    imports:[
      MulterModule.register({
        storage: diskStorage({
          destination: './public/imagenes/productos', // Directorio donde se guardarán los archivos
          filename: (req, file, callback) => {
            // Generar un nuevo nombre de archivo con la extensión original
            const uniqueName = Date.now() + extname(file.originalname);
            callback(null, uniqueName);
          },
        }),
      }),
      TypeOrmModule.forFeature([ProductosEntity, ProductosTiposRarezaCafeEntity])
    ],
    providers: [
      ProductosService
    ],
    controllers:[
      ProductosController
    ]
})

export class ProductosModule {}
