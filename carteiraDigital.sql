DROP DATABASE IF EXISTS carteiraDigital;

CREATE DATABASE carteiraDigital;

USE carteiraDigital;

CREATE TABLE ativos (
    codAtivo INT NOT NULL auto_increment,
    quantity INT NOT NULL,
    valAtivo DECIMAL NOT NULL,
    PRIMARY KEY(codAtivo)
) ENGINE=INNODB;

INSERT INTO carteiraDigital.ativos (quantity, valAtivo) VALUES
     (100, 10),
     (300, 20),
     (200, 25);

CREATE TABLE clientes (
    codCliente INT NOT NULL auto_increment,
    saldo DECIMAL NOT NULL,
    PRIMARY KEY(codCliente)
) ENGINE=INNODB;

INSERT INTO carteiraDigital.clientes (codCliente, saldo) VALUES
     (1, 500),
     (2, 600),
	 (3, 700);

CREATE TABLE operacoes_ativos (
    cliente_id INT NOT NULL,
    ativo_id INT NOT NULL,
    qtdeAtivo INT NOT NULL,
    valorAtivo DECIMAL NOT NULL,
    FOREIGN KEY (cliente_id)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE,
    FOREIGN KEY (ativo_id)
        REFERENCES ativos (codAtivo)
        ON DELETE CASCADE
)  ENGINE=INNODB;

INSERT INTO carteiraDigital.operacoes_ativos (cliente_id, ativo_id, qtdeAtivo, valorAtivo) VALUES
     (1, 2, 30, 20),
     (2, 1, 20, 10),
     (3, 3, 40, 25);

SET SQL_SAFE_UPDATES = 0;