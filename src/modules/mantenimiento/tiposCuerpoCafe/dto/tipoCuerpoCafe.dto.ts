import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class TipoCuerpoCafeDTO{
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}

export class TipoCuerpoCafeUpdatedDTO{
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  value: number;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}