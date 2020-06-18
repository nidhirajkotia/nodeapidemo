const express = require("express");
var router = express.Router();
const flight = require("../controller/flight");
var exphbs = require('express-handlebars');
// Auto-generated swagger-ui generated from express based on a swagger.json file
const swagger_ui = require('swagger-ui-express');
const swagger_document = require('../swagger/swagger.json');

// Hide the Swagger UI title bar marked in Green color 
var options = {
    customCss: '.swagger-ui .topbar { display: none }'
};

// Middleware that is specific to this router
router.use('/flightapi', swagger_ui.serve, swagger_ui.setup(swagger_document, options));

// Define the route for home page
router.get('/', function(req, res) {
    res.render('home');
});


router.get("/create_flightdetails_tbl", flight.create_flight_details);

router.post("/add_flight", flight.add_flight);

// Define the route to display all the flightapi from db
router.get("/view_flight", flight.view_flight);

// Define the route to delete the flight from db
router.delete("/delete_flight", flight.delete_flight);

// Allow the function to be called like a function when required
module.exports = router;
