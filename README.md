# Node API demo with Swagger, Mocha and Postgres

Created application of Node API using below modules:

  - Express framework
  - Swagger UI
  - Mocha
  - Postgres database

# Express Framework
Express is a flexible Node.js web application framework that provides a robust set of features for web applications.
Below files and folders are used in the application:

root <br />
└──  controller <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  employee.js <br />
└──  model <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  dboperation_postgres.js <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  dboperation_sql.js <br />
└──  views <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  home.handlebars <br />
└── routes <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  routes.js <br />
└── swagger <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──   swagger.js <br />
└── mocha <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  test.js <br />
└──  index.js <br />
└──  eslintrc <br />
└──  package.json <br />
└──  README.md <br />

   
- index.js: Acts as the main file of the project where we initialize the app and other elements of the project.
- package.json: Takes care of the dependencies, the scripts to run with the npm command, and the version of project.
- routes: Define the app routes, with HTTP methods. For example, in the application two routes are defined '/employeelist' and '/addemployee'.
- middlewares: We can write middlewares to interpret all incoming requests before moving to the route handler. 
- mocha: Here we can write all the unit tests or acceptance tests for the API server.

# Swagger UI
Swagger is a specification and complete framework implementation for describing, producing, consuming, and visualizing RESTful web services. It is an auto-generated swagger-ui generated from express based on a swagger.json file

## Importing
` 
const swaggerUi = require('swagger-ui-express'); 
`

# Mocha
Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

# Postgres
node-postgres is a collection of node.js modules for interfacing with PostgreSQL database.

## Installing
`
npm install pg
`
## Features
- Connection pooling
- Parameterized queries
- Named statements
