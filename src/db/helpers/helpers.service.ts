import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { hash } from "bcrypt";

@Injectable()
export class HelpersService {

  static async hashData(data:string): Promise<string>{
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(data, salt)
  }
  static checkHashData(hash, data): Promise<boolean>{
    return bcrypt.compare(data, hash)
  }

}
