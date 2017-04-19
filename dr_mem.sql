-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2017 at 07:49 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.5.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dr_mem`
--

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_body`
--

CREATE TABLE `dr_mem_body` (
  `id_body` int(11) NOT NULL,
  `type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dr_mem_body`
--

INSERT INTO `dr_mem_body` (`id_body`, `type`) VALUES
(1, 'Slim'),
(2, 'Average'),
(3, 'Athletic'),
(4, 'Plus Size'),
(5, 'Muscular');

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_experience`
--

CREATE TABLE `dr_mem_experience` (
  `id_experience` int(11) NOT NULL,
  `type` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dr_mem_experience`
--

INSERT INTO `dr_mem_experience` (`id_experience`, `type`) VALUES
(1, 'Fresher'),
(2, 'Experienced'),
(3, 'Both');

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_gender`
--

CREATE TABLE `dr_mem_gender` (
  `id_gender` int(11) NOT NULL,
  `type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dr_mem_gender`
--

INSERT INTO `dr_mem_gender` (`id_gender`, `type`) VALUES
(1, 'Male'),
(2, 'Female');

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_hairs`
--

CREATE TABLE `dr_mem_hairs` (
  `id_hair` int(11) NOT NULL,
  `type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dr_mem_hairs`
--

INSERT INTO `dr_mem_hairs` (`id_hair`, `type`) VALUES
(1, 'Long'),
(2, 'Short'),
(3, 'Curly'),
(4, 'Bald'),
(5, 'Others');

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_hair_colors`
--

CREATE TABLE `dr_mem_hair_colors` (
  `id_hair` int(11) NOT NULL,
  `type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dr_mem_hair_colors`
--

INSERT INTO `dr_mem_hair_colors` (`id_hair`, `type`) VALUES
(1, 'Light Brown'),
(2, 'Red'),
(3, 'Blonde'),
(4, 'Silver / Grey'),
(5, 'Colored'),
(6, 'Black');

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_languages`
--

CREATE TABLE `dr_mem_languages` (
  `id_language` int(11) NOT NULL,
  `type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dr_mem_languages`
--

INSERT INTO `dr_mem_languages` (`id_language`, `type`) VALUES
(1, 'Hindi'),
(2, 'English'),
(3, 'Tamil'),
(4, 'Telugu'),
(5, 'Malayalam'),
(6, 'Kannada'),
(7, 'others');

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_projects`
--

CREATE TABLE `dr_mem_projects` (
  `id_project` int(11) NOT NULL,
  `type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dr_mem_projects`
--

INSERT INTO `dr_mem_projects` (`id_project`, `type`) VALUES
(1, 'Feature Film'),
(2, 'Ad Film'),
(3, 'Short Film'),
(4, 'TV Serial'),
(5, 'Documentary'),
(6, 'Theater'),
(7, 'Photoshoot');

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_roles`
--

CREATE TABLE `dr_mem_roles` (
  `id_role` int(11) NOT NULL,
  `type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dr_mem_roles`
--

INSERT INTO `dr_mem_roles` (`id_role`, `type`) VALUES
(1, 'Lead'),
(2, 'Lead Support'),
(3, 'Supporting'),
(4, 'Character'),
(5, 'Cameo'),
(6, 'Junior');

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_skills`
--

CREATE TABLE `dr_mem_skills` (
  `id_skills` int(11) NOT NULL,
  `type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dr_mem_skills`
--

INSERT INTO `dr_mem_skills` (`id_skills`, `type`) VALUES
(1, 'Horse Riding'),
(2, 'Swimming'),
(3, 'Singing'),
(4, 'Dancing'),
(5, 'Ramp'),
(6, 'Host / Hostess'),
(7, 'Theater'),
(8, 'Others');

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_skins`
--

CREATE TABLE `dr_mem_skins` (
  `id_skin` int(11) NOT NULL,
  `type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dr_mem_skins`
--

INSERT INTO `dr_mem_skins` (`id_skin`, `type`) VALUES
(1, 'Light'),
(2, 'Dusky'),
(3, 'Olive'),
(4, 'Mix');

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_type`
--

CREATE TABLE `dr_mem_type` (
  `id_type` int(11) NOT NULL,
  `type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dr_mem_type`
--

INSERT INTO `dr_mem_type` (`id_type`, `type`) VALUES
(1, 'Artist'),
(2, 'Technician'),
(3, 'Client');

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_users`
--

CREATE TABLE `dr_mem_users` (
  `user_id` int(11) NOT NULL,
  `user_type` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(50) NOT NULL,
  `user_mobile` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `dr_mem_users_details`
--

CREATE TABLE `dr_mem_users_details` (
  `user_details_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_type_id` int(11) NOT NULL,
  `user_role_id` int(11) DEFAULT NULL,
  `user_gender_id` int(11) NOT NULL,
  `user_skills_id` int(11) DEFAULT NULL,
  `user_skills_others` varchar(1000) DEFAULT NULL,
  `user_city` varchar(50) DEFAULT NULL,
  `user_ethinicity` varchar(50) DEFAULT NULL,
  `user_body_id` int(11) DEFAULT NULL,
  `user_hair_id` int(11) DEFAULT NULL,
  `user_hair_others` varchar(50) DEFAULT NULL,
  `user_weight` int(11) DEFAULT NULL,
  `user_skin_id` int(11) DEFAULT NULL,
  `user_hair_color_id` int(11) DEFAULT NULL,
  `user_language_id` int(11) DEFAULT NULL,
  `user_language_others` int(11) DEFAULT NULL,
  `user_experience_id` int(11) NOT NULL,
  `user_videos` varchar(1000) DEFAULT NULL,
  `user_dob` date DEFAULT NULL,
  `user_is_professional` int(11) DEFAULT NULL,
  `user_project_id` int(11) DEFAULT NULL,
  `user_project` int(11) DEFAULT NULL,
  `user_project_name` int(11) DEFAULT NULL,
  `user_project_description` int(11) DEFAULT NULL,
  `user_character_name` varchar(100) DEFAULT NULL,
  `user_character_description` varchar(250) DEFAULT NULL,
  `user_looking_for` int(11) DEFAULT NULL,
  `user_production_house` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dr_mem_body`
--
ALTER TABLE `dr_mem_body`
  ADD PRIMARY KEY (`id_body`);

--
-- Indexes for table `dr_mem_experience`
--
ALTER TABLE `dr_mem_experience`
  ADD PRIMARY KEY (`id_experience`);

--
-- Indexes for table `dr_mem_gender`
--
ALTER TABLE `dr_mem_gender`
  ADD PRIMARY KEY (`id_gender`);

--
-- Indexes for table `dr_mem_hairs`
--
ALTER TABLE `dr_mem_hairs`
  ADD PRIMARY KEY (`id_hair`);

--
-- Indexes for table `dr_mem_hair_colors`
--
ALTER TABLE `dr_mem_hair_colors`
  ADD PRIMARY KEY (`id_hair`);

--
-- Indexes for table `dr_mem_languages`
--
ALTER TABLE `dr_mem_languages`
  ADD PRIMARY KEY (`id_language`);

--
-- Indexes for table `dr_mem_projects`
--
ALTER TABLE `dr_mem_projects`
  ADD PRIMARY KEY (`id_project`);

--
-- Indexes for table `dr_mem_roles`
--
ALTER TABLE `dr_mem_roles`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `dr_mem_skills`
--
ALTER TABLE `dr_mem_skills`
  ADD PRIMARY KEY (`id_skills`);

--
-- Indexes for table `dr_mem_skins`
--
ALTER TABLE `dr_mem_skins`
  ADD PRIMARY KEY (`id_skin`);

--
-- Indexes for table `dr_mem_type`
--
ALTER TABLE `dr_mem_type`
  ADD PRIMARY KEY (`id_type`);

--
-- Indexes for table `dr_mem_users`
--
ALTER TABLE `dr_mem_users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `dr_mem_users_details`
--
ALTER TABLE `dr_mem_users_details`
  ADD PRIMARY KEY (`user_details_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dr_mem_body`
--
ALTER TABLE `dr_mem_body`
  MODIFY `id_body` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `dr_mem_experience`
--
ALTER TABLE `dr_mem_experience`
  MODIFY `id_experience` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `dr_mem_gender`
--
ALTER TABLE `dr_mem_gender`
  MODIFY `id_gender` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `dr_mem_hairs`
--
ALTER TABLE `dr_mem_hairs`
  MODIFY `id_hair` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `dr_mem_hair_colors`
--
ALTER TABLE `dr_mem_hair_colors`
  MODIFY `id_hair` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `dr_mem_languages`
--
ALTER TABLE `dr_mem_languages`
  MODIFY `id_language` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `dr_mem_projects`
--
ALTER TABLE `dr_mem_projects`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `dr_mem_roles`
--
ALTER TABLE `dr_mem_roles`
  MODIFY `id_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `dr_mem_skills`
--
ALTER TABLE `dr_mem_skills`
  MODIFY `id_skills` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `dr_mem_skins`
--
ALTER TABLE `dr_mem_skins`
  MODIFY `id_skin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `dr_mem_type`
--
ALTER TABLE `dr_mem_type`
  MODIFY `id_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `dr_mem_users`
--
ALTER TABLE `dr_mem_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `dr_mem_users_details`
--
ALTER TABLE `dr_mem_users_details`
  MODIFY `user_details_id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
