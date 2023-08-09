import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TiposTuesteEntity } from '../../modules/mantenimiento/tiposTuesteCafe/entities/tiposTueste.entity';
import { TipoTuesteDTO } from '../../modules/mantenimiento/tiposTuesteCafe/dto/tipoTueste.dto';

export default class TipoTuesteCafeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const tuesteRepository =  dataSource.getRepository(TiposTuesteEntity);
      const data : TipoTuesteDTO []= [
        {
          nombre: 'Claro',
          valor: 1,
          orden: 1
        },
        {
          nombre: 'Medio claro',
          valor: 2,
          orden: 2
        },
        {
          nombre: 'Medio',
          valor: 3,
          orden: 3
        },
        {
          nombre: 'Medio oscuro',
          valor: 4,
          orden: 4
        },
        {
          nombre: 'Oscuro',
          valor: 5,
          orden: 5
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const notaExists = await tuesteRepository.findOneBy({ nombre: element.nombre });
        if (!notaExists) {
          dataToInsert.push(element);
        }
      }
      
      await tuesteRepository.insert(dataToInsert);
      console.log("Aromas de cafe insertados correctamente");
    } catch (error) {
      console.error('Error en el TipoAromaCafeSeeder:', error);
    }
  }
}