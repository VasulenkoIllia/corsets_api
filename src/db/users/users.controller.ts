import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";

@ApiTags('users')

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
  @Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.usersService.createUser({
      ...createUserDto,
    });
  }

  @Get()
  findAllUser(): Promise<CreateUserDto[]> {
    return this.usersService.findAllUser();
  }

  @Get(':id')
  async findOneUser(@Param('id') id: number): Promise<CreateUserDto> {
    return this.usersService.findOneUser(id);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }

  @Get('login/:login')
  async findOneUserByLogin(@Param('login') login: string): Promise<CreateUserDto> {
    return this.usersService.findOneUserByLogin(login);
  }

  @Get('email/:email')
  async findOneUserByEmail(@Param('email') email: string): Promise<CreateUserDto> {
    return this.usersService.findOneUserByEmail(email);
  }
}
