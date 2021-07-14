import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class MachineStock {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    machineId: number;
  
    @Column()
    productId: number;
    
    @Column()
    stock: number;
}
