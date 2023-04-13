import { MigrationInterface, QueryRunner } from "typeorm";

export class init1681343105942 implements MigrationInterface {
    name = 'init1681343105942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`detalles-pedido\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`pedido_id\` int NOT NULL, \`producto_id\` int NOT NULL, \`nombre_producto\` varchar(255) NOT NULL, \`tipo_producto\` int NOT NULL, \`cantidad\` int NOT NULL, \`precio_unitario\` int NOT NULL, \`total\` int NOT NULL, \`is_active\` tinyint NOT NULL, \`role\` enum ('BASIC', 'ADMIN') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`projects\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users_projects\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`access_level\` enum ('40', '50') NOT NULL, \`user_id\` varchar(36) NULL, \`project_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`email\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('BASIC', 'ADMIN') NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users_pedidos\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`access_level\` enum ('40', '50') NOT NULL, \`user_id\` varchar(36) NULL, \`pedido_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pedidos\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`cliente_id\` int NOT NULL, \`total_productos\` int NOT NULL, \`total\` int NOT NULL, \`costo_delivery\` int NOT NULL, \`observacion\` varchar(255) NOT NULL, \`fecha_pago\` varchar(255) NOT NULL, \`fecha_entrega\` varchar(255) NOT NULL, \`fecha_pedido\` varchar(255) NOT NULL, \`is_active\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposTueste\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`value\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`role\` enum ('BASIC', 'ADMIN') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposMolido\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`value\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`role\` enum ('BASIC', 'ADMIN') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tiposVariedad\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`value\` int NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`role\` enum ('BASIC', 'ADMIN') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users_projects\` ADD CONSTRAINT \`FK_0f280c70a3a6ab7f4cf3c658c4c\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users_projects\` ADD CONSTRAINT \`FK_741210c246defe00ed877a98f2a\` FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users_pedidos\` ADD CONSTRAINT \`FK_29705a1a546881c3617733901e5\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users_pedidos\` ADD CONSTRAINT \`FK_edd342eacec5941c651b4493c21\` FOREIGN KEY (\`pedido_id\`) REFERENCES \`pedidos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users_pedidos\` DROP FOREIGN KEY \`FK_edd342eacec5941c651b4493c21\``);
        await queryRunner.query(`ALTER TABLE \`users_pedidos\` DROP FOREIGN KEY \`FK_29705a1a546881c3617733901e5\``);
        await queryRunner.query(`ALTER TABLE \`users_projects\` DROP FOREIGN KEY \`FK_741210c246defe00ed877a98f2a\``);
        await queryRunner.query(`ALTER TABLE \`users_projects\` DROP FOREIGN KEY \`FK_0f280c70a3a6ab7f4cf3c658c4c\``);
        await queryRunner.query(`DROP TABLE \`tiposVariedad\``);
        await queryRunner.query(`DROP TABLE \`tiposMolido\``);
        await queryRunner.query(`DROP TABLE \`tiposTueste\``);
        await queryRunner.query(`DROP TABLE \`pedidos\``);
        await queryRunner.query(`DROP TABLE \`users_pedidos\``);
        await queryRunner.query(`DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`users_projects\``);
        await queryRunner.query(`DROP TABLE \`projects\``);
        await queryRunner.query(`DROP TABLE \`detalles-pedido\``);
    }

}
