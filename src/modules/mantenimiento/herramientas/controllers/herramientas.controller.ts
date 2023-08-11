import { Body, Controller, Get, Param, Post, Put, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { HerramientaDTO, HerramientaUpdateDTO } from '../dto/herramienta.dto';
import { Delete } from '@nestjs/common/decorators';
import { HerramientasService } from '../services/herramientas.service';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('herramientas')
export class HerramientasController {
  constructor(private readonly herramientasService: HerramientasService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  public async registerHerramienta(@UploadedFile() file, @Body() body:HerramientaDTO, @Res() response: Response)
  {
    if(!file)
    {
      return response.json({
        message: 'Por favor seleccione una imagen.',
        state: true
      });
    }
    
    const newBody = {
      ...body,
      imagen: '/public/imagenes/herramientas/' + file.filename
    }
    const newHerramienta = await this.herramientasService.createHerramienta(newBody);

    if(newHerramienta){
      return response.json({
        message: 'Herramienta creada correctamente.',
        state: true
      });
    }

    return response.json({
      message: 'Error al crear herramienta.',
      state: false
    });
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
