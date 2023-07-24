import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TipoAromaCafeDTO } from 'src/modules/mantenimiento/tiposAromaCafe/dto/tipoAromaCafe.dto';
import { TiposAromaCafeEntity } from 'src/modules/mantenimiento/tiposAromaCafe/entities/tiposAromaCafe.entity';
import { TiposTuesteEntity } from 'src/modules/mantenimiento/tiposTuesteCafe/entities/tiposTueste.entity';
import { TipoTuesteDTO } from 'src/modules/mantenimiento/tiposTuesteCafe/dto/tipoTueste.dto';

export default class TipoTuesteCafeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const distritoRepository =  dataSource.getRepository(TiposTuesteEntity);
      const data : TipoTuesteDTO []= [
        {
          nombre: 'Frutal',
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
      console.log("Aromas de cafe insertados correctamente");
    } catch (error) {
      console.error('Error en el TipoAromaCafeSeeder:', error);
    }
  }
}