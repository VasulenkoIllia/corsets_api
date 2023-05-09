import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({default: "login"})
  login: string;

  @ApiProperty({default: "email"})
  email: string;

  @ApiProperty({default: "password"})
  password: string;

  @ApiProperty({default: "user"})
  role: string;
}
