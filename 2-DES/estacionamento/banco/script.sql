DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento charset=UTF8 collate utf8_general_ci;

USE estacionamento;

CREATE TABLE clientes (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome_cliente VARCHAR(50) NOT NULL,
    endereco VARCHAR(60) NOT NULL,
    telefone VARCHAR(10) NOT NULL UNIQUE
);

CREATE TABLE veiculos (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    placa VARCHAR(60) NOT NULL UNIQUE,
    tipo VARCHAR(60) NOT NULL
);

CREATE TABLE vagas(
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    disponivel BOOLEAN NOT NULL
)

CREATE TABLE entradas (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_cliente INTEGER NOT NULL,
    id_veiculo INTEGER NOT NULL,
    data_entrada DATE NOT NULL,
    data_saida DATE,
    valor float(5, 2),
    foreign key (id_cliente) references clientes(id),
    foreign key (id_veiculo) references veiculos(id)
);

create view vw_clientes as
select c.id, c.nome_cliente, c.telefone, c.endereco, v.placa as veiculo from clientes c
inner join veiculos v
on c.id = v.placa;
