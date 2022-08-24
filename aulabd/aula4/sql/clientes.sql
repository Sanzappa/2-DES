drop database if exists clientes;
create database clientes charset=UTF8 collate utf8_general_ci;

use clientes;

CREATE TABLE Clientes (
    id_cliente INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    nascimento DATE NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    peso DOUBLE(3, 2) NOT NULL,
    PRIMARY KEY (id_cliente)
);

CREATE TABLE Telefone(
    id_cliente INT NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2-DES/aulabd/aula4/csv/ex1clientes.csv'
INTO TABLE Clientes
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2-DES/aulabd/aula4/csv/ex1telefones.csv'
INTO TABLE Telefone
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;