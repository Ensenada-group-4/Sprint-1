-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-05-2023 a las 12:32:03
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `keybook`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friend`
--

CREATE TABLE `friend` (
  `friend_id` bigint(20) NOT NULL,
  `friend_user_id_1` bigint(20) NOT NULL,
  `friend_user_id_2` bigint(20) NOT NULL,
  `friend_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `friend_friendship` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `friend`
--

INSERT INTO `friend` (`friend_id`, `friend_user_id_1`, `friend_user_id_2`, `friend_date`, `friend_friendship`) VALUES
(1, 2, 1, '2023-04-25 18:48:13', 1),
(2, 3, 1, '2023-04-25 19:06:27', 1),
(3, 1, 2, '2023-04-26 17:04:01', 1),
(4, 1, 3, '2023-02-15 18:33:23', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hobbies`
--

CREATE TABLE `hobbies` (
  `hobby_id` bigint(20) NOT NULL,
  `hobby_user_id` bigint(20) NOT NULL COMMENT 'el id del user',
  `hobby_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hobbies`
--

INSERT INTO `hobbies` (`hobby_id`, `hobby_user_id`, `hobby_name`) VALUES
(1, 2, 'Jugar a HOI IV'),
(2, 1, 'Ver pelis de miedo'),
(3, 3, 'Alpinismo extremo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `post_id` bigint(20) NOT NULL,
  `post_id_user` bigint(20) NOT NULL,
  `post_content` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`post_id`, `post_id_user`, `post_content`) VALUES
(1, 2, 'No! odio esto! que alguien me salve, ayuda!'),
(2, 1, 'Adios mundo, me caes mal'),
(3, 8, 'Hoola hola'),
(4, 8, 'Hoola amigos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `studies`
--

CREATE TABLE `studies` (
  `studies_id` bigint(20) NOT NULL,
  `studies_user_id` bigint(20) NOT NULL,
  `studies_course` varchar(255) NOT NULL,
  `studies_institution` varchar(255) NOT NULL,
  `studies_date` year(4) NOT NULL,
  `studies_level` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `studies`
--

INSERT INTO `studies` (`studies_id`, `studies_user_id`, `studies_course`, `studies_institution`, `studies_date`, `studies_level`) VALUES
(1, 2, 'PHP, JS, PYTHON', 'ATC Gijón', '2022', '3'),
(2, 4, 'JS, PHP,MySQL', 'Laboral', '2023', '2'),
(3, 5, 'PHP, MySQL, JavaScript', 'Academia Tecla', '2022', 'Certificado de Profesionalidad - Grado 3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL COMMENT 'id de usuario',
  `name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` int(11) NOT NULL,
  `date_of_birth` year(4) NOT NULL,
  `profile_picture` varchar(250) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `phone` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `last_name`, `email`, `password`, `date_of_birth`, `profile_picture`, `city`, `country`, `phone`) VALUES
(1, 'Lucia', 'Saenz', 'lucia@gmail.com', 123, '1992', 'https://i.redd.it/lgshxkmdoeez.jpg', 'gijon', 'spain', ''),
(2, 'Adrián', 'Page', 'pagemaster92@gmail.com', 123, '1992', 'https://fotografias.lasexta.com/clipping/cmsimages01/2017/07/26/F4F12168-6C10-45A3-AD81-6D7F5A567F58/98.jpg?crop=1086,611,x0,y39&width=1900&height=1069&optimize=high&format=webply', 'Gijon', 'Spain', ''),
(3, 'Stella Maris', 'González Robert', 'Stella@hotmail.com', 123, '1990', 'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.668xw:1.00xh;0.119xw,0&resize=1200:*', 'Gijón', 'Spain', ''),
(4, 'Maxi', 'Maxi apellido', 'maxi@gmail.com', 123, '2023', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8e2-1u9crd8jmkImLIjGj_a-vYCgifsQvvA&usqp=CAU', 'gijon', 'Spain', ''),
(5, 'Alicia', 'Gimena', 'AliciaG@gmail.com', 123, '1993', 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg', 'Gijon', 'Spain', '985-35-66-66'),
(6, 'Xavi', 'Perez', 'xavi@gmail.com', 123, '1989', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwRCkULtgx1xasCUPMVv62oFVLiElHojAag&usqp=CAU', 'Gijon', 'Spain', '984-34-88-88'),
(7, 'Silvia', 'Buenapuente', 'silvia@hotmail.com', 123, '0000', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNtsoBWEPmaF6K5QPFNXbytJzuLRhwl576g&usqp=CAU', 'Gijon', 'Spain', '984-99-77-44'),
(8, 'Jorge', 'Mocho', 'Kalimotxo@gmail.com', 123, '1992', 'https://i.pinimg.com/originals/1a/72/5a/1a725a448537d6a8eed111814fcae27b.jpg', 'Avilés', 'Spain', '985-32-10-11');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `friend`
--
ALTER TABLE `friend`
  ADD PRIMARY KEY (`friend_id`),
  ADD KEY `friend_user_id` (`friend_user_id_1`),
  ADD KEY `friend_user_id_2` (`friend_user_id_2`);

--
-- Indices de la tabla `hobbies`
--
ALTER TABLE `hobbies`
  ADD PRIMARY KEY (`hobby_id`),
  ADD KEY `hobby_user_id` (`hobby_user_id`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `post_id_user` (`post_id_user`);

--
-- Indices de la tabla `studies`
--
ALTER TABLE `studies`
  ADD PRIMARY KEY (`studies_id`),
  ADD KEY `studies_user_id` (`studies_user_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `friend`
--
ALTER TABLE `friend`
  MODIFY `friend_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `hobbies`
--
ALTER TABLE `hobbies`
  MODIFY `hobby_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `post_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `studies`
--
ALTER TABLE `studies`
  MODIFY `studies_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id de usuario', AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `friend`
--
ALTER TABLE `friend`
  ADD CONSTRAINT `friend_ibfk_1` FOREIGN KEY (`friend_user_id_1`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `friend_ibfk_2` FOREIGN KEY (`friend_user_id_2`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `hobbies`
--
ALTER TABLE `hobbies`
  ADD CONSTRAINT `hobbies_ibfk_1` FOREIGN KEY (`hobby_user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`post_id_user`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `studies`
--
ALTER TABLE `studies`
  ADD CONSTRAINT `studies_ibfk_1` FOREIGN KEY (`studies_user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
