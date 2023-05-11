import { Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { HelpersService } from "../helpers/helpers.service";
import { UserEntity } from "../../entity/user.entity";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user:UserEntity = await this.usersService.findOneUserByLogin(login);
    if (user && await HelpersService.checkHashData(pass, user.password )) {
      const payload = { login: user.login, sub: user.id, roles: user.roles };
      return  await this.jwtService.signAsync(payload);
    }
    else {
      throw new NotFoundException(`Login ${login} and password ${pass} wrong`);
    }

  }
    
  async signIn(user: any)  {
    const payload = { login: user.login, sub: user.id, roles: user.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };




  }
}
