DROP TABLE IF EXISTS usuario CASCADE;
DROP TABLE IF EXISTS personagem CASCADE;

CREATE TABLE usuario(
	discordId int PRIMARY KEY
);
CREATE TABLE personagem(
	id SERIAL PRIMARY KEY,
	nome varchar(30) NOT NULL,
	genero varchar(1),
	userId int UNIQUE NOT NULL,
	FOREIGN KEY (userId) REFERENCES usuario(discordId)
);