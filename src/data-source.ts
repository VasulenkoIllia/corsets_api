import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserEntity } from "./entity/user.entity."

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [UserEntity],
    migrations: [],
    subscribers: [],
})
