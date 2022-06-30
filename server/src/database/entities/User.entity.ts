import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}