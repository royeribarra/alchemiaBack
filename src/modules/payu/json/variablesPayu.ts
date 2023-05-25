import { ConfigService } from '@nestjs/config/dist';
import * as crypto from 'crypto';
import { ICliente } from 'src/interfaces/cliente.interface';
import { IPayU, IPayUTarjeta } from 'src/interfaces/payU.interface';
import { IPedido } from 'src/interfaces/pedido.interface';
const configService = new ConfigService();

export const bodyPayu = {
    "laguage": "es",
    "command": "SUBMIT_TRANSACTION",
    "merchant": {
       "apiKey": configService.get('PAYU_API_KEY'),
       "apiLogin": configService.get('PAYU_API_LOGIN')
    },
    "transaction": {
       "order": {
          "accountId": configService.get('PAYU_ACOUNT_ID'),
          "referenceCode": "PRODUCT_TEST_2021-06-21T16:39:10.965Z",
          "description": "Alchemia",
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
                "state": "Lima",
                "country": "PE",
                "postalCode": "000000",
                "phone": "7563126"
             }
          },
          "shippingAddress": {
             "street1": "Av. Isabel La Católica 103-La Victoria",
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
             "street1": "Av. Isabel La Católica 103-La Victoria",
             "street2": "125544",
             "city": "Lima",
             "state": "Lima",
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

export function getBodyPago(datosTarjeta : IPayUTarjeta, cliente : ICliente, lastClienteId: number, pedido : IPedido) {
   const bodyToExport = bodyPayu;
   const randomString = crypto.randomBytes(4).toString('hex');
   const referenceCode = `Alchemia${randomString.substring(0, 7)}${randomString.substring(7)}`;

   bodyToExport.transaction.order.referenceCode = referenceCode;
   bodyToExport.transaction.order.additionalValues.TX_VALUE.value = pedido.total;

   bodyToExport.transaction.order.buyer.merchantBuyerId = (lastClienteId + 1).toString();
   bodyToExport.transaction.order.buyer.fullName = cliente.nombre + cliente.apellido;
   bodyToExport.transaction.order.buyer.emailAddress = cliente.email;
   bodyToExport.transaction.order.buyer.contactPhone = cliente.telefono;

   bodyToExport.transaction.order.buyer.shippingAddress.street1 = cliente.direccion;
   bodyToExport.transaction.order.buyer.shippingAddress.street2 = cliente.referencia;
   bodyToExport.transaction.order.buyer.shippingAddress.phone = cliente.telefono;

   bodyToExport.transaction.order.shippingAddress.street1 = cliente.direccion;
   bodyToExport.transaction.order.shippingAddress.street2 = cliente.referencia;
   bodyToExport.transaction.order.shippingAddress.phone = cliente.telefono;

   bodyToExport.transaction.payer.merchantPayerId = (lastClienteId + 1).toString();
   bodyToExport.transaction.payer.fullName = cliente.nombre + cliente.apellido;
   bodyToExport.transaction.payer.emailAddress = cliente.email;
   bodyToExport.transaction.payer.contactPhone = cliente.telefono;

   bodyToExport.transaction.payer.billingAddress.street1 = cliente.direccion;
   bodyToExport.transaction.payer.billingAddress.street2 = cliente.referencia;
   bodyToExport.transaction.payer.billingAddress.phone = cliente.telefono;

   bodyToExport.transaction.creditCard.number = datosTarjeta.numeroTarjeta;
   bodyToExport.transaction.creditCard.securityCode = datosTarjeta.cvv;
   bodyToExport.transaction.creditCard.expirationDate = datosTarjeta.fechaVencimiento;
   bodyToExport.transaction.creditCard.name = datosTarjeta.nombreTarjeta;

   bodyToExport.transaction.paymentMethod = datosTarjeta.tipoBanco;

   return bodyToExport;
}