import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({default: "login"})
  @IsString()
  login: string;
  
  @ApiProperty({default: "email"})
  @IsString()
  email: string;
  
}
