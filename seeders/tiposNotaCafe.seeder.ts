import { TiposNotaCafeEntity } from 'src/modules/mantenimiento/tiposNotaCafe/entities/tiposNotaCafe.entity';
import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateInitialDataSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(TiposNotaCafeEntity)
      .values([
        { nombre: 'John Doe', descripcion: '25' },
        { nombre: 'Jane Smith', descripcion: '30' },
        // Más datos iniciales...
      ])
      .execute();
  }
}