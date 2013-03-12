var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {
    describe('unknown user-agent',function(){
        it('should get phone (default one)', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dsfglkfjawflkehf' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });

    describe('unknown user-agent configured to return desktop',function(){
        it('should get desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dsfglkfjawflkehf' } }, { unknownUserAgentDeviceType: 'desktop' });
            assert.equal(parser.get_type(), 'desktop');
        });
    });

    describe('unknown user-agent configured to return tablet',function(){
        it('should get tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dsfglkfjawflkehf' } }, { unknownUserAgentDeviceType: 'tablet' });
            assert.equal(parser.get_type(), 'tablet');
        });
    });

    describe('unknown user-agent configured to return bot',function(){
        it('should get bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dsfglkfjawflkehf' } }, { unknownUserAgentDeviceType: 'bot' });
            assert.equal(parser.get_type(), 'bot');
        });
    });

    describe('unknown user-agent configured to return tv',function(){
        it('should get tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dsfglkfjawflkehf' } }, { unknownUserAgentDeviceType: 'tv' });
            assert.equal(parser.get_type(), 'tv');
        });
    });

    describe('with no user-agent',function(){
        it('should get desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': '' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });

    describe('with no user-agent',function(){
        it('should get desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': null } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });

    describe('with no user-agent',function(){
        it('should get desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': undefined } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });

    describe('with no user-agent and configured to return phone',function(){
        it('should get phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': null } }, { emptyUserAgentDeviceType: 'phone' });
            assert.equal(parser.get_type(), 'phone');
        });
    });

    describe('with no user-agent and configured to return tablet',function(){
        it('should get tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': null } }, { emptyUserAgentDeviceType: 'tablet' });
            assert.equal(parser.get_type(), 'tablet');
        });
    });

    describe('with no user-agent and configured to return tv',function(){
        it('should get tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': null } }, { emptyUserAgentDeviceType: 'tv' });
            assert.equal(parser.get_type(), 'tv');
        });
    });

    describe('with no user-agent and configured to return bot',function(){
        it('should get bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': null } }, { emptyUserAgentDeviceType: 'bot' });
            assert.equal(parser.get_type(), 'bot');
        });
    });

    describe('with bot user agent and configured to return desktop', function(){
        it('should get desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bot' } }, { botUserAgentDeviceType: 'desktop' });
            assert.equal(parser.get_type(), 'desktop');
        })
    });

    describe('with bot user agent and configured to return phone', function(){
        it('should get phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bot' } }, { botUserAgentDeviceType: 'phone' });
            assert.equal(parser.get_type(), 'phone');
        })
    });

    describe('with bot user agent and configured to return tablet', function(){
        it('should get tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bot' } }, { botUserAgentDeviceType: 'tablet' });
            assert.equal(parser.get_type(), 'tablet');
        })
    });

    describe('with bot user agent and configured to return tv', function(){
        it('should get tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bot' } }, { botUserAgentDeviceType: 'tv' });
            assert.equal(parser.get_type(), 'tv');
        })
    });
});