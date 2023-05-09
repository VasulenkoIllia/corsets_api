import { ApiProperty } from "@nestjs/swagger";
import { RoleEnum } from "../../roles/role.enum";

export class CreateUserDto {
  @ApiProperty({default: "login"})
  login: string;

  @ApiProperty({default: "email"})
  email: string;

  @ApiProperty({default: "password"})
  password: string;

  @ApiProperty({default: RoleEnum.User})
  roles: RoleEnum[];
}
