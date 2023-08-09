import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TiposPostGustoCafeEntity } from '../../modules/mantenimiento/tiposPostGustoCafe/entities/tiposPostGustoCafe.entity';
import { TipoPostGustoCafeDTO } from '../../modules/mantenimiento/tiposPostGustoCafe/dto/tipoPostGustoCafe.dto';

export default class TipoPostGustoCafeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const gustoRepository =  dataSource.getRepository(TiposPostGustoCafeEntity);
      const data : TipoPostGustoCafeDTO []= [
        {
          nombre: 'Dulce',
          descripcion: 'dulce',
          valor: 1
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const notaExists = await gustoRepository.findOneBy({ nombre: element.nombre });
        if (!notaExists) {
          dataToInsert.push(element);
        }
      }
      
      await gustoRepository.insert(dataToInsert);
      console.log("Gustos de cafe insertados correctamente");
    } catch (error) {
      console.error('Error en el TipoPostGustoCafeSeeder:', error);
    }
  }
}