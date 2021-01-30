const ordersDao = require("../dao/orders-dao");
const shoppingcartDao = require("../dao/shopping_cart-dao")
const ServerError = require("../errors/server-error")
const ErrorType = require("../errors/error-type");


async function checkOut( userData, order) {
    await ordersDao.checkOut( userData, order )
    return;
    
  }
  

  async function getOrder(userId) {
    let getOrder = await ordersDao.getOrder(userId);
    if(!getOrder){
    return}
 
    return getOrder;
  }

  async function getUnavailableOrderDates() {
    try {
      let unavailable_dates = await ordersDao.getUnavailableOrderDates();
  
      return unavailable_dates;
    } catch (error) {
      throw new ServerError(ErrorType.GENERAL_ERROR, null, error);
    }
  }

  
  async function getNumberOfOrders() {
    try {
      let numberOfOrders = await ordersDao.getNumberOfOrders();
  
      return numberOfOrders;
    } catch (error) {
      throw new ServerError(ErrorType.GENERAL_ERROR, null, error);
    }
  }
  
  module.exports = {
    checkOut,
    getOrder,
    getUnavailableOrderDates,
    getNumberOfOrders
  };
  