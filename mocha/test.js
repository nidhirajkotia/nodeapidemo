const assert = require('assert');
const fs = require('fs');

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
