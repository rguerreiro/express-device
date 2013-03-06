var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {
    describe('1.Apple iMac',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/534.51.22 (KHTML, like Gecko) Version/5.1.1 Safari/534.51.22' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('2.Apple Mac Book Air 11.6""',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/534.51.22 (KHTML, like Gecko) Version/5.1.1 Safari/534.51.22' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('3.Apple Mac Book Pro 15""',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/534.51.22 (KHTML, like Gecko) Version/5.1.1 Safari/534.51.22' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('4.Firefox 0.9.3',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Win 9x 4.90; rv:1.7) Gecko/20041103 Firefox/0.9.3' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('5.Firefox 1.0.4',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; I; SunOS sun4u; en-GB; rv:1.7.8) Gecko/20050713 Firefox/1.0.4' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('6.Firefox 10.0a',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/6.0 (Macintosh; I; Intel Mac OS X 11_7_9; de-LI; rv:1.9b4) Gecko/2012010317 Firefox/10.0a4' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('7.Firefox 3.6',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(Windows; U; Windows NT 7.0; rv:1.9.2) Gecko/20100101 Firefox/3.6' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('8.Firefox 4',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux x86_64; pl-PL; rv:2.0) Gecko/20110307 Firefox/4.0' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('9.Firefox 4',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; rv:2.0) Gecko/20110319 Firefox/4.0' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('10.Firefox 5',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i586; de; rv:5.0) Gecko/20100101 Firefox/5.0' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('11.Firefox 5',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 5.1; U; rv:5.0) Gecko/20100101 Firefox/5.0' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('12.Firefox 5.0.1',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; U; ru; rv:5.0.1.6) Gecko/20110501 Firefox/5.0.1 Firefox/5.0.1' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('13.Firefox 5.0a2',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:5.0a2) Gecko/20110524 Firefox/5.0a2' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('14.Firefox 6',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; Linux i686; rv:6.0) Gecko/20100101 Firefox/6.0' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('15.Firefox 6',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; rv:6.0) Gecko/20110814 Firefox/6.0' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('16.Firefox 9.0',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0) Gecko/20100101 Firefox/9.0' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('17.Firefox 9.0.1',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.2; rv:9.0.1) Gecko/20100101 Firefox/9.0.1' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('18.Google Chrome 13',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.33 (KHTML, like Gecko) Ubuntu/9.10 Chromium/13.0.752.0 Chrome/13.0.752.0 Safari/534.33' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('19.Google Chrome 14',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; PPC Mac OS X 10_6_7) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.790.0 Safari/535.1' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('20.Google Chrome 15',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.861.0 Safari/535.2' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('21.Google Chrome 16',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.6 (KHTML, like Gecko) Chrome/16.0.897.0 Safari/535.6' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('22.Google Chrome 17',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.8 (KHTML, like Gecko) Chrome/17.0.940.0 Safari/535.8' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('23.Google Chrome 18',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/18.6.872.0 Safari/535.2 UNTRUSTED/1.0 3gpp-gba UNTRUSTED/1.0' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('24.HTC HD7',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; XBLWP7; ZuneWP7)|HD7' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('25.HTC HD7',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; XBLWP7; ZuneWP7)|HD7' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('26.Intel Atom N455 Netbook',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('27.Internet Explorer 1.0',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Microsoft Internet Explorer/1.0 (Windows 95)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('28.Internet Explorer 1.5',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/1.22 (compatible; MSIE 1.5; Windows NT)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('29.Internet Explorer 4.0.1',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows NT 5.0)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('30.Internet Explorer 5.5',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows 95)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('31.Internet Explorer 6.0',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('32.Internet Explorer 6.0',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('33.Internet Explorer 7.0',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; Win64; x64; SV1)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('34.Internet Explorer 7.0',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; .NET CLR 1.1.4322)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('35.Internet Explorer 10',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('36.Internet Explorer 10',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('37.Internet Explorer 10',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/5.0)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('38.Internet Explorer 10',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/4.0; InfoPath.2; SV1; .NET CLR 2.0.50727; WOW64)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('39.Internet Explorer 10',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/5.0)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('40.Internet Explorer 10.6',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('41.Internet Explorer 5',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.00; Windows 98)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('42.Internet Explorer 5',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Windows NT 5.0)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('43.Internet Explorer 5.5',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible;MSIE 5.5; Windows 98)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('44.Internet Explorer 5.5',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('45.Internet Explorer 6',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0b; Windows 98)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('46.Internet Explorer 6',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('47.Internet Explorer 6',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MSIE 6.0; Windows NT 5.1)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('48.Internet Explorer 7',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('49.Internet Explorer 7',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 5.2)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('50.Internet Explorer 7',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Windows; MSIE 7.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('51.Internet Explorer 8',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('52.Internet Explorer 8',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 1.1.4322)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('53.Internet Explorer 8',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('54.Internet Explorer 8',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('55.Internet Explorer 8',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; SLCC1; .NET CLR 1.1.4322)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('56.Internet Explorer 9',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; MSIE 9.0; Windows NT 9.0; en-US)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('57.Internet Explorer 9',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; chromeframe/12.0.742.112)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('58.Internet Explorer 9',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 7.1; Trident/5.0)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('59.Internet Explorer 9',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( ; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('60.Motorola Milestone in Desktop Mode',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.5.30729; .NET4.0C)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('61.Netscape 8.0.1',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.5) Gecko/20050519 Netscape/8.0.1' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('62.Netscape 9',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.5) Gecko/20070321 Netscape/9.0' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('63.Opera 10',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (X11; Linux x86_64; U; en) Presto/2.2.15 Version/10.00' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('64.Opera 11',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Windows NT 6.1 x64; U; en) Presto/2.7.62 Version/11.00' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('65.Opera 11.01',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Windows NT 6.1; U; en-US) Presto/2.7.62 Version/11.01' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('66.Opera 11.10',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (X11; Linux x86_64; U; bg) Presto/2.8.131 Version/11.10' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('67.Opera 11.11',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (X11; Linux i686; U; es-ES) Presto/2.8.131 Version/11.11' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('68.Opera 11.50',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('69.Opera 11.51',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Windows NT 5.1; U; en) Presto/2.9.168 Version/11.51' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('70.Opera 11.52',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('71.Opera 12',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Windows NT 6.1; U; es-ES) Presto/2.9.181 Version/12.00' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('72.Opera 9.9',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.99 (Windows NT 5.1; U; pl) Presto/9.9.9' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('73.Safari 4.1',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_7; en-us) AppleWebKit/533.4 (KHTML, like Gecko) Version/4.1 Safari/533.4' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('74.Safari 5',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us) AppleWebKit/534.1+ (KHTML, like Gecko) Version/5.0 Safari/533.16' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('75.Safari 5.0.1',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; th-th) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('76.Safari 5.0.2',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; zh-HK) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('77.Safari 5.0.3',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; en-us) AppleWebKit/534.16+ (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('78.Safari 5.0.4',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; tr-TR) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('79.Safari 5.0.4',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; zh-cn) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('80.Safari 5.0.5',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('81.Windows HTC Radar - Desktop Mode',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; XBLWP7; ZuneWP7)' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('82.No user agent',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': undefined } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('83.Empty user agent',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': '' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
    describe('84.Chromebook OS',function(){
        it('should get device type desktop', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; CrOS i686 0.12.433) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.77 Safari/534.30' } });
            assert.equal(parser.get_type(), 'desktop');
        });
    });
});