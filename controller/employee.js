const db = require("../model/dboperation_postgres");

const circuitBreaker = require('opossum');
const client = require('roi');

const options = {
    timeout: 3000, // If the function takes longer than 3 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 10000 // After 10 seconds, try again.
};

// Implement circuit breaker on view_employee method
var circuit = new circuitBreaker(db.list, options);

module.exports = {
    // Method to add employee in db
    create_employee: (req, res) => {
        db.add(req, res).then(function(resp) {
                res.status(200).send("Employee added successfully")
            })
            .catch(function(err) {
                res.status(408).send("Error while adding employee")
            });
    },

    // Method to fetch all the employess from db
    view_employee: (req, res) => {

        circuit.fire(req, res).then(function(resp) {
                res.status(200).send(resp);
            })
            .catch(function(err) {
                res.status(408).send("Error while fetching employee");
            })
    },

    // Method to delete employee by ID in db
    delete_employee: (req, res) => {

        db.delete(req, res).then(function(resp) {
                res.status(200).send("Employee deleted successfully");
            })
            .catch(function(err) {
                res.status(408).send("Error while deleting employee");
            })

    }

};

circuit.on('open', (result) => {
    console.log("open circuit...");
});

circuit.on('success', (result) => {
    console.log("success circuit...")
});

circuit.on('timeout', (result) => {
    console.log("timeout circuit...");
});

circuit.on('halfOpen', (result) => {
    console.log("halfOpen circuit...");
});

circuit.on('close', (result) => {
    console.log("close circuit...")
});
