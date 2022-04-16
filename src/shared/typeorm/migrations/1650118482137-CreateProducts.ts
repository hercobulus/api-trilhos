import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateProducts1650118482137 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'image_small',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'image_original',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'quantity',
            type: 'int',
          },
          {
            name: 'categoryId',
            type: 'uuid',
          },
          {
            name: 'storeId',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('products', [
      new TableForeignKey({
        columnNames: ['categoryId'],
        referencedTableName: 'categories',
        referencedColumnNames: ['id'],
      }),
      new TableForeignKey({
        columnNames: ['storeId'],
        referencedTableName: 'stores',
        referencedColumnNames: ['id'],
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
