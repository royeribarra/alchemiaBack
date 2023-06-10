import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { TiposVariedadService } from '../services/tiposVariedad.service';
import { TipoVariedadDTO, TipoVariedaUpdatedDTO } from '../dto/tipoVariedad.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('tipos-variedad')
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

  @Delete(':id')
  public async deleteTipoVariedad(@Param('id') id:string){
    return await this.variedadService.deleteTipoVariedad(id);
  }
}
