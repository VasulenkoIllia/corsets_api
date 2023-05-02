import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AppDataSource } from "./data-source";


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource
    //   {
    // type: (process.env.DB_TYPE) as 'mysql',
    // host: process.env.DB_HOST,
    // port: Number(process.env.DB_PORT),
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE,
    // synchronize: true,
    // logging: true,
    // entities: [UserEntity],
    // migrations: [],
    // subscribers: [],
    // }
    //   AppDataSource

  ),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

