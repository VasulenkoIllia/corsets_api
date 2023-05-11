import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { SignInDto } from "./dto/sign-in.dto";

@ApiTags("auth")
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  async validateUser(@Body() signInDto: SignInDto) {
    return this.authService.validateUser(signInDto.login, signInDto.password);
  }


  }

