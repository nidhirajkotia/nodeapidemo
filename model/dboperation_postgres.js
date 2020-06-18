// Connect with postgres database
const pg = require('pg');
const Pool = require('pg').Pool;
var Promise = require('promise');
require('dotenv').config();

pg.defaults.ssl = true;

// Create new pool with configuration
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

console.log(process.env.DB_USER);
module.exports = {


    // Method to create flight_details using promise in db
    create_tbl: (req, res) => {
        pool.query('CREATE TABLE flight_details( \
                id SERIAL PRIMARY KEY, \
                flight_source VARCHAR(20) NOT NULL, \
                flight_destination VARCHAR(20) NOT NULL, \
                flight_departure_date TIMESTAMP NOT NULL, \
                flight_arrival_date TIMESTAMP NOT NULL, \
                flight_capacity integer NOT NULL, \
                flight_type VARCHAR(10) NOT NULL \
              );', (error, results) => {
            if (error) {
                console.log('Inside error..........');
                          return res.status(200).send("fail");
            }
            console.log('Inside success..........');
            return res.status(200).send("success");
        })
    },

    // Method to add flight_details using promise in db

    add: (req, res) => {
        const {
            flight_source,
            flight_destination,
            flight_departure_date,
            flight_arrival_date,
            flight_capacity,
            flight_type
        } = req.body;
        return new Promise((resolve, reject) => {
            pool
                .query('INSERT INTO flight_details (flight_source, flight_destination, flight_departure_date, flight_arrival_date, flight_capacity, flight_type) VALUES ($1, $2, $3, $4, $5, $6)', 
                    [flight_source,
            flight_destination,
            flight_departure_date,
            flight_arrival_date,
            flight_capacity,
            flight_type])
                .then(resp => {
                    resolve(resp);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                })
        });
    },

    // Method to fetch all the flight_details using promise from db
    list: (req, res) => {
        // Run a single query on the database
        return new Promise((resolve, reject) => {
            pool
                .query('select * from flight_details;')
                .then(resp => {
                    resolve(resp.rows);
                })
                .catch(err => {
                        reject(err);
                    }

                )
        });
    },

    // Method to delete flight_details using promise in db
    delete: (req, res) => {
        const {
            id
        } = req.body;

        return new Promise((resolve, reject) => {
            pool
                .query('DELETE FROM flight_details WHERE id = $1', [id])
                .then(resp => {
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        });
    }
};
