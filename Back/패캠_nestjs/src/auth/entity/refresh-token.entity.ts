import { User } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RefreshToken{
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    token : string;

    @CreateDateColumn({name : 'create_at'})
    createAt : Date;

    @CreateDateColumn({name : 'create_at'})
    updateAt : Date;

    @OneToOne(() => User, (user) => user.refreshToken)
    @JoinColumn({name : 'user_id'})
    user : User;
}