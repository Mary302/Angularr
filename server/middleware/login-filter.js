const expressJwt = require('express-jwt');
const config = require('../config');

// Extracting the text from the secret's JSON
let { secret } = config;
//console.log(secret);

function authenticateJwtRequestToken() {
    // Load secret into 
    return expressJwt({ secret }).unless({
        path: [
            // public routes that don't require authentication
            '/users/login',
            '/users/register',
            '/orders/numberOfOrders',
            '/products/amountOfProducts'
            
        ]
    });
}

module.exports = authenticateJwtRequestToken;
