import {MigrationInterface, QueryRunner} from "typeorm";

export class seedProduct1626245151254 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into("Product")
            .values([
                { name: "Product A" },
                { name: "Product B" },
                { name: "Product C" },
                { name: "Product D" },
                { name: "Product E" }
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
                .manager
                .createQueryBuilder()
                .delete()
                .from("Product")
                .execute()
    }

}
