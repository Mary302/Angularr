let usersLogic = require("../logic/users-logic");
const express = require("express");
let ServerError = require("./../errors/server-error");
let ErrorType = require("./../errors/error-type");

const router = express.Router();

// POST http://localhost:3000/users
router.post("/register", async (request, response, next) => {

    // Extracting the JSON from the packet's BODY
    let user = request.body;

    try {
        await usersLogic.addUser(user);
        response.json();
    }
    catch (error) {
        console.log(error.message);
        console.log("Failed to add user");
        console.error(error);
        response.status(600).send(error.message);
    }
});

// POST http://localhost:3000/users/login
router.post("/login", async (request, response, next) => {

    // Extracting the JSON from the packet's BODY
    let user = request.body;

    try {
        let successfullLoginData = await usersLogic.login(user);
        response.json(successfullLoginData);
    }
    catch (err) {
        console.error(err);
        response.status(600).send(err.message);
    }
});

module.exports = router;
