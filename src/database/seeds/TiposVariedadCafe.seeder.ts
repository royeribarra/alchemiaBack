import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TiposRarezaCafeEntity } from '../../modules/mantenimiento/tiposRarezaCafe/entities/tiposRarezaCafe.entity';
import { TipoVariedadDTO } from 'src/modules/mantenimiento/tiposRarezaCafe/dto/tipoRarezaCafe.dto';

export default class TipoVariedadCafeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const variedadRepository =  dataSource.getRepository(TiposRarezaCafeEntity);
      const data : TipoVariedadDTO []= [
        {
          nombre: 'Geisha',
          valor: 1
        },
        {
          nombre: 'Caturra',
          valor: 2
        },
        {
          nombre: 'Catuai',
          valor: 3
        },
        {
          nombre: 'Bourbon',
          valor: 4
        },
        {
          nombre: 'Pacamara',
          valor: 5
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const variedadExists = await variedadRepository.findOneBy({ nombre: element.nombre });
        if (!variedadExists) {
          dataToInsert.push(element);
        }
      }
      
      await variedadRepository.insert(dataToInsert);
      console.log("Variedades de cafe insertados correctamente");
    } catch (error) {
      console.error('Error en el TipoVariedadCafeSeeder:', error);
    }
  }
}