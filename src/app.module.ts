import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceConfig } from './config/data.source';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { UsersModule } from './modules/mantenimiento/users/users.module';
import { TiposMolidoModule } from './modules/mantenimiento/tiposMolidoCafe/tipos-molido.module';
import { TiposTuesteModule } from './modules/mantenimiento/tiposTuesteCafe/tipos-tueste.module';
import { TiposRarezaCafeModule } from './modules/mantenimiento/tiposRarezaCafe/tipos-rareza-cafe.module';
import { PedidosModule } from './modules/ventas/pedidos/pedidos.module';
import { DetallesPedidoModule } from './modules/ventas/detalles-pedido/detalles-pedido.module';
import { ClientesModule } from './modules/ventas/clientes/clientes.module';
import { ProductosModule } from './modules/mantenimiento/productos/productos.module';
import { HerramientasModule } from './modules/mantenimiento/herramientas/herramientas.module';
import { PayUModule } from './modules/payu/payU.module';
import { DistritosModule } from './modules/mantenimiento/distritos/distritos.module';
import { TiposAcidesCafeModule } from './modules/mantenimiento/tiposAcidesCafe/tiposAcidesCafe.module';
import { TiposAromaCafeModule } from './modules/mantenimiento/tiposAromaCafe/tiposAromaCafe.module';
import { TiposCuerpoCafeModule } from './modules/mantenimiento/tiposCuerpoCafe/tiposCuerpoCafe.module';
import { TiposNotaCafeModule } from './modules/mantenimiento/tiposNotaCafe/tiposNotaCafe.module';
import { TiposPostGustoCafeoModule } from './modules/mantenimiento/tiposPostGustoCafe/tiposPostGustoCafe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({...DataSourceConfig}),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
      exclude: ['/api/(.*)'],
    }),
    UsersModule,
    TiposMolidoModule,
    TiposTuesteModule,
    TiposRarezaCafeModule,
    PedidosModule,
    DetallesPedidoModule,
    ClientesModule,
    ProductosModule,
    HerramientasModule,
    PayUModule,
    DistritosModule,
    TiposAcidesCafeModule,
    TiposAromaCafeModule,
    TiposCuerpoCafeModule,
    TiposNotaCafeModule,
    TiposPostGustoCafeoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
