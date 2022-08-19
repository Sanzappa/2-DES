CREATE DATABASE duplicatas;

USE duplicatas;

CREATE TABLE clientes (
    cod_cli INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    end VARCHAR(50) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    bairro VARCHAR(150) NOT NULL,
    cidade VARCHAR(150) NOT NULL,
    uf VARCHAR(20) NOT NULL,
    PRIMARY KEY (cod_cli)
);

CREATE TABLE telefones (
    cod_cli INT NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    telefone VARCHAR(100) NOT NULL, 
    FOREIGN KEY (cod_cli) REFERENCES clientes(cod_cli)
);

CREATE TABLE duplicatas (
    num_dupli VARCHAR(100) NOT NULL,
    cod_cli INT NOT NULL,
    data_compra DATE NOT NULL,
    vencimento DATE NOT NULL,
    valor DOUBLE(3, 2) NOT NULL,
    diferenca DOUBLE(4 ,2) NOT NULL,
    v_final DOUBLE(4, 2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (cod_cli) REFERENCES clientes(cod_cli)
);