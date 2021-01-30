const shoppingCartLogic = require("../logic/shopping_cart-logic")
const express = require("express");
let usersCache = require("../dao/cache-module");
const router = express.Router();



router.get("/", async (request, response, next) => {

  
    try {  
    let authorizationString = request.headers["authorization"];
    let token = authorizationString.substring("Bearer ".length);
    let userData = usersCache.get(token);

        let shoppingCart = await shoppingCartLogic.getRecentCartByUserId(userData, token);
        response.json(shoppingCart);
      } catch (err) {
        // return next(error);
        console.log("Failed to get shopping cart");
        console.error(err);
        response.status(600).send(err.message);
    
      }
});

module.exports = router;
