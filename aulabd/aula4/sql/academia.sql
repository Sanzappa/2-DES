CREATE DATABASE ACADEMIA;

USE ACADEMIA;

CREATE TABLE alunos (
    id_aluno INT NOT NULL,
    nome_aluno VARCHAR(200) NOT NULL,
    nascimento DATE NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    peso DOUBLE(3, 2) NOT NULL,
    PRIMARY KEY (id_aluno)
);

CREATE TABLE Telefone(
    id_aluno INT NOT NULL AUTO_INCREMENT,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno)
);

CREATE TABLE Aparelhos(
    id_aparelho INT NOT NULL AUTO_INCREMENT,
    aparelho VARCHAR(150),
    PRIMARY KEY(id_aparelho)
);

CREATE TABLE exercicios(
    id_exercicio INT NOT NULL AUTO_INCREMENT,
    descricao_exercicio VARCHAR(150),
    grupo_muscular VARCHAR(40)NOT NULL,
    id_aparelho INT NOT NULL,
    PRIMARY KEY(id_exercicio),
    FOREIGN KEY (id_aparelho) REFERENCES Aparelhos(id_aparelho)
);

CREATE TABLE ficha_exercicios(
    id_aluno INT NOT NULL,
    id_exercicio INT NOT NULL,
    dia_semana VARCHAR(40)NOT NULL,
    serie VARCHAR(60)NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno),
    FOREIGN KEY (id_exercicio) REFERENCES exercicios(id_exercicio)
);
