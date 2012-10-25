var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {
    describe('6001.Onda N130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'N130_Onda/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6002.Onda N130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'N130_Onda/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6003.ONDA N131',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ONDA N131' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6004.ONDA N131',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ONDA N131' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6005.ONDA N215',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'N215/wap2.0_Profile/MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6006.ONDA N215',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'N215/wap2.0_Profile/MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6007.ONDA N235W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'N235W/wap2.0_Profile/MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6008.ONDA N235W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'N235W/wap2.0_Profile/MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6009.Onda O140',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'O140/wap2.0_Profile/MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6010.Onda O140',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'O140/wap2.0_Profile/MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6011.OpenWave Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OPWV-SDK UP.Browser/7.0.2.3.119 (GUI) MMP/2.0 Push/PO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6012.OpenWave Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'UP.Browser/6.1.0.1.140 (Google CHTML Proxy/1.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6013.Openwave reformatting proxy',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OpenWeb 5.6.1.3-03) Opera 8.54' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6014.Openwave reformatting proxy',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OpenWeb 5.6.1.3-03) Opera 8.54' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6015.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BROWSER_OPERA_MINI_1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6016.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BACKWARD_COMPATIBILITY_API_OPERA_MINI_VERSION1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6017.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/1.0.13057/574; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6018.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/1.0.13057/866; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6019.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/1.0.13057/1114; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6020.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/1.1.2666/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6021.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/1.2.2958/1644; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6022.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BROWSER_OPERA_MINI_1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6023.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BACKWARD_COMPATIBILITY_API_OPERA_MINI_VERSION1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6024.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/1.0.13057/574; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6025.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/1.0.13057/866; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6026.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/1.0.13057/1114; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6027.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/1.1.2666/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6028.Opera Mini 1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/1.2.2958/1644; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6029.Opera Mini 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_REMOVE_OPERA_MINI_2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6030.Opera Mini 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BACKWARD_COMPATIBILITY_API_OPERA_MINI_VERSION2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6031.Opera Mini 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.3920/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6032.Opera Mini 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/2.1; http:/19.864; U; en) Presto/2.5.25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6033.Opera Mini 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_REMOVE_OPERA_MINI_2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6034.Opera Mini 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BACKWARD_COMPATIBILITY_API_OPERA_MINI_VERSION2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6035.Opera Mini 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.3920/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6036.Opera Mini 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/2.1; http:/19.864; U; en) Presto/2.5.25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6037.Opera Mini 3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_REMOVE_OPERA_MINI_3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6038.Opera Mini 3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BACKWARD_COMPATIBILITY_API_OPERA_MINI_VERSION3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6039.Opera Mini 3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/3.0.6306/1528; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6040.Opera Mini 3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/3.1.10423/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6041.Opera Mini 3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/3.9/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6042.Opera Mini 3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_REMOVE_OPERA_MINI_3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6043.Opera Mini 3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BACKWARD_COMPATIBILITY_API_OPERA_MINI_VERSION3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6044.Opera Mini 3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/3.0.6306/1528; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6045.Opera Mini 3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/3.1.10423/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6046.Opera Mini 3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/3.9/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6047.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/2141; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6048.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.51 Beta (Microsoft Windows; PPC; Opera Mobi/2723; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6049.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.51 Beta (Microsoft Windows; PPC; 240x240; Opera Mobi/2723; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6050.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.51 Beta (Microsoft Windows; PPC; 240x320; Opera Mobi/2723; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6051.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_REMOVE_OPERA_MINI_4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6052.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BACKWARD_COMPATIBILITY_API_OPERA_MINI_VERSION4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6053.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/4.0.10269/546; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6054.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/4.0.10013/330; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6055.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.0.10013/724; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6056.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.0.10013/1006; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6057.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/4.1.12181/546; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6058.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/4.1.10781/298; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6059.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.1.10781/414; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6060.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.1.10781/1006; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6061.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/4.2.13057/330; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6062.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.2 BETA /504; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6063.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.2 BETA /1030; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6064.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.3.13221/504; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6065.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.3.13221/1016; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6066.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.4.14881/960; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6067.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.4.14881/1006; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6068.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.5.13337/504; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6069.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.5.30876 Mod For Indosat By Harrz-Networks/1122; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6070.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.6.21545/432; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6071.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.6.21545/1114; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6072.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/2141; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6073.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.51 Beta (Microsoft Windows; PPC; Opera Mobi/2723; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6074.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.51 Beta (Microsoft Windows; PPC; 240x240; Opera Mobi/2723; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6075.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.51 Beta (Microsoft Windows; PPC; 240x320; Opera Mobi/2723; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6076.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_REMOVE_OPERA_MINI_4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6077.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BACKWARD_COMPATIBILITY_API_OPERA_MINI_VERSION4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6078.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/4.0.10269/546; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6079.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/4.0.10013/330; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6080.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.0.10013/724; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6081.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.0.10013/1006; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6082.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/4.1.12181/546; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6083.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/4.1.10781/298; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6084.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.1.10781/414; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6085.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.1.10781/1006; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6086.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/4.2.13057/330; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6087.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.2 BETA /504; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6088.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.2 BETA /1030; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6089.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.3.13221/504; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6090.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.3.13221/1016; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6091.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.4.14881/960; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6092.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.4.14881/1006; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6093.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.5.13337/504; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6094.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.5.30876 Mod For Indosat By Harrz-Networks/1122; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6095.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.6.21545/432; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6096.Opera Mini 4',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.6.21545/1114; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6097.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_REMOVE_OPERA_MINI_5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6098.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BACKWARD_COMPATIBILITY_API_OPERA_MINI_VERSION5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6099.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/5.0.10423/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6100.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/5.0.17637/1368; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6101.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/5.0.15650/446; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6102.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.5.17443/1428; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6103.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Android; Opera Mini/5.0.18302/18.652; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6104.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Android; Opera Mini/5.1.21126/19.916; U; en) Presto/2.5.25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6105.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.0 (Linux; U; Android 2.1; en-us; Nexus One Build/19.916; U; en) Presto/2.5.25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6106.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (BlackBerry; Opera Mini/5.0.19692/19.916; U; en) Presto/2.5.25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6107.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (BlackBerry; Opera Mini/5.1.21011/19.752; U; en) Presto/2.6.25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6108.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/8.65.9399/432; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6109.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/8.65 /18.794; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6110.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/9.2.Turbo/554; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6111.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/9.5.Turbo Silver/416; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6112.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/9.8.4509/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6113.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/9.9.Turbo/960; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6114.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_REMOVE_OPERA_MINI_5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6115.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TO_BE_REMOVED_BACKWARD_COMPATIBILITY_API_OPERA_MINI_VERSION5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6116.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/5.0.10423/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6117.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (J2ME/MIDP; Opera Mini/5.0.17637/1368; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6118.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/5.0.15650/446; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6119.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.5.17443/1428; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6120.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Android; Opera Mini/5.0.18302/18.652; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6121.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Android; Opera Mini/5.1.21126/19.916; U; en) Presto/2.5.25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6122.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.0 (Linux; U; Android 2.1; en-us; Nexus One Build/19.916; U; en) Presto/2.5.25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6123.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (BlackBerry; Opera Mini/5.0.19692/19.916; U; en) Presto/2.5.25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6124.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (BlackBerry; Opera Mini/5.1.21011/19.752; U; en) Presto/2.6.25' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6125.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/8.65.9399/432; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6126.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (J2ME/MIDP; Opera Mini/8.65 /18.794; U; en) Presto/2.4.15' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6127.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/9.2.Turbo/554; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6128.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/9.5.Turbo Silver/416; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6129.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/8.01 (J2ME/MIDP; Opera Mini/9.8.4509/1724; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6130.Opera Mini 5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.60 (J2ME/MIDP; Opera Mini/9.9.Turbo/960; U; en) Presto/2.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6131.Opera Mobi',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.7 (Windows Mobile; PPC; Opera Mobi/35166; U; en) Presto/2.2.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6132.Opera Mobi',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Linux armv7l; U; Maemo; Opera Mobi/3; en-GB) Presto/2.5.26 Version/10.00' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6133.Opera Mobi',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.7 (Windows Mobile; PPC; Opera Mobi/35166; U; en) Presto/2.2.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6134.Opera Mobi',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Linux armv7l; U; Maemo; Opera Mobi/3; en-GB) Presto/2.5.26 Version/10.00' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6135.Opera Mobile 10 Windows',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Windows NT 6.1; Opera Mobi/7457; U; en) Presto/2.5.28 Version/10.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6136.Opera Mobile 10 Windows',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Windows NT 6.1; Opera Mobi/7457; U; en) Presto/2.5.28 Version/10.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6137.Opera Opera for Series 60',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (S60; SymbOS; Opera Mobi/934; U; fr) Presto/2.5.28 Version/10.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6138.Opera Opera for Series 60',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (S60; SymbOS; Opera Mobi/934; U; fr) Presto/2.5.28 Version/10.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6139.Opera Opera Mini for S60',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Series 60; Opera Mini/5.1.22395/21.529; U; fr) Presto/2.5.25 Version/10.54' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6140.Opera Opera Mini for S60',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.80 (Series 60; Opera Mini/5.1.22395/21.529; U; fr) Presto/2.5.25 Version/10.54' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6141.OPPO OPPOA201',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OPPO A201/4.02/12 Release/2010.6.02 Browser/Obigo/Q03C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6142.OPPO OPPOA201',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OPPO A201/4.02/12 Release/2010.6.02 Browser/Obigo/Q03C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6143.OPPO OPPOA520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OPPO A520/4.02/12 Release/2010.6.02 Browser/Obigo/Q03C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6144.OPPO OPPOA520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OPPO A520/4.02/12 Release/2010.6.02 Browser/Obigo/Q03C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6145.OPPO OPPOU525',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OPPO U525/4.02/12 Release/2010.6.02 Browser/Obigo/Q03C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6146.OPPO OPPOU525',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OPPO U525/4.02/12 Release/2010.6.02 Browser/Obigo/Q03C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6147.Orange SPV C100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SPV C100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6148.Orange SPV C100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220; SPV C100; OpVer 18.107.2.741)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6149.Orange SPV C100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SPV C100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6150.Orange SPV C100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220; SPV C100; OpVer 18.107.2.741)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6151.Orange SPV C200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SPV C200' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6152.Orange SPV C200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) SPV C200 /SW3.0 MSIE/6.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6153.Orange SPV C200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SPV C200' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6154.Orange SPV C200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) SPV C200 /SW3.0 MSIE/6.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6155.Orange SPV C550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; SPV C550; OpVer 8.2.1.10)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6156.Orange SPV C550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; SPV C550; OpVer 8.2.1.10)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6157.Orange SPV C600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SPV-C600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6158.Orange SPV C600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; SPV C600; OpVer 11.1.10.3)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6159.Orange SPV C600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; mbwiz; Smartphone; 240x320; SPV C600; OpVer 11.2.21.3)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6160.Orange SPV C600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; SPV C600; OpVer 11.2.22.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6161.Orange SPV C600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible MSIE 4.01 Windows CE Smartphone 240x320 SPV C600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6162.Orange SPV C600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SPV-C600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6163.Orange SPV C600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; SPV C600; OpVer 11.1.10.3)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6164.Orange SPV C600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; mbwiz; Smartphone; 240x320; SPV C600; OpVer 11.2.21.3)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6165.Orange SPV C600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; SPV C600; OpVer 11.2.22.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6166.Orange SPV C600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible MSIE 4.01 Windows CE Smartphone 240x320 SPV C600' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6167.Orange SPV C700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SPV-C700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6168.Orange SPV C700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; SPV C700; OpVer 14.2.62.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6169.Orange SPV C700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SPV-C700' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6170.Orange SPV C700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; SPV C700; OpVer 14.2.62.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6171.Orange SPV E600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240; SPV E600; OpVer 20.118.1.615)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6172.Orange SPV E600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240; SPV E600; OpVer 20.118.1.615)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6173.Orange SPV E610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) SPV E610 /SW2.1.1 MSIE/6.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6174.Orange SPV E610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) SPV E610 /SW2.1.1 MSIE/6.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6175.Orange SPV E650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) Smartphone; 240x320; SPV E650' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6176.Orange SPV E650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) Smartphone; 240x320; SPV E650; OpVer 22.103.2.731' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6177.Orange SPV E650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Smartphone; 240x320; SPV E650; OpVer 22.114.1.612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6178.Orange SPV E650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Smartphone; 240x320; SPV E650; OpVer 22.135.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6179.Orange SPV E650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Smartphone; 240x320; SPV E650; OpVer 22.122.10.703' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6180.Orange SPV E650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) Smartphone; 240x320; SPV E650' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6181.Orange SPV E650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) Smartphone; 240x320; SPV E650; OpVer 22.103.2.731' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6182.Orange SPV E650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Smartphone; 240x320; SPV E650; OpVer 22.114.1.612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6183.Orange SPV E650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Smartphone; 240x320; SPV E650; OpVer 22.135.1.611' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6184.Orange SPV E650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Smartphone; 240x320; SPV E650; OpVer 22.122.10.703' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6185.Orange SPV M3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; SPV M3100; OpVer 12' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6186.Orange SPV M3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; SPV M3100; OpVer 12' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6187.Palm 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0100 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6188.Palm 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0004 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; SPV M3100; OpVer 12' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6189.Palm 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0100 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6190.Palm 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0004 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; 240x320; SPV M3100; OpVer 12' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6191.Palm Pixi',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.3.1; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pixi/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6192.Palm Pixi',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/Palm webOS 1.2.9; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pixi/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6193.Palm Pixi',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.3.1; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pixi/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6194.Palm Pixi',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/Palm webOS 1.2.9; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pixi/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6195.Palm Pixi Plus',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.3.5.1; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pixi/1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6196.Palm Pixi Plus',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.3.5.1; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pixi/1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6197.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.0; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6198.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.1; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6199.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.2; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6200.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.2; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Desktop/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6201.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.3.1; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6202.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.3.5; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6203.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.4.1.1; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6204.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.4.5; U; de-DE) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6205.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.0; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6206.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.1; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6207.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.2; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6208.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.2; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Desktop/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6209.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.3.1; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6210.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.3.5; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6211.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.4.1.1; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6212.Palm Pre',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.4.5; U; de-DE) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6213.Palm Pre Plus',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.3.5.1; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6214.Palm Pre Plus',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/Albacore; U; fr-FR) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6215.Palm Pre Plus',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/1.3.5.1; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6216.Palm Pre Plus',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/Albacore; U; fr-FR) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6217.Palm Pre2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/2.1.0; U; fr-FR) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6218.Palm Pre2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (webOS/2.1.0; U; fr-FR) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6219.Palm Treo 700VX',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Treo700wx' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6220.Palm Treo 700VX',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Treo700wx' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6221.Palm Treo 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Treo750 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6222.Palm Treo 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0003 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6223.Palm Treo 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0004 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6224.Palm Treo 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0005 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6225.Palm Treo 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Treo750 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6226.Palm Treo 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0003 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6227.Palm Treo 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0004 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6228.Palm Treo 750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0005 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6229.Palm Treo 750w',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0000 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6230.Palm Treo 750w',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm750/v0000 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6231.Palm Treo 800w',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Treo800w/v0100 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE, PPC; 320x320) (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6232.Palm Treo 800w',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Treo800w/v0100 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE, PPC; 320x320) (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6233.Palm Treo 850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm850/v0100 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6234.Palm Treo 850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm850/v0100 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6235.Palm Treo/500v',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) /Palm 500v/v0100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6236.Palm Treo/500v',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) /Palm500/v0100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6237.Palm Treo/500v',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) /Palm 500/v0100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6238.Palm Treo/500v',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) /Palm 500v/v0100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6239.Palm Treo/500v',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) /Palm500/v0100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6240.Palm Treo/500v',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) /Palm 500/v0100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6241.Palm Treo850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm850/V0100 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6242.Palm Treo850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Treo850/v0100 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6243.Palm Treo850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm Treo Pro/ ver 1.01/ Windows CE;IE Mobile 7.11 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6244.Palm Treo850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm850/V0100 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6245.Palm Treo850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Treo850/v0100 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6246.Palm Treo850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Palm Treo Pro/ ver 1.01/ Windows CE;IE Mobile 7.11 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6247.Palm Treo850e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Alltel_Treo850e' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6248.Palm Treo850e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Sprint Treo850e' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6249.Palm Treo850e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Treo850e/v0100 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6250.Palm Treo850e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Alltel_Treo850e' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6251.Palm Treo850e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Sprint Treo850e' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6252.Palm Treo850e',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Treo850e/v0100 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6253.Panasonic MX6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Panasonic-MX6/1.0/RP1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6254.Panasonic MX6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MX6/1.00 Nucleus RTOS/V1.11.19 MTK6225/07B Release/04.25.2008 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6255.Panasonic MX6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Panasonic-MX6/1.0/RP1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6256.Panasonic MX6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MX6/1.00 Nucleus RTOS/V1.11.19 MTK6225/07B Release/04.25.2008 Browser/Teleca Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6257.Panasonic MX7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Panasonic-MX7/1.0/RP1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6258.Panasonic MX7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Panasonic-MX7/1.0/RP1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6259.Panasonic SC3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Panasonic-SC3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6260.Panasonic SC3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Panasonic-SC3/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.8 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6261.Panasonic SC3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Panasonic-SC3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6262.Panasonic SC3',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Panasonic-SC3/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.8 (GUI) MMP/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6263.Pantech AKY IM-A730S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; IM-A730S Build/FRG83) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6264.Pantech AKY IM-A730S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; IM-A730S Build/FRG83) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6265.Pantech C510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C510/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6266.Pantech C510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C510/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6267.Pantech C520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C520/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6268.Pantech C520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C520/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6269.Pantech C610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C610/IRUS08252008 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6270.Pantech C610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C610/IRUS08252008 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6271.Pantech C630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C630/IUUS08112008 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6272.Pantech C630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C630/IUUS08112008 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6273.Pantech C740',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C740/ISUS09012008 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6274.Pantech C740',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C740/ISUS09012008 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6275.Pantech C790',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C790/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6276.Pantech C790',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PantechC790/JAUS05252009 Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.14329; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6277.Pantech C790',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C790/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6278.Pantech C790',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PantechC790/JAUS05252009 Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.14329; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6279.Pantech C810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C810/R01 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6280.Pantech C810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C810/M044.33 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6281.Pantech C810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C810/R01 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6282.Pantech C810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C810/M044.33 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6283.Pantech C820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C820/WM28.31 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6284.Pantech C820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-C820/WM28.31 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6285.Pantech CDM 8960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CDM-8960 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6286.Pantech CDM 8960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CDM-8960 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6287.Pantech CDM8960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'cdm8960 UP.Browser/6.2.2.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6288.Pantech CDM8960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'cdm8960 UP.Browser/6.2.2.1 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6289.Pantech IM-A690L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; IM-A690L Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6290.Pantech IM-A690L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; IM-A690L Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6291.Pantech IM-A690S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-; IM-A690S Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6292.Pantech IM-A690S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-; IM-A690S Build/FRG83) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6293.Pantech IM-A710K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; IM-A710K Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1IM-A710K' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6294.Pantech IM-A710K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; IM-A710K Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1IM-A710K' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6295.Pantech IM-A720L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; IM-A720L Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1IM-A720L' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6296.Pantech IM-A720L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; IM-A720L Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1IM-A720L' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6297.Pantech IS06',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS06 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6298.Pantech IS06',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS06 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6299.Pantech P2020',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PantechP2020/JIUS05172010R; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.19039; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6300.Pantech P2020',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PantechP2020/JIUS05172010R; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.19039; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6301.Pantech P4000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-P4000/R01 Browser/Obigo/Q03C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6302.Pantech P4000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-P4000/R01 Browser/Obigo/Q03C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6303.Pantech P7000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-P7000/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6304.Pantech P7000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PantechP7000/JDUS08102009; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.14822; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6305.Pantech P7000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PANTECH-P7000/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6306.Pantech P7000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PantechP7000/JDUS08102009; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.14822; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6307.Pantech P7040',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PantechP7040/JFUS03152010F Browser/Obigo/Q05A OMC/1.5.3 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6308.Pantech P7040',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PantechP7040/JFUS03152010F Browser/Obigo/Q05A OMC/1.5.3 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6309.Pantech P9020',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PantechP9020/JEUSS0111042009 NetFront/3.5 OMC/1.5.3 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6310.Pantech P9020',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PantechP9020/JEUSS0111042009 NetFront/3.5 OMC/1.5.3 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6311.Pantech PG 331',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PG-3310/R01 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6312.Pantech PG 331',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PG-3310/R01 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6313.Pantech PG-C150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PG-C150/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6314.Pantech PG-C150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PG-C150/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6315.Pantech PG-C510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PG-C510/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6316.Pantech PG-C510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PG-C510/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6317.Pantech PN-E330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PN-E330/T03_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6318.Pantech PN-E330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PN-E330/T03_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6319.Pantech PU-C710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PU-C710/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6320.Pantech PU-C710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PU-C710/R01 Browser/Obigo/Q05A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6321.Pantech S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'S100/R01 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6322.Pantech S100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'S100/R01 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6323.Pantech SKY IM A600S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SKY IM-A600S Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6324.Pantech SKY IM A600S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SKY IM-A600S Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6325.Pantech SKY IM-A630K Izar',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SKY IM-A630K Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6326.Pantech SKY IM-A630K Izar',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SKY IM-A630K Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6327.Pantech TXT8030',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TXT8030/T05_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6328.Pantech TXT8030',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TXT8030OM/T05_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6329.Pantech TXT8030',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'pcdt8030' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6330.Pantech TXT8030',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TXT8030/T05_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6331.Pantech TXT8030',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TXT8030OM/T05_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6332.Pantech TXT8030',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'pcdt8030' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6333.PCD C721',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(compatible; Access NetFront/3.5; BREW 3.1.5; en,es)/240x320 PCD C721' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6334.PCD C721',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(compatible; Access NetFront/3.5; BREW 3.1.5; en,es)/240x320 PCD C721' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6335.PCD TXT8040',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TXT8040/T05_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6336.PCD TXT8040',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TXT8040/T05_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6337.Philips 199',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips 199 / Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6338.Philips 199',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips 199 / Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6339.Philips 289',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PHILIPS289 ObigoInternetBrowser/Q03C EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6340.Philips 289',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PHILIPS289 ObigoInternetBrowser/Q03C EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6341.Philips 292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips292 / Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6342.Philips 292',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips292 / Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6343.Philips 3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX713/1.0 MTK6235/09B Release/15.08.2010 Browser/Obigo2.0 Profile/MIDP-2.1/Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6344.Philips 3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX713/1.0 MTK6235/09B Release/15.08.2010 Browser/Obigo2.0 Profile/MIDP-2.1/Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6345.Philips 598',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTK 6225 LCT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6346.Philips 598',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTK 6225 LCT' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6347.Philips 766',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PHILIPS766 IACWAPBrowser1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6348.Philips 766',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PHILIPS766 IACWAPBrowser1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6349.Philips 9@9H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PHILIPS9@9H ObigoInternetBrowser/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6350.Philips 9@9H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PHILIPS9@9H ObigoInternetBrowser/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6351.Philips 9@9k',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips9@9k/R08 NXP5210/DV7 Release/9.12.2007 Obigo/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6352.Philips 9@9k',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips9@9k/R08 NXP5210/DV7 Release/9.12.2007 Obigo/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6353.Philips 9@9Q',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips9@9q/V07 NXP5210/DV9 Release/12.10.2007 Obigo/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6354.Philips 9@9Q',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips9@9q/V07 NXP5210/DV9 Release/12.10.2007 Obigo/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6355.Philips 9A9W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PHILIPS9A9W ObigoInternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6356.Philips 9A9W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PHILIPS9A9W ObigoInternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6357.Philips E100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips E100/ Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6358.Philips E100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips E100/ Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6359.Philips E102',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsE102/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6360.Philips E102',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsE102/1.0 NXP4901/Galaxy1.1 Release/01.04.2009 Browser/JAT-Browser5.0 Profile/MIDP-1.0 Configration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6361.Philips E102',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsE102/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6362.Philips E102',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsE102/1.0 NXP4901/Galaxy1.1 Release/01.04.2009 Browser/JAT-Browser5.0 Profile/MIDP-1.0 Configration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6363.Philips E210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips E210/Obigo Browser wap2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6364.Philips E210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips E210/Obigo Browser wap2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6365.Philips F511',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsF511/MTK 6235.09A 09.32/WAP-2.0/MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6366.Philips F511',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsF511/MTK 6235.09A 09.32/WAP-2.0/MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6367.Philips K700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsK700/Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6368.Philips K700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsK700/Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6369.Philips Philips-198',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips 198 / Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6370.Philips Philips-198',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips 198 / Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6371.Philips PHILIPS-P390',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips P390 / Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6372.Philips PHILIPS-P390',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Philips P390 / Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6373.Philips PhilipsX100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX100/OBIGO_Q03C/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6374.Philips PhilipsX100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX100/OBIGO_Q03C/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6375.Philips PhilipsX216',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX216/OBIGO_Q03C/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6376.Philips PhilipsX216',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX216/OBIGO_Q03C/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6377.Philips X500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX500/1.0 NXP5210/DV9 Release/9.01.2008 Browser/Obigo2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6378.Philips X500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX500/1.0 NXP5210/DV9 Release/9.01.2008 Browser/Obigo2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6379.Philips X501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX501/1.0 MTK6235/08B Release/09.09.2009 Browser/Obigo2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6380.Philips X501',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX501/1.0 MTK6235/08B Release/09.09.2009 Browser/Obigo2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6381.Philips X503',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX503/MTK 6235.09A 09.32/WAP-2.0/MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6382.Philips X503',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX503/MTK 6235.09A 09.32/WAP-2.0/MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6383.Philips X520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX520/1.0 NXP5210/DV9 Release/9.01.2008 Browser/Obigo2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6384.Philips X520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX520/1.0 NXP5210/DV9 Release/9.01.2008 Browser/Obigo2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6385.Philips X703',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX703/Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6386.Philips X703',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX703/Obigo Browser 2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6387.Philips X800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX800/1.0 MTK6229/07A Release/10.06.2008 Browser/Obigo2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6388.Philips X800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX800/1.0 MTK6229/07A Release/10.06.2008 Browser/Obigo2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6389.Philips X830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX830/1.0 MTK6239/08A Release/11.11.2008 Browser/Obigo2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6390.Philips X830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX830/1.0 MTK6239/08A Release/11.11.2008 Browser/Obigo2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6391.PhoneOne M302',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'phoneOne-M302/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6392.PhoneOne M302',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'phoneOne-M302/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6393.PhoneOne M402',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'phoneOne M402' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6394.PhoneOne M402',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'phoneOne M402' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6395.PhoneOne M403',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'phoneOne M403' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6396.PhoneOne M403',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'phoneOne M403' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6397.PhoneOne M505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'phoneOne-M505/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6398.PhoneOne M505',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'phoneOne-M505/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6399.PhoneOne M901',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'M901/Teleca/Q03C1.22 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6400.PhoneOne M901',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'M901/Teleca/Q03C1.22 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6401.PhoneOne S101',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SP; 240x320; phoneOne_S101/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6402.PhoneOne S101',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SP; 240x320; phoneOne_S101/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6403.PhoneOne S901',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; phoneOne_S901/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6404.PhoneOne S901',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PPC; 240x320; phoneOne_S901/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6405.Pocket Internet Explorer Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WM5 PIE' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6406.PocketLink Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.0; PalmOS) PLink 2.56b' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6407.QMobile F220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Q-Mobile-F220/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6408.QMobile F220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Q-Mobile-F220/Profile/MIDP.2.0Configuration/CLDC.1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6409.QMobile Q61',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Q-MOBILE-Q61/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6410.QMobile Q61',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Q-MOBILE-Q61/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6411.Qtek 8020',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Qtek8020 (Mozilla4.0 compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6412.Qtek 8020',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Qtek8020 (Mozilla4.0 compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6413.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6414.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6415.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 BlackBerry8100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6416.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6417.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6418.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6419.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6420.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/134' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6421.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6422.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/214' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6423.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6424.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6425.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6426.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6427.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6428.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.5.0.108 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6429.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.5.0.69 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6430.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.5.0.52 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6431.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6432.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6433.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 BlackBerry8100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6434.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6435.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6436.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6437.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6438.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/134' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6439.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6440.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/214' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6441.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6442.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6443.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6444.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6445.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6446.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.5.0.108 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6447.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.5.0.69 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6448.RIM BlackBerry 8100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8100/4.5.0.52 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6449.RIM BlackBerry 8110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8110/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6450.RIM BlackBerry 8110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8110/4.5.0.55 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6451.RIM BlackBerry 8110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8110/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6452.RIM BlackBerry 8110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8110/4.5.0.55 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6453.RIM BlackBerry 8120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8120/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6454.RIM BlackBerry 8120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8120/4.5.0.52 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6455.RIM BlackBerry 8120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8120/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6456.RIM BlackBerry 8120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8120/4.5.0.52 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6457.RIM BlackBerry 8130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8130/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/109' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6458.RIM BlackBerry 8130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim8130v2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6459.RIM BlackBerry 8130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'blackberry8130' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6460.RIM BlackBerry 8130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8130m/4.5.0.127 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6461.RIM BlackBerry 8130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8130/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/109' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6462.RIM BlackBerry 8130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim8130v2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6463.RIM BlackBerry 8130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'blackberry8130' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6464.RIM BlackBerry 8130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8130m/4.5.0.127 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6465.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.106 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6466.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.155 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6467.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.165 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6468.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.195 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6469.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.151 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6470.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.155 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6471.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.106 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6472.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.155 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6473.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.165 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6474.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.195 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6475.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.151 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6476.RIM BlackBerry 8220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8220/4.6.0.155 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6477.RIM BlackBerry 8230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8230/4.6.1.100 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6478.RIM BlackBerry 8230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8230f/4.6.1.236 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/294' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6479.RIM BlackBerry 8230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8230/4.6.1.100 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6480.RIM BlackBerry 8230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8230f/4.6.1.236 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/294' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6481.RIM BlackBerry 8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8300/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/136' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6482.RIM BlackBerry 8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8300/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6483.RIM BlackBerry 8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8300/4.5.0.174 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6484.RIM BlackBerry 8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8300/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/136' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6485.RIM BlackBerry 8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8300/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6486.RIM BlackBerry 8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8300/4.5.0.174 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6487.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6488.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6489.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/214' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6490.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6491.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6492.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/132' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6493.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/2.0 (compatible; MSIE 3.02; Windows CE; PPC; 240x320) BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6494.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6495.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6496.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.5.0.44 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6497.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/248' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6498.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.5.0.102 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6499.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.5.0.55 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/301' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6500.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/124' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6501.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry 8310' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6502.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6503.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6504.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/214' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6505.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6506.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6507.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/132' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6508.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/2.0 (compatible; MSIE 3.02; Windows CE; PPC; 240x320) BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6509.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6510.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6511.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.5.0.44 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6512.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/248' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6513.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.5.0.102 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6514.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.5.0.55 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/301' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6515.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8310/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/124' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6516.RIM BlackBerry 8310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry 8310' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6517.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6518.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/119' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6519.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim/8320 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/109/application' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6520.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.5.0.124 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6521.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.5.0.55 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/215' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6522.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.5.0.81 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6523.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6524.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.5.0.52 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6525.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.5.0.18 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6526.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6527.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/119' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6528.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim/8320 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/109/application' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6529.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.5.0.124 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6530.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.5.0.55 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/215' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6531.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.5.0.81 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6532.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6533.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.5.0.52 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6534.RIM BlackBerry 8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8320/4.5.0.18 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6535.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6536.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6537.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim8330v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6538.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8330/4.5.0.77 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6539.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'blackberry8330' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6540.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330m/4.5.0.131 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6541.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330/4.5.0.77 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6542.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330/4.5.0.77 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6543.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6544.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6545.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim8330v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6546.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8330/4.5.0.77 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6547.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'blackberry8330' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6548.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330m/4.5.0.131 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6549.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330/4.5.0.77 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6550.RIM BlackBerry 8330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330/4.5.0.77 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6551.RIM BlackBerry 8330m',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330m/4.5.0.169 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/189' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6552.RIM BlackBerry 8330m',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8330m/4.5.0.169 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/189' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6553.RIM BlackBerry 8350i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8350i/4.6.1.83 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/103' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6554.RIM BlackBerry 8350i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8350i/4.6.1.313 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/103' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6555.RIM BlackBerry 8350i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8350i/4.6.1.83 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/103' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6556.RIM BlackBerry 8350i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8350i/4.6.1.313 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/103' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6557.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8520/4.6.1.259 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6558.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8520/4.6.1.272 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6559.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8520/4.6.1.272 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/121' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6560.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8520/4.6.1.314 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6561.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8520/5.0.0.822 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6562.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8520/4.6.1.290 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6563.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8520/5.0.0.681 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6564.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8520/5.0.0.1036 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/131' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6565.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8520/4.6.1.259 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6566.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8520/4.6.1.272 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6567.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8520/4.6.1.272 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/121' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6568.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8520/4.6.1.314 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6569.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8520/5.0.0.822 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6570.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8520/4.6.1.290 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6571.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8520/5.0.0.681 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6572.RIM BlackBerry 8520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8520/5.0.0.1036 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/131' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6573.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8530/5.0.0.337 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6574.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim8530' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6575.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8530/5.0.0.782 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/109' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6576.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.654 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6577.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.459 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6578.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.395 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6579.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.886 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6580.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.734 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6581.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.601 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/417' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6582.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.337 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6583.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.508 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6584.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8530/5.0.0.337 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6585.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim8530' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6586.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8530/5.0.0.782 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/109' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6587.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.654 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6588.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.459 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6589.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.395 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6590.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.886 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6591.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.734 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6592.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.601 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/417' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6593.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.337 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6594.RIM BlackBerry 8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8530/5.0.0.508 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6595.RIM BlackBerry 8700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8700/4.1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6596.RIM BlackBerry 8700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8700/4.1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6597.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6598.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6599.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/115' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6600.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6601.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6602.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800/4.5.0.55 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6603.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6604.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6605.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/115' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6606.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6607.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800/4.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6608.RIM BlackBerry 8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8800/4.5.0.55 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6609.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6610.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/119' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6611.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6612.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6613.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.5.0.69 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6614.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6615.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.5.0.52 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6616.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6617.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/119' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6618.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6619.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6620.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.5.0.69 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6621.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6622.RIM BlackBerry 8820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8820/4.5.0.52 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6623.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6624.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLOC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6625.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6626.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6627.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/189' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6628.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6629.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'blackberry8830' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6630.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.5.0.138 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6631.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830m/4.5.0.135 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6632.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.5.0.186 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6633.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6634.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLOC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6635.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6636.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6637.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/189' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6638.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6639.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'blackberry8830' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6640.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.5.0.138 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6641.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830m/4.5.0.135 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6642.RIM BlackBerry 8830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8830/4.5.0.186 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6643.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6644.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.45 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6645.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.66 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/175' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6646.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.75 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6647.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.95 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/115' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6648.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.94 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6649.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.76 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6650.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.109 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6651.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6652.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6653.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.152 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6654.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8900/4.6.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6655.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/5.0.0.411 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/302' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6656.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.310 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6657.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6658.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.45 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6659.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.66 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/175' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6660.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.75 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6661.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.95 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/115' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6662.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.94 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6663.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.76 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6664.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.109 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6665.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6666.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6667.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.152 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6668.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry8900/4.6.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6669.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/5.0.0.411 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/302' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6670.RIM BlackBerry 8900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8900/4.6.1.310 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6671.RIM BlackBerry 8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8910/5.0.0.608 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6672.RIM BlackBerry 8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry8910/5.0.0.608 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/612' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6673.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6674.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.162 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6675.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.166 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6676.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.185 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/115' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6677.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.162 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6678.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.162 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6679.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.162 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/302' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6680.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.126 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/222' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6681.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.216 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6682.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.65 Profile/MIDP-2.0 (compatible; ips-agent) Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6683.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.221 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6684.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/5.0.0.348 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6685.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/5.0.0.681 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/118' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6686.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6687.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.162 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6688.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.166 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6689.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.185 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/115' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6690.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.162 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6691.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.162 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/142' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6692.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.162 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/302' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6693.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.126 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/222' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6694.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.216 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6695.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.65 Profile/MIDP-2.0 (compatible; ips-agent) Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6696.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/4.6.0.221 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6697.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/5.0.0.348 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/179' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6698.RIM BlackBerry 9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9000/5.0.0.681 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/118' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6699.RIM BlackBerry 9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9100/4.6.0.31 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6700.RIM BlackBerry 9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9100/5.0.0.604 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6701.RIM BlackBerry 9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9100/4.6.0.31 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6702.RIM BlackBerry 9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9100/5.0.0.604 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6703.RIM BlackBerry 9105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9105/5.0.0.696 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6704.RIM BlackBerry 9105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9105/5.0.0.748 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/115' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6705.RIM BlackBerry 9105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9105/5.0.0.882 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6706.RIM BlackBerry 9105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9105; es) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.534 Mobile Safari/534.8+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6707.RIM BlackBerry 9105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9105/5.0.0.696 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6708.RIM BlackBerry 9105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9105/5.0.0.748 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/115' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6709.RIM BlackBerry 9105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9105/5.0.0.882 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6710.RIM BlackBerry 9105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9105; es) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.534 Mobile Safari/534.8+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6711.RIM BlackBerry 9300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9300/5.0.0.716 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6712.RIM BlackBerry 9300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry9300/5.0.0.845 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6713.RIM BlackBerry 9300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9300/5.0.0.846 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6714.RIM BlackBerry 9300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9300; en-GB) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.344 Mobile Safari/534.8+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6715.RIM BlackBerry 9300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9300/5.0.0.716 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6716.RIM BlackBerry 9300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry9300/5.0.0.845 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6717.RIM BlackBerry 9300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9300/5.0.0.846 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6718.RIM BlackBerry 9300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9300; en-GB) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.344 Mobile Safari/534.8+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6719.RIM BlackBerry 9330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9330/5.0.0.913 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6720.RIM BlackBerry 9330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9330/5.0.0.857 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6721.RIM BlackBerry 9330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9330; en-US) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.415 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6722.RIM BlackBerry 9330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9330/5.0.0.913 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6723.RIM BlackBerry 9330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9330/5.0.0.857 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6724.RIM BlackBerry 9330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9330; en-US) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.415 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6725.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.34 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6726.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.56 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6727.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.46 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6728.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.51 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6729.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.61 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6730.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.65 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6731.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.78 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6732.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.87 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6733.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.41 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6734.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.141 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6735.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.181 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6736.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.34 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6737.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.56 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6738.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.46 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6739.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.51 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6740.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.61 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6741.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.65 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6742.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.78 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6743.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.87 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/139' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6744.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.41 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6745.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.141 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6746.RIM BlackBerry 9500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9500/4.7.0.181 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6747.RIM BlackBerry 9520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9520/5.0.0.306 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6748.RIM BlackBerry 9520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9520/5.0.0.973 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6749.RIM BlackBerry 9520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry9520/5.0.0.1077 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6750.RIM BlackBerry 9520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9520/5.0.0.306 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6751.RIM BlackBerry 9520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9520/5.0.0.973 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/133' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6752.RIM BlackBerry 9520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry9520/5.0.0.1077 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6753.RIM BlackBerry 9530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9530/4.6.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6754.RIM BlackBerry 9530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim9530v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6755.RIM BlackBerry 9530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9530/4.7.0.103 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6756.RIM BlackBerry 9530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9530/5.0.0.419 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/228' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6757.RIM BlackBerry 9530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9530/4.6.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6758.RIM BlackBerry 9530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim9530v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6759.RIM BlackBerry 9530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9530/4.7.0.103 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6760.RIM BlackBerry 9530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9530/5.0.0.419 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/228' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6761.RIM BlackBerry 9550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9550/5.0.0.320 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6762.RIM BlackBerry 9550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim9550' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6763.RIM BlackBerry 9550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9550/5.0.0.713 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6764.RIM BlackBerry 9550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9550/5.0.0.320 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6765.RIM BlackBerry 9550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim9550' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6766.RIM BlackBerry 9550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9550/5.0.0.713 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6767.RIM BlackBerry 9630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry9630/4.7.1.40 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6768.RIM BlackBerry 9630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9630/4.7.1.40 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6769.RIM BlackBerry 9630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim9630v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6770.RIM BlackBerry 9630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9630/5.0.0.643 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6771.RIM BlackBerry 9630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry9630/4.7.1.40 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6772.RIM BlackBerry 9630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9630/4.7.1.40 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6773.RIM BlackBerry 9630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim9630v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6774.RIM BlackBerry 9630',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9630/5.0.0.643 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6775.RIM BlackBerry 9650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim9650' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6776.RIM BlackBerry 9650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9650/5.0.0.699 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6777.RIM BlackBerry 9650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9650; en-us) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.431 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6778.RIM BlackBerry 9650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9650/5.0.0.732 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6779.RIM BlackBerry 9650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'rim9650' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6780.RIM BlackBerry 9650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9650/5.0.0.699 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6781.RIM BlackBerry 9650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9650; en-us) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.431 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6782.RIM BlackBerry 9650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9650/5.0.0.732 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/105' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6783.RIM BlackBerry 9670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9670; en-US) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.226 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6784.RIM BlackBerry 9670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9670; en-US) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.226 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6785.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9700/5.0.0.207 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/175' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6786.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9700/5.0.0.261 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/122' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6787.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9700/5.0.0.321 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/212' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6788.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9700/5.0.0.743 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/115' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6789.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry9700/5.0.0.714 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6790.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9700; es) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.534 Mobile Safari/534.8+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6791.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9700/5.0.0.207 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/175' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6792.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9700/5.0.0.261 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/122' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6793.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9700/5.0.0.321 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/212' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6794.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9700/5.0.0.743 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/115' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6795.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Blackberry9700/5.0.0.714 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/100' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6796.RIM BlackBerry 9700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9700; es) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.534 Mobile Safari/534.8+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6797.RIM BlackBerry 9700a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9700a/6.0.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6798.RIM BlackBerry 9700a',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9700a/6.0.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6799.RIM BlackBerry 9780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9780; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.131 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6800.RIM BlackBerry 9780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9780; de) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.214 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6801.RIM BlackBerry 9780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9780; en-US) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.131 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6802.RIM BlackBerry 9780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9780; es) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.534 Mobile Safari/534.8+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6803.RIM BlackBerry 9780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9780; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.131 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6804.RIM BlackBerry 9780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9780; de) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.214 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6805.RIM BlackBerry 9780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9780; en-US) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.131 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6806.RIM BlackBerry 9780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9780; es) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.534 Mobile Safari/534.8+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6807.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.135 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6808.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; es) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.141 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6809.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-US) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.201 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6810.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.214 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6811.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; es) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.225 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6812.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; it) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.246 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6813.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9800/6.0.0.246 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6814.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.135 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6815.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; es) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.141 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6816.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-US) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.201 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6817.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.214 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6818.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; es) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.225 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6819.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; it) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.246 Mobile Safari/534.1+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6820.RIM BlackBerry 9800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlackBerry9800/6.0.0.246 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/102' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6821.RIM BlackBerry Bold Touch 9900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-GB) AppleWebKit/534.11+ (KHTML, like Gecko) Version/6.1.0.55 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6822.RIM BlackBerry Bold Touch 9900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.103 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6823.RIM BlackBerry Bold Touch 9900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-GB) AppleWebKit/534.11+ (KHTML, like Gecko) Version/6.1.0.55 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6824.RIM BlackBerry Bold Touch 9900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.103 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6825.RIM Blackberry Bold Touch 9930',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9930; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/6.1.0.61 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6826.RIM Blackberry Bold Touch 9930',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9930; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.115 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6827.RIM Blackberry Bold Touch 9930',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9930; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/6.1.0.61 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6828.RIM Blackberry Bold Touch 9930',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9930; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.115 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6829.RIM BlackBerry Torch 9860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9860; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/6.1.0.76 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6830.RIM BlackBerry Torch 9860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9860; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.133 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6831.RIM BlackBerry Torch 9860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9860; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/6.1.0.76 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6832.RIM BlackBerry Torch 9860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9860; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.133 Mobile Safari/534.11+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6833.RoverPC S5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'RoverPC-S5/(2005.10.01)Ver1.0.1/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1/ (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6834.RoverPC S5',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'RoverPC-S5/(2005.10.01)Ver1.0.1/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1/ (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6835.Sagem Bleu 453x',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bleu 453x' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6836.Sagem Bleu 453x',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bleu 453x' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6837.Sagem MY 421Z',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-my421Z-orange/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6838.Sagem MY 421Z',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-my421Z-orange/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6839.Sagem MY 521X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sagem-my521X/1.0/ MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.6.c.1.414 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6840.Sagem MY 521X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sagem-my521X/1.0/ MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.6.c.1.414 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6841.Sagem my721X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sagem-my721X' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6842.Sagem my721X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sagem-my721X/1.0/ETN_EE MIDP-2.0 Configuration/CLDC-1.L Browser/UP.Browser/7.2.7.352 (GUI); Opera/8.01 (J2ME/MIDP; Opera Mini/3.1.9872/hifi/tmobile/uk; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6843.Sagem my721X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sagem-my721X/1.0/ETN_EF MIDP-2.0 Configuration/CLDC-1.L Browser/UP.Browser/7.2.7.352 (GUI); Opera/8.01 (J2ME/MIDP; Opera Mini/3.1.9872/hifi/tmobile/uk; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6844.Sagem my721X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-my721X/1.0/EAN_ET MIDP-2.0 Configuration/CLDC-1.L Browser/UP.Browser/7.2.7.1.352 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6845.Sagem my721X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sagem-my721X' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6846.Sagem my721X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sagem-my721X/1.0/ETN_EE MIDP-2.0 Configuration/CLDC-1.L Browser/UP.Browser/7.2.7.352 (GUI); Opera/8.01 (J2ME/MIDP; Opera Mini/3.1.9872/hifi/tmobile/uk; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6847.Sagem my721X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sagem-my721X/1.0/ETN_EF MIDP-2.0 Configuration/CLDC-1.L Browser/UP.Browser/7.2.7.352 (GUI); Opera/8.01 (J2ME/MIDP; Opera Mini/3.1.9872/hifi/tmobile/uk; en; U; ssr)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6848.Sagem my721X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-my721X/1.0/EAN_ET MIDP-2.0 Configuration/CLDC-1.L Browser/UP.Browser/7.2.7.1.352 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6849.Sagem my730C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-my730C/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6850.Sagem my730C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-my730C/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6851.Sagem my750X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-my750X/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6852.Sagem my750X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-my750X-Orange/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6853.Sagem my750X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-my750X/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6854.Sagem my750X',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-my750X-Orange/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6855.Sagem P9522',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PORSCHE-DESIGN-P-9522/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.322 (GUI), Browser/UP.Browser/7.2.7.1.322 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6856.Sagem P9522',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PORSCHE-DESIGN-P-9522/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.322 (GUI), Browser/UP.Browser/7.2.7.1.322 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6857.Sagem PUMA Phone M1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PUMA Phone M1/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1; 240x320) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6858.Sagem PUMA Phone M1',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PUMA Phone M1/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1; 240x320) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6859.Sagem VF533',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-VF533/1.0/EVN_ZE MIDP/2.0Configuration/CLDC-1.1Browser/UP.Browser/7.2.7.1.398(GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6860.Sagem VF533',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-VF533/1.0/EVN_ZH MIDP/2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.421 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6861.Sagem VF533',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-VF533/1.0/EVN_ZI MIDP/2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.423 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6862.Sagem VF533',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-VF533/1.0/EVN_ZJ MIDP/2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.423 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6863.Sagem VF533',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-VF533/1.0/EVN_ZE MIDP/2.0Configuration/CLDC-1.1Browser/UP.Browser/7.2.7.1.398(GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6864.Sagem VF533',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-VF533/1.0/EVN_ZH MIDP/2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.421 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6865.Sagem VF533',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-VF533/1.0/EVN_ZI MIDP/2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.423 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6866.Sagem VF533',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-VF533/1.0/EVN_ZJ MIDP/2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.423 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6867.Sagem VF540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-VF540/1.0/EVN_MB MIDP/2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.550 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6868.Sagem VF540',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAGEM-VF540/1.0/EVN_MB MIDP/2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.550 (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6869.SAMART iDEA 802',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'iDEA 802' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6870.SAMART iDEA 802',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'iDEA 802' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6871.SAMART i-mobile 5210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile 5210' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6872.SAMART i-mobile 5210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'i-mobile 5210' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6873.Samsung B2100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-B2100V/BUIA2/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6874.Samsung B2100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2100/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6875.Samsung B2100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2100-ORANGE/B2100BVIC3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6876.Samsung B2100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-B2100V/BUIA2/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6877.Samsung B2100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2100/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6878.Samsung B2100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2100-ORANGE/B2100BVIC3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6879.Samsung B5702C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B5702/B5702XEIE1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6880.Samsung B5702C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5702C_CMCC/1.0 RTK-E/1.0 DF/1.0 Release/01.14.2009 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6881.Samsung B5702C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B5702/B5702XEIE1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6882.Samsung B5702C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5702C_CMCC/1.0 RTK-E/1.0 DF/1.0 Release/01.14.2009 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6883.Samsung Behold 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Behold II Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6884.Samsung Behold 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Behold2 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6885.Samsung Behold 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Behold2 Build/DONUT) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6886.Samsung Behold 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Behold II Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6887.Samsung Behold 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Behold2 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6888.Samsung Behold 2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Behold2 Build/DONUT) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6889.Samsung C160L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C160L/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6890.Samsung C160L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C160L/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6891.Samsung C3010',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3010/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6892.Samsung C3010',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3010/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6893.Samsung C3050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C3050-ORANGE/C3050BVIC7 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6894.Samsung C3050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungC3050/C3050BUIA3 Browser/Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6895.Samsung C3050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C3050/C3050RFID1 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6896.Samsung C3050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C3050/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6897.Samsung C3050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C3050-ORANGE/C3050BVIC7 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6898.Samsung C3050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungC3050/C3050BUIA3 Browser/Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6899.Samsung C3050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C3050/C3050RFID1 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6900.Samsung C3050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C3050/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6901.Samsung C3053',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C3053/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6902.Samsung C3053',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C3053/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6903.Samsung C5212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5212/C5212XAHK4 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6904.Samsung C5212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C5212/C5212JPIC4 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6905.Samsung C5212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5212i/C5212iDDKA1 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6906.Samsung C5212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5212i/C5212iDDJH6 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6907.Samsung C5212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5212/C5212XAHK4 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6908.Samsung C5212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C5212/C5212JPIC4 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6909.Samsung C5212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5212i/C5212iDDKA1 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6910.Samsung C5212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5212i/C5212iDDJH6 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6911.Samsung C6620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C6620/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6912.Samsung C6620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C6620/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6913.Samsung C6625',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C6625/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6914.Samsung C6625',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungC6625/BUIF2 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6915.Samsung C6625',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C6625/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6916.Samsung C6625',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungC6625/BUIF2 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6917.Samsung E1310C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E1310M/E1310MBAID6 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6918.Samsung E1310C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-E1310B/BUIE1/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6919.Samsung E1310C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E1310E/E1310E XBIE1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6920.Samsung E1310C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E1310M/E1310MBAID6 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6921.Samsung E1310C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-E1310B/BUIE1/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6922.Samsung E1310C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E1310E/E1310E XBIE1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6923.Samsung E1360B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E1360B-ORANGE/E1360BBNIC2 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6924.Samsung E1360B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E1360M/E1360MXEID2 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6925.Samsung E1360B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E1360B-ORANGE/E1360BBNIC2 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6926.Samsung E1360B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E1360M/E1360MXEID2 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6927.Samsung E1410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E1410/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6928.Samsung E1410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E1410/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6929.Samsung E2100L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E2100L/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6930.Samsung E2100L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E2100L/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6931.Samsung E2210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E2210/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6932.Samsung E2210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E2210L/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6933.Samsung E2210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E2210/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6934.Samsung E2210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E2210L/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6935.Samsung E2210B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E2210B/E2210BAIID1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6936.Samsung E2210B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E2210BT/E2210BZDIG1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6937.Samsung E2210B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E2210B/E2210BAIID1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6938.Samsung E2210B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-E2210BT/E2210BZDIG1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6939.Samsung E860V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/SamsungSGHE860V/E860JBFA2/Browser/NF/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6940.Samsung E860V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/SamsungSGHE860V/E860JBFA2/Browser/NF/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6941.Samsung F510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SGH-F510/1.0 NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6942.Samsung F510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SGH-F510/1.0 NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6943.Samsung Galaxy Player',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; YP-G70 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6944.Samsung GT B3210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3210/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6945.Samsung GT B3210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3210-ORANGE/B3210BVII5 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6946.Samsung GT B3210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3210/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6947.Samsung GT B3210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3210-ORANGE/B3210BVII5 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6948.Samsung GT B3310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3310/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6949.Samsung GT B3310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3310-ORANGE/B3310BVIH1 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6950.Samsung GT B3310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3310/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6951.Samsung GT B3310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3310-ORANGE/B3310BVIH1 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6952.Samsung GT B3313',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3313/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6953.Samsung GT B3313',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3313/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6954.Samsung GT B3410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3410/B3410DDIJ5 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6955.Samsung GT B3410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3410/B3410XXIK1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6956.Samsung GT B3410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3410-Bouygues/B3410XXIL2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6957.Samsung GT B3410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3410/B3410DDIJ5 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6958.Samsung GT B3410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3410/B3410XXIK1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6959.Samsung GT B3410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3410-Bouygues/B3410XXIL2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6960.Samsung GT B5310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5310/B5310ACIK1 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6961.Samsung GT B5310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5310/B5310ACIK1 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6962.Samsung GT B5722',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5722/B5722DDJA1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6963.Samsung GT B5722',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5722/B5722DDJA1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6964.Samsung GT B7300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7300/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6965.Samsung GT B7300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7300/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6966.Samsung GT B7320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7320/1.0 MIDP/2.1 CLDC/1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6967.Samsung GT B7320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7320/1.0 MIDP/2.1 CLDC/1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6968.Samsung GT B7320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7320/1.0 MIDP/2.1 CLDC/1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6969.Samsung GT B7320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7320/1.0 MIDP/2.1 CLDC/1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6970.Samsung GT B7330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7330/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) SAMSUNG-GT-B7330V/XXIL3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6971.Samsung GT B7330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7330/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) SAMSUNG-GT-B7330V/XXIL3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6972.Samsung GT B7350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-GT-B7350/BUJF4 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6973.Samsung GT B7350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-GT-B7350/BUJF4 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6974.Samsung GT C3212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3212/C3212DDIH5 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6975.Samsung GT C3212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3212i/C3212IDDJF2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6976.Samsung GT C3212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3212/C3212DDIH5 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6977.Samsung GT C3212',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3212i/C3212IDDJF2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6978.Samsung GT C3300K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-GT-C3300K/BUJF4 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6979.Samsung GT C3300K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3300K/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6980.Samsung GT C3300K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-GT-C3300K/BUJF4 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6981.Samsung GT C3300K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3300K/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6982.Samsung GT C3510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3510/C3510DDIL2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6983.Samsung GT C3510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3510T/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6984.Samsung GT C3510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3510/C3510DDIL2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6985.Samsung GT C3510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3510T/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6986.Samsung GT C5130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5130/1.0 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6987.Samsung GT C5130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5130S-Vodafone/SBAIJ4 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6988.Samsung GT C5130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5130/1.0 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6989.Samsung GT C5130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5130S-Vodafone/SBAIJ4 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6990.Samsung GT C6112',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C6112/C6112DDIL3 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6991.Samsung GT C6112',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C6112/C6112DDIL3 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6992.Samsung GT E2120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2120B/E2120BDDIH2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6993.Samsung GT E2120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2120-ORANGE/E2120BVII2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6994.Samsung GT E2120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2120B/E2120BDDIH2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6995.Samsung GT E2120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2120-ORANGE/E2120BVII2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6996.Samsung GT E2120i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2120i/E2120iDDJD6 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6997.Samsung GT E2120i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2120i/E2120iDDJD6 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6998.Samsung GT E2121',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2121B/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6999.Samsung GT E2121',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2121B/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7000.Samsung GT E2130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2130/E2130DDII1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7001.Samsung GT E2130',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2130/E2130DDII1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7002.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; GT-I5700 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7003.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; spica) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7004.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; iw-il; GT-I5700L Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7005.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-ca; GT-I5700R Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7006.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-fr; GT-I5700 Build/ECLAIR; Bouygues_Telecom) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7007.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; GT-I5700-ORANGE/I5700OFRIK1 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7008.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; GT-I5700 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7009.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; GT-I5700 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7010.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; spica) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7011.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; iw-il; GT-I5700L Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7012.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-ca; GT-I5700R Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7013.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-fr; GT-I5700 Build/ECLAIR; Bouygues_Telecom) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7014.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; GT-I5700-ORANGE/I5700OFRIK1 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7015.Samsung GT i5700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; GT-I5700 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7016.Samsung GT I6220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I6220/1.0 SHP/VPP/R5 Jasmine/0.8 NexPlayer/2.12 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7017.Samsung GT I6220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I6220/1.0 SHP/VPP/R5 Jasmine/0.8 NexPlayer/2.12 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7018.Samsung GT i6500u',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; GT-I6500U Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7019.Samsung GT i6500u',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; GT-I6500U Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7020.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; GT-I7500) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7021.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; Galaxy Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7022.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; Galaxy Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7023.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; Galaxy Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7024.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6 - Galaxo V1.6.3.3; en-gb; Galaxy Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7025.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; da-dk; GT-I7500) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7026.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; GT-I7500) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7027.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; Galaxy Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7028.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; Galaxy Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7029.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; Galaxy Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7030.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6 - Galaxo V1.6.3.3; en-gb; Galaxy Build/Donut) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7031.Samsung GT i7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; da-dk; GT-I7500) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7032.Samsung GT i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-i8000/1.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7033.Samsung GT i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-i8000/1.0 (Windows CE; Opera Mobi; U; en) Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7034.Samsung GT i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.5 (Windows NT 5.1; U; en) SAMSUNG-GT-i8000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7035.Samsung GT i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-i8000/1.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7036.Samsung GT i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-i8000/1.0 (Windows CE; Opera Mobi; U; en) Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7037.Samsung GT i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.5 (Windows NT 5.1; U; en) SAMSUNG-GT-i8000' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7038.Samsung GT I9000T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-au; GT-I9000T Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7039.Samsung GT I9000T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-au; GT-I9000T Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7040.Samsung GT M2310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M2310/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7041.Samsung GT M2310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M2310/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7042.Samsung GT M2510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M2510/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7043.Samsung GT M2510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M2510/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7044.Samsung GT M2513',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M2513/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7045.Samsung GT M2513',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M2513/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7046.Samsung GT M2520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M2520/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7047.Samsung GT M2520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M2520/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7048.Samsung GT M5650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M5650/M5650XXIK8 SHP/VPP/R5 Jasmine/1.0 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7049.Samsung GT M5650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M5650/M5650XXIK8 SHP/VPP/R5 Jasmine/1.0 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7050.Samsung GT M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800ADHL2 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7051.Samsung GT M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800ADHL2 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7052.Samsung GT M8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8910/M8910XXIG9 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7053.Samsung GT M8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8910/M8910XXIG9 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7054.Samsung GT S3030',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3030/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7055.Samsung GT S3030',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3030/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7056.Samsung GT S3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3100/S3100XXII1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7057.Samsung GT S3100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3100/S3100XXII1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7058.Samsung GT S3370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3370/S3370DDJD4 SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7059.Samsung GT S3370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3370/S3370AHJD4 SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7060.Samsung GT S3370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3370/S3370AIJD6 SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7061.Samsung GT S3370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3370/S3370NEJD4 SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7062.Samsung GT S3370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3370/S3370DDJD4 SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7063.Samsung GT S3370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3370/S3370AHJD4 SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7064.Samsung GT S3370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3370/S3370AIJD6 SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7065.Samsung GT S3370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3370/S3370NEJD4 SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7066.Samsung GT S3600C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3600C/1.0 RTK-E/1.0 DF/1.0 Release/07.01.2008 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7067.Samsung GT S3600C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3600i/S3600iDDIK2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7068.Samsung GT S3600C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3600C/1.0 RTK-E/1.0 DF/1.0 Release/07.01.2008 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7069.Samsung GT S3600C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3600i/S3600iDDIK2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7070.Samsung GT S3653',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3653/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7071.Samsung GT S3653',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3653/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7072.Samsung GT S5230W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230W/S523WXXIL1 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7073.Samsung GT S5230W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230W/S523WXXIL1 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7074.Samsung GT S5233A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233A/S5233ADDIF1 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7075.Samsung GT S5233A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233A/S523AJAIK2 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7076.Samsung GT S5233A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233A/S5233ADDIF1 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7077.Samsung GT S5233A',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233A/S523AJAIK2 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7078.Samsung GT S5233S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233S/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7079.Samsung GT S5233S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233S/S5233SDDII2 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profil e/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7080.Samsung GT S5233S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233S/S5233SDDJE2 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7081.Samsung GT S5233S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233S/S5233SDRIK1 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7082.Samsung GT S5233S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233S/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7083.Samsung GT S5233S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233S/S5233SDDII2 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profil e/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7084.Samsung GT S5233S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233S/S5233SDDJE2 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7085.Samsung GT S5233S',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233S/S5233SDRIK1 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7086.Samsung GT S5233W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233W/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7087.Samsung GT S5233W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233W/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7088.Samsung GT S5503',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5503/ SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7089.Samsung GT S5503',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5503/ SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7090.Samsung GT S5510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5510/S5510CVIJ1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7091.Samsung GT S5510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5510/S5510CVIJ1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7092.Samsung GT S5560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5560/S5560XXIK3 SHP/VPP/R5 Dolfin/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7093.Samsung GT S5560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5560/S5560XXIK3 SHP/VPP/R5 Dolfin/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7094.Samsung GT S5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5600-Vodafone/S5600BUID1 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7095.Samsung GT S5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5600-ORANGE/S5600BVIDA SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7096.Samsung GT S5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5600/S5600AIIE2 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7097.Samsung GT S5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5600L/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7098.Samsung GT S5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5600-Vodafone/S5600BUID1 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7099.Samsung GT S5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5600-ORANGE/S5600BVIDA SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7100.Samsung GT S5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5600/S5600AIIE2 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7101.Samsung GT S5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5600L/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7102.Samsung GT S5603',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5603/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7103.Samsung GT S5603',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5603/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7104.Samsung GT S5603T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5603T/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7105.Samsung GT S5603T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5603T/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7106.Samsung GT S5620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5620-Vodafone/S5620BUJA3 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7107.Samsung GT S5620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5620-ORANGE/S5620BVJE1 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7108.Samsung GT S5620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5620-Vodafone/S5620BUJA3 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7109.Samsung GT S5620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5620-ORANGE/S5620BVJE1 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7110.Samsung GT S7550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S7550/S7550BAIK2 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7111.Samsung GT S7550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S7550/S7550BAIK2 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7112.Samsung GT S8000L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8000L/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7113.Samsung GT S8000L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8000L/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7114.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8500-Vodafone/S8500BUJC1 SHP/VPP/R5 Dolfin/2.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7115.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8500/S8500XXJD2 SHP/VPP/R5 Dolfin/2.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7116.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500XXJE7; U; Bada/1.0; sl-sl) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7117.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500PMJE2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7118.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG-GT-S8500/S8500AIE5; U; Bada/1.0; it-it ) AppleWebKit/533.1 (KTML, Like Gecko) Dolfin/2.0 Mobile WVGA > SMMMMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPNB' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7119.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500-VODAFONE/S8500BUJF1; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7120.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500R/1.0; U; Bada/1.0; en-ca) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7121.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500-VODAFONE/S8500AEJG1; U; Bada/1.0; fr-fr) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7122.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500AIJI2; U; Bada/1.0; it-it) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7123.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8500/S8500BGJEA Bada/1.0 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7124.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500-BOUYGUES/S8500AGJF1; U; Bada/1.0; fr-fr) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7125.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500-ORANGE/S8500BVJI2; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7126.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8500-Vodafone/S8500BUJC1 SHP/VPP/R5 Dolfin/2.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7127.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8500/S8500XXJD2 SHP/VPP/R5 Dolfin/2.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7128.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500XXJE7; U; Bada/1.0; sl-sl) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7129.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500PMJE2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7130.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG-GT-S8500/S8500AIE5; U; Bada/1.0; it-it ) AppleWebKit/533.1 (KTML, Like Gecko) Dolfin/2.0 Mobile WVGA > SMMMMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPNB' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7131.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500-VODAFONE/S8500BUJF1; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7132.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500R/1.0; U; Bada/1.0; en-ca) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7133.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500-VODAFONE/S8500AEJG1; U; Bada/1.0; fr-fr) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7134.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500AIJI2; U; Bada/1.0; it-it) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7135.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8500/S8500BGJEA Bada/1.0 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7136.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500-BOUYGUES/S8500AGJF1; U; Bada/1.0; fr-fr) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7137.Samsung GT S8500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500-ORANGE/S8500BVJI2; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7138.Samsung GT-B2700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2700/XBHI1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7139.Samsung GT-B2700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2700/XBIA1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7140.Samsung GT-B2700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2700/XBIB1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7141.Samsung GT-B2700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2700/XBHK2 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7142.Samsung GT-B2700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2700/SXIB1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7143.Samsung GT-B2700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2700/XBHI1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7144.Samsung GT-B2700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2700/XBIA1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7145.Samsung GT-B2700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2700/XBIB1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7146.Samsung GT-B2700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2700/XBHK2 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7147.Samsung GT-B2700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-B2700/SXIB1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7148.Samsung GT-B2710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B2710/B2710XXJI4 SHP/VPP/R5 Dolfin/2.0 QTV/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7149.Samsung GT-B2710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B2710/B2710XXJI4 SHP/VPP/R5 Dolfin/2.0 QTV/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7150.Samsung GT-B3410R',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3410R/B3410UXJC4 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7151.Samsung GT-B3410R',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3410R/B3410UXJC4 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7152.Samsung GT-B3410W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3410W/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7153.Samsung GT-B3410W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B3410W/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7154.Samsung GT-B5310L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5310L/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7155.Samsung GT-B5310L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5310L/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7156.Samsung GT-B5310R',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5310R/B5310UXJB5 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7157.Samsung GT-B5310R',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5310R/B5310UXJB5 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7158.Samsung GT-B5310U',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5310U/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7159.Samsung GT-B5310U',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5310U/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7160.Samsung GT-B5722C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5722C/1.0 RTK-E/1.0 DF/1.0 Release/10.14.2009 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7161.Samsung GT-B5722C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B5722C/1.0 RTK-E/1.0 DF/1.0 Release/10.14.2009 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7162.Samsung GT-B7330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7330/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7163.Samsung GT-B7330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7330/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7164.Samsung GT-B7510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; it-it; GT-B7510 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7165.Samsung GT-B7510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; he-il; GT-B7510B Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7166.Samsung GT-B7510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; it-it; GT-B7510 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7167.Samsung GT-B7510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; he-il; GT-B7510B Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7168.Samsung GT-B7610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7610/1.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7169.Samsung GT-B7610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-GT-B7610/NBUIH1 Browser/Opera/9.5 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7170.Samsung GT-B7610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SAMSUNG_B7610/1.0; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7171.Samsung GT-B7610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7610/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7172.Samsung GT-B7610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7610/1.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7173.Samsung GT-B7610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-GT-B7610/NBUIH1 Browser/Opera/9.5 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7174.Samsung GT-B7610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SAMSUNG_B7610/1.0; Windows Phone 6.5)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7175.Samsung GT-B7610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7610/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7176.Samsung GT-B7620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7620/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7177.Samsung GT-B7620',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7620/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7178.Samsung GT-B7722',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7722/JPJG1 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7179.Samsung GT-B7722',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7722/XEJG6 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7180.Samsung GT-B7722',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7722/JPJG1 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7181.Samsung GT-B7722',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-B7722/XEJG6 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7182.Samsung GT-C3110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C3110/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7183.Samsung GT-C3110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C3110/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7184.Samsung GT-C3110C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3110C/1.0 Release/9.05.2008 Browser/Openwave6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7185.Samsung GT-C3110C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3110C/1.0 Release/9.05.2008 Browser/Openwave6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7186.Samsung GT-C3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3200/1.0 NetFront/3.5 Profile/M IDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7187.Samsung GT-C3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3200/1.0 NetFront/3.5 Profile/M IDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7188.Samsung GT-C3222',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3222/C3222XXJJB NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7189.Samsung GT-C3222',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3222/C3222XXJJB NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7190.Samsung GT-C3300i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-GT-C3300i/BUKA1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7191.Samsung GT-C3300i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-GT-C3300i/BUKA1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7192.Samsung GT-C3300K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3300K-ORANGE/C3300KBVJG2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7193.Samsung GT-C3300K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3300K-ORANGE/C3300KBVJG2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7194.Samsung GT-C3303',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3303/C3303DDJFB NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7195.Samsung GT-C3303',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3303i/C3303iDDKB2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7196.Samsung GT-C3303',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3303/C3303DDJFB NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7197.Samsung GT-C3303',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3303i/C3303iDDKB2 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7198.Samsung GT-C3303K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3303K/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7199.Samsung GT-C3303K',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3303K/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7200.Samsung GT-C3500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3500/C3500XXKA4 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7201.Samsung GT-C3500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3500/C3500XXKA4 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7202.Samsung GT-C3510T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3510T/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7203.Samsung GT-C3510T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3510T/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7204.Samsung GT-C3518',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3518/1.0 RTK-E/1.0 DF/1.0 Release/22.12.2009 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7205.Samsung GT-C3518',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3518/1.0 RTK-E/1.0 DF/1.0 Release/22.12.2009 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7206.Samsung GT-C3530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3530/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7207.Samsung GT-C3530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3530/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7208.Samsung GT-C5010',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5010/C5010DDJF3 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7209.Samsung GT-C5010',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5010/C5010DDJF3 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7210.Samsung GT-C5220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C5220/1.0 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7211.Samsung GT-C5220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-C5220/1.0 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7212.Samsung GT-C5510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5510/C5510XBIG1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7213.Samsung GT-C5510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C5510/C5510XBIG1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7214.Samsung GT-C6712',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C6712/C6712XXKE3 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7215.Samsung GT-C6712',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C6712/C6712XXKE3 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7216.Samsung GT-E1390',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E1390/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7217.Samsung GT-E1390',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E1390/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7218.Samsung GT-E2120C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2120C_CMCC/1.0 RTK-E/1.0 DF/1.0 Release/14.01.2009 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7219.Samsung GT-E2120C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2120C_CMCC/1.0 RTK-E/1.0 DF/1.0 Release/14.01.2009 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7220.Samsung GT-E2120L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2120L/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7221.Samsung GT-E2120L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2120L/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7222.Samsung GT-E2121L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2121L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7223.Samsung GT-E2121L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2121L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7224.Samsung GT-E2152',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2152/E2152DDJG7 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7225.Samsung GT-E2152',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2152/E2152DDJG7 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7226.Samsung GT-E2222',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2222/E2222XEKD4 NetFront/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7227.Samsung GT-E2222',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2222/E2222XEKD4 NetFront/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7228.Samsung GT-E2232',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2232/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7229.Samsung GT-E2232',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2232/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7230.Samsung GT-E2330B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2330B/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7231.Samsung GT-E2330B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2330B/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7232.Samsung GT-E2370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2370/E2370AIJH1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7233.Samsung GT-E2370',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2370/E2370AIJH1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7234.Samsung GT-E2530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2530/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7235.Samsung GT-E2530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2530/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7236.Samsung GT-E2530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2530/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7237.Samsung GT-E2530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2530/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7238.Samsung GT-E2550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2550/E2550DBGJH3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7239.Samsung GT-E2550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2550/E2550DBGJH3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7240.Samsung GT-E2550L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2550L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7241.Samsung GT-E2550L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2550L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7242.Samsung GT-E2652W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2652W/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7243.Samsung GT-E2652W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E2652W/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7244.Samsung GT-E3210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E3210/1.0 RTK-E/1.0 DF/1.0 Release/12.14.2010 Browser/NetFront4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7245.Samsung GT-E3210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GT-E3210/E3213KDDKC3 NetFront/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7246.Samsung GT-E3210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-E3210/1.0 RTK-E/1.0 DF/1.0 Release/12.14.2010 Browser/NetFront4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7247.Samsung GT-E3210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GT-E3210/E3213KDDKC3 NetFront/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7248.Samsung GT-i5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; GT-I5500 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7249.Samsung GT-i5500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; GT-I5500 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7250.Samsung GT-I5500B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; GT-I5500B Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7251.Samsung GT-I5500B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; GT-I5500B Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7252.Samsung GT-I5500L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; GT-I5500L Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7253.Samsung GT-I5500L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; GT-I5500L Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7254.Samsung GT-I5503',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-; GT-I5503 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7255.Samsung GT-I5503',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-; GT-I5503 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7256.Samsung GT-I5508',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; GT-I5508 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7257.Samsung GT-I5508',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; GT-I5508 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7258.Samsung GT-I5510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; GT-I5510 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7259.Samsung GT-I5510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; GT-I5510 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7260.Samsung GT-I5800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; GT-I5800 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7261.Samsung GT-I5800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; GT-I5800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7262.Samsung GT-I5800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; GT-I5800 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7263.Samsung GT-I5800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; GT-I5800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7264.Samsung GT-i5800L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.1-update1 es-us GT-I5800L Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7265.Samsung GT-I5800L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; GT-I5800L Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 ign-requesting-app=android-native Android IGN App 1.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7266.Samsung GT-i5800L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.1-update1 es-us GT-I5800L Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7267.Samsung GT-I5800L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; GT-I5800L Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 ign-requesting-app=android-native Android IGN App 1.7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7268.Samsung GT-I5801',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; GT-I5801 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7269.Samsung GT-I5801',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; GT-I5801 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7270.Samsung GT-I6230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I6230/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7271.Samsung GT-I6230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I6230/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7272.Samsung GT-I6330C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I6330C_CMCC/1.0 RTK-E/1.0 SHP/VPP-R5 Release/5.25.2009 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1 SMM-MMS/1.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7273.Samsung GT-I6330C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I6330C_CMCC/1.0 RTK-E/1.0 SHP/VPP-R5 Release/5.25.2009 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1 SMM-MMS/1.2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7274.Samsung GT-I6410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I6410-Vodafone/I6410BUII2 Linux/X2/R1 Opera/9.6 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7275.Samsung GT-I6410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I6410-Vodafone/I6410BUII8 Linux/X2/R1 Opera/9.6 SMS-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7276.Samsung GT-I6410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I6410-Vodafone/I6410BUII2 Linux/X2/R1 Opera/9.6 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7277.Samsung GT-I6410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I6410-Vodafone/I6410BUII8 Linux/X2/R1 Opera/9.6 SMS-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7278.Samsung GT-I7410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I7410/I7410XXIE3 SHP/VPP/R5 Jasmine/1.0 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7279.Samsung GT-I7410',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I7410/I7410XXIE3 SHP/VPP/R5 Jasmine/1.0 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7280.Samsung GT-i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) SAMSUNG-GT-i8000V/BUII1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7281.Samsung GT-i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-i8000Orange/BVIJ1 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7282.Samsung GT-i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-i8000Orange/BVIJ1 (Windows CE; Opera Mobi; U; en) Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7283.Samsung GT-i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) SAMSUNG-GT-i8000V/BUII1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7284.Samsung GT-i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-i8000Orange/BVIJ1 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7285.Samsung GT-i8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-i8000Orange/BVIJ1 (Windows CE; Opera Mobi; U; en) Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7286.Samsung GT-I8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I8320-Vodafone/I8320BUIH1Linux/X2/R1 Opera/9.6 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7287.Samsung GT-I8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I8320-Vodafone/I8320BUIH1Linux/X2/R1 Opera/9.6 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7288.Samsung GT-I8510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I8510/XXHH6 Profile/MIDP -2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7289.Samsung GT-I8510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I8510/XXHJ2 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7290.Samsung GT-I8510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I8510/XXHHa; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7291.Samsung GT-I8510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I8510/XXHH7; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7292.Samsung GT-I8510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I8510/XXHJ3; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7293.Samsung GT-I8510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I8510/XXHH6 Profile/MIDP -2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7294.Samsung GT-I8510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I8510/XXHJ2 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7295.Samsung GT-I8510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I8510/XXHHa; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7296.Samsung GT-I8510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I8510/XXHH7; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7297.Samsung GT-I8510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I8510/XXHJ3; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7298.Samsung GT-i8700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; GT-i8700)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7299.Samsung GT-i8700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; GT-i8700)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7300.Samsung GT-I8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Samsung/I8910-ORANGE/BVORAIE2; Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7301.Samsung GT-I8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Samsung/I8910; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7302.Samsung GT-I8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Samsung/I8910-ORANGE/BVORAIE4; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7303.Samsung GT-I8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Samsung/I8910-ORANGE/BVORAIE2; Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7304.Samsung GT-I8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Samsung/I8910; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7305.Samsung GT-I8910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Samsung/I8910-ORANGE/BVORAIE4; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7306.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-tw; GT-I9000 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7307.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; GT-I9000) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7308.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; GT-I9000 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7309.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; GT-I9000 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7310.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; GT-I9000M Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7311.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; GT-I9000 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7312.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; fr-fr; GT-I9000 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7313.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; fr-fr; SAMSUNG GT-I9100/I9100BUKC2 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7314.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; es-es; GT-I9000 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7315.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; GT-I9000 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7316.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-tw; GT-I9000 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7317.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; GT-I9000) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7318.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; GT-I9000 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7319.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; GT-I9000 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7320.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; GT-I9000M Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7321.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; GT-I9000 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7322.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; fr-fr; GT-I9000 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7323.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; fr-fr; SAMSUNG GT-I9100/I9100BUKC2 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7324.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; es-es; GT-I9000 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7325.Samsung GT-I9000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; GT-I9000 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7326.Samsung GT-I9000B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; GT-I9000B Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7327.Samsung GT-I9000B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; GT-I9000B Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7328.Samsung GT-I9001',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; de-de; GT-I9001 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7329.Samsung GT-I9001',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; SAMSUNG GT-I9001/I9001BUKE5 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7330.Samsung GT-I9001',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; de-de; GT-I9001 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7331.Samsung GT-I9001',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; es-es; SAMSUNG GT-I9001/I9001BUKE5 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7332.Samsung GT-I9003',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ru-ru; GT-I9003 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7333.Samsung GT-I9003',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ru-ru; GT-I9003 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7334.Samsung GT-I9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; en-us; GT-I9100 Build/GRH78) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7335.Samsung GT-I9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; es-es; SAMSUNG GT-I9100/I9100BUKB2 Build/GRH78) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 MobileSafari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7336.Samsung GT-I9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; en-us; GT-I9100 Build/GRH78) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7337.Samsung GT-I9100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; es-es; SAMSUNG GT-I9100/I9100BUKB2 Build/GRH78) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 MobileSafari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7338.Samsung GT-M3310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M3310/M3310XXIH1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.102 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7339.Samsung GT-M3310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M3310/M3310XXIH1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.102 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7340.Samsung GT-M3318C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M3318C/1.0 RTK-E/1.0 DF/1.0 Release/07.01.2008 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7341.Samsung GT-M3318C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M3318C/1.0 RTK-E/1.0 DF/1.0 Release/07.01.2008 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7342.Samsung GT-M3710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M3710/M3710XEJB1 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7343.Samsung GT-M3710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M3710/M3710XEJB1 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7344.Samsung GT-M5650U',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M5650U/M5650UZCJF1 SHP/VPP/R5 Jasmine/1.0 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7345.Samsung GT-M5650U',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M5650U/M5650UZCJF1 SHP/VPP/R5 Jasmine/1.0 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7346.Samsung GT-M7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M7500/M7500ACHK1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration /CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7347.Samsung GT-M7500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M7500/M7500ACHK1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration /CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7348.Samsung GT-M7600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M7600/M7600XBID2 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7349.Samsung GT-M7600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M7600-ORANGE/M7600BVIE1 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7350.Samsung GT-M7600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M7600L/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7351.Samsung GT-M7600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M7600/M7600XBID2 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7352.Samsung GT-M7600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M7600-ORANGE/M7600BVIE1 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7353.Samsung GT-M7600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M7600L/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7354.Samsung GT-M8920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8920/M8920XXIG2 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7355.Samsung GT-M8920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8920/M8920XXIG2 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7356.Samsung GT-S3060',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3060/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7357.Samsung GT-S3060',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-C3060/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7358.Samsung GT-S3310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3310/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7359.Samsung GT-S3310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3310/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7360.Samsung GT-S3350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3350/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7361.Samsung GT-S3350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3350/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7362.Samsung GT-S3353',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3353/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7363.Samsung GT-S3353',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3353/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7364.Samsung GT-S3370B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AMSUNG-GT-S3370B/S3370DO SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7365.Samsung GT-S3370B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AMSUNG-GT-S3370B/S3370DO SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7366.Samsung GT-S3370L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3370L/1.0 SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7367.Samsung GT-S3370L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3370L/1.0 SHP/VPP/R5 Dolfin/1.5 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-N' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7368.Samsung GT-S3501C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3501C/1.0 Release/09.10.2009 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7369.Samsung GT-S3501C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3501C/1.0 Release/09.10.2009 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7370.Samsung GT-S3550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3550/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7371.Samsung GT-S3550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3550/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7372.Samsung GT-S3550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3550-Vodafone/S3550BUJI1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7373.Samsung GT-S3550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3550/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7374.Samsung GT-S3550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3550/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7375.Samsung GT-S3550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3550-Vodafone/S3550BUJI1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7376.Samsung GT-S3601C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3601C_CMCC/1.0 RTK-E/1.0 DF/1.0 Release/01.09.2009 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7377.Samsung GT-S3601C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3601C_CMCC/1.0 RTK-E/1.0 DF/1.0 Release/01.09.2009 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7378.Samsung GT-S3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SMMSAMSUNG-GT-S3650/S3650ACIG1 SHP/VPP/R5 Jasmine/1.0 Nextreaming -MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7379.Samsung GT-S3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650/S3650AMII2 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7380.Samsung GT-S3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650-ORANGE/S3650BVII6 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7381.Samsung GT-S3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7382.Samsung GT-S3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650/S3650AAII3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7383.Samsung GT-S3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SMMSAMSUNG-GT-S3650/S3650ACIG1 SHP/VPP/R5 Jasmine/1.0 Nextreaming -MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7384.Samsung GT-S3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650/S3650AMII2 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7385.Samsung GT-S3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650-ORANGE/S3650BVII6 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7386.Samsung GT-S3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7387.Samsung GT-S3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650/S3650AAII3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7388.Samsung GT-S3650C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650C/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7389.Samsung GT-S3650C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650C/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7390.Samsung GT-S3650H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650H/1.0 SHP/VPP/R5 NetFront/3.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7391.Samsung GT-S3650H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650H/1.0 SHP/VPP/R5 NetFront/3.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7392.Samsung GT-S3650W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650W/S3650WXEJA2 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7393.Samsung GT-S3650W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3650W/S3650WXEJA2 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7394.Samsung GT-S3653W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3653W/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7395.Samsung GT-S3653W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3653W/S3653WJPJC4 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7396.Samsung GT-S3653W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3653W/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7397.Samsung GT-S3653W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3653W/S3653WJPJC4 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7398.Samsung GT-S3850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3850/1.0 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7399.Samsung GT-S3850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3850/1.0 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7400.Samsung GT-S5050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S5050/S5050XEIF1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7401.Samsung GT-S5050',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S5050/S5050XEIF1 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7402.Samsung GT-S5150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5150/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7403.Samsung GT-S5150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5150/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7404.Samsung GT-S5200C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5200C/1.0 RTK-E/1.0 DF/1.0 Release/02.01.2009 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7405.Samsung GT-S5200C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5200C/1.0 RTK-E/1.0 DF/1.0 Release/02.01.2009 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7406.Samsung GT-S5210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5210/1.0 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7407.Samsung GT-S5210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5210/1.0 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7408.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S5230XBIE8 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7409.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S5230BXIE1 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7410.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S5230PIIF2 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7411.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230-ORANGE/S5230BVIF1 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7412.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230C/1.0 SHP/R5 Release/02.01.2009 Browser/NetFront3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7413.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S5230ADIF1 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7414.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/1.0 SHP/VPP/R5 Jasmine/0.8 NexPlayer/2.12 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7415.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S5230XPIK2 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7416.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S523MXIIL4 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7417.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S5230XBIE8 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7418.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S5230BXIE1 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7419.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S5230PIIF2 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7420.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230-ORANGE/S5230BVIF1 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7421.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230C/1.0 SHP/R5 Release/02.01.2009 Browser/NetFront3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7422.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S5230ADIF1 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7423.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/1.0 SHP/VPP/R5 Jasmine/0.8 NexPlayer/2.12 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7424.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S5230XPIK2 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7425.Samsung GT-S5230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230/S523MXIIL4 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7426.Samsung GT-S5230G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230G/S523GBRJA2 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7427.Samsung GT-S5230G',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230G/S523GBRJA2 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7428.Samsung GT-S5230N',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230N/S5230NBGJD3 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7429.Samsung GT-S5230N',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5230N/S5230NBGJD3 SHP/VPP/R5 Jasmine/0.8 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7430.Samsung GT-S5233T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233T/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7431.Samsung GT-S5233T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233T/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7432.Samsung GT-S5233T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233T/1.0 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7433.Samsung GT-S5233T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5233T/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7434.Samsung GT-S5250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S5250/S5250AIJI3; U; Bada/1.0; it-it) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7435.Samsung GT-S5250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S5250/S5250XXJHE; U; Bada/1.0; it-it) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7436.Samsung GT-S5250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S5250/S5250AIJI3; U; Bada/1.0; it-it) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7437.Samsung GT-S5250',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S5250/S5250XXJHE; U; Bada/1.0; it-it) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7438.Samsung GT-S5253',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5253/1.0 Bada/1.0 AppleWebKit/533.1 Dolfin/2.0 Mobile NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7439.Samsung GT-S5253',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5253/1.0 Bada/1.0 AppleWebKit/533.1 Dolfin/2.0 Mobile NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7440.Samsung GT-S5260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5260-VODAFONE/S5260BUKA1 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7441.Samsung GT-S5260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5260/1.0 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7442.Samsung GT-S5260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5260-VODAFONE/S5260BUKA1 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7443.Samsung GT-S5260',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5260/1.0 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7444.Samsung GT-S5263',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5263/S5263DDJL1 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7445.Samsung GT-S5263',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5263/S5263DDJL1 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7446.Samsung GT-S5330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S5330/1.0; U; Bada/1.0; en-us) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7447.Samsung GT-S5330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S5330/1.0; U; Bada/1.0; en-us) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7448.Samsung GT-S5333',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S5333/S5333DDJI5; U; Bada/1.0; en-us) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7449.Samsung GT-S5333',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S5333/S5333DDJI5; U; Bada/1.0; en-us) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7450.Samsung GT-S5530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5530/S5530XXJE5 SHP/VPP/R5 Dolfin/2.0 QTV/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7451.Samsung GT-S5530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5530/S5530XXJE5 SHP/VPP/R5 Dolfin/2.0 QTV/5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7452.Samsung GT-S5550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5550/1.0 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7453.Samsung GT-S5550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5550/1.0 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7454.Samsung GT-S5560i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5560i/1.0 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7455.Samsung GT-S5560i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5560i/1.0 SHP/VPP/R5 Dolfin/2.0 NexPlayer/3.0 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7456.Samsung GT-S5570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2 en-gb GT-S5570 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7457.Samsung GT-S5570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; de-ch; GT-S5570 Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7458.Samsung GT-S5570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2 en-gb GT-S5570 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7459.Samsung GT-S5570',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; de-ch; GT-S5570 Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7460.Samsung GT-S5570B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2.1 en-gb GT-S5570B Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7461.Samsung GT-S5570B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2.1 en-gb GT-S5570B Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7462.Samsung GT-S5570L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2 en-gb GT-S5570L Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7463.Samsung GT-S5570L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2 en-gb GT-S5570L Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7464.Samsung GT-S5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5600-Bouygues/S5600AGID3 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7465.Samsung GT-S5600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5600-Bouygues/S5600AGID3 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7466.Samsung GT-S5620L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5620B/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7467.Samsung GT-S5620L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5620L/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7468.Samsung GT-S5620L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5620B/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7469.Samsung GT-S5620L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5620L/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7470.Samsung GT-S5628',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5628/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7471.Samsung GT-S5628',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5628/1.0 SHP/VPP/R5 Dolfin/1.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7472.Samsung GT-S5630C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5630C_CMCC/1.0 RTK-E/1.0 SHP/VPP/R5 Release/17.08.2008 Browser/NetFront3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7473.Samsung GT-S5630C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5630C_CMCC/1.0 RTK-E/1.0 SHP/VPP/R5 Release/17.08.2008 Browser/NetFront3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7474.Samsung GT-S5660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; GT-S5660 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7475.Samsung GT-S5660',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; GT-S5660 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7476.Samsung GT-S5670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ar-ae; GT-S5670 Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7477.Samsung GT-S5670',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ar-ae; GT-S5670 Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7478.Samsung GT-S5750E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5750E/1.0 SHP/VPP/R5 Dolfin/2.0 SMM-MMS/1.2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7479.Samsung GT-S5750E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S5750E/1.0 SHP/VPP/R5 Dolfin/2.0 SMM-MMS/1.2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7480.Samsung GT-S5780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S5780/S5780XXKE3; U; Bada/1.1; it-it) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7481.Samsung GT-S5780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S5780/S5780XXKE3; U; Bada/1.1; it-it) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7482.Samsung GT-S5830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2.1 en-gb GT-S5830 Build/FROYO) AppleWebKit/533.1(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7483.Samsung GT-S5830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; GT-S5830 Build/FROYO) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7484.Samsung GT-S5830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux U Android 2.2.1 en-gb GT-S5830 Build/FROYO) AppleWebKit/533.1(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7485.Samsung GT-S5830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; GT-S5830 Build/FROYO) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7486.Samsung GT-S5830L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-us; GT-S5830L Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7487.Samsung GT-S5830L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-us; GT-S5830L Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7488.Samsung GT-S6700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S6700T/1.0 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7489.Samsung GT-S6700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S6700T/1.0 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7490.Samsung GT-S6700C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S6700C/1.0 SHP/R5 Release/02.01.2009 Browser/NetFront3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7491.Samsung GT-S6700C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S6700C/1.0 SHP/R5 Release/02.01.2009 Browser/NetFront3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7492.Samsung GT-S7070C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S7070C/1.0 SHP/VPP/R5 Dolfin/1.0 SMM-MMS/1.2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7493.Samsung GT-S7070C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S7070C/1.0 SHP/VPP/R5 Dolfin/1.0 SMM-MMS/1.2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7494.Samsung GT-S7220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S7220/S7220ACIA1 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7495.Samsung GT-S7220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S7220/S7220ACIA1 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7496.Samsung GT-S7230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S7230/1.0; U; Bada/1.0; en-us) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7497.Samsung GT-S7230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S7230/1.0; U; Bada/1.0; en-us) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7498.Samsung GT-S7230E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S7230E-VODAFONE/S7230EBUJJ2; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7499.Samsung GT-S7230E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S7230E-VODAFONE/S723EBUJI5; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7500.Samsung GT-S7230E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S7230E-VODAFONE/S723EBUKB1; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7501.Samsung GT-S7230E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S7230E-ORANGE/S723EBVKB1; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7502.Samsung GT-S7230E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S7230E-VODAFONE/S7230EBUJJ2; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7503.Samsung GT-S7230E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S7230E-VODAFONE/S723EBUJI5; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7504.Samsung GT-S7230E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S7230E-VODAFONE/S723EBUKB1; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7505.Samsung GT-S7230E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S7230E-ORANGE/S723EBVKB1; U; Bada/1.0; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WQVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7506.Samsung GT-S7233E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S7233E/S723EDDJJ3 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7507.Samsung GT-S7233E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S7233E/S723EDDJJ3 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7508.Samsung GT-S7330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S7330/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7509.Samsung GT-S7330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S7330/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7510.Samsung GT-S7350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S7350/S7350XBID1 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7511.Samsung GT-S7350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S7350/S7350XBID1 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7512.Samsung GT-S8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8000/S8000XBIF4 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7513.Samsung GT-S8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8000-ORANGE/S8000BVIF5 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7514.Samsung GT-S8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8000H/1.0 SHP/R5 NetFront/3.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7515.Samsung GT-S8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8000/S8000XBIF4 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7516.Samsung GT-S8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8000-ORANGE/S8000BVIF5 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7517.Samsung GT-S8000',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8000H/1.0 SHP/R5 NetFront/3.5 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7518.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7519.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300-ORANGE/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7520.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300-Vodafone/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7521.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300-Vodafone/S8300BUIC6 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7522.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300/S8300BOIE3 SHP/VPP/R5 Opera/9.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7523.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300-Bouygues/S8300AGIC1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7524.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7525.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300-ORANGE/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7526.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300-Vodafone/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7527.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300-Vodafone/S8300BUIC6 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7528.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300/S8300BOIE3 SHP/VPP/R5 Opera/9.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7529.Samsung GT-S8300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300-Bouygues/S8300AGIC1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7530.Samsung GT-S8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8530-VODAFONE/S8530BUJJ4; U; Bada/1.2; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.2 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7531.Samsung GT-S8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8530-VODAFONE/S8530BUJK3; U; Bada/1.2; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.2 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7532.Samsung GT-S8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8530-VODAFONE/S8530BUJJ4; U; Bada/1.2; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.2 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7533.Samsung GT-S8530',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8530-VODAFONE/S8530BUJK3; U; Bada/1.2; es-es) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.2 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7534.Samsung I7110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I7110/XXHI5 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7535.Samsung I7110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/I7110/XXHI5 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7536.Samsung M2710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M2710/M2710DDIF3 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7537.Samsung M2710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M2710C/1.0 RTK-E/1.0 DF/1.0 Release/07.01.2008 Browser/NetFront3.4 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7538.Samsung M2710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M2710/M2710DDIF3 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7539.Samsung M2710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M2710C/1.0 RTK-E/1.0 DF/1.0 Release/07.01.2008 Browser/NetFront3.4 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7540.Samsung M3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M3200/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7541.Samsung M3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M3200/M3200BXHK1 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7542.Samsung M3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M3200/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7543.Samsung M3200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M3200/M3200BXHK1 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7544.Samsung M3510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M3510/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7545.Samsung M3510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M3510/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7546.Samsung M7603',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M7603/M7603JHIE1 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7547.Samsung M7603',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M7603/M7603JHIE1 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7548.Samsung M850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.70 (BREW 4.0.3; U; en; Samsung; Opera Mobi; Presto/2.2.1/INT) Sprint M850 SprintTitan/OSGi-4.1 Profile/MIDP-2.1 Configuration/CDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7549.Samsung M850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.70 (BREW 4.0.3; U; en; Samsung; Opera Mobi; Presto/2.2.1/INT) Sprint M850 SprintTitan/OSGi-4.1 Profile/MIDP-2.1 Configuration/CDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7550.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800ADHJ4 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7551.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800-ORANGE/M8800BVHK2 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7552.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800BDHK3 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7553.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800XXHK4 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7554.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800ADHK2 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7555.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800PIIA2 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7556.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800BOHJ5 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7557.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M880BXXIC1 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7558.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800ADHJ4 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7559.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800-ORANGE/M8800BVHK2 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7560.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800BDHK3 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7561.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800XXHK4 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7562.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800ADHK2 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7563.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800PIIA2 SHP/VPP/R5 NetFront/3.5 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7564.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M8800BOHJ5 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7565.Samsung M8800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-M8800/M880BXXIC1 SHP/VPP/R5 Jasmine/0.8 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7566.Samsung M8800L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M8800L/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.9 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7567.Samsung M8800L',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-M8800L/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.9 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7568.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; OMNIA7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7569.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; SGH-i917R)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7570.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; SGH-i917)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7571.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; OMNIA7; Orange)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7572.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; GT-i8700)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7573.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WindowsPhoneMMS/1.0 WindowsPhoneOS/7.0-7355 SAMSUNG-OMNIA7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7574.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; OMNIA7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7575.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; SGH-i917R)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7576.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; SGH-i917)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7577.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; OMNIA7; Orange)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7578.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; GT-i8700)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7579.Samsung Omnia 7',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WindowsPhoneMMS/1.0 WindowsPhoneOS/7.0-7355 SAMSUNG-OMNIA7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7580.Samsung R450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r450 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7581.Samsung R450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sam-r450 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7582.Samsung R450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r450 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7583.Samsung R450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sam-r450 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7584.Samsung R580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r580, Myriad/6.2.3.8 (GUI) ,HTML 4.0; XHTML 1.0, WAP 2.0, Deck 40960,' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7585.Samsung R580',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r580, Myriad/6.2.3.8 (GUI) ,HTML 4.0; XHTML 1.0, WAP 2.0, Deck 40960,' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7586.Samsung R631',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Polaris 6.2; Brew 3.1.5; en)/240X320 Samsung sam-r631' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7587.Samsung R631',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Polaris 6.2; Brew 3.1.5; en)/240X320 Samsung sam-r631' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7588.Samsung R810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r810 Netfront/3.4 Mozilla/5.0 like Gecko/20060426' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7589.Samsung R810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samr810' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7590.Samsung R810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r810 NetFront/3.5 Mozilla/5.0 like Gecko/20060426' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7591.Samsung R810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samr810 Netfront/3.4 Mozilla/5.0 like Gecko/20060426' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7592.Samsung R810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r810 Netfront/3.4 Mozilla/5.0 like Gecko/20060426' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7593.Samsung R810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samr810' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7594.Samsung R810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r810 NetFront/3.5 Mozilla/5.0 like Gecko/20060426' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7595.Samsung R810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samr810 Netfront/3.4 Mozilla/5.0 like Gecko/20060426' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7596.Samsung R850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r850 NetFront/3.5 Mozilla/5.0 like Gecko/20060531' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7597.Samsung R850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r850 NetFront/3.5 Mozilla/5.0 like Gecko/20060531' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7598.Samsung R860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (rv:1.3; BREW 3.1.5; en)/400x240 sam-r860 like Gecko/20080531 NetFront/3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7599.Samsung R860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (rv:1.3; BREW 3.1.5; en)/400x240 sam-r860 like Gecko/20080531 NetFront/3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7600.Samsung S179',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-S179 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7601.Samsung S179',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-S179 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7602.Samsung S3110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3110/S3110XFIC4 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7603.Samsung S3110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3110/S3110XFIC4 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7604.Samsung S3110C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3110C/1.0 RTK-E/1.0 DF/1.0 Release/07.01.2008 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7605.Samsung S3110C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3110C/1.0 RTK-E/1.0 DF/1.0 Release/07.01.2008 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7606.Samsung S3500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3500/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7607.Samsung S3500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3500/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7608.Samsung S3500C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3500C/1.0 Release/10.23.2008 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7609.Samsung S3500C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3500C/1.0 Release/10.23.2008 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7610.Samsung S3600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3600/S3600XEHH4 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7611.Samsung S3600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S3600/S3600XEHH4 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7612.Samsung S3710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3710/1.0 RTK-E/1.0 SHP/VPP/R5 Release/07.09.2010 Browser/NetFront3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7613.Samsung S3710',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S3710/1.0 RTK-E/1.0 SHP/VPP/R5 Release/07.09.2010 Browser/NetFront3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7614.Samsung S5200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S5200/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7615.Samsung S5200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S5200/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7616.Samsung S5320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S5320/S5320XXIE7 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7617.Samsung S5320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S5320/S5320XXIE7 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7618.Samsung S8003',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8003/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7619.Samsung S8003',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8003/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7620.Samsung S8003',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S8003/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7621.Samsung S8003',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8003/1.0 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7622.Samsung S8300T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300T/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7623.Samsung S8300T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S8300T/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7624.Samsung S9402',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S9402/S9402XEIA2 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7625.Samsung S9402',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-S9402/S9402XEIA2 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7626.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.A.2.184) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7627.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonSO-01C Build/3.0.1.F.0.123) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7628.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonSO-01C Build/3.0.1.F.0.126) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7629.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; SO-01C Build/3.0.D.2.79) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 (Shinbun Browser)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7630.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonLT15a Build/3.0.1.A.0.126) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7631.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonLT15i Build/3.0.1.A.0.148) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7632.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; zh-tw; SonyEricssonLT15i Build/3.0.1.A.0.145) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7633.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01C Build/CyanogenMod 6.1.3 6.1.3 v0.6.1) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7634.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; LT15i Build/3.0.A.2.181) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7635.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; LT15i Build/3.0.1.A.0.145) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7636.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonLT15i Build/4.0.A.2.310) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7637.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.A.2.184) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7638.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonSO-01C Build/3.0.1.F.0.123) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7639.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonSO-01C Build/3.0.1.F.0.126) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7640.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; SO-01C Build/3.0.D.2.79) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 (Shinbun Browser)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7641.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonLT15a Build/3.0.1.A.0.126) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7642.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonLT15i Build/3.0.1.A.0.148) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7643.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; zh-tw; SonyEricssonLT15i Build/3.0.1.A.0.145) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7644.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01C Build/CyanogenMod 6.1.3 6.1.3 v0.6.1) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7645.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; LT15i Build/3.0.A.2.181) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7646.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; LT15i Build/3.0.1.A.0.145) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7647.Samsung SC-01C',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonLT15i Build/4.0.A.2.310) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7648.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; SC-02B Build/FROYO) AppleWebKit/533.1(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7649.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SC-02B Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 (Shinbun Browser)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7650.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SC-02B Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7651.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja_jp; SC-02B Build/FROYO) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7652.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SCH-I500 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7653.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SCH-I510 4G Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7654.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SGH-T959V Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7655.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; SC-02B Build/FROYO) AppleWebKit/533.1(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7656.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SC-02B Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 (Shinbun Browser)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7657.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SC-02B Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7658.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja_jp; SC-02B Build/FROYO) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7659.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SCH-I500 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7660.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SCH-I510 4G Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7661.Samsung SC-02B',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SGH-T959V Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7662.Samsung SCH F339',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-F339/ POLARIS/6.15 (GUI; compatible; UP.Browser)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7663.Samsung SCH F339',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-F339/ POLARIS/6.15 (GUI; compatible; UP.Browser)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7664.Samsung SCH i220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) SAMSUNG-SCH-i220' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7665.Samsung SCH i220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) SAMSUNG-SCH-i220' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7666.Samsung SCH R100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SCHR100 Infraware-Polaris/6.1 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7667.Samsung SCH R100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r100 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7668.Samsung SCH R100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SCHR100 Infraware-Polaris/6.1 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7669.Samsung SCH R100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r100 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7670.Samsung SCH R310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r310 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7671.Samsung SCH R310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r310 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7672.Samsung SCH R350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r350' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7673.Samsung SCH R350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r350 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7674.Samsung SCH R350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r350' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7675.Samsung SCH R350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r350 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7676.Samsung SCH R351',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SCHR351 Infraware-Polaris/6.0 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7677.Samsung SCH R351',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r351 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7678.Samsung SCH R351',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SCHR351 Infraware-Polaris/6.0 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7679.Samsung SCH R351',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r351 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7680.Samsung SCH R550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r550 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7681.Samsung SCH R550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAM-R550 UP.BROWSER/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7682.Samsung SCH R550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r550 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7683.Samsung SCH R550',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAM-R550 UP.BROWSER/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7684.Samsung SCH R561',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SCHR561 Infraware-Polaris/6.0 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7685.Samsung SCH R561',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SCHR561 Infraware-Polaris/6.0 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7686.Samsung SCH S379',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAM-S379/ Embider/5.30 (GUI; compatible)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7687.Samsung SCH S379',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAM-S379/ Embider/5.30 (GUI; compatible)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7688.Samsung SCH U350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U350/1.0 NetFront/3.0.22.2.18 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7689.Samsung SCH U350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U350 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7690.Samsung SCH U350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu350' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7691.Samsung SCH U350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'RocketBrowser/Sony 3.0.0 (U350)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7692.Samsung SCH U350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U350/1.0 NetFront/3.0.22.2.18 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7693.Samsung SCH U350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U350 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7694.Samsung SCH U350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu350' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7695.Samsung SCH U350',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'RocketBrowser/Sony 3.0.0 (U350)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7696.Samsung SCH U440',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SCHU440 Infraware-Polaris/6.0 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7697.Samsung SCH U440',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SCHU440 Infraware-Polaris/6.0 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7698.Samsung SCH U450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U450/1.0 NetFront/3.0.22.2.20 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7699.Samsung SCH U450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-u450 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7700.Samsung SCH U450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu450' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7701.Samsung SCH U450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U450/1.0 NetFront/3.0.22.2.20 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7702.Samsung SCH U450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-u450 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7703.Samsung SCH U450',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu450' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7704.Samsung SCH U490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U490/1.0 NetFront/3.0.22.2.16 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7705.Samsung SCH U490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu490' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7706.Samsung SCH U490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U490/1.0 NetFront/3.0.22.2.16 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7707.Samsung SCH U490',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu490' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7708.Samsung SCH U640',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U640/1.0 NetFront/3.0.22.1.19 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7709.Samsung SCH U640',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu640' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7710.Samsung SCH U640',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U640/1.0 NetFront/3.0.22.1.19 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7711.Samsung SCH U640',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu640' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7712.Samsung SCH U650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U650/1.0 NetFront/3.0.22.2.15 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7713.Samsung SCH U650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu650' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7714.Samsung SCH U650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U650/1.0 NetFront/3.0.22.2.15 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7715.Samsung SCH U650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu650' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7716.Samsung SCH U750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U750L/1.0 NetFront/3.0.22.2.17 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7717.Samsung SCH U750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U750P/1.0 NetFront/3.0.22.2.17 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7718.Samsung SCH U750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu750v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7719.Samsung SCH U750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U750L/1.0 NetFront/3.0.22.2.17 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7720.Samsung SCH U750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U750P/1.0 NetFront/3.0.22.2.17 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7721.Samsung SCH U750',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu750v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7722.Samsung SCH U810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U810/1.0 NetFront/3.0.22.1.14 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7723.Samsung SCH U810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U810/1.0 NetFront/3.0.22.1.14 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7724.Samsung SCH U820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(compatible;Polaris 6.2;Brew 3.1.5;U;en)/400x240 Samsung SCH-U820' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7725.Samsung SCH U820',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(compatible;Polaris 6.2;Brew 3.1.5;U;en)/400x240 Samsung SCH-U820' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7726.Samsung SCH U960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; BREW 3.1.5; en )/800x480 Samsung SCH-U960' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7727.Samsung SCH U960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu960' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7728.Samsung SCH U960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; BREW 3.1.5; en )/800x480 Samsung SCH-U960' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7729.Samsung SCH U960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu960' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7730.Samsung SCH W399',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-W339/ Embider/5.10.TI (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7731.Samsung SCH W399',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-W339/ Embider/5.10.TI (GUI)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7732.Samsung SCH-E159',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-E159/ UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7733.Samsung SCH-E159',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-E159/ UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7734.Samsung SCH-F519',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-F519/ UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7735.Samsung SCH-F519',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-F519/ UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7736.Samsung SCH-F679',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-F679/ UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7737.Samsung SCH-F679',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-F679/ UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7738.Samsung SCH-I100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; us-usa; SCH-I100 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7739.Samsung SCH-I100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; us-usa; SCH-I100 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7740.Samsung SCH-I400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SCH-I400 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7741.Samsung SCH-I400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SCH-I400 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7742.Samsung SCH-I500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SCH-I500 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7743.Samsung SCH-I500',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SCH-I500 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7744.Samsung SCH-i760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) VZW:SCH-i760 PPC 240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7745.Samsung SCH-i760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) VZW:SCH-i760 PPC 240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7746.Samsung SCH-i760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) VZW:SCH-i760 PPC 240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7747.Samsung SCH-i760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) VZW:SCH-i760 PPC 240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7748.Samsung SCH-I770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) VZW:SCH-i770 PPC 320x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7749.Samsung SCH-I770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) VZW:SCH-i770 PPC 320x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7750.Samsung SCH-i909',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SCH-i909 Build/i909CTDF17) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7751.Samsung SCH-i909',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SCH-i909 Build/i909CTDF17) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7752.Samsung SCH-I910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 240x400) Opera VZW:SCH-i910' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7753.Samsung SCH-I910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) VZW:SCH-i910 PPC 240x400' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7754.Samsung SCH-I910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Samsung-SCHI910 BMC PPC 240x400' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7755.Samsung SCH-I910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sami910v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7756.Samsung SCH-I910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 240x400) Opera VZW:SCH-i910' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7757.Samsung SCH-I910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) VZW:SCH-i910 PPC 240x400' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7758.Samsung SCH-I910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Samsung-SCHI910 BMC PPC 240x400' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7759.Samsung SCH-I910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sami910v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7760.Samsung SCH-M569',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAM-M569/ UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7761.Samsung SCH-M569',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAM-M569/ UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7762.Samsung SCH-R355',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'wssamr355[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7763.Samsung SCH-R355',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'r355[TF268435459012508057014960013608151343] UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7764.Samsung SCH-R355',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'wssamr355[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7765.Samsung SCH-R355',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'r355[TF268435459012508057014960013608151343] UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7766.Samsung SCH-R360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r360 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7767.Samsung SCH-R360',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r360 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7768.Samsung SCH-R451',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'r451[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7769.Samsung SCH-R451',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'r451[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]UP.Browser/6.2.3.8 (GUI)MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7770.Samsung SCH-R451',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'r451[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7771.Samsung SCH-R451',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'r451[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]UP.Browser/6.2.3.8 (GUI)MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7772.Samsung SCH-R460',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r460 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7773.Samsung SCH-R460',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r460 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7774.Samsung SCH-R520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r520 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7775.Samsung SCH-R520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sam-r520 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7776.Samsung SCH-R610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SCHR610 AU-OBIGO/Q04C1-1.22 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7777.Samsung SCH-R610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SCHR610 AU-OBIGO/Q04C1-1.22 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7778.Samsung SCH-R800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 R800 like Gecko/20060426 Netfront/3.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7779.Samsung SCH-R800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 R800 like Gecko/20060426 Netfront/3.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7780.Samsung SCH-R880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SCH-R880 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7781.Samsung SCH-R880',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SCH-R880 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7782.Samsung SCH-R900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 6.0; BREW 4.0.3; en )/800x480 Samsung sam-r900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7783.Samsung SCH-R900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 6.0; BREW 4.0.3; en )/800x480 Samsung sam-r900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7784.Samsung SCH-R910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SCH-R910 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 AndroidApp/TFD' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7785.Samsung SCH-R910',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SCH-R910 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 AndroidApp/TFD' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7786.Samsung SCH-U410T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U410T/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7787.Samsung SCH-U410T',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U410T/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7788.Samsung SCH-U430',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U430/1.0 NetFront/3.0.22.2.12 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7789.Samsung SCH-U430',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu430' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7790.Samsung SCH-U430',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U430/1.0 NetFront/3.0.22.2.12 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7791.Samsung SCH-U430',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu430' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7792.Samsung SCH-U470',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu470' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7793.Samsung SCH-U470',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu470' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7794.Samsung SCH-U510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U510 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7795.Samsung SCH-U510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U510/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7796.Samsung SCH-U510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U510 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7797.Samsung SCH-U510',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-U510/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7798.Samsung SCH-U940',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 440x240 Samsung SCH-U940 NetFront/3.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7799.Samsung SCH-U940',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu940' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7800.Samsung SCH-U940',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 440x240 Samsung SCH-U940 NetFront/3.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7801.Samsung SCH-U940',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'samu940' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7802.Samsung SCH-W569',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-W569 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7803.Samsung SCH-W569',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-W569 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7804.Samsung SCH-W619',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-W619 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7805.Samsung SCH-W619',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SCH-W619 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7806.Samsung SGH A687',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A687/A687UCJB4; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.16479; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7807.Samsung SGH A687',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A687/A687UCJB4; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.16479; U; en-US) Opera 9.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7808.Samsung SGH A697',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A697/A697UCJB2 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7809.Samsung SGH A697',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A697/A697UCJB2 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7810.Samsung SGH A766',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A766/A766UXIA4 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7811.Samsung SGH A766',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A766/A766UXIA4 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7812.Samsung SGH A767',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A767/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7813.Samsung SGH A767',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A767/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7814.Samsung SGH A867',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7815.Samsung SGH A867',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7816.Samsung SGH A886',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A886/A886UXIJ9 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7817.Samsung SGH A886',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A886/A886UXIJ9 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7818.Samsung SGH A887',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A887/A887UCIFA SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7819.Samsung SGH A887',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A887/A887UCIFA SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7820.Samsung SGH B110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-B110L/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7821.Samsung SGH B110',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-B110L/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7822.Samsung SGH B120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB120/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7823.Samsung SGH B120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB120/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7824.Samsung SGH B300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB300/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7825.Samsung SGH B300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB300/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7826.Samsung SGH B310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB310/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7827.Samsung SGH B310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB310/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7828.Samsung SGH BC01',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung SGH-BC01' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7829.Samsung SGH BC01',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung SGH-BC01' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7830.Samsung SGH C270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C270/C270BAID4 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7831.Samsung SGH C270',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C270/C270BAID4 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7832.Samsung SGH C276',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C276L/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7833.Samsung SGH C276',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C276L/1.0 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7834.Samsung SGH C280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C280/C280BNIE1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7835.Samsung SGH C280',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C280/C280BNIE1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7836.Samsung SGH C320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHC320/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7837.Samsung SGH C320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHC320/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7838.Samsung SGH D730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHD730' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7839.Samsung SGH D730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHD730 SymbianOS/7.0s Series60/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7840.Samsung SGH D730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D730' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7841.Samsung SGH D730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHD730' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7842.Samsung SGH D730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHD730 SymbianOS/7.0s Series60/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7843.Samsung SGH D730',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D730' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7844.Samsung SGH D988',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D988/1.0 RTK-E/1.0 DF/1.0 Release/08.17.2007 Browser/Openwave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1/*MzU0NDAxMDIwNzA1NTA3 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7845.Samsung SGH D988',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D988/1.0 RTK-E/1.0 DF/1.0 Release/08.17.2007 Browser/Openwave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1/*MzU0NDAxMDIwNzA1NTA3 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7846.Samsung SGH E250i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E250i/E250iJBIB2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7847.Samsung SGH E250i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E250i/E250iXEIA5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7848.Samsung SGH E250i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-SGH-E250i/BAIC2/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7849.Samsung SGH E250i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E250i/E250iJBIB2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7850.Samsung SGH E250i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E250i/E250iXEIA5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7851.Samsung SGH E250i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-SGH-E250i/BAIC2/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7852.Samsung SGH E380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7853.Samsung SGH E380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E380/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7854.Samsung SGH E380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E380/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7855.Samsung SGH E380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7856.Samsung SGH E380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E380/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7857.Samsung SGH E380',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E380/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7858.Samsung SGH F210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHF210' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7859.Samsung SGH F210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHF210' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7860.Samsung SGH F268',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F268/1.0 RTK-E/1.0 DF/1.0 Release/07.04.2007 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1/*MzU1MDY3MDIwMDYyNzI1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7861.Samsung SGH F268',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F268/1.0 RTK-E/1.0 DF/1.0 Release/07.04.2007 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1/*MzU1MDY3MDIwMDYyNzI1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7862.Samsung SGH F480i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480I-Vodafone/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7863.Samsung SGH F480i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480i/JBIG1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7864.Samsung SGH F480i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480I-Bouygues/AGII1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7865.Samsung SGH F480i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480I-Bouygues/AGIG6 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7866.Samsung SGH F480i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480I-ORANGE/AFIJ1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7867.Samsung SGH F480i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480I-Vodafone/1.0 SHP/VPP/R5 NetFront/3.5 NexPlayer/2.9.1 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7868.Samsung SGH F480i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480i/JBIG1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7869.Samsung SGH F480i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480I-Bouygues/AGII1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7870.Samsung SGH F480i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480I-Bouygues/AGIG6 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7871.Samsung SGH F480i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480I-ORANGE/AFIJ1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7872.Samsung SGH G400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-G400/1.0 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7873.Samsung SGH G400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-G400/G400AIHJ2 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7874.Samsung SGH G400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-G400/1.0 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7875.Samsung SGH G400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-G400/G400AIHJ2 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7876.Samsung SGH G810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-G810/XEHA3 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7877.Samsung SGH G810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 Samsung/SGH-G810/XEHA3 Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7878.Samsung SGH G810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i458B/ Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7879.Samsung SGH G810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-G810/XEHA3 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7880.Samsung SGH G810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-G810/XEHA3 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7881.Samsung SGH G810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 Samsung/SGH-G810/XEHA3 Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7882.Samsung SGH G810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i458B/ Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7883.Samsung SGH G810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-G810/XEHA3 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7884.Samsung SGH i200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i200-ORANGE/BVHE6 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7885.Samsung SGH i200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i200/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7886.Samsung SGH i200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i200-ORANGE/BVHE6 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7887.Samsung SGH i200',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i200/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7888.Samsung SGH i550V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550V/BUGL2 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7889.Samsung SGH i550V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550V/BUGL2 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7890.Samsung SGH i550V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550/XXGL2 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7891.Samsung SGH i550V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550V/BUGL2 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7892.Samsung SGH i550V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550V/BUGL2 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7893.Samsung SGH i550V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550/XXGL2 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7894.Samsung SGH i560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung/SGH-i560' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7895.Samsung SGH i560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Vodafone/1.0/SamsungSGHi560/I560BUGJ5 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7896.Samsung SGH i560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Vodafone/1.0/SamsungSGHi560/I560BUHB1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7897.Samsung SGH i560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Vodafone/1.0/SamsungSGHi560/I560BUHD1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7898.Samsung SGH i560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 1.0/SamsungSGHi560/I560JAHD2 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7899.Samsung SGH i560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung/SGH-i560' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7900.Samsung SGH i560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Vodafone/1.0/SamsungSGHi560/I560BUGJ5 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7901.Samsung SGH i560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Vodafone/1.0/SamsungSGHi560/I560BUHB1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7902.Samsung SGH i560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Vodafone/1.0/SamsungSGHi560/I560BUHD1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7903.Samsung SGH i560',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 1.0/SamsungSGHi560/I560JAHD2 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7904.Samsung SGH I617',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I617/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7905.Samsung SGH I617',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I617/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7906.Samsung SGH I617',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I617' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7907.Samsung SGH I617',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I617/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7908.Samsung SGH I617',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I617/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7909.Samsung SGH I617',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I617' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7910.Samsung SGH I627',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I627/UCIC2 Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7911.Samsung SGH I627',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I627/UCHJ5 Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7912.Samsung SGH I627',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I627/UCIC2 Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7913.Samsung SGH I627',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I627/UCHJ5 Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7914.Samsung SGH i728',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i728_CMCC/1.0 Release/03.07 Browser/IE6 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7915.Samsung SGH i728',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i728_CMCC/1.0 Release/03.07 Browser/IE6 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7916.Samsung SGH i740',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i740/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7917.Samsung SGH i740',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i740/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7918.Samsung SGH i780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7919.Samsung SGH i780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780ORANGE/AFGI1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7920.Samsung SGH i780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7921.Samsung SGH i780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780TIM/AIHA3 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7922.Samsung SGH i780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780TIM/PAIHI4 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7923.Samsung SGH i780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7924.Samsung SGH i780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780ORANGE/AFGI1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7925.Samsung SGH i780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7926.Samsung SGH i780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780TIM/AIHA3 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7927.Samsung SGH i780',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780TIM/PAIHI4 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7928.Samsung SGH i780V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780V/MJHA3 (compatible; MSIE 6.0; Windows CE; PPC) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7929.Samsung SGH i780V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i780V/MJHA3 (compatible; MSIE 6.0; Windows CE; PPC) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7930.Samsung SGH I8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I8320-Vodafone/I8320BUIH8 Linux/X2/R1 Opera/9.6 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7931.Samsung SGH I8320',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-I8320-Vodafone/I8320BUIH8 Linux/X2/R1 Opera/9.6 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7932.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7933.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900/1.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7934.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) SAMSUNG-SGH-i900V' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7935.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900Orange/BVHH1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7936.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG-SGH-i900/1.0 Opera 9.5; U; (null); rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7937.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900/BOHH5 profile/MIDP-2.0 configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7938.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900/1.0 (Windows NT 5.1; U; en) Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7939.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) SAMSUNG-SGH-i900V/ACHJ2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7940.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) SAMSUNG-SGH-i900V/JBHH1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7941.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SGH-i900/1.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7942.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7943.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900/1.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7944.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) SAMSUNG-SGH-i900V' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7945.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900Orange/BVHH1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7946.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SAMSUNG-SGH-i900/1.0 Opera 9.5; U; (null); rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7947.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900/BOHH5 profile/MIDP-2.0 configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7948.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900/1.0 (Windows NT 5.1; U; en) Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7949.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) SAMSUNG-SGH-i900V/ACHJ2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7950.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) SAMSUNG-SGH-i900V/JBHH1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7951.Samsung SGH i900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SGH-i900/1.0 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7952.Samsung SGH i900v',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900V/AEHG4 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7953.Samsung SGH i900v',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i900V/AEHG4 Opera 9.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7954.Samsung SGH J700i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J700i/J700IXAIA2 Profile/MIDP- 2.0 Configuration/ CLDC-1.1 UP.Browser/6. 2.3.3.c.1. 101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7955.Samsung SGH J700i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J700i/J700IXAIA2 Profile/MIDP- 2.0 Configuration/ CLDC-1.1 UP.Browser/6. 2.3.3.c.1. 101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7956.Samsung SGH J708i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J708i_CMCC/1.0 RTK-E/1.0 DF/1.0 Release/12.18.2008 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7957.Samsung SGH J708i',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J708i_CMCC/1.0 RTK-E/1.0 DF/1.0 Release/12.18.2008 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7958.Samsung SGH L700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L700/XBHH1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7959.Samsung SGH L700',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L700/XBHH1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7960.Samsung SGH L708',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L708/ZTIB1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7961.Samsung SGH L708',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L708/ZTIB1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7962.Samsung SGH L768',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L768/ZHGI1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1/*MzU1NjU4MDEwODgxMzA0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7963.Samsung SGH L768',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L768/ZHGI1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1/*MzU1NjU4MDEwODgxMzA0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7964.Samsung SGH L770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L770-ORANGE/BVHD6 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7965.Samsung SGH L770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L770S/1.0 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7966.Samsung SGH L770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L770-ORANGE/BVHD6 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7967.Samsung SGH L770',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L770S/1.0 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7968.Samsung SGH L811',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L811/L811XEHH4 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7969.Samsung SGH L811',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L811/L811XEHH4 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7970.Samsung SGH M120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM120/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7971.Samsung SGH M120',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM120/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7972.Samsung SGH M150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M150/M150XAHH7 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7973.Samsung SGH M150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M150/M150XAHH7 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7974.Samsung SGH M310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM310/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7975.Samsung SGH M310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM310L/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7976.Samsung SGH M310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM310/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7977.Samsung SGH M310',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM310L/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7978.Samsung SGH M310V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungSGHM310V/M310BUHE5 Browser/Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7979.Samsung SGH M310V',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungSGHM310V/M310BUHE5 Browser/Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7980.Samsung SGH M628',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M628_CMCC/1.0 Release/2.28.2008 Browser/Openwave6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7981.Samsung SGH M628',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M628_CMCC/1.0 Release/2.28.2008 Browser/Openwave6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7982.Samsung SGH S366',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-S366/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7983.Samsung SGH S366',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-S366/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7984.Samsung SGH S7330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S7330-ORANGE/BVHH4 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7985.Samsung SGH S7330',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-GT-S7330-ORANGE/BVHH4 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7986.Samsung SGH T119',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T119/T119UVHL2 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7987.Samsung SGH T119',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T119/T119UVHL2 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7988.Samsung SGH T139',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T139/T139UVIL3 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7989.Samsung SGH T139',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T139/T139UVIL3 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7990.Samsung SGH T356',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T356/T356TLJE4 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7991.Samsung SGH T356',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T356/T356TLJE4 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7992.Samsung SGH T359',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T359/T359UVJE1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7993.Samsung SGH T359',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T359/T359UVJE1 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7994.Samsung SGH T406',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T406/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7995.Samsung SGH T406',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T406/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7996.Samsung SGH T459',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T459/T459UVHI4 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7997.Samsung SGH T459',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T459/T459UVIA1 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7998.Samsung SGH T459',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T459/T459UVHI4 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('7999.Samsung SGH T459',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T459/T459UVIA1 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('8000.Samsung SGH T469',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T469/T469UVIG4 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
});