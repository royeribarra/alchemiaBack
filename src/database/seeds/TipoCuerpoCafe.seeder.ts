import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TipoCuerpoCafeDTO } from '../../modules/mantenimiento/tiposCuerpoCafe/dto/tipoCuerpoCafe.dto';
import { TiposCuerpoCafeEntity } from '../../modules/mantenimiento/tiposCuerpoCafe/entities/tiposCuerpoCafe.entity';

export default class TipoCuerpoCafeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const cuerpoRepository =  dataSource.getRepository(TiposCuerpoCafeEntity);
      const data : TipoCuerpoCafeDTO []= [
        {
          nombre: 'Delicado',
          descripcion: 's',
          valor: 1
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const cuerpoExists = await cuerpoRepository.findOneBy({ nombre: element.nombre });
        if (!cuerpoExists) {
          dataToInsert.push(element);
        }
      }
      
      await cuerpoRepository.insert(dataToInsert);
      console.log("Cuerpos de cafe insertados correctamente");
    } catch (error) {
      console.error('Error en el TipoCuerpoCafeSeeder:', error);
    }
  }
}