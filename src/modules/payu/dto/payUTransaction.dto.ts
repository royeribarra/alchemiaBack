import { IsNumber, IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class PayUTransactionDTO{
  @IsNotEmpty()
  @IsNumber()
  tipo: number;

  @IsOptional()
  @IsNumber()
  pedidoId: number;

  @IsNotEmpty()
  @IsString()
  responseCode: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  orderId: string;

  @IsOptional()
  @IsString()
  transactionId: string;

  @IsOptional()
  @IsString()
  authorizationCode: string;

  @IsOptional()
  @IsString()
  paymentNetworkResponseErrorMessage: string;
}

export class PayUTransactionDeclineDTO{
  @IsNotEmpty()
  @IsString()
  tipo: number;

  @IsNotEmpty()
  @IsString()
  responseCode: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  paymentNetworkResponseErrorMessage: string;
}