-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `created_at` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tradier_historial01` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `symbol` VARCHAR(25) NOT NULL,
    `price` DECIMAL(10, 2) NULL,
    `type` VARCHAR(25) NOT NULL,
    `description` VARCHAR(40) NOT NULL,
    `quantity` DECIMAL(10, 2) NOT NULL,
    `commission` DECIMAL(10, 2) NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `date` VARCHAR(25) NOT NULL,
    `cargado` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NULL,
    `createdAt` DATETIME(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
