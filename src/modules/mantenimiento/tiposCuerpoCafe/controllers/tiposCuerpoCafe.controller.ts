import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { TiposCuerpoCafeService } from '../services/tiposCuerpoCafe.service';
import { TipoCuerpoCafeDTO, TipoCuerpoCafeUpdatedDTO } from '../dto/tipoCuerpoCafe.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('tipos-cuerpo')
export class TiposCuerpoCafeController {
  constructor(private readonly cuerpoService: TiposCuerpoCafeService) {}

  @Post('create')
  public async registerTipoVariedad(@Body() body:TipoCuerpoCafeDTO){
    return await this.cuerpoService.createTipoVariedad(body);
  }

  @Get('all')
  public async findAllTiposVariedad()
  {
    return await this.cuerpoService.findTiposVariedad();
  }

  @Get(':id')
  public async findTipoVariedadById(@Param('id') id: string){
    return await this.cuerpoService.findTipoVariedadById(id);
  }

  @Put('edit/:id')
  public async updateTipoVariedad(@Body() body: TipoCuerpoCafeUpdatedDTO, @Param('id') id:string){
    return await this.cuerpoService.updateTipoVariedad(body, id);
  }

  @Delete(':id')
  public async deleteTipoVariedad(@Param('id') id:string){
    return await this.cuerpoService.deleteTipoVariedad(id);
  }
}
