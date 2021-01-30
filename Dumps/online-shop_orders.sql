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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `userId` bigint NOT NULL,
  `cartId` bigint NOT NULL,
  `totalPrice` int DEFAULT NULL,
  `orderCity` varchar(45) NOT NULL,
  `orderStreet` varchar(45) NOT NULL,
  `shippingDate` date NOT NULL,
  `lastFourDigits` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (15,1,2,122,'RishonLetsyion','hagdud','2020-08-21',1234),(19,6,5,32,'RishonLetsyion','hamahapilim','2020-08-19',9876),(20,1,1,154,'Jerusalem','hagdud','2020-08-21',3523),(28,4,4,32,'Bat Yam','yerushalaim','2020-08-08',4321),(37,1,6,202,'Ashdod','hamahapilim','2020-09-03',4568),(38,5,27,32,'Ashdod','hamahapilim','2020-08-31',9876),(39,1,29,202,'BatYam','Lola','2020-08-08',3587),(40,1,30,202,'BatYam','Lolita','2020-08-08',3587),(41,4,32,128,'Natanya','hagdud 6','0002-02-02',4325),(42,4,32,160,'Haifa','hagdud 6','2020-09-01',1243),(43,5,31,484,'Ashdod','Harosh','2020-09-03',5432),(50,5,39,124,'Rehovot','hagdud','2020-09-04',9876),(53,1,42,116,'BeerSheba','Harosh','2020-09-13',1243),(55,4,139,55,'Tel Aviv','hagdud 6','2020-08-08',4325),(56,1,45,94,'Ashdod','hagdud','2020-09-06',1243),(59,1,48,223,'Ashdod','hamahapilim','2020-09-06',9876),(64,1,65,106,'Ashdod','hagdud','2020-09-23',5678),(66,1,110,86,'Haifa','hamahapilim','2020-09-11',9876),(80,1,135,80,'Ashdod','hamahapilim','2020-09-30',9876),(83,4,138,48,'Haifa','hagdud','2020-09-15',4568),(86,4,141,68,'Jerusalem','hamahapilim','2020-09-22',4325),(94,5,174,136,'TelAviv','hamahapilim','2020-09-10',4325),(95,5,176,60,'Haifa','hagdud','2020-09-10',5678),(96,5,177,860,'TelAviv','hagdud 6','2020-09-19',4568),(97,5,179,684,'TelAviv','hamahapilim','2020-09-22',4568),(98,5,180,91,'Haifa','slfh','2020-09-23',5678),(99,5,180,91,'Jerusalem','hagdud 6','2020-09-23',4568),(100,4,175,721,'Haifa','hamahapilim','2020-09-21',4568),(101,4,181,666,'TelAviv','hamahapilim','2020-09-21',4568),(102,4,182,146,'TelAviv','hagdud 6','2020-09-27',1234),(103,5,185,721,'RishonLetsyion','hamahapilim','2020-09-23',5678),(104,5,186,666,'RishonLetsyion','hamahapilim','2020-09-23',4568),(105,5,187,776,'TelAviv','hagdud 6','2020-09-27',1456),(106,4,184,1387,'TelAviv','hamahapilim','2020-09-27',1234),(107,4,188,721,'TelAviv','hamahapilim','2020-09-29',4568),(108,5,190,75,'TelAviv','hagdud','2020-09-25',9876),(109,5,190,75,'TelAviv','hagdud','2020-09-24',4325),(110,5,190,75,'TelAviv','hagdud','2020-09-25',9876);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-23 18:08:29
