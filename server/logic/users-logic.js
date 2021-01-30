let usersDao = require("../dao/users-dao")
let usersCache = require("../dao/cache-module");
let ServerError = require("./../errors/server-error");
let ErrorType = require("./../errors/error-type");
let ShoppingCartLogic = require("./shopping_cart-logic")


const jwt = require('jsonwebtoken');
const config = require('../config.json');

const RIGHT_SALT = "ksdjfhbAWEDCAS29!@$addlkmn";
const LEFT_SALT = "32577098ASFKJkjsdhfk#$dc";


async function addUser(user) {
    // Validations
    if (await usersDao.isUserExistByID(user.userID)===true) {
        console.log("User ID already exist");
        throw new ServerError(ErrorType.USER_NAME_ALREADY_EXIST);
    }
    await usersDao.addUser(user);
}

async function login(user) {

    let userData = await usersDao.login(user);
    

    if (userData == null || userData.length == 0) {
        throw new ServerError(ErrorType.UNAUTHORIZED);
        
    }
    let saltedUserName = LEFT_SALT + user.email + RIGHT_SALT;
    
    // Hashing the userName (with salt)
    const jwtToken = jwt.sign({ sub: saltedUserName }, config.secret);

    if (userData.isCheckedOut === 1 || userData.shoppin_cartId == null){
        await ShoppingCartLogic.createShoppingCart(userData);
        
    }

    let goToCache = {
        Id: userData.Id,
        cartId: userData.shoppin_cartId,
        userType: userData.userType,
      };
    usersCache.set( jwtToken, goToCache );

    let successfullLoginResponse = { token: jwtToken,
                                     cartId: userData.shoppin_cartId,
                                     userType: userData.userType,
                                     name: userData.name,
                                     city: userData.city,
                                     address: userData.adress,
                                     isCheckedOut: userData.isCheckedOut };
    return successfullLoginResponse;
}

    
module.exports = {
    addUser,
    login
}

