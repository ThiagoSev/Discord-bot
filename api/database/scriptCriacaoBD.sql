DROP TABLE IF EXISTS usuario CASCADE;
DROP TABLE IF EXISTS personagem CASCADE;

CREATE TABLE usuario(
	discordId bigint PRIMARY KEY
);
CREATE TABLE personagem(
	id SERIAL PRIMARY KEY,
	charName varchar(30) NOT NULL,
	charClass varchar(30) DEFAULT 'Desconhecido',
	CharLevel varchar(10) DEFAULT 'Desconhecido',
	age int,
	gender varchar(1) DEFAULT '',
	charImage text,
	userId bigint NOT NULL,
	FOREIGN KEY (userId) REFERENCES usuario(discordId)
);