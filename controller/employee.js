const db = require("../model/dboperation_postgres");

module.exports = {
    // Method to fetch all the employess from db
    employee_list: (req, res) => {
      db.list(req,res);
    },    

    // Method to add employee in db
    add_employee: (req, res) => {
         db.add(req,res);
    }
    
};
