import { Body, Controller, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  public async registerUser(@Body() body:UserDTO){
    return await this.userService.createUser(body);
  }

  @Get('all')
  public async findAllUsers()
  {
    return await this.userService.findUsers();
  }

  @Get(':id')
  public async findUserById(@Param('id') id: string){
    return await this.userService.findUserById(id);
  }

  @Put('edit/:id')
  public async updateUser(@Body() body: UserUpdateDTO, @Param('id') id:string){
    return await this.userService.updateUser(body, id);
  }

  @Delete(':id')
  public async deleteUser(@Param('id') id:string){
    return await this.userService.deleteUser(id);
  }

  @Get('all/cats')
  @HttpCode(204)
  findAll(): string {
    return 'This action returns all cats';
  }

  
}
