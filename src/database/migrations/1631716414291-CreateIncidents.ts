import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateIncidents1631716414291 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'incidents',
                columns: [
                    {
                        name:'ong_id',
                        type:'uuid',
                        isNullable:false
                    },
                    {
                        name:'inc_title',
                        type:'varchar',
                        isNullable:false
                    },
                    {
                        name:'inc_desc',
                        type:'varchar',
                        isNullable:false
                    },
                    {
                        name:'inc_value',
                        type:'double',
                        isNullable:false
                    }
                ]
            })
        )
        await queryRunner.createForeignKey(
            'incidents',
            new TableForeignKey({
                name: 'FKIncidentsOng',
                columnNames: ['ong_id'],
                referencedTableName: 'ongs',
                referencedColumnNames: ['id'],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(
            'incidents'
        )
    }

}
