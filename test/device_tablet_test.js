var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {
    describe('1.Acer A500',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; fr-fr; A500 Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('2.Acer A500',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.1; en-us; A500 Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('3.Acer A500',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; fr-fr; A500 Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('4.Acer A500',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.1; en-us; A500 Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('5.Acer A501',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; A501 Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('6.Acer A501',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; A501 Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('7.Acer G100W',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; G100W Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('8.Acer G100W',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; G100W Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('9.Acer Iconia A100',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.2; en-us; A100 Build/HTJ85B) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('10.Acer Iconia A500',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.2; en-us; A500 Build/HTJ85B) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('11.Acer Iconia Tab A100',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; A100 Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('12.Acer Iconia Tab A100',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; A100 Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('13.Acer Iconia Tab A200',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.2.1; en-us; A200 Build/HTK55D) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('14.Acer TPA60W',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; TPA60W Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('15.Acer TPA60W',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; TPA60W Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('16.Amazon Kindle',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.10) NetFront/3.3 Kindle/1.0 (screen 600x800)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('17.Amazon Kindle',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.10) NetFront/3.3 Kindle/1.0 (screen 600x800)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('18.Amazon Kindle',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.10) NetFront/3.3 Kindle/1.0 (screen 600x800)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('19.Amazon Kindle 2',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.0 (screen 600x800)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('20.Amazon Kindle 2',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.1 (screen 824x1200; rotate)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('21.Amazon Kindle 2',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.3 (screen 600x800; rotate)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('22.Amazon Kindle 2',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.5 (screen 600x800; rotate)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('23.Amazon Kindle 2',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.0 (screen 600x800)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('24.Amazon Kindle 2',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.1 (screen 824x1200; rotate)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('25.Amazon Kindle 2',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.3 (screen 600x800; rotate)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('26.Amazon Kindle 2',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.5 (screen 600x800; rotate)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('27.Amazon Kindle 2',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.0 (screen 600x800)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('28.Amazon Kindle 3',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600x800)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('29.Amazon Kindle 3',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600x800)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('30.Amazon Kindle 3',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600X800; rotate)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('31.Amazon Kindle Fire',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Kindle Fire Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('32.Amazon Kindle Fire',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('33.Amazon Kindle Fire in Silk Mode',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('34.Android SDK',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 0.5; en-us) AppleWebKit/522+ (KHTML, like Gecko) Safari/419.3' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('35.Android SDK',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 0.5; en-us) AppleWebKit/522+ (KHTML, like Gecko) Safari/419.3' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('36.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7D11' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('37.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iProd; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('38.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad Simulator; U; CPU iPhone OS 3_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('39.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('40.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B367' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('41.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('42.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU iPhone OS 4_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('43.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B405 Safari/531.21.10' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('44.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('45.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU iPhone OS 4_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko )' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('46.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU iPhone OS 4_3_1 like Mac OS X; fr-fr) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/7D11' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('47.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('48.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7D11' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('49.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iProd; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('50.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad Simulator; U; CPU iPhone OS 3_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('51.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('52.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B367' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('53.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('54.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU iPhone OS 4_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('55.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B405 Safari/531.21.10' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('56.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('57.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU iPhone OS 4_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko )' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('58.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU iPhone OS 4_3_1 like Mac OS X; fr-fr) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/7D11' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('59.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('60.Apple iPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; CPU OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('61.Apple iPad using Opera Mini',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/23.411; U; en) Presto/2.5.25 Version/10.54' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('62.Archos A101IT',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ie; A101IT Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('63.Archos A101IT',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; sv-se; A101IT Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('64.Archos A101IT',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ie; A101IT Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('65.Archos A101IT',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; sv-se; A101IT Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('66.Archos A70BHT',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.0.0; en-gb; A70BHT Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('67.Archos A70BHT',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.0.0; en-gb; A70BHT Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('68.Asus EEE Pad Transformer',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.2.1; en-us; Transformer TF101 Build/HTK75) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('69.Asus EEE Pad Transformer Prime',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; Transformer Prime TF201 Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.75 Safari/535.7' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('70.Barnes and Noble Nook',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'nook browser/1.0' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('71.Barnes and Noble Nook',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'nook browser/1.0' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('72.BlackBerry Playbook',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.7 Safari/534.11+' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('73.COBY MID7015',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MID7015 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('74.Coby MID7015',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; pl-pl; MID7015 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('75.Coby MID7015',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; MB511 Build/RUTEM_U3_01.13.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('76.COBY MID7015',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MID7015 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('77.Coby MID7015',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; pl-pl; MID7015 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('78.Coby MID7015',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; MB511 Build/RUTEM_U3_01.13.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('79.Dell Streak 7',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Dell Streak 7 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('80.Dell Streak 7',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Dell Streak 7 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('81.DoCoMo L-06C',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; ja-jp; L-06C Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('82.DoCoMo L-06C',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; ja-jp; L-06C Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('83.HP TouchPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.48 Safari/534.6 TouchPad/1.0' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('84.HP TouchPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.48 Safari/534.6 TouchPad/1.0' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('85.HP TouchPad',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.2; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.40.1 Safari/534.6 TouchPad/1.0' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('86.Huawei IDEOS S7',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; bg-bg; Ideos S7 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('87.Huawei IDEOS S7',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-au; IDEOS S7 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('88.Huawei IDEOS S7',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Ideos S7 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('89.Huawei IDEOS S7',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; bg-bg; Ideos S7 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('90.Huawei IDEOS S7',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-au; IDEOS S7 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('91.Huawei IDEOS S7',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Ideos S7 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('92.LG V900',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; LG-V900 Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('93.LG V900',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; LG-V900 Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('94.Motorola MZ601',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0; de-de; Build/EVRSU_U5_0.61.0) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('95.Motorola MZ601',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0; de-de; Build/EVRSU_U5_0.61.0) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('96.Motorola Xoom',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.1; en-us; Xoom Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('97.Motorola Xoom',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.1; en-us; Xoom Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('98.Motorola Xoom',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.2.1; en-us; Xoom Build/HTK75D) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('99.Nextbook Next2',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; de-de; Next2 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('100.Nextbook Next2',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; de-de; Next2 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('101.Nook',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'nook browser/1.0' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('102.Nook Color',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; BNTV250 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('103.Olivetti Olivetti OliPad 100',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; it-it; OliPad 100 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('104.Olivetti Olivetti OliPad 100',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; it-it; OliPad 100 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('105.Pandigital Nova',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U;Android 2.3.4; en-us; pandigitalnova1/sourceidDL00000021) AppleWebKit/533.1(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('106.Pandigital Nova - View Mode switched to tablet',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPad; U; CPU OS_3_2_2 like Mac OS X; en-us/pandigitalnova1/sourceidDL00000021) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('107.Pandigital Supernova',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; en-us; pandigitalsprnova1/sourceidDL00000025) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('108.RIM PlayBook',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('109.RIM PlayBook',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('110.Samsung Galaxy Tab 10.1',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.1; en-us; GT-P7510 Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('111.Samsung Galaxy Tab 7',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.2; en-us; GT-P6210 Build/HTJ85B) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('112.Samsung Galaxy Tab 8.9',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.1; en-us; GT-P7310 Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('113.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; GT-P1000 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('114.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; SAMSUNG GT-P1000 Tablet Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('115.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000R Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('116.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000M Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('117.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SGH-T849 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('118.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SHW-M180S Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('119.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SCH-I800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('120.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2 es-us SAMSUNG GT-P1000L Tablet Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('121.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2 es-us SAMSUNG GT-P1000N Tablet Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('122.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SHW-M180L Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('123.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SPH-P100 Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('124.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SGH-I987 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('125.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; GT-P1000 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('126.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; GT-P1000 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('127.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; SAMSUNG GT-P1000 Tablet Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('128.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000R Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('129.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000M Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('130.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SGH-T849 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('131.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SHW-M180S Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('132.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SCH-I800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('133.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2 es-us SAMSUNG GT-P1000L Tablet Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('134.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2 es-us SAMSUNG GT-P1000N Tablet Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('135.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SHW-M180L Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('136.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SPH-P100 Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('137.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SGH-I987 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('138.Samsung GT-P1000',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; GT-P1000 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('139.Samsung GT-P7100',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; GT-P7100 Build/HRI83) AppleWebkit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('140.Samsung GT-P7100',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; GT-P7100 Build/HRI83) AppleWebkit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('141.Samsung GT-P7500',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; GT-P7500 Build/HRI83) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('142.Samsung GT-P7500',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.1; es-es; SAMSUNG-GT-P7500/P7500BUKEE Build/HONEYCOMB) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('143.Samsung GT-P7500',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; GT-P7500 Build/HRI83) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('144.Samsung GT-P7500',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.1; es-es; SAMSUNG-GT-P7500/P7500BUKEE Build/HONEYCOMB) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('145.Samsung SC-01C',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; SC-01C Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 (Shinbun Browser)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('146.Samsung SC-01C',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SC-01C Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('147.Samsung SC-01C',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SC-01C Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('148.Samsung SC-01C',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; SC-01C Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 (Shinbun Browser)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('149.Samsung SC-01C',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SC-01C Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('150.Samsung SC-01C',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SC-01C Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('151.Sony S Tablet',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.2.1; en-us; Sony Tablet S Build/THMASU0035) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('152.Sony S Tablet',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.2; en-us; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('153.SonyEricsson X10i',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonX10i Build/R1DA003) AppleWebKit/528.5+ (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('154.SonyEricsson X10i',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonX10i Build/R1DA003) AppleWebKit/528.5+ (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('155.Toshiba Folio 100',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux;U;Linux2.6; it-it; TSB_CLOUD_COMPANION;FOLIO_AND_A) AppleWebKit/530.17 (KHTML,like Gecko) Version/4.0 Safari/530.17' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('156.Toshiba Folio 100',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (X11; Linux i686; ADR-1009091650; U; TSB_CLOUD_COMPANION;FOLIO_AND_A; it) Presto/2.5.28 Version/10.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('157.Toshiba Folio 100',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux;U;Linux2.6; it-it; TSB_CLOUD_COMPANION;FOLIO_AND_A) AppleWebKit/530.17 (KHTML,like Gecko) Version/4.0 Safari/530.17' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('158.Toshiba Folio 100',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (X11; Linux i686; ADR-1009091650; U; TSB_CLOUD_COMPANION;FOLIO_AND_A; it) Presto/2.5.28 Version/10.1' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('159.Toshiba Thrive',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.1; en-us; AT100 Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('160.ViewSonic ViewPad7',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ru-; ViewPad7 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('161.ViewSonic ViewPad7',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ru-; ViewPad7 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('162.Zenithink zt180',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; cs-cz; zt180 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
    describe('163.Zenithink zt180',function(){
        it('should get device type tablet', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; cs-cz; zt180 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'tablet');
        });
    });
});