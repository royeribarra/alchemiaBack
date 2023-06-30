import { MigrationInterface, QueryRunner } from "typeorm";

export class init1687486189753 implements MigrationInterface {
    name = 'init1687486189753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_8bf793cd6ade590640ce6affa15\` ON \`productos_rarezas_tipos_rareza_cafe\``);
        await queryRunner.query(`CREATE TABLE \`tiposCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`imagen\` varchar(255) NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposRarezaCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposAromaCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`valor\` int NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`productos_tipos_aroma_cafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`producto_id\` int NULL, \`aroma_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposCuerpoCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`productos_tipos_cuerpo_cafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`producto_id\` int NULL, \`cuerpo_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposNotaCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`productos_tipos_nota_cafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`producto_id\` int NULL, \`nota_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposAcidesCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`valor\` int NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`productos_tipos_acides_cafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`producto_id\` int NULL, \`acidez_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposPostGustoCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`productos_tipos_postgusto_cafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`producto_id\` int NULL, \`gusto_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposMolidoCafe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`nombre\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
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
        await queryRunner.query(`ALTER TABLE \`productos_tipos_aroma_cafe\` ADD CONSTRAINT \`FK_c06a060e5134096e51413e9d399\` FOREIGN KEY (\`producto_id\`) REFERENCES \`productos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_aroma_cafe\` ADD CONSTRAINT \`FK_6f6fbe30f2aa79daad9fae9aa6e\` FOREIGN KEY (\`aroma_id\`) REFERENCES \`tiposAromaCafe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_cuerpo_cafe\` ADD CONSTRAINT \`FK_e78af1988ab5e6bfce7f7a293ee\` FOREIGN KEY (\`producto_id\`) REFERENCES \`productos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_cuerpo_cafe\` ADD CONSTRAINT \`FK_d0b181f679556727a3e920b62a1\` FOREIGN KEY (\`cuerpo_id\`) REFERENCES \`tiposCuerpoCafe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_nota_cafe\` ADD CONSTRAINT \`FK_ea80550b453b4b2deadc588a33a\` FOREIGN KEY (\`producto_id\`) REFERENCES \`productos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_nota_cafe\` ADD CONSTRAINT \`FK_ee20141a1289d8481cf8c2cc759\` FOREIGN KEY (\`nota_id\`) REFERENCES \`tiposNotaCafe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_acides_cafe\` ADD CONSTRAINT \`FK_df7ea928e4292e56986601776ef\` FOREIGN KEY (\`producto_id\`) REFERENCES \`productos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_acides_cafe\` ADD CONSTRAINT \`FK_24810f7c018a9198849b379da17\` FOREIGN KEY (\`acidez_id\`) REFERENCES \`tiposAcidesCafe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_postgusto_cafe\` ADD CONSTRAINT \`FK_3e6fa6c1600b6f0adc9f30efc29\` FOREIGN KEY (\`producto_id\`) REFERENCES \`productos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_postgusto_cafe\` ADD CONSTRAINT \`FK_1ad3987170b887329c6420a7c71\` FOREIGN KEY (\`gusto_id\`) REFERENCES \`tiposPostGustoCafe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`productos_tipos_postgusto_cafe\` DROP FOREIGN KEY \`FK_1ad3987170b887329c6420a7c71\``);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_postgusto_cafe\` DROP FOREIGN KEY \`FK_3e6fa6c1600b6f0adc9f30efc29\``);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_acides_cafe\` DROP FOREIGN KEY \`FK_24810f7c018a9198849b379da17\``);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_acides_cafe\` DROP FOREIGN KEY \`FK_df7ea928e4292e56986601776ef\``);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_nota_cafe\` DROP FOREIGN KEY \`FK_ee20141a1289d8481cf8c2cc759\``);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_nota_cafe\` DROP FOREIGN KEY \`FK_ea80550b453b4b2deadc588a33a\``);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_cuerpo_cafe\` DROP FOREIGN KEY \`FK_d0b181f679556727a3e920b62a1\``);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_cuerpo_cafe\` DROP FOREIGN KEY \`FK_e78af1988ab5e6bfce7f7a293ee\``);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_aroma_cafe\` DROP FOREIGN KEY \`FK_6f6fbe30f2aa79daad9fae9aa6e\``);
        await queryRunner.query(`ALTER TABLE \`productos_tipos_aroma_cafe\` DROP FOREIGN KEY \`FK_c06a060e5134096e51413e9d399\``);
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
        await queryRunner.query(`DROP TABLE \`tiposMolidoCafe\``);
        await queryRunner.query(`DROP TABLE \`productos_tipos_postgusto_cafe\``);
        await queryRunner.query(`DROP TABLE \`tiposPostGustoCafe\``);
        await queryRunner.query(`DROP TABLE \`productos_tipos_acides_cafe\``);
        await queryRunner.query(`DROP TABLE \`tiposAcidesCafe\``);
        await queryRunner.query(`DROP TABLE \`productos_tipos_nota_cafe\``);
        await queryRunner.query(`DROP TABLE \`tiposNotaCafe\``);
        await queryRunner.query(`DROP TABLE \`productos_tipos_cuerpo_cafe\``);
        await queryRunner.query(`DROP TABLE \`tiposCuerpoCafe\``);
        await queryRunner.query(`DROP TABLE \`productos_tipos_aroma_cafe\``);
        await queryRunner.query(`DROP TABLE \`tiposAromaCafe\``);
        await queryRunner.query(`DROP TABLE \`tiposRarezaCafe\``);
        await queryRunner.query(`DROP TABLE \`tiposCafe\``);
        await queryRunner.query(`CREATE INDEX \`FK_8bf793cd6ade590640ce6affa15\` ON \`productos_rarezas_tipos_rareza_cafe\` (\`rareza_id\`)`);
    }

}
