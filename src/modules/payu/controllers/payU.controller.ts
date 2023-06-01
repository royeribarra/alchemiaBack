import { Body, Controller, Get, HttpCode, Param, Post, Put, Res} from '@nestjs/common';
import { PayUService } from '../services/payU.service';
import { PayUDTO, PayUUpdatedDTO } from '../dto/payU.dto';
import { Delete } from '@nestjs/common/decorators';
import { Response } from 'express';
import axios from 'axios';
import { bodyPayu, construirPayUTransactionDTO, getBodyPago } from '../json/variablesPayu';
import { IPayU, IPayUTarjeta } from 'src/interfaces/payU.interface';
import { ICliente } from 'src/interfaces/cliente.interface';
import { ClientesService } from '../../clientes/services/cliente.service';
import { IPedido } from 'src/interfaces/pedido.interface';
import { PedidoDTO } from 'src/modules/pedidos/dto/pedido.dto';
import { ClienteDTO } from 'src/modules/clientes/dto/cliente.dto';
import { PayUTransactionDTO } from '../dto/payUTransaction.dto';

@Controller('payu')
export class PayUController {
  constructor(
   private readonly payUService: PayUService,
   private readonly clienteService: ClientesService,
  ) {}

  @Post('realizar-pago')
  public async realizarPago(@Body() body : PayUDTO, @Res() res: Response){

    const lastClienteId = await this.clienteService.findLastCliente();

    const datosTarjeta : IPayUTarjeta = body.datosTarjeta;
    const cliente : ClienteDTO = body.cliente;
    const total : number = body.total;

    const bodyPayu = getBodyPago(datosTarjeta, cliente, lastClienteId, total);

    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
      'Content-Length': JSON.stringify(bodyPayu).length
    };

    const urlDesarrollo = `https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi`;
    
    try {
      const responsePayu = await axios.post(urlDesarrollo, bodyPayu, {headers : headers});
      console.log(responsePayu.data);
      
      if(responsePayu.data.code === "SUCCESS"){
        const miDTO: PayUTransactionDTO = construirPayUTransactionDTO(responsePayu.data.transactionResponse);
        const transaction = await this.payUService.createTransaction(miDTO);
        console.log(transaction);
        if(responsePayu.data.transactionResponse.responseCode === 'APPROVED')
        {
          const response = {
            status: 200,
            isOk: true,
            message: 'Se realizó el pago con éxito pedido.',
            data: {
              payU: responsePayu.data,
              clienteId: lastClienteId,
              transaction: transaction
            }
          };
          res.status(200).json(response);
        }else if(typeof  responsePayu.data.transactionResponse !== 'undefined' && (responsePayu.data.transactionResponse.responseCode === 'PENDING_TRANSACTION_CONFIRMATION' || 
        responsePayu.data.transactionResponse.responseCode === 'PENDING_TRANSACTION_TRANSMISSION')
      ){
        const response = {
          status: 200,
          isOk: false,
          message: 'El pago está pendiente de confirmación.',
          data: {
            payU: responsePayu.data,
            clienteId: lastClienteId,
            transaction: transaction
          }
        };
        res.status(200).json(response);
      }
      }else{
        const response = {
          status: 200,
          isOk: false,
          message: responsePayu.data
        };
        res.status(200).json(response);
      }
    } catch (error) {
      console.log(error)
      const response = {
        status: 500,
        message: 'No se pudo realizar el pago.',
        error: error
      };
      res.status(500).json(response);
    }
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
    return await this.payUService.findPedidos();
  }

  @Get(':id')
  public async findPedidoById(@Param('id') id: string){
    return await this.payUService.findPedidoById(id);
  }

  @Put('edit/:id')
  public async updatePedido(@Body() body: PayUUpdatedDTO, @Param('id') id:string){
    
  }

  @Delete(':id')
  public async deletePedido(@Param('id') id:string){
    return await this.payUService.deletePedido(id);
  }

  @Get('pay-u/ping')
  public async verPing(){
    try {
      const request = {
         "language": "es",
         "command": "SUBMIT_TRANSACTION",
         "merchant": {
            "apiKey": "4Vj8eK4rloUd272L48hsrarnUA",
            "apiLogin": "pRRXKOl8ikMmt9u"
         },
         "transaction": {
            "order": {
               "accountId": "512323",
               "referenceCode": "prueba1",
               "description": "Payment test description",
               "language": "es",
               "signature": "cdce0cfa91a81a7e1b5970b304a3eec2",
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
                     "street1": "Av Isabel La Catlica 103 La Victoria",
                     "street2": "5555487",
                     "city": "Lima",
                     "state": "Lima",
                     "country": "PE",
                     "postalCode": "000000",
                     "phone": "7563126"
                  }
               },
               "shippingAddress": {
                  "street1": "Av Isabel La Catlica 103 La Victoria",
                  "street2": "5555487",
                  "city": "Lima",
                  "state": "Lima",
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
                  "street1": "Av Isabel La Catlica 103 La Victoria",
                  "street2": "125544",
                  "city": "Lima",
                  "state": "Lima",
                  "country": "PE",
                  "postalCode": "000000",
                  "phone": "7563126"
               }
            },
            "creditCard": {
               "number": "4557880000000004",
               "securityCode": "777",
               "expirationDate": "2023/05",
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
            "userAgent": "Firefox"
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
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
      'Content-Length': JSON.stringify(request).length
    };
    const response = await axios.post(`https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi`, request, {headers: headers});
    const data = response;
    // Haz algo con los datos recibidos
        console.log(data.data);
        return "hola";
    } catch (error) {
        console.log(error);
    }
  }
}
