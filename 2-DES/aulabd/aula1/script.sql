drop database if exists pedidos;
create database pedidos charset=UTF8 collate utf8_general_ci;
use pedidos;
create table clientes(
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(20) not null, 
    sobrenome varchar(20) not null,
    endereco varchar(100) not null
);

create table pedidos(
    num_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    data timestamp not null,
    valor decimal(8, 2) not null,
    descricao varchar(50) not null,
    quantidade integer(4) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;
describe pedidos;
show tables;

insert into clientes VALUES
(null, "Jorge","Silva","Rua Coisa Bueno - Jaguariúna - SP"),
(null, "Vanessa","Oliveira","Rua Amâncio Bueno - Jaguariúna - SP"),
(null, "Cavalo","Silva","Rua Dois - Pedreira - SP"),
(null, "Juninho","Tavares","Rua Bueno Bueno - Jaguariúna - SP");

insert into telefones values

(1, "1995173-0531"),
(1, "1994176-2089"),
(2, "1993317-5584"),
(2, "1991017-9567"),
(3, "1996221-3681")

insert into pedidos values
(null, 1,null,10,"Pastel de flango",2);
(null, 1,null,10,"Pastel de carne",3);
(null, 2,null,8,"coxinha",1);
(null, 2,null,8,"pastel de camarao",2);
(null, 2,null,10,"Pastel de frango",1);
(null, 3,null,10,"Pastel de pizza",1);
(null, 3,null,12,"Pastel de flango",2);
(null, 3,null,10,"churros",1);
(null, 4,null,10,"Salgado de presunto e queijo",3);
(null, 4,null,10,"Pastel de flango",3);


select * from clientes;
select * from telefones;