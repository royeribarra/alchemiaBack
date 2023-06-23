import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { TiposPostGustoCafeService } from '../services/tiposPostGustoCafe.service';
import { TipoPostGustoCafeDTO, TipoPostGustoCafeUpdatedDTO } from '../dto/tipoPostGustoCafe.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('tipos-post-gusto')
export class TiposPostGustoCafeController {
  constructor(private readonly gustoService: TiposPostGustoCafeService) {}

  @Post('create')
  public async registerTipoVariedad(@Body() body:TipoPostGustoCafeDTO){
    return await this.gustoService.createTipoVariedad(body);
  }

  @Get('all')
  public async findAllTiposVariedad()
  {
    return await this.gustoService.findTiposVariedad();
  }

  @Get(':id')
  public async findTipoVariedadById(@Param('id') id: string){
    return await this.gustoService.findTipoVariedadById(id);
  }

  @Put('edit/:id')
  public async updateTipoVariedad(@Body() body: TipoPostGustoCafeUpdatedDTO, @Param('id') id:string){
    return await this.gustoService.updateTipoVariedad(body, id);
  }

  @Delete(':id')
  public async deleteTipoVariedad(@Param('id') id:string){
    return await this.gustoService.deleteTipoVariedad(id);
  }
}
