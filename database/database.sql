CREATE DATABASE paisajes_db;

USE paisajes_db;

CREATE TABLE paisajes (
    ID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    lugar VARCHAR (180),
    descripcion VARCHAR (255),
    imagen VARCHAR(200),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DESCRIBE paisajes;