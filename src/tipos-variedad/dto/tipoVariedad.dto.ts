import { IsNumber, IsOptional, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ROLES } from 'src/constants/roles';

export class TipoVariedadDTO{
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @IsNotEmpty()
  role: ROLES;
}

export class TipoVariedaUpdatedDTO{
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