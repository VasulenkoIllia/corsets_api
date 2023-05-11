import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AppDataSource } from "./data-source";
import { UsersModule } from "./db/users/users.module";
import { AuthModule } from "./db/auth/auth.module";


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource
  ),
    UsersModule,
    AuthModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

