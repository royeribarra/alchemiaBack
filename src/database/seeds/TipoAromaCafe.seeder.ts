import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TipoAromaCafeDTO } from '../../modules/mantenimiento/tiposAromaCafe/dto/tipoAromaCafe.dto';
import { TiposAromaCafeEntity } from '../../modules/mantenimiento/tiposAromaCafe/entities/tiposAromaCafe.entity';

export default class TipoAromaCafeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const aromaRepository =  dataSource.getRepository(TiposAromaCafeEntity);
      const data : TipoAromaCafeDTO []= [
        {
          nombre: 'Frutal',
          descripcion: 'sutil',
          valor: 1
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const aromaExists = await aromaRepository.findOneBy({ nombre: element.nombre });
        if (!aromaExists) {
          dataToInsert.push(element);
        }
      }
      
      await aromaRepository.insert(dataToInsert);
      console.log("Aromas de cafe insertados correctamente");
    } catch (error) {
      console.error('Error en el TipoAromaCafeSeeder:', error);
    }
  }
}