import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TipoAromaCafeDTO } from 'src/modules/mantenimiento/tiposAromaCafe/dto/tipoAromaCafe.dto';
import { TiposAromaCafeEntity } from 'src/modules/mantenimiento/tiposAromaCafe/entities/tiposAromaCafe.entity';
import { TiposMolidoEntity } from 'src/modules/mantenimiento/tiposMolidoCafe/entities/tiposMolido.entity';
import { TipoMolidoDTO } from 'src/modules/mantenimiento/tiposMolidoCafe/dto/tipoMolido.dto';

export default class TipoMolidoCafeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const distritoRepository =  dataSource.getRepository(TiposMolidoEntity);
      const data : TipoMolidoDTO []= [
        {
          nombre: 'Frutal',
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
      console.log("Aromas de cafe insertados correctamente");
    } catch (error) {
      console.error('Error en el TipoAromaCafeSeeder:', error);
    }
  }
}