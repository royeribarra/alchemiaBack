import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceConfig } from './config/data.source';


import { ProjectsModule } from '../src/modules/projects/projects.module';
import { UsersModule } from '../src/modules/mantenimiento/users/users.module';
import { TiposMolidoModule } from '../src/modules/mantenimiento/tiposMolidoCafe/tipos-molido.module';
import { TiposTuesteModule } from '../src/modules/mantenimiento/tiposTuesteCafe/tipos-tueste.module';
import { TiposVariedadModule } from '../src/modules/mantenimiento/tiposRarezaCafe/tipos-variedad.module';
import { PedidosModule } from '../src/modules/ventas/pedidos/pedidos.module';
import { DetallesPedidoModule } from '../src/modules/ventas/detalles-pedido/detalles-pedido.module';
import { ClientesModule } from '../src/modules/ventas/clientes/clientes.module';
import { ProductosModule } from '../src/modules/mantenimiento/productos/productos.module';
import { HerramientasModule } from '../src/modules/mantenimiento/herramientas/herramientas.module';
import { PayUModule } from './modules/payu/payU.module';
import { DistritosModule } from './modules/mantenimiento/distritos/distritos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({...DataSourceConfig}), 
    ProjectsModule, 
    UsersModule, 
    TiposMolidoModule, 
    TiposTuesteModule, 
    TiposVariedadModule,
    PedidosModule, 
    DetallesPedidoModule, 
    ClientesModule, 
    ProductosModule, 
    HerramientasModule,
    PayUModule,
    DistritosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
