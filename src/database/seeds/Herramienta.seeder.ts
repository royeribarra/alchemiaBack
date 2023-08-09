import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { HerramientaDTO } from '../../modules/mantenimiento/herramientas/dto/herramienta.dto';
import { HerramientasEntity } from '../../modules/mantenimiento/herramientas/entities/herramientas.entity';

export default class HerramientaSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const herramientaRepository =  dataSource.getRepository(HerramientasEntity);
      const data : HerramientaDTO []= [
        {
          tipoProducto: 2,
          nombre: 'Aeropress',
          descripcion: '',
          precioUnitario: 50.00,
          precioDescuento: 48.00,
          imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jELtceuYL.jpg',
          stock: 10
        },
        {
          tipoProducto: 2,
          nombre: 'V60 y otros drippers',
          descripcion: '',
          precioUnitario: 50.00,
          precioDescuento: 48.00,
          imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jELtceuYL.jpg',
          stock: 10
        },
        {
          tipoProducto: 2,
          nombre: 'Chemex',
          descripcion: '',
          precioUnitario: 50.00,
          precioDescuento: 48.00,
          imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jELtceuYL.jpg',
          stock: 10
        },
        {
          tipoProducto: 2,
          nombre: 'Cafetera gota a gota',
          descripcion: '',
          precioUnitario: 50.00,
          precioDescuento: 48.00,
          imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jELtceuYL.jpg',
          stock: 10
        },
        {
          tipoProducto: 2,
          nombre: 'Prensa francesa',
          descripcion: '',
          precioUnitario: 50.00,
          precioDescuento: 48.00,
          imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jELtceuYL.jpg',
          stock: 10
        },
        {
          tipoProducto: 2,
          nombre: 'Moka italiana',
          descripcion: '',
          precioUnitario: 50.00,
          precioDescuento: 48.00,
          imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jELtceuYL.jpg',
          stock: 10
        },
        {
          tipoProducto: 2,
          nombre: 'Espresso',
          descripcion: '',
          precioUnitario: 50.00,
          precioDescuento: 48.00,
          imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jELtceuYL.jpg',
          stock: 10
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const herramientaExists = await herramientaRepository.findOneBy({ nombre: element.nombre, tipoProducto: element.tipoProducto });
        if (!herramientaExists) {
          dataToInsert.push(element);
        }
      }
      
      await herramientaRepository.insert(dataToInsert);
      console.log("Herramientas insertadas correctamente");
    } catch (error) {
      console.error('Error en el HerramientaSeeder:', error);
    }
  }
}