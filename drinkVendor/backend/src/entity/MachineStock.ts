import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Machine } from "./Machine";
import { Product } from "./Product";

@Entity()
export class MachineStock {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Machine)
    @JoinColumn()
    machine: Machine;
  
    @OneToOne(() => Product)
    @JoinColumn()
    product: Product;
    
    @Column()
    stock: number;
}
