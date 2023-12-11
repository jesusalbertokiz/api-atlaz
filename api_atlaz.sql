-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-12-2023 a las 18:13:07
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `api_atlaz`.`usuarios` (
    `id` VARCHAR(36) NOT NULL DEFAULT UUID(), 
    `name` VARCHAR(16) NOT NULL , 
    `password` VARCHAR(16) NOT NULL , 
    `role` VARCHAR(16) NOT NULL DEFAULT 'usuario') ENGINE = InnoDB;


CREATE TABLE `api_atlaz`.`post` (
    `id` VARCHAR(36) NOT NULL DEFAULT UUID() , 
    `idUser` VARCHAR(36) NOT NULL , 
    `text` TEXT NOT NULL , 
    `visibility` INT(16) NOT NULL DEFAULT '1' , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP) ENGINE = InnoDB;

CREATE TABLE `api_atlaz`.`articulo` (
    `id` VARCHAR(36) NOT NULL DEFAULT UUID() , 
    `idUser` VARCHAR(36) NOT NULL , 
    `text` TEXT NOT NULL , 
    `price` INT(16) NOT NULL , 
    `visibility` INT(16) NOT NULL DEFAULT '1' , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP) ENGINE = InnoDB;

CREATE TABLE `api_atlaz`.`comentarios` (
    `id` VARCHAR(36) NOT NULL DEFAULT UUID() , 
    `idUser` VARCHAR(36) NOT NULL , 
    `idPost` VARCHAR(36) NOT NULL , 
    `text` TEXT NOT NULL , 
    `visibility` INT(16) NOT NULL DEFAULT '1' , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP) ENGINE = InnoDB;

CREATE TABLE `api_atlaz`.`reviews` (
    `id` VARCHAR(36) NOT NULL DEFAULT UUID(), 
    `idUser` VARCHAR(36) NOT NULL , 
    `idArticulo` VARCHAR(36) NOT NULL , 
    `text` TEXT NOT NULL , 
    `rate` DECIMAL(2,1) NOT NULL CHECK (rate >= 0.0 AND rate <= 10.0), 
    `visibility` INT NOT NULL DEFAULT '1' , 
    `created_At` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP) ENGINE = InnoDB;

CREATE TABLE `api_atlaz`.`opiniones` (
    `id` VARCHAR(36) NOT NULL DEFAULT UUID(), 
    `idUser` VARCHAR(36) NOT NULL , 
    `idEmpresa` VARCHAR(36) NOT NULL , 
    `text` TEXT NOT NULL , 
    `rate` DECIMAL(2,1) NOT NULL CHECK (rate >= 0.0 AND rate <= 11), 
    `visibility` INT NOT NULL DEFAULT '1' , 
    `created_At` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP) ENGINE = InnoDB;

