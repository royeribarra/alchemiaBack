import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosEntity } from './entities/productos.entity';
import { ProductosService } from './services/productos.service';
import { ProductosController } from './controllers/productos.controller';
import { ProductosTiposRarezaCafeEntity } from './entities/productosTiposRarezaCafe.entity';

@Module({
    imports:[
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
