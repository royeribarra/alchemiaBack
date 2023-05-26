import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceConfig } from './config/data.source';


import { ProjectsModule } from '../src/modules/projects/projects.module';
import { UsersModule } from '../src/modules/users/users.module';
import { TiposMolidoModule } from '../src/modules/tipos-molido/tipos-molido.module';
import { TiposTuesteModule } from '../src/modules/tipos-tueste/tipos-tueste.module';
import { TiposVariedadModule } from '../src/modules/tipos-variedad/tipos-variedad.module';
import { PedidosModule } from '../src/modules/pedidos/pedidos.module';
import { DetallesPedidoModule } from '../src/modules/detalles-pedido/detalles-pedido.module';
import { ClientesModule } from '../src/modules/clientes/clientes.module';
import { ProductosModule } from '../src/modules/productos/productos.module';
import { HerramientasModule } from '../src/modules/herramientas/herramientas.module';
import { MaterialesModule } from './modules/materiales/materiales.module';
import { TiposCafeModule } from './modules/tipos-cafe/tiposCafe.module';
import { PayUModule } from './modules/payu/payU.module';
import { DistritosModule } from './modules/distritos/distritos.module';

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
    TiposCafeModule,
    PedidosModule, 
    DetallesPedidoModule, 
    ClientesModule, 
    ProductosModule, 
    HerramientasModule,
    MaterialesModule,
    PayUModule,
    DistritosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
