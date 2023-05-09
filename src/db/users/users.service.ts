import { Injectable, NotFoundException } from "@nestjs/common";
import { UserEntity } from "../../entity/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { HelpersService } from "../helpers/helpers.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) {
  }
  async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const password: string = await HelpersService.hashData(createUserDto.password);
    return this.userRepo.save({
      ...createUserDto,
      password
    });
  }

  async findAllUser(): Promise<UserEntity[] | null> {
    return this.userRepo.find();
  }

  async findOneUser (id: number): Promise<UserEntity | null> {
    const user = await this.userRepo.findOneBy({ id })
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`)
    }
    return this.userRepo.findOneBy({ id });
  }

  async findOneUserByEmail (email: string): Promise<UserEntity | null> {
    const user = await this.userRepo.findOneBy({ email })
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`)
    }
    return this.userRepo.findOneBy({ email });
  }
  async findOneUserByLogin (login: string): Promise<UserEntity | null> {
    const user = await this.userRepo.findOneBy({ login })
    if (!user) {
      throw new NotFoundException(`User with login ${login} not found`)
    }
    return this.userRepo.findOneBy({ login });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
      await this.userRepo.update(id, updateUserDto);
        return this.userRepo.findOneBy({ id } );

  }

  async removeUser(id: number) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const result = await this.userRepo.delete(id);
    return {
      success: result.affected > 0,
    }
  }
}