--
-- Indices de la tabla `articulo`
--
ALTER TABLE `articulo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkUser` (`idUser`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkUser` (`idUser`),
  ADD KEY `fkPost` (`idPost`);

--
-- Indices de la tabla `opiniones`
--
ALTER TABLE `opiniones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkUser` (`idUser`),
  ADD KEY `fkEmpresa` (`idEmpresa`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkUser` (`idUser`) USING BTREE;

--
-- Indices de la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkUser` (`idUser`),
  ADD KEY `fkArticulo` (`idArticulo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Filtros para la tabla `articulo`
--
ALTER TABLE `articulo`
  ADD CONSTRAINT `articulo_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`idPost`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Filtros para la tabla `opiniones`
--
ALTER TABLE `opiniones`
  ADD CONSTRAINT `opiniones_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `opiniones_ibfk_2` FOREIGN KEY (`idEmpresa`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Filtros para la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`idArticulo`) REFERENCES `articulo` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Insertando información de prueba
--

-- Informacion para la tabla usuarios
INSERT INTO `usuarios` ( `name`, `password`, `role`) VALUES 
    ('jesus', '123', 'vip'), 
    ('juan', '123', 'usuario'),
    ('manuel', '123', 'vip');

-- Información para la tabla post
INSERT INTO `post` ( `idUser`, `text`, `visibility`, `created_at`) VALUES 
    ((SELECT `id` FROM `usuarios` WHERE `name` = "jesus"), 'Este es un post de Jesus', '1', current_timestamp()),
    ((SELECT `id` FROM `usuarios` WHERE `name` = "manuel"), 'Este es un post de Manuel', '1', current_timestamp());

-- Información para la tabla comentarios
INSERT INTO `comentarios` (`idUser`, `idPost`, `text`, `visibility`, `created_at`) VALUES 
    ((SELECT `id` FROM `usuarios` WHERE `name` = "jesus"), (SELECT `id` FROM `post` WHERE `idUser` = (SELECT `id` FROM `usuarios` WHERE `name` = "jesus")), 'Este es mi primer post y soy el primer comentario', '1', current_timestamp()),
    ((SELECT `id` FROM `usuarios` WHERE `name` = "juan"), (SELECT `id` FROM `post` WHERE `idUser` = (SELECT `id` FROM `usuarios` WHERE `name` = "jesus")), 'Hola Jesus soy Juan y estoy alegro por tu primer post', '1', current_timestamp()),
    ((SELECT `id` FROM `usuarios` WHERE `name` = "manuel"), (SELECT `id` FROM `post` WHERE `idUser` = (SELECT `id` FROM `usuarios` WHERE `name` = "jesus")), 'Hola Jesus soy Manuel y tambien he publicado mi primer post', '1', current_timestamp()),
    ((SELECT `id` FROM `usuarios` WHERE `name` = "manuel"), (SELECT `id` FROM `post` WHERE `idUser` = (SELECT `id` FROM `usuarios` WHERE `name` = "manuel")), 'Este es mi prime post y soy el primer comentario', '1', current_timestamp()),
    ((SELECT `id` FROM `usuarios` WHERE `name` = "juan"), (SELECT `id` FROM `post` WHERE `idUser` = (SELECT `id` FROM `usuarios` WHERE `name` = "manuel")), 'Hola Manuel soy Juan y estoy alegro por tu primer post', '1', current_timestamp()),
    ((SELECT `id` FROM `usuarios` WHERE `name` = "jesus"), (SELECT `id` FROM `post` WHERE `idUser` = (SELECT `id` FROM `usuarios` WHERE `name` = "manuel")), 'Hola Manuel soy Jesus y tambien he publicado mi primer post', '1', current_timestamp());

-- Información para la tabla articulo
INSERT INTO `articulo` (`idUser`, `text`, `price`, `visibility`, `created_at`) VALUES 
  ((SELECT `id` FROM `usuarios` WHERE `name` = "jesus"), 'Este mi primer articulo y son unos zapatos', '20', '1', current_timestamp()),
  ((SELECT `id` FROM `usuarios` WHERE `name` = "manuel"), 'Este mi primer articulo y es una PC', '50', '1', current_timestamp());


-- Información para la tabla reviews
INSERT INTO `reviews` (`idUser`, `idArticulo`, `text`, `rate`, `visibility`, `created_At`) VALUES 
  ((SELECT `id` FROM `usuarios` WHERE `name` = "juan"), (SELECT `id` FROM `articulo` WHERE `idUser` = (SELECT `id` FROM `usuarios` WHERE `name` = "jesus")), 'En estos zapatos encontraras comodidad y calidad', '6.3', '1', current_timestamp()),
  ((SELECT `id` FROM `usuarios` WHERE `name` = "manuel"), (SELECT `id` FROM `articulo` WHERE `idUser` = (SELECT `id` FROM `usuarios` WHERE `name` = "jesus")), 'Yo me dedico vender PCs Jesus por si necesitas maquinas para llevar la contabilidad de tu empresa', '7.3', '1', current_timestamp()),
  ((SELECT `id` FROM `usuarios` WHERE `name` = "juan"), (SELECT `id` FROM `articulo` WHERE `idUser` = (SELECT `id` FROM `usuarios` WHERE `name` = "manuel")), 'Los mejores componentes para PCs los tienes manuel, excelentes maquinas!', '9.3', '1', current_timestamp()),
  ((SELECT `id` FROM `usuarios` WHERE `name` = "jesus"), (SELECT `id` FROM `articulo` WHERE `idUser` = (SELECT `id` FROM `usuarios` WHERE `name` = "manuel")), 'Necesito para mi empresa de zapatos una computadora que me ayude a llevar la contabilidad del negocio, puedes recomendarme alguna?', '4.3', '1', current_timestamp());

-- Información de opiniones
INSERT INTO `opiniones` (`idUser`, `idEmpresa`, `text`, `rate`, `visibility`, `created_At`) VALUES 
    ((SELECT `id` FROM `usuarios` WHERE `name` = "jesus"), (SELECT `id` FROM `usuarios` WHERE `name` = "manuel"), 'Me gusto mucho la recomendación que me hiciste y tus productos son de excelente calidad', '10', '1', current_timestamp()),
    ((SELECT `id` FROM `usuarios` WHERE `name` = "juan"),(SELECT `id` FROM `usuarios` WHERE `name` = "manuel"), 'La entrega de los productos duro aprox 30min!!! Super confiable y seguro sus servicios', '9.2', '1', current_timestamp()),
    ((SELECT `id` FROM `usuarios` WHERE `name` = "manuel"),(SELECT `id` FROM `usuarios` WHERE `name` = "jesus"), 'Muy amables en su tienda', '6.8', '1', current_timestamp()),
    ((SELECT `id` FROM `usuarios` WHERE `name` = "juan"),(SELECT `id` FROM `usuarios` WHERE `name` = "jesus"), 'Productos de muy buena calidad y atencion personalizada', '7.5', '1', current_timestamp());

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
