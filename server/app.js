var cors = require('cors')
const cartItemsController = require('./controllers/cartItems-controller')
const express = require("express");
const usersController = require("./controllers/users-controller");
const productsController = require("./controllers/products-controller");
const shopping_cartController = require("./controllers/shopping_cart-controller");
const orderssController = require("./controllers/orders-controller");
const server = express();
const loginFilter = require('./middleware/login-filter');
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
const fileUpload = require("express-fileupload");

// enable other domains to connect to my server
server.use(cors());
server.use(fileUpload());

// If the url ends with /users, then the request is being transferred 
// to usersController for further processing
server.use(loginFilter());

// Extract the JSON from the body and create request.body object containing it: 
server.use(express.json());

server.use(express.static('assets'))
server.use("/cartItem",cartItemsController);
server.use("/products", productsController);
server.use("/users", usersController);
server.use("/shoppingCart", shopping_cartController);
server.use("/orders", orderssController);

const fs = require('fs');

server.listen(3000, () => console.log("Listening on http://localhost:3000"));



module.exports = server;