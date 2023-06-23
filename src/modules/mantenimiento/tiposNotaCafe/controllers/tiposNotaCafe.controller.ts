import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { TiposNotaCafeService } from '../services/tiposNotaCafe.service';
import { TipoNotaCafeDTO, TipoNotaCafeUpdatedDTO } from '../dto/tipoNotaCafe.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('tipos-nota')
export class TiposNotaCafeController {
  constructor(private readonly notaService: TiposNotaCafeService) {}

  @Post('create')
  public async registerTipoVariedad(@Body() body:TipoNotaCafeDTO){
    return await this.notaService.createTipoVariedad(body);
  }

  @Get('all')
  public async findAllTiposVariedad()
  {
    return await this.notaService.findTiposVariedad();
  }

  @Get(':id')
  public async findTipoVariedadById(@Param('id') id: string){
    return await this.notaService.findTipoVariedadById(id);
  }

  @Put('edit/:id')
  public async updateTipoVariedad(@Body() body: TipoNotaCafeUpdatedDTO, @Param('id') id:string){
    return await this.notaService.updateTipoVariedad(body, id);
  }

  @Delete(':id')
  public async deleteTipoVariedad(@Param('id') id:string){
    return await this.notaService.deleteTipoVariedad(id);
  }
}
