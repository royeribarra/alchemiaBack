import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { TiposAromaCafeService } from '../services/tiposAromaCafe.service';
import { TipoAromaCafeDTO, TipoAromaCafeUpdatedDTO } from '../dto/tipoAromaCafe.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('tipos-aroma')
export class TiposAromaCafeController {
  constructor(private readonly aromaService: TiposAromaCafeService) {}

  @Post('create')
  public async registerTipoVariedad(@Body() body:TipoAromaCafeDTO){
    return await this.aromaService.createTipoVariedad(body);
  }

  @Get('all')
  public async findAllTiposVariedad()
  {
    return await this.aromaService.findTiposVariedad();
  }

  @Get(':id')
  public async findTipoVariedadById(@Param('id') id: string){
    return await this.aromaService.findTipoVariedadById(id);
  }

  @Put('edit/:id')
  public async updateTipoVariedad(@Body() body: TipoAromaCafeUpdatedDTO, @Param('id') id:string){
    return await this.aromaService.updateTipoVariedad(body, id);
  }

  @Delete(':id')
  public async deleteTipoVariedad(@Param('id') id:string){
    return await this.aromaService.deleteTipoVariedad(id);
  }
}
