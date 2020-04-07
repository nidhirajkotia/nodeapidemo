const db = require("../model/dboperation_postgres");

module.exports = {
      
    // Method to add employee in db
    create_employee: (req, res) => {
         db.add(req,res);
    },

    // Method to fetch all the employess from db
    view_employee: (req, res) => {
      console.log('view_employee');
      db.list(req,res);
    }, 

    // Method to delete employee by ID in db
    delete_employee: (req, res) => {
      console.log('delete_employee');
         db.delete(req,res);
    }
    
};
