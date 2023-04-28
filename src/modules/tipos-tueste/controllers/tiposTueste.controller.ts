import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { TiposTuesteService } from '../services/tiposTueste.service';
import { TipoTuesteDTO, TipoTuesteUpdatedDTO } from '../dto/tipoTueste.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('tipos-tueste')
export class TiposTuesteController {
  constructor(private readonly tuesteService: TiposTuesteService) {}

  @Post('create')
  public async registerTipoVariedad(@Body() body:TipoTuesteDTO){
    return await this.tuesteService.createTipoVariedad(body);
  }

  @Get('all')
  public async findAllTiposVariedad()
  {
    return await this.tuesteService.findTiposVariedad();
  }

  @Get(':id')
  public async findTipoVariedadById(@Param('id') id: string){
    return await this.tuesteService.findTipoVariedadById(id);
  }

  @Put('edit/:id')
  public async updateTipoVariedad(@Body() body: TipoTuesteUpdatedDTO, @Param('id') id:string){
    return await this.tuesteService.updateTipoVariedad(body, id);
  }

  @Delete(':id')
  public async deleteTipoVariedad(@Param('id') id:string){
    return await this.tuesteService.deleteTipoVariedad(id);
  }
}
