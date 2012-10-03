var device = require('../lib/device.js'),
    base = require('./common.js');

exports['1.Apple iMac'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/534.51.22 (KHTML, like Gecko) Version/5.1.1 Safari/534.51.22' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['2.Apple Mac Book Air 11.6""'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/534.51.22 (KHTML, like Gecko) Version/5.1.1 Safari/534.51.22' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['3.Apple Mac Book Pro 15""'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/534.51.22 (KHTML, like Gecko) Version/5.1.1 Safari/534.51.22' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['4.Firefox 0.9.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Win 9x 4.90; rv:1.7) Gecko/20041103 Firefox/0.9.3' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['5.Firefox 1.0.4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; I; SunOS sun4u; en-GB; rv:1.7.8) Gecko/20050713 Firefox/1.0.4' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['6.Firefox 10.0a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/6.0 (Macintosh; I; Intel Mac OS X 11_7_9; de-LI; rv:1.9b4) Gecko/2012010317 Firefox/10.0a4' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['7.Firefox 3.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(Windows; U; Windows NT 7.0; rv:1.9.2) Gecko/20100101 Firefox/3.6' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['8.Firefox 4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux x86_64; pl-PL; rv:2.0) Gecko/20110307 Firefox/4.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['9.Firefox 4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; rv:2.0) Gecko/20110319 Firefox/4.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['10.Firefox 5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i586; de; rv:5.0) Gecko/20100101 Firefox/5.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['11.Firefox 5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 5.1; U; rv:5.0) Gecko/20100101 Firefox/5.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['12.Firefox 5.0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; U; ru; rv:5.0.1.6) Gecko/20110501 Firefox/5.0.1 Firefox/5.0.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['13.Firefox 5.0a2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:5.0a2) Gecko/20110524 Firefox/5.0a2' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['14.Firefox 6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; Linux i686; rv:6.0) Gecko/20100101 Firefox/6.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['15.Firefox 6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; rv:6.0) Gecko/20110814 Firefox/6.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['16.Firefox 9.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0) Gecko/20100101 Firefox/9.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['17.Firefox 9.0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.2; rv:9.0.1) Gecko/20100101 Firefox/9.0.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['18.Google Chrome 13'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.33 (KHTML, like Gecko) Ubuntu/9.10 Chromium/13.0.752.0 Chrome/13.0.752.0 Safari/534.33' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['19.Google Chrome 14'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; PPC Mac OS X 10_6_7) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.790.0 Safari/535.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['20.Google Chrome 15'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.861.0 Safari/535.2' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['21.Google Chrome 16'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.6 (KHTML, like Gecko) Chrome/16.0.897.0 Safari/535.6' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['22.Google Chrome 17'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.8 (KHTML, like Gecko) Chrome/17.0.940.0 Safari/535.8' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['23.Google Chrome 18'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/18.6.872.0 Safari/535.2 UNTRUSTED/1.0 3gpp-gba UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['24.HTC HD7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; XBLWP7; ZuneWP7)|HD7' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['25.HTC HD7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; XBLWP7; ZuneWP7)|HD7' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['26.Intel Atom N455 Netbook'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['27.Internet Explorer 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Microsoft Internet Explorer/1.0 (Windows 95)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['28.Internet Explorer 1.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/1.22 (compatible; MSIE 1.5; Windows NT)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['29.Internet Explorer 4.0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows NT 5.0)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['30.Internet Explorer 5.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows 95)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['31.Internet Explorer 6.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['32.Internet Explorer 6.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['33.Internet Explorer 7.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; Win64; x64; SV1)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['34.Internet Explorer 7.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; .NET CLR 1.1.4322)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['35.Internet Explorer 10'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['36.Internet Explorer 10'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['37.Internet Explorer 10'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/5.0)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['38.Internet Explorer 10'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/4.0; InfoPath.2; SV1; .NET CLR 2.0.50727; WOW64)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['39.Internet Explorer 10'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/5.0)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['40.Internet Explorer 10.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['41.Internet Explorer 5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.00; Windows 98)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['42.Internet Explorer 5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Windows NT 5.0)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['43.Internet Explorer 5.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible;MSIE 5.5; Windows 98)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['44.Internet Explorer 5.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['45.Internet Explorer 6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0b; Windows 98)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['46.Internet Explorer 6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['47.Internet Explorer 6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MSIE 6.0; Windows NT 5.1)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['48.Internet Explorer 7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['49.Internet Explorer 7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 5.2)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['50.Internet Explorer 7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Windows; MSIE 7.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['51.Internet Explorer 8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['52.Internet Explorer 8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 1.1.4322)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['53.Internet Explorer 8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['54.Internet Explorer 8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['55.Internet Explorer 8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; SLCC1; .NET CLR 1.1.4322)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['56.Internet Explorer 9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; MSIE 9.0; Windows NT 9.0; en-US)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['57.Internet Explorer 9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; chromeframe/12.0.742.112)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['58.Internet Explorer 9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 7.1; Trident/5.0)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['59.Internet Explorer 9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( ; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['60.Motorola Milestone in Desktop Mode'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.5.30729; .NET4.0C)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['61.Netscape 8.0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.5) Gecko/20050519 Netscape/8.0.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['62.Netscape 9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.5) Gecko/20070321 Netscape/9.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['63.Opera 10'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (X11; Linux x86_64; U; en) Presto/2.2.15 Version/10.00' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['64.Opera 11'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Windows NT 6.1 x64; U; en) Presto/2.7.62 Version/11.00' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['65.Opera 11.01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Windows NT 6.1; U; en-US) Presto/2.7.62 Version/11.01' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['66.Opera 11.10'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (X11; Linux x86_64; U; bg) Presto/2.8.131 Version/11.10' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['67.Opera 11.11'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (X11; Linux i686; U; es-ES) Presto/2.8.131 Version/11.11' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['68.Opera 11.50'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['69.Opera 11.51'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Windows NT 5.1; U; en) Presto/2.9.168 Version/11.51' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['70.Opera 11.52'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['71.Opera 12'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Windows NT 6.1; U; es-ES) Presto/2.9.181 Version/12.00' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['72.Opera 9.9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.99 (Windows NT 5.1; U; pl) Presto/9.9.9' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['73.Safari 4.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_7; en-us) AppleWebKit/533.4 (KHTML, like Gecko) Version/4.1 Safari/533.4' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['74.Safari 5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us) AppleWebKit/534.1+ (KHTML, like Gecko) Version/5.0 Safari/533.16' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['75.Safari 5.0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; th-th) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['76.Safari 5.0.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; zh-HK) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['77.Safari 5.0.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; en-us) AppleWebKit/534.16+ (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['78.Safari 5.0.4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; tr-TR) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['79.Safari 5.0.4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; zh-cn) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['80.Safari 5.0.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['81.Windows HTC Radar - Desktop Mode'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; XBLWP7; ZuneWP7)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['82.No user agent'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': undefined } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['83.Empty user agent'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': '' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};

base.run_test(__filename);