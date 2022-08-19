CREATE DATABASE ENTREGAS;

USE ENTREGAS;

CREATE TABLE Clientes(
    id_cliente INT NOT NULL AUTO_INCREMENT,
    cpf VARCHAR(14) NOT NULL,
    nome_cliente VARCHAR(255) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(50),
    PRIMARY KEY (id_cliente)
);

CREATE TABLE Telefones(
    id_cliente INT NOT NULL,
    telefone VARCHAR(14) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

CREATE TABLE Entregadores(
    id_entregador INT NOT NULL AUTO_INCREMENT,
    nome_entregador VARCHAR(255) NOT NULL,
    veiculo VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_entregador)
);

CREATE TABLE Produtos(
    id_produto INT NOT NULL AUTO_INCREMENT,
    nome_produto VARCHAR(30) NOT NULL,
    preco_unitario DOUBLE(3, 2) NOT NULL,
    PRIMARY KEY (id_produto)
);

CREATE TABLE Pedidos(
    id_cliente INT NOT NULL,
    id_pedido INT NOT NULL AUTO_INCREMENT,
    id_entregador INT NOT NULL,
    data DATE NOT NULL,
    hora_pedido TIME NOT NULL,
    hora_entrega TIME,
    hora_fim TIME,
    PRIMARY KEY (id_pedido),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_entregador) REFERENCES Entregadores(id_entregador)
);

CREATE TABLE Itens(
    id_pedido INT NOT NULL,
    quantidade INT NOT NULL,
    id_produto INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES Produtos(id_produto)
);