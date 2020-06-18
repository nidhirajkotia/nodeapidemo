const db = require("../model/dboperation_postgres");

const circuitBreaker = require('opossum');
const client = require('roi');

const options = {
    timeout: 3000, // If the function takes longer than 3 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 10000 // After 10 seconds, try again.
};

// Register circuit breaker events
function call_func(dynamicobj) {
    var circuit = new circuitBreaker(dynamicobj, options);
    circuit.on('open', (result) => {
        console.log("open circuit...");
    });

    circuit.on('success', (result) => {
        console.log("success circuit...");
    });

    circuit.on('timeout', (result) => {
        console.log("timeout circuit...");
    });

    circuit.on('halfOpen', (result) => {
        console.log("halfOpen circuit...");
    });

    circuit.on('close', (result) => {
        console.log("close circuit...");
    });
    return circuit;

}
module.exports = {

    // Method to create flight table in db
    create_flight_details: (req, res) => {
        
            db.create_tbl(req, res);
    },

    // Method to add flight in db
    add_flight: (req, res) => {
        db.add(req, res).then(function(resp) {
                res.status(200).send("Flight added successfully");
            })
            .catch(function(err) {
                res.status(408).send("Error while fetching flight");
            }); ;
        
    },

    // Method to fetch all the flights from db
    view_flight: (req, res) => {
        db.list(req, res).then(function(resp) {
                res.status(200).send(resp);
            })
            .catch(function(err) {
                res.status(408).send("Error while fetching flight");
            });        
    },

    // Method to delete flight by ID in db
    delete_flight: (req, res) => {
        db.delete(req, res).then(function(resp) {
                res.status(200).send(resp);
            })
            .catch(function(err) {
                res.status(408).send("Error while deleting flight");
            }); ;


    }

};
