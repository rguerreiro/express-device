var path = require('path');

function BaseTest() {
}

BaseTest.prototype.run_test = function(filename, test_dir) {
    if(typeof nodeunit === "undefined") {
        if(!test_dir) test_dir = 'test/';
        
        var _nodeunit = require('nodeunit').reporters.default;
        _nodeunit.run([test_dir + path.basename(filename)]);
    }
};

module.exports = new BaseTest();