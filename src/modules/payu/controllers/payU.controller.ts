import { Body, Controller, Get, HttpCode, Param, Post, Put, Res} from '@nestjs/common';
import { PayUService } from '../services/payU.service';
import { PayUDTO, PayUUpdatedDTO } from '../dto/payU.dto';
import { Delete } from '@nestjs/common/decorators';
import { Response } from 'express';
import axios from 'axios';
import { bodyPayu, getBodyPago } from '../json/variablesPayu';
import { IPayU, IPayUTarjeta } from 'src/interfaces/payU.interface';
import { ICliente } from 'src/interfaces/cliente.interface';
import { ClientesService } from '../../clientes/services/cliente.service';
import { IPedido } from 'src/interfaces/pedido.interface';

@Controller('payu')
export class PayUController {
  constructor(
   private readonly pedidoService: PayUService,
   private readonly clienteService: ClientesService,
  ) {}

  @Post('realizar-pago')
  public async realizarPago(@Body() body : IPayU, @Res() res: Response){

      const lastClienteId = await this.clienteService.findLastCliente();

      const datosTarjeta : IPayUTarjeta = body.datosTarjeta;
      const cliente : ICliente = body.cliente;
      const pedido : IPedido = body.pedido;

      const bodyPayu = getBodyPago(datosTarjeta, cliente, lastClienteId, pedido);
      // Parsear el contenido JSON a un objeto

      // Actualizar los datos necesarios en el objeto
      // data.name = body.name;
      // data.age = body.age;
    try {
      res.status(200).json(bodyPayu);
    } catch (error) {
      
    }
    
    //return pedido;
  }

  @Post('register')
  public async registerPedido(@Body() body, @Res() res: Response){
    try {
      
    } catch (error) {
      
    }
    
    //return pedido;
  }

  @Get('all')
  public async findAllPedidos()
  {
    return await this.pedidoService.findPedidos();
  }

  @Get(':id')
  public async findPedidoById(@Param('id') id: string){
    return await this.pedidoService.findPedidoById(id);
  }

  @Put('edit/:id')
  public async updatePedido(@Body() body: PayUUpdatedDTO, @Param('id') id:string){
    return await this.pedidoService.updatePedido(body, id);
  }

  @Delete(':id')
  public async deletePedido(@Param('id') id:string){
    return await this.pedidoService.deletePedido(id);
  }

  @Get('pay-u/ping')
  public async verPing(){
    try {
        const request = {
            "laguage": "es",
            "command": "SUBMIT_TRANSACTION",
            "merchant": {
               "apiKey": "4Vj8eK4rloUd272L48hsrarnUA",
               "apiLogin": "pRRXKOl8ikMmt9u"
            },
            "transaction": {
               "order": {
                  "accountId": "512323",
                  "referenceCode": "PRODUCT_TEST_2021-06-21T16:39:10.965Z",
                  "description": "Payment test description",
                  "language": "es",
                  "signature": "af24b22ad0aa0b14dbe3c21a07d9558c",
                  "notifyUrl": "http://www.payu.com/notify",
                  "additionalValues": {
                     "TX_VALUE": {
                        "value": 100,
                        "currency": "PEN"
                  }
                  },
                  "buyer": {
                     "merchantBuyerId": "1",
                     "fullName": "First name and second buyer name",
                     "emailAddress": "buyer_test@test.com",
                     "contactPhone": "7563126",
                     "dniNumber": "123456789",
                     "shippingAddress": {
                        "street1": "Av. Isabel La Católica 103-La Victoria",
                        "street2": "5555487",
                        "city": "Lima",
                        "state": "Lima y Callao",
                        "country": "PE",
                        "postalCode": "000000",
                        "phone": "7563126"
                     }
                  },
                  "shippingAddress": {
                     "street1": "Av. Isabel La Católica 103-La Victoria",
                     "street2": "5555487",
                     "city": "Lima",
                     "state": "Lima y Callao",
                     "country": "PE",
                     "postalCode": "0000000",
                     "phone": "7563126"
                  }
               },
               "payer": {
                  "merchantPayerId": "1",
                  "fullName": "First name and second payer name",
                  "emailAddress": "payer_test@test.com",
                  "contactPhone": "7563126",
                  "dniNumber": "5415668464654",
                  "billingAddress": {
                     "street1": "Av. Isabel La Católica 103-La Victoria",
                     "street2": "125544",
                     "city": "Lima",
                     "state": "Lima y Callao",
                     "country": "PE",
                     "postalCode": "000000",
                     "phone": "7563126"
                  }
               },
               "creditCard": {
                  "number": "4097440000000004",
                  "securityCode": "321",
                  "expirationDate": "2022/12",
                  "name": "APPROVED"
               },
               "extraParameters": {
                  "INSTALLMENTS_NUMBER": 1
               },
               "type": "AUTHORIZATION_AND_CAPTURE",
               "paymentMethod": "VISA",
               "paymentCountry": "PE",
               "deviceSessionId": "vghs6tvkcle931686k1900o6e1",
               "ipAddress": "127.0.0.1",
               "cookie": "pt1t38347bs6jc9ruv2ecpv7o2",
               "userAgent": "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
            },
            "test": true
        }
        const ping = {
            "test": true,
            "language": "en",
            "command": "PING",
            "merchant": {
               "apiLogin": "pRRXKOl8ikMmt9u",
               "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
            }
         }
         
    const response = await axios.post(`https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi`, ping);
    const data = response;
    // Haz algo con los datos recibidos
        console.log(data.data);
        return "hola";
    } catch (error) {
        console.log(error);
    }
  }
}
