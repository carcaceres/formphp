# formphp


##**MODELO RELACIONAL**

![Alt text](https://673b3801-a-62cb3a1a-s-sites.googlegroups.com/site/sitecaceres/pagina1/mr.png?attachauth=ANoY7crve9wEGQmPSt4uMDrMUyMqRcAiQodC1pCCtwx1AVBwPW187UubdWX8xFgqQm_NlwFRpOLcRMnY5Q5l90y8ozL7ca06GKWz5ttA-lGwDOyaRA5x-rAlke5aTrBR_jDn65iaUEBunVe9I7np_8kraaeS4LcBdKtMbwmLdjdyxU7sSSzaEeBWKJQU5SgcYgqsTcQ004JKOtcn1Yfh-IC0cfzaDv5O3Q%3D%3D&attredirects=0 "MR")

----------------------------------------------------------------------------------------------------------------------------------------

**CREAR PRIVILEGIO**

Usuario: pruebacon

Password: 123456

servidor: localhost


----------------------------------------------------------------------------------------------------------------------------------------

Archivo Sql

-- phpMyAdmin SQL Dump
-- version 4.1.14
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-09-2016 a las 18:27:41
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `user` varchar(20) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `rol` int(2) NOT NULL,
  PRIMARY KEY (`user`),
  KEY `rol` (`rol`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`user`, `pass`, `rol`) VALUES
('13805476', '123456', 1),
('23805476', '123456', 2),
('33805476', '123456', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE IF NOT EXISTS `rol` (
  `idrol` int(2) NOT NULL,
  `nomrol` varchar(20) NOT NULL,
  PRIMARY KEY (`idrol`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idrol`, `nomrol`) VALUES
(1, 'Administrador'),
(2, 'Tutor'),
(3, 'Estudiante');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `pk_rol` FOREIGN KEY (`rol`) REFERENCES `rol` (`idrol`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
