import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TipoAcidesCafeDTO } from '../../modules/mantenimiento/tiposAcidesCafe/dto/tipoAcidesCafe.dto';
import { TiposAcidesCafeEntity } from 'src/modules/mantenimiento/tiposAcidesCafe/entities/tiposAcidesCafe.entity';

export default class TipoNotaCafeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const distritoRepository =  dataSource.getRepository(TiposAcidesCafeEntity);
      const data : TipoAcidesCafeDTO []= [
        {
          nombre: 'Sutil',
          descripcion: 'sutil',
          valor: 1
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const notaExists = await distritoRepository.findOneBy({ nombre: element.nombre });
        if (!notaExists) {
          dataToInsert.push(element);
        }
      }
      
      await distritoRepository.insert(dataToInsert);
      console.log("Acides de cafe insertados correctamente");
    } catch (error) {
      console.error('Error en el TipoAcidesCafeSeeder:', error);
    }
  }
}