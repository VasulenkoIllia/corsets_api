import { Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { HelpersService } from "../helpers/helpers.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService) {}


    
  async signIn(login: string, pass: string) {
    const user = await this.usersService.findOneUserByLogin(login);
    const passwordHash = await HelpersService.hashData(pass);
    if (user && user.password !== passwordHash) {
      throw new NotFoundException(`Login ${login} and password ${pass} wrong`);
    }
    const { password, ...result } = user;

    // TODO: Generate a JWT and return it here
    // instead of the user object

    return result;

  }
}
