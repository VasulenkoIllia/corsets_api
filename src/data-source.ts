import * as dotenv from "dotenv";
import "reflect-metadata";
import * as path from "path";

dotenv.config()

export const AppDataSource  = {
    type: (process.env.DB_TYPE) as "mysql" | "mariadb",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [path.join(__dirname, "../", "entities", "*.entity.{js,ts}")],
    migrations: [path.join(__dirname, "../", "migrations", "*.{js,ts}")],
    subscribers: [],
}


