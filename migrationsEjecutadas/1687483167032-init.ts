import { MigrationInterface, QueryRunner } from "typeorm";

export class init1687483167032 implements MigrationInterface {
    name = 'init1687483167032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`productos_rarezas_tipos_rareza_cafe\` DROP FOREIGN KEY \`FK_8bf793cd6ade590640ce6affa15\``);
        await queryRunner.query(`CREATE TABLE \`tiposCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`imagen\` varchar(255) NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposAromaCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`valor\` int NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposAcidesCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`valor\` int NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposRarezaCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposPostGustoCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposCuerpoCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposMolidoCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposNotaCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposTuesteCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`orden\` int NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`distritos\` CHANGE \`id\` \`id\` bigint UNSIGNED NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`distritos\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`distritos\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`distritos\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`distritos\` CHANGE \`created_at\` \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`distritos\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`distritos\` CHANGE \`nombre\` \`nombre\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`distritos\` DROP COLUMN \`tarifa\``);
        await queryRunner.query(`ALTER TABLE \`distritos\` ADD \`tarifa\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`distritos\` CHANGE \`is_active\` \`is_active\` tinyint NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE \`productos_rarezas_tipos_rareza_cafe\` ADD CONSTRAINT \`FK_8bf793cd6ade590640ce6affa15\` FOREIGN KEY (\`rareza_id\`) REFERENCES \`tiposRarezaCafe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`productos_rarezas_tipos_rareza_cafe\` DROP FOREIGN KEY \`FK_8bf793cd6ade590640ce6affa15\``);
        await queryRunner.query(`ALTER TABLE \`distritos\` CHANGE \`is_active\` \`is_active\` tinyint NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE \`distritos\` DROP COLUMN \`tarifa\``);
        await queryRunner.query(`ALTER TABLE \`distritos\` ADD \`tarifa\` decimal(10,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`distritos\` CHANGE \`nombre\` \`nombre\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`distritos\` CHANGE \`updated_at\` \`updated_at\` timestamp(0) NULL`);
        await queryRunner.query(`ALTER TABLE \`distritos\` CHANGE \`created_at\` \`created_at\` timestamp(0) NULL`);
        await queryRunner.query(`ALTER TABLE \`distritos\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`distritos\` ADD \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`distritos\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`distritos\` CHANGE \`id\` \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`DROP TABLE \`tiposTuesteCafe\``);
        await queryRunner.query(`DROP TABLE \`tiposNotaCafe\``);
        await queryRunner.query(`DROP TABLE \`tiposMolidoCafe\``);
        await queryRunner.query(`DROP TABLE \`tiposCuerpoCafe\``);
        await queryRunner.query(`DROP TABLE \`tiposPostGustoCafe\``);
        await queryRunner.query(`DROP TABLE \`tiposRarezaCafe\``);
        await queryRunner.query(`DROP TABLE \`tiposAcidesCafe\``);
        await queryRunner.query(`DROP TABLE \`tiposAromaCafe\``);
        await queryRunner.query(`DROP TABLE \`tiposCafe\``);
        await queryRunner.query(`ALTER TABLE \`productos_rarezas_tipos_rareza_cafe\` ADD CONSTRAINT \`FK_8bf793cd6ade590640ce6affa15\` FOREIGN KEY (\`rareza_id\`) REFERENCES \`tiposrarezacafe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
