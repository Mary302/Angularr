const express = require("express");
const router = express.Router();
let usersCache = require("../dao/cache-module");
const orderLogic = require('../logic/orders-logic');
const shoppingcartDao = require("../dao/shopping_cart-dao");

router.post("/", async (request, response, next) => {
 
    try {
      // In order to continue, we need to extract the user's id 
    let authorizationString = request.headers["authorization"];
    // Removing the bearer prefix, leaving the clean token
       let token = authorizationString.substring("Bearer ".length);
       let userData = usersCache.get(token);
       
       let order = request.body;
    
      await orderLogic.checkOut( userData, order);
      response.json();
    } catch (error) {
        console.log("controller" + error)
      return next(error);
    }
  });

  router.get("/myOrder", async (request, response) => {
    
    try {
        // In order to continue, we need to extract the user's id 
    let authorizationString = request.headers["authorization"];
    // Removing the bearer prefix, leaving the clean token
       let token = authorizationString.substring("Bearer ".length);
       let userData = usersCache.get(token);
        let myOrder = await orderLogic.getOrder(userData);

        response.json(myOrder);
    } catch (err) {
      // return next(error);
      console.log("Failed to get order");
      console.error(err);
      response.status(600).send(err.message);
  
    }
  });

  router.get('/numberOfOrders', async (request, response, next) => {
    try {
      let orders = await orderLogic.getNumberOfOrders();
      response.json(orders);
    } catch (error) {
      return next(error);
    }
  });  

 

  router.get("/unavailable_dates", async (request, response, next) => {
    try {
      let unavailable_dates = await orderLogic.getUnavailableOrderDates();
      response.json(unavailable_dates);
    } catch (error) {
      return next(error);
    }
  });  
  module.exports = router;
