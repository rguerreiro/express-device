var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {
    describe('1.',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PHILIPS9@9V ObigoInternetBrowser/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2.',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PHILIPS9@9V ObigoInternetBrowser/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3..mobi Mowser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; mowser; http://www.mowser.com)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4..mobi Mowser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; mowser; http://www.mowser.com)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5.Access Beeline C100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-Beeline C100/1.0 NetFront/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6.Access Beeline C100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-Beeline C100/1.0 NetFront/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7.Acer Acer E101',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'acer_E101' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('8.Acer Acer E101',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'acer_E101_Bouygtel Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('9.Acer Acer E101',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'acer_E101' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10.Acer Acer E101',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'acer_E101_Bouygtel Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('11.Acer Acer E140',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; E140 Build/Froyo) AppleWebKit/533.1+ (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1.1ACER_E140/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('12.Acer Acer E140',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; E140 Build/Froyo) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1ACER_E140/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('13.Acer Acer E140',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; E140 Build/Froyo) AppleWebKit/533.1+ (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1.1ACER_E140/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('14.Acer Acer E140',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; E140 Build/Froyo) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1ACER_E140/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('15.Acer Acer E210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; E210Build/Froyo) AppleWebKit/533.1+ (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1.1ACER_E210/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('16.Acer Acer E210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; E210Build/Froyo) AppleWebKit/533.1+ (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1.1ACER_E210/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('17.Acer Acer E310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; E310Build/Froyo) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1.1 ACER_E310/1.001.01' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('18.Acer Acer E310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; fr-fr; E310 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 ACER_E310/1.300.05' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('19.Acer Acer E310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C4_Acer_Mozilla/5.0 (Linux; U; Android 2.2.2; it-it; E310 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('20.Acer Acer E310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; E310Build/Froyo) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1.1 ACER_E310/1.001.01' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('21.Acer Acer E310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; fr-fr; E310 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 ACER_E310/1.300.05' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('22.Acer Acer E310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C4_Acer_Mozilla/5.0 (Linux; U; Android 2.2.2; it-it; E310 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('23.Acer Acer F900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) acer_F900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('24.Acer Acer F900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) acer_F900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('25.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Liquid Build/Donut) AppleWebkit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('26.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Acer Liquid Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('27.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Liquid Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('28.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Liquid Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('29.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-fr; Liquid Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('30.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Acer Liquid Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('31.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Liquid Build/Donut) AppleWebkit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('32.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Acer Liquid Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('33.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Liquid Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('34.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Liquid Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('35.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-fr; Liquid Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('36.Acer Acer S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Acer Liquid Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('37.Acer Acer S200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'acer_S200 Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('38.Acer Acer S200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'acer_S200 Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('39.Acer Acer S300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; S300 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('40.Acer Acer S300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; S300 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('41.Acer E110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; ru-ru; E110 Build/Cupcake) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1Acer_E110/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('42.Acer E110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; es-es; E110 Build/Cupcake) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1Acer_E110/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('43.Acer E110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; ru-ru; E110 Build/Cupcake) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1Acer_E110/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('44.Acer E110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; es-es; E110 Build/Cupcake) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1Acer_E110/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('45.Acer E120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; E120 Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('46.Acer E120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; E120 Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('47.Acer E130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-fr; E130 Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('48.Acer E130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-fr; E130 Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('49.Acer E400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-tw; E400 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('50.Acer E400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-tw; E400 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('51.Acer S110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-tw; Stream Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('52.Acer S110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; zh-tw; Stream Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('53.Acer S110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-tw; Stream Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('54.Acer S110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; zh-tw; Stream Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('55.Acer S120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Liquid Metal Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('56.Acer S120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Liquid MT Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('57.Acer S120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Liquid Metal Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('58.Acer S120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Liquid MT Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('59.Acer X960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) acer_X960' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('60.Acer X960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) acer_X960' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('61.ACER Corporation P300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.5) acer_P300' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('62.ACER Corporation P300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.5) acer_P300' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('63.Acer Incorporated Acer E100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'acer_E100 Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('64.Acer Incorporated Acer E100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'acer_E100 Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('65.Acer Incorporated Acer E200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) acer_E200 1.045j.00' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('66.Acer Incorporated Acer E200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) acer_E200 1.045j.00' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('67.Acer Incorporated Acer P400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Acer_P400 1.023f.00' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('68.Acer Incorporated Acer P400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Acer_P400 1.023f.00' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('69.AI S570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TELEEPOCH-S570/1.0 TECHSOFT-WAP/1.0 AI/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('70.AI S570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TELEEPOCH-S570/1.0 TECHSOFT-WAP/1.0 AI/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('71.Alcatel Alcatel one touch Phone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-800/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('72.Alcatel Alcatel one touch Phone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-800A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('73.Alcatel Alcatel one touch Phone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-800/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('74.Alcatel Alcatel one touch Phone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-800A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('75.Alcatel ALCATEL-OT-280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-280/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('76.Alcatel ALCATEL-OT-280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-280/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('77.Alcatel GLAMPHONE ELLE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-GLAMPHONE-ELLE-A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('78.Alcatel GLAMPHONE ELLE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-GLAMPHONE-ELLE/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('79.Alcatel GLAMPHONE ELLE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-GLAMPHONE-ELLE-A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('80.Alcatel GLAMPHONE ELLE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-GLAMPHONE-ELLE/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('81.Alcatel Miss Sixty',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-MISS-SIXTY-MSX-10/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('82.Alcatel Miss Sixty',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-MISS-SIXTY-MSX-10/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('83.Alcatel MOVE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; MOVE Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('84.Alcatel MOVE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; MOVE Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('85.Alcatel MTC540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/ MTC540/ V010 04A/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('86.Alcatel MTC540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/ MTC540/ V010 04A/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('87.Alcatel one touch 665',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ALCATEL_one_touch_665/010_02 1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('88.Alcatel one touch 665',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ALCATEL_one_touch_665/010_02 1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('89.Alcatel one touch 890',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Alcatel OT-890 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('90.Alcatel one touch 890',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; ALCATEL_one_touch_890 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('91.Alcatel one touch 890',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Alcatel OT-890 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('92.Alcatel one touch 890',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; ALCATEL_one_touch_890 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('93.Alcatel one touch 890D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; ALCATEL_one_touch_890D Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('94.Alcatel one touch 890D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL one touch 890D Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('95.Alcatel one touch 890D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_890D Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('96.Alcatel one touch 890D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; ALCATEL_one_touch_890D Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('97.Alcatel one touch 890D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL one touch 890D Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('98.Alcatel one touch 890D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_890D Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('99.Alcatel one touch 906',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_906 Build/FSR) AppleWebkit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('100.Alcatel one touch 906',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_906 Build/FSR) AppleWebkit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('101.Alcatel one touch 906Y',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_906Y Build/FSR) AppleWebkit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('102.Alcatel one touch 906Y',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_906Y Build/FSR) AppleWebkit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('103.Alcatel one touch 908',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_908 Build/FRG83G) AppleWebKit/533.1 (KHTML,like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('104.Alcatel one touch 908',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_908 Build/FRG83G) AppleWebKit/533.1 (KHTML,like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('105.Alcatel one touch 990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; ALCATEL_one_touch_990 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('106.Alcatel one touch 990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_990 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('107.Alcatel one touch 990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; ALCATEL_one_touch_990 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('108.Alcatel one touch 990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_990 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('109.Alcatel one touch 990A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; ALCATEL_one_touch_990A Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('110.Alcatel one touch 990A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_990A Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('111.Alcatel one touch 990A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; ALCATEL_one_touch_990A Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('112.Alcatel one touch 990A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_990A Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('113.Alcatel one touch 990M',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; ALCATEL_one_touch_990M Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('114.Alcatel one touch 990M',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_990M Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('115.Alcatel one touch 990M',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; ALCATEL_one_touch_990M Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('116.Alcatel one touch 990M',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_990M Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('117.Alcatel one touch 990S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; ALCATEL_one_touch_990S Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('118.Alcatel one touch 990S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_990S Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('119.Alcatel one touch 990S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; ALCATEL_one_touch_990S Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('120.Alcatel one touch 990S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; ALCATEL_one_touch_990S Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('121.Alcatel One Touch C750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-C750/1.0 UP.Browser/7.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('122.Alcatel One Touch C750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-C750/1.0 UP.Browser/7.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('123.Alcatel One Touch S218',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S218/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('124.Alcatel One Touch S218',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S218/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('125.Alcatel OneTouch Sport',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-Sport/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('126.Alcatel OneTouch Sport',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-Sport/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('127.Alcatel OT 303A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-303A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('128.Alcatel OT 303A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-303A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('129.Alcatel OT 305',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-305A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('130.Alcatel OT 305',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-305A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('131.Alcatel OT 383',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-383/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('132.Alcatel OT 383',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-383/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('133.Alcatel OT 660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-660A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('134.Alcatel OT 660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-660A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('135.Alcatel OT 708',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone541/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('136.Alcatel OT 708',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone541/2.0 Profile V010 06/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('137.Alcatel OT 708',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-708/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('138.Alcatel OT 708',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone541/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('139.Alcatel OT 708',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone541/2.0 Profile V010 06/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('140.Alcatel OT 708',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-708/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('141.Alcatel OT 808',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-808/010_01 1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('142.Alcatel OT 808',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-808/010_01 1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('143.Alcatel OT 808A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-808A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('144.Alcatel OT 808A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-808A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('145.Alcatel OT S320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S320/1.0 model-orange ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('146.Alcatel OT S320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S320/1.0 model-orange ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('147.Alcatel OT S321A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S321A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('148.Alcatel OT S321A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S321A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('149.Alcatel OT S621',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S621/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('150.Alcatel OT S621',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S621/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('151.Alcatel OT S626A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S626A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('152.Alcatel OT S626A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S626A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('153.Alcatel OT S686',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OT-S686/1.0 BRCM/2124 Release/CC84-V1.0.0 Browser/Teleca-1.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('154.Alcatel OT S686',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OT-S686/1.0 BRCM/2124 Release/CC84-V1.0.0 Browser/Teleca-1.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('155.Alcatel OT S692',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OT-S692/1.0 MTK/W07.12 Release/06.01.2008 Browser/Teleca-1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('156.Alcatel OT S692',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OT-S692/1.0 MTK/W07.12 Release/06.01.2008 Browser/Teleca-1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('157.Alcatel OT S920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S920/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q04A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('158.Alcatel OT S920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S920/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q04A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('159.Alcatel OT V570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-V570/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('160.Alcatel OT V570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-V570/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('161.Alcatel OT V670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-V670/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('162.Alcatel OT V670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-V670/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('163.Alcatel OT V670A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-V670A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('164.Alcatel OT V670A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-V670A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('165.Alcatel OT v770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-v770/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('166.Alcatel OT v770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-v770/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('167.Alcatel OT-216',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-216/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('168.Alcatel OT-216',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-216/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('169.Alcatel OT-255',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-255/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('170.Alcatel OT-255',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-255/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('171.Alcatel OT-255A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-255A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('172.Alcatel OT-255A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-255A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('173.Alcatel OT-255D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-255D/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('174.Alcatel OT-255D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-255D/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('175.Alcatel OT-300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-300/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('176.Alcatel OT-300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-300/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('177.Alcatel OT-306X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ALCATEL_one_touch_306X/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('178.Alcatel OT-306X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ALCATEL_one_touch_306X/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('179.Alcatel OT-355',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-355/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('180.Alcatel OT-355',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-355/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('181.Alcatel OT-355D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-355D/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('182.Alcatel OT-355D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-355D/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('183.Alcatel OT-360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-360A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('184.Alcatel OT-360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-360A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('185.Alcatel OT-380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-380/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('186.Alcatel OT-380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-380/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('187.Alcatel OT-383A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-383A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('188.Alcatel OT-383A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-383A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('189.Alcatel OT-505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-505/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('190.Alcatel OT-505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-505/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('191.Alcatel OT-600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-600/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('192.Alcatel OT-600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-600/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('193.Alcatel OT-600A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-600A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('194.Alcatel OT-600A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-600A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('195.Alcatel OT-606',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-606/010_02 1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('196.Alcatel OT-606',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-606/010_03 1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('197.Alcatel OT-606',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-606/010_02 1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('198.Alcatel OT-606',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-606/010_03 1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('199.Alcatel OT-606A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-606A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('200.Alcatel OT-606A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-606A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('201.Alcatel OT-706',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-706/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('202.Alcatel OT-706',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-706/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('203.Alcatel OT-708A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-708A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('204.Alcatel OT-708A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-708A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('205.Alcatel OT-710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-710/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('206.Alcatel OT-710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-710/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('207.Alcatel OT-710D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-710D/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('208.Alcatel OT-710D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-710D/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('209.Alcatel OT-799',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-799/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('210.Alcatel OT-799',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-799/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('211.Alcatel OT-802',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-802/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('212.Alcatel OT-802',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-802/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('213.Alcatel OT-802A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-802A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('214.Alcatel OT-802A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-802A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('215.Alcatel OT-803',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ALCATEL_one_touch_803/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('216.Alcatel OT-803',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ALCATEL_one_touch_803/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('217.Alcatel OT-806',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-806/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('218.Alcatel OT-806',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-806/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('219.Alcatel OT-807D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-807D/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('220.Alcatel OT-807D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-807D/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('221.Alcatel OT-813',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ALCATEL_one_touch_813D/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('222.Alcatel OT-813',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ALCATEL_one_touch_813D/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('223.Alcatel OT-880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-880/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('224.Alcatel OT-880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-880/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('225.Alcatel OT-880A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-880A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('226.Alcatel OT-880A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-880A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('227.Alcatel OT-980',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Alcatel OT-980 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('228.Alcatel OT-980',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Alcatel OT-980 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('229.Alcatel OT-980A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Alcatel OT-980A Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('230.Alcatel OT-980A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Alcatel OT-980A Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('231.Alcatel OT-981A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Alcatel OT-981A Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('232.Alcatel OT-981A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Alcatel OT-981A Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('233.Alcatel OT-C700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-C700/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('234.Alcatel OT-C700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-C700/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('235.Alcatel OT-C707',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-C707/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('236.Alcatel OT-C707',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-C707/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('237.Alcatel OT-C820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-C820/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('238.Alcatel OT-C820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-C820/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('239.Alcatel OT-S319A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S319A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('240.Alcatel OT-S319A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S319A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('241.Alcatel OT-S320A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S320A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('242.Alcatel OT-S320A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S320A/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('243.Alcatel OT-S621A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S621A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('244.Alcatel OT-S621A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Alcatel-OT-S621A/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('245.Alcatel Vodafone-330-FM',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/Vodafone-330-FM/1.0 Browser/ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('246.Alcatel Vodafone-330-FM',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/Vodafone-330-FM/1.0 Browser/ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('247.Alcatel Vodafone-543',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone543/W08.40.SP1.V32.F3 Browser/Opera Mini/v4.2.0099-2010-04-14(0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('248.Alcatel Vodafone-543',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone543/W08.40.SP1.V32.F3 Browser/Opera Mini/v4.2.0099-2010-04-14(0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('249.Alcatel Vodafone331',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/Vodafone-331/1.0 Browser/ObigolnternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('250.Alcatel Vodafone331',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/Vodafone-331/1.0 Browser/ObigolnternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('251.Amazon Kindle',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 4.0) NetFront/3.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('252.Amazon Kindle',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 4.0) NetFront/3.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('253.Amoi A310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-A310' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('254.Amoi A310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-A310/Plat-F-VIM/WAP2.0/MIDP1.0/CLDC1.0 UP.Browser/6.2.2.7.c.1.102 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('255.Amoi A310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-A310' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('256.Amoi A310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-A310/Plat-F-VIM/WAP2.0/MIDP1.0/CLDC1.0 UP.Browser/6.2.2.7.c.1.102 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('257.Amoi A320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-A320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('258.Amoi A320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-A320/Plat-F-VIM/WAP2.0 UP.Browser/6.2.2.7.c.1.102 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('259.Amoi A320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-A320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('260.Amoi A320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-A320/Plat-F-VIM/WAP2.0 UP.Browser/6.2.2.7.c.1.102 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('261.Amoi E72',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AMOI-E72/1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 4.01; Windows CE; Smartphone)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('262.Amoi E72',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AMOI-E72/1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 4.01; Windows CE; Smartphone)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('263.Amoi Levis The Original',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Levis_Original_3G/R12 NF-Browser/3.3 Openwave-MMS/4.5 BP-SyncML/2.0 IA-Java/1.0 Profile/MIDP2.0/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('264.Amoi Levis The Original',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Levis_Original_3G/R12 NF-Browser/3.3 Openwave-MMS/4.5 BP-SyncML/2.0 IA-Java/1.0 Profile/MIDP2.0/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('265.Amoi M300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AMOI-M300/Plat-M38002/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('266.Amoi M300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AMOI-M300/Plat-M38002/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('267.Amoi M515',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-M515/(2006.10.21)SW1.0.2/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('268.Amoi M515',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-M515/(2006.10.21)SW1.0.2/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('269.Amoi M630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-M630/Plat-V-VIM/WAP2.0/MIDP2.0/CLDC1.0 UP.Browser/6.2.3.8.c.1.100 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('270.Amoi M630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Amoi-M630/Plat-V-VIM/WAP2.0/MIDP2.0/CLDC1.0 UP.Browser/6.2.3.8.c.1.100 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('271.Amoi V810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AMOI-V810 NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('272.Amoi V810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AMOI-V810 NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('273.Android Dev Phone 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Android Dev Phone 1 Build/CRB21) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('274.Android Dev Phone 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Android Dev Phone 1 Build/PLAT-RC33) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('275.Android Dev Phone 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Android Dev Phone 1 Build/DRC83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('276.Android Dev Phone 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Android Dev Phone 1 Build/CRB21) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('277.Android Dev Phone 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Android Dev Phone 1 Build/PLAT-RC33) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('278.Android Dev Phone 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Android Dev Phone 1 Build/DRC83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('279.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; generic) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('280.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; AS740 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('281.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-au; S7 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 S7V100R001C13B021' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('282.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; sv-se; U8300 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('283.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonMK16i Build/4.0.A.0.261) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('284.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonMK16i Build/4.0.A.2.319) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('285.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; X10 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('286.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; generic) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('287.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; AS740 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('288.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-au; S7 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 S7V100R001C13B021' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('289.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; sv-se; U8300 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('290.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonMK16i Build/4.0.A.0.261) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('291.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonMK16i Build/4.0.A.2.319) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('292.Android Generic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; X10 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('293.Android qsd8250_surf',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-cn; qsd8250_surf Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('294.Android qsd8250_surf',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-cn; qsd8250_surf Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('295.Android SDK',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-us; generic) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('296.Android SDK',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; sdk Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('297.Android SDK',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; sdk Build/ERD79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('298.Android SDK',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; google_sdk Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('299.Android SDK',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; google_sdk Build/ERD79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('300.Android SDK',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-us; generic) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('301.Android SDK',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; sdk Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('302.Android SDK',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; sdk Build/ERD79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('303.Android SDK',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; google_sdk Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('304.Android SDK',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; google_sdk Build/ERD79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('305.Apanda A60',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-cn; apanda-A60 Build/DONUT) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('306.Apanda A60',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-cn; apanda-A60 Build/DONUT) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('307.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A538a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('308.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('309.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1C25 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('310.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1C28 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('311.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('312.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('313.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; nl-nl) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('314.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; pl-pl) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A109a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('315.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; pt-pt) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('316.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; sv-se) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A109a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('317.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; zh-tw) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('318.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Aspen Simulator; U; Aspen 1_2 like Mac OS X; en-us) AppleWebKit/52' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('319.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Aspen Simulator; U; Aspen 1_2 like Mac OS X; en_us) AppleWebKit/525.7 (KHTML, like Gecko) Version/3.1 Mobile/5A147p Safari/5525.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('320.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; da-dk) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A109a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('321.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; tr-tr) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('322.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; zh-cn) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A109a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('323.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A308 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('324.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; cs-cz) AppleWebKit/420.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('325.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A308 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('326.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A345 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('327.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('328.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A345 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('329.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F90 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('330.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F90 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('331.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('332.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0_1 like Mac OS X; de-de) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5B108 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('333.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5C1 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('334.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F135 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('335.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5B108 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('336.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F136 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('337.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5F136' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('338.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A345 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('339.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Cydia/1.0.2595-36' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('340.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5G76 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('341.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('342.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5G77' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('343.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5G77 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('344.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Cydia/1.0.2595-37' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('345.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'mozilla/5.0 (iphone; u; cpu iphone os 2_1 like mac os x; en-us) applewebkit/525.18.1 (khtml, like gecko) version/3.1.1 mobile/5f136 safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('346.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'mozilla/5.0 (iphone; u; cpu iphone os 2_0_2 like mac os x; en-us) applewebkit/525.18.1 (khtml, like gecko) version/3.1.1 mobile/5c1 safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('347.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'mozilla/5.0 (iphone; u; cpu iphone os 2_2 like mac os x; en-us) applewebkit/525.18.1 (khtml, like gecko) mobile/5g77' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('348.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('349.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('350.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.11 (KHTML, like Gecko) Version/3.1.1 Mobile/7A238j Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('351.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.11 (KHTML, like Gecko) Version/3.1.1 Mobile/7A259g Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('352.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; sv-se) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A312g Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('353.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('354.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A542a Safari/419.3 taptu' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('355.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2_1 like Mac OS X; sv-se) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('356.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7A341' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('357.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7C116a Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('358.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A400 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('359.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1 like Mac OS X; pt-pt) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7C144' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('360.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_2 like Mac OS X; nl-nl) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7D11' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('361.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('362.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7C145 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('363.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7C144 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('364.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_3 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('365.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_3 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7E18 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('366.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_2 like Mac OS X; sv-se) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7D11 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('367.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Mobile/7D11' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('368.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('369.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('370.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0_2 like Mac OS X; es-es) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A400 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('371.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (iPhone; Opera Mini/5.0.0176/764; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('372.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A306 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('373.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B5097d Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('374.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('375.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B117 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('376.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; fr-fr) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B113 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('377.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; fr-fr) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('378.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('379.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('380.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_5 like Mac OS X; en_gb) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('381.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_6 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('382.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_7 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('383.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_8 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('384.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('385.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('386.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('387.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A538a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('388.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('389.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1C25 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('390.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1C28 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('391.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('392.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('393.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; nl-nl) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('394.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; pl-pl) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A109a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('395.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; pt-pt) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('396.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; sv-se) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A109a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('397.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; zh-tw) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('398.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Aspen Simulator; U; Aspen 1_2 like Mac OS X; en-us) AppleWebKit/52' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('399.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Aspen Simulator; U; Aspen 1_2 like Mac OS X; en_us) AppleWebKit/525.7 (KHTML, like Gecko) Version/3.1 Mobile/5A147p Safari/5525.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('400.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; da-dk) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A109a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('401.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; tr-tr) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('402.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; zh-cn) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A109a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('403.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A308 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('404.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; cs-cz) AppleWebKit/420.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('405.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A308 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('406.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A345 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('407.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('408.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A345 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('409.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F90 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('410.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F90 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('411.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('412.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0_1 like Mac OS X; de-de) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5B108 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('413.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5C1 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('414.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F135 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('415.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5B108 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('416.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F136 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('417.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5F136' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('418.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A345 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('419.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Cydia/1.0.2595-36' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('420.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5G76 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('421.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('422.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5G77' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('423.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5G77 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('424.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Cydia/1.0.2595-37' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('425.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'mozilla/5.0 (iphone; u; cpu iphone os 2_1 like mac os x; en-us) applewebkit/525.18.1 (khtml, like gecko) version/3.1.1 mobile/5f136 safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('426.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'mozilla/5.0 (iphone; u; cpu iphone os 2_0_2 like mac os x; en-us) applewebkit/525.18.1 (khtml, like gecko) version/3.1.1 mobile/5c1 safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('427.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'mozilla/5.0 (iphone; u; cpu iphone os 2_2 like mac os x; en-us) applewebkit/525.18.1 (khtml, like gecko) mobile/5g77' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('428.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('429.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('430.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.11 (KHTML, like Gecko) Version/3.1.1 Mobile/7A238j Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('431.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.11 (KHTML, like Gecko) Version/3.1.1 Mobile/7A259g Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('432.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; sv-se) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A312g Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('433.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('434.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A542a Safari/419.3 taptu' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('435.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_2_1 like Mac OS X; sv-se) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('436.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7A341' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('437.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7C116a Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('438.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A400 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('439.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1 like Mac OS X; pt-pt) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7C144' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('440.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_2 like Mac OS X; nl-nl) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7D11' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('441.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('442.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7C145 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('443.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7C144 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('444.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_3 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('445.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_3 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7E18 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('446.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_2 like Mac OS X; sv-se) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7D11 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('447.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Mobile/7D11' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('448.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('449.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('450.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0_2 like Mac OS X; es-es) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A400 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('451.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (iPhone; Opera Mini/5.0.0176/764; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('452.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A306 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('453.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B5097d Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('454.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('455.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B117 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('456.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; fr-fr) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B113 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('457.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; fr-fr) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('458.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('459.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('460.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_5 like Mac OS X; en_gb) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('461.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_6 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('462.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_7 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('463.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_8 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('464.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('465.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('466.Apple iPhone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('467.Apple iPhone 4S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('468.Apple iPhoneOS MMS Client',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'iPhoneOS/4.3.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('469.Apple iPhoneOS MMS Client',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'iPhoneOS/4.3.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('470.Apple iPod',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('471.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A100a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('472.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (itouch; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A538a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('473.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; da-dk) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('474.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; fr) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('475.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; ja-jp) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('476.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; zh-tw) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('477.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; sv-se) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('478.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; zh-cn) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('479.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; nl-nl) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('480.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; ko-kr) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('481.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; pt-pt) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A93 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('482.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; pl-pl) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A93 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('483.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/(null) Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('484.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A102 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('485.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A345 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('486.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A110a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('487.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('488.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('489.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F90 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('490.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5C1 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('491.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5B108 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('492.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F138 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('493.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5F137' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('494.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1 like Mac OS X; en-gb) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('495.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5F138' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('496.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/528.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5G77 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('497.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4B1 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('498.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5H11' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('499.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5H11' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('500.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/3.1.1 Mobile/7A259g Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('501.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-gb) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('502.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; it-it) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('503.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; fr-fr) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('504.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5G77a Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('505.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('506.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 3_0 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('507.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7C106c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('508.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 3_1 like Mac OS X; en_us)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('509.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7C145 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('510.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 3_1_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('511.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('512.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 3_1_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('513.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_3 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7E16 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('514.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 3_1_3 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7E16 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('515.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('516.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_0 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('517.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_2 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7D11 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('518.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_TEMP_IPOD_TOUCH_ENTRY' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('519.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_0_2 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A400 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('520.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_0_2 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A400 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('521.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('522.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('523.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_2_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('524.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_2_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('525.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('526.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('527.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_3_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('528.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('529.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_3_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('530.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('531.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_3_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('532.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('533.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A100a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('534.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (itouch; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A538a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('535.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; da-dk) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('536.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; fr) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('537.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; ja-jp) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('538.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; zh-tw) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('539.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; sv-se) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('540.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; zh-cn) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('541.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; nl-nl) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('542.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; ko-kr) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('543.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; pt-pt) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A93 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('544.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; pl-pl) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A93 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('545.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/(null) Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('546.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A102 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('547.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A345 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('548.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A110a Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('549.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('550.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('551.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F90 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('552.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5C1 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('553.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5B108 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('554.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F138 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('555.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5F137' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('556.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1 like Mac OS X; en-gb) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('557.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5F138' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('558.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/528.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5G77 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('559.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4B1 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('560.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5H11' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('561.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5H11' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('562.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/3.1.1 Mobile/7A259g Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('563.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-gb) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11 Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('564.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; it-it) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('565.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; fr-fr) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('566.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5G77a Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('567.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('568.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 3_0 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('569.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7C106c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('570.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 3_1 like Mac OS X; en_us)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('571.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7C145 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('572.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 3_1_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('573.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('574.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 3_1_2 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('575.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_3 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7E16 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('576.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 3_1_3 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7E16 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('577.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('578.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_0 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('579.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_2 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7D11 Safari/528.16' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('580.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_TEMP_IPOD_TOUCH_ENTRY' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('581.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_0_2 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A400 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('582.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_0_2 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A400 Safari/6531.22.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('583.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('584.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('585.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_2_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('586.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_2_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('587.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('588.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('589.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_3_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('590.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_1 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('591.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_3_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('592.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_2 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('593.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod touch; U; CPU iPhone OS 4_3_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('594.Apple iPod Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; en_us) AppleWebKit/525.18.1 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('595.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone v1.1.4 CoreMedia v1.0.0.4A102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('596.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.0 CoreMedia v1.0.0.5A347' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('597.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.0.1 CoreMedia v1.0.0.5B108' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('598.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.1 CoreMedia v1.0.0.5F136' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('599.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.1 CoreMedia v1.0.0.5F137' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('600.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone v1.1.5 CoreMedia v1.0.0.4B1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('601.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.2 CoreMedia v1.0.0.5G77' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('602.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.2 CoreMedia v1.0.0.5G77a' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('603.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.1.1 CoreMedia v1.0.0.5F138' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('604.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.2.1 CoreMedia v1.0.0.5H11' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('605.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone v1.1.4 CoreMedia v1.0.0.4A102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('606.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.0 CoreMedia v1.0.0.5A347' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('607.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.0.1 CoreMedia v1.0.0.5B108' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('608.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.1 CoreMedia v1.0.0.5F136' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('609.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.1 CoreMedia v1.0.0.5F137' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('610.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone v1.1.5 CoreMedia v1.0.0.4B1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('611.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.2 CoreMedia v1.0.0.5G77' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('612.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.2 CoreMedia v1.0.0.5G77a' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('613.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.1.1 CoreMedia v1.0.0.5F138' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('614.Apple QuickTime Agent',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Apple iPhone OS v2.2.1 CoreMedia v1.0.0.5H11' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('615.Archos 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; Archos5 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('616.Archos 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; Archos5 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('617.Archos A70HB',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.0.15; fr-fr; A70HB Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('618.Archos A70HB',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.0.15; fr-fr; A70HB Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('619.Archos A70S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; A70S Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('620.Archos A70S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; A70S Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('621.Archos A70S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; A70S Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('622.Archos A70S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; A70S Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('623.Archos A70S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; A70S Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('624.Archos A70S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; A70S Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('625.Asus Android eeepc',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; eeepc Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('626.Asus Android eeepc',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; eeepc Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('627.Asus ASUS-GalaxyMini2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-P552-orange/V4.6.0S.WWE30 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('628.Asus ASUS-GalaxyMini2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-P552-orange/V4.6.0S.WWE30 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('629.Asus Galaxy6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('630.Asus Galaxy6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('631.Asus GalaxyII',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUS-GalaxyII/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('632.Asus GalaxyII',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-GalaxyII/1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320; ASUS-GalaxyII)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('633.Asus GalaxyII',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-GalaxyII/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('634.Asus GalaxyII',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUS-GalaxyII/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('635.Asus GalaxyII',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-GalaxyII/1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320; ASUS-GalaxyII)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('636.Asus GalaxyII',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-GalaxyII/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('637.Asus GalaxyMini',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-GalaxyMini/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('638.Asus GalaxyMini',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-GalaxyMini/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('639.Asus garmin-asus-Nuvifone-M10',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) garmin-asus-Nuvifone-M10/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('640.Asus garmin-asus-Nuvifone-M10',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) garmin-asus-Nuvifone-M10/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('641.Asus J206',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-J206/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('642.Asus J206',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-J206/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('643.Asus J501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-J501/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('644.Asus J501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-J501/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('645.Asus M303',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-M303' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('646.Asus M303',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-M303/1.0 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('647.Asus M303',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-M303' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('648.Asus M303',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-M303/1.0 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('649.Asus M530w',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUSM530w/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('650.Asus M530w',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUSM530w/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('651.Asus M930',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUSM930/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('652.Asus M930',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) ASUSM930/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('653.Asus M930',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUSM930/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('654.Asus M930',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) ASUSM930/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('655.Asus O2 Xda Zest',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Zest_Opera/480x640 Opera/8.65 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('656.Asus O2 Xda Zest',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Zest_MSIE/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('657.Asus O2 Xda Zest',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Zest_Opera/480x640 Opera/8.65 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('658.Asus O2 Xda Zest',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Zest_MSIE/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('659.Asus P320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-P320/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('660.Asus P320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-P320/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('661.Asus P525',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUS-P525/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('662.Asus P525',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUS-P525/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('663.Asus P526',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Compatible; MSIE 6.0; Windows CE; IEMobile 6.12)ASUS-P526/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('664.Asus P526',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUS-P526/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('665.Asus P526',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Compatible; MSIE 6.0; Windows CE; IEMobile 6.12)ASUS-P526/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('666.Asus P526',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUS-P526/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('667.Asus P527',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) ASUS-P527/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('668.Asus P527',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-P527/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('669.Asus P527',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) ASUS-P527/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('670.Asus P527',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-P527/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('671.Asus P550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) ASUSP550/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('672.Asus P550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) ASUSP550/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('673.Asus P552',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-P552-orange/V3.0.0.P8R.WWE30 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('674.Asus P552',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-P552-orange/V3.0.0.P8R.WWE30 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('675.Asus P552w',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-P552w/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('676.Asus P552w',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUS-P552w/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('677.Asus P735',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUS-P735/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('678.Asus P735',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) ASUS-P735/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('679.Asus P750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) ASUSP750/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('680.Asus P750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUSP750/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('681.Asus P750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) ASUSP750/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('682.Asus P750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ASUSP750/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('683.Asus V80',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-V80/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('684.Asus V80',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-V80/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('685.Asus Vodafone 1520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Vodafone 1520' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('686.Asus Vodafone 1520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Vodafone 1520' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('687.Asus Z801',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-Z801/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('688.Asus Z801',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ASUS-Z801/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('689.Audiovox CDM-8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CDM-8910' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('690.Audiovox CDM-8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CDM-8910' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('691.Audiovox CDM8615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AUDIOVOX-CDM8615 UP.Browser/6.2.3.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('692.Audiovox CDM8615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Audiovox_CDM-8615 UP.Browser/6.2.2.6.h.1.100 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('693.Audiovox CDM8615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AUDIOVOX-CDM8615 UP.Browser/6.2.3.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('694.Audiovox CDM8615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Audiovox_CDM-8615 UP.Browser/6.2.2.6.h.1.100 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('695.AvantGo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Danger hiptop 3.4; U; AvantGo 3.2)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('696.AvantGo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/3.0 (compatible; AvantGo 3.2)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('697.AvantGo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; AvantGo 3.2; ProxiNet; Danger hiptop 1.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('698.B-Mobile EVE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EVE/1.0 TMSS-Browser/1.0.0 Profile/MIDP/2.0-compatible Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('699.B-Mobile EVE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EVE/1.0 TMSS-Browser/1.0.0 Profile/MIDP/2.0-compatible Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('700.B-Mobile K298',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'b-mobile K298/2.0 (03.15) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('701.B-Mobile K298',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'b-mobile K298/2.0 (03.15) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('702.BayMobile Chat',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GHT CHAT/MTK Release/Oct-23-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('703.BayMobile Chat',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GHT CHAT/MTK Release/Oct-23-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('704.BayMobile Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TOUCH/1.0 RTKE_OS/01.00 TD7210E/11.0 Release/10.23.2008 Browser/Techsoft-01.00.00 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('705.BayMobile Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TOUCH/1.0 RTKE_OS/01.00 TD7210E/11.0 Release/10.23.2008 Browser/Techsoft-01.00.00 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('706.Bell Technology spol. s r.o. Emgeton Enzo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Emegeton Enzo/1.0 TMSS-Browser/1.0.0 Profile/MIDP/2.0-compatible Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('707.Bell Technology spol. s r.o. Emgeton Enzo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Emegeton Enzo/1.0 TMSS-Browser/1.0.0 Profile/MIDP/2.0-compatible Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('708.BenQ 3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-C30' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('709.BenQ 3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-C30/1.0/WAP2.0/MIDP2.0/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('710.BenQ 3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-C30' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('711.BenQ 3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-C30/1.0/WAP2.0/MIDP2.0/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('712.BenQ BenQ-T51HK/1.00/WAP2.0/MIDP2.0/CLDC1.1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-T51HK/1.00/WAP2.0/MIDP2.0/CLDC1.1 UP.Browser/6.3.0.4.c.1.105 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('713.BenQ BenQ-T51HK/1.00/WAP2.0/MIDP2.0/CLDC1.1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-T51HK/1.00/WAP2.0/MIDP2.0/CLDC1.1 UP.Browser/6.3.0.4.c.1.105 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('714.BenQ C36',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-C36/1.0/WAP2.0/MIDP2.0/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('715.BenQ C36',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-C36/1.0/WAP2.0/MIDP2.0/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('716.BenQ E72',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) /BenQ-E72' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('717.BenQ E72',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) /BenQ-E72' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('718.BenQ M220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-M220' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('719.BenQ M220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-M220/6.1.0.7 UP.Browser/6.1.0.7.8.c.1.103 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('720.BenQ M220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-M220' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('721.BenQ M220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-M220/6.1.0.7 UP.Browser/6.1.0.7.8.c.1.103 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('722.BenQ MD 300H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-MD-300H Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.2 (GUI) MMP/2.0 Push/PO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('723.BenQ MD 300H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-MD-300H Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.2 (GUI) MMP/2.0 Push/PO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('724.BenQ P51',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ P51/5.1.65/WAP1.2 Profile/MIDP2.0 Configuration/CLDC1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('725.BenQ P51',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ P51/5.1.65/WAP1.2 Profile/MIDP2.0 Configuration/CLDC1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('726.BenQ-Siemens C31',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-SIEMENS - C31/1.00/WAP2.0/MIDP2.0/CLDC1.0 UP.Browser/6.3.0.4.c.1.102 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('727.BenQ-Siemens C31',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-SIEMENS - C31/1.00/WAP2.0/MIDP2.0/CLDC1.0 UP.Browser/6.3.0.4.c.1.102 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('728.BenQ-Siemens C81',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SIE-C81/51 UP.Browser/7.1.0.e.25(GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.1.0.e.25 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('729.BenQ-Siemens C81',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SIE-C81/51 UP.Browser/7.1.0.e.25(GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.1.0.e.25 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('730.BenQ-Siemens SL80',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-SL80/1.01 Browser/Openwave/6.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('731.BenQ-Siemens SL80',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BenQ-SL80/1.01 Browser/Openwave/6.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('732.Bird D611',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD_D611/V1.0.0/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('733.Bird D611',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD_D611/V1.0.0/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('734.Bird D615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Boost D615' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('735.Bird D615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD_D615/1.00 Nucleus RTOS/V1.11.19 MTK6227/05C_V21 Release/5.25.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('736.Bird D615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Boost D615' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('737.Bird D615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD_D615/1.00 Nucleus RTOS/V1.11.19 MTK6227/05C_V21 Release/5.25.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('738.Bird D660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD_D660/V1.0.0/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0 BIRD_D660/V1.0.0/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('739.Bird D660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD_D660/V1.0.0/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0 BIRD_D660/V1.0.0/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('740.Bird D718',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD D718/1.00 Nucleus RTOS/V1.11.19 MTK6227/06A Release/12.28.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('741.Bird D718',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD D718/1.00 Nucleus RTOS/V1.11.19 MTK6227/06A Release/12.28.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('742.Bird F501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD.F501/1.00 Nucleus RTOS/V1.11.19 MTK6227/05C_V24 Release/11.21.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('743.Bird F501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD.F501/1.00 Nucleus RTOS/V1.11.19 MTK6227/05C_V24 Release/11.21.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('744.Bird F518',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD F518/1.00 Nucleus RTOS/V1.11.19 MTK6227/06A Release/12.28.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('745.Bird F518',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD F518/1.00 Nucleus RTOS/V1.11.19 MTK6227/06A Release/12.28.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('746.Bird K298',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD K298/1.00 Nucleus RTOS/V1.11.19 MTK6223/08A Release/07.01.2008 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('747.Bird K298',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD K298/1.00 Nucleus RTOS/V1.11.19 MTK6223/08A Release/07.01.2008 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('748.Bird SC14',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD.SC14' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('749.Bird SC14',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD.SC14 MO130m-128x160/1.1 UP.Browser/6.1.0.6.1.c.4 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('750.Bird SC14',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD.SC14' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('751.Bird SC14',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD.SC14 MO130m-128x160/1.1 UP.Browser/6.1.0.6.1.c.4 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('752.Bird SC24',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD.SC24' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('753.Bird SC24',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD.SC24 MO130m-128x160/1.1 UP.Browser/6.1.0.6.1.c.4 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('754.Bird SC24',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD.SC24' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('755.Bird SC24',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD.SC24 MO130m-128x160/1.1 UP.Browser/6.1.0.6.1.c.4 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('756.Bird V750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD V750/1.00 Nucleus RTOS/V1.11.19 MTK6227/06A Release/12.28.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('757.Bird V750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD V750/1.00 Nucleus RTOS/V1.11.19 MTK6227/06A Release/12.28.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('758.Bird V780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD V780/1.00 Nucleus RTOS/V1.11.19 MTK6227/06A Release/12.28.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('759.Bird V780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD V780/1.00 Nucleus RTOS/V1.11.19 MTK6227/06A Release/12.28.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('760.Bird V788',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD V788/1.00 Nucleus RTOS/V1.11.19 MTK6227/06A Release/12.28.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('761.Bird V788',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BIRD V788/1.00 Nucleus RTOS/V1.11.19 MTK6227/06A Release/12.28.2006 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('762.BlackBerry Bold 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9700; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.546 Mobile Safari/534.8+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('763.BlackBerry Bold 9930',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9930; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.254 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('764.BlackBerry Torch 9850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9850; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.374 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('765.Bleu 355X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bleu 355x' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('766.Bleu 355X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bleu 355x' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('767.Bleu 458x',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bleu 458x' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('768.Bleu 458x',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bleu 458x' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('769.Bleu 471x',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bleu 471x' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('770.Bleu 471x',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bleu 471x' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('771.Bleu 651Z',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BLEU_651z/V1.0.0/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0 BLEU_651z/V1.0.0/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('772.Bleu 651Z',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BLEU_651z/V1.0.0/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0 BLEU_651z/V1.0.0/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('773.Bolt Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; BOLT/2.800) AppleWebKit/534.6 (KHTML, like Gecko) Version/5.0 Safari/534.6.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('774.CECT U600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CECT U600/1.0 TELECA/W07.12 Release/03.26.2007 Browser/Teleca-1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('775.CECT U600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CECT U600/1.0 TELECA/W07.12 Release/03.26.2007 Browser/Teleca-1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('776.Chunghwa CHT8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-tw; CHT8000 Build/CRB17) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('777.Chunghwa CHT8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-tw; CHT8000 Build/CRB17) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('778.Cincinnati Bell Blaze',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; CBW Blaze Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('779.Cincinnati Bell Blaze',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; CBW Blaze Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('780.Cking K1000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'K1000_WAP2_0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('781.Cking K1000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'K1000_WAP2_0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('782.Coolpad 288',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Yulong-CoolPAD 288/1.0 Browser/1.5.62' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('783.Coolpad 288',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Yulong-CoolPAD 288/1.0 Browser/1.5.62' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('784.CoralWeb Proxy',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CoralWebPrx/0.1.19 (See http://coralcdn.org/)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('785.CoralWeb Proxy',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CoralWebPrx/0.1.19 (See http://coralcdn.org/)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('786.Cricket CAPTR A200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Cricket-A200/1.0 UP.Browser/6.3.0.7 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('787.Cricket CAPTR A200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Cricket-A200/1.0 UP.Browser/6.3.0.7 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('788.Dell Streak',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; Dell Streak Build/Donut) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('789.Dell Streak',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Dell Streak Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('790.Dell Streak',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; Dell Streak Build/Donut) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('791.Dell Streak',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Dell Streak Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('792.Dell Venue',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Dell Venue Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('793.Dell Venue',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Dell Venue Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('794.DoCoMo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/1.0/P502i/c10 (Google CHTML Proxy/1.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('795.DoCoMo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH901iC(c100;TB;W24H12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('796.DoCoMo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/1.0/N503is/c10' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('797.DoCoMo 505i Series',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (P906i;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('798.DoCoMo 505i Series',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (P906i;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('799.DoCoMo D904i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (D904i;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('800.DoCoMo D904i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (D904i;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('801.DoCoMo F-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F01C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('802.DoCoMo F-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F01C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('803.DoCoMo F-02C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F02C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('804.DoCoMo F-02C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F02C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('805.DoCoMo F-03C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F03C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('806.DoCoMo F-03C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F03C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('807.DoCoMo F-04C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F04C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('808.DoCoMo F-04C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F04C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('809.DoCoMo F-05C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F05C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('810.DoCoMo F-05C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F05C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('811.DoCoMo F-06B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F06B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('812.DoCoMo F-06B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F06B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('813.DoCoMo F-07B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F07B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('814.DoCoMo F-07B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F07B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('815.DoCoMo F-08B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F08B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('816.DoCoMo F-08B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F08B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('817.DoCoMo F-08C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F08C(c100;TB;W20H09)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('818.DoCoMo F-08C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F08C(c100;TB;W20H09)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('819.DoCoMo F-09B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F09B(c100;TB;W20H09)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('820.DoCoMo F-09B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F09B(c100;TB;W20H09)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('821.DoCoMo F-10B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F10B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('822.DoCoMo F-10B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 F10B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('823.DoCoMo F903i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (F903i;FOMA;c300;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('824.DoCoMo F903i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (F903i;FOMA;c300;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('825.DoCoMo F904i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (F904i;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('826.DoCoMo F904i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (F904i;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('827.DoCoMo F905i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (F905i;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('828.DoCoMo F905i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (F905i;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('829.DoCoMo F906i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (F906i;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('830.DoCoMo F906i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (F906i;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('831.DoCoMo G500i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'portalmmm/2.0 G500i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('832.DoCoMo G500i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'portalmmm/2.0 G500i(c20;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('833.DoCoMo G500i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'portalmmm/2.0 G500i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('834.DoCoMo G500i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'portalmmm/2.0 G500i(c20;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('835.DoCoMo L-03B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L01C(c100;TB;W16H11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('836.DoCoMo L-03B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L01C(c100;TB;W16H11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('837.DoCoMo L-03C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L03C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('838.DoCoMo L-03C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L03C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('839.DoCoMo L-04B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L04B(c100;TB;W24H12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('840.DoCoMo L-04B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L04B(c100;TB;W24H12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('841.DoCoMo L-04C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; L-04C Build/FRF91) AppleWebKit/533.1 (KHTML,like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('842.DoCoMo L-04C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; L-04C Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('843.DoCoMo L-04C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; L-04C Build/FRF91) AppleWebKit/533.1 (KHTML,like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('844.DoCoMo L-04C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; L-04C Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('845.DoCoMo L602i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L602i(c100;TB;W21H11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('846.DoCoMo L602i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L602i(c100;TB;W21H11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('847.DoCoMo L704i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L704i(c100;TB;W24H14)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('848.DoCoMo L704i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L704i(c100;TB;W30H17)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('849.DoCoMo L704i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L704i(c100;TB;W24H14)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('850.DoCoMo L704i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 L704i(c100;TB;W30H17)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('851.DoCoMo M702iS',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 M702iS(c100;TB;W24H13)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('852.DoCoMo M702iS',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 M702iS(c100;TB;W24H13)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('853.DoCoMo N-01B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N01C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('854.DoCoMo N-01B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N02C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('855.DoCoMo N-01B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N03C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('856.DoCoMo N-01B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N01C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('857.DoCoMo N-01B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N02C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('858.DoCoMo N-01B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N03C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('859.DoCoMo N-04B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N04B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('860.DoCoMo N-04B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N04B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('861.DoCoMo N-05B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N05B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('862.DoCoMo N-05B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N05B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('863.DoCoMo N-06B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N06B(c100;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('864.DoCoMo N-06B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N06B(c100;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('865.DoCoMo N-07B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N07B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('866.DoCoMo N-07B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N07B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('867.DoCoMo N-08B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N08B(c500;TB;W30H15)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('868.DoCoMo N-08B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N08B(c500;TB;W30H15)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('869.DoCoMo N706i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (N706i;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('870.DoCoMo N706i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (N706i;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('871.DoCoMo N904i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (N904i_W;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('872.DoCoMo N904i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (N904i_W;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('873.DoCoMo N905i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (N905i;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('874.DoCoMo N905i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N905i(c100;TB;W24H16) (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('875.DoCoMo N905i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (N905i;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('876.DoCoMo N905i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 N905i(c100;TB;W24H16) (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('877.DoCoMo N906i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (N906i;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('878.DoCoMo N906i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (N906imyu_W;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('879.DoCoMo N906i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (N906imyu;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('880.DoCoMo N906i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (N906i;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('881.DoCoMo N906i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (N906imyu_W;FOMA;c500;TB)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('882.DoCoMo N906i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (N906imyu;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('883.DoCoMo Nec N01A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (N01A;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('884.DoCoMo Nec N01A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (N01A;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('885.DoCoMo P-01A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (P01A;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('886.DoCoMo P-01A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (P01A;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('887.DoCoMo P-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P01C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('888.DoCoMo P-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P01C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('889.DoCoMo P-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P02C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('890.DoCoMo P-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P03C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('891.DoCoMo P-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P02C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('892.DoCoMo P-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P03C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('893.DoCoMo P-04B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P04B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('894.DoCoMo P-04B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P04B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('895.DoCoMo P-05B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P05B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('896.DoCoMo P-05B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P05B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('897.DoCoMo P-06B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P06B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('898.DoCoMo P-06B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P06B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('899.DoCoMo P-07B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P07B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('900.DoCoMo P-07B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 P07B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('901.DoCoMo P904i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (P904i;FOMA;c500;TB;W24H15)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('902.DoCoMo P904i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (P904i;FOMA;c500;TB;W24H15)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('903.DoCoMo SH-01A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SH01A;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('904.DoCoMo SH-01A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SH01A;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('905.DoCoMo SH-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH01C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('906.DoCoMo SH-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH01C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('907.DoCoMo SH-02C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH02C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('908.DoCoMo SH-02C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH02C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('909.DoCoMo SH-04C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH04C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('910.DoCoMo SH-04C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH04C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('911.DoCoMo SH-05C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH05C(c500;TB;W30H18)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('912.DoCoMo SH-05C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH05C(c500;TB;W30H18)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('913.DoCoMo SH-06C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH06C(c500;TB;W30H18)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('914.DoCoMo SH-06C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH06C(c500;TB;W30H18)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('915.DoCoMo SH-07B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH07B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('916.DoCoMo SH-07B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH07B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('917.DoCoMo SH-08B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH08B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('918.DoCoMo SH-08B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH08B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('919.DoCoMo SH-08C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH08C(c500;TB;W24H14)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('920.DoCoMo SH-08C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH08C(c500;TB;W24H14)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('921.DoCoMo SH-09B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH09B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('922.DoCoMo SH-09B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH09B(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('923.DoCoMo SH-09C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH09C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('924.DoCoMo SH-09C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SH09C(c500;TB;W24H16)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('925.DoCoMo SH906i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SH906i;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('926.DoCoMo SH906i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SH906i;FOMA;like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('927.DoCoMo SO905i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SO905i; FOMA; like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('928.DoCoMo SO905i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SO905i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('929.DoCoMo SO905i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SO905i; FOMA; like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('930.DoCoMo SO905i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DoCoMo/2.0 SO905i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('931.DoCoMo SO905iCS',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SO905iCS; FOMA; like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('932.DoCoMo SO905iCS',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SO905iCS; FOMA; like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('933.DoCoMo Z320a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ320a/R1C003 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('934.DoCoMo Z320a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ320a/R1C003 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('935.Dopod 577W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Dopod577W/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('936.Dopod 577W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Dopod577W/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('937.Dopod 595',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Dopod 595' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('938.Dopod 595',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Dopod595/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('939.Dopod 595',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Dopod 595' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('940.Dopod 595',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Dopod595/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('941.Dopod 818Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Dopod818Pro/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320; Dopod818 Pro)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('942.Dopod 818Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Dopod818Pro/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320; Dopod818 Pro)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('943.Dopod A3288',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-cn; dopod A3288 Build/DRC79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('944.Dopod A3288',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-cn; dopod A3288 Build/DRC79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('945.Dopod A6288',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; dopod A6288 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('946.Dopod A6288',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; dopod A6288 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('947.Dopod C500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) DopodC500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('948.Dopod C500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) DopodC500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('949.Dopod C720W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DopodC720W/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('950.Dopod C720W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DopodC720W/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('951.Dopod C730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) DopodC730' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('952.Dopod C730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) DopodC730' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('953.Dopod C730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod C730_CMCC/5.2.968/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('954.Dopod C730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) DopodC730' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('955.Dopod C730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) DopodC730' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('956.Dopod C730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod C730_CMCC/5.2.968/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('957.Dopod C800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DopodC800/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('958.Dopod C800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DopodC800/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('959.Dopod D805',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod D805_CMCC/5.2.1235/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('960.Dopod D805',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod D805_CMCC/5.2.1235/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('961.Dopod D818c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DopodD818c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('962.Dopod D818c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) DopodD818c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('963.Dopod D818c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DopodD818c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('964.Dopod D818c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) DopodD818c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('965.Dopod M700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DopodM700/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('966.Dopod M700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) DopodM700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('967.Dopod M700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DopodM700/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('968.Dopod M700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) DopodM700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('969.Dopod P660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod P660_CMCC/5.2.1941/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('970.Dopod P660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod P660_CMCC/5.2.1941/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('971.Dopod P860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod P860_CMCC/5.2.1620/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('972.Dopod P860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod P860_CMCC/5.2.1620/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('973.Dopod S1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod S1_CMCC/5.2.1235/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('974.Dopod S1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod S1_CMCC/5.2.1235/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('975.Dopod S300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DopodS300/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('976.Dopod S300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DopodS300/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('977.Dopod S500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DOPOD-S500/1.06.706.13 OPERA/8.65 CTC/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) dopod S500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('978.Dopod S500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DOPOD-S500/1.06.706.13 OPERA/8.65 CTC/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) dopod S500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('979.Dopod S700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod T2222_CMCC/5.2.19578/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('980.Dopod S700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod T2222_CMCC/5.2.19578/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('981.Dopod S900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod S900_CMCC/5.2.1941/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('982.Dopod S900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod S900_CMCC/5.2.1941/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('983.Dopod U1000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) DopodU1000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('984.Dopod U1000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) DopodU1000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('985.Doris Web Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Doris/1.17 [en] (Symbian)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('986.Doris Web Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Doris/1.17 [en] (Symbian)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('987.EDL C888',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EDL C888 Nucleus RTOS/V1.11.19 MTK6225/06B Release/06.20.2007 Browser/Teleca Profile/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('988.EDL C888',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EDL C888 Nucleus RTOS/V1.11.19 MTK6225/06B Release/06.20.2007 Browser/Teleca Profile/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('989.EDL C888',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EDL C888 Nucleus RTOS/V1.11.19 MTK6225/06B Release/06.20.2007 Browser/Teleca Profile/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('990.EDL C888',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EDL C888 Nucleus RTOS/V1.11.19 MTK6225/06B Release/06.20.2007 Browser/Teleca Profile/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('991.Elson EL399',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL399/2.0 (03.15) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('992.Elson EL399',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL399/2.0 (03.15) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('993.Emobile S11HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) S11HT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('994.Emobile S11HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) S11HT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('995.Emobile S12HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) S12HT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('996.Emobile S12HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) S12HT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('997.Emobile S21HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) S21HT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('998.Emobile S21HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) S21HT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('999.emobile S31HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; S31HT Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 MobileSafari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1000.emobile S31HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; HTC Liberty Build/FRG83) AppleWebKit/533.1 (KHTML like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1001.emobile S31HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; S31HT Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 MobileSafari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1002.emobile S31HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; HTC Liberty Build/FRG83) AppleWebKit/533.1 (KHTML like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1003.emobile S31HW',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; S31HW Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1004.emobile S31HW',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; S31HW Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1005.Era G1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; pl-pl; Era G1 Build/CRC1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1006.Era G1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; pl-pl; Era G1 Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1007.Era G1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; pl-pl; Era G1 Build/CRC1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1008.Era G1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; pl-pl; Era G1 Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1009.ERA G2 Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; pl-pl; ERA G2 Touch Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1010.ERA G2 Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; pl-pl; ERA G2 Touch Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1011.Ericsson D750i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonD750i/R1N Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1012.Ericsson D750i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonD750i/R1N Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1013.Ericsson G700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG700/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 941)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1014.Ericsson G700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG700/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 941)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1015.Ericsson G700c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG700c/R100 Symbian/9.1 UIQ/3.0 Release/08.04.16 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0(compatible;MSIE6.0;SymbianOS;878)Opera8.65[zh]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1016.Ericsson G700c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG700c/R100 Symbian/9.1 UIQ/3.0 Release/08.04.16 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0(compatible;MSIE6.0;SymbianOS;878)Opera8.65[zh]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1017.Ericsson G900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG900/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 817) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1018.Ericsson G900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG900/R100 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1019.Ericsson G900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG900/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 878) Opera 8.65 [sv]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1020.Ericsson G900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG900/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 941) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1021.Ericsson G900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG900/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 817) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1022.Ericsson G900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG900/R100 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1023.Ericsson G900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG900/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 878) Opera 8.65 [sv]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1024.Ericsson G900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG900/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 941) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1025.Ericsson K330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK330/R1CC001 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1026.Ericsson K330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK330a/R1CE002 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1027.Ericsson K330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK330/R1CC001 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1028.Ericsson K330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK330a/R1CE002 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1029.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1030.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1A Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1031.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1032.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1CA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1033.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1BC Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1034.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1CA/SNXXXXXXXXXXXXXXX Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1035.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sonyericssonk750i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1036.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1DB Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1037.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1038.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1A Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1039.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1040.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1CA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1041.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1BC Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1042.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1CA/SNXXXXXXXXXXXXXXX Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1043.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sonyericssonk750i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1044.Ericsson K750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK750i/R1DB Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1045.Ericsson M608c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonM608c/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 513) Opera 8.65 [zh-CN]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1046.Ericsson M608c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonM608c/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 513) Opera 8.65 [zh-CN]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1047.Ericsson P100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 SonyEricssonP100/01; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1048.Ericsson P100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP100v/01; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1049.Ericsson P100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 SonyEricssonP100/01; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1050.Ericsson P100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP100v/01; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1051.Ericsson P1c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP1c_CMCC/R100 Symbian/9.1 UIQ/3.0 Release/07.04.10 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0(compatible;MSIE6.0;SymbianOS;513)Opera8.65[zh]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1052.Ericsson P1c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP1c_CMCC/R100 Symbian/9.1 UIQ/3.0 Release/07.04.10 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0(compatible;MSIE6.0;SymbianOS;513)Opera8.65[zh]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1053.Ericsson P1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP1i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 598) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1054.Ericsson P1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; Series60/3.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413 Digia @Web/2.1 SonyEricssonP1i/R100 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1055.Ericsson P1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'UCWEB/6.0 UNTRUSTED/1.0 SonyEricssonP1i/R100 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1056.Ericsson P1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP1i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 636) Opera 8.65 [sv]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1057.Ericsson P1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP1i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 598) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1058.Ericsson P1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; Series60/3.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413 Digia @Web/2.1 SonyEricssonP1i/R100 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1059.Ericsson P1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'UCWEB/6.0 UNTRUSTED/1.0 SonyEricssonP1i/R100 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1060.Ericsson P1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP1i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 636) Opera 8.65 [sv]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1061.Ericsson P700i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP700i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 513) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1062.Ericsson P700i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP700i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 513) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1063.Ericsson R300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonR300/R2BA005 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1064.Ericsson R300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonR300a/R2CC001 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1065.Ericsson R300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonR300/R2BA005 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1066.Ericsson R300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonR300a/R2CC001 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1067.Ericsson T280a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT280a/R1BA003 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1068.Ericsson T280a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT280a/ R1BC002 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1069.Ericsson T280a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT280a/R1BA003 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1070.Ericsson T280a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT280a/ R1BC002 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1071.Ericsson U1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU_1/R1CA; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1072.Ericsson U1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU_1/R1CA; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1073.Ericsson U1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU1i/R1BB; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1074.Ericsson U1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU1a/R1BB; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1075.Ericsson U1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU1i/R1BB; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1076.Ericsson U1i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU1a/R1BB; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1077.Ericsson U1iv',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU1iv/R1BB; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1078.Ericsson U1iv',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU1iv/R1BB; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1079.Ericsson U5a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU5a/R2AA; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1080.Ericsson U5a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU5a/R2AA; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1081.Ericsson U5i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU5i/R1BB; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1082.Ericsson U5i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU5i/R1BB; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1083.Ericsson U5iv',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU5iv/R1CA; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1084.Ericsson U5iv',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU5iv/R1CA; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1085.Ericsson U8i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU8i/R2CA; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1086.Ericsson U8i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU8i/R2CA; Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1087.Ericsson W205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW205/R1AA021 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1088.Ericsson W205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW205/R1AA021 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1089.Ericsson W205a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW205a/R1BA004 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1090.Ericsson W205a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW205a/R1BA004 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1091.Ericsson W700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW700i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1092.Ericsson W700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW700i/R1CA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1093.Ericsson W700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sonyericssonw700i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1094.Ericsson W700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW700i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1095.Ericsson W700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW700i/R1CA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1096.Ericsson W700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sonyericssonw700i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1097.Ericsson W910i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW910iv/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1098.Ericsson W910i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW910iv/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1099.Ericsson W950c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW958c/R100 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1100.Ericsson W950c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW958c/R100 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1101.Ericsson Z300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ300i/R3F/TelecaBrowser/4.08' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1102.Ericsson Z300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ300i/R3G/TelecaBrowser/4.08' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1103.Ericsson Z300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ300i/R3S/TelecaBrowser/4.08' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1104.Ericsson Z300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ300i/R3F/TelecaBrowser/4.08' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1105.Ericsson Z300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ300i/R3G/TelecaBrowser/4.08' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1106.Ericsson Z300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ300i/R3S/TelecaBrowser/4.08' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1107.Ericsson Z300i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ300i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1108.Ericsson Z300i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ300i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1109.ETEN X500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1110.ETEN X500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1111.ETEN X800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1112.ETEN X800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1113.eTouch D35',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'eTouchD35' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1114.eTouch D35',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'eTouchD35' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1115.EZIO NEX 800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NEX800/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1116.EZIO NEX 800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NEX800/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1117.EZIO SX200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SX200/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1118.EZIO SX200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SX200/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1119.Firefox Mobile',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Android; Linux armv7l; rv:8.0) Gecko/20111104 Firefox/8.0 Fennec/8.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1120.Fitel PG2100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fitel-PG2100/EPR3 Mozilla/2.0 (compatible; MSIE 3.02; WAP 2.0; 240x320) Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1121.Fitel PG2100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fitel-PG2100/EPR3 Mozilla/2.0 (compatible; MSIE 3.02; WAP 2.0; 240x320) Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1122.Fly 2080',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly 2080 Fly 2080' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1123.Fly 2080',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly 2080, Fly 2080' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1124.Fly 2080',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly 2080 Fly 2080' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1125.Fly 2080',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly 2080, Fly 2080' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1126.Fly B400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-B400/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1127.Fly B400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-B400/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1128.Fly B600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'B600/SW1.1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0/Handset WAP' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1129.Fly B600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'B600/SW1.1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0/Handset WAP' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1130.Fly B700 Duo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY B700 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1131.Fly B700 Duo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY B700 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1132.Fly B720 Duo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY-B720 DUO/1.0 RTKE_OS/01.00 Dragonfly6120/1.0 TMSS-Browser/1.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1133.Fly B720 Duo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY-B720 DUO/1.0 RTKE_OS/01.00 Dragonfly6120/1.0 TMSS-Browser/1.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1134.Fly DS150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_DS150/MAUIBrowser/Configuration/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1135.Fly DS150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_DS150/MAUIBrowser/Configuration/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1136.Fly DS155',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_DS155/WAPBrowser2.0/Configuration' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1137.Fly DS155',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_DS155/WAPBrowser2.0/Configuration' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1138.Fly DS185',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_DS185/WAP2.0Configuration/Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1139.Fly DS185',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_DS185/WAP2.0Configuration/Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1140.FLY DS186',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_DS186/WapBrowserProfile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1141.FLY DS186',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_DS186/WapBrowserProfile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1142.Fly DS400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY-DS400/WAP1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1143.Fly DS400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY-DS400/WAP1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1144.Fly DS500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-DS500/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1145.Fly DS500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-DS500/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1146.Fly E105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-E105/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1147.Fly E105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-E105/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1148.Fly E140',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E140/WAPBrowser2.0Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1149.Fly E140',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E140/WAPBrowser2.0Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1150.FLY E146',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E146/WapBrowser2.0/MIDP-2.0Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1151.FLY E146',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E146/WapBrowser2.0/MIDP-2.0Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1152.Fly E150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E150/ObigoInternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1153.Fly E150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E150/ObigoInternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1154.Fly E155',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E155/WapBrowserProfile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1155.Fly E155',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E155/WapBrowserProfile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1156.Fly E170',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E170/WAPBrowserProfile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1157.Fly E170',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E170/WAPBrowserProfile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1158.Fly E171',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E171/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1159.Fly E171',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_E171/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1160.Fly E310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-E310 ObigoInternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1161.Fly E310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-E310 ObigoInternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1162.Fly Fly V100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly V100/2007.10.22 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1163.Fly Fly V100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly V100/2007.10.22 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1164.Fly Fly-SX225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-SX225/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1165.Fly Fly-SX225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-SX225/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1166.Fly Fly-SX315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-SX315/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1167.Fly Fly-SX315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-SX315/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1168.Fly Fly_MC300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_MC300/ObigoInternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1169.Fly Fly_MC300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_MC300/ObigoInternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1170.Fly Fly_Q300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_Q300/WapBrowserProfile/Configuration2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1171.Fly Fly_Q300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_Q300/WapBrowserProfile/Configuration2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1172.Fly Fly_ST230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_ST230/WapBrowserConfiguration2.0/MIDP2.0/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1173.Fly Fly_ST230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_ST230/WapBrowserConfiguration2.0/MIDP2.0/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1174.Fly G1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_G1/gameBT/WapBrowser2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1175.Fly G1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_G1/gameBT/WapBrowser2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1176.Fly HT1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-HUMMER HT1/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1177.Fly HT1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-HUMMER HT1/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1178.Fly HT2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FlyHT2 ObigoInternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1179.Fly HT2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FlyHT2 ObigoInternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1180.Fly LX500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-LX500/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1181.Fly LX500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-LX500/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1182.Fly LX600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-LX600/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1183.Fly LX600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-LX600/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1184.Fly M130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY M130 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1185.Fly M130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY M130 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1186.Fly M140',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_M140' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1187.Fly M140',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_M140' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1188.Fly MC100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly MC100/S120 Release/2008.02.26 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1189.Fly MC100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly MC100/S113 Release/2007.12.11 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1190.Fly MC100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly MC100/S120 Release/2008.02.26 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1191.Fly MC100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly MC100/S113 Release/2007.12.11 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1192.Fly MC110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly MC110/1.0 RTKE_OS/01.00 SS5210/8.0 Release/12.31.2007 Browser/Techsoft-01.00.00 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1193.Fly MC110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly MC110/1.0 RTKE_OS/01.00 SS5210/8.0 Release/12.31.2007 Browser/Techsoft-01.00.00 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1194.Fly MC150ds',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_MC150ds/WAP2.0Configuration/Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1195.Fly MC150ds',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_MC150ds/WAP2.0Configuration/Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1196.Fly MC170DS',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_MC170DS/MIDP2.0/ConfigurationWap2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1197.Fly MC170DS',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_MC170DS/MIDP2.0/ConfigurationWap2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1198.Fly MC180',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_MC180/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1199.Fly MC180',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_MC180/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1200.Fly MP600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY MP600 WAP Browser FLY MP600 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1201.Fly MP600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY MP600 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1202.Fly MP600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY MP600 WAP Browser FLY MP600 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1203.Fly MP600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY MP600 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1204.Fly Q200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_Q200/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1205.Fly Q200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_Q200/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1206.Fly SL110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY-SL110/S105 LMP/XM Release/2008.6.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1207.Fly SL110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY-SL110/S105 LMP/XM Release/2008.6.20' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1208.Fly SL130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_SL130/Browser/wap2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1209.Fly SL130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly_SL130/Browser/wap2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1210.Fly SX200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-SX200/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1211.Fly SX200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-SX200/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1212.Fly SX205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY-SX205/BSI AU.Browser/2.0 QO3C1 MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1213.Fly SX205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY-SX205/BSI AU.Browser/2.0 QO3C1 MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1214.Fly SX220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY-SX220/(2007.08.07)S108/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1215.Fly SX220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FLY-SX220/(2007.08.07)S108/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1216.Fly SX230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-SX230/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1217.Fly SX230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly-SX230/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1218.Fly V120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly V120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1219.Fly V120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly V120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1220.Fly V55',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'flyV25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1221.Fly V55',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'flyV25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1222.Fly V71',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly V71' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1223.Fly V71',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Fly V71' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1224.ftxBrowser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1225.Fujitsu IS11T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; IS11T Build/FGK400) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1226.Fujitsu IS11T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; IS11T Build/FGK400) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1227.Fujitsu T-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja -jp; T-01C Build/FFR002) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1228.Fujitsu T-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja_jp; T-01C Build/FROYO) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 NetFrontLifeBrowser/2.2 Mobile (Dragonfruit)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1229.Fujitsu T-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; T-01C Build/TER018) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 (Shinbun Browser)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1230.Fujitsu T-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja -jp; T-01C Build/FFR002) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1231.Fujitsu T-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja_jp; T-01C Build/FROYO) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 NetFrontLifeBrowser/2.2 Mobile (Dragonfruit)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1232.Fujitsu T-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; T-01C Build/TER018) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 (Shinbun Browser)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1233.Garmin-Asus A10',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; da-dk; Garmin-Asus A10 Build/DRC79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1234.Garmin-Asus A10',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; da-dk; Garmin-Asus A10 Build/DRC79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1235.Garmin-Asus A50',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; de-de; Garmin-Asus A50 Build/DRC79) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1236.Garmin-Asus A50',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-fr; Garmin-Asus A50 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1237.Garmin-Asus A50',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; de-de; Garmin-Asus A50 Build/DRC79) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1238.Garmin-Asus A50',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-fr; Garmin-Asus A50 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1239.Garmin-Asus Nüvifone G60',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; arm; en, Nuvifone) AppleWebKit/523.13 (KHTML, like Gecko) Version/3.0 Mobile Safari/419.3 Qt Qtopia Iris/1.1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1240.Garmin-Asus Nüvifone G60',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; arm; en, Nuvifone) AppleWebKit/523.13 (KHTML, like Gecko) Version/3.0 Mobile Safari/419.3 Qt Qtopia Iris/1.1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1241.Generic Bolt Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; 78; CentOS; US-en) AppleWebKit/527+ (KHTML, like Gecko) Bolt/0.862 Version/3.0 Safari/523.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1242.Generic Bolt Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; 78; CentOS; US-en) AppleWebKit/528+ (KHTML, like Gecko) Bolt/1.040 Version/4.0 Safari/528.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1243.Generic Bolt Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; BOLT/1.600) AppleWebKit/530+ (KHTML, like Gecko) Version/4.0 Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1244.Generic Bolt Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; 78; CentOS; US-en) AppleWebKit/527+ (KHTML, like Gecko) Bolt/0.920 Version/3.0 Safari/523.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1245.Generic Bolt Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; 78; CentOS; US-en) AppleWebKit/527+ (KHTML, like Gecko) Bolt/0.862 Version/3.0 Safari/523.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1246.Generic Bolt Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; 78; CentOS; US-en) AppleWebKit/528+ (KHTML, like Gecko) Bolt/1.040 Version/4.0 Safari/528.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1247.Generic Bolt Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; BOLT/1.600) AppleWebKit/530+ (KHTML, like Gecko) Version/4.0 Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1248.Generic Bolt Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; 78; CentOS; US-en) AppleWebKit/527+ (KHTML, like Gecko) Bolt/0.920 Version/3.0 Safari/523.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1249.Generic Firefox Mobile',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows CE 5.2; en-US; rv:1.9.2a1pre) Gecko/20090513 Fennec/1.0a1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1250.Generic Firefox Mobile',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows CE 5.2; en-US; rv:1.9.2a1pre) Gecko/20090513 Fennec/1.0a1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1251.Generic Iris Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT; U; en) AppleWebKit/522+ (KHTML, like Gecko) Iris/1.0.13 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1252.Generic Iris Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT; U; en) AppleWebKit/522+ (KHTML, like Gecko) Iris/1.0.13 Safari/419.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1253.Generic Transcoder',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GENERIC_TRANSCODER' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1254.Generic Transcoder',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_INFOGIN_IMP_TRANSCODER' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1255.Generic Transcoder',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GENERIC_TRANSCODER' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1256.Generic Transcoder',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_INFOGIN_IMP_TRANSCODER' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1257.Gigabyte Boston',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; Orange_Boston Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1258.Gigabyte Boston',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; pt-pt; Boston Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1259.Gigabyte Boston',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; pt-pt; Boston Build/DONUT) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1260.Gigabyte Boston',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; pt-pt; Boston Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1261.Gigabyte Boston',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; Orange_Boston Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1262.Gigabyte Boston',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; pt-pt; Boston Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1263.Gigabyte Boston',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; pt-pt; Boston Build/DONUT) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1264.Gigabyte Boston',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; pt-pt; Boston Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1265.Gigabyte GSmart MS800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; GIGABYTE-MS800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1266.Gigabyte GSmart MS800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; GIGABYTE-MS800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1267.Gigabyte T600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'T600; V3.02.E8 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 480x640; GIGABYTE-g-Smart' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1268.Gigabyte T600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) PPC; 240x320; GIGABYTE-g-Smart' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1269.Gigabyte T600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'T600; V3.02.E8 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 480x640; GIGABYTE-g-Smart' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1270.Gigabyte T600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) PPC; 240x320; GIGABYTE-g-Smart' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1271.Gionee F6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GIONEE-F6/SW1.0.0/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1272.Gionee F6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GIONEE-F6/SW1.0.0/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1273.Gionee L6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GIONEE-L6/SW1.0.0/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1274.Gionee L6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GIONEE-L6/SW1.0.0/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1275.Gionee L7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GIONEE-L7/SW1.0.0/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1276.Gionee L7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GIONEE-L7/SW1.0.0/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1277.Google Ion',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-cn; Google Ion Build/DRC83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1278.Google Ion',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-cn; Google Ion Build/DRC83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1279.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-gb; Nexus One Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1280.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; Nexus One Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1281.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Nexus One Build/FRF50) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1282.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; Nexus One Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1283.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1284.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-gb; Nexus One Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1285.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; Nexus One Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1286.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Nexus One Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1287.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; Nexus One Build/MIUI) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1288.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-gb; Nexus One Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1289.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; Nexus One Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1290.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Nexus One Build/FRF50) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1291.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; Nexus One Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1292.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1293.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-gb; Nexus One Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1294.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; Nexus One Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1295.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Nexus One Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1296.Google Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; Nexus One Build/MIUI) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1297.Google Nexus S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3; en-us; Nexus S Build/GRH41B) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1298.Google Nexus S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.4; es-es; Nexus S Build/GRH84) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1299.Google Nexus S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; Nexus S Build/GRI34) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1300.Google Nexus S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3; en-us; Nexus S Build/GRH41B) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1301.Google Nexus S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.4; es-es; Nexus S Build/GRH84) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1302.Google Nexus S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; Nexus S Build/GRI34) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1303.Google Wireless Transcoder',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; Google Wireless Transcoder;)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1304.Google Wireless Transcoder',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (en-us) AppleWebKit/525.13 (KHTML, like Gecko; Google Wireless Transcoder) Version/3.1 Safari/525.13' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1305.Google Wireless Transcoder',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; Google Wireless Transcoder;)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1306.Google Wireless Transcoder',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (en-us) AppleWebKit/525.13 (KHTML, like Gecko; Google Wireless Transcoder) Version/3.1 Safari/525.13' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1307.Haier Double Z702',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTIL-Z702 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1308.Haier Double Z702',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTIL-Z702 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1309.Haier G3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'G3/1.0 RTKE_OS/01.00 TD7210E/11.0 Release/10.23.2008 Browser/Techsoft-01.00.00 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1310.Haier G3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'G3/1.0 RTKE_OS/01.00 TD7210E/11.0 Release/10.23.2008 Browser/Techsoft-01.00.00 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1311.Haier HG M301',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Haier-HG-M301/CMCC Release/8.21.2007 Browser/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1312.Haier HG M301',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Haier-HG-M301/CMCC Release/8.21.2007 Browser/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1313.Haier HG V70',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Haier-HG-V70-CMCC/1.0 Release/03.25.2008 Browser/Obigo2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1314.Haier HG V70',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Haier-HG-V70-CMCC/1.0 Release/03.25.2008 Browser/Obigo2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1315.Haier HTIL V70',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTIL-V70/1.0 Release/11.05.2008 Browser/Obigo2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1316.Haier HTIL V70',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTIL-V70/1.0 Release/11.05.2008 Browser/Obigo2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1317.Haier HTIL-S210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTIL-S210' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1318.Haier HTIL-S210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTIL-S210' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1319.Haier M260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Haier-M260/(2005.08.18)1.0/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1320.Haier M260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Haier-M260/(2005.08.18)1.0/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1321.Haier Z3000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Haier-Z3000 UP.Browser/5.0.3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1322.Haier Z3000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Haier-Z3000 UP.Browser/5.0.3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1323.HEDY H797',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HEDY_H797_PLXBROW' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1324.HEDY H797',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HEDY_H797_PLXBROW' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1325.HEDY M881',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HEDY_M881_PLXBROW' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1326.HEDY M881',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HEDY_M881_PLXBROW' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1327.Hisense C1110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HS-C1110/CIR.4.00.00.NR OBIGO/Q04A1-1.11 CTC/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1328.Hisense C1110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HS-C1110/CIR.4.00.00.NR OBIGO/Q04A1-1.11 CTC/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1329.HP iPAQ 510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Smartphone; 176x220; HPiPAQ510/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1330.HP iPAQ 510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 176x220; HP iPAQ 510)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1331.HP iPAQ 510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Smartphone; 176x220; HPiPAQ510/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1332.HP iPAQ 510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Smartphone; 176x220; HPiPAQ510/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1333.HP iPAQ 510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 176x220; HP iPAQ 510)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1334.HP iPAQ 510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Smartphone; 176x220; HPiPAQ510/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1335.HP iPAQ 610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) compatible; MSIE 6.0; Windows CE; PPC; 240x320; HPiPAQ610/1.0 Mozilla/4.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1336.HP iPAQ 610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HPiPAQ610/1.0 (PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1337.HP iPAQ 610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HPiPAQ610/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1338.HP iPAQ 610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HPiPAQ610/1.0 (PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1339.HP iPAQ 610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) compatible; MSIE 6.0; Windows CE; PPC; 240x320; HPiPAQ610/1.0 Mozilla/4.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1340.HP iPAQ 610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HPiPAQ610/1.0 (PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1341.HP iPAQ 610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HPiPAQ610/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1342.HP iPAQ 610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HPiPAQ610/1.0 (PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1343.HP iPAQ 910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQ910/1.0/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) (PPC; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1344.HP iPAQ 910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HPiPAQ910/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1345.HP iPAQ 910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQ910/1.0/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) (PPC; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1346.HP iPAQ 910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HPiPAQ910/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1347.HP iPAQ Data Messenger',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQDataMessenger/1.0/Mozilla/4.0(compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC;320x240' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1348.HP iPAQ Data Messenger',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQDataMessenger/1.0/Mozilla/4.0(compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC;320x240' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1349.HP iPAQ rw6800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQrw6800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1350.HP iPAQ rw6800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQrw6800/1.0/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1351.HP iPAQ rw6800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQrw6800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1352.HP iPAQ rw6800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQrw6800/1.0/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1353.HP iPAQ rw6815',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQrw6815/1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1354.HP iPAQ rw6815',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQrw6815/1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1355.HP iPAQ Voice Messenger',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQVoiceMessenger/1.0/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Smartphone;240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1356.HP iPAQ Voice Messenger',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HPiPAQVoiceMessenger/1.00.00 Browser/VF-Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1357.HP iPAQ Voice Messenger',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/A000HP/HP001 Browser/VF-Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Smartphone;240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1358.HP iPAQ Voice Messenger',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HPiPAQVoiceMessenger/1.0/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Smartphone;240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1359.HP iPAQ Voice Messenger',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HPiPAQVoiceMessenger/1.00.00 Browser/VF-Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1360.HP iPAQ Voice Messenger',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/A000HP/HP001 Browser/VF-Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Smartphone;240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1361.HP Palm Pixi',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.4.5; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pixi/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1362.HP Palm Pre 1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.4.5; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1363.HP Pre3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; webOS/2.1.2; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) webOSBrowser/221.11 Safari/534.6 Pre/3.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1364.HP Pre3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/2.1.0; U; en-GB) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1365.HP Pre3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; webOS/2.1.2; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) webOSBrowser/221.11 Safari/534.6 Pre/3.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1366.HP Pre3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/2.1.0; U; en-GB) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1367.HP Veer',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/2.1.2; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 P160UNA/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1368.HP Veer',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/2.1.2; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 P160UNA/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1369.HTC 001HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-jp; 001HT Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1370.HTC 001HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; 001HT Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1371.HTC 001HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en -jp; 001HT Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1372.HTC 001HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; 001HT Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1373.HTC 001HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-jp; 001HT Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1374.HTC 001HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-jp; 001HT Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1375.HTC 001HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; 001HT Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1376.HTC 001HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en -jp; 001HT Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1377.HTC 001HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; 001HT Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1378.HTC 001HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-jp; 001HT Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1379.HTC 3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-3100/1.2 Mozilla/4.0 (compatible; MSIE 5.5; Windows CE; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1380.HTC 3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-3100/1.2 Mozilla/4.0 (compatible; MSIE 5.5; Windows CE; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1381.HTC 6175',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) USCCHTC6175' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1382.HTC 6175',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) USCCHTC6175' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1383.HTC 6277',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; A6277 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1384.HTC 6277',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; A6277 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 Sprint APA6277KT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1385.HTC 6277',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; A6277 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1386.HTC 6277',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; A6277 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 Sprint APA6277KT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1387.HTC 6850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) USCCHTC6850' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1388.HTC 6850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) USCCHTC6850' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1389.HTC 6900/Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HTC-6900-MR2 BM' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1390.HTC 6900/Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HTC Touch' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1391.HTC 6900/Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HTC-6900-MR2 BM' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1392.HTC 6900/Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HTC Touch' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1393.HTC 8282',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_HD_T8282 Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1394.HTC 8282',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_HD_T8282 Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1395.HTC 8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-8500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1396.HTC 8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-8500/1.2 Mozilla/4.0 (compatible; MSIE 5.5; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1397.HTC 8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-8500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1398.HTC 8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-8500/1.2 Mozilla/4.0 (compatible; MSIE 5.5; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1399.HTC 8900A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': '8900a/1.2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1400.HTC 8900A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': '8900a/1.2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1401.HTC 8900B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': '8900b/MR2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1402.HTC 8900B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': '8900b/MR2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1403.HTC 9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Sprint APA9292KT Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1404.HTC 9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Sprint APA9292KT Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1405.HTC 9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; Sprint APA9292KT Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1406.HTC 9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; Sprint APA9292KT Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1407.HTC 9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Sprint APA9292KT Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1408.HTC 9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Sprint APA9292KT Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1409.HTC 9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; Sprint APA9292KT Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1410.HTC 9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; Sprint APA9292KT Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1411.HTC A6366',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC-A6366/1.0 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1412.HTC A6366',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; HTC-A6366/1.0 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1413.HTC A6366',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC-A6366/1.0 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1414.HTC A6366',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; HTC-A6366/1.0 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1415.HTC A6380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-tw; HTC Aria A6380 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1416.HTC A6380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; cs-; HTC Gratia A6380 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1417.HTC A6380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; de-at; HTC Aria Build/FRG83G) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1418.HTC A6380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-tw; HTC Aria A6380 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1419.HTC A6380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; cs-; HTC Gratia A6380 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1420.HTC A6380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; de-at; HTC Aria Build/FRG83G) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1421.HTC A7275',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; HTC-A7275 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1422.HTC A7275',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; HTC-A7275 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1423.HTC A8181',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; Desire_A8181 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1424.HTC A8181',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; Desire_A8181 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1425.HTC A8181',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; Desire_A8181 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1426.HTC A8181',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; Desire_A8181 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1427.HTC A8183',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-au; HTC_Desire_A8183 V1.15.841.14 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1428.HTC A8183',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-au; HTC_Desire_A8183 V1.15.841.14 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1429.HTC ADR6300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; ADR6300 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1430.HTC ADR6300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; ADR6300 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1431.HTC ADR6300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; ADR6300 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1432.HTC ADR6300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; ADR6300 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1433.HTC ADR6350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; ADR6350 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1434.HTC ADR6350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; ADR6350 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1435.HTC ADR6400L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; ADR6400L 4G Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1436.HTC ADR6400L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; ADR6400L Build/FRG83D) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1437.HTC ADR6400L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; fi-us; ADR6400L Build/FRG83D) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1438.HTC ADR6400L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; ADR6400L 4G Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1439.HTC ADR6400L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; ADR6400L Build/FRG83D) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1440.HTC ADR6400L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; fi-us; ADR6400L Build/FRG83D) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1441.HTC Ameo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) PPC; 640x480; Ameo/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1442.HTC Ameo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) PPC; 640x480; Ameo/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1443.HTC Apache',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_APACHE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1444.HTC Apache',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_APACHE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1445.HTC Athena/Advantage',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 640x480; HTC_Advantage/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1446.HTC Athena/Advantage',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 640x480; HTC_Advantage/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1447.HTC Atlas',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WinWAPAtlas/4.0 (Atlas 1.0.000.0; 4.0.1.68; WM; PPC; t-zones)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1448.HTC Atlas',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'T-Mobile_Atlas (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) T-Mobile_Atlas' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1449.HTC Atlas',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WinWAPAtlas/4.0 (Atlas 1.0.000.0; 4.0.1.68; WM; PPC; t-zones)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1450.HTC Atlas',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'T-Mobile_Atlas (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) T-Mobile_Atlas' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1451.HTC Bahamas',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; bahamas) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1452.HTC Bahamas',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; bahamas) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1453.HTC Bee',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC Bee Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1454.HTC Bee',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC Bee Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1455.HTC Blackstone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_BLACKSTONE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1456.HTC Blackstone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 480x800; HTC_Touch_HD_T8282; OpVer 34.119.1.611 Opera/9.50(Microsoft Windows 5.1; U;en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1457.HTC Blackstone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 480x800; HTC_Touch_HD_T8282; OpVer 34.119.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1458.HTC Blackstone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_BLACKSTONE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1459.HTC Blackstone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 480x800; HTC_Touch_HD_T8282; OpVer 34.119.1.611 Opera/9.50(Microsoft Windows 5.1; U;en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1460.HTC Blackstone',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 480x800; HTC_Touch_HD_T8282; OpVer 34.119.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1461.HTC Bravo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; zh-tw; HTC Bravo Build/ERD79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1462.HTC Bravo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; bravo) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1463.HTC Bravo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC Bravo_C Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1464.HTC Bravo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; zh-tw; HTC Bravo Build/ERD79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1465.HTC Bravo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; bravo) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1466.HTC Bravo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC Bravo_C Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1467.HTC Breeze/MTeoR',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) SP; 240x320; HTC_MTeoR/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1468.HTC Breeze/MTeoR',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) SP; 240x320; HTC_MTeoR/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1469.HTC Buzz',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; HTC Buzz 1.02.161.2 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1470.HTC Buzz',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-au; HTC_A3335 V1.21.841.3 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1471.HTC Buzz',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; HTC Buzz 1.02.161.2 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1472.HTC Buzz',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-au; HTC_A3335 V1.21.841.3 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1473.HTC Cavalier',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_CAVALIER' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1474.HTC Cavalier',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_CAVALIER' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1475.HTC ChaCha',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_ChaCha_A810e/Mozilla/5.0(Linux; U; Android 2.3.3;it-it; Build/GRH78C) AppleWebkit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1476.HTC ChaCha',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_ChaCha_A810e/Mozilla/5.0(Linux; U; Android 2.3.3;it-it; Build/GRH78C) AppleWebkit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1477.HTC Charmer',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_CHARMER' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1478.HTC Charmer',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_CHARMER' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1479.HTC Cleo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'htc-cleo/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1480.HTC Cleo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'htc-cleo/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1481.HTC Dash 3G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) T-Mobile_Maple' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1482.HTC Dash 3G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) T-Mobile_Maple' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1483.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; desirec) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1484.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; HTC Desire Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1485.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ie; Desire_A8181 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1486.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; HTC Desire 1.15.161.4 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1487.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; desirec) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1488.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Desire_A8181 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1489.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; sv-se; Desire_A8181 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1490.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; USCCADR6275US Carrier ID 45 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1491.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; HTC Desire 2.10.161.2 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1492.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; HTC_Desire-orange-LS Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1493.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; X06HT Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1,gzip(gfe)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1494.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; HTC Desire 2.33.161.2 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1495.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; HTC Desire Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1496.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; HTC Desire Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1497.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; HTC_Desire_A8181 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1498.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; desirec) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1499.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; HTC Desire Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1500.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ie; Desire_A8181 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1501.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; HTC Desire 1.15.161.4 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1502.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; desirec) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1503.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Desire_A8181 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1504.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; sv-se; Desire_A8181 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1505.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; USCCADR6275US Carrier ID 45 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1506.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; HTC Desire 2.10.161.2 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1507.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; HTC_Desire-orange-LS Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1508.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; X06HT Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1,gzip(gfe)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1509.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; HTC Desire 2.33.161.2 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1510.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; HTC Desire Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1511.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; HTC Desire Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1512.HTC Desire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; HTC_Desire_A8181 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1513.HTC Desire ADR6200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; ADR6200 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1514.HTC Desire ADR6200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; ADR6200 Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1515.HTC Desire ADR6200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; ADR6200 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1516.HTC Desire ADR6200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; ADR6200 Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1517.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; HTC Desire HD 1.18.161.2 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1518.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Desire HD Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1519.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; de-de; HTC_DesireHD_A9191 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1520.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-de; HTC_DesireHD Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1521.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; HTC_DesireHD_A9191 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1522.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-at; HTC Desire HD 1.31.163.1 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1523.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; HTC_DesireHD_A9192 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1524.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; HTC_DesireHD-orange-LS Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1525.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; Desire HD Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1526.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC Desire HD 2.36.161.12 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1527.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; HTC Desire HD 1.18.161.2 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1528.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Desire HD Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1529.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; de-de; HTC_DesireHD_A9191 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1530.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-de; HTC_DesireHD Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1531.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; HTC_DesireHD_A9191 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1532.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-at; HTC Desire HD 1.31.163.1 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1533.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; HTC_DesireHD_A9192 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1534.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; HTC_DesireHD-orange-LS Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1535.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; Desire HD Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1536.HTC Desire HD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC Desire HD 2.36.161.12 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1537.HTC Desire S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; HTC/DesireS/1.07.161.1 Build/GRH78C) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1538.HTC Desire S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; fr-fr; HTC/DesireS/1.07.163.1 Build/GRH78C) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1539.HTC Desire S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; HTC/DesireS/1.32.161.2 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1540.HTC Desire S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; HTC/DesireS/1.07.161.1 Build/GRH78C) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1541.HTC Desire S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; fr-fr; HTC/DesireS/1.07.163.1 Build/GRH78C) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1542.HTC Desire S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; HTC/DesireS/1.32.161.2 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1543.HTC Desire Z',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; HTC Desire Z 1.34.161.6 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1544.HTC Desire Z',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-sg; HTC_DesireZ_A7272 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1545.HTC Desire Z',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; HTC Desire Z 1.82.161.1 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1546.HTC Desire Z',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; HTC Desire Z 1.34.161.6 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1547.HTC Desire Z',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-sg; HTC_DesireZ_A7272 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1548.HTC Desire Z',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; HTC Desire Z 1.82.161.1 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1549.HTC DoCoMo 03A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; Docomo HT-03A Build/DRD08) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1550.HTC DoCoMo 03A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; Docomo HT-03A Build/DRD08) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1551.HTC DoCoMo Pro Series HT-02A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HT02A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1552.HTC DoCoMo Pro Series HT-02A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HT02A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1553.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1554.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-sg; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1555.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Dream Mozilla/5.0 (Linux; U; Android 1.5; en-ca; Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1556.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android HTC_Dream-1.13.0.1; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1557.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-ca; HTC Dream Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1558.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1559.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC Dream Build/EPE54B) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1560.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-au; HTC Dream Build/DRD20) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1561.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; htc_dream Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1562.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1563.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-sg; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1564.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Dream Mozilla/5.0 (Linux; U; Android 1.5; en-ca; Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1565.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android HTC_Dream-1.13.0.1; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1566.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-ca; HTC Dream Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1567.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1568.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC Dream Build/EPE54B) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1569.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-au; HTC Dream Build/DRD20) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1570.HTC Dream',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; htc_dream Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1571.HTC Droid Eris',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Eris Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1572.HTC Droid Eris',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Eris Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1573.HTC Droid Eris',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; Eris Build/ERD79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1574.HTC Droid Eris',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Eris Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1575.HTC Droid Eris',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Eris Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1576.HTC Droid Eris',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; Eris Build/ERD79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1577.HTC Elf',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC P3450/2.20.621.1 Mozilla/4.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1578.HTC Elf',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC P3450/2.20.621.1 Mozilla/4.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1579.HTC Elf/Touch/Vogue/P3050/P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_ELF' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1580.HTC Elf/Touch/Vogue/P3050/P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_ELF' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1581.HTC Espresso',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; HTC Espresso Build/ERD35B) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1582.HTC Espresso',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; T-Mobile_Espresso Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1583.HTC Espresso',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; espresso) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1584.HTC Espresso',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; HTC Espresso Build/ERD35B) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1585.HTC Espresso',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; T-Mobile_Espresso Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1586.HTC Espresso',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; espresso) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1587.HTC EVO 3D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; es-es; HTC/Shooter_U/1.01.161.1 Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1588.HTC EVO 3D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; es-es; HTC/Shooter_U/1.01.161.1 Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1589.HTC Excalibur',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod C720/5.1.342/WAP1.2 Profile/MIDP2.0 Configuration/CLDC1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1590.HTC Excalibur',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-Excalibur Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1591.HTC Excalibur',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod C720/5.1.342/WAP1.2 Profile/MIDP2.0 Configuration/CLDC1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1592.HTC Excalibur',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-Excalibur Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1593.HTC Fiesta',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android Donut; en-us; HTC Click Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1594.HTC Fiesta',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android Donut; en-us; HTC Click Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1595.HTC G2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; T-Mobile G2 Build/FRF91) AppleWebKit/533.1(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1596.HTC G2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; T-Mobile G2 Build/FRF91) AppleWebKit/533.1(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1597.HTC Glacier',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; HTC Glacier Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1598.HTC Glacier',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; HTC Glacier Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1599.HTC HD mini',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.5) Vodafone/1.0/HTC_HD_mini/1.00.164.1 (80896)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1600.HTC HD Mini',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; HD_mini_T5555; Windows Phone 6.5.3.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1601.HTC HD mini',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.5) Vodafone/1.0/HTC_HD_mini/1.00.164.1 (80896)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1602.HTC HD Mini',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; HD_mini_T5555; Windows Phone 6.5.3.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1603.HTC HD Mini T5555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'D_mini_T5555 Opera/9.7 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1604.HTC HD Mini T5555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HD_mini_T5555 Opera/9.7 (Windows NT 5.1; U; fr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1605.HTC HD Mini T5555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_HD_mini/Opera 9.7/1.11.164.1 (87733)/(Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1606.HTC HD Mini T5555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'D_mini_T5555 Opera/9.7 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1607.HTC HD Mini T5555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HD_mini_T5555 Opera/9.7 (Windows NT 5.1; U; fr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1608.HTC HD Mini T5555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_HD_mini/Opera 9.7/1.11.164.1 (87733)/(Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1609.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_HD2_T8585 Opera/9.7 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1610.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_HD2/1.49.164.2 (71528) Opera/9.7 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1611.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Vodafone/1.0/HTC_HD2/1.47.164.0 (70975)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1612.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; HTC_HD2_T8585; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1613.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Windows Phone 6.5 HTC_HD2/1.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1614.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HD2_T8585 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1615.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; XV6875.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1616.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC-HD2/1.44.163.3 (70494) Opera/9.7 (Windows NT 5.1;U;fr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1617.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; T-Mobile_LEO; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1618.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_HD2_T8585 Opera/9.7 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1619.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_HD2/1.49.164.2 (71528) Opera/9.7 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1620.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Vodafone/1.0/HTC_HD2/1.47.164.0 (70975)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1621.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; HTC_HD2_T8585; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1622.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Windows Phone 6.5 HTC_HD2/1.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1623.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HD2_T8585 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1624.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; XV6875.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1625.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC-HD2/1.44.163.3 (70494) Opera/9.7 (Windows NT 5.1;U;fr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1626.HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; T-Mobile_LEO; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1627.HTC Herald',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_HERALD' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1628.HTC Herald',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod C858g/5.1.422/WAP1.2 Profile/MIDP2.0 Configuration/CLDC1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1629.HTC Herald',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_HERALD' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1630.HTC Herald',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod C858g/5.1.422/WAP1.2 Profile/MIDP2.0 Configuration/CLDC1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1631.HTC Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) PPC; 240x320; HTC_TyTN/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1632.HTC Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TyTN-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320; HTC TyTN2)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1633.HTC Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TyTN/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1634.HTC Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC_TyTN\1.0 Profile\MIDP-2.0 Configuration\CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1635.HTC Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) PPC; 240x320; HTC_TyTN/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1636.HTC Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TyTN-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320; HTC TyTN2)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1637.HTC Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TyTN/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1638.HTC Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC_TyTN\1.0 Profile\MIDP-2.0 Configuration\CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1639.HTC Hermes/TyTN',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TyTN Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1640.HTC Hermes/TyTN',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TyTN Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1641.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; de-de; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1642.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; nl-nl; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1643.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-ca; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1644.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; hero) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1645.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; heroc) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1646.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; HERO200 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1647.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-za; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1648.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 CSOUTH-6200' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1649.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1650.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-se; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1651.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Hero Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1652.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC Hero Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1653.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; HERO200 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1654.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; HERO200 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1655.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC Hero Build/unknown) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1656.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; de-de; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1657.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; nl-nl; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1658.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-ca; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1659.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; hero) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1660.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; heroc) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1661.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; HERO200 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1662.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-za; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1663.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 CSOUTH-6200' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1664.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1665.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-se; HTC Hero Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1666.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Hero Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1667.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC Hero Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1668.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; HERO200 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1669.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; HERO200 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1670.HTC Hero',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC Hero Build/unknown) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1671.HTC Hero 200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HERO200 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1672.HTC Hero 200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HERO200 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1673.HTC HT-03A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; ja-jp; HT-03A Build/CDB72) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1674.HTC HT-03A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; ja-jp; HT-03A Build/CDB72) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1675.HTC HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1 (FRF91/FRG83); es-es; HTC HD2 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1676.HTC HTC HD2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1 (FRF91/FRG83); es-es; HTC HD2 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1677.HTC HTC Opal 100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_OPAL100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1678.HTC HTC Opal 100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_OPAL100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1679.HTC HTC Touch Viva T2223',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Viva_T2223 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1680.HTC HTC Touch Viva T2223',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Viva_T2223 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1681.HTC HTC Touch Viva T2223',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Viva_T2223 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1682.HTC HTC Touch Viva T2223',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Viva_T2223 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1683.HTC Incredible',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; inc) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1684.HTC Incredible',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; ADR6300 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1685.HTC Incredible',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; inc) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1686.HTC Incredible',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; ADR6300 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1687.HTC Incredible S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ar-sa; HTC Incredible S Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1688.HTC Incredible S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ar-sa; HTC Incredible S Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1689.HTC Inspire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; HTC-A9192/1.0 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1690.HTC Inspire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; HTC-A9192/1.0 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1691.HTC ISW11HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; PC36100 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1692.HTC ISW11HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; PC36100 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1693.HTC Jade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Jade/1.06.164.1 Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1694.HTC Jade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Jade/1.40.164.2 (21259)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1695.HTC Jade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Jade/1.06.164.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1696.HTC Jade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Jade/1.40. 164.2 Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1697.HTC Jade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Jade/1.06.164.1 Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1698.HTC Jade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Jade/1.40.164.2 (21259)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1699.HTC Jade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Jade/1.06.164.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1700.HTC Jade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Jade/1.40. 164.2 Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1701.HTC Juno',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_JUNO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1702.HTC Juno',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_JUNO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1703.HTC Kaiser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Kaiser Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1704.HTC Kaiser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/HTC_Kaiser/1.56.172.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1705.HTC Kaiser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/HTC_Kaiser/1.56.161.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1706.HTC Kaiser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Kaiser Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1707.HTC Kaiser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/HTC_Kaiser/1.56.172.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1708.HTC Kaiser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/HTC_Kaiser/1.56.161.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1709.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; es-es; HTC Legend Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 NGP' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1710.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-gb; legend) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1711.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; HTC Legend Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1712.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-fr; HTC Legend 1.32.163.1 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1713.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; HTC Legend 3.14.161.1 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1714.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-hk; HTC Legend Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1715.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-au; HTC Legend Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1716.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; es-es; HTC Legend Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 NGP' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1717.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-gb; legend) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1718.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; HTC Legend Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1719.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-fr; HTC Legend 1.32.163.1 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1720.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; HTC Legend 3.14.161.1 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1721.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-hk; HTC Legend Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1722.HTC Legend',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-au; HTC Legend Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1723.HTC Liberty',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC Liberty Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1724.HTC Liberty',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; HTC Liberty Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1725.HTC Libra',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_LIBRA' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1726.HTC Libra',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_LIBRA' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1727.HTC Love',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_LOVE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1728.HTC Love',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_LOVE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1729.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; sapphire; HTC_Magic) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1730.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC Magic' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1731.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; HTC Magic Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1732.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; it-; HTC Magic Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1733.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-ie; HTC Magic Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1734.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; HTC Magic Build/CRA57B) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1735.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-sg; HTC Magic Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1736.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; HTC Magic Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1737.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; HTC Magic Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1738.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Magic Mozilla/5.0 (Linux; U; Android 1.5; en-ca; Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1739.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; sv-se; HTC Magic Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1740.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; HTC Magic Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1741.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; HTC Magic Build/FRG57) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1742.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; HTC Magic Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1743.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/0.5 (Linux; U; Android 1.6; en-us; Docomo HT-03A Build/DRD08) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1744.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; HTC Magic Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1745.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; HTC Magic Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1746.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; Docomo HT-03A Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1747.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; sapphire; HTC_Magic) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1748.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC Magic' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1749.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; HTC Magic Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1750.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; it-; HTC Magic Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1751.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-ie; HTC Magic Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1752.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; HTC Magic Build/CRA57B) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1753.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-sg; HTC Magic Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1754.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; HTC Magic Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1755.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; HTC Magic Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1756.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Magic Mozilla/5.0 (Linux; U; Android 1.5; en-ca; Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1757.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; sv-se; HTC Magic Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1758.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; HTC Magic Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1759.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; HTC Magic Build/FRG57) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1760.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; HTC Magic Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1761.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/0.5 (Linux; U; Android 1.6; en-us; Docomo HT-03A Build/DRD08) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1762.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; HTC Magic Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1763.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; HTC Magic Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1764.HTC Magic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; Docomo HT-03A Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1765.HTC Max 4G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC MAX 4G Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1766.HTC Max 4G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC MAX 4G Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/1409; U; ru)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1767.HTC Max 4G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC MAX 4G Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1768.HTC Max 4G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC MAX 4G Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/1409; U; ru)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1769.HTC MDA Compact',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; MDA Compact/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1770.HTC MDA Compact',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; MDA Compact/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1771.HTC MDA Vario II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; MDA Vario/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1772.HTC MDA Vario II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; MDA Vario/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1773.HTC MDA Vario II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; MDA Vario/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1774.HTC MDA Vario II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; MDA Vario/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1775.HTC MDA Vario III',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; MDA Vario/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1776.HTC MDA Vario III',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; MDA Vario/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1777.HTC MDA Vario V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (Windows NT 5.1; MDA_Vario_V/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1; U; nl)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1778.HTC MDA Vario V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (Windows NT 5.1; MDA_Vario_V/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1; U; nl)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1779.HTC Mega',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Mega Opera/9.5 (Microsoft Windows; PPC Opera Mobi /17753; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1780.HTC Mega',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Mega Opera/9.5 (Microsoft Windows; PPC Opera Mobi /17753; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1781.HTC Mozart',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; HTC; 7 Mozart)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1782.HTC Mozart',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; HTC; 7 Mozart)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1783.HTC Neon',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) FOMA HT1100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1784.HTC Neon',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) FOMA HT1100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1785.HTC Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; Nexus One Build/ERD78) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1786.HTC Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; Nexus One Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1787.HTC Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; Nexus One Build/ERD78) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1788.HTC Nexus One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; Nexus One Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1789.HTC Nike',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_NIKE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1790.HTC Nike',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_NIKE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1791.HTC Oxygen',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_OXYGEN' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1792.HTC Oxygen',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_OXYGEN' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1793.HTC P3350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3350 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1794.HTC P3350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P3350/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1795.HTC P3350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3350 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1796.HTC P3350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P3350/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1797.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P3450/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1798.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC P3450; OpVer 23.102.2.741' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1799.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3450' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1800.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3450-orange/PPC; 240x320; OpVer 23.114.2.741 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1801.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_Elf' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1802.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P3450/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1803.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Elf/1.15.162.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1804.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': '240x320; HTC P3450; OpVer 23.116.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1805.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3450-orange/PPC; 240x320; OpVer 23.221.2.741 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1806.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC P3450/2.20.621.1 Mozilla/4.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1807.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC P3450' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1808.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3450-Ten/PPC; 240x320; OpVer 23.227.2.792 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1809.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/HTC_Elf/2.20.164.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1810.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P3450 White; OpVer 23.227.1.801' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1811.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P3450; OpVer 23.221.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1812.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC P3450; OpVer 23.116.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1813.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC P3450; OpVer 23.114.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1814.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P3450; OpVer 23.221.15.751' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1815.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC_P3450/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1816.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3450 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1817.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P3450/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1818.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P3450/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1819.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC P3450; OpVer 23.102.2.741' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1820.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3450' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1821.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3450-orange/PPC; 240x320; OpVer 23.114.2.741 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1822.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_Elf' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1823.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P3450/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1824.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Elf/1.15.162.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1825.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': '240x320; HTC P3450; OpVer 23.116.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1826.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3450-orange/PPC; 240x320; OpVer 23.221.2.741 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1827.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC P3450/2.20.621.1 Mozilla/4.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1828.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC P3450' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1829.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3450-Ten/PPC; 240x320; OpVer 23.227.2.792 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1830.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/HTC_Elf/2.20.164.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1831.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P3450 White; OpVer 23.227.1.801' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1832.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P3450; OpVer 23.221.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1833.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC P3450; OpVer 23.116.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1834.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC P3450; OpVer 23.114.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1835.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P3450; OpVer 23.221.15.751' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1836.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; HTC_P3450/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1837.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3450 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1838.HTC P3450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P3450/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1839.HTC P3451',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P3451/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1840.HTC P3451',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P3451/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1841.HTC P3470',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3470 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1842.HTC P3470',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3470-orange/PPC; 240x320; OpVer 29.113.2.731 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1843.HTC P3470',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3470 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1844.HTC P3470',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3470-orange/PPC; 240x320; OpVer 29.113.2.731 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1845.HTC P3490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3490 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1846.HTC P3490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3490 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1847.HTC P3490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3490 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1848.HTC P3490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3490 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1849.HTC P3651',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3651 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1850.HTC P3651',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3651 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1851.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3700 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1852.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3700 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1853.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_P3700/1.26.161.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1854.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Diamond Opera/9.50 (Windows NT 5.1; U; en) P3720' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1855.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3700-orange/PPC; 480x640; OpVer 30.137.2.732 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1856.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'htc_p3700/2.0 (03.92) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1857.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 480x640; HTC P3700; OpVer 30.193.15.752 Opera/9.50 (Microsoft Windows 5.1; U; es)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1858.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3700 Opera/9.50 (Windows NT 5.1; U; sv)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1859.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3700 Opera/9.50 (Windows NT 5.1; U; nb)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1860.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3700 Opera/9.50 (Windows NT 5.1; U; da)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1861.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3700 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1862.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3700 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1863.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_P3700/1.26.161.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1864.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Diamond Opera/9.50 (Windows NT 5.1; U; en) P3720' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1865.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3700-orange/PPC; 480x640; OpVer 30.137.2.732 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1866.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'htc_p3700/2.0 (03.92) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1867.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 480x640; HTC P3700; OpVer 30.193.15.752 Opera/9.50 (Microsoft Windows 5.1; U; es)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1868.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3700 Opera/9.50 (Windows NT 5.1; U; sv)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1869.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3700 Opera/9.50 (Windows NT 5.1; U; nb)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1870.HTC P3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3700 Opera/9.50 (Windows NT 5.1; U; da)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1871.HTC P3701',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3701/1.37.621.2 Mozilla/4.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1872.HTC P3701',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3701 Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1873.HTC P3701',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3701/1.37.621.2 Mozilla/4.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1874.HTC P3701',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3701 Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1875.HTC P3702',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3702 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1876.HTC P3702',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/1938; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1877.HTC P3702',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3702 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1878.HTC P3702',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/1938; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1879.HTC P4350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCP4350-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1880.HTC P4350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P4350 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1881.HTC P4350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P4350-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1882.HTC P4350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCP4350-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1883.HTC P4350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P4350 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1884.HTC P4350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P4350-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1885.HTC P4351',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P4351/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1886.HTC P4351',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_P4351/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1887.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCTyTN-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1888.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_TyTN/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1889.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; HTC TyTN; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1890.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) TyTN' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1891.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; HTC_TyTN' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1892.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) PPC; 240x320; HTC_TyTN\1.0 Profile\MIDP-2.0 Configuration\CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1893.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TyTN Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1894.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HTC TyTN' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1895.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IEMobile 6.9) PPC; 240x320; HTC_TyTN\1.0 Profile\MIDP-2.0 Configuration\CLDC-1.1 }}' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1896.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; HTC_TyTN\1.0 Profile\MIDP-2.0 Configuration\CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1897.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCTyTN-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1898.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; HTC_TyTN/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1899.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; HTC TyTN; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1900.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) TyTN' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1901.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; HTC_TyTN' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1902.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) PPC; 240x320; HTC_TyTN\1.0 Profile\MIDP-2.0 Configuration\CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1903.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TyTN Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1904.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HTC TyTN' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1905.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IEMobile 6.9) PPC; 240x320; HTC_TyTN\1.0 Profile\MIDP-2.0 Configuration\CLDC-1.1 }}' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1906.HTC P4500/TyTN/Hermes',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; HTC_TyTN\1.0 Profile\MIDP-2.0 Configuration\CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1907.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P4550 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1908.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P4550-orange/PPC; 240x320; OpVer 24.103.2.731 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1909.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P4550; OpVer 24.181.1.612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1910.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; HTC P4550; OpVer 24.328.1.610' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1911.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P4550 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1912.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; HTC P4550; OpVer 24.181.1.612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1913.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P4550 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1914.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P4550-orange/PPC; 240x320; OpVer 24.103.2.731 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1915.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P4550; OpVer 24.181.1.612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1916.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; HTC P4550; OpVer 24.328.1.610' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1917.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P4550 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1918.HTC P4550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; HTC P4550; OpVer 24.181.1.612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1919.HTC P4600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P4600/1.2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1920.HTC P4600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P4600/1.2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1921.HTC P5310BM',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HTC-P5310 BM' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1922.HTC P5310BM',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; HTC-P5310 BM ) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1923.HTC P5310BM',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HTC-P5310 BM' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1924.HTC P5310BM',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; HTC-P5310 BM ) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1925.HTC P5530 (Neon)',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P5530 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1926.HTC P5530 (Neon)',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P5530 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1927.HTC P5800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Qwest:Libra5800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1928.HTC P5800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Qwest:Libra5800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1929.HTC P6500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P6500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1930.HTC P6500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P6500; OpVer 27.110.1.612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1931.HTC P6500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 240x320; HTC P6500; OpVer 27.110.1.612) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1932.HTC P6500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; HTC P6500; OpVer 27.157.1.614' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1933.HTC P6500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P6500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1934.HTC P6500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P6500; OpVer 27.110.1.612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1935.HTC P6500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 240x320; HTC P6500; OpVer 27.110.1.612) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1936.HTC P6500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; HTC P6500; OpVer 27.157.1.614' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1937.HTC P6800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Qwest:Titan6800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1938.HTC P6800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Qwest:Titan6800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1939.HTC Passion',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; passion) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1940.HTC Passion',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; passion) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1941.HTC PB99400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; PB99400 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1942.HTC PB99400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; PB99400 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1943.HTC PC36100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; PC36100 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1944.HTC PC36100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; PC36100 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1945.HTC PC36100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; PC36100 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1946.HTC PC36100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; PC36100 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1947.HTC PC36100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; PC36100 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1948.HTC PC36100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; PC36100 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1949.HTC PG06100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; zh-tw; PG06100 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1950.HTC PG06100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; PG06100 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1951.HTC PG06100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; zh-tw; PG06100 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1952.HTC PG06100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; PG06100 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1953.HTC Pharos',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_PHAROS' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1954.HTC Pharos',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_PHAROS' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1955.HTC Polaris',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 1.0/HTC_Polaris' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1956.HTC Polaris',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Polaris Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1957.HTC Polaris',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 1.0/HTC_Polaris' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1958.HTC Polaris',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Polaris Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1959.HTC PPC6850BM',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HTC-PPC6850 BM' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1960.HTC PPC6850BM',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) HTC-PPC6850 BM' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1961.HTC Pyramid',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; HTC/Pyramid/0.60.162.1 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1962.HTC Pyramid',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; HTC/Pyramid/0.60.162.1 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1963.HTC Quartz',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_T8290 Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/1409; U; ru)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1964.HTC Quartz',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_QUARTZ' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1965.HTC Quartz',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_T8290 Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/1409; U; ru)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1966.HTC Quartz',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_QUARTZ' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1967.HTC Raphael',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_RAPHAEL' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1968.HTC Raphael',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_RAPHAEL' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1969.HTC Rose',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_ROSE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1970.HTC Rose',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_ROSE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1971.HTC S310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S310-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1972.HTC S310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S310-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1973.HTC S31HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; S31HT Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1974.HTC S31HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; S31HT Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1975.HTC S410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCS410' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1976.HTC S410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCS410' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1977.HTC S411',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-S411' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1978.HTC S411',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-S411' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1979.HTC S510e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; fr-fr; HTC_Passion_S510e Build/GRH78) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1980.HTC S510e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; fr-fr; HTC_Passion_S510e Build/GRH78) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1981.HTC S521',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Snap_S521 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1982.HTC S521',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Snap_S521 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1983.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCS620-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1984.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCS620-Mozilla/4.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1985.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S620' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1986.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S620 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1987.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) HTCS620;Smartphone;320x240' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1988.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HTCS620;Smartphone;320x240' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1989.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) HTCS620' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1990.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCS620-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1991.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCS620-Mozilla/4.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1992.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S620' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1993.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S620 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1994.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) HTCS620;Smartphone;320x240' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1995.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HTCS620;Smartphone;320x240' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1996.HTC S620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) HTCS620' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1997.HTC S621',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-S621' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1998.HTC S621',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S621 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('1999.HTC S621',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCS621-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2000.HTC S621',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-S621' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
});