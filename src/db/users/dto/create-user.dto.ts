import { ApiProperty } from "@nestjs/swagger";
import { RoleEnum } from "../../roles/role.enum";
import { IsEnum, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({default: "login"})
  @IsString()
  login: string;

  @ApiProperty({default: "email"})
  @IsString()
  email: string;

  @ApiProperty({default: "password"})
  @IsString()
  password: string;

  @ApiProperty({default: RoleEnum.User})
  @IsEnum(RoleEnum)
  roles: RoleEnum[];
}
