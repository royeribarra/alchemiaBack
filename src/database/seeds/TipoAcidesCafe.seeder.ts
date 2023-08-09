import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TipoAcidesCafeDTO } from '../../modules/mantenimiento/tiposAcidesCafe/dto/tipoAcidesCafe.dto';
import { TiposAcidesCafeEntity } from '../../modules/mantenimiento/tiposAcidesCafe/entities/tiposAcidesCafe.entity';

export default class TipoAcidesCafeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const acidezRepository =  dataSource.getRepository(TiposAcidesCafeEntity);
      const data : TipoAcidesCafeDTO []= [
        {
          nombre: 'Sutil',
          descripcion: 'sutil',
          valor: 1
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const acidezExists = await acidezRepository.findOneBy({ nombre: element.nombre });
        if (!acidezExists) {
          dataToInsert.push(element);
        }
      }
      
      await acidezRepository.insert(dataToInsert);
      console.log("Acides de cafe insertados correctamente");
    } catch (error) {
      console.error('Error en el TipoAcidezCafeSeeder:', error);
    }
  }
}