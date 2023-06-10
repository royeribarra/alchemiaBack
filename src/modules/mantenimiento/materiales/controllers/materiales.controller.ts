import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { MaterialesService } from '../services/materiales.service';
import { MaterialDTO, MaterialUpdatedDTO } from '../dto/material.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('materiales')
export class MaterialesController {
  constructor(private readonly materialService: MaterialesService) {}

  @Post('register')
  public async registerMaterial(@Body() body:MaterialDTO){
    return await this.materialService.createMaterial(body);
  }

  @Get('all')
  public async findAllMateriales()
  {
    return await this.materialService.findMateriales();
  }

  @Get(':id')
  public async findMaterialById(@Param('id') id: string){
    return await this.materialService.findMaterialById(id);
  }

  @Put('edit/:id')
  public async updateMaterial(@Body() body: MaterialUpdatedDTO, @Param('id') id:string){
    return await this.materialService.updateMaterial(body, id);
  }

  @Delete(':id')
  public async deleteMaterial(@Param('id') id:string){
    return await this.materialService.deleteMaterial(id);
  }
}
