import { IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class TipoPostGustoCafeDTO{
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
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