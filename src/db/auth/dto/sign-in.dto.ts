import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "../../users/dto/create-user.dto";

export class SignInDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsString()
  login: string;


  @ApiProperty()
  @IsString()
  password: string;


}