import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TiposMolidoEntity } from '../../modules/mantenimiento/tiposMolidoCafe/entities/tiposMolido.entity';
import { TipoMolidoDTO } from '../../modules/mantenimiento/tiposMolidoCafe/dto/tipoMolido.dto';

export default class TipoMolidoCafeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const molidoRepository =  dataSource.getRepository(TiposMolidoEntity);
      const data : TipoMolidoDTO []= [
        {
          nombre: 'Grano',
          descripcion: 'grano',
          valor: 0
        },
        {
          nombre: 'Fino',
          descripcion: 'fino',
          valor: 1
        },
        {
          nombre: 'Medio fino',
          descripcion: 'medio fino',
          valor: 2
        },
        {
          nombre: 'Medio',
          descripcion: 'medio',
          valor: 3
        },
        {
          nombre: 'Medio grueso',
          descripcion: 'medio grueso',
          valor: 4
        },
        {
          nombre: 'Grueso',
          descripcion: 'grueso',
          valor: 5
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const molidoExists = await molidoRepository.findOneBy({ nombre: element.nombre });
        if (!molidoExists) {
          dataToInsert.push(element);
        }
      }
      
      await molidoRepository.insert(dataToInsert);
      console.log("Molido de cafe insertados correctamente");
    } catch (error) {
      console.error('Error en el TipoMolidoCafeSeeder:', error);
    }
  }
}