import { Controller, Get, HttpCode, Param  } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('all/cats')
  @HttpCode(204)
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
