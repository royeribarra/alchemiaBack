import { Seeder, SeederFactoryManager, runSeeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import DistritoSeeder from './Distrito.seeder';

export default class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    await runSeeder(dataSource, DistritoSeeder);
  }
}