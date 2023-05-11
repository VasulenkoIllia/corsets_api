import { Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { HelpersService } from "../helpers/helpers.service";
import { UserEntity } from "../../entity/user.entity";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user:UserEntity = await this.usersService.findOneUserByLogin(login);
    if (user && await HelpersService.checkHashData(pass, user.password )) {
      return user;
    }
    else {
      throw new NotFoundException(`Login ${login} and password ${pass} wrong`);
    }

  }
    
  async signIn(signInDto: SignInDto): Promise<any> {
    const user = await this.validateUser(signInDto.login, signInDto.password)
    const payload = { login: user.login, sub: user.id, roles: user.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };




  }
}
