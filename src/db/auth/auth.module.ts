import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import * as process from "process";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt-strategy";

@Module({
  imports:[UsersModule,
  JwtModule.register({
    global:true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRE },
  }),
  PassportModule.register({ defaultStrategy: 'jwt' })],

  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
