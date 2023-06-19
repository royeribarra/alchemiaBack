import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { TiposVariedadService } from '../services/tiposRarezaCafe.service';
import { TipoVariedadDTO, TipoVariedaUpdatedDTO } from '../dto/tipoRarezaCafe.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('tipos-rareza-cafe')
export class TiposVariedadController {
  constructor(private readonly variedadService: TiposVariedadService) {}

  @Post('create')
  public async registerTipoVariedad(@Body() body:TipoVariedadDTO){
    return await this.variedadService.createTipoVariedad(body);
  }

  @Get('all')
  public async findAllTiposVariedad()
  {
    return await this.variedadService.findTiposVariedad();
  }

  @Get(':id')
  public async findTipoVariedadById(@Param('id') id: string){
    return await this.variedadService.findTipoVariedadById(id);
  }

  @Put('edit/:id')
  public async updateTipoVariedad(@Body() body: TipoVariedaUpdatedDTO, @Param('id') id:string){
    return await this.variedadService.updateTipoVariedad(body, id);
  }

  @Get('value/:value')
  public async findTipoRarezaByValue(@Param('value') value:string){
    return await this.variedadService.findTipoVariedadByValue(value);
  }

  @Delete(':id')
  public async deleteTipoVariedad(@Param('id') id:string){
    return await this.variedadService.deleteTipoVariedad(id);
  }
}
