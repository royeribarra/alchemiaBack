import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { TiposCafeService } from '../services/tiposCafe.service';
import { TipoCafeDTO, TipoCafeUpdatedDTO } from '../dto/tipoCafe.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('tipos-cafe')
export class TiposCafeController {
  constructor(private readonly molidoService: TiposCafeService) {}

  @Post('create')
  public async registerTipoVariedad(@Body() body:TipoCafeDTO){
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
  public async updateTipoVariedad(@Body() body: TipoCafeUpdatedDTO, @Param('id') id:string){
    return await this.molidoService.updateTipoVariedad(body, id);
  }

  @Delete(':id')
  public async deleteTipoVariedad(@Param('id') id:string){
    return await this.molidoService.deleteTipoVariedad(id);
  }
}
