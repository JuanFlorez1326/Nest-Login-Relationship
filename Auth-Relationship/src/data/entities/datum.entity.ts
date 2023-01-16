import { User } from "src/auth/entities/auth.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Data {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('numeric', { default: 0 })
    price: number;

    @Column('text', { nullable: true })
    description: string;

    @Column('text', { nullable: true })
    imageURL: string;

    //User
    @ManyToOne(
        () => User,
        user => user.data,
        { eager: true }
    )
    user: User;
}
