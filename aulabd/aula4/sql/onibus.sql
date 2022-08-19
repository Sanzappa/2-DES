CREATE DATABASE onibus;

USE onibus;

CREATE TABLE motoristas (
    CPF VARCHAR(100) NOT NULL,
    Nome_motorista VARCHAR(200) NOT NULL,
    PRIMARY KEY (CPF)
);

CREATE TABLE telefones(
    CPF VARCHAR(100) NOT NULL,
    Telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (CPF) REFERENCES motoristas(CPF)
);

CREATE TABLE linhas(
    ID_Linha VARCHAR(150) NOT NULL,
    Descrição_linha VARCHAR(150) NOT NULL,
    PRIMARY KEY(ID_Linha)
);

CREATE TABLE horarios(
    ID_Linha VARCHAR(150) NOT NULL,
    Horarios VARCHAR(60) NOT NULL,
    FOREIGN KEY (ID_Linha) REFERENCES linhas(ID_Linha)
);

CREATE TABLE mot_linha(
    CPF VARCHAR(100) NOT NULL,
    ID_Linha VARCHAR(150) NOT NULL,
    data DATE NOT NULL,
    FOREIGN KEY (CPF) REFERENCES motoristas(CPF),
    FOREIGN KEY (ID_Linha) REFERENCES linhas(ID_Linha)
);
