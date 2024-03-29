import { ConfigModule } from "@nestjs/config";
import { DataSource, DataSourceOptions  } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { ConfigService } from '@nestjs/config/dist';
import MainSeeder from "../database/seeds/Main.seeder";
import { SeederOptions } from 'typeorm-extension';

ConfigModule.forRoot({envFilePath: `.${process.env.NODE_ENV}.env`});

const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'], 
  synchronize: false,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
  seeds: [MainSeeder],
}

export const AppDS= new DataSource(DataSourceConfig);