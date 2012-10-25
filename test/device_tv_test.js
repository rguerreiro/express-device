var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {
    describe('1.Kylo Browser',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2) Gecko/20100222 Firefox/3.6 Kylo/0.8.4.74873' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('2.Logitech Revue',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.127 Large Screen Safari/533.4 GoogleTV/b54202' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('3.Nintendo Wii',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.00 (Nintendo Wii' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('4.Nintendo Wii',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.30 (Nintendo Wii; U; ; 2047-7; en)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('5.Nintendo Wii',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.10 (Nintendo Wii; U; ; 1621; en)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('6.Nintendo Wii',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.00 (Nintendo Wii' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('7.Nintendo Wii',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.30 (Nintendo Wii; U; ; 2047-7; en)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('8.Nintendo Wii',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.10 (Nintendo Wii; U; ; 1621; en)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('9.Nintendo Wii',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'wii libnup/1.0' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('10.Nintendo Wii',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.30 (Nintendo Wii; U; ; 2047-7; en)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('11.Nintendo Wii',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.10 (Nintendo Wii; U; ; 1621; en)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('12.Philips Net TV',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Linux mips ; U; HbbTV/1.1.1 (; Philips; ; ; ; ) CE-HTML/1.0 NETTV/3.1.0; en) Presto/2.6.33 Version/10.70' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('13.Philips Net TV',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Linux armv6l ; U; CE-HTML/1.0 NETTV/3.0.1;; en) Presto/2.6.33 Version/10.60' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('14.Philips Net TV',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.70 (Linux armv6l ; U; CE-HTML/1.0 NETTV/2.0.2; en) Presto/2.2.1' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('15.Philips Net TV',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.70 (Linux mips ; U; CE-HTML/1.0 (); en) Presto/2.2.1' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('16.Philips Net TV',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera 9.50 (Linux Mips; U; CE-HTML/1.0 (); en)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('17.Samsung SmartTV',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SmartHub; SMART-TV; U; Linux/SmartTV) AppleWebKit/531.2+ (KHTML, Like Gecko) WebBrowser/1.0 SmartTV Safari/531.2+' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('18.Sony Internet Box NSZGT1',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U: Linux i686; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.127 Large Screen Safari/533.4 GoogleTV/162671' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('19.Sony Playstation 3',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PLAYSTATION 3; 3.55)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('20.Sony Playstation 3',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PLAYSTATION 3; 2.00)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('21.Sony Playstation 3',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PLAYSTATION 3; 1.90)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('22.Sony Playstation 3',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PLAYSTATION 3; 1.70)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('23.Sony Playstation 3',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PLAYSTATION 3; 1.5)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('24.Sony Playstation 3',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PLAYSTATION 3; 1.10)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('25.Sony Playstation 3',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PLAYSTATION 3; 1.00)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
    describe('26.Sony Playstation 3',function(){
        it('should get device type tv', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (PS3 (PlayStation 3); 1.00)' } });
            assert.equal(parser.get_type(), 'tv');
        });
    });
});