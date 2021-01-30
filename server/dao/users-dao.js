let connection = require("./connection-wrapper");
const ServerError = require("../errors/server-error")
const ErrorType = require("../errors/error-type");

async function addUser(user) {
    // The sql 
    let sql = "INSERT INTO users (userID,password,name,lastName ,adress,email,city)  values(?,?,?,?,?,?,?)";

    // Parameters to replace the question marks 
    let parameters = [user.userID,user.password,user.name,user.lastName ,user.address,user.email,user.city];
    try{

    // Calling async to the execute method (with parameters)
    await connection.executeWithParameters(sql, parameters);
    }catch(error) {
      throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);

    }
}

async function login(user) {
    let sql = "SELECT u.Id, u.name, u.city, u.adress, u.userType, s.shoppin_cartId ,s.isCheckedOut FROM users u LEFT JOIN shopping_cart s ON u.Id =s.userId WHERE email = ? AND password =? ORDER BY s.shoppin_cartId DESC";
    let parameters = [user.email, user.password];

    try{
    let usersLoginResult;
    usersLoginResult = await connection.executeWithParameters(sql, parameters);
   
    return usersLoginResult[0]

    } catch(error){
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);

    }
    
}


async function isUserExistByID(userId) {
    let sql="SELECT userID FROM users where userID=?";
    let parameters = [userId]
    let userExists;
    try{
    userExists = await connection.executeWithParameters(sql, parameters);
    if(userExists[0]==undefined){
        return false
    }
    return true}
    catch(error){
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  
    }
}

module.exports = {
    addUser,
    isUserExistByID,
    login
}

