import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class HelpersService {

  static async hashData(data:string): Promise<string>{
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(data, salt)
  }
  static checkHashData(hash, data): Promise<boolean>{
    return bcrypt.compare(data, hash)
  }
  static async checkTransmittedData(repository, id): Promise<any>{
    const data = await repository.findOne(id);
    if(!data){
      throw new Error('Record by ID#' + id + ' do not found');
    }
    return data;
  }

}
