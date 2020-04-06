// Connect with postgres database
const pg = require('pg');
const Pool = require('pg').Pool;
const express = require("express");
const app = express();

pg.defaults.ssl = true;

// Create new pool with configuration
const pool = new Pool({    
    user: process.env.DB_USER,
    host: process.env.DB_HOST,    
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

module.exports = {
    // Method to fetch all the employess from db
    list: (req, res) => {
      // Run a single query on the database

        pool.query('select * from employee;', (error, results) => {
            if (error) {
                res.status(408).send("Error while fetching employee")
            }
            res.status(200).send(results.rows);
        })
    },    

    // Method to add employee in db
    add: (req, res) => {
        const {
            Emp_Firstname,
            Emp_Lastname,
            Emp_Email,
            Emp_Gender
        } = req.body;

        pool.query('INSERT INTO employee (firstname, lastname, email, gender) VALUES ($1, $2, $3, $4)', [Emp_Firstname, Emp_Lastname, Emp_Email, Emp_Gender], (error, results) => {
            if (error) {
                res.status(408).send("Error while adding employee")
            }
            res.status(200).send(`Employee added successfully`)
        })
    }
};