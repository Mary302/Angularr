const express = require("express");
const usersCache = require("../dao/cache-module");
const productsLogic = require("../logic/products-logic");
const router = express.Router();
const server = express();


server.use(express.static('client'));

router.post("/uploads", async (req,res)=>{
  try{
    let authorizationString = req.headers["authorization"];
    let token = authorizationString.substring("Bearer ".length);
    let userData = usersCache.get(token);
    // const file = req.files.file;
    let product = req.body
    console.log(JSON.stringify(product))
    if(req.files===null){
      let succesfulUpdateResponse = await productsLogic.updateProduct(product, userData)
      res.json(succesfulUpdateResponse);
 
     }else{
       console.log(req.files)
       const file = req.files.file;
       let successfulUploadResponse = await productsLogic.uploadProductImage(
         file,product,userData
       );
         console.log("PHOTO NAME "+successfulUploadResponse)
         res.json(successfulUploadResponse);
     }
  }
  catch(err){
      console.log(err)
  res.status(500).json 
  }
})

router.post("/addProduct", async (req,res)=>{
  try{
    let authorizationString = req.headers["authorization"];
    let token = authorizationString.substring("Bearer ".length);
    let userData = usersCache.get(token);
    let product = req.body
    
      const file = req.files.file;

      let successfulUploadResponse = await productsLogic.addNewProduct(
        file,product,userData
      );
        res.json(successfulUploadResponse);
    }
  
  catch(err){
      console.log(err)
  res.status(500).json 
  }
})




router.get("/", async (request, response) => {
 
  try {
    let ProductsList = await productsLogic.getAllProducts();
    response.json(ProductsList);
  } catch (err) {
    // return next(error);
    console.log("Failed to get products");
    console.error(err);
    response.status(600).send(error.message);

  }
});

router.post("/newProduct", async (request, response, next) => {

  // Extracting the JSON from the packet's BODY
  let product = request.body;

  try {
      await productsLogic.addNewProduct(product);
      response.json();
  }
  catch (err) {
      console.error(err);
      response.status(600).send(err.message);
  }
});

router.get('/amountOfProducts', async (request, response, next) => {
  try {
    let products = await productsLogic.getNumberOfproducts();
    response.json(products);
  } catch (error) {
    return next(error);
  }
}); 

router.put("/updateProduct", async (request, response, next) => {
  
  // Extracting the JSON from the packet's BODY
  let product = request.body;

  try {
      await productsLogic.updateProduct(product);
      response.json();
  }
  catch (err) {
      console.error(err);
      response.status(600).send(err.message);
  }
});



module.exports = router;
