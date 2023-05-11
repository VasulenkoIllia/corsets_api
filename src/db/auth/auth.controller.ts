import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { SignInDto } from "./dto/sign-in.dto";
import { Roles } from "../roles/roles.decorator";
import { RoleEnum } from "../roles/role.enum";

@ApiTags("auth")
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post("/login")
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }
  @Roles(RoleEnum.Admin)
  @Get("/me")
  async me() {
    return "me";
  }
}
