import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Machine {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    locacationName: string;
}
