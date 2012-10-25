var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {
    describe('10001.Verizon XV6900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x320; XV6900; Window Mobile 6.0 Professional;' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10002.Verizon XV6900',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x320; XV6900; Window Mobile 6.0 Professional;' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10003.Vertu Constellation',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0/SNXXXXXXXXXXXXXXX (SymbianOS/9.3; Series60/3.2 VertuConstellationQuest/051.716.5; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10004.Vertu Constellation',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0/SNXXXXXXXXXXXXXXX (SymbianOS/9.3; Series60/3.2 VertuConstellationQuest/051.716.5; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10005.Vibo A688',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-tw; Vibo-A688 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10006.Vibo A688',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-tw; Vibo-A688 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10007.Vibo T588',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vibo-T588/Obigo/Q7 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10008.Vibo T588',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vibo-T588/Obigo/Q7 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10009.Videocon V1675',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Videocon_V1675_Wap MAUI WAP Browser2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10010.Videocon V1675',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Videocon_V1675_Wap MAUI WAP Browser2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10011.VK Mobile VK2030',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VK-VK2030/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10012.VK Mobile VK2030',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VK-VK2030/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10013.Vodafone 945',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; tr_TR; Vodafone 945 Build/VF945-MSM7227-V02e-Oct292010-Vodafone-TR' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10014.Vodafone 945',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; Vodafone 945 Build/VF945_V02d_DE) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10015.Vodafone 945',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; tr_TR; Vodafone 945 Build/VF945-MSM7227-V02e-Oct292010-Vodafone-TR' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10016.Vodafone 945',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; Vodafone 945 Build/VF945_V02d_DE) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10017.Vodafone SFR v1615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/SFR_v1615/1.56.163.9' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10018.Vodafone SFR v1615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Kaiser/3.28.161.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10019.Vodafone SFR v1615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/SFR_v1615/1.56.163.9' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10020.Vodafone SFR v1615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Kaiser/3.28.161.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10021.Vodafone SFR V3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/SFR_v3650/1.25.163.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10022.Vodafone SFR V3650',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/SFR_v3650/1.25.163.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10023.Vodafone v1240',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/v1240/2.5.483.2/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10024.Vodafone v1240',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VodafoneV1240/B532 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10025.Vodafone v1240',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/v1240/2.5.483.2/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10026.Vodafone v1240',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VodafoneV1240/B532 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10027.Vodafone v1415',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_v1415/1.18.161.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10028.Vodafone v1415',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_v1415/1.18.161.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10029.Vodafone VDA GPS',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) VDA-GPS/R1 Mozilla/4.0/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10030.Vodafone VDA GPS',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) VDA-GPS/R1 Mozilla/4.0/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10031.VODAFONE VODAFONE 735',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone735/B712 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10032.VODAFONE VODAFONE 735',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone735/B712 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10033.Vodafone Vodafone 810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTV/1.0/MTV3-3/B635 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10034.Vodafone Vodafone 810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTV/1.0/MTV3-3/B635 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10035.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10036.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/111204 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10037.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/112153 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10038.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/112161 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10039.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PDA; NF35WMPRO/1.0; like Gecko) NetFront/3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10040.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_VPACompactIV/5.4.172.1/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; MIDP-2.0 Configuration/CLDC-1.1; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10041.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_VPACompactIV/4.14.162.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10042.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10043.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/111204 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10044.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/112153 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10045.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/112161 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10046.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PDA; NF35WMPRO/1.0; like Gecko) NetFront/3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10047.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_VPACompactIV/5.4.172.1/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; MIDP-2.0 Configuration/CLDC-1.1; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10048.Vodafone VPA Compact IV',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_VPACompactIV/4.14.162.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10049.Vodafone ZTE Indie',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Indie/Indie_SF_B07A101 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10050.Vodafone ZTE Indie',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Indie/Indie_SF_B07A101 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10051.Voxtel 3iD SkyMM',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VOXTEL-3iD SKYMM/WAP 2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10052.Voxtel 3iD SkyMM',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VOXTEL-3iD SKYMM/WAP 2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10053.Voxtel w210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VOXTEL_W210_TO_BE_FIXED' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10054.Voxtel w210',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VOXTEL_W210_TO_BE_FIXED' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10055.Wapamp Proxy',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'N73[ejatd29.wapamp.com]editby:m4ster_v4 /1.03) NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10056.Wapamp Proxy',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'N73[ejatd29.wapamp.com]editby:m4ster_v4 /1.03) NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10057.WellcoM A88',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; th-th; WellcoM-A88 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10058.WellcoM A88',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; th-th; WellcoM-A88 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10059.WellcoM W398',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM_W398' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10060.WellcoM W398',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM_W398' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10061.WellcoM W819',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM_W819 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10062.WellcoM W819',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM_W819 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10063.WellcoM W839+',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WellcoM_W839+_Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10064.WellcoM W839+',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WellcoM_W839+_Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10065.WellcoM W920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM/W920/MIDP2.0/CLDC1.1/Screen-240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10066.WellcoM W920',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM/W920/MIDP2.0/CLDC1.1/Screen-240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10067.WellcoM W9229',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'W9229ObigolnternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10068.WellcoM W9229',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'W9229ObigolnternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10069.WellcoM W929',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WellcoM W929 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10070.WellcoM W929',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WellcoM W929 WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10071.Windows HTC Radar',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; Radar 4G)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10072.Windows HTC Trophy',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; mwp6985)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10073.Windows Mobile Pocket PC',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10074.Windows Mobile Pocket PC',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10075.Xiino Browser',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xiino/1.0.9E [en] (v. 4.1; 153x130; g4)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10076.XJXN F420',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'XJXN-F420/(2006.12.25)M.RF4201111.M01001.V1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10077.XJXN F420',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'XJXN-F420/(2006.12.25)M.RF4201111.M01001.V1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10078.Zonda ZMCK740',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMCK740' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10079.Zonda ZMCK740',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMCK740' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10080.Zonda ZMCK870',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMCK870' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10081.Zonda ZMCK870',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMCK870' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10082.Zonda ZMTFTV20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMTFTV20/R01 Browser/Obigo/Q03C/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10083.Zonda ZMTFTV20',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMTFTV20/R01 Browser/Obigo/Q03C/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10084.Zonda ZMTN610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN610' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10085.Zonda ZMTN610',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN610' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10086.Zonda ZMTN615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN615' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10087.Zonda ZMTN615',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN615' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10088.Zonda ZMTN800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10089.Zonda ZMTN800',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN800' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10090.Zonda ZMTN815',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN815' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10091.Zonda ZMTN815',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN815' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10092.ZT 8988',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZT8988/1.0 MTK/W07.12 Release/01.01.2007 Browser/Teleca-1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10093.ZT 8988',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZT8988/1.0 MTK/W07.12 Release/01.01.2007 Browser/Teleca-1.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10094.ZTE 70W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AIKO 70W/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10095.ZTE 70W',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AIKO 70W/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10096.ZTE A261',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-A261/P103B9V1.0.0/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10097.ZTE A261',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-A261/P103B9V1.0.0/WAP2.0 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10098.ZTE A37',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-A37/P103B2SWV1.0.0/WAP1.2.1 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10099.ZTE A37',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-A37/P103B2SWV1.0.0/WAP1.2.1 Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10100.ZTE AMC F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AMC F188/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10101.ZTE AMC F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'AMC F188/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10102.ZTE Amigo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Android Edition Starnaute Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10103.ZTE Amigo',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Android Edition Starnaute Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10104.ZTE Beeline M2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; Beeline M2 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10105.ZTE Beeline M2',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; Beeline M2 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10106.ZTE Blade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; BASE lutea Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10107.ZTE BLADE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; el-gr; ZTE-BLADE Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10108.ZTE Blade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Android Edition LIBRA Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10109.ZTE Blade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; sv-se; Blade Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10110.ZTE Blade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; ZTE-BLADE Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10111.ZTE Blade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; BASE lutea Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10112.ZTE BLADE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; el-gr; ZTE-BLADE Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10113.ZTE Blade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Android Edition LIBRA Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10114.ZTE Blade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; sv-se; Blade Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10115.ZTE Blade',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; ZTE-BLADE Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10116.ZTE Bluebelt',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE Bluebelt/1.0.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10117.ZTE Bluebelt',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE Bluebelt/1.0.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10118.ZTE BM-LTBU300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Light Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10119.ZTE BM-LTBU300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Light Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10120.ZTE BM-LTBU300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Light Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10121.ZTE BM-LTBU300',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Light Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10122.ZTE C78',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C78/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10123.ZTE C78',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C78/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10124.ZTE C79',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C79/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10125.ZTE C79',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C79/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10126.ZTE CORAL400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CORAL 400/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10127.ZTE CORAL400',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CORAL 400/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10128.ZTE D90',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-D90/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10129.ZTE D90',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-D90/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10130.ZTE D92',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-D92/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10131.ZTE D92',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-D92/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10132.ZTE E520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-E520/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10133.ZTE E520',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-E520/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10134.ZTE e810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) MOVISTAR/1.0/e810/VEN_TM_SE_P180A2V1.0.1 IE Mobile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10135.ZTE e810',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) MOVISTAR/1.0/e810/VEN_TM_SE_P180A2V1.0.1 IE Mobile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10136.ZTE F101',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F101(RDS)/1.0 NetFront/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10137.ZTE F101',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F101(RDS)/1.0 NetFront/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10138.ZTE F102',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F102 H3G/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10139.ZTE F102',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F102/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10140.ZTE F102',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F102 H3G/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10141.ZTE F102',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F102/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10142.ZTE F105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F105/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10143.ZTE F105',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F105/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10144.ZTE F106-ChinaUnicom',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'F106-ChinaUnicom/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10145.ZTE F106-ChinaUnicom',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'F106-ChinaUnicom/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10146.ZTE F107',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F107(3UK)/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10147.ZTE F107',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F107(3UK)/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10148.ZTE F150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F150/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10149.ZTE F150',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F150/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10150.ZTE F152',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F152/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10151.ZTE F152',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F152/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10152.ZTE F153',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F153/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10153.ZTE F153',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F153/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10154.ZTE F156',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F156/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10155.ZTE F156',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F156/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10156.ZTE F159',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F159/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10157.ZTE F159',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F159/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10158.ZTE F160',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F160/1.0 NetFront/3.5 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10159.ZTE F160',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F160/1.0 NetFront/3.5 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10160.ZTE F165',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F165/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10161.ZTE F165',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F165/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10162.ZTE F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'U Mobile Futsuu/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10163.ZTE F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FASTWEB-F188/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10164.ZTE F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F188-Tigo/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10165.ZTE F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F188/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10166.ZTE F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'U Mobile Futsuu/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10167.ZTE F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FASTWEB-F188/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10168.ZTE F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F188-Tigo/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10169.ZTE F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F188/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10170.ZTE F230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'F230/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10171.ZTE F230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'F230/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10172.ZTE F232',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F232/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10173.ZTE F232',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F232/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10174.ZTE F608',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F608/1.0 ACS-NF/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10175.ZTE F608',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F608/1.0 ACS-NF/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10176.ZTE F852',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F852/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10177.ZTE F852',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F852/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10178.ZTE F858',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F858/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10179.ZTE F858',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F858/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10180.ZTE F860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE F860/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10181.ZTE F860',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE F860/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10182.ZTE F868',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE F868/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10183.ZTE F868',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE F868/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10184.ZTE F870E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F870E CINN BELL/1.0 ACS-NF/3.5 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10185.ZTE F870E',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F870E CINN BELL/1.0 ACS-NF/3.5 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10186.ZTE F912',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F912/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10187.ZTE F912',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MD-MD3/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10188.ZTE F912',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F912/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10189.ZTE F912',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MD-MD3/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10190.ZTE F950',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F950/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10191.ZTE F950',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F950/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10192.ZTE F951',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F951-Orange/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10193.ZTE F951',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F951-Orange/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10194.ZTE G S213',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G S213/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10195.ZTE G S213',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G S213/WAP2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10196.ZTE G X760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G X760' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10197.ZTE G X760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X760-vegas-orange/X760_Z15UK_FS_B07A105_ORANGE Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10198.ZTE G X760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-X760-Optimus/X760_Z15PT_Pt_BFFA100_OPTIMUS Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10199.ZTE G X760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-SAGE/X671_V1_Z1_ES_DFFA102 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10200.ZTE G X760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G X760' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10201.ZTE G X760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X760-vegas-orange/X760_Z15UK_FS_B07A105_ORANGE Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10202.ZTE G X760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-X760-Optimus/X760_Z15PT_Pt_BFFA100_OPTIMUS Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10203.ZTE G X760',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-SAGE/X671_V1_Z1_ES_DFFA102 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10204.ZTE G X761',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X761/X761_Z1_S_A07A100 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10205.ZTE G X761',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X761/X761_Z1_S_A07A100 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10206.ZTE G X960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SFR342/X960_V2_Z0_C1_BFFA100 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10207.ZTE G X960',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SFR342/X960_V2_Z0_C1_BFFA100 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10208.ZTE GD180',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-GD180' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10209.ZTE GD180',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-GD180' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10210.ZTE i766',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G i766' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10211.ZTE i766',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G i766' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10212.ZTE Light Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; Light Pro Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10213.ZTE Light Pro',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; Light Pro Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10214.ZTE Link',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-fr; ZTE-LINK Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10215.ZTE Link',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-fr; ZTE-LINK Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10216.ZTE MD301H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MD301H/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10217.ZTE MD301H',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MD301H/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10218.ZTE Movistar Link',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; Movistar Link Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10219.ZTE Movistar Link',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; Movistar Link Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10220.ZTE MTC 535',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTC535/REF-RU-MTS-P103D2V1.0.1/2.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10221.ZTE MTC 535',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTC535/REF-RU-MTS-P103D2V1.0.1/2.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10222.ZTE MTC 916',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; MTC 916 Build/ERE27) AppleWebKit/530.17 (KHTML,like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10223.ZTE MTC 916',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; MTC 916 Build/ERE27) AppleWebKit/530.17 (KHTML,like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10224.ZTE MTC 918',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; MTC 918 Build/ERE27) AppleWebKit/530.17 (KHTML,like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10225.ZTE MTC 918',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; MTC 918 Build/ERE27) AppleWebKit/530.17 (KHTML,like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10226.ZTE MTC840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-MTC 840/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10227.ZTE MTC840',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-MTC 840/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10228.ZTE MTV 4.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTV 4.0/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10229.ZTE MTV 4.0',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MTV 4.0/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10230.ZTE N281',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-N281-Miami-Orange/ORANGE_ENG_EN_P107A3V1.0.4 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10231.ZTE N281',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-N281-Miami-Orange/ORANGE_ENG_EN_P107A3V1.0.4 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10232.ZTE N600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; ZTE-C N600 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10233.ZTE N600',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; ZTE-C N600 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10234.ZTE Orange San Francisco',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; bg-bg; Orange San Francisco Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10235.ZTE Orange San Francisco',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-at; Orange San Francisco Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10236.ZTE Orange San Francisco',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-be; San Francisco Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10237.ZTE Orange San Francisco',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; bg-bg; Orange San Francisco Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10238.ZTE Orange San Francisco',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-at; Orange San Francisco Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10239.ZTE Orange San Francisco',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-be; San Francisco Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10240.ZTE PLSC77ZTE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C77/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10241.ZTE PLSC77ZTE',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C77/1.0 SMIT-Browser/2.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10242.ZTE PM1107 Smart',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; PM1107 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10243.ZTE PM1107 Smart',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; PM1107 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10244.ZTE PM1152 Tabula',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; PM1152 Tabula (V9) Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10245.ZTE PM1152 Tabula',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; PM1152 Tabula (V9) Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10246.ZTE R100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R100/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10247.ZTE R100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R100/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10248.ZTE R220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SFR114/g8eA/FES-FR-SFR-P103D1V1.0.1/R220/2.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10249.ZTE R220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R220/1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10250.ZTE R220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SFR114/g8eA/FES-FR-SFR-P103D1V1.0.1/R220/2.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10251.ZTE R220',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R220/1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10252.ZTE R230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R230/2.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10253.ZTE R230',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R230/2.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10254.ZTE R6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R6/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10255.ZTE R6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R6/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10256.ZTE R830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'R830/2.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10257.ZTE R830',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'R830/2.0 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10258.ZTE T100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10259.ZTE T100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100Life/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10260.ZTE T100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100(Life)/1.0 NetFront/3.4 QTV5.1 Profile /MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10261.ZTE T100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10262.ZTE T100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100Life/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10263.ZTE T100',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100(Life)/1.0 NetFront/3.4 QTV5.1 Profile /MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10264.ZTE T106',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T106/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10265.ZTE T106',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T106/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10266.ZTE T6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T6/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10267.ZTE T6',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T6/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10268.ZTE T90',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T90/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10269.ZTE T90',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T90/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10270.ZTE U X850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; ZTE-U X850 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10271.ZTE U X850',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; ZTE-U X850 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10272.ZTE V8301',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-V8301/MB6801_V1_Z1_VN_F1BPa101 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10273.ZTE V8301',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-V8301/MB6801_V1_Z1_VN_F1BPa101 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10274.ZTE V9',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; sl-si; V9 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10275.ZTE V9',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; sl-si; V9 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10276.ZTE VF945',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; VF945 Build/VF945_V02c_DE) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10277.ZTE VF945',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; VF945 Build/VF945_V02c_DE) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10278.ZTE Vodafone 1231',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/Vodafone1231/IE Mobile/MIDP-2.0 Configuration/CLDC-1.1 320 x 240' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10279.ZTE Vodafone 1231',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/Vodafone1231/IE Mobile/MIDP-2.0 Configuration/CLDC-1.1 320 x 240' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10280.ZTE Vodafone351',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone351/VF 351-MTK 6253-V02a-February 282011-Vodafone ES Browser/OperaMini/v4.2.1141-2011-03-03(524288)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10281.ZTE Vodafone351',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone351/VF 351-MTK 6253-V02a-February 282011-Vodafone ES Browser/OperaMini/v4.2.1141-2011-03-03(524288)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10282.ZTE Vodafone547',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(Vodafone/1.0/Vodafone547/VF_GER_DE_P107A4V1.0.1/Obigo Q03C/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10283.ZTE Vodafone547',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(Vodafone/1.0/Vodafone547/VF_UK_EN_P107A4V1.1.0/Obigo Q03C/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10284.ZTE Vodafone547',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(Vodafone/1.0/Vodafone547/VF_GER_DE_P107A4V1.0.1/Obigo Q03C/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10285.ZTE Vodafone547',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(Vodafone/1.0/Vodafone547/VF_UK_EN_P107A4V1.1.0/Obigo Q03C/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10286.ZTE X991',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X991-Rio-orange/X991_V1_Z2_FRES_D18F109 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10287.ZTE X991',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X991-Rio-orange/X991_V1_Z2_FRES_D18F109 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10288.ZTE Yoigo F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Yoigo F188/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10289.ZTE Yoigo F188',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Yoigo F188/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10290.ZTE Yoigo F233',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Yoigo F233/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10291.ZTE Yoigo F233',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Yoigo F233/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10292.ZTE ZTE X990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-X990/X990_V2_Z5_FR_D13F104 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10293.ZTE ZTE X990',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-X990/X990_V2_Z5_FR_D13F104 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10294.ZTE ZTE-F233',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F233/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('10295.ZTE ZTE-F233',function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F233/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
});