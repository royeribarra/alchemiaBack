import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { DistritoDTO } from '../../modules/mantenimiento/distritos/dto/distrito.dto';
import { DistritosEntity } from '../../modules/mantenimiento/distritos/entities/distritos.entity';

export default class DistritoSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const distritoRepository =  dataSource.getRepository(DistritosEntity);
      const data : DistritoDTO []= [
        {
          nombre: 'Surco',
          codigo: 'SURC',
          tarifa: 10.00
        },
        {
          nombre: 'Miraflores',
          codigo: 'MIR',
          tarifa: 10.00
        },
        {
          nombre: 'San Isidro',
          codigo: 'SISI',
          tarifa: 10.00
        },
        {
          nombre: 'Lince',
          codigo: 'LIN',
          tarifa: 10.00
        },
        {
          nombre: 'San Borja',
          codigo: 'BRJ',
          tarifa: 10.00
        },
        {
          nombre: 'La Victoria',
          codigo: 'VICT',
          tarifa: 10.00
        },
        {
          nombre: 'La Molina',
          codigo: 'MOL',
          tarifa: 15.00
        },
        {
          nombre: 'Pueblo Libre',
          codigo: 'PB LBR',
          tarifa: 15.00
        },
        {
          nombre: 'Barranco',
          codigo: 'BARR',
          tarifa: 15.00
        },
        {
          nombre: 'Jesús María',
          codigo: 'JS MR',
          tarifa: 15.00
        },
        {
          nombre: 'Magdalena',
          codigo: 'MAGD',
          tarifa: 15.00
        },
        {
          nombre: 'Surquillo',
          codigo: 'SURQ',
          tarifa: 15.00
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const distritoExists = await distritoRepository.findOneBy({ nombre: element.nombre });
        if (!distritoExists) {
          dataToInsert.push(element);
        }
      }
      
      await distritoRepository.insert(dataToInsert);
      console.log("Distritos insertados correctamente");
    } catch (error) {
      console.error('Error en el DistritoSeeder:', error);
    }
  }
}