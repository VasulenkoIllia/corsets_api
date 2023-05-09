import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AppDataSource } from "./data-source";
import { UsersModule } from "./db/users/users.module";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./db/roles/roles.guard";


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource
  ),
    UsersModule
],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass:RolesGuard
    },
    AppService],
})
export class AppModule {}

