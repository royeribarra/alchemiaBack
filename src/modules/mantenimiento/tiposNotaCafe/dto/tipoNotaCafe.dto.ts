import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class TipoNotaCafeDTO{
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descricpion: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;
}

export class TipoNotaCafeUpdatedDTO{
  @IsOptional()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsNumber()
  valor: number;
}