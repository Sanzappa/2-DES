drop database if exists pizzaria;
create database pizzaria charset=UTF8 collate utf8_general_ci;
use pizzaria;

create table cliente(
    cliente_id integer not null primary key auto_increment,
    telefone varchar(15) not null,
    nome varchar(30) not null,
    logradouro DECIMAL(5,0) not null,
    numero DECIMAL(5,0),
    complemento varchar(30),
    bairro varchar(30),
    referencia varchar(30)
);

create table pizza(
    pizza_id integer not null primary key auto_increment,
    nome varchar(30) not null,
    descricao varchar(30) not null,
    valor DECIMAL(4,2)
);

create table pedido(
    pedido_id integer not null primary key auto_increment,
    cliente_id integer not null,
    data DATETIME not null,
    valor DECIMAL(5,2),
    FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id)
);

create table item_pedido(
    pedido_id integer not null,
    pizza_id integer not null,
    quantidade DECIMAL(2,0),
    valor DECIMAL(5,2),
    FOREIGN KEY (pedido_id) REFERENCES pedido(pedido_id),
    FOREIGN KEY (pizza_id) REFERENCES pizza(pizza_id)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2-DES/aulabd/aula06/pizzaria/csv/clientes.csv'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2-DES/aulabd/aula06/pizzaria/csv/pizzas.csv'
INTO TABLE pizza
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2-DES/aulabd/aula06/pizzaria/csv/pedidos.csv'
INTO TABLE pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2-DES/aulabd/aula06/pizzaria/csv/item_pedido.csv'
INTO TABLE item_pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;