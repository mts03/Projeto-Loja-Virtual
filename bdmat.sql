-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 05-Dez-2020 às 02:20
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdmat`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `idProduto` int(11) NOT NULL,
  `descricaoProduto` varchar(40) NOT NULL,
  `precoProduto` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`idProduto`, `descricaoProduto`, `precoProduto`) VALUES
(1, 'Fifa 21', '159.99'),
(2, 'Clash of Clans', '49.99'),
(3, 'Stardew Valley', '19.99'),
(4, 'Fortnite', '149.99'),
(5, 'League of Legends', '14.99'),
(6, 'Club Penguin', '9.99'),
(7, 'Valorant', '34.99'),
(8, 'Free Fire', '99.99');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsua` int(11) NOT NULL,
  `cpfUsua` varchar(11) NOT NULL,
  `nomeUsua` varchar(40) NOT NULL,
  `emailUsua` varchar(60) NOT NULL,
  `senhaUsua` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`idUsua`, `cpfUsua`, `nomeUsua`, `emailUsua`, `senhaUsua`) VALUES
(1, '20098446820', 'Lara Barros', 'lara@unicamp.br', 'lara123'),
(2, '29874320918', 'Junior Braga', 'junbrag@gmail.com', 'junin123'),
(3, '29986443920', 'Mateus Sales', 'mateus@gmail.com', 'mateussenha123'),
(4, '19987443920', 'Elaine Lopes de Sales', 'elainels@hotmail.com', 'elaine123');

-- --------------------------------------------------------

--
-- Estrutura da tabela `vitrine`
--

CREATE TABLE `vitrine` (
  `idProdVitrine` int(11) NOT NULL,
  `descricaoProdVitrine` varchar(50) DEFAULT NULL,
  `fotoProdVitrine` text,
  `precoProdVitrine` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `vitrine`
--

INSERT INTO `vitrine` (`idProdVitrine`, `descricaoProdVitrine`, `fotoProdVitrine`, `precoProdVitrine`) VALUES
(1, 'Fifa 21', '/estatico/imagens/fifa21.jpg', '159.99'),
(2, 'Clash of Clans', '/estatico/imagens/clashofclans.jpg', '49.99'),
(3, 'Stardew Valley', '/estatico/imagens/stardew.jpg', '19.99'),
(4, 'Fortnite', '/estatico/imagens/fortnite.jpg', '149.99'),
(5, 'League of Legends', '/estatico/imagens/lol.jpg', '14.99'),
(6, 'Club Penguin', '/estatico/imagens/clubpenguin.jpg', '9.99'),
(7, 'Valorant', '/estatico/imagens/valorant.jpg', '34.99'),
(8, 'Free Fire', '/estatico/imagens/freefire.jpg', '99.99');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idProduto`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsua`);

--
-- Indexes for table `vitrine`
--
ALTER TABLE `vitrine`
  ADD PRIMARY KEY (`idProdVitrine`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idProduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsua` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `vitrine`
--
ALTER TABLE `vitrine`
  MODIFY `idProdVitrine` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
