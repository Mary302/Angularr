-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: online-shop
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `name` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(45) NOT NULL,
  `adress` varchar(250) NOT NULL,
  `userType` varchar(45) NOT NULL DEFAULT 'CUSTOMER',
  `city` varchar(45) NOT NULL,
  `userID` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`,`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('mary','mart','mary@m.com',1,'23','hagdud','ADMIN','BatYam','320790389'),('nativ','kaleo','m@m.com',3,'123','hagdud','CUSTOMER','RishonLetsyion','320903888'),('valera','mart','v@v.com',4,'123','hagdud','CUSTOMER','Natanya','123456789'),('alon','mi','a@a.com',5,'1234','hagdud','CUSTOMER','TelAviv','987654321'),('Daniel','H','d@d.com',6,'54321','lor','CUSTOMER','TelAviv','546321587'),('Matan','Levi','k@k.com',10,'432','Lori','CUSTOMER','Ashdod','432234567'),('valera','Levi','k@k.com',14,'546','hamahapilim','CUSTOMER','Haifa','455568798'),('Lola','Poz','ma@m.com',15,'14575','Path','CUSTOMER','Ashdod','435643222'),('Shira','Levi','ggg@g.com',16,'1423','HaHashmal 7','CUSTOMER','Haifa','234242421');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-23 19:30:47
