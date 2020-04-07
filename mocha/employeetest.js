const assert = require('assert');
const fs = require('fs');

let employee = require('../controller/employee');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);

describe('employee', () => {
  /*
  * Test the /GET route
  */
  describe('/GET employee', () => {
      it('it should GET all the employee', (done) => {
        chai.request(server)
            .get('/view_employee')
            .end((err, res) => {
                  console.log("Success Response");
                  res.should.have.status(200);
              done();
            });
      });
  });

});
// end mocha

function iThrowError(msg) {
    throw new Error(msg);
}
describe('check', function() {
    it('Check if package.json file exists or not', function(done) {
        const path = '././package.json';
        if (fs.existsSync(path)) {
            console.log("success");
            done();
        } else {
            assert.throw(iThrowError('Package.json file is not found'), Error, 'Error thrown');
        }
    })
});
