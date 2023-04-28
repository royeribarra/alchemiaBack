import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { ClientesService } from '../services/cliente.service';
import { ClienteDTO, ClienteUpdateDTO } from '../dto/cliente.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clienteService: ClientesService) {}

  @Post('register')
  public async registerUser(@Body() body:ClienteDTO){
    return await this.clienteService.createCliente(body);
  }

  @Get('all')
  public async findAllUsers()
  {
    return await this.clienteService.findClientes();
  }

  @Get(':id')
  public async findUserById(@Param('id') id: string){
    return await this.clienteService.findClienteById(id);
  }

  @Put('edit/:id')
  public async updateUser(@Body() body: ClienteUpdateDTO, @Param('id') id:string){
    return await this.clienteService.updateCliente(body, id);
  }

  @Delete(':id')
  public async deleteUser(@Param('id') id:string){
    return await this.clienteService.deleteCliente(id);
  }

  @Get('all/cats')
  @HttpCode(204)
  findAll(): string {
    return 'This action returns all cats';
  }

  
}
