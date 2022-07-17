DROP DATABASE IF EXISTS carteiraDigital;

CREATE DATABASE carteiraDigital;

USE carteiraDigital;

CREATE TABLE ativos (
    codAtivo INT NOT NULL auto_increment,
    qtdeAtivo INT NOT NULL,
    valor DECIMAL NOT NULL,
    PRIMARY KEY(codAtivo)
) ENGINE=INNODB;

INSERT INTO carteiraDigital.ativos (qtdeAtivo, valor) VALUES
     (5, 20),
     (6, 30),
     (7, 40);

CREATE TABLE clientes (
    codCliente INT NOT NULL,
    PRIMARY KEY(codCliente)
) ENGINE=INNODB;

INSERT INTO carteiraDigital.clientes (codCliente) VALUES
     (1),
     (2),
	 (3);

CREATE TABLE operacoes_clientes (
    cliente_id INT NOT NULL,
    valor DECIMAL NOT NULL,
    FOREIGN KEY (cliente_id)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE
) ENGINE=INNODB;

INSERT INTO carteiraDigital.operacoes_clientes (cliente_id, valor) VALUES
     (1, 500),
     (2, 600),
	 (3, 700);

CREATE TABLE operacoes_ativos (
    cliente_id INT NOT NULL,
    ativo_id INT NOT NULL,
    quantity INT NOT NULL,
    valor DECIMAL NOT NULL,
    CONSTRAINT PRIMARY KEY(cliente_id, ativo_id),
    FOREIGN KEY (cliente_id)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE,
    FOREIGN KEY (ativo_id)
        REFERENCES ativos (codAtivo)
        ON DELETE CASCADE
)  ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO carteiraDigital.operacoes_ativos (cliente_id, ativo_id, quantity, valor) VALUES
     (1, 2, 100, 20),
     (2, 1, 200, 25),
     (3, 3, 400, 30);