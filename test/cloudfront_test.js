const device = require('device');
const expressDevice = require('../lib/device.js');
const assert = require('assert');

describe('cloudfront', function() {
    let headers = {};

    describe('with user-agent is present', () => {
        const mockUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) Chrome/65.0.3325.146';
        beforeEach(() => { headers = { 'user-agent': mockUserAgent }; });
        afterEach(() => { headers = {}; });

        describe('with cloudfront user agent', () => {
            beforeEach(() => { headers = { ...headers, 'user-agent': 'Amazon CloudFront' }; });
            afterEach(() => { headers = {}; });
            
            describe('with desktop viewer', () => {
                beforeEach(() => { headers = { ...headers, 'cloudfront-is-desktop-viewer': 'true' } });

                it('should get device type desktop', () => {
                    const type = expressDevice.customCheck({ headers })
                    assert.equal(type, 'desktop');
                });
            });
            describe('with mobile viewer', () => {
                beforeEach(() => { headers = { ...headers, 'cloudfront-is-mobile-viewer': 'true' } });

                it('should get device type phone', function () {
                    const type = expressDevice.customCheck({ headers })
                    assert.equal(type, 'phone');
                });
            });
            describe('with tablet viewer', () => {
                beforeEach(() => { headers = { ...headers, 'cloudfront-is-tablet-viewer': 'true' } });

                it('should get device type tablet', function () {
                    const type = expressDevice.customCheck({ headers })
                    assert.equal(type, 'tablet');
                });
            });
        });

        it('should return the present device type', () => {
            const mydevice = device(mockUserAgent, {});
            const type = expressDevice.customCheck({ headers: { ...headers, 'cloudfront-is-phone-viewer': 'true' } }, mydevice);
            assert.equal(type, mydevice.type);
        });
    });

    describe('with desktop viewer', () => {
        beforeEach(() => { headers = { ...headers, 'cloudfront-is-desktop-viewer': 'true' } });
        afterEach(() => { headers = {}; });

        it('should get device type desktop', () => {
            const type = expressDevice.customCheck({ headers })
            assert.equal(type, 'desktop');
        });
    });
    describe('with mobile viewer', () => {
        beforeEach(() => { headers = { ...headers, 'cloudfront-is-mobile-viewer': 'true' } });
        afterEach(() => { headers = {}; });

        it('should get device type phone', function () {
            const type = expressDevice.customCheck({ headers })
            assert.equal(type, 'phone');
        });
    });
    describe('with tablet viewer', () => {
        beforeEach(() => { headers = { ...headers, 'cloudfront-is-tablet-viewer': 'true' } });
        afterEach(() => { headers = {}; });

        it('should get device type tablet', function () {
            const type = expressDevice.customCheck({ headers })
            assert.equal(type, 'tablet');
        });
    });
});