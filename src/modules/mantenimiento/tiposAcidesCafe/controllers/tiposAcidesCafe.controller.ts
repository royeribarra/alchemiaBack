import { Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { TiposAcidesCafeService } from '../services/tiposAcidesCafe.service';
import { TipoAcidesCafeDTO, TipoAcidesCafeUpdatedDTO } from '../dto/tipoAcidesCafe.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('tipos-acides')
export class TiposAcidesCafeController {
  constructor(private readonly acidesService: TiposAcidesCafeService) {}

  @Post('create')
  public async registerTipoVariedad(@Body() body:TipoAcidesCafeDTO){
    return await this.acidesService.createTipoVariedad(body);
  }

  @Get('all')
  public async findAllTiposVariedad()
  {
    return await this.acidesService.findTiposVariedad();
  }

  @Get(':id')
  public async findTipoVariedadById(@Param('id') id: string){
    return await this.acidesService.findTipoVariedadById(id);
  }

  @Put('edit/:id')
  public async updateTipoVariedad(@Body() body: TipoAcidesCafeUpdatedDTO, @Param('id') id:string){
    return await this.acidesService.updateTipoVariedad(body, id);
  }

  @Delete(':id')
  public async deleteTipoVariedad(@Param('id') id:string){
    return await this.acidesService.deleteTipoVariedad(id);
  }
}
