const shoppingCartDao = require('../dao/shopping_cart-dao')
let usersCache = require("../dao/cache-module");


// async function getMyCart(userID){
//   return await shoppingCartDao.getMyCart(userID);

// }
async function isShoppingCartExisting(user){
  let cartExists;
  cartExists = await shoppingCartDao.isShoppingCartExisting(user);
  if(cartExists.length !== []){
    return true;
} 

    await shoppingCartDao.createShoppingCart(user);
    return false;
   

}


async function getRecentCartByUserId( userData, token) {

    let recent_cart = await shoppingCartDao.getRecentCartByUserId(userData);
    if (recent_cart != undefined && recent_cart.length != 0) {
      userData.cartId = recent_cart.shoppin_cartId;
      usersCache.set(token,userData);
      return recent_cart.shoppin_cartId;
    }
    if (recent_cart === undefined || recent_cart.length == 0){
       let newCart =await createShoppingCart(userData);
       return newCart.insertId;

    }
  
    
  }

  async function createShoppingCart (user){
    let newCart = await shoppingCartDao.createShoppingCart(user);
    return newCart;

}

  async function deleteCartByUserId (userId){
      await shoppingCartDao.deleteCartByUserId(userId);

  }
module.exports = {
    getRecentCartByUserId,
    deleteCartByUserId,
    isShoppingCartExisting,
    createShoppingCart}