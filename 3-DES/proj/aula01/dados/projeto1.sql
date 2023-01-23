drop database if exists Projeto1;
create database projeto1 charset=UTF8 collate utf8_general_ci;
USE Projeto1;

CREATE TABLE entregadores (
    id_entregador INT NOT NULL primary key AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(30) NOT NULL,
    veiculo VARCHAR(60) NOT NULL
);

CREATE TABLE pedidos(
    id_pedido INT NOT NULL primary key AUTO_INCREMENT,
    cliente VARCHAR(50) NOT NULL,
    endereco VARCHAR(40) NOT NULL,
    produto VARCHAR(200) NOT NULL,
    data VARCHAR(12) NOT NULL,
    hora_pedido VARCHAR(20) NOT NULL,
    hora_entrega VARCHAR(20),
    hora_fim VARCHAR(20),
    id_entregador INT NOT NULL,
    FOREIGN KEY (id_entregador) REFERENCES entregadores(id_entregador)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI 22-23/3-DES/proj/aula01/dados/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI 22-23/3-DES/proj/aula01/dados/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;