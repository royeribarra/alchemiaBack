import { IsOptional, IsNotEmpty, IsString, IsBoolean, IsNumber } from 'class-validator';

export class TipoAcidesCafeDTO{
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;
}

export class TipoAcidesCafeUpdatedDTO{
  @IsOptional()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion: string;
}