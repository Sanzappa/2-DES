CREATE DATABASE CLIENTES;

USE CLIENTES;

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