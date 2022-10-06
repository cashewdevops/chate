-- MySQL Script generated by MySQL Workbench
-- Fri Sep 30 18:01:08 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema chate
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema chate
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `chate` DEFAULT CHARACTER SET utf8mb4 ;
USE `chate` ;

-- -----------------------------------------------------
-- Table `chate`.`conversa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chate`.`conversa` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `tipo` INT(11) NULL DEFAULT NULL,
  `categoria` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `chate`.`paciente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chate`.`paciente` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL DEFAULT '0',
  `cpf` INT(11) NOT NULL DEFAULT 0,
  `rua` VARCHAR(45) NULL DEFAULT NULL,
  `bairro` VARCHAR(20) NULL DEFAULT NULL,
  `cidade` VARCHAR(10) NULL DEFAULT NULL,
  `plano_saude` VARCHAR(20) NULL DEFAULT NULL,
  `teleone` INT(8) NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `socket_id` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `chate`.`fila`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chate`.`fila` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `paciente_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `paciente_id` (`paciente_id` ASC) VISIBLE,
  CONSTRAINT `FK__paciente`
    FOREIGN KEY (`paciente_id`)
    REFERENCES `chate`.`paciente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `chate`.`funcionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chate`.`funcionarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL DEFAULT NULL,
  `cpf` VARCHAR(50) NULL DEFAULT NULL,
  `password` TEXT NULL DEFAULT NULL,
  `ativo` TINYINT(4) NULL DEFAULT NULL,
  `supervisor` TINYINT(4) NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  `socket_id` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `chate`.`mensagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chate`.`mensagem` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `funcionario_id` INT(11) NULL DEFAULT NULL,
  `paciente_id` INT(11) NULL DEFAULT NULL,
  `mensagem` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `funcionario_id` (`funcionario_id` ASC) VISIBLE,
  INDEX `paciente_id` (`paciente_id` ASC) VISIBLE,
  CONSTRAINT `FK_funcionario_has_paciente_funcionario`
    FOREIGN KEY (`funcionario_id`)
    REFERENCES `chate`.`funcionarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_funcionario_has_paciente_paciente`
    FOREIGN KEY (`paciente_id`)
    REFERENCES `chate`.`paciente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `chate`.`mensagem_has_conversa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chate`.`mensagem_has_conversa` (
  `mensagem_id` INT(11) NOT NULL,
  `conversa_id` INT(11) NOT NULL,
  PRIMARY KEY (`mensagem_id`, `conversa_id`),
  INDEX `fk_mensagem_has_conversa_conversa1_idx` (`conversa_id` ASC) VISIBLE,
  INDEX `fk_mensagem_has_conversa_mensagem1_idx` (`mensagem_id` ASC) VISIBLE,
  CONSTRAINT `fk_mensagem_has_conversa_mensagem1`
    FOREIGN KEY (`mensagem_id`)
    REFERENCES `chate`.`mensagem` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mensagem_has_conversa_conversa1`
    FOREIGN KEY (`conversa_id`)
    REFERENCES `chate`.`conversa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
