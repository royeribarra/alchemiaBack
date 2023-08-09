import { Seeder, SeederFactoryManager, runSeeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import DistritoSeeder from './Distrito.seeder';
import ProductoSeeder from './Producto.seeder';
import HerramientaSeeder from './Herramienta.seeder';
import TipoAcidesCafeSeeder from './TipoAcidesCafe.seeder';
import TipoAromaCafeSeeder from './TipoAromaCafe.seeder';
import TipoCuerpoCafeSeeder from './TipoCuerpoCafe.seeder';
import TipoMolidoCafeSeeder from './TipoMolidoCafe.seeder';
import TipoNotaCafeSeeder from './TipoNotaCafe.seeder';
import TipoPostGustoCafeSeeder from './TipoPostGusto.seeder';
import TipoTuesteCafeSeeder from './TipoTuesteCafe.seeder';

export default class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    await runSeeder(dataSource, DistritoSeeder);
    await runSeeder(dataSource, ProductoSeeder);
    await runSeeder(dataSource, HerramientaSeeder);

    await runSeeder(dataSource, TipoAcidesCafeSeeder);
    await runSeeder(dataSource, TipoAromaCafeSeeder);
    await runSeeder(dataSource, TipoCuerpoCafeSeeder);
    await runSeeder(dataSource, TipoMolidoCafeSeeder);
    await runSeeder(dataSource, TipoNotaCafeSeeder);
    await runSeeder(dataSource, TipoPostGustoCafeSeeder);
    await runSeeder(dataSource, TipoTuesteCafeSeeder);
  }
}