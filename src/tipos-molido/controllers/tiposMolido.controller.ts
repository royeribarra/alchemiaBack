import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { TiposMolidoService } from '../services/tiposMolido.service';
import { TipoMolidoDTO, TipoMolidoUpdatedDTO } from '../dto/tipoMolido.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('tiposMolido')
export class TiposMolidoController {
  constructor(private readonly molidoService: TiposMolidoService) {}

  @Post('create')
  public async registerTipoVariedad(@Body() body:TipoMolidoDTO){
    return await this.molidoService.createTipoVariedad(body);
  }

  @Get('all')
  public async findAllTiposVariedad()
  {
    return await this.molidoService.findTiposVariedad();
  }

  @Get(':id')
  public async findTipoVariedadById(@Param('id') id: string){
    return await this.molidoService.findTipoVariedadById(id);
  }

  @Put('edit/:id')
  public async updateTipoVariedad(@Body() body: TipoMolidoUpdatedDTO, @Param('id') id:string){
    return await this.molidoService.updateTipoVariedad(body, id);
  }

  @Delete(':id')
  public async deleteTipoVariedad(@Param('id') id:string){
    return await this.molidoService.deleteTipoVariedad(id);
  }
}
