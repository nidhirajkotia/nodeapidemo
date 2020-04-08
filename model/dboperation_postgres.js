// Connect with postgres database
const pg = require('pg');
const Pool = require('pg').Pool;

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

    // Method to add employee using promise in db
    add: (req, res) => {
        const {
            emp_firstname,
            emp_lastname,
            emp_email,
            emp_gender
        } = req.body;

        pool
            .query('INSERT INTO employee (firstname, lastname, email, gender) VALUES ($1, $2, $3, $4)', [emp_firstname, emp_lastname, emp_email, emp_gender])
            .then(resp => res.status(200).send(`Employee added successfully`))
            .catch(err => {
                console.log(err);
                res.status(408).send("Error while adding employee");
            })
    },

    // Method to fetch all the employess using promise from db
    list: (req, res) => {
        // Run a single query on the database

        pool
            .query('select * from employee;')
            .then(resp => res.status(200).send(resp.rows))
            .catch(err => {
                    console.log(err);
                    res.status(408).send("Error while fetching employee");
                }
            )
    },

    // Method to delete employee using promise in db
    delete: (req, res) => {
        const {
            emp_id
        } = req.body;

        pool
            .query('DELETE FROM employee WHERE id = $1', [emp_id])
            .then(resp => res.status(200).send(`Employee deleted successfully`))
            .catch(err => {
                console.log(err);
                res.status(408).send("Error while deleting employee");
            })
    }
};
