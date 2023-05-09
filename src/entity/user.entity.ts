import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @Column()
    role: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;


}
