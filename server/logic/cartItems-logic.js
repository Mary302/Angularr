const cartItemsDao = require('../dao/cartItems-dao')
const shopping_cartDao = require('../dao/shopping_cart-dao');


async function addItemToCart(userData,product){
  
    if (
      await cartItemsDao.isItemInCart(userData.cartId, product.product)
    ) {
      await cartItemsDao.updateCartItem(userData.cartId, product);
    } else {
       await cartItemsDao.addItemToCart(userData.Id ,product, userData.cartId);
    }
  

}

async function getTotalPrice(userData){
  
   let myPrice = await cartItemsDao.getTotalPrice(userData)
   return myPrice;
  


}
async function getCartItems( userData) {
    let myItems = await cartItemsDao.getCartItems(userData);
    if(!myItems) {
      console.log("you dont have items yet")
      return
    }
    return myItems;
   
  }

  async function deleteCartByCartId(userData) {
    return await cartItemsDao.deleteCartByCartId(userData)

}

  async function deleteCartItem(userData, productId) {
    try {
      productId = productId.substring(1);
      let updatedItems = await cartItemsDao.deleteCartItem(userData, productId);
       return updatedItems;
    } catch (error) {
      throw new ServerError(ErrorType.GENERAL_ERROR, null, error);
    }
  }
module.exports = {
    addItemToCart,
    getCartItems,
    deleteCartItem,
    deleteCartByCartId,
    getTotalPrice
}