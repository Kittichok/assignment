import {MigrationInterface, QueryRunner} from "typeorm";

export class seedMachine1626247865989 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into("Machine")
            .values([
                { name: "Machine A", locationName: "location A" },
                { name: "Machine B", locationName: "location B"  },
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
                .manager
                .createQueryBuilder()
                .delete()
                .from("Machine")
                .execute()
    }

}
