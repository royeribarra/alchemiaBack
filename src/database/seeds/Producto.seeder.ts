import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { ProductoDTO } from '../../modules/mantenimiento/productos/dto/producto.dto';
import { ProductosEntity } from '../../modules/mantenimiento/productos/entities/productos.entity';

export default class ProductoSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    try {
      const productoRepository =  dataSource.getRepository(ProductosEntity);
      const data : ProductoDTO []= [
        {
          tipoProducto: 1,
          nombre: 'Café rubí',
          descripcion: 'Café apasionado y aromático, con notas dulces y vibrantes',
          empaque: '250 gr',
          puntaje: 90,
          origen: 'Chanchamayo',
          altura: '1800 msnm',
          variedad: 'Geisha',
          proceso: 'Natural Anaeróbico',
          precioUnitario: 50.00,
          precioDescuento: 45.00,
          imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jELtceuYL.jpg',
          stock: 10,
          notas: '[{"value":"nota  1"},{"value":"nota2"}]'
        },
        {
          tipoProducto: 1,
          nombre: 'Café rubí',
          descripcion: 'Café apasionado y aromático, con notas dulces y vibrantes',
          empaque: '1 kg',
          puntaje: 90,
          origen: 'Chanchamayo',
          altura: '1800 msnm',
          variedad: 'Geisha',
          proceso: 'Natural Anaeróbico',
          precioUnitario: 200.00,
          precioDescuento: 160.00,
          imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jELtceuYL.jpg',
          stock: 10,
          notas: '[{"value":"nota  1"},{"value":"nota2"}]'
        },
        {
          tipoProducto: 1,
          nombre: 'Café rubí',
          descripcion: 'Café apasionado y aromático, con notas dulces y vibrantes',
          empaque: '250 ml',
          puntaje: 90,
          origen: 'Chanchamayo',
          altura: '1800 msnm',
          variedad: 'Geisha',
          proceso: 'Natural Anaeróbico',
          precioUnitario: 18.00,
          precioDescuento: 15.00,
          imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jELtceuYL.jpg',
          stock: 10,
          notas: '[{"value":"nota  1"},{"value":"nota2"}]'
        },
        {
          tipoProducto: 1,
          nombre: 'Café rubí',
          descripcion: 'Café apasionado y aromático, con notas dulces y vibrantes',
          empaque: '120 ml',
          puntaje: 90,
          origen: 'Chanchamayo',
          altura: '1800 msnm',
          variedad: 'Geisha',
          proceso: 'Natural Anaeróbico',
          precioUnitario: 12.00,
          precioDescuento: 10.00,
          imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jELtceuYL.jpg',
          stock: 10,
          notas: '[{"value":"nota  1"},{"value":"nota2"}]'
        },
      ];

      const dataToInsert = [];

      for (const element of data) {
        const productoExists = await productoRepository.findOneBy({ nombre: element.nombre, tipoProducto: element.tipoProducto });
        if (!productoExists) {
          dataToInsert.push(element);
        }
      }
      
      await productoRepository.insert(dataToInsert);
      console.log("Productos insertados correctamente");
    } catch (error) {
      console.error('Error en el ProductoSeeder:', error);
    }
  }
}