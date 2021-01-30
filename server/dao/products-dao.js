let connection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error")


async function getAllProducts() {
    let sql = "SELECT productId,productName, productPrice, productDescription, productImage, categoryName from products"

    let allProducts;

    try{
    allProducts = await connection.execute(sql);
    return allProducts;

    } catch(error){
       throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
 
    }
}

async function addNewProduct(product,URL) {
    console.log("PRODUCT DAO ")
    let sql = "INSERT INTO products (productName, categoryName, productPrice, productImage, productDescription) values (?,?,?,?,?)"
    let params = [product.productName,
                  product.categoryName, 
                  product.productPrice, 
                  URL,
                  product.productDescription]

    try{
     await connection.executeWithParameters(sql, params);
     return;
    
    } catch(error){
       throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
 
    }
}



async function updateProduct(product) {
    let sql =
      "UPDATE products SET productName = ?, productPrice = ?, categoryName = ? where productId = ?";
    let parameters = [
      product.productName,
      product.productPrice,
      product.categoryName,
      product.productId,
    ];
  
    try {
      await connection.executeWithParameters(sql, parameters);
    } catch (error) {
      throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
    }
  }

  async function countProducts() {
    let sql = "SELECT COUNT(productId) AS 'productAmount' FROM products";
  
    try {
      let amount_of_products;
      amount_of_products = await connection.execute(sql);
  
      return amount_of_products[0];
    } catch (error) {
      throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
  }

async function uploadProductImage(imageName,product) {
    let sql = "UPDATE products SET productImage = ? WHERE productId = ?"
    let params = [imageName,product.productId]
  
    try{
     await connection.executeWithParameters(sql, params);
    
    return ;
    } catch(error){
       throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  
    }
  }



module.exports = {getAllProducts, updateProduct,
    addNewProduct,
    uploadProductImage,
    countProducts}
