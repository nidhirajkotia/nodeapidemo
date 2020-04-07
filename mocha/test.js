const assert = require('assert');
const fs = require('fs');

// mocha

let employee = require('../controller/employee');

//Require the dev-dependencies
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
            .get('/employeelist')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
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
