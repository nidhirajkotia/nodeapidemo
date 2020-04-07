const express = require("express");
var router = express.Router();
const db = require("../controller/employee");
var exphbs  = require('express-handlebars');
// Auto-generated swagger-ui generated from express based on a swagger.json file
const swagger_ui = require('swagger-ui-express');
const swagger_document = require('../swagger/swagger.json');
 
// Hide the Swagger UI title bar marked in Green color 
var options = {
  customCss: '.swagger-ui .topbar { display: none }'
};

// Middleware that is specific to this router
router.use('/employeeapi', swagger_ui.serve, swagger_ui.setup(swagger_document, options));

// Define the route to display all the employees from db
router.get("/employeelist", db.employee_list);

// Define the route for home page
 router.get('/', function (req, res) {
     res.render('home');
 });

// Define the route to add the employee in db
router.post("/addemployee", db.add_employee);

// Allow the function to be called like a function when required
module.exports = router;
