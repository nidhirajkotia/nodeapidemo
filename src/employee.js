const db = require("../model/dboperation_postgres");

module.exports = {
    // Method to fetch all the employess from db
    employeelist: (req, res) => {
      db.list(req,res);
    },    

    // Method to add employee in db
    addemployee: (req, res) => {
         db.add(req,res);
    }
    
};