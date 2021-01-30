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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `productId` int NOT NULL AUTO_INCREMENT,
  `productName` varchar(45) NOT NULL,
  `categoryName` varchar(45) NOT NULL,
  `productPrice` int NOT NULL,
  `productImage` varchar(45) DEFAULT NULL,
  `productDescription` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`productId`),
  KEY `categoryName_idx` (`categoryName`),
  CONSTRAINT `categoryName` FOREIGN KEY (`categoryName`) REFERENCES `cateories` (`CateoryName`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Shampoo','Bathroom',17,'ad905abd79fe8ffdb1c2d8da9f0492ec.jpg','Great Shampoo for all types of hair'),(2,'Conditioner','Bathroom',17,'19c5eaecf9d9ac09ad7cd397b40d7a63.jpg','Great Condtioner for all types of hair'),(3,'Soap','Bathroom',22,'712e3e93d1abae39fe9922800728c555.jpg','Handmade soap'),(4,'Slippers','Home',29,'6b433a3793f44099463e0809ab10606e.jpg','Cozy and comforable slippers for the house'),(5,'Tableware Set','Kitchen',65,'4c596bf759616532c90123c5f26de19a.jpg','Best tableware, 4 units for piece'),(6,'set of glasses','Kitchen',35,'4a398a35b0b8178fd37ff48dea92410e.jpg','Small small for cold drinks'),(7,'Cultery Set','Kitchen',49,'9fed2cc4d5865c4939fe15eb64c418d9.jpg','5 units of forks, spoons,tea-spoons and knifes'),(8,'4 toothbrushes','Bathroom',20,'1273c1cf2be4980bd7715278bfe0d8ed.jpg','4 Colgate Toothbrushed '),(9,'Teapot','Kitchen',39,'85881cabb287b257825698dc61e1e6b2.jpg','Great teapot for your kitchen.'),(10,'Air Freshener','Cleaning Products',19,'2250ec9ec4bf716015659597104037bd.jpg','With Vanilla scent.'),(11,'Nativos','Home',555,'2b04df3ecc1d94afddff082d139c6f15.jpg','sometimes sweet sometime ass'),(12,' Spray','Cleaning Products',30,'7b12f0b7d3707bc4432aac7a0856fda0.jpg','Antibacterial spray for daily usage.'),(13,'Toilet Paper','Bathroom',49,'222f35caca0173049f5538673dd0ce49.jpg','40 units of double-layered paper.'),(14,'flowers','Home',50,'bdf3bf1da3405725be763540d6601144.jpg','Plastic flowers to decorate your house.'),(15,'Wet Wipes','Bathroom',30,'756235a6c1f48146833802137090ae40.jpg','Softest wet wipes, toilet washable.'),(16,'Bleach','Cleaning Products',14,'58ebd4dbf50c866125b9df9f3c50dfbc.jpg','Bleach with lemo scent.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-23 18:08:28
