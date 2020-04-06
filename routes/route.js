const express = require("express");
var router = express.Router();
const db = require("../controller/employee");
var exphbs  = require('express-handlebars');
// Auto-generated swagger-ui generated from express based on a swagger.json file
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');
 
// Hide the Swagger UI title bar marked in Green color 
var options = {
  customCss: '.swagger-ui .topbar { display: none }'
};

// Middleware that is specific to this router
router.use('/employeeapi', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// Define the route to display all the employees from db
router.get("/employeelist", db.employeelist);

// Define the route for home page
 router.get('/', function (req, res) {
     res.render('home');
 });

// Define the route to add the employee in db
router.post("/addemployee", db.addemployee);

// Allow the function to be called like a function when required
module.exports = router;
