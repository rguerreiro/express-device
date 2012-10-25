var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {
    describe('2001.HTC S621',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S621 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2002.HTC S621',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCS621-Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2003.HTC S630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SP; 320x240; HTC_S630/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2004.HTC S630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SP; 320x240; HTC_S630/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2005.HTC S6356',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-ST6356/2.31.502.4 (66023) Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2006.HTC S6356',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-ST6356/2.31.502.4 (66023) Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2007.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SP; 240x320; HTC_S710/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2008.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HTCS710;Smartphone;240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2009.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) SP; 240x320; HTC_S710/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2010.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) SP; 240x320; HTC_S710/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2011.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_s710/1.15.163.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2012.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S710-Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320; Smartphone)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2013.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SP; 240x320; HTC_S710/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2014.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HTCS710;Smartphone;240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2015.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) SP; 240x320; HTC_S710/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2016.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) SP; 240x320; HTC_S710/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2017.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_s710/1.15.163.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2018.HTC S710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S710-Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320; Smartphone)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2019.HTC S710e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; sv-se; HTC_IncredibleS_S710e Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2020.HTC S710e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; sv-se; HTC_IncredibleS_S710e Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2021.HTC S730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S730 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2022.HTC S730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S730 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2023.HTC S740',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S740 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2024.HTC S740',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_S740 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2025.HTC Sedna/P6500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P6500 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2026.HTC Sedna/P6500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P6500 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2027.HTC Sensation',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; HTC/Sensation/1.17.162.1 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2028.HTC Sensation',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-no; HTC_Sensation_Z710e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2029.HTC Sensation',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; HTC/Sensation/1.17.162.1 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2030.HTC Sensation',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-no; HTC_Sensation_Z710e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2031.HTC Smart F3188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Smart_F3188 Mozilla/5.0 (like Gecko) Obigo/Q7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2032.HTC Smart F3188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Smart_F3188 Mozilla/5.0 (like Gecko) Obigo/Q7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2033.HTC Snap S523',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Snap_S523' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2034.HTC Snap S523',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Snap_S523' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2035.HTC Spark',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) HTC;Spark' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2036.HTC Spark',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; HTC; 7 Trophy)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2037.HTC Spark',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) HTC;Spark' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2038.HTC Spark',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; HTC; 7 Trophy)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2039.HTC Sprint PPC6850SP',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint PPC6850SP' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2040.HTC Sprint PPC6850SP',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint PPC6850SP' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2041.HTC ST21',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_HURRICANE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2042.HTC ST21',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_HURRICANE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2043.HTC ST7377',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-ST7377/1.59.502.3 (67150) Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2044.HTC ST7377',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-ST7377/1.59.502.3 (67150) Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2045.HTC ST7377',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-ST7377/1.59.502.3 (67150) Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2046.HTC ST7377',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-ST7377/1.59.502.3 (67150) Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2047.HTC StarTrek',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_STAR_TREK' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2048.HTC StarTrek',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_STAR_TREK' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2049.HTC Supersonic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; supersonic) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2050.HTC Supersonic',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; supersonic) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2051.HTC T5353',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Diamond2_T5353 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2052.HTC T5353',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) PPC; 480x800; HTC_Touch_Diamond2_T5353-Orange; OpVer 93.172.15.752' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2053.HTC T5353',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 480x800; HTC_Touch_Diamond2_T5353-Orange; OpVer 93.172.15.752 Opera/9.50 (Microsoft Windows 6.1; U;es)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2054.HTC T5353',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Diamond2_T5353 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2055.HTC T5353',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) PPC; 480x800; HTC_Touch_Diamond2_T5353-Orange; OpVer 93.172.15.752' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2056.HTC T5353',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 480x800; HTC_Touch_Diamond2_T5353-Orange; OpVer 93.172.15.752 Opera/9.50 (Microsoft Windows 6.1; U;es)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2057.HTC T5360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; HTC_Touch_Diamond2_T5360; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2058.HTC T5360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; HTC_Touch_Diamond2_T5360; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2059.HTC T7380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Sprint T7380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2060.HTC T7380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Sprint T7380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2061.HTC T8290',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_T8290 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2062.HTC T8290',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_T8290 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2063.HTC T8290',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_T8290 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2064.HTC T8290',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_T8290 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2065.HTC T8585',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_HD2_T8585 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2066.HTC T8585',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_HD2_T8585 Opera/9.7 (Windows NT 5.1; U; fr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2067.HTC T8585',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_HD2_T8585 Opera/9.7 (Windows NT 5.1; U; sv)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2068.HTC T8585',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_HD2_T8585 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2069.HTC T8585',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_HD2_T8585 Opera/9.7 (Windows NT 5.1; U; fr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2070.HTC T8585',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_HD2_T8585 Opera/9.7 (Windows NT 5.1; U; sv)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2071.HTC T8788',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; HTC; T8788)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2072.HTC T8788',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; HTC; T8788)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2073.HTC T9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; HTC; HD7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2074.HTC T9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; HTC; HD7 T9292)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2075.HTC T9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; HTC; HD7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2076.HTC T9292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; HTC; HD7 T9292)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2077.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android Donut; de-de; HTC Tattoo 1.52.161.1 Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2078.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; HTC Tattoo 1.62.161.4 Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2079.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; HTC Tattoo Build/DRC79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2080.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; da-dk; HTC_TATTOO_A3288 Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2081.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-ie; HTC Tattoo 1.67.174.27 Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2082.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; nl-nl; HTC Tattoo 1.67.161.5 Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2083.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; HTC Click-Orange Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2084.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; HTC Tattoo Build/DRC79) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2085.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android Donut; de-de; HTC Tattoo 1.52.161.1 Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2086.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; HTC Tattoo 1.62.161.4 Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2087.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; HTC Tattoo Build/DRC79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2088.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; da-dk; HTC_TATTOO_A3288 Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2089.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-ie; HTC Tattoo 1.67.174.27 Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2090.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; nl-nl; HTC Tattoo 1.67.161.5 Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2091.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; HTC Click-Orange Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2092.HTC Tattoo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; HTC Tattoo Build/DRC79) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2093.HTC Tornado',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Xda IQ; 240x320))' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2094.HTC Tornado',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_TORNADO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2095.HTC Tornado',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Xda IQ; 240x320))' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2096.HTC Tornado',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_TORNADO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2097.HTC Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Alltel HTC Touch' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2098.HTC Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-Touch/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2099.HTC Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Alltel HTC Touch' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2100.HTC Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Alltel HTC Touch' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2101.HTC Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-Touch/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2102.HTC Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Alltel HTC Touch' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2103.HTC Touch 3G T3232',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_3G_T3232 Opera/9.50 (Windows NT 5.1; U; pt)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2104.HTC Touch 3G T3232',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_3G_T3232 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2105.HTC Touch 3G T3232',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_3G_T3232 Opera/9.50 (Windows NT 5.1; U; pt)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2106.HTC Touch 3G T3232',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_3G_T3232 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2107.HTC Touch Cruise',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Cruise_T4242 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2108.HTC Touch Cruise',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Cruise_T4242 Opera/9.50 (Windows NT 5.1; U; nb)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2109.HTC Touch Cruise',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Cruise_T4242 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2110.HTC Touch Cruise',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Cruise_T4242 Opera/9.50 (Windows NT 5.1; U; nb)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2111.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3650 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2112.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3650 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2113.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 240x320; HTC_P3650) Opera 8.65 [it]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2114.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.0 (Microsoft Windows; PPC; 240x320; HTC_P3650; Opera Mobile/331; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2115.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 240x320; HTC_P3650) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2116.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3650t/1.27.621.1 Mozilla/4.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2117.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3650-orange/PPC; 240x320; OpVer 28.129.2.732 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2118.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.51 Beta (Microsoft Windows; PPC; 240x320; HTC_P3650; Opera Mobi/1718; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2119.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC_P3650/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2120.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P3650; OpVer 28.129.15.751' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2121.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3650 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2122.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3650 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2123.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 240x320; HTC_P3650) Opera 8.65 [it]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2124.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.0 (Microsoft Windows; PPC; 240x320; HTC_P3650; Opera Mobile/331; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2125.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 240x320; HTC_P3650) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2126.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P3650t/1.27.621.1 Mozilla/4.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2127.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P3650-orange/PPC; 240x320; OpVer 28.129.2.732 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2128.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.51 Beta (Microsoft Windows; PPC; 240x320; HTC_P3650; Opera Mobi/1718; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2129.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC_P3650/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2130.HTC Touch Cruise/P3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P3650; OpVer 28.129.15.751' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2131.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Diamond' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2132.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Diamond Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2133.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Diamond Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2134.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Diamond/1.93.164.1 Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2135.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_TOUCH_DIAMOND' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2136.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Diamond/1.37.161.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2137.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Alltel HTC Touch Diamond' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2138.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Opera/9.5) Alltel HTC Touch Diamond' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2139.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Diamond/V2.07.841.2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2140.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC Touch Diamond P3700 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2141.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Diamond' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2142.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Diamond Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2143.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Diamond Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2144.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Diamond/1.93.164.1 Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2145.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_TOUCH_DIAMOND' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2146.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Diamond/1.37.161.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2147.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Alltel HTC Touch Diamond' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2148.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Opera/9.5) Alltel HTC Touch Diamond' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2149.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Diamond/V2.07.841.2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2150.HTC Touch Diamond',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC Touch Diamond P3700 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2151.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Diamond2_T5353 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2152.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Touch_Diamond_II_T5353/1.03.164.1 (40543)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2153.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Vodafone/1.0/HTC_Touch_Diamond2/1.29.164.1 (44865)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2154.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Touch_Diamond2 Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2155.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Touch_Diamond_II_T5353/1.03.164.1 (40543) Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2156.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Diamond2_T5353 Opera/9.50 (Windows NT 5.1; U; sv)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2157.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Diamond2_T5353 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2158.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Touch_Diamond_II_T5353/1.03.164.1 (40543)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2159.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Vodafone/1.0/HTC_Touch_Diamond2/1.29.164.1 (44865)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2160.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Touch_Diamond2 Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2161.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Touch_Diamond_II_T5353/1.03.164.1 (40543) Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2162.HTC Touch Diamond 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Diamond2_T5353 Opera/9.50 (Windows NT 5.1; U; sv)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2163.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P5500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2164.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P5500-orange/PPC; 240x320; OpVer 25.109.2.7305 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2165.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC_P5500/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2166.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P5500 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2167.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC P5500/1.31.621.09 Mozilla/4.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2168.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P5500; OpVer 25.131.1.6109' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2169.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P5500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2170.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-P5500-orange/PPC; 240x320; OpVer 25.109.2.7305 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2171.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC_P5500/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2172.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P5500 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2173.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC P5500/1.31.621.09 Mozilla/4.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2174.HTC Touch Dual/P5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; HTC P5500; OpVer 25.131.1.6109' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2175.HTC Touch Dual/P5520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P5520 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2176.HTC Touch Dual/P5520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_P5520 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2177.HTC Touch HD T8282',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_HD_T8282 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2178.HTC Touch HD T8282',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_HD_T8282 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2179.HTC Touch HD T8282',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_HD_T8282 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2180.HTC Touch HD T8282',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_HD_T8282 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2181.HTC Touch HD T8285',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Touch_HD_T8285 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2182.HTC Touch HD T8285',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Touch_HD_T8285 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2183.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Pro_T7272 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2184.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Pro_T7272 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2185.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Touch_Pro/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2186.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Alltel HTC Touch Pro' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2187.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Opera/9.5) Alltel HTC Touch Pro' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2188.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/ HTC_Touch_ Pro Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2189.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Pro_T7272 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2190.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Pro_T7272 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2191.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Touch_Pro/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2192.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Alltel HTC Touch Pro' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2193.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Opera/9.5) Alltel HTC Touch Pro' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2194.HTC Touch Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/ HTC_Touch_ Pro Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2195.HTC Touch Pro2 T7373',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Pro2_T7373 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2196.HTC Touch Pro2 T7373',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Pro2_T7373 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2197.HTC Touch Pro2 T7373',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Pro2_T7373 Opera/9.7 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2198.HTC Touch Pro2 T7373',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Pro2_T7373 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2199.HTC Touch Pro2 T7373',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Pro2_T7373 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2200.HTC Touch Pro2 T7373',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch_Pro2_T7373 Opera/9.7 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2201.HTC Touch/6900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HTC-6900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2202.HTC Touch/6900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HTC-6900-MR1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2203.HTC Touch/6900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HTC-6900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2204.HTC Touch/6900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) HTC-6900-MR1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2205.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Touch2/1.29.176.2 (67024) Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2206.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch2_T3333 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2207.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch2_T3320 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2208.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch2_T3333 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2209.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE6.0; WindowsNT5.1; HTC_Touch2_T333; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2210.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; HTC_Touch2_T3333; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2211.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_Touch2/1.29.176.2 (67024) Opera/9.50 (Windows NT 5.1; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2212.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch2_T3333 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2213.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch2_T3320 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2214.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_Touch2_T3333 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2215.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE6.0; WindowsNT5.1; HTC_Touch2_T333; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2216.HTC Touch2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; HTC_Touch2_T3333; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2217.HTC TouchDual',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TouchDual Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2218.HTC TouchDual',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/HTC_TouchDual/1.31.163.09' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2219.HTC TouchDual',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows CE 5.2; rv:1.8.1.4pre) Gecko/20070327 Minimo/0.020' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2220.HTC TouchDual',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-Touch/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2221.HTC TouchDual',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TouchDual Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2222.HTC TouchDual',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/HTC_TouchDual/1.31.163.09' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2223.HTC TouchDual',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows CE 5.2; rv:1.8.1.4pre) Gecko/20070327 Minimo/0.020' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2224.HTC TouchDual',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-Touch/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2225.HTC TyTN II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-8900/1.2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2226.HTC TyTN II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TyTN_II Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2227.HTC TyTN II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-8900/1.2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2228.HTC TyTN II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TyTN_II Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2229.HTC TyTN II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TyTN_II Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2230.HTC TyTN II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-8900/1.2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2231.HTC TyTN II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TyTN_II Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2232.HTC TyTN II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-8900/1.2 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2233.HTC TyTN II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TyTN_II Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2234.HTC TyTN II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_TyTN_II Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2235.HTC V7505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_V7505/1.22.164.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2236.HTC V7505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_V7505/1.22.164.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2237.HTC Vision',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ca-fr; HTC Vision Build/FRG83D) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2238.HTC Vision',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; HTC Vision Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2239.HTC Vision',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ca-fr; HTC Vision Build/FRG83D) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2240.HTC Vision',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; HTC Vision Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2241.HTC Vogu100 P3050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VOGU100 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2242.HTC Vogu100 P3050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VOGU100 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2243.HTC Volans',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) HTC/X03HT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2244.HTC Volans',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_WING_VOLANS' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2245.HTC Volans',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) HTC/X03HT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2246.HTC Volans',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_WING_VOLANS' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2247.HTC Vox',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_VOX' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2248.HTC Vox',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_VOX' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2249.HTC VPA Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/VPA_Touch/2.24.162.52' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2250.HTC VPA Touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/VPA_Touch/2.24.162.52' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2251.HTC Wave',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_WAVE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2252.HTC Wave',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NON_UNIQUE_HTC_WAVE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2253.HTC Wildfire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; HTC Wildfire Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2254.HTC Wildfire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; HTC Wildfire 1.17.164.3 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2255.HTC Wildfire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; da-dk; HTC_Wildfire_A3333 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2256.HTC Wildfire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; sv-se; HTC Wildfire Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2257.HTC Wildfire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; sv-se; HTC Wildfire_A3333 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2258.HTC Wildfire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; HTC Wildfire Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2259.HTC Wildfire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; HTC Wildfire 1.17.164.3 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2260.HTC Wildfire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; da-dk; HTC_Wildfire_A3333 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2261.HTC Wildfire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; sv-se; HTC Wildfire Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2262.HTC Wildfire',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; sv-se; HTC Wildfire_A3333 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2263.HTC Wildfire S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; sl-sk; HTC_WildfireS_A510e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2264.HTC Wildfire S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; HTC/WildfireS/1.21.161.1 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2265.HTC Wildfire S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; sl-sk; HTC_WildfireS_A510e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2266.HTC Wildfire S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; HTC/WildfireS/1.21.161.1 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2267.HTC X02HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) HTC/X02HT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2268.HTC X02HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) HTC/X02HT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2269.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; HTCX06HT Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2270.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; HTCX06HT Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2271.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC Desire Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2272.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC_DesireHD_A9191 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2273.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; HTC Desire Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2274.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; Desire HD Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2275.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC_Desire_A8181 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2276.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC_DesireS_S510e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2277.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; ja-jp; HTC Desire Build/GRH78) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2278.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; HTC Desire Build/GINGERVillain-2.6) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2279.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; HTC Desire Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2280.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; HTCX06HT Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2281.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; HTCX06HT Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2282.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC Desire Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2283.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC_DesireHD_A9191 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2284.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; HTC Desire Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2285.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; Desire HD Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2286.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC_Desire_A8181 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2287.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; HTC_DesireS_S510e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2288.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; ja-jp; HTC Desire Build/GRH78) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2289.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; HTC Desire Build/GINGERVillain-2.6) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2290.HTC X06HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; HTC Desire Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2291.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_X7500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2292.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_X7500 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2293.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 640x480; HTC_X7500/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2294.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_X7510 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2295.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 640x480; HTC_X7500/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2296.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-X7510/1.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2297.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.51 Beta (Microsoft Windows; PPC; 640x480; HTC_X7500/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mobi/1718; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2298.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.5 (Microsoft Windows; PPC; 640x480; HTC_X7500/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mobi/2745; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2299.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_X7500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2300.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_X7500 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2301.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 640x480; HTC_X7500/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2302.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC_X7510 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2303.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 640x480; HTC_X7500/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2304.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTC-X7510/1.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2305.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.51 Beta (Microsoft Windows; PPC; 640x480; HTC_X7500/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mobi/1718; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2306.HTC X7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.5 (Microsoft Windows; PPC; 640x480; HTC_X7500/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mobi/2745; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2307.HTC Xda_Diamond_2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Diamond_2 Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2308.HTC Xda_Diamond_2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Diamond_2 Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2309.HTC XV6975',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'XV6975 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2310.HTC XV6975',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'XV6975 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2311.HTIL G111',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTIL-G111' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2312.HTIL G111',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTIL-G111' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2313.Huawei BM-SWU300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Ideos Build/B827SP01) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2314.Huawei BM-SWU300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Ideos Build/B827SP01) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2315.Huawei BM-SWU300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Ideos Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2316.Huawei BM-SWU300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Ideos Build/B827SP01) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2317.Huawei BM-SWU300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Ideos Build/B827SP01) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2318.Huawei BM-SWU300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Ideos Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2319.Huawei C5005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C5005/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2320.Huawei C5005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HUAWEI-C5005/001.00 ACS_NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2321.Huawei C5005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C5005/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2322.Huawei C5005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HUAWEI-C5005/001.00 ACS_NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2323.Huawei C5100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C5100/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2324.Huawei C5100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C5100/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2325.Huawei C5320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HUAWEI-C5320/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2326.Huawei C5320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C5320/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2327.Huawei C5320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HUAWEI-C5320/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2328.Huawei C5320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C5320/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2329.Huawei C5330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C5330/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2330.Huawei C5330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C5330/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2331.Huawei C5588',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HUAWEI-C5588/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2332.Huawei C5588',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C5588/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2333.Huawei C5588',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HUAWEI-C5588/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2334.Huawei C5588',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C5588/001.00 ACS-NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2335.Huawei C6100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C6100/001.00 ACS-Netfront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2336.Huawei C6100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'C6100/001.00 ACS-Netfront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2337.Huawei C8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-[ShunYea-V3.0-]; en-us; C8500 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2338.Huawei C8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-[ShunYea-V3.0-]; en-us; C8500 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2339.Huawei Comet',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-; Comet Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2340.Huawei Comet',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-; Comet Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2341.Huawei G3500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G3500/B000 Browser/Obigo-Browser/Q04C MMS' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2342.Huawei G3500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G3500/B000 Browser/Obigo-Browser/Q04C MMS' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2343.Huawei G5730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G5730/Browser/obigo-browser/q03c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2344.Huawei G5730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G5730/Browser/obigo-browser/q03c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2345.Huawei G6600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G6600/Browser/obigo-browser/q03c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2346.Huawei G6600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G6600/Browser/obigo-browser/q03c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2347.Huawei G6610V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiG6610V/SW03 Browser/Obigo-Browser/Q03C MMS/Obigo-MMS/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2348.Huawei G6610V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiG6610V/SW03 Browser/Obigo-Browser/Q03C MMS/Obigo-MMS/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2349.Huawei G6620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiG6620/G6620.C210.M40.04.02Browser/Obigo-Browser/Q03C MMS/Obigo-MMS1/1.0/MIDP-2.0 Configuration/CLD-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2350.Huawei G6620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiG6620/G6620.C210.M40.04.02Browser/Obigo-Browser/Q03C MMS/Obigo-MMS1/1.0/MIDP-2.0 Configuration/CLD-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2351.Huawei G7002',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G7002/SW1.0.0/WAP2.0/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2352.Huawei G7002',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HUAWEI/G7002/SW1.0.0/WAP2.0/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2353.Huawei G7002',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G7002/SW1.0.0/WAP2.0/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2354.Huawei G7002',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HUAWEI/G7002/SW1.0.0/WAP2.0/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2355.Huawei G7007',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G7007/Browser/obigo-browser/q03c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2356.Huawei G7007',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G7007/Browser/obigo-browser/q03c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2357.Huawei GM T3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GM T3/B000 Browser/NetFront/4.1 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2358.Huawei GM T3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GM T3/B000 Browser/NetFront/4.1 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2359.Huawei H11HW',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/H11HW/B000 Browser/Obigo-Browser/Q04A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2360.Huawei H11HW',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/H11HW/B000 Browser/Obigo-Browser/Q04A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2361.Huawei HUAWEI U3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU3100/B000 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2362.Huawei HUAWEI U3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU3100/B000 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2363.Huawei HUAWEI U5705',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU5705/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2364.Huawei HUAWEI U5705',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU5705/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2365.Huawei HUAWEI U7515',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7515/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2366.Huawei HUAWEI U7515',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7515/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2367.Huawei HUAWEI U7525',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7525/B000 Browser/NetFront/4.1 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2368.Huawei HUAWEI U7525',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7525/B000 Browser/NetFront/4.1 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2369.Huawei HUAWEI U7527',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7527/B000 Browser/NetFront/4.1 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2370.Huawei HUAWEI U7527',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7527/B000 Browser/NetFront/4.1 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2371.Huawei HUAWEI U9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HUAWEI U9100/B113 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2372.Huawei HUAWEI U9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HUAWEI U9100/B113 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2373.Huawei Huawei-G7010',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G7010/Browser/obigo-browser/q03c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2374.Huawei Huawei-G7010',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/G7010/Browser/obigo-browser/q03c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2375.Huawei Ideos',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-ec; Ideos Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2376.Huawei Ideos',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; zh-tw; Ideos Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2377.Huawei Ideos',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; Ideos Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 (Shinbun Browser)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2378.Huawei Ideos',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-ec; Ideos Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2379.Huawei Ideos',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; zh-tw; Ideos Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2380.Huawei Ideos',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; Ideos Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 (Shinbun Browser)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2381.Huawei JATULC2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'JAT-WAP ULC2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2382.Huawei JATULC2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'JAT-WAP ULC2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2383.Huawei M735',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HUAWEI-M735/001.00 Opera/9.70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2384.Huawei M735',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HUAWEI-M735/001.00 Opera/9.70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2385.Huawei M860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; M860 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2386.Huawei M860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ca-; HUAWEI-M860 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2387.Huawei M860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; HUAWEI-M860 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2388.Huawei M860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; HUAWEI-M860 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2389.Huawei M860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; M860 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2390.Huawei M860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ca-; HUAWEI-M860 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2391.Huawei M860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; HUAWEI-M860 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2392.Huawei M860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; HUAWEI-M860 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2393.Huawei S7-103',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-au; S7 Build) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2394.Huawei S7-103',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-au; S7 Build) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2395.Huawei T209',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei-T209_CMCC/0.1 NXP/1.0 Release/01.04.2009 Browser/mBrowser4.0 Profile/MIDP-1.0 Configration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2396.Huawei T209',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei-T209_CMCC/0.1 NXP/1.0 Release/01.04.2009 Browser/mBrowser4.0 Profile/MIDP-1.0 Configration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2397.Huawei T7200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/HuaweiT7200/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2398.Huawei T7200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/HuaweiT7200/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2399.Huawei U1005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/U1005/B000 Browser/Obigo-Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2400.Huawei U1005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/U1005/B000 Browser/Obigo-Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2401.Huawei U1107',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/U1107/B000 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2402.Huawei U1107',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/U1107/B000 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2403.Huawei U1205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/U1205/B000 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2404.Huawei U1205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/U1205/B000 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2405.Huawei U121',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1 0/U121/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2406.Huawei U121',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1 0/U121/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2407.Huawei U1211',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/U1211/B000 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2408.Huawei U1211',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/U1211/B000 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2409.Huawei U1215',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/U1215/B000 Browser/Obigo-Browser/Q04A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2410.Huawei U1215',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/U1215/B000 Browser/Obigo-Browser/Q04A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2411.Huawei U1250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/Huawei U1250/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2412.Huawei U1250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTC/1.0/0MTC 733/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2413.Huawei U1250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/Huawei U1250/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2414.Huawei U1250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTC/1.0/0MTC 733/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2415.Huawei U1280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0Huawei U1280/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2416.Huawei U1280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0Huawei U1280/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2417.Huawei U1300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HUAWEI U1300/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2418.Huawei U1300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HUAWEI U1300/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2419.Huawei U1305',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU1305/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2420.Huawei U1305',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU1305/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2421.Huawei U1307',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU1307/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2422.Huawei U1307',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU1307/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2423.Huawei U1310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU1310/B123 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2424.Huawei U1310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU1310/B123 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2425.Huawei U1315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU1315/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2426.Huawei U1315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU1315/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2427.Huawei U3200s',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU3200s/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2428.Huawei U3200s',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU3200s/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2429.Huawei U3300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SFR/1.0/0U3300/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2430.Huawei U3300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SFR/1.0/0U3300/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2431.Huawei U3307',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU3307/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2432.Huawei U3307',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU3307/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2433.Huawei U3310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTV/1.0/MTV3.4/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2434.Huawei U3310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTV/1.0/MTV3.4/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2435.Huawei U3311',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU3311/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2436.Huawei U3311',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU3311/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2437.Huawei U3315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU3315/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2438.Huawei U3315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU3315/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2439.Huawei U550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/Huawei U550/b000 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2440.Huawei U550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/Huawei U550/b000 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2441.Huawei U5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU5700/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2442.Huawei U5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU5700/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2443.Huawei U5900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU5900/B000 Browser/Obigo-Browser/Q05A HUAWEI-U5900 HuaweiJava/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2444.Huawei U5900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU5900/B000 Browser/Obigo-Browser/Q05A HUAWEI-U5900 HuaweiJava/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2445.Huawei U6100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0Huawei U6100/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2446.Huawei U6100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0Huawei U6100/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2447.Huawei U7200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU7200/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2448.Huawei U7200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HuaweiU7200/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2449.Huawei U7315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HUAWEI U7310/B003 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2450.Huawei U7315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HUAWEI U7315/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2451.Huawei U7315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HUAWEI U7310/B003 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2452.Huawei U7315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei/1.0/0HUAWEI U7315/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2453.Huawei U7510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7510/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2454.Huawei U7510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7510/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2455.Huawei U7517',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7517/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2456.Huawei U7517',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7517/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2457.Huawei U7519',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7519/B001 Browser/ACCESS NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2458.Huawei U7519',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7519/B001 Browser/ACCESS NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2459.Huawei U7520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7520/B000 Browser/NetFront/4.1 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2460.Huawei U7520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU7520/B000 Browser/NetFront/4.1 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2461.Huawei U8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; Huawei Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2462.Huawei U8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; Huawei Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2463.Huawei U8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; U8220) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2464.Huawei U8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; sv-se; U8220 Build/CRB17) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2465.Huawei U8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; U8220) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2466.Huawei U8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; sv-se; U8220 Build/CRB17) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2467.Huawei U8230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; es-es; U8230 Build/CRB17) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2468.Huawei U8230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; de-at; RBM2 Build/CRB17) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2469.Huawei U8230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-by; U8230 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2470.Huawei U8230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; es-es; U8230 Build/CRB17) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2471.Huawei U8230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; de-at; RBM2 Build/CRB17) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2472.Huawei U8230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-by; U8230 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2473.Huawei U8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-lt; U8500 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2474.Huawei U8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; U8500 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2475.Huawei U8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; Beeline_E300 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2476.Huawei U8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-lt; U8500 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2477.Huawei U8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; U8500 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2478.Huawei U8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; Beeline_E300 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2479.Huawei u8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-au; u8800 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2480.Huawei u8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; sv-se; IDEOS X5 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2481.Huawei u8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-au; u8800 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2482.Huawei u8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; sv-se; IDEOS X5 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2483.Huawei U9130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU9130/B047 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2484.Huawei U9130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiU9130/B047 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2485.Huawei V1240',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VodafoneV1240/B037 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2486.Huawei V1240',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VodafoneV1240/B037 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2487.Huawei V720',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone720/B212 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2488.Huawei V720',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone-720/1.0 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2489.Huawei V720',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone720/B212 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2490.Huawei V720',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone-720/1.0 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2491.Huawei V736',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTC/1.0/0MTC 736/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2492.Huawei V736',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTC/1.0/0MTC 736/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2493.Huawei v810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0vodafone810/B626 Browser/Obigo-browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJA/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2494.Huawei v810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0vodafone810/B626 Browser/Obigo-browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJA/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2495.Huawei V8302',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'V8302/B000 Browser/NetFront/4.1 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2496.Huawei V8302',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'V8302/B000 Browser/NetFront/4.1 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2497.Huawei V835',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTC/1.0/0MTC 835/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2498.Huawei V835',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTC/1.0/0MTC 835/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2499.Huawei Vodafone 710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei-VF710' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2500.Huawei Vodafone 710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone710/B618 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2501.Huawei Vodafone 710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Huawei-VF710' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2502.Huawei Vodafone 710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone710/B618 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2503.Huawei Vodafone 715',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone715/B112 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2504.Huawei Vodafone 715',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone715/B116 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2505.Huawei Vodafone 715',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone715/B112 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2506.Huawei Vodafone 715',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone715/B116 Browser/Obigo-Browser/Q04A MMS/Obigo-MMS/Q04A SyncML/HW-SyncML/1.0 Java/QVM/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2507.Huawei Vodafone 716',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone716' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2508.Huawei Vodafone 716',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone716' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2509.Huawei Vodafone 720',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone720/B208 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2510.Huawei Vodafone 720',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone720/B208 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2511.Huawei Vodafone 725',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone725/B112 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2512.Huawei Vodafone 725',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone725/B112 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2513.Huawei Vodafone 810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone810/B626 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2514.Huawei Vodafone 810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone810/B630 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2515.Huawei Vodafone 810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone810/B626 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2516.Huawei Vodafone 810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone810/B630 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2517.Huawei Vodafone 830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone830/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2518.Huawei Vodafone 830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone830/B100 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2519.Huawei VODAFONE 830i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone830i/B115SP04 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2520.Huawei VODAFONE 830i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone830i/B115SP04 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2521.Huawei VODAFONE 840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiV840/B533 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2522.Huawei VODAFONE 840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone840/B536SP02 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2523.Huawei VODAFONE 840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HuaweiV840/B533 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2524.Huawei VODAFONE 840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone840/B536SP02 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2525.Huawei Vodafone 845',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; Vodafone 845 Build/B221) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2526.Huawei Vodafone 845',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; Vodafone 845 Build/B221) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2527.Huawei Vodafone 858',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; Vodafone 858 Build/Vodafone858C02B615) AppleWebkit/533.1 (KHTML. like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2528.Huawei Vodafone 858',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; Vodafone 858 Build/Vodafone858C02B615) AppleWebkit/533.1 (KHTML. like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2529.i-mate 8150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) i-mate 8150/ 480x640' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2530.i-mate 8150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) i-mate 8150/ 480x640' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2531.i-mate 8502',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) i-mate 8502; 240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2532.i-mate 8502',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) i-mate 8502; 240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2533.i-mate 9502',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) i-mate 9502; 480x640' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2534.i-mate 9502',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) i-mate 9502; 480x640' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2535.i-mate 9502',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) i-mate 9502; 480x640' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2536.i-mate 9502',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) i-mate 9502; 480x640' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2537.i-mate JAMA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC i-mate JAMA; 240x320; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2538.i-mate JAMA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC i-mate JAMA; 240x320; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2539.i-mate JamIn',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; i-mate JAMin PPC; 240x320; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2540.i-mate JamIn',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod830/5.1.65/WAP1.2 Profile/MIDP2.0 Configuration/CLDC1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2541.i-mate JamIn',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; i-mate K-JAM PPC; 240x320; i-mate JAMin PPC; 240x320; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2542.i-mate JamIn',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; i-mate JAMin PPC; 240x320; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2543.i-mate JamIn',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'dopod830/5.1.65/WAP1.2 Profile/MIDP2.0 Configuration/CLDC1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2544.i-mate JamIn',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; i-mate K-JAM PPC; 240x320; i-mate JAMin PPC; 240x320; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2545.i-mate JAQ',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC i-mate JAQ; 240x320; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2546.i-mate JAQ',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; i-mate JAQ PPC; 240x320; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2547.i-mate JAQ',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC i-mate JAQ; 240x320; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2548.i-mate JAQ',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; i-mate JAQ PPC; 240x320; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2549.i-mate JASJAR',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; i-mate JASJAR PPC; 640x480; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2550.i-mate JASJAR',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; i-mate JASJAR PPC; 640x480; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2551.i-mate PDA L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC i-mate PDAL; 240x320; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2552.i-mate PDA L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC i-mate PDAL; 240x320; PPC)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2553.i-mobile 2200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile2200' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2554.i-mobile 2200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile2200' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2555.i-mobile 308',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile308' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2556.i-mobile 308',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile308' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2557.i-mobile 315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile315' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2558.i-mobile 315',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile315' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2559.i-mobile 318',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile318' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2560.i-mobile 318',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile318' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2561.i-mobile 320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2562.i-mobile 320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2563.i-mobile 360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile360' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2564.i-mobile 360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile360' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2565.i-mobile 508',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile508' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2566.i-mobile 508',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile508' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2567.i-mobile 510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile510 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2568.i-mobile 510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile510 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2569.i-mobile 513',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile513' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2570.i-mobile 513',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile513' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2571.i-mobile 516',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile516' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2572.i-mobile 516',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile516' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2573.i-mobile 518',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile518' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2574.i-mobile 518',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile518' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2575.i-mobile 519',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile519' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2576.i-mobile 519',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile519' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2577.i-mobile 520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile520' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2578.i-mobile 520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile520' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2579.i-mobile 523',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile523' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2580.i-mobile 523',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile523' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2581.i-mobile 533',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile533' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2582.i-mobile 533',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile533' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2583.i-mobile 600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2584.i-mobile 600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2585.i-mobile 601',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile601 MIC/WAP2.0 MIDP-2.0/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2586.i-mobile 601',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile601 MIC/WAP2.0 MIDP-2.0/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2587.i-mobile 602',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile602' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2588.i-mobile 602',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile602' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2589.i-mobile 603',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile603' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2590.i-mobile 603',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile603' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2591.i-mobile 604',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile604' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2592.i-mobile 604',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile604' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2593.i-mobile 606',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile606' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2594.i-mobile 606',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile606' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2595.i-mobile 607',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile607' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2596.i-mobile 607',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile607,i-mobile607' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2597.i-mobile 607',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile607' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2598.i-mobile 607',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile607,i-mobile607' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2599.i-mobile 608',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile 608/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2600.i-mobile 608',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile 608/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2601.i-mobile 609',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile609' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2602.i-mobile 609',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile609' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2603.i-mobile 610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile 610' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2604.i-mobile 610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile 610' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2605.i-mobile 611',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2606.i-mobile 611',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile611 i-mobile611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2607.i-mobile 611',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2608.i-mobile 611',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile611 i-mobile611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2609.i-mobile 612',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile 612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2610.i-mobile 612',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile 612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2611.i-mobile 613',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile613' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2612.i-mobile 613',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile613' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2613.i-mobile 625',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile625' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2614.i-mobile 625',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile625' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2615.i-mobile 658',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile658' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2616.i-mobile 658',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile658' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2617.i-mobile 901',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile901' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2618.i-mobile 901',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile901' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2619.i-mobile 902',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile902' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2620.i-mobile 902',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile902' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2621.i-mobile 903',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile903' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2622.i-mobile 903',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile903' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2623.i-mobile 904',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile904' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2624.i-mobile 904',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile904' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2625.i-mobile Hitz 2205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile Hitz 2205' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2626.i-mobile Hitz 2205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile Hitz 2205' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2627.i-mobile IE3250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobileIE3250' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2628.i-mobile IE3250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobileIE3250' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2629.i-mobile S326',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobileS326' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2630.i-mobile S326',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobileS326' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2631.i-mobile TV 626',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile626' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2632.i-mobile TV 626',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile626' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2633.IM T880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IM-T880' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2634.IM T880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IM-T880' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2635.Infineon 2130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (XMM2130;profile/MIDP-2.1 Configuration/CLDC-1.1) WAP_JB/5.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2636.Infineon 2130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Infineon (XMM2130;profile/MIDP-2.1 Configuration/CLDC-1.1) WAP_JB/5.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2637.Infineon 2130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (XMM2130;profile/MIDP-2.1 Configuration/CLDC-1.1) WAP_JB/5.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2638.Infineon 2130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Infineon (XMM2130;profile/MIDP-2.1 Configuration/CLDC-1.1) WAP_JB/5.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2639.InfoSonics VeryKool i250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VeryKool-i250' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2640.InfoSonics VeryKool i250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VeryKool-i250' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2641.INQ Mobile INQ B1 200H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ/B1-200H/1.0.38 Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2642.INQ Mobile INQ B1 200H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ/B1-200H/1.0.38 Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2643.INQ Mobile INQ Q1-200H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ/Q1-200H/1.0.56 Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2644.INQ Mobile INQ Q1-200H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ/Q1-200H/1.0.56 Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2645.INQ Mobile INQ1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ1/R2.6.1 NF-Browser/3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2646.INQ Mobile INQ1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ1/R3.9.1 NF-Browser/3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2647.INQ Mobile INQ1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ1/R4.0.4 NF-Browser/3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2648.INQ Mobile INQ1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ1/R2.6.1 NF-Browser/3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2649.INQ Mobile INQ1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ1/R3.9.1 NF-Browser/3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2650.INQ Mobile INQ1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ1/R4.0.4 NF-Browser/3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2651.INQ Mobile Q1 200H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ/Q1-200H/1.0.45 Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2652.INQ Mobile Q1 200H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ/Q1-200H/1.0.45 Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2653.INQ Mobile Q1 218H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ/Q1-218H/1.0.66 Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2654.INQ Mobile Q1 218H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ/Q1-218H/1.0.74 Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2655.INQ Mobile Q1 218H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ/Q1-218H/1.0.66 Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2656.INQ Mobile Q1 218H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'INQ/Q1-218H/1.0.74 Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2657.Internet Explorer 10',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/1.22 (compatible; MSIE 10.0; Windows 3.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2658.IXI CT 25m',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IXI-CT-25m/v2.1/Mozilla/4.0 (compatible; 240x320) IXI/Q05A2.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2659.IXI CT 25m',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IXI-CT-25m/v2.1/Mozilla/4.0 (compatible; 240x320) IXI/Q05A2.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2660.IXI CT25',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IXI-CT-25/v2.0/Mozilla/4.0 (compatible; 240x320) IXI/Q05A2.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2661.IXI CT25',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IXI-CT-25/v2.0/Mozilla/4.0 (compatible; 240x320) IXI/Q05A2.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2662.IXI OGO-CT1X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; 240x320) IXI/Q05A2.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2663.IXI OGO-CT1X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; 240x320) IXI/Q05A2.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2664.K-Touch H888',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'H888/MIDP2.0/CLDC1.1/Screen-176X220' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2665.K-Touch H888',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'H888/MIDP2.0/CLDC1.1/Screen-176X220' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2666.K-Touch N77',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'K-Touch_N77_CMCC/TYM885517_1048_V0801 MTK/6225 Release/30.04.2008 Browser/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2667.K-Touch N77',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'K-Touch_N77_CMCC/TYM885517_1048_V0801 MTK/6225 Release/30.04.2008 Browser/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2668.KCM N110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Gtran_N120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2669.KCM N110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Gtran_N120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2670.kddi A01',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; INFOBAR A01 Build/S6130) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2671.kddi A01',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; INFOBAR A01 Build/S6130) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2672.KDDI beskey',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-HI3H UP.Browser/6.2_7.2.7.1.K.5.179 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2673.KDDI beskey',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-HI3H UP.Browser/6.2_7.2.7.1.K.5.179 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2674.KDDI CA001',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-CA3D UP.Browser/6.2_7.2.7.1.K.3.341 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2675.KDDI CA001',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-CA3D UP.Browser/6.2_7.2.7.1.K.3.341 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2676.KDDI CA005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-CA3I UP.Browser/6.2_7.2.7.1.K.5.205 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2677.KDDI CA005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-CA3J UP.Browser/6.2_7.2.7.1.K.5.205 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2678.KDDI CA005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-CA3I UP.Browser/6.2_7.2.7.1.K.5.205 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2679.KDDI CA005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-CA3J UP.Browser/6.2_7.2.7.1.K.5.205 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2680.KDDI DRAPE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS39 UP.Browser/6.2.0.11.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2681.KDDI DRAPE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS39 UP.Browser/6.2.0.11.2 (GUI) MMP/2.0dh' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2682.KDDI DRAPE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS39 UP.Browser/6.2.0.11.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2683.KDDI DRAPE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS39 UP.Browser/6.2.0.11.2 (GUI) MMP/2.0dh' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2684.KDDI G11',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3T UP.Browser/6.2_7.2.7.1.K.6.210 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2685.KDDI G11',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3T UP.Browser/6.2_7.2.7.1.K.6.210 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2686.KDDI G9[iida]',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3K UP.Browser/6.2_7.2.7.1.K.3.343 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2687.KDDI G9[iida]',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3K UP.Browser/6.2_7.2.7.1.K.3.343 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2688.kddi ISW11HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; ISW11HT Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2689.kddi ISW11HT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; ISW11HT Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2690.KDDI K002',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC3P UP.Browser/6.2.0.15.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2691.KDDI K002',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC3P UP.Browser/6.2.0.15.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2692.KDDI K005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC3Y UP.Browser/6.2.0.17.1.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2693.KDDI K005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC3Y UP.Browser/6.2.0.17.1.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2694.KDDI K006',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC3Z UP.Browser/6.2.0.16.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2695.KDDI K006',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC3Z UP.Browser/6.2.0.16.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2696.KDDI K006(カメラなし)',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC41 UP.Browser/6.2.0.16.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2697.KDDI K006(カメラなし)',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC41 UP.Browser/6.2.0.16.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2698.KDDI K007',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC42 UP.Browser/6.2_7.2.7.1.K.6.210 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2699.KDDI K007',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC42 UP.Browser/6.2_7.2.7.1.K.6.210 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2700.KDDI K008',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC43 UP.Browser/6.2.0.17.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2701.KDDI K008',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC43 UP.Browser/6.2.0.17.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2702.KDDI LIGHT POOL',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3U UP.Browser/6.2_7.2.7.1.K.5.183 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2703.KDDI LIGHT POOL',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3U UP.Browser/6.2_7.2.7.1.K.5.183 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2704.KDDI NS01',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC3N UP.Browser/6.2.0.15.1.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2705.KDDI NS01',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC3N UP.Browser/6.2.0.15.1.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2706.KDDI P001',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-MA35 UP.Browser/6.2_7.2.7.1.K.2.225 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2707.KDDI P001',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-MA35 UP.Browser/6.2_7.2.7.1.K.2.225 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2708.KDDI PT002',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-PT36 UP.Browser/6.2.0.17.2.4 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2709.KDDI PT002',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-PT36 UP.Browser/6.2.0.17.2.4 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2710.KDDI S004',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3P UP.Browser/6.2_7.2.7.1.K.5.179 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2711.KDDI S004',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3P UP.Browser/6.2_7.2.7.1.K.5.179 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2712.KDDI S005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3Q UP.Browser/6.2_7.2.7.1.K.6.208 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2713.KDDI S005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3Q UP.Browser/6.2_7.2.7.1.K.6.208 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2714.KDDI S006',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3S UP.Browser/6.2_7.2.7.1.K.6.210 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2715.KDDI S006',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3S UP.Browser/6.2_7.2.7.1.K.6.210 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2716.KDDI S010',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH3K UP.Browser/6.2_7.2.7.1.K.5.205 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2717.KDDI S010',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH3K UP.Browser/6.2_7.2.7.1.K.5.205 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2718.KDDI SH007',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH3H UP.Browser/6.2_7.2.7.1.K.5.179 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2719.KDDI SH007',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH3H UP.Browser/6.2_7.2.7.1.K.5.179 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2720.KDDI SH008',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH3I UP.Browser/6.2_7.2.7.1.K.5.183 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2721.KDDI SH008',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH3I UP.Browser/6.2_7.2.7.1.K.5.183 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2722.KDDI SH009',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH3J UP.Browser/6.2_7.2.7.1.K.5.205 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2723.KDDI SH009',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH3J UP.Browser/6.2_7.2.7.1.K.5.205 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2724.KDDI SH011',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH3L UP.Browser/6.2_7.2.7.1.K.6.210 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2725.KDDI SH011',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH3L UP.Browser/6.2_7.2.7.1.K.6.210 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2726.KDDI T004',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3S UP.Browser/6.2_7.2.7.1.K.5.179 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2727.KDDI T004',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3S UP.Browser/6.2_7.2.7.1.K.5.179 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2728.KDDI T005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3V UP.Browser/6.2_7.2.7.1.K.6.208 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2729.KDDI T005',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3V UP.Browser/6.2_7.2.7.1.K.6.208 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2730.KDDI T006',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3X UP.Browser/6.2_7.2.7.1.K.7.108 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2731.KDDI T006',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3X UP.Browser/6.2_7.2.7.1.K.7.108 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2732.KDDI TS3O',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 Opera/9.5 (KDDI-TS3O; BREW; Opera Mobi; U; en) Presto/2.2.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2733.KDDI TS3O',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3O UP.Browser/6.2_7.2.7.1.K.4.301 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2734.KDDI TS3O',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 Opera/9.5 (KDDI-TS3O; BREW; Opera Mobi; U; en) Presto/2.2.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2735.KDDI TS3O',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3O UP.Browser/6.2_7.2.7.1.K.4.301 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2736.KDDI TS3P',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3P UP.Browser/6.2_7.2.7.1. K.4.301 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2737.KDDI TS3P',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3P UP.Browser/6.2_7.2.7.1. K.4.301 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2738.KDDI URBANO MOND',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3R UP.Browser/6.2_7.2.7.1.K.6.208 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2739.KDDI URBANO MOND',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3R UP.Browser/6.2_7.2.7.1.K.6.208 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2740.KDDI W41SH',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH31 UP.Browser/6.2.0.10.3.5 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2741.KDDI W41SH',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH31' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2742.KDDI W41SH',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH31 UP.Browser/6.2.0.10.3.5 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2743.KDDI W41SH',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH31' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2744.KDDI W51K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC39 UP.Browser/6.2.0.12.1.3 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2745.KDDI W51K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC39 UP.Browser/6.2.0.12.1.4 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2746.KDDI W51K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC39 UP.Browser/6.2.0.12.1.3 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2747.KDDI W51K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC39 UP.Browser/6.2.0.12.1.4 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2748.KDDI W54SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SA3B UP.Browser/6.2_7.2.7.1.K.1.5.1.116 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2749.KDDI W54SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SA3B UP.Browser/6.2_7.2.7.1.K.1.5.1.116 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2750.KDDI W61H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-HI3C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2751.KDDI W61H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-HI3C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2752.KDDI W62P',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-MA34 UP.Browser/6.2.0.13.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2753.KDDI W62P',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-MA34 UP.Browser/6.2.0.13.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2754.KDDI W62PT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-PT34 UP.Browser/6.2.0.14.3.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2755.KDDI W62PT',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-PT34 UP.Browser/6.2.0.14.3.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2756.KDDI W63CA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-CA3C UP.Browser/6.2_7.2.7.1.K.2.214 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2757.KDDI W63CA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-CA3C UP.Browser/6.2_7.2.7.1.K.2.214 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2758.KDDI W63SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SA3D UP.Browser/6.2_7.2.7.1.K.1.5.1.106 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2759.KDDI W63SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; KDDI-SA3D) Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2760.KDDI W63SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SA3D UP.Browser/6.2_7.2.7.1.K.1.5.1.116 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2761.KDDI W63SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SA3D UP.Browser/6.2_7.2.7.1.K.1.5.1.106 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2762.KDDI W63SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; KDDI-SA3D) Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2763.KDDI W63SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SA3D UP.Browser/6.2_7.2.7.1.K.1.5.1.116 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2764.KDDI W64S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3G UP.Browser/6.2.0.14.1.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2765.KDDI W64S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; KDDI-SN3G) Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2766.KDDI W64S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3G UP.Browser/6.2.0.14.1.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2767.KDDI W64S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; KDDI-SN3G) Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2768.KDDI W64SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SA3E UP.Browser/6.2_7.2.7.1.K.2.186 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2769.KDDI W64SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; KDDI-SA3E) Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2770.KDDI W64SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SA3E' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2771.KDDI W64SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SA3E UP.Browser/6.2_7.2.7.1.K.2.186 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2772.KDDI W64SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; KDDI-SA3E) Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2773.KDDI W64SA',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SA3E' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2774.KDDI W64SH',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH37 UP.Browser/6.2_7.2.7.1.K.2.214 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2775.KDDI W64SH',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SH37 UP.Browser/6.2_7.2.7.1.K.2.214 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2776.KDDI W65K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC3I UP.Browser/6.2.0.14.1.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2777.KDDI W65K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; KDDI-KC3I) Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2778.KDDI W65K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-KC3I UP.Browser/6.2.0.14.1.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2779.KDDI W65K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; KDDI-KC3I) Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2780.KDDI W65T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3M UP.Browser/6.2_7.2.7.1.K.2.214 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2781.KDDI W65T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3M UP.Browser/6.2_7.2.7.1.K.2.214 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2782.KDDI X-RAY',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3W UP.Browser/6.2_7.2.7.1.K.6.208 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2783.KDDI X-RAY',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3W UP.Browser/6.2_7.2.7.1.K.6.208 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2784.KDDI Xmini',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3H UP.Browser/6.2_7.2.7.1.K.2.221 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2785.KDDI Xmini',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-SN3H UP.Browser/6.2_7.2.7.1.K.2.221 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2786.KDDI-Toshiba W64T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3L UP.Browser/6.2_7.2.7.1.K.2.207 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2787.KDDI-Toshiba W64T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3L UP.Browser/6.2_7.2.7.1.K.2.207 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2788.Kisen K3000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'K3000_WAP2_0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2789.Kisen K3000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'K3000_WAP2_0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2790.Konka D161',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KONKA_D161/KAA161_0.93.C01 Nucleus/1.0 MTK/6219 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2791.Konka D161',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KONKA_D161/KAA161_0.93.C01 Nucleus/1.0 MTK/6219 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2792.Konka D263',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KONKA_D263/KAA263_0.93.C01 Nucleus/1.0 MTK/6226 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2793.Konka D263',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KONKA_D263/KAA263_0.93.C01 Nucleus/1.0 MTK/6226 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2794.Konka D363',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KONKA_D363/KAA363_0.93.822 Nucleus/1.0 MTK/6228 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2795.Konka D363',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KONKA_D363/KAA363_0.93.822 Nucleus/1.0 MTK/6228 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2796.Konka M526',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KONKA_M526_CMCC/KCEM526.CMCC.2.01.704 MTK/6225 Release/7.4.2007 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2797.Konka M526',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KONKA_M526_CMCC/KCEM526.CMCC.2.01.704 MTK/6225 Release/7.4.2007 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2798.KT Tech EV-S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ko-kr; EV-S100 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2799.KT Tech EV-S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ko-kr; EV-S100 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2800.Kyocera C4700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KyoceraC4700/Obigo/Q7 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2801.Kyocera C4700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KyoceraC4700/Obigo/Q7 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2802.Kyocera E1000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-E1000/1.0.12 UP.Browser/7.2.6.1.537 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2803.Kyocera E1000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'kyoe1000/1.0.09 UP.Browser/7.2.6.1.475 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2804.Kyocera E1000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-E1000/1.0.12 UP.Browser/7.2.6.1.537 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2805.Kyocera E1000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'kyoe1000/1.0.09 UP.Browser/7.2.6.1.475 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2806.Kyocera E4000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) /Kyocera-E4000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2807.Kyocera E4000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) /Kyocera-E4000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2808.Kyocera K127 (Marbl)',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-K127' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2809.Kyocera K127 (Marbl)',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-K127/1002 UP.Browser/6.2.3.9.g.1.110 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2810.Kyocera K127 (Marbl)',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-K127' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2811.Kyocera K127 (Marbl)',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-K127/1002 UP.Browser/6.2.3.9.g.1.110 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2812.Kyocera K38',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'K38/10012 UP.Browser/7.2.7.2.505 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2813.Kyocera K38',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'K38/10012 UP.Browser/7.2.7.2.505 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2814.Kyocera KWC-E1000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'E1000-JV/1.0.09 UP.Browser/7.2.6.1.475 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2815.Kyocera KWC-E1000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'E1000-JV/1.0.09 UP.Browser/7.2.6.1.475 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2816.Kyocera KWC-Glide',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-Glide/ABJ0305 UP.Browser/7.2.7.2.536 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2817.Kyocera KWC-Glide',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-Glide/ABJ0305 UP.Browser/7.2.7.2.536 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2818.Kyocera KX5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-KX5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2819.Kyocera KX5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-KX5/1.0.21 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2820.Kyocera KX5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-KX5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2821.Kyocera KX5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-KX5/1.0.21 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2822.Kyocera M1400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-M1400/AAZ10043 UP.Browser/7.2.7.2.536 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2823.Kyocera M1400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-laylo/AAR1004 UP.Browser/7.2.7.2.531 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2824.Kyocera M1400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'M1400/AAR1004 UP.Browser/7.2.7.2.531 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2825.Kyocera M1400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-M1400/AAZ10043 UP.Browser/7.2.7.2.536 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2826.Kyocera M1400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-laylo/AAR1004 UP.Browser/7.2.7.2.531 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2827.Kyocera M1400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'M1400/AAR1004 UP.Browser/7.2.7.2.531 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2828.Kyocera M2000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-M2000/AAN1002 UP.Browser/7.2.7.2.530 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2829.Kyocera M2000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'M2000-ZQ/ZQ1000 UP.Browser/7.2.7.2.531 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2830.Kyocera M2000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-M2000/AAN1002 UP.Browser/7.2.7.2.530 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2831.Kyocera M2000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'M2000-ZQ/ZQ1000 UP.Browser/7.2.7.2.531 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2832.Kyocera M6000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Zio Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2833.Kyocera M6000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; M6000 Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2834.Kyocera M6000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Zio Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2835.Kyocera M6000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; M6000 Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2836.Kyocera S2000i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC/1004 UP.Browser/7.2.6.1.714 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2837.Kyocera S2000i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC/1004 UP.Browser/7.2.6.1.714 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2838.Kyocera S2300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-S2300/ABR1001 UP.Browser/7.2.7.2.551 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2839.Kyocera S2300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-Torino/ UP.Browser/7.2.7.2.561 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2840.Kyocera S2300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-S2300/ABR1001 UP.Browser/7.2.7.2.551 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2841.Kyocera S2300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'KWC-Torino/ UP.Browser/7.2.7.2.561 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2842.Kyocera Vodafone 736',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone736/B710 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2843.Kyocera Vodafone 736',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone736/B710 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2844.Kyocera WX330K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/3.0(WILLCOM;KYOCERA/WX330K/2;2.0.8.28.000000/0.1/C100) Opera 7.2 EX' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2845.Kyocera WX330K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/3.0(WILLCOM;KYOCERA/WX330K/2;2.0.8.28.000000/0.1/C100) Opera 7.2 EX' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2846.LCT L310B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LCT_L310B_01/LBP0001/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2847.LCT L310B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LCT_L310B_01/LBP0001/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2848.LCT TV320B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LCT_TV320B_01/LBNM401A/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2849.LCT TV320B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LCT_TV320B_01/LBNM401A/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2850.LCT X700B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LCT_X700B_01/LBFM401A/WAP2.0Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2851.LCT X700B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LCT_X700B_01/LBFM401A/WAP2.0Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2852.Lemon IQ 707',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LEMON IQ707' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2853.Lemon IQ 707',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LEMON IQ707' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2854.Lenovo 3GW100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; zh-cn; 3GW100 Build/GRZ03) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2855.Lenovo 3GW100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; zh-cn; 3GW100 Build/GRZ03) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2856.Lenovo A689',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo_A689/(2008.12.15)S012/WAP2.0Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2857.Lenovo A689',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo_A689/(2008.12.15)S012/WAP2.0Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2858.Lenovo E228',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo-E228/CMCC BMP/F2 Release/2008.09.10 Browser/TelecaQ03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2859.Lenovo E228',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo-E228/CMCC BMP/F2 Release/2008.09.10 Browser/TelecaQ03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2860.Lenovo ET600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo_ET600/Lenovo WindowsMobile/6 Release/4.22.2007 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2861.Lenovo ET600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo_ET600/Lenovo WindowsMobile/6 Release/4.22.2007 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2862.Lenovo ET860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo_ET860/Lenovo WindowsMobile/6 Release/4.22.2007 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2863.Lenovo ET860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo_ET860/Lenovo WindowsMobile/6 Release/4.22.2007 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2864.Lenovo i817',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo-i817/CMCC_S114 LMP/XM Release/2007.07.31 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2865.Lenovo i817',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo-i817/CMCC_S114 LMP/XM Release/2007.07.31 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2866.Lenovo i909',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo-i909/S141 Release/2007.11.28 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2867.Lenovo i909',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo-i909/S141 Release/2007.11.28 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2868.Lenovo OMS Android',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; OMS1_5 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2869.Lenovo OMS Android',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; OMS1_5 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2870.Lenovo P709',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LENOVO-P709/S100 NXP5210/DV7 Release/4.25.2007 Obigo/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2871.Lenovo P709',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LENOVO-P709/S100 NXP5210/DV7 Release/4.25.2007 Obigo/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2872.Lenovo P768',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LENOVO-P768/(070228)S038/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2873.Lenovo P768',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LENOVO-P768/(070228)S038/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2874.Lenovo P790',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo-P790/2008.04.30' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2875.Lenovo P790',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Lenovo-P790/2008.04.30' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2876.Lenovo P960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LENOVO-P960' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2877.Lenovo P960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LENOVO-P960' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2878.Lenovo V528',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LENOVO-V528/A7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2879.Lenovo V528',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LENOVO-V528/A7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2880.Lexus 828B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': '828B/KAA263_0.93.C01 Nucleus/1.0 MTK/6226 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0 828B/KAA263_0.93.C01 Nucleus/1.0 MTK/6226 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2881.Lexus 828B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': '828B/KAA263_0.93.C01 Nucleus/1.0 MTK/6226 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0 828B/KAA263_0.93.C01 Nucleus/1.0 MTK/6226 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2882.LG 10000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG10000/1.0 TELECA/Q05A1-3.8 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2883.LG 10000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG10000/1.0 TELECA/Q05A1-3.8 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2884.LG 145PRE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG145PRE AU-MIC-LG145PRE/1.0 MMP/2.0 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2885.LG 145PRE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG145PRE AU-MIC-LG145PRE/1.0 MMP/2.0 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2886.LG 225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG225 UP.Browser/6.2.3 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2887.LG 225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG225 UP.Browser/6.2.3 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2888.LG 265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG265 POLARIS/6.01 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2889.LG 265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG265/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2890.LG 265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG265-parrot/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2891.LG 265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG265/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2892.LG 265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG265 POLARIS/6.01 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2893.LG 265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG265/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2894.LG 265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG265-parrot/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2895.LG 265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG265/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2896.LG 280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG280 AU-OBIGO/Q05A1-3.12 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2897.LG 280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG280 AU-OBIGO/Q05A1-3.12 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2898.LG 290C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG290C/1.0[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2899.LG 290C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG290C/1.0[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2900.LG 550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG550 AU-OBIGO/Q04C1-1.22 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2901.LG 550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG550 AU-OBIGO/Q04C1-1.22 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2902.LG 8575',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Polaris 6.2; BREW 3.1.5; U; en)/240X400 LGE VX8575' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2903.LG 8575',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(compatible; Polaris 6.2; Brew 3.1.5; U; en) 240X400 LGE LG-AX8575' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2904.LG 8575',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Polaris 6.2; BREW 3.1.5; U; en)/240X400 LGE VX8575' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2905.LG 8575',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(compatible; Polaris 6.2; Brew 3.1.5; U; en) 240X400 LGE LG-AX8575' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2906.LG 8600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG8600/1.1 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2907.LG 8600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG8600/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2908.LG 8600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG8600/1.1 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2909.LG 8600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG8600/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2910.LG 9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG9100/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2911.LG 9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG9100-parrot/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2912.LG 9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG9100/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2913.LG 9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG9100-parrot/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2914.LG A130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A130/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2915.LG A130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A130/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2916.LG A133',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A133/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2917.LG A133',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A133/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2918.LG A155',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A155/V100 Obigo/Q05A MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2919.LG A155',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A155/V100 Obigo/Q05A MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2920.LG A165',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A165/V100 Obigo/Q05A MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2921.LG A165',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A165/V100 Obigo/Q05A MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2922.LG AD6335',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-AD6335/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2923.LG AD6335',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-AD6335/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2924.LG Ally',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Ally Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2925.LG Ally',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Ally Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2926.LG Aloha',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; aloha) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2927.LG Aloha',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; aloha) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2928.LG AX310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-AX310/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2929.LG AX310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-AX310/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2930.LG AX390',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-AX390/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2931.LG AX390',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-AX390/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2932.LG AX585',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-AX585/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2933.LG AX585',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-AX585/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2934.LG AX840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 240X400 LGE AX840' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2935.LG AX840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 240X400 LGE AX840' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2936.LG B2250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-B2250 MIC/WAP2.0 MIDP-2.0/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2937.LG B2250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-B2250 MIC/WAP2.0 MIDP-2.0/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2938.LG BL20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-BL20/V10b Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2939.LG BL20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-BL20/v10a Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2940.LG BL20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/BL20/R1 Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2941.LG BL20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-BL20/V10b Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2942.LG BL20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-BL20/v10a Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2943.LG BL20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/BL20/R1 Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2944.LG BL40',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/BL40/V09b Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2945.LG BL40',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-BL40/V08m Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2946.LG BL40',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-BL40-Orange/V10b Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2947.LG BL40',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-BL40/V10b Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2948.LG BL40',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/BL40/V09b Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2949.LG BL40',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-BL40/V08m Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2950.LG BL40',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-BL40-Orange/V10b Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2951.LG BL40',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-BL40/V10b Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2952.LG BL42K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-BL42k/v10b1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2953.LG BL42K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-BL42k/v10b1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2954.LG C2600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C2600 MIC/WAP2.0 MIDP-2.0/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2955.LG C2600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C2600 MIC/WAP2.0 MIDP-2.0/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2956.LG C300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C300/V09a Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2957.LG C300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C300/V09a Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2958.LG C330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-C330/V10a AppleWebkit/531 Browser/Phantom/V2.0 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2959.LG C330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-C330/V10a AppleWebkit/531 Browser/Phantom/V2.0 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2960.LG C530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C530/ITUS10062008 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2961.LG C530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C530/ITUS10062008 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2962.LG C555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; LG-C555 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2963.LG C555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-ca; LG-C555-parrot Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2964.LG C555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-ca; LG-C555-scorpion Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2965.LG C555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; LG-C555 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2966.LG C555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-ca; LG-C555-parrot Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2967.LG C555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-ca; LG-C555-scorpion Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2968.LG C710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; LG-C710; Build/Eclair) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2969.LG C710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; LG-C710; Build/Eclair) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2970.LG C710h',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; LG-C710h Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2971.LG C710h',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; LG-C710h Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2972.LG C900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; LG-C900)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2973.LG C900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; LG-C900B)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2974.LG C900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; LG-C900)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2975.LG C900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; LG-C900B)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2976.LG C900B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; LG-C900b)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2977.LG C900B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; LG-C900b)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2978.LG C900k',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; LG-C900k)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2979.LG C900k',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; LG-C900k)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2980.LG CB630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CB630/V10c Obigo/Q05A Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2981.LG CB630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CB630/V10c Obigo/Q05A Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2982.LG CE110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CE110/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2983.LG CE110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CE110/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2984.LG CF360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CF360/V10d Teleca/Q7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2985.LG CF360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CF360/V10d Teleca/Q7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2986.LG CT810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CT810/V08e IEMobile/7.11 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2987.LG CT810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CT810/V08e IEMobile/7.11 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2988.LG CU515',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU515/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2989.LG CU515',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU515/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2990.LG CU575',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU575/V10d Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2991.LG CU575',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU575/V10d Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2992.LG CU720',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU720/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2993.LG CU720',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU720/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2994.LG CU915',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU915/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2995.LG CU915',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU915/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2996.LG CU920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU920/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2997.LG CU920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU920/V1.0p Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2998.LG CU920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU920/V1.0s Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('2999.LG CU920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU920/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3000.LG CU920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU920/V1.0p Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3001.LG CU920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-CU920/V1.0s Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3002.LG CX10000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (compatible; Teleca/Q05A/GS-CX10000)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3003.LG CX10000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (compatible; Teleca/Q05A/GS-CX10000)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3004.LG CX700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (compatible; Teleca/Q07/GS-CX700)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3005.LG CX700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (compatible; Teleca/Q07/GS-CX700)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3006.LG E720',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; LG-E720 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3007.LG E720',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; LG-E720 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3008.LG E900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; LG-E900)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3009.LG E900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) LG;LG-E900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3010.LG E900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; LG-E900)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3011.LG E900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) LG;LG-E900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3012.LG G282',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-G282 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3013.LG G282',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-G282 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3014.LG GB190',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB190 Obigo/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3015.LG GB190',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB190 Obigo/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3016.LG GB210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB210 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3017.LG GB210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB210 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3018.LG GB220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB220/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3019.LG GB220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB220/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3020.LG GB230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB230/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3021.LG GB230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB230/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3022.LG GB250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB250/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3023.LG GB250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB250/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3024.LG GB255',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB255/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3025.LG GB255',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB255/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3026.LG GB270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB270 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3027.LG GB270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB270 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3028.LG GC-900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GC900-orange/V10g Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3029.LG GC-900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GC900F/V10b Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3030.LG GC-900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GC900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3031.LG GC-900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GC900/V10b Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3032.LG GC-900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GC900-orange/V10g Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3033.LG GC-900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GC900F/V10b Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3034.LG GC-900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GC900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3035.LG GC-900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GC900/V10b Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3036.LG GC900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GC900/V10a Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3037.LG GC900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GC900/V10a Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3038.LG GD330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD330/V100 Obigo/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3039.LG GD330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD330/V100 Obigo/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3040.LG GD510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD510/V100 Teleca/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3041.LG GD510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD510-Orange/V10a Teleca/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3042.LG GD510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD510/V100 Teleca/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3043.LG GD510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD510-Orange/V10a Teleca/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3044.LG GD570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD570 Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3045.LG GD570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD570 Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3046.LG GD710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD710' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3047.LG GD710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD710/V08d; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.14315; U; en) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3048.LG GD710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD710' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3049.LG GD710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD710/V08d; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.14315; U; en) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3050.LG GD880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (LG/GD880 Browser/AppleWebKit/531 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3051.LG GD880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GD880/V10e Browser/AppleWebKit/531 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3052.LG GD880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (LG-GD880/V10b Browser/AppleWebKit/531 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3053.LG GD880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (LG/GD880 Browser/AppleWebKit/531 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3054.LG GD880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GD880/V10e Browser/AppleWebKit/531 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3055.LG GD880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (LG-GD880/V10b Browser/AppleWebKit/531 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3056.LG GD900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD900 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3057.LG GD900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD900 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3058.LG GM200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM200 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3059.LG GM200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM200 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3060.LG GM205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM205 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3061.LG GM205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM205 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3062.LG GM210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM210/V100 Obigo/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3063.LG GM210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM210/V100 Obigo/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3064.LG GM310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM310/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3065.LG GM310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM310/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3066.LG GM360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM360/V10a Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3067.LG GM360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM360/V10a Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3068.LG GM370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM730F/IEMobile/v6.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3069.LG GM370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM730F/IEMobile/v6.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3070.LG GM730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM730/v10a WM/6.1 IEMobile/6.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3071.LG GM730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GM730/v10a WM/6.1 IEMobile/6.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3072.LG GM750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 Vodafone/1.0/LG-GM750/V10a Browser/IE8.12 MMS/LGMMSv1.0/1.2 Java/LGVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3073.LG GM750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 Vodafone/1.0/LG-GM750/V10a Browser/IE8.12 MMS/LGMMSv1.0/1.2 Java/LGVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3074.LG GR500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GR500/V10f Teleca/Q7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3075.LG GR500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GR500FD/V10a Teleca/Q7.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3076.LG GR500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GR500/V10f Teleca/Q7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3077.LG GR500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GR500FD/V10a Teleca/Q7.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3078.LG GR500R',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GR500R/V10a Teleca/Q7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3079.LG GR500R',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GR500R/V10a Teleca/Q7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3080.LG GR501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GR501/V10c Obigo/Q7.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3081.LG GR501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GR501/V10c Obigo/Q7.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3082.LG GR700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GR700/V10g; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.15814; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3083.LG GR700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GR700/V10g; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.15814; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3084.LG GS170',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS170 Browser/Obigo-Q7.0 MMS/LG-MMS-V1.0/1.2 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3085.LG GS170',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS170 Browser/Obigo-Q7.0 MMS/LG-MMS-V1.0/1.2 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3086.LG GS290',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS290/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3087.LG GS290',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS290/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3088.LG GS390',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS390/V10k Obigo/Q7.3 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3089.LG GS390',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS390/V10k Obigo/Q7.3 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3090.LG GS500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS500/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3091.LG GS500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS500/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3092.LG GS505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS505 Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Profile/MIDP-2.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3093.LG GS505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS505 Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Profile/MIDP-2.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3094.LG GT360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT360 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3095.LG GT360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT360/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3096.LG GT360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT360 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3097.LG GT360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT360/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3098.LG GT400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GT400/V10e Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/V1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3099.LG GT400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT400-Bouygues/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3100.LG GT400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT400/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3101.LG GT400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GT400/V10e Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/V1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3102.LG GT400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT400-Bouygues/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3103.LG GT400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT400/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3104.LG GT405',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT405/V10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3105.LG GT405',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT405-Orange/V10d Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3106.LG GT405',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT405/V10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3107.LG GT405',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT405-Orange/V10d Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3108.LG GT500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/GT500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3109.LG GT500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/GT500-Bouygues/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3110.LG GT500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT500-v10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3111.LG GT500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT500-v10f Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3112.LG GT500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/GT500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3113.LG GT500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/GT500-Bouygues/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3114.LG GT500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT500-v10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3115.LG GT500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT500-v10f Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3116.LG GT505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GT505/V10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3117.LG GT505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT505-Orange/V10c Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3118.LG GT505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/GT505/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3119.LG GT505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT505/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3120.LG GT505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GT505/V10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3121.LG GT505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT505-Orange/V10c Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3122.LG GT505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/GT505/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3123.LG GT505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT505/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3124.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-co; GT540 Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3125.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; LG-GT540; Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3126.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT540-orange Mozilla/5.0 (Linux; U; Android 1.6; en-us; LG-GT540; Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3127.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT540 Mozilla/5.0 (Linux; U; Android 1.6; en-us; LG-GT540; Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3128.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; LG-GT540; Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3129.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; LG-GT540 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3130.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-co; GT540 Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3131.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; LG-GT540; Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3132.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT540-orange Mozilla/5.0 (Linux; U; Android 1.6; en-us; LG-GT540; Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3133.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT540 Mozilla/5.0 (Linux; U; Android 1.6; en-us; LG-GT540; Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3134.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; LG-GT540; Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3135.LG GT540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; LG-GT540 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3136.LG GT810H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT810H Netfront/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3137.LG GT810H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT810H Netfront/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3138.LG GT950',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT950' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3139.LG GT950',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT950/V09a Obigo/Q7.3 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3140.LG GT950',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT950' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3141.LG GT950',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT950/V09a Obigo/Q7.3 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3142.LG GU220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU220/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3143.LG GU220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU220/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3144.LG GU230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU230/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3145.LG GU230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU230/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3146.LG GU280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU280/v09a Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3147.LG GU280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU280/v09a Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3148.LG GU282',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU282 Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3149.LG GU282',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU282 Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3150.LG GU285',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU285/v10a Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3151.LG GU285',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU285/v10a Browser/Obigo-Q7.3 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3152.LG GU295',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU295/V08l Teleca/Q7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3153.LG GU295',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU295/V08l;Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.15957; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3154.LG GU295',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU295/V08l Teleca/Q7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3155.LG GU295',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GU295/V08l;Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.15957; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3156.LG GW300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW300 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3157.LG GW300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW300/V100 Teleca/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3158.LG GW300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW300 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3159.LG GW300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW300/V100 Teleca/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3160.LG GW520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW520/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3161.LG GW520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GW520/V10c Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3162.LG GW520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW520-orange/V10c Teleca/WAP2.0 MIDP-2.1/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3163.LG GW520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW520-H3G/V10f Teleca/WAP2.0 MIDP-2.1/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3164.LG GW520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW520-H3G/V09b Teleca/WAP2.0 MIDP-2.1/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3165.LG GW520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW520/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3166.LG GW520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-GW520/V10c Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3167.LG GW520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW520-orange/V10c Teleca/WAP2.0 MIDP-2.1/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3168.LG GW520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW520-H3G/V10f Teleca/WAP2.0 MIDP-2.1/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3169.LG GW520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW520-H3G/V09b Teleca/WAP2.0 MIDP-2.1/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3170.LG GW525',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW525/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3171.LG GW525',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW525 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1 UP.Link/6.5.0.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3172.LG GW525',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW525/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3173.LG GW525',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW525 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1 UP.Link/6.5.0.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3174.LG GW550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) LG-GW550 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3175.LG GW550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) LG-GW550 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3176.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; LG Eve) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3177.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW620 Mozilla/5.0 (Linux; U; Android 1.5) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3178.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-ca; LG GW620R Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3179.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; LG GW620 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3180.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-; EVE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3181.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; LG Eve-Orange) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3182.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; LG Eve) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3183.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW620 Mozilla/5.0 (Linux; U; Android 1.5) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3184.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-ca; LG GW620R Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3185.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; LG GW620 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3186.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-; EVE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3187.LG GW620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; LG Eve-Orange) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 Java/Jbed/7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3188.LG GW620F',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; pt-br; LG GW620F Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3189.LG GW620F',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; pt-br; LG GW620F Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3190.LG GW820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW820' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3191.LG GW820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW820/V06q IEMobile/8.12 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3192.LG GW820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW820' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3193.LG GW820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW820/V06q IEMobile/8.12 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3194.LG GW825',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW825/V10b IEMobile/8.12 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3195.LG GW825',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW825/V10b IEMobile/8.12 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3196.LG GW910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) LGE;GW910' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3197.LG GW910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; GW910)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3198.LG GW910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) LGE;GW910' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3199.LG GW910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; GW910)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3200.LG GX200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GX200 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3201.LG GX200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GX200 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3202.LG HB620T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-HB620T/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3203.LG HB620T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/HB620T/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3204.LG HB620T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-HB620T/V10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3205.LG HB620T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-HB620T/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3206.LG HB620T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/HB620T/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3207.LG HB620T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-HB620T/V10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3208.LG KB620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KB620/v1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3209.LG KB620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KB620/v1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3210.LG KB770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KB770/v08b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3211.LG KB770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KB770/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3212.LG KB770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KB770/v10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3213.LG KB770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KB770/v10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3214.LG KB770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KB770/v08b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3215.LG KB770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KB770/v10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3216.LG KB770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KB770/v10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3217.LG KB770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KB770/v10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3218.LG KB775F',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KB775F Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3219.LG KB775F',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KB775F Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3220.LG KC550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC550 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3221.LG KC550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC550 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3222.LG KC560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC560 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3223.LG KC560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC560 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3224.LG KC780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC780 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3225.LG KC780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC780 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3226.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KC910/V08h Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3227.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KC910/V10a Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3228.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910-Orange/V10c Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3229.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910-v10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3230.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910Qa Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3231.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910/V10a Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3232.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910-v10e Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3233.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910Q Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3234.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KC910/V10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3235.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KC910/V10d Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3236.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KC910/V10g Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3237.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KC910e/V10c Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3238.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KC910/V08h Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3239.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KC910/V10a Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3240.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910-Orange/V10c Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3241.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910-v10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3242.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910Qa Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3243.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910/V10a Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3244.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910-v10e Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3245.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KC910Q Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3246.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KC910/V10b Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3247.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KC910/V10d Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3248.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KC910/V10g Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3249.LG KC910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KC910e/V10c Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3250.LG KC910i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KC910i/V10a Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3251.LG KC910i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KC910i/V10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3252.LG KC910i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KC910i/V10a Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3253.LG KC910i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KC910i/V10a Browser/Teleca-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3254.LG KD876',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KD876/v1.0 Arena/L2.3.3 Release/5.2.2008 Browser/Teleca/QLine Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3255.LG KD876',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KD876/v1.0 Arena/L2.3.3 Release/5.2.2008 Browser/Teleca/QLine Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3256.LG KE520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE520' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3257.LG KE520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE520/V10g Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3258.LG KE520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE520' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3259.LG KE520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE520/V10g Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3260.LG KE600E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE600E MIC/1.1.14 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3261.LG KE600E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE600E MIC/1.1.14 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3262.LG KE850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE850' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3263.LG KE850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE850 MIC/1.1.14 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3264.LG KE850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE850' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3265.LG KE850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE850 MIC/1.1.14 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3266.LG KE990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE990/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3267.LG KE990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KE990d/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3268.LG KE990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE990 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3269.LG KE990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KE990/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3270.LG KE990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE990/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3271.LG KE990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KE990d/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3272.LG KE990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE990 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3273.LG KE990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KE990/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3274.LG KE990c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KE990c/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3275.LG KE990c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KE990c/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3276.LG KE998',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE998' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3277.LG KE998',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KE998' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3278.LG KF240',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF240 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3279.LG KF240',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF240 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3280.LG KF245',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF245 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3281.LG KF245',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF245 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3282.LG KF300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF300 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3283.LG KF300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF300 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3284.LG KF310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KF310/V10c Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3285.LG KF310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF310/v1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3286.LG KF310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF310/V10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3287.LG KF310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KF310/V10b Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3288.LG KF310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF310-Orange/V10b Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3289.LG KF310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KF310/V10c Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3290.LG KF310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF310/v1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3291.LG KF310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF310/V10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3292.LG KF310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KF310/V10b Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3293.LG KF310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF310-Orange/V10b Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3294.LG KF311',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF311/V10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3295.LG KF311',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF311/V10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3296.LG KF350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF350 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3297.LG KF350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF350 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3298.LG KF390',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF390 Teleca/Q05A-3.12 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3299.LG KF390',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF390 Teleca/Q05A-3.12 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3300.LG KF690',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF690/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3301.LG KF690',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF690/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3302.LG KF700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3303.LG KF700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF700/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3304.LG KF700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF700-Orange/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3305.LG KF700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF700-O2/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3306.LG KF700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF700/v1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3307.LG KF700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3308.LG KF700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF700/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3309.LG KF700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF700-Orange/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3310.LG KF700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF700-O2/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3311.LG KF700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF700/v1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3312.LG KF700C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF700C Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3313.LG KF700C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF700C Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3314.LG KF750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KF750/V10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3315.LG KF750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KF750/V10b Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3316.LG KF750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF750/v10a Browser/Obigo-Q05A/3.11 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3317.LG KF750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF750/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3318.LG KF750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF750-Orange/v10c Browser/Obigo-Q05A/3.12MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3319.LG KF750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KF750/V10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3320.LG KF750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KF750/V10b Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3321.LG KF750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF750/v10a Browser/Obigo-Q05A/3.11 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3322.LG KF750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF750/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3323.LG KF750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF750-Orange/v10c Browser/Obigo-Q05A/3.12MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3324.LG KF755',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF755/v1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3325.LG KF755',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KF755/v1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3326.LG KF757',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF757-Orange/v10c Browser/Obigo-Q05A/3.12MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3327.LG KF757',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF757-Orange/v10c Browser/Obigo-Q05A/3.12MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3328.LG KF900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF900/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3329.LG KF900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF900 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3330.LG KF900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF900/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3331.LG KF900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF900 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3332.LG KG225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG225' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3333.LG KG225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG225 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3334.LG KG225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG225' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3335.LG KG225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG225 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3336.LG KG290UAE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG290UAE Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3337.LG KG290UAE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG290UAE Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3338.LG KG296',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG296 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3339.LG KG296',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG296 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3340.LG KG300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG300/V01 Obigo/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3341.LG KG300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG300/V01 Obigo/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3342.LG KG300j',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG300j/V01 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3343.LG KG300j',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG300j/V01 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3344.LG KG810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG810 UP.Browser/6.2.3 (GUI) MMP/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3345.LG KG810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG810 UP.Browser/6.2.3 (GUI) MMP/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3346.LG KG90',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG90 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3347.LG KG90',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG90 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3348.LG KH5200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; ko-kr; LG KH5200 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3349.LG KH5200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; ko-kr; LG KH5200 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3350.LG KM330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM330 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3351.LG KM330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM330 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3352.LG KM335',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM335 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3353.LG KM335',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM335 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3354.LG KM380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM380 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3355.LG KM380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM380 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3356.LG KM500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM500 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3357.LG KM500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM500 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3358.LG KM555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM555/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3359.LG KM555',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM555/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3360.LG KM570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM570/V10b Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3361.LG KM570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM570/V10b Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3362.LG KM710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM710 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3363.LG KM710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM710c Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3364.LG KM710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM710 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3365.LG KM710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM710c Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3366.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3367.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KM900/V10j Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3368.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900-orange/V10j Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3369.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KM900/V10l Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3370.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KM900/V10v Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3371.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900/V10g Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3372.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3373.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KM900/V10j Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3374.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900-orange/V10j Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3375.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KM900/V10l Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3376.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-KM900/V10v Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3377.LG KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900/V10g Browser/Obigo-Q7.1 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3378.LG KP110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP110 Obigo/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3379.LG KP110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP110 Obigo/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3380.LG KP15xQ',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP15xQ Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3381.LG KP15xQ',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP15xQ Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3382.LG KP170',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP170-orange/V09a Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3383.LG KP170',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP170 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3384.LG KP170',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP170-orange/V09a Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3385.LG KP170',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP170 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3386.LG KP175',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP175 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3387.LG KP175',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP175 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3388.LG KP210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP210 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3389.LG KP210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP210 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3390.LG KP215',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP215 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3391.LG KP215',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP215 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3392.LG KP220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP220/V01 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3393.LG KP220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP220/V01 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3394.LG KP233',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP233/V10a Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3395.LG KP233',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP233/V10a Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3396.LG KP235',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP235 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3397.LG KP235',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP235-orange/V10b Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3398.LG KP235',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP235 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3399.LG KP235',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP235-orange/V10b Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3400.LG KP260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP260-orange/V10a Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3401.LG KP260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP260 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3402.LG KP260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP260-orange/V10a Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3403.LG KP260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP260 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3404.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270-V10a Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3405.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270/V10d Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3406.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270/V10e Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3407.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3408.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270/V10f Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3409.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270V/V10g Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3410.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270/V10g Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3411.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270-V10a Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3412.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270/V10d Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3413.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270/V10e Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3414.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3415.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270/V10f Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3416.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270V/V10g Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3417.LG KP270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP270/V10g Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3418.LG KP320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP320 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3419.LG KP320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP320 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3420.LG KP330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KP330/v1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3421.LG KP330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KP330/v1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3422.LG KP500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP500 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3423.LG KP500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP500-Orange/V10g Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3424.LG KP500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KP500/V10b/Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3425.LG KP500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP500 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3426.LG KP500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP500-Orange/V10g Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3427.LG KP500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KP500/V10b/Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3428.LG KP501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGKP501/v1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3429.LG KP501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP501 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3430.LG KP501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGKP501/v1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3431.LG KP501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP501 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3432.LG KP502',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP502 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3433.LG KP502',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP502-V10b Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3434.LG KP502',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP502 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3435.LG KP502',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP502-V10b Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3436.LG KP505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP505 Teleca/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3437.LG KP505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP505 Teleca/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3438.LG KP550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP550-Bouygues/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3439.LG KP550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP550-Bouygues/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3440.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-KS20-Orange' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3441.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-KS20-Orange/V1.0 Browser/IEMobile/7.6 MMS/LG-MMS-WINCE-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3442.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/LG-KS20/V10b Browser/IEMobile/7.6 MMS/LG-MMS-WINCE-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3443.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-KS20/V10a Browser/IEMobile/7.6 MMS/LG-MMS-WINCE-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3444.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-KS20/TIM/V10b Browser/IEMobile/7.6 MMS/LG-MMS-WINCE-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3445.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/LG-KS20/V10b Browser/IEMobile/7.6 MMS/LG-MMS-WINCE-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3446.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-KS20-Orange' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3447.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-KS20-Orange/V1.0 Browser/IEMobile/7.6 MMS/LG-MMS-WINCE-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3448.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/LG-KS20/V10b Browser/IEMobile/7.6 MMS/LG-MMS-WINCE-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3449.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-KS20/V10a Browser/IEMobile/7.6 MMS/LG-MMS-WINCE-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3450.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-KS20/TIM/V10b Browser/IEMobile/7.6 MMS/LG-MMS-WINCE-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3451.LG KS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/LG-KS20/V10b Browser/IEMobile/7.6 MMS/LG-MMS-WINCE-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3452.LG KS360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS360' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3453.LG KS360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS360-Orange/V10d Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3454.LG KS360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS360 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3455.LG KS360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS360-Orange/V10g Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3456.LG KS360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS360/V10a Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3457.LG KS360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS360' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3458.LG KS360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS360-Orange/V10d Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3459.LG KS360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS360 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3460.LG KS360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS360-Orange/V10g Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3461.LG KS360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS360/V10a Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3462.LG KS500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KS500/V08b Browser/Teleca-Q7.1/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3463.LG KS500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KS500/V10b Browser/Teleca-Q7.1/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3464.LG KS500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KS500/V08b Browser/Teleca-Q7.1/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3465.LG KS500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Vodafone/1.0/LG-KS500/V10b Browser/Teleca-Q7.1/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3466.LG KS500Q',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KS500Q/v10a Browser/Teleca-Q7.1/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3467.LG KS500Q',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KS500Q/v10a Browser/Teleca-Q7.1/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3468.LG KS660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS660 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3469.LG KS660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS660 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3470.LG KT520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KT520/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3471.LG KT520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KT525/v1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3472.LG KT520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KT520/v10a Browser/Obigo-Q05A/3.11 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3473.LG KT520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KT520/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3474.LG KT520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KT525/v1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3475.LG KT520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KT520/v10a Browser/Obigo-Q05A/3.11 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3476.LG KT610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 LGKT610/v10A; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML; like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3477.LG KT610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 LGKT610/v10A; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML; like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3478.LG kt615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 LGKT615/v10C; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3479.LG kt615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 LGKT615/v10C; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3480.LG KT770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 LG-KT770/v08Y; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3481.LG KT770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 LG-KT770/v08Y; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3482.LG KU3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ko-kr; LG-KU3700 Build/FRF91) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3483.LG KU3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ko-kr; LG-KU3700 Build/FRF91) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3484.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3485.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU380/v10a Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3486.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU380/V10a' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3487.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGKU380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3488.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU380/v1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3489.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3490.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU830/v1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3491.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU380/v10b Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3492.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU380/v1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3493.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3494.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU380/v10a Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3495.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU380/V10a' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3496.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGKU380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3497.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU380/v1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3498.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3499.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU830/v1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3500.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU380/v10b Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3501.LG KU380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU380/v1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3502.LG KU385',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU385' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3503.LG KU385',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU385' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3504.LG KU450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU450/v10a Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3505.LG KU450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU450/v10a Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3506.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU580 Browser/Obigo-Q05A1/2.16 MMS/LG-MMS-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-V-Profile/VSCL-2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3507.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU580' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3508.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU580-Orange/v10a Browser/Obigo-Q05A1/2.16 MMS/LG-MMS-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3509.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU580-Orange' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3510.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU580/V10a Browser/Obigo-Q05A1/2.16 MMS/LG-MMS-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-V-Profile/VSCL-2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3511.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU580/V10a Browser/Obigo-Q05A1/2.16 MMS/LG-MMS-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-V-Profile/VSCL-2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3512.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU580 Browser/Obigo-Q05A1/2.16 MMS/LG-MMS-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-V-Profile/VSCL-2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3513.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU580' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3514.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU580-Orange/v10a Browser/Obigo-Q05A1/2.16 MMS/LG-MMS-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3515.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU580-Orange' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3516.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU580/V10a Browser/Obigo-Q05A1/2.16 MMS/LG-MMS-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-V-Profile/VSCL-2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3517.LG KU580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU580/V10a Browser/Obigo-Q05A1/2.16 MMS/LG-MMS-V1.0/1.2 Java/LGVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-V-Profile/VSCL-2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3518.LG KU950',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU950/v1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3519.LG KU950',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU950/v1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3520.LG KU9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; kr-; KU9500 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3521.LG KU9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; kr-; KU9500 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3522.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU990' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3523.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU990/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3524.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU990/V10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3525.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU990-Orange/v10c Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3526.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU990/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3527.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU990/V10i Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3528.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU990/V10g Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3529.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU990/V10c Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3530.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU990' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3531.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU990/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3532.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU990/V10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3533.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU990-Orange/v10c Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3534.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KU990/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3535.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU990/V10i Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3536.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU990/V10g Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3537.LG KU990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU990/V10c Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3538.LG KU990i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU990i/V10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3539.LG KU990i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU990i/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3540.LG KU990i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU990i/V10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3541.LG KU990i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/KU990i/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3542.LG KX208',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG208 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3543.LG KX208',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KG208 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3544.LG LG 5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG5500/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3545.LG LG 5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG5500/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3546.LG LG KP199',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP199 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3547.LG LG KP199',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP199 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3548.LG LG-A200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A200/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3549.LG LG-A200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A200/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3550.LG LG-A250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A250/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3551.LG LG-A250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-A250/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3552.LG LG-C100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C100/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3553.LG LG-C100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C100/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3554.LG LG-C105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C105/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3555.LG LG-C105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C105/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3556.LG LG-C305',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C305/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3557.LG LG-C305',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C305/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3558.LG LG-C360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (LG-C360 AppleWebkit/531 Browser/Phantom/V2.0 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3559.LG LG-C360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (LG-C360 AppleWebkit/531 Browser/Phantom/V2.0 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3560.LG LG-GB280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB280/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3561.LG LG-GB280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GB280/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3562.LG LG-GD350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD350/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3563.LG LG-GD350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GD350/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3564.LG LG-GS205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS205 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3565.LG LG-GS205',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GS205 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3566.LG LG-GT350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT350/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3567.LG LG-GT350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT350/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3568.LG LG-GT365',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT365/V07h Teleca/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3569.LG LG-GT365',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GT365/V07h Teleca/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3570.LG LG-GW300FD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW300FD/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3571.LG LG-GW300FD',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW300FD/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3572.LG LG-GW305',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW305/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3573.LG LG-GW305',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GW305/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3574.LG LG-GX300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GX300/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3575.LG LG-GX300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GX300/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3576.LG LG-GX500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GX500/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3577.LG LG-GX500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-GX500/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3578.LG LG-KF600d',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF600d Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3579.LG LG-KF600d',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF600d Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3580.LG LG-KF700Q',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF700Q Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3581.LG LG-KF700Q',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF700Q Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3582.LG LG-KM385',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM385 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3583.LG LG-KM385',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM385 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3584.LG LG-KM386',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM386 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3585.LG LG-KM386',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM386 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3586.LG LG-KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900/V10b Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3587.LG LG-KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900/V10c Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3588.LG LG-KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900/V10e Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3589.LG LG-KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900/V10b Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3590.LG LG-KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900/V10c Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3591.LG LG-KM900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KM900/V10e Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3592.LG LG-KP265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP265 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3593.LG LG-KP265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP265 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3594.LG LG-KP275',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP275 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3595.LG LG-KP275',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP275 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3596.LG LG-KP570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP570 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3597.LG LG-KP570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP570 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3598.LG LG-KS365',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS365/V10c Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3599.LG LG-KS365',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KS365/V10c Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3600.LG LG-LG1500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG1500[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3601.LG LG-LG1500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG1500[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3602.LG LG-LG410G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG410/v10b[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] Teleca/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3603.LG LG-LG410G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG410/v10b[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] Teleca/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3604.LG LG-LG420G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG420G[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3605.LG LG-LG420G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG420G[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3606.LG LG-LG620G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG620GHL/V08c[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3607.LG LG-LG620G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG620G[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3608.LG LG-LG620G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG620GHL/V08c[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3609.LG LG-LG620G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG620G[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3610.LG LG-P520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-P520/V100 Obigo/Q7.3 MMS/LG-MMS-V1.1/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3611.LG LG-P520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-P520/V100 Obigo/Q7.3 MMS/LG-MMS-V1.1/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3612.LG LG-S310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-S310/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3613.LG LG-S310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-S310/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3614.LG LG-T300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-T300/V100 Obigo/Q7.3 MMS/LG-MMS-V1.1/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3615.LG LG-T300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-T300/V100 Obigo/Q7.3 MMS/LG-MMS-V1.1/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3616.LG LG-T310i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-T310i/V100 Obigo/Q7.3 MMS/LG-MMS-V1.1/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3617.LG LG-T310i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-T310i/V100 Obigo/Q7.3 MMS/LG-MMS-V1.1/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3618.LG LG-T320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-T320/V100 Obigo/Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3619.LG LG-T320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-T320/V100 Obigo/Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3620.LG LG-T325',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-T325/V100 Obigo/Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3621.LG LG-T325',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-T325/V100 Obigo/Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3622.LG LG-X330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-X330T Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3623.LG LG-X330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-X330T Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3624.LG LG/C320/v1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C320/V100 Obigo/Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3625.LG LG/C320/v1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C320/V100 Obigo/Q7.3 MMS/LG-MMS-V1.0/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3626.LG LG/C550/V1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C550 Mozilla/5.0 (Linux; U; Android 2.2; en-gb; LG-C550 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3627.LG LG/C550/V1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-C550 Mozilla/5.0 (Linux; U; Android 2.2; en-gb; LG-C550 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3628.LG LG/HB620/v1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/HB620/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3629.LG LG/HB620/v1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/HB620/v10a Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3630.LG LG/KF750/v1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF750-v10b Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3631.LG LG/KF750/v1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'lg-kf750-v10a browser/obigo-q05a/3.12 mms/lg-mms-v1.0/1.2 java/asvm/1.1 profile/midp-2.1 configuration/cldc-1.1; Opera/9.50 (J2ME/MIDP; Opera Mini/4.0.10269/hifi/tmobile/uk; en; U)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3632.LG LG/KF750/v1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF750-v10b Browser/Obigo-Q05A/3.12 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3633.LG LG/KF750/v1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'lg-kf750-v10a browser/obigo-q05a/3.12 mms/lg-mms-v1.0/1.2 java/asvm/1.1 profile/midp-2.1 configuration/cldc-1.1; Opera/9.50 (J2ME/MIDP; Opera Mini/4.0.10269/hifi/tmobile/uk; en; U)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3634.LG LG/KU990/v1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU990/V10h Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3635.LG LG/KU990/v1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/LG-KU990/V10h Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3636.LG LG/P503/V1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG_P503/1.0 Android/2.2 Release/5.20.2010 Browser/KHTML (Mozilla/5.0 AppleWebKit/533.1 Version/4.0 Mobile Safari/533.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3637.LG LG/P503/V1.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG_P503/1.0 Android/2.2 Release/5.20.2010 Browser/KHTML (Mozilla/5.0 AppleWebKit/533.1 Version/4.0 Mobile Safari/533.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3638.LG LG100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG100 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3639.LG LG100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG100 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3640.LG LG100C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG100C[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3641.LG LG100C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG100C[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3642.LG LG100C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG100C[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3643.LG LG100C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG100C[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3644.LG LG220C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG220C[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3645.LG LG220C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG220C[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3646.LG LG230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG230 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3647.LG LG230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LG230 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3648.LG LG370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG370' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3649.LG LG370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG370/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3650.LG LG370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG370' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3651.LG LG370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG370/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3652.LG LG380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG380/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3653.LG LG380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG380/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3654.LG LG490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG490/1.1 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3655.LG LG490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG490/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3656.LG LG490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG490/1.1 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3657.LG LG490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG490/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3658.LG LG570V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG570V AU-OBIGO/Q04C1-1.27 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3659.LG LG570V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG570V AU-OBIGO/Q04C1-1.27 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3660.LG LG600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG600 POLARIS/6.01 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3661.LG LG600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG600 POLARIS/6.01 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3662.LG LG700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3663.LG LG700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3664.LG LG830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG830 AU-OBIGO/Q05A1-3.8 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3665.LG LG830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LG830 AU-OBIGO/Q05A1-3.8 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3666.LG LG840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 4.0.3; U; en) 240X400 LGE LG840' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3667.LG LG840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG840' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3668.LG LG840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 4.0.3; U; en) 240X400 LGE LG840' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3669.LG LG840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG840' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3670.LG LG9250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG9250' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3671.LG LG9250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG9250' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3672.LG LG9600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(compatible; Teleca Q7; 4.0.3; U; en) 240x480 LGE LG-LG9600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3673.LG LG9600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG9600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3674.LG LG9600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(compatible; Teleca Q7; 4.0.3; U; en) 240x480 LGE LG-LG9600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3675.LG LG9600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG9600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3676.LG LG9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG9700/1.0 TELECA/Q7.0-1.3 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3677.LG LG9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG9700/1.0 TELECA/Q7.0-1.3 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3678.LG LGE/KF305',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF305 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3679.LG LGE/KF305',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KF305 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3680.LG LGE/KP115',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP115 Obigo/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3681.LG LGE/KP115',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP115 Obigo/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3682.LG LGE/KP135',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP135 Obigo/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3683.LG LGE/KP135',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP135 Obigo/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3684.LG LGE/KP230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP230-V10a Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3685.LG LGE/KP230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-KP230-V10a Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3686.LG LGE/LG600G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG600G[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3687.LG LGE/LG600G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG600G[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3688.LG LGE/TU915',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-TU915 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3689.LG LGE/TU915',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-TU915 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3690.LG LN510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LN510' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3691.LG LN510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NetFront/3.5.1 (BREW 5.0.1.2; U; en-us; LG; NetFront/3.5.1/AMB) Sprint LN510 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3692.LG LN510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LN510' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3693.LG LN510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NetFront/3.5.1 (BREW 5.0.1.2; U; en-us; LG; NetFront/3.5.1/AMB) Sprint LN510 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3694.LG LS670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LS670 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3695.LG LS670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; LS670 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3696.LG LS670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LS670 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3697.LG LS670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; LS670 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3698.LG LS685',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; LG-LS685 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3699.LG LS685',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; LG-LS685 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3700.LG LS700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; LG-LS700 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3701.LG LS700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; LG-LS700 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3702.LG LU2300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ko-kr; LU2300 Build/Donut) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3703.LG LU2300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ko-kr; LU2300 Build/Donut) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3704.LG LU3000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LG-LU3000 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3705.LG LU3000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LG-LU3000 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3706.LG LU3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; LG-LU3100 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3707.LG LU3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; LG-LU3100 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3708.LG LU3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ko-; LG-LU3700 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3709.LG LU3700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ko-; LG-LU3700 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3710.LG LU6800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; LG-LU6800 Build/MASTER) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3711.LG LU6800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ko-kr; LG-LU6800 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3712.LG LU6800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; LG-LU6800 Build/MASTER) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3713.LG LU6800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ko-kr; LG-LU6800 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3714.LG LW310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LW310/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3715.LG LW310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-LW310/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3716.LG LW690',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LG-LW690 Build/FRG83) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3717.LG LW690',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LG-LW690 Build/FRG83) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3718.LG LX150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LX150 AU-MIC-LX150/2.0 MMP/2.0 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3719.LG LX150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-PLS150 AU-MIC-PLS150/1.0 MMP/2.0 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3720.LG LX150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LX150 AU-MIC-LX150/2.0 MMP/2.0 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3721.LG LX150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-PLS150 AU-MIC-PLS150/1.0 MMP/2.0 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3722.LG LX260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LX260 POLARIS-LX260/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3723.LG LX260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LX260 EMBIDER-LX260/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3724.LG LX260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LX260 POLARIS-LX260/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3725.LG LX260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LX260 EMBIDER-LX260/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3726.LG LX265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3727.LG LX265',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3728.LG LX290S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; POLARIS/6.01/WAP) Sprint LX290S MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3729.LG LX290S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; POLARIS/6.01/WAP) Sprint LX290S MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3730.LG LX370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX370; POLARIS/6.01/AMB) MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3731.LG LX370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX370; POLARIS/6.01/AMB) MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3732.LG LX600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LX600 Polaris/6.0 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3733.LG LX600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-LX600 Polaris/6.0 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3734.LG ME240',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME240' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3735.LG ME240',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME240' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3736.LG ME500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME500 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3737.LG ME500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME500 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3738.LG ME550c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME850d MIC/1.1.14 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3739.LG ME550c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME830' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3740.LG ME550c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME850d MIC/1.1.14 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3741.LG ME550c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME830' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3742.LG ME591D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME591D MIC/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3743.LG ME591D',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME591D MIC/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3744.LG ME770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME770 MIC/1.1.14 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3745.LG ME770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-ME770 MIC/1.1.14 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3746.LG MG100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG100a MIC/WAP2.0 MIDP-2.0/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3747.LG MG100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG130 UP.Browser/6.2.3 GUI MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3748.LG MG100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG100a MIC/WAP2.0 MIDP-2.0/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3749.LG MG100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG130 UP.Browser/6.2.3 GUI MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3750.LG MG110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG110 AU/4.10 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3751.LG MG110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG110 AU/4.10 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3752.LG MG112',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG112 AU/4.10 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3753.LG MG112',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG112 AU/4.10 Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3754.LG MG155',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG155' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3755.LG MG155',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG155' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3756.LG MG191b',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG191b AU/4.8.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3757.LG MG191b',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG191b AU/4.8.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3758.LG MG201d',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG201d UP.Browser/6.2.3 GUI MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3759.LG MG201d',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG201d UP.Browser/6.2.3 GUI MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3760.LG MG230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG230 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3761.LG MG230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG230 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3762.LG MG230d',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG230d Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3763.LG MG230d',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG230d Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3764.LG MG295',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG295 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3765.LG MG295',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG295 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3766.LG MG296',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG296 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3767.LG MG296',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG296 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3768.LG MG320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG320 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3769.LG MG320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG320 MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3770.LG MG320c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG320c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3771.LG MG320c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG320c MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3772.LG MG320c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG320c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3773.LG MG320c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG320c MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3774.LG MG320d',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG320d' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3775.LG MG320d',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG320d MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3776.LG MG320d',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG320d' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3777.LG MG320d',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG320d MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3778.LG MG800c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG800c MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3779.LG MG800c',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MG800c MIC/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3780.LG MN510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (compatible; Teleca Q7; BMP 1.0.1; U; en) 240X400 LG-MN510' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3781.LG MN510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (compatible; Teleca Q7; BMP 1.0.1; U; en) 240X400 LG-MN510' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3782.LG MS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-MS20 IEMobile/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3783.LG MS20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-MS20 IEMobile/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3784.LG MS25',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-MS25 IEMobile/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3785.LG MS25',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) LG-MS25 IEMobile/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3786.LG MS690',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LG-MS690 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1; androidAppWebView' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3787.LG MS690',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LG-MS690 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3788.LG MS690',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LG-MS690 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1; androidAppWebView' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3789.LG MS690',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LG-MS690 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3790.LG MS910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; en-us; LG-MS910 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3791.LG MS910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; en-us; LG-MS910 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3792.LG MT375',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-MT375/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3793.LG MT375',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-MT375/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3794.LG MU500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MU500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3795.LG MU500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MU500' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3796.LG MU515',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MU515 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3797.LG MU515',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MU515 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3798.LG MU550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MU550 Obigo/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3799.LG MU550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MU550 Obigo/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3800.LG MU575',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MU575/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3801.LG MU575',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-MU575/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3802.LG MX505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-MX505/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3803.LG MX505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-MX505/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3804.LG MX800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-MX800/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3805.LG MX800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-MX800/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3806.LG MX830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-MX830/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3807.LG MX830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-MX830/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3808.LG NX550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-NX550 AU-MIC-NX550/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3809.LG NX550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-NX550 AU-MIC-NX550/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3810.LG Optimus S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; LS670 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3811.LG P350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; es-es; LG-P350/V10a/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3812.LG P350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; es-es; LG-P350/V10a/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3813.LG P500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-; LG-P500 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3814.LG P500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; LG-P500 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3815.LG P500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-; LG-P500 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3816.LG P500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; LG-P500 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3817.LG P500h',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; LG-P500h Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3818.LG P500h',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; pt-br; LG-P500h Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3819.LG P500h',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; LG-P500h Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3820.LG P500h',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; pt-br; LG-P500h Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3821.LG P509',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; LG-P509 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3822.LG P509',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; LG-P509 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3823.LG P920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; es-es; LG-P920/V08f Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3824.LG P920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; es-es; LG-P920/V08f Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3825.LG P925',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; LG-P925/V07j Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3826.LG P925',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; LG-P925/V07j Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3827.LG P970',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-gb; LG-P970 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3828.LG P970',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-ca; LG-P970g Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3829.LG P970',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; fr-fr; LG-P970/V10a Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3830.LG P970',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-gb; LG-P970 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3831.LG P970',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-ca; LG-P970g Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3832.LG P970',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; fr-fr; LG-P970/V10a Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3833.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; LG-P990/V08c Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3834.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; es-es; LG-P990/V10b Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3835.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; fr-fr; LG-P990/V10c Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3836.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-P990 Mozilla/5.0 (Linux; U; Android 2.2.2; en-gb; LG-P990 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3837.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; sl; LG-P990 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3838.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; sl-; LG-P990 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3839.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; sl-sl; Optimus 2X Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3840.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; LG-P990/V08c Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3841.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; es-es; LG-P990/V10b Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3842.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; fr-fr; LG-P990/V10c Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3843.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-P990 Mozilla/5.0 (Linux; U; Android 2.2.2; en-gb; LG-P990 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3844.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; sl; LG-P990 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3845.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; sl-; LG-P990 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3846.LG P990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; sl-sl; Optimus 2X Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3847.LG P999',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; es-mx; LG-P999 Build/FRG83G) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3848.LG P999',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; es-mx; LG-P999 Build/FRG83G) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3849.LG PLS225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-PLS225/1.0 UP.Browser/6.2.3.7.e.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3850.LG PLS225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-PLS225/1.0 UP.Browser/6.2.3.7.e.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3851.LG PLS350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-PLS350 AU-MIC-PLS350/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3852.LG PLS350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-PLS350 AU-MIC-PLS350/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3853.LG SU370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; kr-; LG-SU370 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3854.LG SU370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; kr-; LG-SU370 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3855.LG SU660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; LG-SU660 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (innerActive-ANDROID-2061)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3856.LG SU660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; LG-SU660 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (innerActive-ANDROID-2061)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3857.LG T310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-T310/V100 Obigo/Q7.3 MMS/LG-MMS-V1.1/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3858.LG T310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-T310/V100 Obigo/Q7.3 MMS/LG-MMS-V1.1/1.2 MediaPlayer/LGPlayer/1.0 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3859.LG T500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-T500/V10c AppleWebKit/531 Browser/Phantom/V2.0 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3860.LG T500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-T500/V10c AppleWebKit/531 Browser/Phantom/V2.0 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3861.LG T505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-T505/V10b AppleWebkit/531 Browser/Phantom/V2.0 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3862.LG T505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Vodafone/1.0/LG-T505/V10b AppleWebkit/531 Browser/Phantom/V2.0 Widget/LGMW/3.0 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.1 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3863.LG TE365',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-TE365 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3864.LG TE365',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-TE365 Teleca/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3865.LG TU575',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-TU575/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3866.LG TU575',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-TU575/V0.9 Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3867.LG TU750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-TU750/V10a Teleca/Q7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3868.LG TU750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-TU750/V10a Teleca/Q7.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3869.LG U900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-U900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3870.LG U900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/U900/v1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3871.LG U900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG-U900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3872.LG U900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LG/U900/v1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3873.LG US670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-us; LG-US670 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3874.LG US670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-us; LG-US670 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3875.LG US740',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; US740 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (innerActive-ANDROID-206)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3876.LG US740',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; US740 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (innerActive-ANDROID-206)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3877.LG US760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; USCC-US760 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3878.LG US760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; USCC-US760 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3879.LG US855',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; en-us; USCC-US855 Build/GRH78C) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3880.LG US855',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; LG-LS855 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3881.LG US855',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; en-us; USCC-US855 Build/GRH78C) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3882.LG US855',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; LG-LS855 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3883.LG UX700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 240X400 LGE UX700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3884.LG UX700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 240X400 LGE UX700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3885.LG UX840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 240X400 LGE UX840' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3886.LG UX840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 240X400 LGE UX840' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3887.LG VM510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VM510 NetFront/3.5.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3888.LG VM510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VM510 NetFront/3.5.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3889.LG VM670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-; VM670 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3890.LG VM670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; VM670 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3891.LG VM670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-; VM670 Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3892.LG VM670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; VM670 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3893.LG VN-250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VN250L/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3894.LG VN-250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VN250L/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3895.LG VS660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Vortex Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3896.LG VS660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Vortex Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3897.LG VS660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Vortex Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3898.LG VS660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Vortex Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3899.LG VX 11000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 480X800 LGE VX11000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3900.LG VX 11000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BREW; U; BREW 3.1.5; en) AppleWebKit/525.26 (KHTML, like Gecko) Polaris/7.0 Safari/525.26 480X800 LGE VX11000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3901.LG VX 11000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx11kv1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3902.LG VX 11000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'RocketBrowser/Sony 3.0.0 (LG-VX-11000)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3903.LG VX 11000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 480X800 LGE VX11000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3904.LG VX 11000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BREW; U; BREW 3.1.5; en) AppleWebKit/525.26 (KHTML, like Gecko) Polaris/7.0 Safari/525.26 480X800 LGE VX11000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3905.LG VX 11000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx11kv1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3906.LG VX 11000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'RocketBrowser/Sony 3.0.0 (LG-VX-11000)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3907.LG VX 7100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VX7100/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3908.LG VX 7100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VX7100/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3909.LG VX 8360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VX8360/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3910.LG VX 8360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx8360v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3911.LG VX 8360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VX8360/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3912.LG VX 8360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx8360v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3913.LG VX-9200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 320X240 LGE VX9200' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3914.LG VX-9200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VX9200v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3915.LG VX-9200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 320X240 LGE VX9200' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3916.LG VX-9200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VX9200v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3917.LG VX5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VX5500/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3918.LG VX5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx55kv1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3919.LG VX5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'RocketBrowser/Sony 3.0.0 (VX5500)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3920.LG VX5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VX5500/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3921.LG VX5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx55kv1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3922.LG VX5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'RocketBrowser/Sony 3.0.0 (VX5500)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3923.LG VX5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VX5600/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3924.LG VX5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx5600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3925.LG VX5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LGE-VX5600/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3926.LG VX5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx5600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3927.LG VX9600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 240X480 LGE VX9600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3928.LG VX9600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx9600v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3929.LG VX9600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 240X480 LGE VX9600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3930.LG VX9600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx9600v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3931.LG VX9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 240X400 LGE VX9700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3932.LG VX9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx9700v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3933.LG VX9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 240X400 LGE VX9700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3934.LG VX9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'vx9700v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3935.Logic PD LogicPD Zoom2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-; LogicPD Zoom2 Build/ERD79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3936.Logic PD LogicPD Zoom2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-; LogicPD Zoom2 Build/ERD79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3937.LT X1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LT/1.00(Tx:13;Ty:13;Font:13;Gx:176;Gy:220;C:CF;G:J2;GI:2;Screen:176*220;Group_ID:T808)/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3938.LT X1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LT/1.00(Tx:13;Ty:13;Font:13;Gx:176;Gy:220;C:CF;G:J2;GI:2;Screen:176*220;Group_ID:T808)/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3939.Malata MT126',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'malata_MT126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3940.Malata MT126',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'malata_MT126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3941.Meizu m9',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; meizu_m9 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3942.Meizu m9',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; meizu_m9 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3943.Micromax MicromaxQ75',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MicromaxQ75' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3944.Micromax MicromaxQ75',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MicromaxQ75' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3945.Micromax Q5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MICROMAX Q5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3946.Micromax Q5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MICROMAXQ5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3947.Micromax Q5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MicromaxQ5/Q03C MAUI-browser/MIDP-2.0Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3948.Micromax Q5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MICROMAX Q5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3949.Micromax Q5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MICROMAXQ5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3950.Micromax Q5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MicromaxQ5/Q03C MAUI-browser/MIDP-2.0Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3951.Micromax Q5C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Q5c|CALCOMP-Q9/Q5c-ENGV0.29-100706-JMW TECHSOFT BROWSER/1.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3952.Micromax Q5C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Q5c|CALCOMP-Q9/Q5c-ENGV0.29-100706-JMW TECHSOFT BROWSER/1.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3953.Micromax X113',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MicroMax-X113' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3954.Micromax X113',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MicroMax-X113' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3955.Micromax X225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Micromax-X225' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3956.Micromax X225',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Micromax-X225' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3957.Microsoft KIN One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12; en-US; KIN.One 1.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3958.Microsoft KIN One',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12; en-US; KIN.One 1.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3959.Microsoft KIN Two',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12; en-US; KIN.Two 1.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3960.Microsoft KIN Two',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12; en-US; KIN.Two 1.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3961.Microsoft XDeviceEmulator',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; Microsoft; XDeviceEmulator)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3962.Microsoft XDeviceEmulator',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; Microsoft; XDeviceEmulator)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3963.Minimo Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; rv 1.8.1.5pre) Gecko/20070619 Minimo/0.020' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3964.Minimo Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows CE 5.1; rv:1.8.1a3) Gecko/20060610 Minimo/0.016' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3965.Mobile Wireless Group Zinc II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) MWg Zinc II' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3966.Mobile Wireless Group Zinc II',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) MWg Zinc II' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3967.MOBISTEL EL480',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL480/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3968.MOBISTEL EL480',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL480/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3969.MOBISTEL EL520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL520/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3970.MOBISTEL EL520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL520/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3971.MOBISTEL EL550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL550/BSI AU.Browser/2.0 QO3C1 MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3972.MOBISTEL EL550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL550/BSI AU.Browser/2.0 QO3C1 MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3973.MOBISTEL EL580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL580/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3974.MOBISTEL EL580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL580/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3975.MOBISTEL EL680',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL680/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3976.MOBISTEL EL680',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EL680/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3977.ModeLabs myWAY touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'myWAY touch/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3978.ModeLabs myWAY touch',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'myWAY touch/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3979.Modu 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Modu1.0-A1/R1.0/General' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3980.Modu 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Modu1.0-A1/R1.0/General' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3981.Modu T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'modu T/1.0 Browser/Obigo/Q7 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3982.Modu T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'modu T/1.0 Browser/Obigo/Q7 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3983.Motorola A1200e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A1200eam/1.0/R541L7_G_11.00.16R Mozilla/4.0 (compatible; MSIE 6.0; Linux; A1200eam; 781) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3984.Motorola A1200e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A1200eam/1.0/R541L7_G_11.00.16R Mozilla/4.0 (compatible; MSIE 6.0; Linux; A1200eam; 781) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3985.Motorola A1600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A1600/1.0 LinuxOS/2.4.20 Release/8.22.2006 Browser/Opera8.00 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/R542_G_11.61.27R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3986.Motorola A1600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A1600/1.0 LinuxOS/2.4.20 Release/8.22.2006 Browser/Opera8.00 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/R542_G_11.61.27R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3987.Motorola A3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A3100 Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/16108; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3988.Motorola A3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A3100 Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/16108; U; es-ES)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3989.Motorola A4500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-A4500; Windows Mobile 6.1 Standard' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3990.Motorola A4500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-A4500; Windows Mobile 6.1 Standard' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3991.Motorola A810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A810/1.0 LinuxOS/2.4.20 Release/6.10.2008 Browser/Opera8.00 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/GSM_E28.24.1_G_11.02.18R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3992.Motorola A810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A810/1.0 LinuxOS/2.4.20 Release/6.10.2008 Browser/Opera8.00 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/GSM_E28.24.1_G_11.02.18R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3993.Motorola A853',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; es-us; A853 Build/SHLA_U2_01.03.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20091123)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3994.Motorola A853',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; pt-br; A853 Build/SHLA_U2_01.03.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3995.Motorola A853',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; es-us; A853 Build/SHLA_U2_01.03.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20091123)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3996.Motorola A853',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; pt-br; A853 Build/SHLA_U2_01.03.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3997.Motorola A854',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; A854 Build/MILER_X1_37.10.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3998.Motorola A854',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; A854 Build/MILER_X1_37.10.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('3999.Motorola A953',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; it-it; MotoA953 Build/S251) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4000.Motorola A953',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; A953Blur Build/S254) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
});