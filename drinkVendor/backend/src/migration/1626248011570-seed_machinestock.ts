import {MigrationInterface, QueryRunner} from "typeorm";
import { Machine } from "../entity/Machine";
import { MachineStock } from "../entity/MachineStock";
import { Product } from "../entity/Product";

export class seedMachinestock1626248011570 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const machine = await queryRunner
            .manager
            .getRepository(Machine)
            .createQueryBuilder()
            .where("name = :name", { name: "Machine A" })
            .getOne();
        
        const product = await queryRunner
            .manager
            .getRepository(Product)
            .createQueryBuilder()
            .where("name = :name", { name: "Product A" })
            .getOne();

        await queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into(MachineStock)
            .values([
                { machineId: machine.id, productId: product.id, stock: 11 },
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
                .manager
                .createQueryBuilder()
                .delete()
                .from("MachineStock")
                .execute()
    }

}
