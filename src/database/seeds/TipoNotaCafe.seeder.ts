import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TipoNotaCafeDTO } from '../../modules/mantenimiento/tiposNotaCafe/dto/tipoNotaCafe.dto';
import { TiposNotaCafeEntity } from '../../modules/mantenimiento/tiposNotaCafe/entities/tiposNotaCafe.entity';

export default class TipoNotaCafeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const notaRepository =  dataSource.getRepository(TiposNotaCafeEntity);
      const data : TipoNotaCafeDTO []= [
        {
          nombre: 'Menta',
          descricpion: 'menta',
          valor: 1
        },
        {
          nombre: 'Miel',
          descricpion: 'miel',
          valor: 1
        },
        {
          nombre: 'Manzanilla',
          descricpion: 'manzanilla',
          valor: 1
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const notaExists = await notaRepository.findOneBy({ nombre: element.nombre });
        if (!notaExists) {
          dataToInsert.push(element);
        }
      }
      
      await notaRepository.insert(dataToInsert);
      console.log("Notas de cafe insertados correctamente");
    } catch (error) {
      console.error('Error en el TipoNotaCafeSeeder:', error);
    }
  }
}