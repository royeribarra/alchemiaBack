import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceConfig } from './config/data.source';

import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { TiposMolidoModule } from './tipos-molido/tipos-molido.module';
import { TiposTuesteModule } from './tipos-tueste/tipos-tueste.module';
import { TiposVariedadModule } from './tipos-variedad/tipos-variedad.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { DetallesPedidoModule } from './detalles-pedido/detalles-pedido.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({...DataSourceConfig}), 
    ProjectsModule, 
    UsersModule, 
    TiposMolidoModule, 
    TiposTuesteModule, 
    TiposVariedadModule, 
    PedidosModule, 
    DetallesPedidoModule, ClientesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
