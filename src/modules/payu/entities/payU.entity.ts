import { BaseEntity } from '../../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { IPayU } from '../../../interfaces/payU.interface';


@Entity({name:'pedidos'})
export class PayUEntity extends BaseEntity implements IPayU{

  @Column()
  clienteId: string;

  @Column({type: 'decimal', precision: 10, default: 0.00})
  totalProductos: number;

  @Column({type: 'decimal', precision: 10, default: 0.00})
  costoDelivery: number;

  @Column({type: 'decimal', precision: 10, default: 0.00})
  total: number;

  @Column()
  observacion: string;
  
  @Column()
  fechaPago: string;
  
  @Column()
  fechaEntrega: string;
  
  @Column()
  fechaPedido: string;
  
  @Column({default: 1})
  isActive: boolean;
}