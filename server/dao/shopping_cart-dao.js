let connection = require("./connection-wrapper");
const ServerError = require("../errors/server-error")
const ErrorType = require("../errors/error-type");



async function isShoppingCartExisting(user){
  let sql="SELECT * FROM shopping_cart WHERE userId=? AND isCheckedOut='0'"
  parameters = [user.Id]

  try{
  let cartExists = await connection.executeWithParameters(sql, parameters);
 
  return cartExists;

   } catch(error){
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);

  }
}

async function createShoppingCart(user){

  let date = new Date()
  let sql = "INSERT INTO shopping_cart (creationDate, userId)  values(?, ?)";
  let parameters = [date, user.Id];

  let insertedId = await connection.executeWithParameters(sql, parameters);
  return insertedId;

}



async function getRecentCartByUserId(user) {
    let sql =
      "SELECT * FROM shopping_cart where isCheckedOut='null' AND userId = ? ORDER BY shoppin_cartId DESC LIMIT 1";
    let parameters = [user.Id];

    let recent_cart;
  
    try {
      recent_cart = await connection.executeWithParameters(sql, parameters);

      return recent_cart[0];

    } catch (error) {
      throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
    }

  }

  async function deleteCartByUserId(userId){
      let sql = " DELETE FROM shopping_cart where userId =?";
      let params = [userId];
      await connection.executeWithParameters(sql, params)
  }
  module.exports ={ 
                    getRecentCartByUserId,
                    deleteCartByUserId,
                    isShoppingCartExisting,
                    createShoppingCart}