import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ROLES } from 'src/constants/roles';

export class TipoTuesteDTO{
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;

  @IsNotEmpty()
  @IsNumber()
  orden: number;
}

export class TipoTuesteUpdatedDTO{
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  value: number;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  role: ROLES;
}