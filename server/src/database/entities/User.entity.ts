import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    user_type: string;

    @Column()
    imageURL: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}