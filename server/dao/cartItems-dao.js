let connection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error")



async function addItemToCart(userID,product, cart){
 
    let sql= "INSERT INTO cart_product SET cartId = ?, userId = ?, productId = ?, quantity = ?, totalPice =  quantity * (SELECT productPrice FROM products WHERE productId = ?)"
    let parameters = [cart, userID ,product.product.productId, product.units, product.product.productId] 
    try{

      await connection.executeWithParameters(sql, parameters);

    } catch (error){
       throw new ServerError(ErrorType.GENERAL_ERROR, sql, error)
     }
}

async function getCartItems(userData) {
  let sql= " SELECT * FROM cart_product c JOIN shopping_cart s ON s.shoppin_cartId = c.cartId JOIN products p ON c.productId =p.productId WHERE c.cartId = ? AND s.isCheckedOut = ? "
  let params= [userData.cartId, 0];
    try{
     let myItems = await connection.executeWithParameters(sql, params);
  
   return myItems;
   } catch(error){
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error)
  }
}

  
async function isItemInCart(cartId, product) {
  let sql =
    "SELECT productId FROM cart_product WHERE cartId = ? and productId = ?";
  let parameters = [cartId, product.productId];

  try {
    let isItem;
    isItem = await connection.executeWithParameters(sql, parameters);

    if (isItem == null || isItem.length == 0) {
      return false;
    }

    return true;

  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
}

async function updateCartItem(cartId, product) {
  let sql =
    "UPDATE cart_product JOIN products ON cart_product.productId = products.productId SET cart_product.quantity = (cart_product.quantity + ?), cart_product.totalPice = (products.productPrice * (cart_product.quantity + ?)) WHERE cart_product.cartId = ? and products.productId = ?";
  let parameters = [ product.units, product.units, cartId, product.product.productId];
    try {
      await connection.executeWithParameters(sql, parameters);
  
    } catch (error) {
      console.log(error)
      throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  } 
}
async function getTotalPrice(userData){
  let sql = "SELECT SUM(totalPice) AS totalPice FROM cart_product c WHERE c.cartId = ?"
  let params = [userData.cartId];
  let myPrice;
     try{
       myPrice = await connection.executeWithParameters(sql, params);
       return myPrice;

     } catch (error){ 

       console.log( " dao " + error)
       throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
}
}

async function deleteCartItem(userData, productId) {
  let sql = "delete from cart_product where cartId = ? and productId = ?";
  let parameters = [userData.cartId, productId];

  let updatedItems;

  try {
    
    updatedItems =await connection.executeWithParameters(sql, parameters);
    return  updatedItems;
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
}

async function deleteCartByCartId(userData){
  let sql="DELETE FROM cart_product where cartId=?"
  let parameters = [userData.cartId]
  try{

  deletedCartItems=await connection.executeWithParameters(sql,parameters)
  return deletedCartItems;

  }catch(err){

  }
}

module.exports = {
    addItemToCart,
    getCartItems,
    isItemInCart,
    updateCartItem,
    deleteCartByCartId,
    deleteCartItem,
    getTotalPrice
}
