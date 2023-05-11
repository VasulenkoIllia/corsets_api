import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RoleEnum } from "../db/roles/role.enum";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true, default: "login"})
    login: string

    @Column({unique: true, default: "email"})
    email: string

    @Column({unique: true, default: "password"})
    password:string

    @Column({
        type: 'enum',
        enum: RoleEnum,
        default: RoleEnum.User,
        array: true,
    })
    roles: RoleEnum[];



}
