-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2022 at 05:19 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `banking_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(26) NOT NULL,
  `last_name` varchar(26) NOT NULL,
  `account_number` bigint(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(40) NOT NULL,
  `image` text NOT NULL,
  `current_balance` int(11) NOT NULL,
  `phone_number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `account_number`, `email`, `address`, `image`, `current_balance`, `phone_number`) VALUES
(1, 'Hala', 'Slimen', 547865231457854, 'halasliimen@gmail.com', 'Gafsa - Tunisie', 'image1.jpg', 4888000, '+216 27 122 046'),
(2, 'Wafa', 'Ahmed', 547865231457424, 'wafaahmed@gmail.com', 'Sfax - Tunisie', 'image2.png', 4250740, '+216 86 004 858'),
(3, 'Nader', 'Hanouch', 547865471457854, 'naderhanouch@gmail.com', 'Mednine - Tunisie', 'image3.jpg', 9050402, '+216 66 304 946'),
(4, 'Wael', 'Mohamed Ali', 546545231457854, 'waelmedali@gmail.com', 'Gabes - Tunisie', 'image4.jpg', 8940000, '+216 85 609 440'),
(5, 'Amani', 'Fayez', 545476231457854, 'amanifayez@gmail.com', 'Gafsa - Tunisie', 'image5.jpg', 9460000, '+216 60 954 559'),
(6, 'Khalil', 'Nouri', 544756354785463, 'khalilnouri@gmail.com', 'Gabes - Tunisie', 'image6.jpg', 9500000, '+216 66 560 944'),
(7, 'Maha', 'Mabrouk', 548753214586987, 'mahamabrouk@gmail.com', 'Tozeur - Tunisie', 'image7.jpg', 8895000, '+216 80 456 580'),
(8, 'Nadia', 'Jamel', 543215478965423, 'nadiajamel@gmail.com', 'Mahdia - Tunisie', 'image8.jpg', 2503000, '+216 80 465 564'),
(9, 'Jihane', 'Lotfi', 54123478569423, 'jihanelotfi@gmail.com', 'Mahdia - Tunisie', 'image9.jpg', 6480000, '+216 84 565 908'),
(10, 'Mohamed', 'Saber', 541269785692518, 'mohamedsaber@gmail.com', 'Sfax - Tunisie', 'image10.png', 8583500, '+216 60 559 445');

-- --------------------------------------------------------

--
-- Table structure for table `transfers`
--

CREATE TABLE `transfers` (
  `id` int(11) NOT NULL,
  `fr_customer` int(11) NOT NULL,
  `to_customer` int(11) NOT NULL,
  `money` double NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transfers`
--

INSERT INTO `transfers` (`id`, `fr_customer`, `to_customer`, `money`, `date`) VALUES
(2, 1, 2, 4000000, '2022-02-14 11:18:36'),
(3, 1, 2, 150000, '2022-02-14 11:20:05'),
(4, 1, 2, 50000, '2022-02-14 11:20:39'),
(5, 1, 2, 4000000, '2022-02-14 11:22:32'),
(6, 1, 3, 6000000, '2022-02-14 15:11:14'),
(7, 1, 3, 55, '2022-02-14 15:11:40'),
(8, 1, 3, 999945, '2022-02-14 15:12:01'),
(9, 8, 7, 5000, '2022-02-14 16:46:23'),
(10, 9, 10, 500, '2022-02-14 16:47:02'),
(11, 8, 10, 5000, '2022-02-14 16:47:31'),
(12, 1, 10, 9000, '2022-02-17 13:55:31'),
(13, 1, 10, 9000, '2022-02-17 13:55:44'),
(14, 1, 2, 20, '2022-02-17 17:02:07'),
(15, 1, 2, 2, '2022-02-19 12:31:35'),
(16, 1, 2, 2, '2022-02-19 12:33:58'),
(17, 1, 1, 8, '2022-02-19 13:37:55'),
(18, 1, 1, 9, '2022-02-19 13:38:16'),
(19, 1, 1, 9, '2022-02-19 13:38:51'),
(20, 1, 1, 9, '2022-02-19 13:38:51'),
(21, 1, 2, 2, '2022-02-19 13:48:37'),
(22, 2, 1, 2, '2022-02-19 13:49:58'),
(23, 1, 1, 2, '2022-02-19 13:50:46'),
(24, 1, 1, 2, '2022-02-19 13:51:06'),
(25, 1, 1, 2, '2022-02-19 13:51:19'),
(26, 1, 2, 2, '2022-02-19 13:51:36'),
(27, 1, 2, 2, '2022-02-19 13:51:51'),
(28, 1, 2, 2, '2022-02-19 13:52:02'),
(29, 1, 2, 2, '2022-02-19 13:52:16'),
(30, 1, 2, 2, '2022-02-19 13:52:37'),
(31, 1, 2, 2, '2022-02-19 13:52:49'),
(32, 1, 2, 2, '2022-02-19 13:53:02'),
(33, 1, 2, 2, '2022-02-19 13:53:27'),
(34, 1, 2, 2, '2022-02-19 13:53:35'),
(35, 1, 2, 2, '2022-02-20 09:58:24'),
(36, 1, 2, 2, '2022-02-20 16:47:56'),
(37, 1, 2, 158, '2022-02-20 17:01:46'),
(38, 2, 3, 2, '2022-02-20 17:02:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transfers`
--
ALTER TABLE `transfers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transfers_fr_customer_fk` (`fr_customer`),
  ADD KEY `transfers_to_customer_fk` (`to_customer`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=224;

--
-- AUTO_INCREMENT for table `transfers`
--
ALTER TABLE `transfers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transfers`
--
ALTER TABLE `transfers`
  ADD CONSTRAINT `transfers_fr_customer_fk` FOREIGN KEY (`fr_customer`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transfers_to_customer_fk` FOREIGN KEY (`to_customer`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
