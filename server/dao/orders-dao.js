const connection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
let ServerError = require("./../errors/server-error");


async function checkOut( userData,  order) {
    let sql = "INSERT INTO orders (userId, cartId, totalPrice, orderCity, OrderStreet, shippingDate, lastFourDigits) values(?,?,(SELECT SUM(totalPice) FROM cart_product c WHERE c.cartId = ?),?,?,?,?)"
    let params = [userData.Id, userData.cartId, userData.cartId, order.city, 
                  order.address, order.shippingdate, order.creditcard];
    try{
        await connection.executeWithParameters(sql, params);
        setCheckOut(userData)

    } catch (error){ 

        console.log( " dao " + error)
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
    }

}



async function setCheckOut(userData){
    let today = new Date()
    let sql = " UPDATE shopping_cart SET isCheckedOut = ?, checkOutDate = ? WHERE shoppin_cartId = ? "
    let params = [1, today ,userData.cartId ]
    try{
        await connection.executeWithParameters(sql, params);
        return;
   
       } catch (error){ 
   
        console.log( " dao setCheck " + error)
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
   
       }

}

async function getOrder(userId) {
    let sql = "SELECT * FROM orders JOIN cart_product on cart_product.userId = orders.userId JOIN shopping_cart on orders.userId = shopping_cart.userId WHERE orders.cartId = ?  ORDER BY creationDate DESC LIMIT 1";
    let params = [userId.cartId]

    try{
    let myOrderComplitation;
    myOrderComplitation = await connection.executeWithParameters(sql, params);
    return myOrderComplitation;
    
    } catch (error) {

        console.log( "get order dao " + error)
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);

    }
}

async function getUnavailableOrderDates() {
  let sql =
    "SELECT COUNT(*) AS 'number_of_orders', DATE_FORMAT(shippingDate, '%Y-%m-%d') AS 'ship_date'from orders where shippingDate > current_timestamp() GROUP BY shippingDate HAVING number_of_orders >= 3";

  try {
    let unavailableDates;
    unavailableDates = await connection.execute(sql);
    return unavailableDates;
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
}

async function getNumberOfOrders() {
  let sql = "SELECT COUNT(id) AS 'allOrders' FROM orders ";
  try {
    let allOrders;
    allOrders = await connection.execute(sql);
    return allOrders[0];
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
}


module.exports = {checkOut,
    setCheckOut,
    getOrder,
    getUnavailableOrderDates,
    getNumberOfOrders
    }
