const cartItemsLogic = require("../logic/cartItems-logic")
const express = require("express");
let usersCache = require("../dao/cache-module");


const router = express.Router();

router.post("/", async (request, response, next) => {

  //extracting the token from the req.headers so we cann access usersCache for details.
    let authorizationString = request.headers["authorization"];
    let token = authorizationString.substring("Bearer ".length);
    let userData = usersCache.get(token);

    //extracting the product info from body.
    let product = request.body;

    try {
        await cartItemsLogic.addItemToCart(userData ,product);
        response.json();
    }
    catch (err) {
        // return next(error);
        console.error(err);
        response.status(600).send(err.message);
    }
});


router.get("/myCart", async (request, response, next) => {

  //extracting the token from the req.headers so we cann access usersCache for details.
    let authorizationString = request.headers["authorization"];
    let token = authorizationString.substring("Bearer ".length);
    let userData = usersCache.get(token);
  
    try {
        let myOrder = await cartItemsLogic.getCartItems( userData);
        response.json (myOrder)
      } catch (err) {
        // return next(error);
        console.log("Failed to get cart items");
        console.error(err);
        response.status(600).send(err.message);
    
      }
  
  }); 

  
  router.delete("/:id", async (request, response, next) => {
    
      //extracting the products id from query
      let productId = request.params.id;
      
        //extracting the token from the req.headers so we cann access usersCache for details.
      let authorizationString = request.headers["authorization"];
      let token = authorizationString.substring("Bearer ".length);
      let userData = usersCache.get(token);
      
    try {
      let updatedItems = await cartItemsLogic.deleteCartItem(userData, productId);
      response.json(updatedItems);
    } catch (error) {
      return next(error);
    }
  });

  router.delete("/",async (request, response) =>{

      //extracting the token from the req.headers so we cann access usersCache for details.
    let authorizationString = request.headers["authorization"];
    let token = authorizationString.substring("Bearer ".length);
    let userData = usersCache.get(token);
    try{
      let cartToDelete = await cartItemsLogic.deleteCartByCartId(userData,token)
      response.json(cartToDelete)
    }
    catch (err) {
      console.log("Failed to get carts");
      console.error(err);
      response.status(600).send(err.message);
    }
  })

  router.get("/myPrice", async (request, response, next) => {

    let authorizationString = request.headers["authorization"];
    let token = authorizationString.substring("Bearer ".length);
    let userData = usersCache.get(token);
  
    try {
        let myPrice = await cartItemsLogic.getTotalPrice( userData);
        response.json (myPrice)
      } catch (err) {
        // return next(error);
        console.log("Failed to get cart items");
        console.error(err);
        response.status(600).send(err.message);
    
      }
  
  }); 
    module.exports = router;