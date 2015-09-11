var device = require('../lib/device.js'),
    assert = require('assert');

describe('cloudfront', function() {
    describe('with desktop header',function(){
        it('should get device type desktop', function(){
            var type = device.customCheck({ headers: { 'cloudfront-is-desktop-viewer': 'true' } });
            assert.equal(type, 'desktop');
        });
    });
    describe('with mobile viewer', function () {
        it('should get device type phone', function () {
            var type = device.customCheck({ headers: { 'cloudfront-is-mobile-viewer': 'true' } });
            assert.equal(type, 'phone');
        });
    });
    describe('with tablet viewer', function () {
        it('should get device type tablet', function () {
            var type = device.customCheck({ headers: { 'cloudfront-is-tablet-viewer': 'true' } });
            assert.equal(type, 'tablet');
        });
    });
});