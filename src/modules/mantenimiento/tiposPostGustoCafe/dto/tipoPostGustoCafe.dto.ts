import { IsOptional, IsNotEmpty, IsString, IsBoolean, IsNumber } from 'class-validator';

export class TipoPostGustoCafeDTO{
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

export class TipoPostGustoCafeUpdatedDTO{
  @IsOptional()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}