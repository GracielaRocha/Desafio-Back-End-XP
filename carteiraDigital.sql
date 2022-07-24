DROP DATABASE IF EXISTS carteiraDigital;

CREATE DATABASE carteiraDigital;

USE carteiraDigital;

CREATE TABLE ativos (
    codAtivo INT NOT NULL auto_increment,
    quantity INT NOT NULL,
    valorAtivo DECIMAL NOT NULL,
    PRIMARY KEY(codAtivo)
) ENGINE=INNODB;

INSERT INTO carteiraDigital.ativos (quantity, valorAtivo) VALUES
     (500, 10),
     (300, 20),
     (200, 25);

CREATE TABLE clientes (
    codCliente INT NOT NULL auto_increment,
    PRIMARY KEY(codCliente)
) ENGINE=INNODB;

INSERT INTO carteiraDigital.clientes (codCliente) VALUES
     (1),
     (2),
	 (3);
     
CREATE TABLE conta_cliente (
	idConta INT NOT NULL auto_increment,
	cliente_id INT NOT NULL,
    saldo DECIMAL NOT NULL,
    PRIMARY KEY(idConta),
    FOREIGN KEY (cliente_id)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE
)  ENGINE=INNODB;

INSERT INTO carteiraDigital.conta_cliente (cliente_id, saldo) VALUES
     (1, 500),
     (2, 600),
	 (3, 700);

CREATE TABLE carteira_cliente (
	idCarteira INT NOT NULL auto_increment,
    cliente_id INT NOT NULL,
    ativo_id INT NOT NULL,
    qtdeAtivo INT NOT NULL,
    valorAtivo DECIMAL NOT NULL,
    PRIMARY KEY(idCarteira),
    FOREIGN KEY (cliente_id)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE,
    FOREIGN KEY (ativo_id)
        REFERENCES ativos (codAtivo)
        ON DELETE CASCADE
)  ENGINE=INNODB;

INSERT INTO carteiraDigital.carteira_cliente (cliente_id, ativo_id, qtdeAtivo, valorAtivo) VALUES
     (1, 2, 100, 20),
     (2, 1, 100, 10),
     (3, 3, 100, 25);

SET SQL_SAFE_UPDATES = 0;