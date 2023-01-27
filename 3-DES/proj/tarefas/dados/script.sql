drop database if exists listaTarefas;
create database listaTarefas charset=UTF8 collate utf8_general_ci;
USE listaTarefas;

CREATE TABLE tarefas (
    id_tarefa INT NOT NULL primary key AUTO_INCREMENT,
    descricao VARCHAR(500) NOT NULL,
    horario_tarefa VARCHAR(20) NOT NULL,
    horario_encerramento VARCHAR(20),
    status_tarefa VARCHAR(60) NOT NULL
);