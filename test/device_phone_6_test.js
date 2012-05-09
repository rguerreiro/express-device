var device = require('../lib/device.js'),
    base = require('./common.js');
    
exports['10001.Verizon XV6900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x320; XV6900; Window Mobile 6.0 Professional;' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10002.Verizon XV6900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x320; XV6900; Window Mobile 6.0 Professional;' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10003.Vertu Constellation'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0/SNXXXXXXXXXXXXXXX (SymbianOS/9.3; Series60/3.2 VertuConstellationQuest/051.716.5; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10004.Vertu Constellation'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0/SNXXXXXXXXXXXXXXX (SymbianOS/9.3; Series60/3.2 VertuConstellationQuest/051.716.5; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10005.Vibo A688'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-tw; Vibo-A688 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10006.Vibo A688'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-tw; Vibo-A688 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10007.Vibo T588'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vibo-T588/Obigo/Q7 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10008.Vibo T588'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vibo-T588/Obigo/Q7 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10009.Videocon V1675'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Videocon_V1675_Wap MAUI WAP Browser2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10010.Videocon V1675'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Videocon_V1675_Wap MAUI WAP Browser2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10011.VK Mobile VK2030'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VK-VK2030/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10012.VK Mobile VK2030'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VK-VK2030/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10013.Vodafone 945'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; tr_TR; Vodafone 945 Build/VF945-MSM7227-V02e-Oct292010-Vodafone-TR' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10014.Vodafone 945'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; Vodafone 945 Build/VF945_V02d_DE) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10015.Vodafone 945'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; tr_TR; Vodafone 945 Build/VF945-MSM7227-V02e-Oct292010-Vodafone-TR' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10016.Vodafone 945'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; Vodafone 945 Build/VF945_V02d_DE) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10017.Vodafone SFR v1615'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/SFR_v1615/1.56.163.9' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10018.Vodafone SFR v1615'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Kaiser/3.28.161.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10019.Vodafone SFR v1615'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/SFR_v1615/1.56.163.9' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10020.Vodafone SFR v1615'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/HTC_Kaiser/3.28.161.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10021.Vodafone SFR V3650'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/SFR_v3650/1.25.163.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10022.Vodafone SFR V3650'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Vodafone/1.0/SFR_v3650/1.25.163.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10023.Vodafone v1240'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/v1240/2.5.483.2/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10024.Vodafone v1240'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VodafoneV1240/B532 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10025.Vodafone v1240'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/v1240/2.5.483.2/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10026.Vodafone v1240'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VodafoneV1240/B532 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10027.Vodafone v1415'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_v1415/1.18.161.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10028.Vodafone v1415'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_v1415/1.18.161.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10029.Vodafone VDA GPS'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) VDA-GPS/R1 Mozilla/4.0/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10030.Vodafone VDA GPS'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) VDA-GPS/R1 Mozilla/4.0/WAP2.0 Profile/MIDP2.0 Configuration/CLDC1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10031.VODAFONE VODAFONE 735'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone735/B712 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10032.VODAFONE VODAFONE 735'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone735/B712 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10033.Vodafone Vodafone 810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MTV/1.0/MTV3-3/B635 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10034.Vodafone Vodafone 810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MTV/1.0/MTV3-3/B635 Browser/Obigo-Browser/Q05A MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10035.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10036.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/111204 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10037.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/112153 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10038.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/112161 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10039.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PDA; NF35WMPRO/1.0; like Gecko) NetFront/3.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10040.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_VPACompactIV/5.4.172.1/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; MIDP-2.0 Configuration/CLDC-1.1; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10041.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_VPACompactIV/4.14.162.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10042.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10043.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/111204 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10044.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/112153 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10045.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'HTCArtist/112161 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10046.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PDA; NF35WMPRO/1.0; like Gecko) NetFront/3.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10047.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/HTC_VPACompactIV/5.4.172.1/Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; MIDP-2.0 Configuration/CLDC-1.1; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10048.Vodafone VPA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/HTC_VPACompactIV/4.14.162.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10049.Vodafone ZTE Indie'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Indie/Indie_SF_B07A101 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10050.Vodafone ZTE Indie'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Indie/Indie_SF_B07A101 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10051.Voxtel 3iD SkyMM'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VOXTEL-3iD SKYMM/WAP 2.0 MIDP-2.0/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10052.Voxtel 3iD SkyMM'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VOXTEL-3iD SKYMM/WAP 2.0 MIDP-2.0/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10053.Voxtel w210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VOXTEL_W210_TO_BE_FIXED' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10054.Voxtel w210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VOXTEL_W210_TO_BE_FIXED' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10055.Wapamp Proxy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'N73[ejatd29.wapamp.com]editby:m4ster_v4 /1.03) NetFront/3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10056.Wapamp Proxy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'N73[ejatd29.wapamp.com]editby:m4ster_v4 /1.03) NetFront/3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10057.WellcoM A88'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; th-th; WellcoM-A88 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10058.WellcoM A88'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; th-th; WellcoM-A88 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10059.WellcoM W398'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM_W398' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10060.WellcoM W398'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM_W398' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10061.WellcoM W819'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM_W819 WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10062.WellcoM W819'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM_W819 WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10063.WellcoM W839+'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WellcoM_W839+_Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10064.WellcoM W839+'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WellcoM_W839+_Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10065.WellcoM W920'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM/W920/MIDP2.0/CLDC1.1/Screen-240x320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10066.WellcoM W920'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WELLCOM/W920/MIDP2.0/CLDC1.1/Screen-240x320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10067.WellcoM W9229'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'W9229ObigolnternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10068.WellcoM W9229'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'W9229ObigolnternetBrowser/QO3C Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10069.WellcoM W929'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WellcoM W929 WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10070.WellcoM W929'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WellcoM W929 WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10071.Windows HTC Radar'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; Radar 4G)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10072.Windows HTC Trophy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; mwp6985)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10073.Windows Mobile Pocket PC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10074.Windows Mobile Pocket PC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10075.Xiino Browser'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xiino/1.0.9E [en] (v. 4.1; 153x130; g4)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10076.XJXN F420'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'XJXN-F420/(2006.12.25)M.RF4201111.M01001.V1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10077.XJXN F420'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'XJXN-F420/(2006.12.25)M.RF4201111.M01001.V1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10078.Zonda ZMCK740'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMCK740' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10079.Zonda ZMCK740'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMCK740' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10080.Zonda ZMCK870'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMCK870' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10081.Zonda ZMCK870'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMCK870' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10082.Zonda ZMTFTV20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMTFTV20/R01 Browser/Obigo/Q03C/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10083.Zonda ZMTFTV20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMTFTV20/R01 Browser/Obigo/Q03C/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10084.Zonda ZMTN610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN610' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10085.Zonda ZMTN610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN610' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10086.Zonda ZMTN615'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN615' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10087.Zonda ZMTN615'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN615' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10088.Zonda ZMTN800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN800' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10089.Zonda ZMTN800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN800' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10090.Zonda ZMTN815'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN815' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10091.Zonda ZMTN815'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZMTN815' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10092.ZT 8988'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZT8988/1.0 MTK/W07.12 Release/01.01.2007 Browser/Teleca-1.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10093.ZT 8988'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZT8988/1.0 MTK/W07.12 Release/01.01.2007 Browser/Teleca-1.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10094.ZTE 70W'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'AIKO 70W/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10095.ZTE 70W'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'AIKO 70W/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10096.ZTE A261'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-A261/P103B9V1.0.0/WAP2.0 Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10097.ZTE A261'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-A261/P103B9V1.0.0/WAP2.0 Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10098.ZTE A37'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-A37/P103B2SWV1.0.0/WAP1.2.1 Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10099.ZTE A37'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-A37/P103B2SWV1.0.0/WAP1.2.1 Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10100.ZTE AMC F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'AMC F188/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10101.ZTE AMC F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'AMC F188/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10102.ZTE Amigo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Android Edition Starnaute Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10103.ZTE Amigo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Android Edition Starnaute Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10104.ZTE Beeline M2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; Beeline M2 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10105.ZTE Beeline M2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; Beeline M2 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10106.ZTE Blade'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; BASE lutea Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10107.ZTE BLADE'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; el-gr; ZTE-BLADE Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10108.ZTE Blade'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Android Edition LIBRA Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10109.ZTE Blade'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; sv-se; Blade Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10110.ZTE Blade'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; ZTE-BLADE Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10111.ZTE Blade'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; BASE lutea Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10112.ZTE BLADE'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; el-gr; ZTE-BLADE Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10113.ZTE Blade'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Android Edition LIBRA Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10114.ZTE Blade'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; sv-se; Blade Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10115.ZTE Blade'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; ZTE-BLADE Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10116.ZTE Bluebelt'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE Bluebelt/1.0.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10117.ZTE Bluebelt'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE Bluebelt/1.0.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10118.ZTE BM-LTBU300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Light Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10119.ZTE BM-LTBU300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Light Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10120.ZTE BM-LTBU300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Light Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10121.ZTE BM-LTBU300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; Light Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10122.ZTE C78'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C78/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10123.ZTE C78'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C78/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10124.ZTE C79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C79/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10125.ZTE C79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C79/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10126.ZTE CORAL400'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CORAL 400/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10127.ZTE CORAL400'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CORAL 400/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10128.ZTE D90'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-D90/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10129.ZTE D90'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-D90/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10130.ZTE D92'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-D92/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10131.ZTE D92'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-D92/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10132.ZTE E520'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-E520/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10133.ZTE E520'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-E520/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10134.ZTE e810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) MOVISTAR/1.0/e810/VEN_TM_SE_P180A2V1.0.1 IE Mobile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10135.ZTE e810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) MOVISTAR/1.0/e810/VEN_TM_SE_P180A2V1.0.1 IE Mobile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10136.ZTE F101'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F101(RDS)/1.0 NetFront/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10137.ZTE F101'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F101(RDS)/1.0 NetFront/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10138.ZTE F102'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F102 H3G/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10139.ZTE F102'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F102/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10140.ZTE F102'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F102 H3G/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10141.ZTE F102'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F102/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10142.ZTE F105'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F105/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10143.ZTE F105'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F105/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10144.ZTE F106-ChinaUnicom'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'F106-ChinaUnicom/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10145.ZTE F106-ChinaUnicom'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'F106-ChinaUnicom/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10146.ZTE F107'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F107(3UK)/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10147.ZTE F107'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F107(3UK)/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10148.ZTE F150'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F150/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10149.ZTE F150'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F150/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10150.ZTE F152'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F152/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10151.ZTE F152'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F152/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10152.ZTE F153'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F153/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10153.ZTE F153'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F153/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10154.ZTE F156'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F156/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10155.ZTE F156'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F156/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10156.ZTE F159'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F159/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10157.ZTE F159'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F159/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10158.ZTE F160'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F160/1.0 NetFront/3.5 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10159.ZTE F160'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F160/1.0 NetFront/3.5 QTV5.1 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10160.ZTE F165'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F165/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10161.ZTE F165'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F165/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10162.ZTE F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'U Mobile Futsuu/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10163.ZTE F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FASTWEB-F188/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10164.ZTE F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F188-Tigo/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10165.ZTE F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F188/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10166.ZTE F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'U Mobile Futsuu/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10167.ZTE F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FASTWEB-F188/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10168.ZTE F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F188-Tigo/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10169.ZTE F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F188/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10170.ZTE F230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'F230/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10171.ZTE F230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'F230/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10172.ZTE F232'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F232/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10173.ZTE F232'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F232/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10174.ZTE F608'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F608/1.0 ACS-NF/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10175.ZTE F608'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F608/1.0 ACS-NF/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10176.ZTE F852'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F852/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10177.ZTE F852'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F852/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10178.ZTE F858'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F858/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10179.ZTE F858'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F858/1.0 ACS-NF/3.2 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10180.ZTE F860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE F860/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10181.ZTE F860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE F860/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10182.ZTE F868'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE F868/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10183.ZTE F868'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE F868/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10184.ZTE F870E'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F870E CINN BELL/1.0 ACS-NF/3.5 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10185.ZTE F870E'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F870E CINN BELL/1.0 ACS-NF/3.5 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10186.ZTE F912'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F912/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10187.ZTE F912'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MD-MD3/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10188.ZTE F912'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F912/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10189.ZTE F912'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MD-MD3/1.0 ACS-NF/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10190.ZTE F950'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F950/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10191.ZTE F950'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F950/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10192.ZTE F951'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F951-Orange/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10193.ZTE F951'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F951-Orange/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10194.ZTE G S213'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G S213/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10195.ZTE G S213'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G S213/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10196.ZTE G X760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G X760' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10197.ZTE G X760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X760-vegas-orange/X760_Z15UK_FS_B07A105_ORANGE Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10198.ZTE G X760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-X760-Optimus/X760_Z15PT_Pt_BFFA100_OPTIMUS Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10199.ZTE G X760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-SAGE/X671_V1_Z1_ES_DFFA102 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10200.ZTE G X760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G X760' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10201.ZTE G X760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X760-vegas-orange/X760_Z15UK_FS_B07A105_ORANGE Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10202.ZTE G X760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-X760-Optimus/X760_Z15PT_Pt_BFFA100_OPTIMUS Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10203.ZTE G X760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-SAGE/X671_V1_Z1_ES_DFFA102 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10204.ZTE G X761'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X761/X761_Z1_S_A07A100 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10205.ZTE G X761'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X761/X761_Z1_S_A07A100 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10206.ZTE G X960'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SFR342/X960_V2_Z0_C1_BFFA100 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10207.ZTE G X960'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SFR342/X960_V2_Z0_C1_BFFA100 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10208.ZTE GD180'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-GD180' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10209.ZTE GD180'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-GD180' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10210.ZTE i766'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G i766' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10211.ZTE i766'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G i766' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10212.ZTE Light Pro'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; Light Pro Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10213.ZTE Light Pro'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; es-es; Light Pro Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10214.ZTE Link'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-fr; ZTE-LINK Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10215.ZTE Link'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-fr; ZTE-LINK Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10216.ZTE MD301H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MD301H/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10217.ZTE MD301H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MD301H/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10218.ZTE Movistar Link'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; Movistar Link Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10219.ZTE Movistar Link'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; Movistar Link Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10220.ZTE MTC 535'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MTC535/REF-RU-MTS-P103D2V1.0.1/2.0 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10221.ZTE MTC 535'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MTC535/REF-RU-MTS-P103D2V1.0.1/2.0 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10222.ZTE MTC 916'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; MTC 916 Build/ERE27) AppleWebKit/530.17 (KHTML,like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10223.ZTE MTC 916'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; MTC 916 Build/ERE27) AppleWebKit/530.17 (KHTML,like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10224.ZTE MTC 918'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; MTC 918 Build/ERE27) AppleWebKit/530.17 (KHTML,like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10225.ZTE MTC 918'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ru-ru; MTC 918 Build/ERE27) AppleWebKit/530.17 (KHTML,like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10226.ZTE MTC840'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-MTC 840/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10227.ZTE MTC840'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-MTC 840/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10228.ZTE MTV 4.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MTV 4.0/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10229.ZTE MTV 4.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MTV 4.0/1.0 ACS-NF/3.5 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10230.ZTE N281'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-N281-Miami-Orange/ORANGE_ENG_EN_P107A3V1.0.4 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10231.ZTE N281'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-N281-Miami-Orange/ORANGE_ENG_EN_P107A3V1.0.4 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10232.ZTE N600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; ZTE-C N600 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10233.ZTE N600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; ZTE-C N600 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10234.ZTE Orange San Francisco'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; bg-bg; Orange San Francisco Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10235.ZTE Orange San Francisco'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-at; Orange San Francisco Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10236.ZTE Orange San Francisco'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-be; San Francisco Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10237.ZTE Orange San Francisco'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; bg-bg; Orange San Francisco Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10238.ZTE Orange San Francisco'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-at; Orange San Francisco Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10239.ZTE Orange San Francisco'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-be; San Francisco Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10240.ZTE PLSC77ZTE'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C77/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10241.ZTE PLSC77ZTE'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-C77/1.0 SMIT-Browser/2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10242.ZTE PM1107 Smart'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; PM1107 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10243.ZTE PM1107 Smart'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; PM1107 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10244.ZTE PM1152 Tabula'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; PM1152 Tabula (V9) Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10245.ZTE PM1152 Tabula'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; it-it; PM1152 Tabula (V9) Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10246.ZTE R100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R100/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10247.ZTE R100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R100/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10248.ZTE R220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SFR114/g8eA/FES-FR-SFR-P103D1V1.0.1/R220/2.0 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10249.ZTE R220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R220/1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10250.ZTE R220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SFR114/g8eA/FES-FR-SFR-P103D1V1.0.1/R220/2.0 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10251.ZTE R220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R220/1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10252.ZTE R230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R230/2.0 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10253.ZTE R230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R230/2.0 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10254.ZTE R6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R6/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10255.ZTE R6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-R6/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10256.ZTE R830'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'R830/2.0 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10257.ZTE R830'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'R830/2.0 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10258.ZTE T100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10259.ZTE T100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100Life/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10260.ZTE T100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100(Life)/1.0 NetFront/3.4 QTV5.1 Profile /MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10261.ZTE T100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10262.ZTE T100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100Life/1.0 NetFront/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10263.ZTE T100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T100(Life)/1.0 NetFront/3.4 QTV5.1 Profile /MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10264.ZTE T106'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T106/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10265.ZTE T106'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T106/1.0 ACS-NF/3.4 QTV5.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10266.ZTE T6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T6/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10267.ZTE T6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T6/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10268.ZTE T90'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T90/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10269.ZTE T90'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-T90/1.0 ACS-NF/3.4 QTV2.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10270.ZTE U X850'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; ZTE-U X850 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10271.ZTE U X850'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; ZTE-U X850 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10272.ZTE V8301'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-V8301/MB6801_V1_Z1_VN_F1BPa101 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10273.ZTE V8301'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-V8301/MB6801_V1_Z1_VN_F1BPa101 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10274.ZTE V9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; sl-si; V9 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10275.ZTE V9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; sl-si; V9 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10276.ZTE VF945'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; VF945 Build/VF945_V02c_DE) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10277.ZTE VF945'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; VF945 Build/VF945_V02c_DE) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10278.ZTE Vodafone 1231'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/Vodafone1231/IE Mobile/MIDP-2.0 Configuration/CLDC-1.1 320 x 240' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10279.ZTE Vodafone 1231'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/Vodafone1231/IE Mobile/MIDP-2.0 Configuration/CLDC-1.1 320 x 240' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10280.ZTE Vodafone351'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone351/VF 351-MTK 6253-V02a-February 282011-Vodafone ES Browser/OperaMini/v4.2.1141-2011-03-03(524288)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10281.ZTE Vodafone351'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/0Vodafone351/VF 351-MTK 6253-V02a-February 282011-Vodafone ES Browser/OperaMini/v4.2.1141-2011-03-03(524288)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10282.ZTE Vodafone547'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(Vodafone/1.0/Vodafone547/VF_GER_DE_P107A4V1.0.1/Obigo Q03C/MIDP-2.0 Configuration/CLDC-1.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10283.ZTE Vodafone547'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(Vodafone/1.0/Vodafone547/VF_UK_EN_P107A4V1.1.0/Obigo Q03C/MIDP-2.0 Configuration/CLDC-1.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10284.ZTE Vodafone547'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(Vodafone/1.0/Vodafone547/VF_GER_DE_P107A4V1.0.1/Obigo Q03C/MIDP-2.0 Configuration/CLDC-1.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10285.ZTE Vodafone547'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0(Vodafone/1.0/Vodafone547/VF_UK_EN_P107A4V1.1.0/Obigo Q03C/MIDP-2.0 Configuration/CLDC-1.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10286.ZTE X991'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X991-Rio-orange/X991_V1_Z2_FRES_D18F109 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10287.ZTE X991'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-G-X991-Rio-orange/X991_V1_Z2_FRES_D18F109 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10288.ZTE Yoigo F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Yoigo F188/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10289.ZTE Yoigo F188'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Yoigo F188/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10290.ZTE Yoigo F233'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Yoigo F233/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10291.ZTE Yoigo F233'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Yoigo F233/1.0 ACS-NF/3.4 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10292.ZTE ZTE X990'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-X990/X990_V2_Z5_FR_D13F104 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10293.ZTE ZTE X990'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-X990/X990_V2_Z5_FR_D13F104 Profile/MIDP-2.0 Configuration/CLDC-1.1 Obigo/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10294.ZTE ZTE-F233'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F233/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10295.ZTE ZTE-F233'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ZTE-F233/1.0 ACS-NF/3.3 QTV5.02 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};

base.run_test(__filename);