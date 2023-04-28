import { Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { HerramientaDTO, HerramientaUpdateDTO } from '../dto/herramienta.dto';
import { Delete } from '@nestjs/common/decorators';
import { HerramientasService } from '../services/herramientas.service';

@Controller('herramientas')
export class HerramientasController {
  constructor(private readonly herramientasService: HerramientasService) {}

  @Post('register')
  public async registerHerramienta(@Body() body:HerramientaDTO){
    return await this.herramientasService.createHerramienta(body);
  }

  @Get('all')
  public async findAllHerramientas()
  {
    return await this.herramientasService.findHerramientas();
  }

  @Get(':id')
  public async findHerramientaById(@Param('id') id: string){
    return await this.herramientasService.findHerramientaById(id);
  }

  @Put('edit/:id')
  public async updateHerramienta(@Body() body: HerramientaUpdateDTO, @Param('id') id:string){
    return await this.herramientasService.updateHerramienta(body, id);
  }

  @Delete(':id')
  public async deleteHerramienta(@Param('id') id:string){
    return await this.herramientasService.deleteHerramienta(id);
  }

}
