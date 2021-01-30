const productsDao = require("../dao/products-dao");
var uuid = require('node-uuid');
const path = require('path');
const fs = require('fs');
const util = require('util')
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error")



async function getAllProducts() {

  return await productsDao.getAllProducts();
}

async function addNewProduct(file,product,userData) {
  try {
    if (userData.userType != "ADMIN") {
      throw new ServerError(ErrorType.UNAUTHORIZED);
    } else {
      let URL = await copyFileToDirectory(file)
      await productsDao.addNewProduct(product,URL);
    }
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, null, error);
  }
}


async function copyFileToDirectory(file){
  const fileName = file.name;
  const extention = path.extname(fileName)
  const md5 = file.md5;
  const URL = md5+extention
  await util.promisify(file.mv)("../../angular-project/server/public/"+URL)

  const pathToFile = path.join(__dirname,'../public', md5+extention)
  const pathToNewDestination = path.join(__dirname,'../../',"client/src/assets", md5+extention)

  fs.copyFile(pathToFile, pathToNewDestination, function(err) {
    if (err) {
      throw err
    } else {
      console.log("Successfully copied and moved the file!")
    }
  })
  return URL

}


async function uploadProductImage(file,product,userData){
  await updateProduct(product, userData)
  let URL = await copyFileToDirectory(file)
  await productsDao.uploadProductImage(URL,product);
}

async function updateProduct(product, userData) {
  try {
    if (userData.userType != "ADMIN") {
      throw new ServerError(ErrorType.UNAUTHORIZED);
    }
    await productsDao.updateProduct(product);
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, null, error);
  }
}


async function getNumberOfproducts() {
    try {
      let numberOfProducts = await productsDao.countProducts();
  
      return numberOfProducts;
    } catch (error) {
      throw new ServerError(ErrorType.GENERAL_ERROR, null, error);
    }
  }

module.exports = {getAllProducts, addNewProduct, updateProduct,
  uploadProductImage, getNumberOfproducts
};
