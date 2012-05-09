var device = require('../lib/device.js'),
    base = require('./common.js');

exports['8001.Samsung SGH T469'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T469/T469UVIG4 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8002.Samsung SGH T629'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T629R/T629UVFL2 Profile/MIDP-2.0 Configuration/CLDC-1.1 NetFront/3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8003.Samsung SGH T629'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T629R/T629UVFL2 Profile/MIDP-2.0 Configuration/CLDC-1.1 NetFront/3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8004.Samsung SGH T669'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T669/T669UVJD9 SHP/VPP/R5 Dolfin/1.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8005.Samsung SGH T669'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T669/T669UVJD9 SHP/VPP/R5 Dolfin/1.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8006.Samsung SGH T746'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T746/T746BMIH6 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8007.Samsung SGH T746'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T746/T746BMIH6 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8008.Samsung SGH T939'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; SGH-T939) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8009.Samsung SGH T939'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; SGH-T939) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8010.Samsung SGH U700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8011.Samsung SGH U700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8012.Samsung SGH U700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700/AKGI2 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8013.Samsung SGH U700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700-Vodafone/AMGE1 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8014.Samsung SGH U700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700/AKGF1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8015.Samsung SGH U700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8016.Samsung SGH U700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8017.Samsung SGH U700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700/AKGI2 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8018.Samsung SGH U700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700-Vodafone/AMGE1 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8019.Samsung SGH U700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700/AKGF1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8020.Samsung SGH U800E'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U800E/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8021.Samsung SGH U800E'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U800E/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8022.Samsung SGH-A107'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A107/A107UCJC4 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8023.Samsung SGH-A107'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A107/A107UCJC4 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8024.Samsung SGH-A137'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A137/A137UCHG1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8025.Samsung SGH-A137'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A137/A137UCHG1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8026.Samsung SGH-A177'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A177/A177UCIC3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8027.Samsung SGH-A177'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A177/A177UCIC3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8028.Samsung SGH-A257'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A257/A257UCIA5 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8029.Samsung SGH-A257'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A257/A257UCIA5 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8030.Samsung SGH-A516'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A516/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8031.Samsung SGH-A516'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A516/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8032.Samsung SGH-A561'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A561/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8033.Samsung SGH-A561'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A561/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8034.Samsung SGH-A597'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A597/A597UCJG1; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.19903; U; en-US) Opera 9.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8035.Samsung SGH-A597'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A597/A597UCJG1; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.19903; U; en-US) Opera 9.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8036.Samsung SGH-A657'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A657/A657UCIB5 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8037.Samsung SGH-A657'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A657/A657UCIB5 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8038.Samsung SGH-A706'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A706/1.0 SHP/VPP/R5 NetFront/3.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8039.Samsung SGH-A706'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A706/1.0 SHP/VPP/R5 NetFront/3.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8040.Samsung SGH-A746'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A746/UXHC5 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8041.Samsung SGH-A746'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A746/UXHC5 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8042.Samsung SGH-A777'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SGH-A777/A777UCHH3 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8043.Samsung SGH-A777'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A777/A777UCHI5 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8044.Samsung SGH-A777'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SGH-A777/A777UCHH3 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8045.Samsung SGH-A777'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A777/A777UCHI5 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8046.Samsung SGH-A797'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A797' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8047.Samsung SGH-A797'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A797/A797UCIG3; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.14928; U; en-US) Opera 9.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8048.Samsung SGH-A797'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A797' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8049.Samsung SGH-A797'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A797/A797UCIG3; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.14928; U; en-US) Opera 9.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8050.Samsung SGH-A821'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A821/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8051.Samsung SGH-A821'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A821/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8052.Samsung SGH-A827'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A827/A827UCGL3 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8053.Samsung SGH-A827'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A827/1.0 SHP/VPP/R5 NetFront/3.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8054.Samsung SGH-A827'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A827/A827UCHC1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8055.Samsung SGH-A827'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SGH-A827/A827UCHC1 SHP/VPP/R% NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8056.Samsung SGH-A827'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A827/A827UCGL3 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8057.Samsung SGH-A827'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A827/1.0 SHP/VPP/R5 NetFront/3.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8058.Samsung SGH-A827'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A827/A827UCHC1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8059.Samsung SGH-A827'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SGH-A827/A827UCHC1 SHP/VPP/R% NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8060.Samsung SGH-A877'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A877/A877UCHL2 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8061.Samsung SGH-A877'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A877/A877UCIB7 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8062.Samsung SGH-A877'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A877/A877UCHL2 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8063.Samsung SGH-A877'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A877/A877UCIB7 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8064.Samsung SGH-A897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A897' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8065.Samsung SGH-A897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A897/A897UCIG4; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.14928; U; en-US) Opera 9.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8066.Samsung SGH-A897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A897' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8067.Samsung SGH-A897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-A897/A897UCIG4; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.14928; U; en-US) Opera 9.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8068.Samsung SGH-B130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-B130-ORANGE/B130ABHI2 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8069.Samsung SGH-B130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-B130-ORANGE/B130ABHI2 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8070.Samsung SGH-B200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB200/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8071.Samsung SGH-B200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB200/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8072.Samsung SGH-B270'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB270/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8073.Samsung SGH-B270'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB270/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8074.Samsung SGH-B270i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-B270i/B270iBGID1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8075.Samsung SGH-B270i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-B270i/B270iBGID1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8076.Samsung SGH-B320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB320/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8077.Samsung SGH-B320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SGH-B320/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8078.Samsung SGH-B320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB320/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8079.Samsung SGH-B320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SGH-B320/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8080.Samsung SGH-B500'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB500/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8081.Samsung SGH-B500'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB500/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8082.Samsung SGH-B510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB510/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8083.Samsung SGH-B510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB510/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8084.Samsung SGH-B520'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB520/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8085.Samsung SGH-B520'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB520B/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8086.Samsung SGH-B520'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungSGHB520V/B520BUHI1 Browser/Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8087.Samsung SGH-B520'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB520/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8088.Samsung SGH-B520'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHB520B/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8089.Samsung SGH-B520'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungSGHB520V/B520BUHI1 Browser/Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8090.Samsung SGH-C216'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHC216/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8091.Samsung SGH-C216'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHC216/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8092.Samsung SGH-C260M'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHC260M/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8093.Samsung SGH-C260M'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHC260M/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8094.Samsung SGH-C414'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C414/C414TLJI2b SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8095.Samsung SGH-C414'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C414/C414TLJI2f SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8096.Samsung SGH-C414'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C414/C414TLJI2b SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8097.Samsung SGH-C414'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C414/C414TLJI2f SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8098.Samsung SGH-C416'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C416 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8099.Samsung SGH-C416'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C416 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8100.Samsung SGH-C426'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C426/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8101.Samsung SGH-C426'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-C426/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8102.Samsung SGH-C500'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHC500/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8103.Samsung SGH-C500'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHC500/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8104.Samsung SGH-CC03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-CC03_CMCC/1.0 RTK-E/1.0 SYSOL/1.0 Release/09.01.2007 Browser/OpenWave6.2.3.3.c.1.101' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8105.Samsung SGH-CC03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-CC03_CMCC/1.0 RTK-E/1.0 SYSOL/1.0 Release/09.01.2007 Browser/OpenWave6.2.3.3.c.1.101' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8106.Samsung SGH-D406'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHD406/1.0 TSS/2.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8107.Samsung SGH-D406'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHD406/1.0 TSS/2.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8108.Samsung SGH-D528'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D528/NetFront 3.2/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1/' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8109.Samsung SGH-D528'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D528/NetFront 3.2/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1/' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8110.Samsung SGH-D728'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D728/Series60 2.1/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8111.Samsung SGH-D728'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D728/Series60 2.1/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8112.Samsung SGH-D780'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D780/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8113.Samsung SGH-D780'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D780/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8114.Samsung SGH-D788'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D788/1.0 RTK-E/1.0 DF/1.0 Release/08.17.2007 Browser/Openwave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8115.Samsung SGH-D788'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D788/1.0 RTK-E/1.0 DF/1.0 Release/08.17.2007 Browser/Openwave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8116.Samsung SGH-D836'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHD836/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8117.Samsung SGH-D836'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHD836/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8118.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8119.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i/1.0 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8120.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i/D900iBOGJ1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8121.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8122.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i/D900iAMGF1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8123.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i-ORANGE/D900iABGF2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8124.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8125.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i/1.0 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8126.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i/D900iBOGJ1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8127.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8128.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i/D900iAMGF1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8129.Samsung SGH-D900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D900i-ORANGE/D900iABGF2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8130.Samsung SGH-D908i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D908i/1.0 RTK-E/1.0 DF/1.0 Release/11.27.2006 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1/' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8131.Samsung SGH-D908i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D908i/1.0 RTK-E/1.0 DF/1.0 Release/11.27.2006 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1/' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8132.Samsung SGH-D980'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D980/D980XAHJ7 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8133.Samsung SGH-D980'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-D980/D980XAHJ7 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8134.Samsung SGH-E208'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E208/1.0 RTK-E/1.0 DF/1.0 Release/11.27.2006 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8135.Samsung SGH-E208'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E208/1.0 RTK-E/1.0 DF/1.0 Release/11.27.2006 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8136.Samsung SGH-E236'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E236/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8137.Samsung SGH-E236'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E236/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8138.Samsung SGH-E358'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E358/1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8139.Samsung SGH-E358'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E358/1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8140.Samsung SGH-E398'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E398/1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1/*MzUzNDU4MDE1NDU2MDc1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8141.Samsung SGH-E398'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E398/1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1/*MzUzNDU4MDE1NDU2MDc1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8142.Samsung SGH-E428'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E428/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8143.Samsung SGH-E428'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E428/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8144.Samsung SGH-E496'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHE496/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8145.Samsung SGH-E496'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHE496/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8146.Samsung SGH-E747'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E747/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8147.Samsung SGH-E747'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E747/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8148.Samsung SGH-E818'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHE818*MzU0NDgyMDAwMjc5NDk5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8149.Samsung SGH-E818'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHE818*MzU0NDgyMDAwMjc5NDk5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8150.Samsung SGH-E838'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E838' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8151.Samsung SGH-E838'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E838' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8152.Samsung SGH-E848'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E848/1.0 Release/2.21.2007 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8153.Samsung SGH-E848'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-E848/1.0 Release/2.21.2007 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8154.Samsung SGH-E860V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/SamsungSGHE860V/E860BUEH6/Browser/NF/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8155.Samsung SGH-E860V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/SamsungSGHE860V/E860BUEH6/Browser/NF/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8156.Samsung SGH-E906'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHE906/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8157.Samsung SGH-E906'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHE906/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8158.Samsung SGH-E910'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHE910/1.0 TSS/2.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8159.Samsung SGH-E910'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHE910/1.0 TSS/2.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8160.Samsung SGH-F210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHF210/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8161.Samsung SGH-F210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHF210L/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8162.Samsung SGH-F210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungSGHF210/F210BAHB1 Browser/NF/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8163.Samsung SGH-F210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHF210/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8164.Samsung SGH-F210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHF210L/1.0 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8165.Samsung SGH-F210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungSGHF210/F210BAHB1 Browser/NF/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8166.Samsung SGH-F250L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F250L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8167.Samsung SGH-F250L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F250L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8168.Samsung SGH-F258'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F258/1.0 RTK-E/1.0 DF/1.0 Release/07.04.2007 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8169.Samsung SGH-F258'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F258/1.0 RTK-E/1.0 DF/1.0 Release/07.04.2007 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8170.Samsung SGH-F265L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F265L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8171.Samsung SGH-F265L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F265L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8172.Samsung SGH-F266'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F266/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8173.Samsung SGH-F266'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F266/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8174.Samsung SGH-F270'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F270/F270DDHG6 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8175.Samsung SGH-F270'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F270/F270DDHG6 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8176.Samsung SGH-F308'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F308/NetFront 3.2/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8177.Samsung SGH-F308'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F308/NetFront 3.2/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8178.Samsung SGH-F480'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480-ORANGE/F480ABHI1 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8179.Samsung SGH-F480'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480/F480XXHJ4 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8180.Samsung SGH-F480'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480-ORANGE/F480ABHI1 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8181.Samsung SGH-F480'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480/F480XXHJ4 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8182.Samsung SGH-F480T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480T/1.0 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8183.Samsung SGH-F480T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F480T/1.0 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8184.Samsung SGH-F488'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F488/1.0 SHP/VPP/R5 NetFront/3.4 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8185.Samsung SGH-F488'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F488/1.0 SHP/VPP/R5 NetFront/3.4 Qtv/5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8186.Samsung SGH-F488I'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F488I/1.0 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8187.Samsung SGH-F488I'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F488I/1.0 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8188.Samsung SGH-F490'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F490-Vodafone/F490BUHB2 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8189.Samsung SGH-F490'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F490/F490XXHB5 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8190.Samsung SGH-F490'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F490-ORANGE/F490AFHB3 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8191.Samsung SGH-F490'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F490/F490XXGL3 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8192.Samsung SGH-F490'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F490-Vodafone/F490BUHB2 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8193.Samsung SGH-F490'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F490/F490XXHB5 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8194.Samsung SGH-F490'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F490-ORANGE/F490AFHB3 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8195.Samsung SGH-F490'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F490/F490XXGL3 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8196.Samsung SGH-F700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F700-Vodafone/F700AMGJ8 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8197.Samsung SGH-F700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F700-Vodafone/F700AUGK1 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8198.Samsung SGH-F700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F700-Vodafone/F700BUGK3 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8199.Samsung SGH-F700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F700-Vodafone/F700BUGJ5 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8200.Samsung SGH-F700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F700/F700JCHC1 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8201.Samsung SGH-F700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F700-Vodafone/F700AMGJ8 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8202.Samsung SGH-F700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F700-Vodafone/F700AUGK1 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8203.Samsung SGH-F700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F700-Vodafone/F700BUGK3 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8204.Samsung SGH-F700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F700-Vodafone/F700BUGJ5 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8205.Samsung SGH-F700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-F700/F700JCHC1 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8206.Samsung SGH-G608'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-G608/1.0 RTK-E/1.0 DF/1.0 Release/06.22.2007 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8207.Samsung SGH-G608'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-G608/1.0 RTK-E/1.0 DF/1.0 Release/06.22.2007 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8208.Samsung SGH-G800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-G800/MSGK3 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8209.Samsung SGH-G800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-G800/BVGK2 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8210.Samsung SGH-G800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-G800/MSGK3 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8211.Samsung SGH-G800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-G800/BVGK2 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8212.Samsung SGH-I320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHI320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8213.Samsung SGH-I320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHI320/1.0 jBrowser/4.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8214.Samsung SGH-I320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHI320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8215.Samsung SGH-I320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHI320/1.0 jBrowser/4.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8216.Samsung SGH-I320N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I320N' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8217.Samsung SGH-I320N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I520' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8218.Samsung SGH-I320N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I750' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8219.Samsung SGH-I320N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i520/XEGH1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8220.Samsung SGH-I320N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I320N' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8221.Samsung SGH-I320N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I520' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8222.Samsung SGH-I320N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I750' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8223.Samsung SGH-I320N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i520/XEGH1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8224.Samsung SGH-i450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i450/DDHB4 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8225.Samsung SGH-i450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i450/DZGL3 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8226.Samsung SGH-i450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNGSGH-i450' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8227.Samsung SGH-i450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungSGH-i450/i450BUHD1 Java/VF-Java/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8228.Samsung SGH-i450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i450/XBGK3 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8229.Samsung SGH-i450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i450/DDHB4 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8230.Samsung SGH-i450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i450/DZGL3 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8231.Samsung SGH-i450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNGSGH-i450' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8232.Samsung SGH-i450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SamsungSGH-i450/i450BUHD1 Java/VF-Java/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8233.Samsung SGH-i450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i450/XBGK3 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8234.Samsung SGH-i450V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i450V/BUGJ6 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8235.Samsung SGH-i450V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i450V/BUHD1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8236.Samsung SGH-i450V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i450V/BUGJ6 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8237.Samsung SGH-i450V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i450V/BUHD1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8238.Samsung SGH-i455'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i455/UMHA3 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8239.Samsung SGH-i455'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i455/UMHA3 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8240.Samsung SGH-i458'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SGH-i458_CMCC/1.0 SymbianOS/9.2 Series60/3.1 Release/5.25.2007 Browser/OSS3.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8241.Samsung SGH-i458'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SGH-i458_CMCC/1.0 SymbianOS/9.2 Series60/3.1 Release/5.25.2007 Browser/OSS3.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8242.Samsung SGH-i520V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i520V/BUGD9 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8243.Samsung SGH-i520V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i520V/BUGH1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8244.Samsung SGH-i520V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i520V/BUGD7 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8245.Samsung SGH-i520V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i520V/BUGD9 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8246.Samsung SGH-i520V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i520V/BUGH1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8247.Samsung SGH-i520V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i520V/BUGD7 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8248.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8249.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550/XXGK4 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8250.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550/AKHA1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8251.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung-SGH-i550/AOGL2 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8252.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550/XEGL3 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8253.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550/AIGI4 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8254.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8255.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550/XXGK4 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8256.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550/AKHA1 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8257.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung-SGH-i550/AOGL2 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8258.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550/XEGL3 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8259.Samsung SGH-i550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Samsung/SGH-i550/AIGI4 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8260.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8261.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600ORANGE/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8262.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I600/1.0/BUFI1 (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8263.Samsung SGH-I600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) SAMSUNG-SGH-i600V/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8264.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600TIM' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8265.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8266.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SAMSUNG-SGH-i600/WM534' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8267.Samsung SGH-I600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600V/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8268.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8269.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600ORANGE/BVGD2 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8270.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8271.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600ORANGE/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8272.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I600/1.0/BUFI1 (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8273.Samsung SGH-I600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) SAMSUNG-SGH-i600V/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8274.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600TIM' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8275.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8276.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SAMSUNG-SGH-i600/WM534' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8277.Samsung SGH-I600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600V/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8278.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600/1.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8279.Samsung SGH-i600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i600ORANGE/BVGD2 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8280.Samsung SGH-i601'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) SAMSUNG-SGH-i601/WM534' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8281.Samsung SGH-i601'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SAMSUNG-SGH-i601/WM534' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8282.Samsung SGH-i601'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) SAMSUNG-SGH-i601/WM534' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8283.Samsung SGH-i601'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SAMSUNG-SGH-i601/WM534' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8284.Samsung SGH-i607'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I607/I607' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8285.Samsung SGH-i607'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I607/I607FG1 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8286.Samsung SGH-i607'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I607/I607FG1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8287.Samsung SGH-i607'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I607/I607' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8288.Samsung SGH-i607'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I607/I607FG1 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8289.Samsung SGH-i607'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I607/I607FG1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8290.Samsung SGH-i608'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i608/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8291.Samsung SGH-i608'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i608/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8292.Samsung SGH-i616'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I616/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8293.Samsung SGH-i616'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I616/1.0 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8294.Samsung SGH-I620'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i620v' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8295.Samsung SGH-I620'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHI620/1.0 Browser/Opera/8.65 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8296.Samsung SGH-I620'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SEC-SGHI620/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8297.Samsung SGH-I620'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/SamsungSGHI620V/I620BUGFA' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8298.Samsung SGH-I620'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i620v' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8299.Samsung SGH-I620'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHI620/1.0 Browser/Opera/8.65 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8300.Samsung SGH-I620'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SEC-SGHI620/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8301.Samsung SGH-I620'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Vodafone/1.0/SamsungSGHI620V/I620BUGFA' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8302.Samsung SGH-i637'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I637/UCHL1 Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8303.Samsung SGH-i637'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I637/UCHL1 Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8304.Samsung SGH-i640V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SAMSUNG-SGH-i640V/BUGJ2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8305.Samsung SGH-i640V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) SAMSUNG-SGH-i640V/BUGJ2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8306.Samsung SGH-i688'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i688_CMCC/1.0 Release/03.07 Browser/IE6 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8307.Samsung SGH-i688'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i688_CMCC/1.0 Release/03.07 Browser/IE6 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8308.Samsung SGH-i707'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) SAMSUNG;SGH-i707' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8309.Samsung SGH-i707'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) SAMSUNG;SGH-i707' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8310.Samsung SGH-I718'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i718' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8311.Samsung SGH-I718'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i718' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8312.Samsung SGH-I718 Plus'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i718plus_CMCC/1.0 Release/03.07 Browser/IE6 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8313.Samsung SGH-I718 Plus'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i718plus_CMCC/1.0 Release/03.07 Browser/IE6 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8314.Samsung SGH-I807D'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-ca; SAMSUNG-SGH-I807D Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8315.Samsung SGH-I807D'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-ca; SAMSUNG-SGH-I807D Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8316.Samsung SGH-I8315'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I8315-vodafone/I8315BUHH1 Linux/XOcean/R1 Opera/9.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8317.Samsung SGH-I8315'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I8315-Vodafone/I8315BUHH1 Linux/XOcean/R1 Opera/9.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8318.Samsung SGH-I8315'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I8315-vodafone/I8315BUHH1 Linux/XOcean/R1 Opera/9.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8319.Samsung SGH-I8315'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I8315-Vodafone/I8315BUHH1 Linux/XOcean/R1 Opera/9.5 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8320.Samsung SGH-I896'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; SAMSUNG-SGH-I896 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 AndroidApp/TFD' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8321.Samsung SGH-I896'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; SAMSUNG-SGH-I896 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 AndroidApp/TFD' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8322.Samsung SGH-I897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SAMSUNG-SGH-I897/I897UCJF6 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8323.Samsung SGH-I897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SAMSUNG-SGH-I897 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8324.Samsung SGH-I897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SAMSUNG-SGH-I897/I897UCJH7 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8325.Samsung SGH-I897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SAMSUNG-SGH-I897/I897UCJJ4 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8326.Samsung SGH-I897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SAMSUNG-SGH-I897/I897UCJF6 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8327.Samsung SGH-I897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SAMSUNG-SGH-I897 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8328.Samsung SGH-I897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SAMSUNG-SGH-I897/I897UCJH7 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8329.Samsung SGH-I897'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SAMSUNG-SGH-I897/I897UCJJ4 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8330.Samsung SGH-I907'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I907/UCHI5 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8331.Samsung SGH-I907'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I907/UCID1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8332.Samsung SGH-I907'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I907/UCHI5 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8333.Samsung SGH-I907'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-I907/UCID1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8334.Samsung SGH-i908'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i908/1.0 Release/03.07 Browser/IE6 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8335.Samsung SGH-i908'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-i908/1.0 Release/03.07 Browser/IE6 Profile/MIDP-2.0 Configuration/CLDC-1.1 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8336.Samsung SGH-i917'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) SAMSUNG;SGH-i917' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8337.Samsung SGH-i917'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) SAMSUNG;SGH-i917' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8338.Samsung SGH-I997'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SAMSUNG-SGH-I997 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8339.Samsung SGH-I997'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SAMSUNG-SGH-I997 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8340.Samsung SGH-J150'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J150/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8341.Samsung SGH-J150'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J150B/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8342.Samsung SGH-J150'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J150/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8343.Samsung SGH-J150'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J150B/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8344.Samsung SGH-J160'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J160/J160XEGK1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8345.Samsung SGH-J160'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J160/J160XEGK1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8346.Samsung SGH-J208'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J208/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8347.Samsung SGH-J208'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J208/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8348.Samsung SGH-J700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-SGH-J700V/BUHA3/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8349.Samsung SGH-J700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-SGH-J700V/JBHC1/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8350.Samsung SGH-J700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-SGH-J700V/BUHA3/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8351.Samsung SGH-J700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SAMSUNG-SGH-J700V/JBHC1/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8352.Samsung SGH-J700L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J700-ORANGE/J700ABHA2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8353.Samsung SGH-J700L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J700L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8354.Samsung SGH-J700L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J700/J700XAHA6 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8355.Samsung SGH-J700L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J700-ORANGE/J700ABHA2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8356.Samsung SGH-J700L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J700L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8357.Samsung SGH-J700L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J700/J700XAHA6 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8358.Samsung SGH-J706'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J706/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8359.Samsung SGH-J706'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J706/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8360.Samsung SGH-J770'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J770/J770XAHI2 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8361.Samsung SGH-J770'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J770/J770XAHI2 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8362.Samsung SGH-J800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J800/DDHH6 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8363.Samsung SGH-J800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-J800/DDHH6 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8364.Samsung SGH-L310'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L310/L310XEHD1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8365.Samsung SGH-L310'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L310/L310BXHJ1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8366.Samsung SGH-L310'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L310/L310XEHD1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8367.Samsung SGH-L310'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L310/L310BXHJ1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8368.Samsung SGH-L320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHL320/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8369.Samsung SGH-L320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHL320/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8370.Samsung SGH-L700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L700/PDHJ1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8371.Samsung SGH-L700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L700/JVHI4 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8372.Samsung SGH-L700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L700/PDHJ1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8373.Samsung SGH-L700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L700/JVHI4 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8374.Samsung SGH-L708E'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L708E_CMCC/1.0 RTK-E/1.0 DF/1.0 Release/08.17.2007 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8375.Samsung SGH-L708E'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-L708E_CMCC/1.0 RTK-E/1.0 DF/1.0 Release/08.17.2007 Browser/OpenWave6.2.3.3.c.1.101 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8376.Samsung SGH-L870'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/SGH-L870/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8377.Samsung SGH-L870'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/SGH-L870-ORANGE/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8378.Samsung SGH-L870'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/SGH-L870/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8379.Samsung SGH-L870'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Samsung/SGH-L870-ORANGE/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8380.Samsung SGH-M110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M110/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8381.Samsung SGH-M110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M110/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8382.Samsung SGH-M130L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M130L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8383.Samsung SGH-M130L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M130L/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8384.Samsung SGH-M600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM600/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8385.Samsung SGH-M600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM600/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8386.Samsung SGH-M600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM600/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8387.Samsung SGH-M600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM600/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8388.Samsung SGH-M600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM600/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8389.Samsung SGH-M600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHM600/1.0 Openwave/6.2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8390.Samsung SGH-M610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M610' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8391.Samsung SGH-M610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M610' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8392.Samsung SGH-M8800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M8800/M8800XXHH6 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8393.Samsung SGH-M8800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-M8800/M8800XXHH6 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8394.Samsung SGH-P710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHP710' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8395.Samsung SGH-P710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHP710' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8396.Samsung SGH-T101G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T101G/T101UDHL4[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8397.Samsung SGH-T101G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T101G/T101UDHL4[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8398.Samsung SGH-T109'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T109/T109UVHG7 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8399.Samsung SGH-T109'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T109/T109UVHG7 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8400.Samsung SGH-T155G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T155G[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8401.Samsung SGH-T155G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T155G[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8402.Samsung SGH-T201G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T201G/T201UDHL1[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8403.Samsung SGH-T201G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T201G/T201UDHL1[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8404.Samsung SGH-T229'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T229/T229UVHC4 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8405.Samsung SGH-T229'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T229/T229UVHC4 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8406.Samsung SGH-T239'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T239/T239UVIC6 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8407.Samsung SGH-T239'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T239/T239UVIC6 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8408.Samsung SGH-T249'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T249/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8409.Samsung SGH-T249'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T249/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8410.Samsung SGH-T255G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T255G[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8411.Samsung SGH-T255G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T255G[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8412.Samsung SGH-T301G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T301G/T301UDHL6 Profile/MIDP-2.0 Configuration/CLDC-1.1[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8413.Samsung SGH-T301G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T301G/T301UDHL6 Profile/MIDP-2.0 Configuration/CLDC-1.1[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8414.Samsung SGH-T329'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T329/T329UVFL8 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8415.Samsung SGH-T329'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T329/T329UVFL8 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8416.Samsung SGH-T336'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T336/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8417.Samsung SGH-T336'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T336/ Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8418.Samsung SGH-T349'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T349/T349UVIC7 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8419.Samsung SGH-T349'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T349/T349UVIC7 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8420.Samsung SGH-T369'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T369/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8421.Samsung SGH-T369'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T369/1.0 NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8422.Samsung SGH-T401G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T401G/T401UDGI2 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8423.Samsung SGH-T401G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T401G/T401UDGI2 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8424.Samsung SGH-T429'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T429/T429UVGG2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8425.Samsung SGH-T429'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T429/T429UVGG2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8426.Samsung SGH-T456'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T456/ NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8427.Samsung SGH-T456'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T456/ NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8428.Samsung SGH-T479'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T479/T479UVJE4 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8429.Samsung SGH-T479'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T479/T479UVJE4 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8430.Samsung SGH-T539'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T539/T539UVGH5 Profile/MIDP-2.0 Configuration/CLDC-1.1 NetFront/3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8431.Samsung SGH-T539'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T539/T539UVHA1 Profile/MIDP-2.0 Configuration/CLDC-1.1 NetFront/3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8432.Samsung SGH-T539'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T539/T539UVGH5 Profile/MIDP-2.0 Configuration/CLDC-1.1 NetFront/3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8433.Samsung SGH-T539'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T539/T539UVHA1 Profile/MIDP-2.0 Configuration/CLDC-1.1 NetFront/3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8434.Samsung SGH-T559'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T559/T559UVIFA SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8435.Samsung SGH-T559'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T559/T559UVIFA SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8436.Samsung SGH-T636'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T636/UEHI1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8437.Samsung SGH-T636'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T636/UEHI1 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8438.Samsung SGH-T659'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T659/T659UVIG9 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8439.Samsung SGH-T659'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T659/T659UVIG9 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8440.Samsung SGH-T669B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T669B/T669BMJF9 SHP/VPP/R5 Dolfin/1.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8441.Samsung SGH-T669B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T669B/T669BMJF9 SHP/VPP/R5 Dolfin/1.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8442.Samsung SGH-T729'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T729/T729UVGF9 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8443.Samsung SGH-T729'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T729/T729UVGF9 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8444.Samsung SGH-T739'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T739/T739UVGJ2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8445.Samsung SGH-T739'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T739/T739UVGJ2 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8446.Samsung SGH-T749'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T749/T749UVIF3 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8447.Samsung SGH-T749'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T749/T749UVIF3 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8448.Samsung SGH-T839'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SGH-T839 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1SGH-T839' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8449.Samsung SGH-T839'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SGH-T839 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1SGH-T839' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8450.Samsung SGH-T919'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T919/T919UVHI2 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8451.Samsung SGH-T919'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T919/T919UVHL3 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8452.Samsung SGH-T919'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T919/T919UVHI2 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8453.Samsung SGH-T919'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T919/T919UVHL3 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8454.Samsung SGH-T929'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T929/T929UVLA2 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8455.Samsung SGH-T929'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-T929/T929UVLA2 SHP/VPP/R5 NetFront/3.5 SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8456.Samsung SGH-T959'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SGH-T959 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8457.Samsung SGH-T959'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SGH-T959 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8458.Samsung SGH-T959'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update11.0; en-us; SGH-T959) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8459.Samsung SGH-T959'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SGH-T959 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8460.Samsung SGH-T959'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SGH-T959 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8461.Samsung SGH-T959'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update11.0; en-us; SGH-T959) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8462.Samsung SGH-T959D'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-; SGH-T959D Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8463.Samsung SGH-T959D'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-; SGH-T959D Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8464.Samsung SGH-T959V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SGH-T959V Build/FROYO) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8465.Samsung SGH-T959V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; SGH-T959V Build/FROYO) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8466.Samsung SGH-U600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHU600' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8467.Samsung SGH-U600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHU600/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8468.Samsung SGH-U600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHU600-ORANGE/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8469.Samsung SGH-U600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHU600/BBOGL NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8470.Samsung SGH-U600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHU600B-ORANGE/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8471.Samsung SGH-U600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHU600' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8472.Samsung SGH-U600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHU600/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8473.Samsung SGH-U600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHU600-ORANGE/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8474.Samsung SGH-U600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHU600/BBOGL NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8475.Samsung SGH-U600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHU600B-ORANGE/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8476.Samsung SGH-U608'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U608/1.0 Release/1.24.2007 Browser/NetFront3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8477.Samsung SGH-U608'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U608/1.0 Release/1.24.2007 Browser/NetFront3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8478.Samsung SGH-U700V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700-Vodafone/BUGE7 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8479.Samsung SGH-U700V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700-Vodafone/BUHI2 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8480.Samsung SGH-U700V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700-Vodafone/BUGE7 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8481.Samsung SGH-U700V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U700-Vodafone/BUHI2 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8482.Samsung SGH-U808E'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U808E/1.0 RTK-E/1.0 DF/1.0 Release/04.23.2008 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8483.Samsung SGH-U808E'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U808E/1.0 RTK-E/1.0 DF/1.0 Release/04.23.2008 Browser/NetFront3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8484.Samsung SGH-U900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U900/BVHF2 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8485.Samsung SGH-U900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U900/BVHF2 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8486.Samsung SGH-U900L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U900L/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8487.Samsung SGH-U900L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U900L/1.0 SHP/VPP/R5 NetFront/3.4 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8488.Samsung SGH-U900V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U900-Vodafone/U900BUHE2 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8489.Samsung SGH-U900V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-U900-Vodafone/U900BUHE2 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8490.Samsung SGH-X466'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHX466' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8491.Samsung SGH-X466'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHX466' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8492.Samsung SGH-X506'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHX506/1.0 TSS/2.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8493.Samsung SGH-X506'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEC-SGHX506/1.0 TSS/2.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8494.Samsung SGH-X526'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-X526/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8495.Samsung SGH-X526'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-X526/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8496.Samsung SGH-X566'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-X566/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8497.Samsung SGH-X566'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-X566/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8498.Samsung SGH-Z548'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-Z548/Openwave 7.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8499.Samsung SGH-Z548'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-Z548/Openwave 7.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8500.Samsung SGH-ZV60'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-ZV60-Vodafone/BUGE4 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8501.Samsung SGH-ZV60'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-ZV60-Vodafone' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8502.Samsung SGH-ZV60'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-ZV60-Vodafone/BUGE4 SHP/VPP/R5 NetFront/3.4 Qtv5.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8503.Samsung SGH-ZV60'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-ZV60-Vodafone' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8504.Samsung SHW M100S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SHW-M100S Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8505.Samsung SHW M100S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SHW-M100S Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8506.Samsung SHW M110S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SHW-M110S Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8507.Samsung SHW M110S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SHW-M110S Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8508.Samsung SHW M110S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SHW-M110S Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8509.Samsung SHW M110S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SHW-M110S Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8510.Samsung SHW-M130k'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ko-kr; SHW-M130k Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8511.Samsung SHW-M130K'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; zh-cn; SHW-M130K Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8512.Samsung SHW-M130k'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ko-kr; SHW-M130k Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8513.Samsung SHW-M130K'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; zh-cn; SHW-M130K Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8514.Samsung SHW-M130L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SHW-M130L Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8515.Samsung SHW-M130L'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SHW-M130L Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8516.Samsung SHW-M190S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; SHW-M190S Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1SHW-M190S' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8517.Samsung SHW-M190S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ko-kr; SHW-M190S Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1SHW-M190S' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8518.Samsung SHW-M240S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; tc-; SHW-M240S Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8519.Samsung SHW-M240S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; tc-; SHW-M240S Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8520.Samsung SKY IM-A650S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SKY IM-A650S Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8521.Samsung SKY IM-A650S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; SKY IM-A650S Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8522.Samsung SPH M230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM230 Infraware-Polaris/5.01 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8523.Samsung SPH M230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM230 Infraware-Polaris/5.01 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8524.Samsung SPH M330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Samsung; SPH_M330; POLARIS/6.1/WAP) MMP/2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8525.Samsung SPH M330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM330 Infraware-Polaris/6.1 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8526.Samsung SPH M330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Samsung; SPH_M330; POLARIS/6.1/WAP) MMP/2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8527.Samsung SPH M330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM330 Infraware-Polaris/6.1 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8528.Samsung SPH M550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NetFront/3.5.1(BREW 3.1.5; U; en-us; SAMSUNG; NetFront/3.1.5/AMB) Sprint M550 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8529.Samsung SPH M550'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NetFront/3.5.1(BREW 3.1.5; U; en-us; SAMSUNG; NetFront/3.1.5/AMB) Sprint M550 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8530.Samsung SPH M560'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM560 AU-MIC-M560/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8531.Samsung SPH M560'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM560 Access-NetFront/3.5.1 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8532.Samsung SPH M560'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NetFront/3.5.1(BREW 3.1.5; U; en-us; SAMSUNG; NetFront/3.1.5/AMB) Sprint M560 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8533.Samsung SPH M560'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM560 AU-MIC-M560/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8534.Samsung SPH M560'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM560 Access-NetFront/3.5.1 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8535.Samsung SPH M560'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NetFront/3.5.1(BREW 3.1.5; U; en-us; SAMSUNG; NetFront/3.1.5/AMB) Sprint M560 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8536.Samsung SPH M810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TELECA-/2.0 (BREW 3.1.5; U; EN-US; SAMSUNG; SPH-M810; Teleca/Q05A/INT) MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8537.Samsung SPH M810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM810 AU-MIC-M810/2.0 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8538.Samsung SPH M810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TELECA-/2.0 (BREW 3.1.5; U; EN-US; SAMSUNG; SPH-M810; Teleca/Q05A/INT) MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8539.Samsung SPH M810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM810 AU-MIC-M810/2.0 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8540.Samsung SPH Z400'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHZ400 AU-MIC-Z400/2.0 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8541.Samsung SPH Z400'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHZ400 AU-MIC-Z400/2.0 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8542.Samsung SPH-A523'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPH-A523/1.0 AU-MIC/2.0 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8543.Samsung SPH-A523'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPH-A523/1.0 AU-MIC/2.0 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8544.Samsung SPH-A860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHA860 AU-MIC/2.0 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8545.Samsung SPH-A860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHA860 AU-MIC/2.0 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8546.Samsung SPH-A960'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHA960 AU-MIC-A960/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8547.Samsung SPH-A960'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHA960 AU-MIC-A960/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8548.Samsung SPH-D700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-D700 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8549.Samsung SPH-D700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-D700 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8550.Samsung SPH-D700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-D700 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8551.Samsung SPH-D700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-D700 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8552.Samsung SPH-I325'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Sprint:SPH-i325 320x240' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8553.Samsung SPH-I325'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Sprint:SPH-i325 320x240' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8554.Samsung SPH-M210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPH-M210/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8555.Samsung SPH-M210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPH-M210/1.0 UP.Browser/6.2.3.8 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8556.Samsung SPH-M240'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Samsung; SPH_M240; POLARIS/6.1/WAP) MMP/2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8557.Samsung SPH-M240'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Samsung; SPH_M240; POLARIS/6.1/WAP) MMP/2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8558.Samsung SPH-M250'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM250 AU-MIC-M250/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8559.Samsung SPH-M250'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM250 AU-MIC-M250/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8560.Samsung SPH-M320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM320 Polaris/5.0 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8561.Samsung SPH-M320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM320 Infraware-Polaris/5.01 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8562.Samsung SPH-M320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM320 Polaris-M320/2.0 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8563.Samsung SPH-M320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM320 Polaris/5.0 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8564.Samsung SPH-M320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM320 Infraware-Polaris/5.01 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8565.Samsung SPH-M320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM320 Polaris-M320/2.0 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8566.Samsung SPH-M350'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM350 Access-NetFront/3.1.5 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8567.Samsung SPH-M350'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM350 Access-NetFront/3.1.5 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8568.Samsung SPH-M510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM510 AU-OBIGO/Q04C1-1.22 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8569.Samsung SPH-M510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM510 AU-OBIGO/Q04C1-1.22 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8570.Samsung SPH-M530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM530 AU-OBIGO/Q04C1-1.22 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8571.Samsung SPH-M530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM530 AU-OBIGO/Q04C1-1.22 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8572.Samsung SPH-M540'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM540 Polaris/6.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8573.Samsung SPH-M540'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPH-M540/1.0 AU-MIC/2.0 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8574.Samsung SPH-M540'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPH-M540-parrot/1.0 AU-MIC/2.0 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8575.Samsung SPH-M540'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM540BST Polaris/6.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8576.Samsung SPH-M540'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM540 Polaris/6.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8577.Samsung SPH-M540'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPH-M540/1.0 AU-MIC/2.0 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8578.Samsung SPH-M540'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPH-M540-parrot/1.0 AU-MIC/2.0 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8579.Samsung SPH-M540'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM540BST Polaris/6.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8580.Samsung SPH-M630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM630 Polaris/6.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8581.Samsung SPH-M630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM630 Polaris/6.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8582.Samsung SPH-M800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TELECA-/2.0 (BREW 3.1.5; U; EN-US; SAMSUNG; SPH-M800; Teleca/Q05A/INT) MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8583.Samsung SPH-M800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (U; BREW 3.1.5; en-US; Teleca/Q05A/INT)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8584.Samsung SPH-M800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM800 AU-OBIGO/Q05A-3.13 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8585.Samsung SPH-M800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (U; BREW 3.1.5; en-US; Teleca/Q05A/INT/SAM-M800)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8586.Samsung SPH-M800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPH-M800/1.0 AU-MIC/2.0 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8587.Samsung SPH-M800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TELECA-/2.0 (BREW 3.1.5; U; EN-US; SAMSUNG; SPH-M800; Teleca/Q05A/INT) MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8588.Samsung SPH-M800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (U; BREW 3.1.5; en-US; Teleca/Q05A/INT)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8589.Samsung SPH-M800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHM800 AU-OBIGO/Q05A-3.13 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8590.Samsung SPH-M800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (U; BREW 3.1.5; en-US; Teleca/Q05A/INT/SAM-M800)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8591.Samsung SPH-M800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPH-M800/1.0 AU-MIC/2.0 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8592.Samsung SPH-M820-BST'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; es-us; SPH-M820-BST Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8593.Samsung SPH-M820-BST'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; es-us; SPH-M820-BST Build/FROYO) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8594.Samsung SPH-M900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; SPH-M900) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8595.Samsung SPH-M900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; SPH-M900 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8596.Samsung SPH-M900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; SPH-M900 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8597.Samsung SPH-M900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-M900 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8598.Samsung SPH-M900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; SPH-M900) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8599.Samsung SPH-M900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; SPH-M900 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8600.Samsung SPH-M900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; SPH-M900 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8601.Samsung SPH-M900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-M900 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8602.Samsung SPH-M910'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-M910 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8603.Samsung SPH-M910'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-M910 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8604.Samsung SPH-M910'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-M910 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8605.Samsung SPH-M910'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-M910 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8606.Samsung SPH-M920'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-M920 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8607.Samsung SPH-M920'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SPH-M920 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8608.Samsung Sprint SPH i350'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Sprint-SPH-i350' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8609.Samsung Sprint SPH i350'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Sprint-SPH-i350' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8610.Samsung SWH-M110S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ko-kr; SHW-M110S Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8611.Samsung SWH-M110S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ko-kr; SHW-M110S Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8612.Samsung YP-GB70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; YP-GB70 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8613.Samsung YP-GB70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; YP-GB70 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8614.Samsung Z400'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHZ400' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8615.Samsung Z400'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Samsung-SPHZ400' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8616.Samsung ZV40'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-ZV40' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8617.Samsung ZV40'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-ZV40-Vodafone' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8618.Samsung ZV40'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-ZV40-Vodafone/1.0 SHP/VPP/R5 NetFront/3.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8619.Samsung ZV40'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-ZV40' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8620.Samsung ZV40'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-ZV40-Vodafone' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8621.Samsung ZV40'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SAMSUNG-SGH-ZV40-Vodafone/1.0 SHP/VPP/R5 NetFront/3.3 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8622.Sanyo MM5600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone MM-5600/US/1.0) NetFront/3.1 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8623.Sanyo MM5600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone MM-5600/US/1.0) NetFront/3.1 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8624.Sanyo PLS6600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone PLS6600/US/1.0) NetFront/3.1 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8625.Sanyo PLS6600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone PLS6600/US/1.0) NetFront/3.1 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8626.Sanyo SCP PRO200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone SCP-PRO200/US/1.0) NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8627.Sanyo SCP PRO200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sanyo_SCP-PRO200CA Access-NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8628.Sanyo SCP PRO200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone SCP-PRO200/US/1.0) NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8629.Sanyo SCP PRO200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sanyo_SCP-PRO200CA Access-NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8630.Sanyo SCP-6750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (REX; U; en-us; Sanyo; SCP-6750/US; NetFront/3.4/AMB)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8631.Sanyo SCP-6750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sanyo_SCP-6750CA Access-NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8632.Sanyo SCP-6750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone SCP-6750/US/1.0) NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8633.Sanyo SCP-6750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (REX; U; en-us; Sanyo; SCP-6750/US; NetFront/3.4/AMB)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8634.Sanyo SCP-6750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sanyo_SCP-6750CA Access-NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8635.Sanyo SCP-6750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone SCP-6750/US/1.0) NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8636.Sanyo SCP-6780'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Brew MP 1.0.2; U; en-us; Sanyo; NetFront/3.5.1/AMB) Sprint SCP-6780' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8637.Sanyo SCP-6780'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Brew MP 1.0.2; U; en-us; Sanyo; NetFront/3.5.1/AMB) Sprint SCP-6780' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8638.Sanyo SCP-PRO700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone SCP-PRO700/US/1.0) NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8639.Sanyo SCP-PRO700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone SCP-PRO700/US/1.0) NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8640.Sanyo SCP-PRO700CA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sanyo_SCP-PRO700CA Access-NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8641.Sanyo SCP-PRO700CA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sanyo_SCP-PRO700CA Access-NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8642.Sanyo SCP2700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Sanyo; Polaris/6.0/AMB) Sprint SCP-2700' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8643.Sanyo SCP2700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Sanyo; Polaris/6.0/AMB) PL2700' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8644.Sanyo SCP2700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Sanyo; Polaris/6.0/AMB) Sprint SCP-2700' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8645.Sanyo SCP2700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Sanyo; Polaris/6.0/AMB) PL2700' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8646.Sanyo SCP3800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone SCP-3800/US/1.0) NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8647.Sanyo SCP3800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone SCP-3800/US/1.0) NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8648.Sanyo SCP3800CA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sanyo_SCP-3800CA Access-NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8649.Sanyo SCP3800CA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sanyo_SCP-3800CA Access-NetFront/3.4 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8650.Sanyo SCP3810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Sanyo; NetFront/3.5.1/AMB) Sprint SCP-3810' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8651.Sanyo SCP3810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Sanyo; NetFront/3.5.1/AMB) Sprint SCP-3810' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8652.Sanyo SCP6760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Sanyo; NetFront/3.5.1/AMB) Boost SCP6760' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8653.Sanyo SCP6760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (BREW 3.1.5; U; en-us; Sanyo; NetFront/3.5.1/AMB) Boost SCP6760' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8654.Sanyo SCP7000CA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sanyo-SCP7000CA NetFront/3.1 MMP/2.0 Mozilla/4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8655.Sanyo SCP7000CA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sanyo-SCP7000CA NetFront/3.1 MMP/2.0 Mozilla/4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8656.Sanyo VI-2300 (SCP-2300)'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone SCP-2300/CA/1.0) NetFront/3.1 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8657.Sanyo VI-2300 (SCP-2300)'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (MobilePhone SCP-2300/CA/1.0) NetFront/3.1 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8658.Sharp 003SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; SBM003SH Build/S0800) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8659.Sharp 003SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SBM003SH Build/S1201) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8660.Sharp 003SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SBM003SH Build/S1400) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8661.Sharp 003SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja_jp; SBM003SH Build/FROYO) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 NetFrontLifeBrowser/2.2 Mobile (Dragonfruit)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8662.Sharp 003SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; SBM003SH Build/S0800) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8663.Sharp 003SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SBM003SH Build/S1201) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8664.Sharp 003SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SBM003SH Build/S1400) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8665.Sharp 003SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja_jp; SBM003SH Build/FROYO) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 NetFrontLifeBrowser/2.2 Mobile (Dragonfruit)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8666.Sharp 005SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SBM005SH Build/S0500) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8667.Sharp 005SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SBM005SH Build/S0500) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8668.Sharp 006SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM006SH Build/S0012) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8669.Sharp 006SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM006SH Build/A5160) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8670.Sharp 006SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM006SH Build/E5141) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8671.Sharp 006SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM006SH Build/R5070) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8672.Sharp 006SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM006SH Build/S0012) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8673.Sharp 006SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM006SH Build/A5160) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8674.Sharp 006SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM006SH Build/E5141) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8675.Sharp 006SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM006SH Build/R5070) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8676.Sharp Alex-uo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Alex-uo/1.0 Qualcom/6290 Release/3.20.2010 Browser/Obigo Q7 Profile/MIDP-2.0 Configuration/CLDC1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8677.Sharp Alex-uo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Alex-uo/1.0 Qualcom/6290 Release/3.20.2010 Browser/Obigo Q7 Profile/MIDP-2.0 Configuration/CLDC1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8678.Sharp DM009SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; DM009SH Build/S0300) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8679.Sharp DM009SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; DM009SH Build/S0300) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8680.Sharp EB-W51GJ'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; ja-jp; EB-W51GJ Build/RB10Z033) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8681.Sharp EB-W51GJ'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; ja-jp; EB-W51GJ Build/RB112141) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8682.Sharp EB-W51GJ'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; ja-jp; EB-W51GJ Build/RB114152) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8683.Sharp EB-W51GJ'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; ja-jp; EB-W51GJ Build/RB10Z033) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8684.Sharp EB-W51GJ'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; ja-jp; EB-W51GJ Build/RB112141) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8685.Sharp EB-W51GJ'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; ja-jp; EB-W51GJ Build/RB114152) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8686.Sharp EB-WX1GJ'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; ja-jp; EB-WX1GJ Build/AN10Y202) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8687.Sharp EB-WX1GJ'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; ja-jp; EB-WX1GJ Build/RC114152) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8688.Sharp EB-WX1GJ'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; ja-jp; EB-WX1GJ Build/AN10Y202) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8689.Sharp EB-WX1GJ'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; ja-jp; EB-WX1GJ Build/RC114152) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8690.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/S6191) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8691.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/S2151) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8692.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/S3082) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8693.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/S9200) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8694.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/SA180) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8695.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/SC030) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8696.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/S6191) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8697.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/S2151) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8698.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/S3082) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8699.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/S9200) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8700.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/SA180) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8701.Sharp IS01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/SC030) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8702.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS03 Build/SB060) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8703.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS03 Build/RB060) Appl Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8704.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS03 Build/S2080) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8705.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S3251) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8706.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S3251) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8707.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS03 Build/RA201) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8708.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S5160) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8709.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS03 Build/SB060) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8710.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS03 Build/RB060) Appl Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8711.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS03 Build/S2080) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8712.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S3251) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8713.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S3251) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8714.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS03 Build/RA201) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8715.Sharp IS03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S5160) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8716.Sharp IS05'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS05 Build/S2251) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8717.Sharp IS05'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS05 Build/S2251) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8718.Sharp IS05'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja_jp; IS05 Build/FROYO) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 NetFrontLifeBrowser/2.2 Mobile (Dragonfruit)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8719.Sharp IS05'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS05 Build/S5160) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8720.Sharp IS05'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS05 Build/S2251) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8721.Sharp IS05'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS05 Build/S2251) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8722.Sharp IS05'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja_jp; IS05 Build/FROYO) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 NetFrontLifeBrowser/2.2 Mobile (Dragonfruit)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8723.Sharp IS05'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS05 Build/S5160) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8724.Sharp IS11SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; IS11SH Build/R6041) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8725.Sharp IS11SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; IS11SH Build/R6041) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8726.Sharp IS12SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; IS12SH Build/R6080) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8727.Sharp IS12SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM007SH Build/A6220) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8728.Sharp IS12SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; IS12SH Build/R6080) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8729.Sharp IS12SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM007SH Build/A6220) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8730.Sharp SH-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SH-03C Build/SB110) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8731.Sharp SH-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SH-03C Build/S1130) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8732.Sharp SH-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SH-03C Build/S1130) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8733.Sharp SH-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; SH-03C Build/S3240) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8734.Sharp SH-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; SH-03C Build/S3240) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 (Shinbun Browser)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8735.Sharp SH-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SH-03C Build/SB110) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8736.Sharp SH-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SH-03C Build/S1130) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8737.Sharp SH-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SH-03C Build/S1130) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8738.Sharp SH-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; SH-03C Build/S3240) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8739.Sharp SH-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; SH-03C Build/S3240) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 (Shinbun Browser)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8740.Sharp SH-10B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SH-10B Build/S7023) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8741.Sharp SH-10B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SH-10B Build/S1110) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8742.Sharp SH-10B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SH-10B Build/S7023) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8743.Sharp SH-10B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SH-10B Build/S1110) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8744.Sharp SH-12C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SH-12C Build/S5050) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8745.Sharp SH-12C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SH-12C Build/S5050) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8746.Sharp SH-13C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SH-13C Build/A6200) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8747.Sharp SH-13C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SH-13C Build/R6152) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8748.Sharp SH-13C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SH-13C Build/A6200) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8749.Sharp SH-13C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SH-13C Build/R6152) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8750.Sharp STX2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SHARP-STX2/MC.40; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.19039; U; en-US) Opera 9.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8751.Sharp STX2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SHARP-STX2/MC.40; Mozilla/5.0 (Profile/MIDP-2.0 Configuration/CLDC-1.1; Opera Mini/att/4.2.19039; U; en-US) Opera 9.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8752.Sharp TQ GX F200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SHARP-TQ-GX-F200/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.0 UP.Browser/6.2.3.3.d.1.110 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8753.Sharp TQ GX F200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SHARP-TQ-GX-F200/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.0 UP.Browser/6.2.3.3.d.1.110 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8754.Sharp WS011SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; SHARP/WS011SH; PPC; 480x800) Opera 8.7 [ja]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8755.Sharp WS011SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) WS011SH' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8756.Sharp WS011SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; SHARP/WS011SH; PPC; 480x800) Opera 8.7 [ja]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8757.Sharp WS011SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) WS011SH' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8758.Sharp WS020SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) WS020SH' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8759.Sharp WS020SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) WS020SH' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8760.Siemens A31a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-A31a/03 Profile/MIDP-1.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.3.102 (GUI) MMP/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8761.Siemens A31a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-A31a/03 Profile/MIDP-1.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.3.102 (GUI) MMP/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8762.Siemens A31C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-A31C/02 Profile/MIDP-1.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.3.102 (GUI) MMP/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8763.Siemens A31C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-A31C/02 Profile/MIDP-1.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.3.102 (GUI) MMP/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8764.Siemens AL21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-AL21' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8765.Siemens AL21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-AL21/07 Profile/MIDP-1.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.3.102 (GUI)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8766.Siemens AL21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-AL21' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8767.Siemens AL21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-AL21/07 Profile/MIDP-1.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.3.102 (GUI)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8768.Siemens AL21a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-A21a/03 Profile/MIDP-1.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.3.102 (GUI) MMP/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8769.Siemens AL21a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-A21a/03 Profile/MIDP-1.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.3.102 (GUI) MMP/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8770.Siemens AP75'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-AP75a/6.1.0.7 UP.Browser/6.1.0.7.8.c.1.103 (GUI) MMP/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8771.Siemens AP75'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-AP75a/6.1.0.7 UP.Browser/6.1.0.7.8.c.1.103 (GUI) MMP/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8772.Siemens C65-China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-C6C/16 UP.Browser/7.0.0.1.c.3 (GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8773.Siemens C65-China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-C6C/25 UP.Browser/7.0.0.1.c.3 (GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8774.Siemens C65-China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-C6C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8775.Siemens C65-China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-C6C/16 UP.Browser/7.0.0.1.c.3 (GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8776.Siemens C65-China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-C6C/25 UP.Browser/7.0.0.1.c.3 (GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8777.Siemens C65-China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-C6C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8778.Siemens CF110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-C11C/11 Profile/MIDP-1.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.3.102 (GUI) MMP/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8779.Siemens CF110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-C11C/11 Profile/MIDP-1.0 Configuration/CLDC-1.0 UP.Browser/6.1.0.7.3.102 (GUI) MMP/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8780.Siemens CX65 China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-CX6C/04 UP.Browser/7.0.0.1.181 (GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8781.Siemens CX65 China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-CX6C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8782.Siemens CX65 China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-CX6C/04 UP.Browser/7.0.0.1.181 (GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8783.Siemens CX65 China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-CX6C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8784.Siemens ELC1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-ELC1/36 UP.Browser/7.1.0.e.24(GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8785.Siemens ELC1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-ELC1/36 UP.Browser/7.1.0.e.24(GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8786.Siemens SL65-China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-SL6C/16 UP.Browser/7.0.0.1.c.3 (GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8787.Siemens SL65-China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-SL6C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8788.Siemens SL65-China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-SL6C/16 UP.Browser/7.0.0.1.c.3 (GUI) MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8789.Siemens SL65-China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SIE-SL6C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8790.SK Telesys S100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SK-S100 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8791.SK Telesys S100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SK-S100 Build/FRF91) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8792.Skybee 83AT'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SKYBEE-83AT' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8793.Skybee 83AT'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SKYBEE-83AT' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8794.Skyworth T650'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SKYWORTH-T650/S100/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8795.Skyworth T650'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SKYWORTH-T650/S100/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8796.Skyworth T700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SKYWORTH-T700/S200/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8797.Skyworth T700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SKYWORTH-T700/S200/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8798.SmartQ V5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; zh-cn; SmartQ V5 Build/ERD79) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8799.SmartQ V5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; zh-cn; SmartQ V5 Build/ERD79) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8800.Softbank 001DL'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; 001DL Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8801.Softbank 001DL'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2. 2.1; ja-jp; 001DL Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8802.Softbank 001DL'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2. 2.1; ja-jp; 001DL Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8803.Softbank 001DL'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; Dell Streak Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8804.Softbank 001DL'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Motorola-XT502 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8805.Softbank 001DL'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; 001DL Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8806.Softbank 001DL'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2. 2.1; ja-jp; 001DL Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8807.Softbank 001DL'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2. 2.1; ja-jp; 001DL Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8808.Softbank 001DL'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; Dell Streak Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8809.Softbank 001DL'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Motorola-XT502 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8810.Softbank 001N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/001N/NJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8811.Softbank 001N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/001N/NJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8812.Softbank 001P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/001P/PJP10/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8813.Softbank 001P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/001P/PJP10/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8814.Softbank 001SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/001SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8815.Softbank 001SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/001SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8816.Softbank 002SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/002SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8817.Softbank 002SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/002SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8818.Softbank 003Z'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; 003Z Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8819.Softbank 003Z'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; ja-jp; 003Z Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8820.Softbank 004SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/004SH/SHJ001/SN*************** Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8821.Softbank 004SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/004SH/SHJ001/SN*************** Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8822.Softbank 705SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/705SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8823.Softbank 705SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/705SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8824.Softbank 706P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/706P/PJP10/SNXXXXXXXXXXXXXXX Browser/Teleca-Browser/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8825.Softbank 706P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/706P/PJP10/SNXXXXXXXXXXXXXXX Browser/Teleca-Browser/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8826.Softbank 706SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/706SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8827.Softbank 706SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/706SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8828.Softbank 707SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/707SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8829.Softbank 707SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/707SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8830.Softbank 707SC2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/707SC2/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8831.Softbank 707SC2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/707SC2/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8832.Softbank 708SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/708SC/SCJ001 Browser/NetFront/3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8833.Softbank 708SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/708SC/SCJ001 Browser/NetFront/3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8834.Softbank 709SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/709SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8835.Softbank 709SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/709SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8836.Softbank 740SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/001SC/SCJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8837.Softbank 740SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/001SC/SCJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8838.Softbank 802N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V802N/NJ003 Browser/UP.Browser/7.0.2.N.108 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.2.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8839.Softbank 802N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V802N/NJ003 Browser/UP.Browser/7.0.2.N.108 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.2.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8840.Softbank 803T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V803T/TJ001 Browser/VF-Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.2.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8841.Softbank 803T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V803T/TJ001 Browser/VF-Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.2.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8842.Softbank 804SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V804SH/SHJ001 Browser/UP.Browser/7.0.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.3.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8843.Softbank 804SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V804SH/SHJ001 Browser/UP.Browser/7.0.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.3.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8844.Softbank 805SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/805SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8845.Softbank 805SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/805SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8846.Softbank 810SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/810SH/SHJ002/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8847.Softbank 810SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/810SH/SHJ002/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8848.Softbank 810T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/810T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8849.Softbank 810T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/810T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8850.Softbank 811SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/811SH/SHJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8851.Softbank 811SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/811SH/SHJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8852.Softbank 811T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/811T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8853.Softbank 811T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/811T/TJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8854.Softbank 811T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/811T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8855.Softbank 811T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/811T/TJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8856.Softbank 812SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/812SH/SHJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8857.Softbank 812SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/812SH/SHJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8858.Softbank 813SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/813SH/SHJ002 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8859.Softbank 813SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/813SH/SHJ002 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8860.Softbank 813T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/813T/TJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8861.Softbank 813T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/813T/TJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8862.Softbank 814T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/814T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8863.Softbank 814T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/814T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8864.Softbank 815SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (815SH;SoftBank) NetFront/3.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8865.Softbank 815SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/815SH/SHJ001 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8866.Softbank 815SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (815SH;SoftBank) NetFront/3.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8867.Softbank 815SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/815SH/SHJ001 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8868.Softbank 815T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/815T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8869.Softbank 815T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/815T/TJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8870.Softbank 815T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/815T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8871.Softbank 815T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/815T/TJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8872.Softbank 816SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/816SH/SHJ001 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8873.Softbank 816SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/816SH/SHJ001 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8874.Softbank 820P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/820P/PJP10 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8875.Softbank 820P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/820P/PJP10 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8876.Softbank 820SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/820SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8877.Softbank 820SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/820SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8878.Softbank 821P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/821P/PJP10 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8879.Softbank 821P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/821P/PJP10 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8880.Softbank 821SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/821SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8881.Softbank 821SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (821SC;SoftBank) NetFront/3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8882.Softbank 821SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/821SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8883.Softbank 821SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (821SC;SoftBank) NetFront/3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8884.Softbank 822P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/822P/PJP10 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8885.Softbank 822P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/822P/PJP10 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8886.Softbank 823SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/823SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8887.Softbank 823SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/823SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8888.Softbank 825SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/825SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8889.Softbank 825SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/825SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8890.Softbank 830CA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/830CA/CAJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8891.Softbank 830CA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/830CA/CAJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8892.Softbank 830P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/830P/PJP10/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8893.Softbank 830P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/830P/PJP10/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8894.Softbank 840N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/840N/NJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8895.Softbank 840N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/840N/NJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8896.Softbank 840SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/840SC/SCJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8897.Softbank 840SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/840SC/SCJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8898.Softbank 840Z'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/840Z/ZJ001/SN' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8899.Softbank 840Z'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/840Z/ZJ001/SN' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8900.Softbank 841N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/841N/NJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8901.Softbank 841N'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/841N/NJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8902.Softbank 841P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/002P/PJP10/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8903.Softbank 841P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/002Pe/PJP10/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8904.Softbank 841P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/002P/PJP10/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8905.Softbank 841P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/002Pe/PJP10/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8906.Softbank 841SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/841SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8907.Softbank 841SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/841SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8908.Softbank 842P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/842P/PJP10' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8909.Softbank 842P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/842P/PJP10' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8910.Softbank 842SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/842SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8911.Softbank 842SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/842SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8912.Softbank 843SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/843SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8913.Softbank 843SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/843SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8914.Softbank 902SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V902SH/SHJ002 Browser/UP.Browser/7.0.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.2.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8915.Softbank 902SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V902SH/SHJ002 Browser/UP.Browser/7.0.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.2.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8916.Softbank 903T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V903T/TJ001 Browser/VF-Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.2.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8917.Softbank 903T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V903T/TJ001 Browser/VF-Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.2.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8918.Softbank 904SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V904SH/SHJ001 Browser/VF-NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8919.Softbank 904SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V904SH/SHJ001 Browser/VF-NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8920.Softbank 904T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V904T/TJ001 Browser/VF-Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.2.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8921.Softbank 904T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/V904T/TJ001 Browser/VF-Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Ext-J-Profile/JSCL-1.2.2 Ext-V-Profile/VSCL-2.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8922.Softbank 910SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/910SH/SHJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8923.Softbank 910SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (910SH;SoftBank) NetFront/3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8924.Softbank 910SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/910SH/SHJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8925.Softbank 910SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (910SH;SoftBank) NetFront/3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8926.Softbank 910T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/910T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8927.Softbank 910T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/910T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8928.Softbank 911SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/911SH/SHJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8929.Softbank 911SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/911SH/SHJ002 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8930.Softbank 911SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (911SH;SoftBank;SNXXXXXXXXXXXXXXX) NetFront/3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8931.Softbank 911SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/911SH/SHJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8932.Softbank 911SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/911SH/SHJ002 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8933.Softbank 911SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (911SH;SoftBank;SNXXXXXXXXXXXXXXX) NetFront/3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8934.Softbank 911T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/911T/TJ002/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8935.Softbank 911T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/911T/TJ002 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8936.Softbank 911T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/911T/TJ002/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8937.Softbank 911T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/911T/TJ002 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8938.Softbank 912T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/912T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8939.Softbank 912T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/912T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8940.Softbank 913SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/913SH/SHJ001 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8941.Softbank 913SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (913SH;SoftBank;SN353695011299849) NetFront/3.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8942.Softbank 913SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/913SH/SHJ001 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8943.Softbank 913SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (913SH;SoftBank;SN353695011299849) NetFront/3.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8944.Softbank 920P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/920P/PJP11 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8945.Softbank 920P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/920P/PJP10 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8946.Softbank 920P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/920P/PJP11 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8947.Softbank 920P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/920P/PJP10 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8948.Softbank 920SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/920SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8949.Softbank 920SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (920SC;SoftBank) NetFront/3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8950.Softbank 920SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/920SC/SCJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8951.Softbank 920SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (920SC;SoftBank) NetFront/3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8952.Softbank 920SH YK'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/920SH/SHJ001 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8953.Softbank 920SH YK'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/920SH/SHJ001 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8954.Softbank 920T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/920T/TJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8955.Softbank 920T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/920T/TJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8956.Softbank 921P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/921P/PJP10/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8957.Softbank 921P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/921P/PJP10/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8958.Softbank 921T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/921T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8959.Softbank 921T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/921T/TJ001 Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8960.Softbank 922SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/922SH/SHJ001 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8961.Softbank 922SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (922SH;SoftBank) NetFront/3.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8962.Softbank 922SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/922SH/SHJ001 Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8963.Softbank 922SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (922SH;SoftBank) NetFront/3.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8964.Softbank 930SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/930SC/SCJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8965.Softbank 930SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (930SC;SoftBank;SNXXXXXXXXXXXXXXX) NetFront/3.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8966.Softbank 930SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/930SC/SCJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8967.Softbank 930SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (930SC;SoftBank;SNXXXXXXXXXXXXXXX) NetFront/3.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8968.Softbank 931SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/931SC/SCJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8969.Softbank 931SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/931SC/SCJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8970.Softbank 931SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/931SH/SHJ002/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8971.Softbank 931SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/931SH/SHJ002/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8972.Softbank 932SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/932SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8973.Softbank 932SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/932SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8974.Softbank 933SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/933SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8975.Softbank 933SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (933SH;SoftBank;SNXXXXXXXXXXXXXXX) NetFront/3.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8976.Softbank 933SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/933SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8977.Softbank 933SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (933SH;SoftBank;SNXXXXXXXXXXXXXXX) NetFront/3.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8978.Softbank 941SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/941SC/SCJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8979.Softbank 941SC'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/941SC/SCJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8980.Softbank 942P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/942P/PJP10' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8981.Softbank 942P'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/942P/PJP10' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8982.Softbank 944SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/944SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8983.Softbank 944SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/944SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8984.Softbank 945SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/945SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8985.Softbank 945SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/945SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8986.Softbank DM002SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/DM002SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8987.Softbank DM002SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/DM002SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8988.Softbank DM005SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/DM007SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8989.Softbank DM005SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/DM008SH/SHJ001/SN*************** Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8990.Softbank DM005SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/DM007SH/SHJ001/SNXXXXXXXXXXXXXXX Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8991.Softbank DM005SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/2.0/DM008SH/SHJ001/SN*************** Browser/NetFront/3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8992.Softbank DM006SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/DM006SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8993.Softbank DM006SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/DM006SH/SHJ001' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8994.Softbank SBM007SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM007SH Build/E5261) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8995.Softbank SBM007SH'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SBM007SH Build/E5261) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8996.Sonim 3200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX518/1.0 MTK6253/09B Release/15.08.2010 Browser/Obigo2.0 Profile/MIDP-2.1/Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8997.Sonim 3200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PhilipsX518/1.0 MTK6253/09B Release/15.08.2010 Browser/Obigo2.0 Profile/MIDP-2.1/Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8998.Sonim PhilipsX116'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Philips X116' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8999.Sonim PhilipsX116'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Philips X116' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9000.Sonim XP3.20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonimXP3.2/V07 NXP5210/DV9 Release/12.10.2007 Obigo/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9001.Sonim XP3.20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonimXP3.2/V07 NXP5210/DV9 Release/12.10.2007 Obigo/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9002.Sony mylo COM-2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux, Sony/COM2/1.01 [en]; like Gecko/2007) Firefox/2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9003.Sony mylo COM-2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux, Sony/COM2/1.00 [en]; like Gecko/2007) Firefox/2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9004.Sony mylo COM-2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux, Sony/COM2/1.01 [en]; like Gecko/2007) Firefox/2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9005.Sony mylo COM-2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux, Sony/COM2/1.00 [en]; like Gecko/2007) Firefox/2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9006.Sony NWZ-X1060'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (DigitalMediaPlayer; Walkman/NWZ-X1000 Series/1.00; like Gecko; wireless) NetFront/3.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9007.Sony NWZ-X1060'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (DigitalMediaPlayer; Walkman/NWZ-X1000 Series/1.00; like Gecko; wireless) NetFront/3.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9008.Sony PS Vita'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Playstation Vita 1.50) AppleWebKit/531.22.8 (KHTML, like Gecko)﻿ Silk/3.2﻿' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9009.Sony PSP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PSP (PlayStation Portable); 2.00' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9010.Sony PSP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (PSP (PlayStation Portable); 2.00)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9011.SonyEricsson A195i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonA195i/R1AA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9012.SonyEricsson A195i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonA195i/R1AA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9013.SonyEricsson A260'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonA260/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9014.SonyEricsson A260'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonA260/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9015.SonyEricsson A320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonA320/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9016.SonyEricsson A320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonA320/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9017.SonyEricsson B10'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonB10/R1AA Vodafone/1.0 Browser/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9018.SonyEricsson B10'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonB10/R1AA Vodafone/1.0 Browser/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9019.SonyEricsson C123'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC123/R1CA Browser/ NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9020.SonyEricsson C123'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC123v/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9021.SonyEricsson C123'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC123/R1CA Browser/ NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9022.SonyEricsson C123'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC123v/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9023.SonyEricsson C123 A'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC123a/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9024.SonyEricsson C123 A'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC123a/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9025.SonyEricsson C510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC510' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9026.SonyEricsson C510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC510/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9027.SonyEricsson C510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC510v/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9028.SonyEricsson C510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC510' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9029.SonyEricsson C510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC510/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9030.SonyEricsson C510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC510v/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9031.SonyEricsson C510a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC510a' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9032.SonyEricsson C510a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC510a/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9033.SonyEricsson C510a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC510a' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9034.SonyEricsson C510a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC510a/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9035.SonyEricsson C702'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC702/R3AA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-9.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9036.SonyEricsson C702'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC702/R3CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9037.SonyEricsson C702'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC702/R3EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9038.SonyEricsson C702'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC702/R3AA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-9.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9039.SonyEricsson C702'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC702/R3CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9040.SonyEricsson C702'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC702/R3EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9041.SonyEricsson C901'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC901/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9042.SonyEricsson C901'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC901/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9043.SonyEricsson C902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC902/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9044.SonyEricsson C902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC902v/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9045.SonyEricsson C902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC902v/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9046.SonyEricsson C902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC902/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9047.SonyEricsson C902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC902/R3EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9048.SonyEricsson C902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC902/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9049.SonyEricsson C902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC902v/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9050.SonyEricsson C902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC902v/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9051.SonyEricsson C902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC902/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9052.SonyEricsson C902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC902/R3EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9053.SonyEricsson C903'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC903/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9054.SonyEricsson C903'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC903/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9055.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC905/R1AA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9056.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC905/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9057.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC905v/R1AA Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9058.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC905' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9059.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC905v/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9060.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC905a/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9061.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC905/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9062.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC905v/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9063.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC905/R1AA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9064.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC905/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9065.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC905v/R1AA Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9066.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC905' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9067.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC905v/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9068.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC905a/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9069.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonC905/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9070.SonyEricsson C905'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonC905v/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9071.SonyEricsson CS8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonCS8/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9072.SonyEricsson CS8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonCS8/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9073.SonyEricsson E10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonE10a Build/1.0.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9074.SonyEricsson E10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonE10a Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9075.SonyEricsson E10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonU20a Build/1.0.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9076.SonyEricsson E10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonU20a Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9077.SonyEricsson E10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-ca; E10a Build/1.1.A.0.8) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9078.SonyEricsson E10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonE10a Build/1.0.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9079.SonyEricsson E10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonE10a Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9080.SonyEricsson E10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonU20a Build/1.0.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9081.SonyEricsson E10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonU20a Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9082.SonyEricsson E10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-ca; E10a Build/1.1.A.0.8) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9083.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonE10i Build/1.0.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9084.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonE10i Build/1.6) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9085.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; SonyEricssonE10iv Build/1.0.A.1.37) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9086.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; E10i Build/1.0.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9087.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonE10i Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9088.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-in; SonyEricssonE10i Build/1.1.A.0.8) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9089.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; E10i Build/2.0.2.A.0.24) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9090.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; E10i Build/2.1.1.A.0.6) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9091.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonE10i Build/2.0.2.A.0.24) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9092.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonE10i Build/1.0.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9093.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonE10i Build/1.6) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9094.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; SonyEricssonE10iv Build/1.0.A.1.37) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9095.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; E10i Build/1.0.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9096.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonE10i Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9097.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-in; SonyEricssonE10i Build/1.1.A.0.8) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9098.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; E10i Build/2.0.2.A.0.24) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9099.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; E10i Build/2.1.1.A.0.6) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9100.SonyEricsson E10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonE10i Build/2.0.2.A.0.24) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9101.SonyEricsson E15a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonE15a Build/1.3.A.0.62) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9102.SonyEricsson E15a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-mx; E15a Build/1.3.A.0.50) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1E15a' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9103.SonyEricsson E15a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonE15a Build/1.3.A.0.62) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9104.SonyEricsson E15a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-mx; E15a Build/1.3.A.0.50) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1E15a' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9105.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonE15i Build/1.3.A.0.62) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9106.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-ie; SonyEricssonE15i Build/1.2.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9107.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; bg-bg; E15i Build/1.3.A.0.50) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1E15i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9108.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; E15i Build/2.0.1.A.0.47) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9109.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; SonyEricssonE15iv Build/2.1.1.A.0.6) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9110.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonE15i Build/2.0.1.A.0.47) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9111.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonE15i Build/1.3.A.0.62) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9112.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-ie; SonyEricssonE15i Build/1.2.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9113.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; bg-bg; E15i Build/1.3.A.0.50) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1E15i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9114.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; E15i Build/2.0.1.A.0.47) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9115.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; SonyEricssonE15iv Build/2.1.1.A.0.6) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9116.SonyEricsson E15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonE15i Build/2.0.1.A.0.47) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9117.SonyEricsson E15iv'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; SonyEricssonE15iv Build/1.3.A.0.50) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9118.SonyEricsson E15iv'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; SonyEricssonE15iv Build/1.3.A.0.50) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9119.SonyEricsson F100i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonF100i/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9120.SonyEricsson F100i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonF100i/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9121.SonyEricsson F305'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonF305/R1AA Browser/OpenWave/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.351 (GUI)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9122.SonyEricsson F305'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonF305/R1BB Browser/OpenWave/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9123.SonyEricsson F305'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonF305/R1AA Browser/OpenWave/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.351 (GUI)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9124.SonyEricsson F305'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonF305/R1BB Browser/OpenWave/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9125.SonyEricsson G502'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG502/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9126.SonyEricsson G502'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG502/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9127.SonyEricsson G705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG705/R1AA Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9128.SonyEricsson G705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG705/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9129.SonyEricsson G705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG705/R1AA Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9130.SonyEricsson G705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG705/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9131.SonyEricsson G705u'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG705u/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9132.SonyEricsson G705u'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonG705u/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9133.SonyEricsson Generic A1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonGeneric A1/R8BF Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9134.SonyEricsson Generic A1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonGeneric A1/R8BF Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9135.SonyEricsson IS11S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; IS11S Build/3.0.1.C.1.6) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9136.SonyEricsson IS11S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonIS11S Build/3.0.1.C.1.6) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9137.SonyEricsson IS11S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonSO-02C Build/3.0.1.F.0.99) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9138.SonyEricsson IS11S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; IS11S Build/3.0.1.C.1.6) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9139.SonyEricsson IS11S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonIS11S Build/3.0.1.C.1.6) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9140.SonyEricsson IS11S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonSO-02C Build/3.0.1.F.0.99) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9141.SonyEricsson J10'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ10/R7CA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9142.SonyEricsson J10'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ10/R7CA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9143.SonyEricsson J105'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ105a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9144.SonyEricsson J105'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonj105a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9145.SonyEricsson J105'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ105a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9146.SonyEricsson J105'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonj105a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9147.SonyEricsson J105i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ105i/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9148.SonyEricsson J105i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ105i/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9149.SonyEricsson J108a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ108a/R7DA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9150.SonyEricsson J108a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ108a/R7DA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9151.SonyEricsson J10i2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ10i2/R7AB Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9152.SonyEricsson J10i2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ10i2/R7AB Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9153.SonyEricsson J20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ20/R7BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9154.SonyEricsson J20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; SonyEricssonJ20/R7BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9155.SonyEricsson J20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ20/R7BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9156.SonyEricsson J20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; SonyEricssonJ20/R7BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9157.SonyEricsson J20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ20i/R7BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9158.SonyEricsson J20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ20i/R7CA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9159.SonyEricsson J20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ20i/R7BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9160.SonyEricsson J20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonJ20i/R7CA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9161.SonyEricsson K111i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK111i/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0 SonyEricssonK111i/R1EC Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9162.SonyEricsson K111i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK111i/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0 SonyEricssonK111i/R1EC Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9163.SonyEricsson K310'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9164.SonyEricsson K310'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9165.SonyEricsson K310a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310a' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9166.SonyEricsson K310a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310a' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9167.SonyEricsson K310c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9168.SonyEricsson K310c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310cv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9169.SonyEricsson K310c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9170.SonyEricsson K310c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310cv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9171.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9172.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9173.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i/R2BB SEMC-Browser/4.0.3 Profile/MIDP-2.0 Config' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9174.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9175.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'sonyericssonk310i/r4da java/semc-java/2.0 profile/midp-2.0 configuration/cldc-1.1 untrusted/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9176.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i/R4DA Java/SEMC-Java/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9177.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i/R4EC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9178.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9179.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9180.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i/R2BB SEMC-Browser/4.0.3 Profile/MIDP-2.0 Config' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9181.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9182.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'sonyericssonk310i/r4da java/semc-java/2.0 profile/midp-2.0 configuration/cldc-1.1 untrusted/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9183.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i/R4DA Java/SEMC-Java/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9184.SonyEricsson K310i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310i/R4EC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9185.SonyEricsson K310iv'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310iv' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9186.SonyEricsson K310iv'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9187.SonyEricsson K310iv'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310iv' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9188.SonyEricsson K310iv'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9189.SonyEricsson K530c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK530c/R8BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9190.SonyEricsson K530c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK530c/R8BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9191.SonyEricsson K610im'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK610im' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9192.SonyEricsson K610im'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'portalmmm/2.0 K610im(c100;TB)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9193.SonyEricsson K610im'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'portalmmm/2.0 K610im(c100;TC)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9194.SonyEricsson K610im'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK610im/R1JE Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9195.SonyEricsson K610im'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK610im' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9196.SonyEricsson K610im'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'portalmmm/2.0 K610im(c100;TB)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9197.SonyEricsson K610im'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'portalmmm/2.0 K610im(c100;TC)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9198.SonyEricsson K610im'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK610im/R1JE Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9199.SonyEricsson K630i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK630i/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9200.SonyEricsson K630i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK630i/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9201.SonyEricsson K660i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK660i/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9202.SonyEricsson K660i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK660i/R1ED Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9203.SonyEricsson K660i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK660i/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9204.SonyEricsson K660i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK660i/R1ED Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9205.SonyEricsson K800a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK800a/R8BF Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9206.SonyEricsson K800a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK800a/R8BF Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9207.SonyEricsson K800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK800i/R8BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9208.SonyEricsson K800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK800i/R8BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9209.SonyEricsson K810c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK818c/R6BC Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9210.SonyEricsson K810c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK818c/R6BC Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9211.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK850i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9212.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK850i/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9213.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK850i/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9214.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK850i/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9215.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonK850iv/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9216.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonK850iv/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9217.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK850i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9218.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK850i/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9219.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK850i/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9220.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK850i/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9221.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonK850iv/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9222.SonyEricsson K850i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonK850iv/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9223.SonyEricsson K858c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK858c/R2N SEMC-Browser/4.0.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9224.SonyEricsson K858c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonK858c/R2N SEMC-Browser/4.0.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9225.SonyEricsson LT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; SonyEricssonLT15i Build/3.0.A.0.326) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9226.SonyEricsson LT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; en-ie; SonyEricssonLT15iv Build/3.0.A.2.181) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9227.SonyEricsson LT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonLT15i Build/4.0.A.0.55) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9228.SonyEricsson LT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; SonyEricssonLT15i Build/3.0.A.0.326) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9229.SonyEricsson LT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; en-ie; SonyEricssonLT15iv Build/3.0.A.2.181) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9230.SonyEricsson LT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonLT15i Build/4.0.A.0.55) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9231.SonyEricsson M1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Compatible; MSIE 6.0; Windows NT 5.1) SonyEricssonM1i/R1AA Profile/MIDP-2.1 Configuration/CLDC-1.1; Windows Phone 6.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9232.SonyEricsson M1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (Compatible; MSIE 6.0; Windows NT 5.1) SonyEricssonM1i/R1AA Profile/MIDP-2.1 Configuration/CLDC-1.1; Windows Phone 6.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9233.SonyEricsson MT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; es-es; SonyEricssonMT15iv Build/3.0.A.0.326) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9234.SonyEricsson MT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; es-es; SonyEricssonMT15iv Build/3.0.A.2.181) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9235.SonyEricsson MT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonMT15i Build/4.0.A.0.55) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9236.SonyEricsson MT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; zh-tw; MT15i Build/3.0.1.A.0.145) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9237.SonyEricsson MT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; es-es; SonyEricssonMT15iv Build/3.0.A.0.326) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9238.SonyEricsson MT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; es-es; SonyEricssonMT15iv Build/3.0.A.2.181) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9239.SonyEricsson MT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonMT15i Build/4.0.A.0.55) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9240.SonyEricsson MT15i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; zh-tw; MT15i Build/3.0.1.A.0.145) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9241.SonyEricsson P900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP900i/R2J Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9242.SonyEricsson P900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonP900i/R2J Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9243.SonyEricsson R306'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonR306/R1BA008 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9244.SonyEricsson R306'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonR306a/R1BA010 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9245.SonyEricsson R306'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonR306/R1BA008 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9246.SonyEricsson R306'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonR306a/R1BA010 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9247.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; es-es; SonyEricssonR800i Build/3.0.A.0.326) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9248.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; es-es; SonyEricssonR800iv Build/3.0.A.2.181) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9249.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; en-ie; SonyEricssonR800iv Build/3.0.A.2.181) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9250.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonR800i Build/4.0.A.0.55) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9251.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonR800at Build/3.0.1.B.0.66) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9252.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonR800i Build/3.0.1.A.0.145) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9253.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.1; es-es; SonyEricssonR800i Build/3.0.A.0.326) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9254.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; es-es; SonyEricssonR800iv Build/3.0.A.2.181) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9255.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; en-ie; SonyEricssonR800iv Build/3.0.A.2.181) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9256.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonR800i Build/4.0.A.0.55) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9257.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonR800at Build/3.0.1.B.0.66) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9258.SonyEricsson R800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-gb; SonyEricssonR800i Build/3.0.1.A.0.145) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9259.SonyEricsson S302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'S302 /EI,A02: 180608 1458' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9260.SonyEricsson S302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonS302/R1BB Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9261.SonyEricsson S302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonS302/R1CB Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9262.SonyEricsson S302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'S302 /EI,A02: 180608 1458' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9263.SonyEricsson S302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonS302/R1BB Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9264.SonyEricsson S302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonS302/R1CB Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9265.SonyEricsson S312'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonS312/R1DA Browser/OpenWave/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9266.SonyEricsson S312'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonS312/R1DA Browser/OpenWave/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9267.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SonyEricssonSO-01B Build/R1EA018) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9268.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SO-01B Build/R1EA018) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9269.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SonyEricssonSO-01B Build/R1EA018) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9270.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SonyEricssonSO-01B) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9271.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; SonyEricssonSO-01B Build/R1AA044) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9272.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonSO-01B Build/2.0.B.0.70) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9273.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonSO-01B Build/2.0.1.B.0.19) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9274.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SO-01B Build/2.0.1.B.0.19) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9275.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonSO-01B Build/2.0.B.0.138)AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9276.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/1.0.4-TripNRaVeR) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9277.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/CyanogenMod 6.1.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9278.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/FreeX10-beta3_zdzihu) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9279.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/FreeX10-beta4_zdzihu) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9280.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/NI1063) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9281.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; X10i Build/1.3.18v2) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9282.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; X10i Build/CyanogenMod 6.1.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9283.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/Achotjan_2.2.1_v03) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9284.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/CMNI15) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9285.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/Ultima 3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9286.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; X10i Build/CM 6.1.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9287.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; X10i Build/FreeX10-beta4_zdzihu) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9288.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SO-01B Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9289.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; X10i Build/Achotjan_2.2.1_v03) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9290.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; X10 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9291.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SonyEricssonSO-01B Build/R1EA018) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9292.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SO-01B Build/R1EA018) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9293.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SonyEricssonSO-01B Build/R1EA018) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9294.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SonyEricssonSO-01B) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9295.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; SonyEricssonSO-01B Build/R1AA044) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9296.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonSO-01B Build/2.0.B.0.70) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9297.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonSO-01B Build/2.0.1.B.0.19) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9298.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SO-01B Build/2.0.1.B.0.19) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9299.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonSO-01B Build/2.0.B.0.138)AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9300.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/1.0.4-TripNRaVeR) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9301.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/CyanogenMod 6.1.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9302.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/FreeX10-beta3_zdzihu) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9303.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/FreeX10-beta4_zdzihu) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9304.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/NI1063) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9305.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; X10i Build/1.3.18v2) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9306.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; X10i Build/CyanogenMod 6.1.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9307.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/Achotjan_2.2.1_v03) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9308.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/CMNI15) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9309.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/Ultima 3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9310.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; X10i Build/CM 6.1.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9311.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; X10i Build/FreeX10-beta4_zdzihu) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9312.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SO-01B Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9313.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; X10i Build/Achotjan_2.2.1_v03) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9314.SonyEricsson SO-01B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; X10 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9315.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.D.2.79) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9316.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; SO-01C Build/3.0.D.2.79) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9317.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U;Androi d 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.1.D.2.4) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9318.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U;Androi d 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.D.2.79)AppleWebKit/533.1 (KHTML, li ke Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9319.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Andro id 2.3.2; ja-jp; SO-01C Build/3.0.D.2.79) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9320.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U;Android 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.D.2.79)AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9321.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U;Android 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.1.D.2.4) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9322.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; SO-01C Build/3.0.1.D.2.4) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9323.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.D.2.79) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9324.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; SO-01C Build/3.0.D.2.79) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9325.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U;Androi d 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.1.D.2.4) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9326.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U;Androi d 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.D.2.79)AppleWebKit/533.1 (KHTML, li ke Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9327.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Andro id 2.3.2; ja-jp; SO-01C Build/3.0.D.2.79) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9328.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U;Android 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.D.2.79)AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9329.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U;Android 2.3.2; ja-jp; SonyEricssonSO-01C Build/3.0.1.D.2.4) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9330.SonyEricsson SO-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.2; ja-jp; SO-01C Build/3.0.1.D.2.4) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9331.SonyEricsson SO-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonSO-03C Build/4.0.A.2.294) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9332.SonyEricsson SO-03C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonSO-03C Build/4.0.A.2.294) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9333.SonyEricsson T250a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT250a/R5CA005 TelecaBrowser/1.1.14.20' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9334.SonyEricsson T250a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT250a/R5CA005 TelecaBrowser/1.1.14.20' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9335.SonyEricsson T270i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT270i/R1BB006 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9336.SonyEricsson T270i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT270i/R1BB006 TelecaBrowser/Q04C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9337.SonyEricsson T658c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT658c/R7AA024' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9338.SonyEricsson T658c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT658c/R7AA024' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9339.SonyEricsson T700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT700/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9340.SonyEricsson T700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT700/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9341.SonyEricsson T707'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT707/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9342.SonyEricsson T707'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT707/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9343.SonyEricsson T707a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT707a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9344.SonyEricsson T707a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT707a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9345.SonyEricsson T715'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT715/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9346.SonyEricsson T715'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT715/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9347.SonyEricsson T715'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT715/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9348.SonyEricsson T715'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT715/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9349.SonyEricsson T715a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT715a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9350.SonyEricsson T715a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonT715a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9351.SonyEricsson TM506'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonTM506/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9352.SonyEricsson TM506'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonTM506/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9353.SonyEricsson TM717'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonTM717/R1FC Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9354.SonyEricsson TM717'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonTM717/R1FC Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9355.SonyEricsson U100i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU100i/R1CA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9356.SonyEricsson U100i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU100i/R1CA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9357.SonyEricsson U10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU10i/R1A Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9358.SonyEricsson U10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU10i/R1BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9359.SonyEricsson U10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU10i/R7AA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9360.SonyEricsson U10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU10a/R1BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9361.SonyEricsson U10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU10i/R1A Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9362.SonyEricsson U10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU10i/R1BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9363.SonyEricsson U10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU10i/R7AA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9364.SonyEricsson U10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonU10a/R1BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9365.SonyEricsson U20a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-; U20a Build/1.2.A.1.181) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9366.SonyEricsson U20a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-; U20a Build/1.2.A.1.181) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9367.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; SonyEricssonU20iv Build/1.0.A.1.36) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9368.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonU20i Build/1.0.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9369.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; sv-se; SonyEricssonU20i Build/1.1.A.0.8) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9370.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; sv-se; U20i Build/1.1.A.0.8) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9371.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonU20i Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9372.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonU20i Build/1.1.A.0.8) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9373.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; SonyEricssonU20iv Build/2.1.1.A.0.6) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9374.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; SonyEricssonU20iv Build/1.0.A.1.36) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9375.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; fr-be; SonyEricssonU20i Build/1.0.A.0.13) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9376.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; sv-se; SonyEricssonU20i Build/1.1.A.0.8) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9377.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; sv-se; U20i Build/1.1.A.0.8) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9378.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonU20i Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9379.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonU20i Build/1.1.A.0.8) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9380.SonyEricsson U20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; SonyEricssonU20iv Build/2.1.1.A.0.6) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9381.SonyEricsson V630i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonV640iv/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9382.SonyEricsson V630i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonV640iv/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9383.SonyEricsson V640i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonV640i/R1x Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9384.SonyEricsson V640i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonV640i/R1x Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9385.SonyEricsson W100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW100i/ R1BD009 TelecaBrowser/ Q07C1-1 Profile/MIDP- 2.0 Configuration/ CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9386.SonyEricsson W100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW100i/ R1BD009 TelecaBrowser/ Q07C1-1 Profile/MIDP- 2.0 Configuration/ CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9387.SonyEricsson W100a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW100a/R1BF006 TelecaBrowser/Q07C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9388.SonyEricsson W100a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW100a/R1BF007 TelecaBrowser/Q07C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9389.SonyEricsson W100a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW100a/R1BF006 TelecaBrowser/Q07C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9390.SonyEricsson W100a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW100a/R1BF007 TelecaBrowser/Q07C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9391.SonyEricsson W150'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW150/1.0 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9392.SonyEricsson W150'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW150/1.0 Browser/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9393.SonyEricsson W150a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW150a/R2AD005 TelecaBrowser/Q07C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9394.SonyEricsson W150a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW150a/R2AD005 TelecaBrowser/Q07C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9395.SonyEricsson W150i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW150i/R2AD005 TelecaBrowser/Q07C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9396.SonyEricsson W150i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW150i/R2AD006 TelecaBrowser/Q07C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9397.SonyEricsson W150i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW150i/R2AD005 TelecaBrowser/Q07C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9398.SonyEricsson W150i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW150i/R2AD006 TelecaBrowser/Q07C1-1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9399.SonyEricsson W20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW20i/R7BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9400.SonyEricsson W20i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW20i/R7BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9401.SonyEricsson W302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW302' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9402.SonyEricsson W302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW302/R1AA Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.351 (GUI)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9403.SonyEricsson W302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW302/R1AC Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1, SonyEricssonW302/R1AC Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1, SonyEricssonW302/R1AC Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9404.SonyEricsson W302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW302/R1BB Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1, SonyEricssonW302/R1BB Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1, SonyEricssonW302/R1BB Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9405.SonyEricsson W302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW302' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9406.SonyEricsson W302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW302/R1AA Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.1.351 (GUI)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9407.SonyEricsson W302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW302/R1AC Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1, SonyEricssonW302/R1AC Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1, SonyEricssonW302/R1AC Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9408.SonyEricsson W302'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW302/R1BB Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1, SonyEricssonW302/R1BB Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1, SonyEricssonW302/R1BB Browser/OpenWave/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9409.SonyEricsson W350a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW350a/R10AB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9410.SonyEricsson W350a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW350a/R10AB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9411.SonyEricsson W350i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW350i/R10AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9412.SonyEricsson W350i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW350iv/R10BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9413.SonyEricsson W350i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW350iv/R10AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9414.SonyEricsson W350i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW350i/R10AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9415.SonyEricsson W350i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW350iv/R10BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9416.SonyEricsson W350i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW350iv/R10AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9417.SonyEricsson W380a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW380a/R10CA Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9418.SonyEricsson W380a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW380a/R10CA Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9419.SonyEricsson W380c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW380c/R10CA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9420.SonyEricsson W380c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW380c/R10CA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9421.SonyEricsson W395'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW395' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9422.SonyEricsson W395'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW395/R1CB Browser/OpenWave/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9423.SonyEricsson W395'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW395' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9424.SonyEricsson W395'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW395/R1CB Browser/OpenWave/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9425.SonyEricsson W508'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW508/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9426.SonyEricsson W508'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW508/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9427.SonyEricsson W508a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW508a/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9428.SonyEricsson W508a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW508a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9429.SonyEricsson W508a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW508a/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9430.SonyEricsson W508a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW508a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9431.SonyEricsson W518a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW518a/R1EB Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9432.SonyEricsson W518a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW518a/R1EB Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9433.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595/R3CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9434.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW595v/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9435.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9436.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595/R3DA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9437.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595a/R3EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9438.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9439.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595/R3CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9440.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW595v/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9441.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9442.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595/R3DA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9443.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595a/R3EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9444.SonyEricsson W595'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9445.SonyEricsson W595s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595s/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9446.SonyEricsson W595s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW595s/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9447.SonyEricsson W705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW705/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9448.SonyEricsson W705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW705/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9449.SonyEricsson W705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW705/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9450.SonyEricsson W705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW705/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9451.SonyEricsson W705a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW705a' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9452.SonyEricsson W705a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW705a' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9453.SonyEricsson W705u'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW705u/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9454.SonyEricsson W705u'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW705u/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9455.SonyEricsson W715'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW715v/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9456.SonyEricsson W715'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW715/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9457.SonyEricsson W715'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW715v/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9458.SonyEricsson W715'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW715/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9459.SonyEricsson W750i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW750i/R1BD Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9460.SonyEricsson W750i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW750i/R1BD Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9461.SonyEricsson W760a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW760a/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9462.SonyEricsson W760a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW760a/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9463.SonyEricsson W760i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW760i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9464.SonyEricsson W760i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW760i/R3AA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-9.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9465.SonyEricsson W760i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW760i/R3CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9466.SonyEricsson W760i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW760i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9467.SonyEricsson W760i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW760i/R3AA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-9.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9468.SonyEricsson W760i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW760i/R3CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9469.SonyEricsson W830c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW830c/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9470.SonyEricsson W830c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW830c/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9471.SonyEricsson W880'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW888c/R8BA024' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9472.SonyEricsson W880'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW888c/R8BA024' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9473.SonyEricsson W890'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW890' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9474.SonyEricsson W890'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW890' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9475.SonyEricsson W890i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW890i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9476.SonyEricsson W890i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW890i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9477.SonyEricsson W890i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW890i/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9478.SonyEricsson W890i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW890i/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9479.SonyEricsson W890i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW890i/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9480.SonyEricsson W890i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW890i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9481.SonyEricsson W890i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW890i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9482.SonyEricsson W890i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW890i/R1DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9483.SonyEricsson W890i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW890i/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9484.SonyEricsson W890i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW890i/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9485.SonyEricsson W890iv'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW890iv/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9486.SonyEricsson W890iv'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW890iv/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9487.SonyEricsson W900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW900i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9488.SonyEricsson W900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW900i/R5AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9489.SonyEricsson W900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW900i/R5BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-13G' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9490.SonyEricsson W900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW900i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9491.SonyEricsson W900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW900i/R5AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9492.SonyEricsson W900i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW900i/R5BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-13G' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9493.SonyEricsson W902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW902/R3CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9494.SonyEricsson W902'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW902/R3CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9495.SonyEricsson W902plus'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW902plus/R3DB Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9496.SonyEricsson W902plus'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW902plus/R3DB Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9497.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9498.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9499.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i/R1AB Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9500.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW910iv/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9501.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9502.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i/R1FA' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9503.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW910iv/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9504.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9505.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9506.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9507.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i/R1AB Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9508.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW910iv/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9509.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9510.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i/R1FA' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9511.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW910iv/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9512.SonyEricsson W910i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW910i/R1FA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 model-orange' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9513.SonyEricsson W980'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW980/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9514.SonyEricsson W980'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW980/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9515.SonyEricsson W980i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW980/R3EA Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9516.SonyEricsson W980i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW980/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9517.SonyEricsson W980i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW980/R3EA Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9518.SonyEricsson W980i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW980/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9519.SonyEricsson W980v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW980v/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9520.SonyEricsson W980v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW980v/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9521.SonyEricsson W980v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW980v/R3CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9522.SonyEricsson W980v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW980v/R3BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9523.SonyEricsson W980v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW980v/R3DA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9524.SonyEricsson W980v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 SonyEricssonW980v/R3CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9525.SonyEricsson W995'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW995/R1DB Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9526.SonyEricsson W995'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW995/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9527.SonyEricsson W995'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW995a/R1HA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9528.SonyEricsson W995'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW995a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9529.SonyEricsson W995'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW995/R1DB Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9530.SonyEricsson W995'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW995/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9531.SonyEricsson W995'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW995a/R1HA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9532.SonyEricsson W995'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonW995a/R1GA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.4.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9533.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; SonyEricssonX10a Build/R1AA044) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9534.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; SonyEricssonX10a Build/R1FA014) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9535.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; X10a Build/R1DA007) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9536.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonX10a Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9537.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonX10a Build/2.1.A.0.435) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9538.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonX10iv Build/2.1.A.0.435) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9539.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; SonyEricssonX10a Build/R1AA044) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9540.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; SonyEricssonX10a Build/R1FA014) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9541.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; X10a Build/R1DA007) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9542.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonX10a Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9543.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonX10a Build/2.1.A.0.435) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9544.SonyEricsson X10a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonX10iv Build/2.1.A.0.435) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9545.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; SonyEricssonX10i Build/R1AA044) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9546.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; sv-se; X10i Build/R1DA002) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9547.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonX10i Build/R1CA004) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9548.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; sv-se; SonyEricssonX10i Build/R1FA014) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9549.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonX10i) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9550.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonX10i Build/R2BA026) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9551.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonX10i Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9552.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; bg-bg; X10i Build/2.1.A.0.435) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9553.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SO-01B Build/2.0.B.0.138) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9554.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonX10i Build/2.0.A.0.504) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9555.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonX10i Build/2.1.A.0.435) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9556.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonSO-01B Build/2.0.A.0.281) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9557.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/CM 6.1.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9558.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; SonyEricssonX10i Build/R1AA044) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9559.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; sv-se; X10i Build/R1DA002) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9560.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonX10i Build/R1CA004) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9561.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; sv-se; SonyEricssonX10i Build/R1FA014) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9562.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonX10i) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9563.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonX10i Build/R2BA026) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9564.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; SonyEricssonX10i Build/2.0.A.0.351) AppleWebKit/530.17 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9565.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; bg-bg; X10i Build/2.1.A.0.435) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9566.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SO-01B Build/2.0.B.0.138) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9567.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonX10i Build/2.0.A.0.504) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9568.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonX10i Build/2.1.A.0.435) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9569.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonSO-01B Build/2.0.A.0.281) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9570.SonyEricsson X10i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; SO-01B Build/CM 6.1.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9571.SonyEricsson X10iv'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; SonyEricssonX10iv Build/R1FA014) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9572.SonyEricsson X10iv'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; SonyEricssonX10iv Build/R1FA014) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9573.SonyEricsson X1a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonX1a/R1AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9574.SonyEricsson X1a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonX1a/R1AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9575.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/X1i/1.00.161.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9576.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'X1i Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9577.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sony Ericsson X1i/480x800 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9578.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; X1i/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9579.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonX1i/R1AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9580.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SEX1i/R1AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9581.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) SonyEricssonX1i/R2AA Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9582.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'O2/1.0/SonyEricssonX1i/R1AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) UP.Link/6.3.1.20.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9583.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SEX1i/R1AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9584.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SE_X1a Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9585.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEMC-VENUS Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9586.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.5 (Microsoft Windows; PPC; Opera Mobi; U) SonyEricssonX1i/R3AA Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9587.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SEX1i/R3AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) UP.Link/6.3.1.20.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9588.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SEX1i/R3AA Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/15431; U; DE) UP.Link/6.3.1.20.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9589.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'X1i Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11 )' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9590.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Vodafone/1.0/X1i/1.00.161.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9591.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'X1i Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9592.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sony Ericsson X1i/480x800 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9593.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; X1i/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9594.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonX1i/R1AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9595.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SEX1i/R1AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9596.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) SonyEricssonX1i/R2AA Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9597.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'O2/1.0/SonyEricssonX1i/R1AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) UP.Link/6.3.1.20.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9598.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SEX1i/R1AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9599.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SE_X1a Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9600.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SEMC-VENUS Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9601.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.5 (Microsoft Windows; PPC; Opera Mobi; U) SonyEricssonX1i/R3AA Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9602.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SEX1i/R3AA Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) UP.Link/6.3.1.20.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9603.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vodafone/1.0/SEX1i/R3AA Opera/9.5 (Microsoft Windows; PPC; Opera Mobi/15431; U; DE) UP.Link/6.3.1.20.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9604.SonyEricsson X1i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'X1i Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11 )' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9605.SonyEricsson X2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonX2/R1AA Browser/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9606.SonyEricsson X2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonX2/R1AA Browser/Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9607.SonyEricsson X5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonX5/R7BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9608.SonyEricsson X5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonX5/R7BA Browser/NetFront/3.5 Profile/MIDP-2.1 Configuration/CLDC-1.1 JavaPlatform/JP-8.5.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9609.SonyEricsson Z530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ530i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9610.SonyEricsson Z530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ530i/R6AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9611.SonyEricsson Z530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ530i/R6BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9612.SonyEricsson Z530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ530i/R6DA' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9613.SonyEricsson Z530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ530i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9614.SonyEricsson Z530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ530i/R6AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9615.SonyEricsson Z530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ530i/R6BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9616.SonyEricsson Z530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ530i/R6DA' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9617.SonyEricsson Z555a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ555a/R10CA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9618.SonyEricsson Z555a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ555a/R10CA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9619.SonyEricsson Z558c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ558c/R4FA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9620.SonyEricsson Z558c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ558c/R4FA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9621.SonyEricsson Z558i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ558i/R4FA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9622.SonyEricsson Z558i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ558i/R4FA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9623.SonyEricsson Z610i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ610i/R1DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 DELETE' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9624.SonyEricsson Z610i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ610i/R1EJ Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9625.SonyEricsson Z610i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ610i/R1KH Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9626.SonyEricsson Z610i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ610i/R1DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9627.SonyEricsson Z610i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ610i/R1DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 DELETE' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9628.SonyEricsson Z610i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ610i/R1EJ Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9629.SonyEricsson Z610i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ610i/R1KH Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9630.SonyEricsson Z610i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ610i/R1DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9631.SonyEricsson Z750a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ750a/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9632.SonyEricsson Z750a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ750a/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9633.SonyEricsson Z750a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ750a/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9634.SonyEricsson Z750a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ750a/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9635.SonyEricsson Z750a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ750a/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9636.SonyEricsson Z750a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ750a/R1CA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9637.SonyEricsson Z750i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ750i/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9638.SonyEricsson Z750i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ750i/R1ED Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9639.SonyEricsson Z750i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ750i/R1BA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9640.SonyEricsson Z750i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ750i/R1ED Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9641.SonyEricsson Z770i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ770i/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9642.SonyEricsson Z770i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ770i/R1EA Browser/NetFront/3.4 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9643.SonyEricsson Z780i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ780i/R3BA Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9644.SonyEricsson Z780i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SonyEricssonZ780i/R3BA Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9645.SPC 3200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPC MOBILE BOSS 1000' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9646.SPC 3200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPC MOBILE BOSS 1000' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9647.Spice 5420'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S5420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9648.Spice 5420'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S5420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9649.Spice C 810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice C-810/1.0 TMSS-Browser/1.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9650.Spice C 810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice C-810/1.0 TMSS-Browser/1.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9651.Spice D-88'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice D88' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9652.Spice D-88'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice D88' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9653.Spice D90'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice D-90/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9654.Spice D90'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice D-90/WAP2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9655.Spice M5252'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice M5252' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9656.Spice M5252'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice M5252' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9657.Spice M6464'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-M6464/1.0 IAC/M6235 IAC/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9658.Spice M6464'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-M6464/1.0 IAC/M6235 IAC/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9659.Spice S5330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S5330' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9660.Spice S5330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S5330' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9661.Spice S570'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE S570/KAA623FM_1.00.A26 Nucleus/1.0 MTK/6223 Release/06.26.2007 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9662.Spice S570'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE S570/KAA623FM_1.00.A26 Nucleus/1.0 MTK/6223 Release/06.26.2007 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9663.Spice S580'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S580' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9664.Spice S580'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S580' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9665.Spice S600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S600/WAP Browser SPICE-S600/WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9666.Spice S600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S600/WAP Browser SPICE-S600/WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9667.Spice S640'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S640/WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9668.Spice S640'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S640/WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9669.Spice S650'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S650/KAA736_0.90.626 Nucleus/1.0 MTK/6223 Release/06.26.2007 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9670.Spice S650'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S650/KAA736_0.90.626 Nucleus/1.0 MTK/6223 Release/06.26.2007 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9671.Spice S7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice-S7/KAA263_0.93.C01 Nucleus/1.0 MTK/6226 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9672.Spice S7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice-S7/KAA263_0.93.C01 Nucleus/1.0 MTK/6226 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9673.Spice S705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S705' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9674.Spice S705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S705' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9675.Spice S707'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S707/2008.07.09 LMP/SH Release Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9676.Spice S707'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S707/2008.05.29 LMP/SH Release Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9677.Spice S707'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S707/2008.07.09 LMP/SH Release Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9678.Spice S707'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S707/2008.05.29 LMP/SH Release Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9679.Spice S8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S8/KAA161_0.93.C01 Nucleus/1.0 MTK/6219 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0 SPICE-S8/KAA161_0.93.C01 Nucleus/1.0 MTK/6219 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9680.Spice S8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S8/KAA161_0.93.C01 Nucleus/1.0 MTK/6219 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0 SPICE-S8/KAA161_0.93.C01 Nucleus/1.0 MTK/6219 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9681.Spice S800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S800/KAA161_0.93.C01 Nucleus/1.0 MTK/6219 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0 SPICE-S800/KAA161_0.93.C01 Nucleus/1.0 MTK/6219 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9682.Spice S800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S800/KAA161_0.93.C01 Nucleus/1.0 MTK/6219 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0 SPICE-S800/KAA161_0.93.C01 Nucleus/1.0 MTK/6219 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9683.Spice S808'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S808/WAP Browser SPICE-S808/WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9684.Spice S808'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S808/WAP Browser SPICE-S808/WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9685.Spice S820'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S820' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9686.Spice S820'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Spice S820' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9687.Spice S920'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE S920' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9688.Spice S920'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S920/KAA363_0.93.822 Nucleus/1.0 MTK/6228 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9689.Spice S920'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE S920' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9690.Spice S920'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-S920/KAA363_0.93.822 Nucleus/1.0 MTK/6228 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9691.Spice S940'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE S940' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9692.Spice S940'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE S940' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9693.Spice X1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-X1/S114 Release/2008.06.26 Profile/MIDP2.0 Configuration/CLDC1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9694.Spice X1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SPICE-X1/S114 Release/2008.06.26 Profile/MIDP2.0 Configuration/CLDC1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9695.Sprint 6700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Sprint:PPC-6700; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9696.Sprint 6700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sprint PPC-6700' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9697.Sprint 6700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Sprint:PPC-6700; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9698.Sprint 6700'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sprint PPC-6700' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9699.T-Mobile Atlas'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) T-Mobile_Atlas' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9700.T-Mobile Atlas'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) T-Mobile_Atlas' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9701.T-Mobile Atlas'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) T-Mobile_Atlas' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9702.T-Mobile Atlas'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) T-Mobile_Atlas' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9703.T-Mobile Atlas'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) T-Mobile_Atlas' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9704.T-Mobile Atlas'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) T-Mobile_Atlas' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9705.T-Mobile Dash'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'T-Mobile Dash Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9706.T-Mobile Dash'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) T-Mobile Dash' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9707.T-Mobile Dash'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible;MSIE 6.0; Windows CE; IEMobile 6.12) T-Mobile Dash' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9708.T-Mobile Dash'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WinWAPDashMR/4.0 (Dash 2.0.000.0; 4.0.2.70; WM; SP; t-zones)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9709.T-Mobile Dash'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'T-Mobile Dash Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 320x240)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9710.T-Mobile Dash'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) T-Mobile Dash' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9711.T-Mobile Dash'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible;MSIE 6.0; Windows CE; IEMobile 6.12) T-Mobile Dash' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9712.T-Mobile Dash'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WinWAPDashMR/4.0 (Dash 2.0.000.0; 4.0.2.70; WM; SP; t-zones)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9713.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-us; T-Mobile G1 Build/PLAT-RC33) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9714.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.0; en-gb; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9715.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.0; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9716.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-gb; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9717.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-au; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9718.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; T-Mobile G1 Build/CRB17) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9719.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.0; en-us; HTC_Dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9720.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; de-at; T-Mobile G1 Build/CRB43) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9721.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; de-; T-Mobile G1 Build/CRB43) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9722.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile G1 Build/CRB43) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9723.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Android Dev Phone 1 Build/CRB43) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9724.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile G1 Build/CRB43) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9725.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9726.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile G1 Build/CRC1) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9727.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; T-Mobile G1 Build/CRC37) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9728.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; T-Mobile G1 Build/DRC83) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9729.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; T-Mobile G1 Build/DRC83) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9730.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; T-Mobile G1 Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9731.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-cn; T-Mobile G1 Build/DRC83) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9732.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; T-Mobile G1 Build/DMD64) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9733.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-us; T-Mobile G1 Build/PLAT-RC33) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9734.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.0; en-gb; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9735.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.0; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9736.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-gb; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9737.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.1; en-au; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9738.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; T-Mobile G1 Build/CRB17) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9739.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.0; en-us; HTC_Dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9740.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; de-at; T-Mobile G1 Build/CRB43) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9741.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; de-; T-Mobile G1 Build/CRB43) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9742.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile G1 Build/CRB43) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9743.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Android Dev Phone 1 Build/CRB43) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9744.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile G1 Build/CRB43) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9745.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9746.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile G1 Build/CRC1) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9747.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; T-Mobile G1 Build/CRC37) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9748.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; T-Mobile G1 Build/DRC83) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9749.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; T-Mobile G1 Build/DRC83) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9750.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-gb; T-Mobile G1 Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9751.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-cn; T-Mobile G1 Build/DRC83) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9752.T-Mobile G1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; T-Mobile G1 Build/DMD64) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9753.T-Mobile G2 Touch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; T-Mobile G2 Touch Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9754.T-Mobile G2 Touch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; sapphire) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9755.T-Mobile G2 Touch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; T-Mobile_G2_Touch Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9756.T-Mobile G2 Touch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; T-Mobile G2 Touch Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9757.T-Mobile G2 Touch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; sapphire) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9758.T-Mobile G2 Touch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; T-Mobile_G2_Touch Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9759.T-Mobile Garminfone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Garminfone Build/DRC79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9760.T-Mobile Garminfone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Garminfone Build/DRC79) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9761.T-Mobile Juno'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WinWAPJunoMR/4.0 (Juno 2.0.000.0; 4.0.2.107; WM; SP; t-zones)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9762.T-Mobile Juno'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) T-Mobile_Juno' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9763.T-Mobile Juno'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WinWAPJunoMR/4.0 (Juno 2.0.000.0; 4.0.2.107; WM; SP; t-zones)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9764.T-Mobile Juno'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) T-Mobile_Juno' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9765.T-Mobile Leo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) T-Mobile_LEO' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9766.T-Mobile Leo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) T-Mobile_LEO' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9767.T-Mobile Leo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) T-Mobile_LEO' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9768.T-Mobile Leo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) T-Mobile_LEO' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9769.T-Mobile MDA Ameo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 640x480; Ameo/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9770.T-Mobile MDA Ameo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 640x480; Ameo/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9771.T-Mobile MDA Ameo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 640x480; Ameo/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9772.T-Mobile MDA Ameo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 640x480; Ameo 16GB/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9773.T-Mobile MDA Ameo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 640x480; Ameo/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9774.T-Mobile MDA Ameo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 640x480; Ameo/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9775.T-Mobile MDA Ameo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 640x480; Ameo/1.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9776.T-Mobile MDA Ameo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 640x480; Ameo 16GB/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9777.T-Mobile MDA compact II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; MDA compact II/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9778.T-Mobile MDA compact II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) PPC; 240x320; MDA Compact/2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9779.T-Mobile MDA compact II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; MDA compact II/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9780.T-Mobile MDA compact II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) PPC; 240x320; MDA Compact/2.3 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9781.T-Mobile MDA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; MDA_compact_IV/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9782.T-Mobile MDA Compact IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; MDA_compact_IV/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9783.T-Mobile MDA Touch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; MDA Touch/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9784.T-Mobile MDA Touch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) PPC; MDA Touch/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9785.T-Mobile MDA Touch Plus'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; MDA Touch Plus/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9786.T-Mobile MDA Touch Plus'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; MDA Touch Plus/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9787.T-Mobile MDA Vario III'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; MDA Vario/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9788.T-Mobile MDA Vario III'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; MDA Vario/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9789.T-Mobile MDA Vario IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; MDA_Vario_IV/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9790.T-Mobile MDA Vario IV'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; MDA_Vario_IV/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9791.T-Mobile MDA Vario V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) T-Mobile_Rhodium' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9792.T-Mobile MDA Vario V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (Windows NT 5.1; MDA_Vario_V/ 1.0 Profile/MIDP- 2.0 Configuration/ CLDC-1.1; U; nl)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9793.T-Mobile MDA Vario V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) T-Mobile_Rhodium' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9794.T-Mobile MDA Vario V'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9.50 (Windows NT 5.1; MDA_Vario_V/ 1.0 Profile/MIDP- 2.0 Configuration/ CLDC-1.1; U; nl)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9795.T-Mobile myTouch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile myTouch 3G Build/CRB57) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9796.T-Mobile myTouch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; T-Mobile myTouch 3G Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9797.T-Mobile myTouch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile myTouch 3G Build/CRB57) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9798.T-Mobile myTouch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; T-Mobile myTouch 3G Build/DRC92) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9799.T-Mobile myTouch 3G Slide'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; T-Mobile myTouch 3G Slide Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9800.T-Mobile myTouch 3G Slide'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; T-Mobile myTouch 3G Slide Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9801.T-Mobile myTouch4G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; it-it; myTouch4G Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9802.T-Mobile myTouch4G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; T-Mobile myTouch 3G Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9803.T-Mobile myTouch4G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; T-Mobile myTouch 3G Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9804.T-Mobile myTouch4G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; it-it; myTouch4G Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9805.T-Mobile myTouch4G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; T-Mobile myTouch 3G Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9806.T-Mobile myTouch4G'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; T-Mobile myTouch 3G Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9807.T-Mobile Opal'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile Opal Build/CRB2) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9808.T-Mobile Opal'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile Opal Build/CRB2) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9809.T-Mobile Pulse'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; Pulse Build/CRB17) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9810.T-Mobile Pulse'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; Pulse Build/CRB17) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2 (AdMob-ANDROID-20090728)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9811.T-Mobile Pulse Mini'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; Ivy Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9812.T-Mobile Pulse Mini'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; Pulse Mini Build/ERE27) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9813.T-Mobile Pulse Mini'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; U8110 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9814.T-Mobile Pulse Mini'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; Ivy Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9815.T-Mobile Pulse Mini'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; Pulse Mini Build/ERE27) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9816.T-Mobile Pulse Mini'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; U8110 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9817.T-Mobile Shadow'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) T-Mobile_Juno' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9818.T-Mobile Shadow'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Juno-1.0/arcsoft-mmsua-sp-4.0.0.xx' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9819.T-Mobile Shadow'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) T-Mobile_Juno' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9820.T-Mobile Shadow'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Juno-1.0/arcsoft-mmsua-sp-4.0.0.xx' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9821.T-Mobile Shadow II / Cleopatra'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) T-Mobile_Cleopatra' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9822.T-Mobile Shadow II / Cleopatra'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) T-Mobile_Cleopatra' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9823.Taiwan Mobile T1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-tw; TaiwanMobileT1 Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9824.Taiwan Mobile T1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; zh-tw; TaiwanMobileT1 Build/Donut) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9825.TCL 718'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL-718' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9826.TCL 718'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL-718' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9827.TCL A228'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL_A288_01/L3M0501.1.0_M411A/WAP2.0 Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9828.TCL A228'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL_A288_01/L3M0501.1.0_M411A/WAP2.0 Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9829.TCL A990'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; TCL_A990 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9830.TCL A990'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; TCL_A990 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9831.TCL A990'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2-update1; en-us; TCL_A990 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9832.TCL A990'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; TCL_A990 Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9833.TCL e300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL-e300/w05.44.08/WAP-2.0/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9834.TCL e300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL-e300/w05.44.08/WAP-2.0/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9835.TCL e767'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL-E767' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9836.TCL e767'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL-E767/OC02-1-1.58-0618/WAP-2.0/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9837.TCL e767'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL-E767' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9838.TCL e767'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL-E767/OC02-1-1.58-0618/WAP-2.0/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9839.TCL e787'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL-E787/L3G0001.1.0_M451B/MAUI WAP Browser TCL-E787/L3G0001.1.0_M451B/MAUI WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9840.TCL e787'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TCL-E787/L3G0001.1.0_M451B/MAUI WAP Browser TCL-E787/L3G0001.1.0_M451B/MAUI WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9841.Techfaith Moffett'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Techfaith Moffett/2.0 WAP2.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9842.Techfaith Moffett'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Techfaith Moffett/2.0 WAP2.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9843.Tecno X850'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'RT240X320/M.RF2221001.M02002.V1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9844.Tecno X850'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'RT240X320/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9845.Tecno X850'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'RT240X320/M.RF2221001.M02002.V1.0/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9846.Tecno X850'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'RT240X320/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9847.Telit GU1100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TelitGU1100' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9848.Telit GU1100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TelitGU1100' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9849.Telit TP100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Telit_TP100' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9850.Telit TP100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Telit_TP100' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9851.Tianyu A615'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TIANYU A615' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9852.Tianyu A615'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TIANYU A615' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9853.Tianyu B832'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TIANYU B832' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9854.Tianyu B832'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TIANYU B832' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9855.Tianyu B892'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TIANYU B892' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9856.Tianyu B892'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TIANYU B892' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9857.Tianyu KTouch V908'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TIANYU-KTOUCH/V908' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9858.Tianyu KTouch V908'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'V908/MIDP2.0/CLDC1.1/Screen-240x320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9859.Tianyu KTouch V908'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TIANYU-KTOUCH/V908|V908/MIDP2.0/CLDC1.1/Screen-240x320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9860.Tianyu KTouch V908'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TIANYU-KTOUCH/V908' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9861.Tianyu KTouch V908'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'V908/MIDP2.0/CLDC1.1/Screen-240x320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9862.Tianyu KTouch V908'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TIANYU-KTOUCH/V908|V908/MIDP2.0/CLDC1.1/Screen-240x320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9863.Tinno LT-X3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TinnoLTX3/CMCC NucleusOs/1.13.21 Ploutmmi/07b Release/7.10.2008 Browser/ObigoQ03c Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9864.Tinno LT-X3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TinnoLTX3/CMCC NucleusOs/1.13.21 Ploutmmi/07b Release/7.10.2008 Browser/ObigoQ03c Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9865.TiPhone E88'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'tiphoneE88/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9866.TiPhone E88'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'tiphoneE88/WAP2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9867.Toshiba G500'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) G500' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9868.Toshiba G500'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; G500) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9869.Toshiba G500'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) G500' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9870.Toshiba G500'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; G500) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9871.Toshiba G810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; Toshiba G810' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9872.Toshiba G810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; RoyalTek RGP-N100' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9873.Toshiba G810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; Toshiba G810/RL1_080825_083ES2_61' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9874.Toshiba G810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; Toshiba G810' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9875.Toshiba G810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; RoyalTek RGP-N100' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9876.Toshiba G810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PPC; 240x320; Toshiba G810/RL1_080825_083ES2_61' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9877.Toshiba G910_G920'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Toshiba G910_G920' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9878.Toshiba G910_G920'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Toshiba G910_G920' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9879.Toshiba IS04'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS04 Build/FEK100) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9880.Toshiba IS04'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; IS04 Build/FFK300) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9881.Toshiba IS04'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS04 Build/FEK100) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 (Shinbun Browser)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9882.Toshiba IS04'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS04 Build/FEK100) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9883.Toshiba IS04'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; IS04 Build/FFK300) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9884.Toshiba IS04'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; IS04 Build/FEK100) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 (Shinbun Browser)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9885.Toshiba T-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; T-01C Build/TER018) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9886.Toshiba T-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; T-01C Build/FFR002) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9887.Toshiba T-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; T-01C Build/TER018) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9888.Toshiba T-01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; T-01C Build/FFR002) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9889.Toshiba T001'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3N UP.Browser/6.2_7.2.7.1.K.3.330 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9890.Toshiba T001'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'KDDI-TS3N UP.Browser/6.2_7.2.7.1.K.3.330 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9891.Toshiba T01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; T-01C Build/TER018) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9892.Toshiba T01C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; T-01C Build/TER018) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9893.Toshiba TG01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Toshiba/TG01' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9894.Toshiba TG01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) Toshiba/TG01' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9895.Toshiba TS 705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TOSHIBA_TS705/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9896.Toshiba TS 705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TOSHIBA_TS705/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9897.Toshiba X01T/G900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Toshiba/X01T' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9898.Toshiba X01T/G900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) Toshiba/X01T' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9899.Tranxcode Mercury Web Gateway'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_TRANXCODE_MERCUY_PROXY' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9900.Tranxcode Mercury Web Gateway'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_TRANXCODE_MERCUY_PROXY' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9901.Ubiquam U800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Ubiquam U-800 (BREW/3.1) UP.Browser/CLDC-1.0 MMP/2.0 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9902.Ubiquam U800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Ubiquam U-800 (BREW/3.1) UP.Browser/CLDC-1.0 MMP/2.0 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9903.UCWEB Browser'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_BROWSER_UCWEB_7' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9904.UCWEB Browser'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'DO_NOT_MATCH_BROWSER_UCWEB_7' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9905.UKING K30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UKING-K30/SW1.0.0/WAP2.0/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9906.UKING K30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UKING-K30/SW1.0.0/WAP2.0/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9907.Unistar M320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UNISTARM320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9908.Unistar M320'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UNISTARM320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9909.Uriver Majestic1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Majestic1/Obigo/Q7 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9910.Uriver Majestic1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Majestic1/Obigo/Q7 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9911.Uriver SP500'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Uriver SP500/Teleca/Q03C1.22 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9912.Uriver SP500'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Uriver SP500/Teleca/Q03C1.22 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9913.Usha Lexus 848B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'USHA 848B' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9914.Usha Lexus 848B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'USHA 848B' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9915.Usha Lexus 888B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'USHA-LEXUS 888B/KAA363_0.93.822 Nucleus/1.0 MTK/6228 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0 USHA-LEXUS 888B/KAA363_0.93.822 Nucleus/1.0 MTK/6228 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuratio' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9916.Usha Lexus 888B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'USHA-LEXUS 888B/KAA363_0.93.822 Nucleus/1.0 MTK/6228 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuration/CLDC-1.0 USHA-LEXUS 888B/KAA363_0.93.822 Nucleus/1.0 MTK/6228 Release/0C.01.2005 Browser/Teleca_obigo Profile/MIDP-1.0 Configuratio' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9917.Utec B560'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Utec-B560' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9918.Utec B560'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Utec-B560' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9919.UTStarcom C711'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'utstarc711/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9920.UTStarcom C711'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'utstarc711' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9921.UTStarcom C711'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'utstarc711/1.0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9922.UTStarcom C711'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'utstarc711' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9923.UTStarcom CDM 7026'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UTSTARCOM-CDM7026/1.0 UP.Browser/6.3.0.7 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9924.UTStarcom CDM 7026'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UTSTARCOM-CDM7026/1.0 UP.Browser/6.3.0.7 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9925.UTStarcom CDM-7126'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UTSTARCOM-CDM7126/1.0 UP.Browser/6.3.0.7 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9926.UTStarcom CDM-7126'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UTSTARCOM-CDM7126/1.0 UP.Browser/6.3.0.7 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9927.UTStarcom CDM-8074VM'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CDM-8074VM UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9928.UTStarcom CDM-8074VM'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CDM-8074VM UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9929.UTStarcom CDM-8955'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CDM-8955 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9930.UTStarcom CDM-8955'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CDM8955C UP.Browser/6.2.2.6 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9931.UTStarcom CDM-8955'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CDM-8955 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9932.UTStarcom CDM-8955'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CDM8955C UP.Browser/6.2.2.6 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9933.UTStarcom CDM-8964VM'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UTSTARCOM-CDM-8964VM UP.Browser/7.2.7.2.398 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9934.UTStarcom CDM-8964VM'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UTSTARCOM-CDM-8964VM UP.Browser/7.2.7.2.398 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9935.UTStarcom CDM8975'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CDM8975/T05_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9936.UTStarcom CDM8975'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'utstar8975' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9937.UTStarcom CDM8975'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CDM8975/T05_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9938.UTStarcom CDM8975'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'utstar8975' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9939.UTStarcom GPFM1238'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'GPFM1238/1.0 MTK6223C/07B Release/03.16.2009 Browser/Obigo2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9940.UTStarcom GPFM1238'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'GPF168L' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9941.UTStarcom GPFM1238'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'GPFM1238/1.0MTK6223C/07B Release/03.16.2009 Browser/Obigo2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9942.UTStarcom GPFM1238'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'GPFM1238/1.0 MTK6223C/07B Release/03.16.2009 Browser/Obigo2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9943.UTStarcom GPFM1238'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'GPF168L' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9944.UTStarcom GPFM1238'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'GPFM1238/1.0MTK6223C/07B Release/03.16.2009 Browser/Obigo2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9945.UTStarcom GTX75'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UTSTARCOM-GTX75/UC1.88 POLARIS/6.00 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9946.UTStarcom GTX75'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UTSTARCOM-GTX75/UC1.88 POLARIS/6.00 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9947.UTStarcom MP6900 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla 4.0 (compatible:MSIE 6.0; Windows CE; IEMobile 7.6) Sprint MP6900SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9948.UTStarcom MP6900 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Sprint MP6900SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9949.UTStarcom MP6900 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint MP6900SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9950.UTStarcom MP6900 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sprint MP6900SP (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint MP6900SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9951.UTStarcom MP6900 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) Sprint:MP 6900SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9952.UTStarcom MP6900 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla 4.0 (compatible:MSIE 6.0; Windows CE; IEMobile 7.6) Sprint MP6900SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9953.UTStarcom MP6900 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Sprint MP6900SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9954.UTStarcom MP6900 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint MP6900SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9955.UTStarcom MP6900 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sprint MP6900SP (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint MP6900SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9956.UTStarcom MP6900 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) Sprint:MP 6900SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9957.UTStarcom MP6950 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint MP6950SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9958.UTStarcom MP6950 SP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint MP6950SP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9959.UTStarcom PCD/gz1c731'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'pcdc731' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9960.UTStarcom PCD/gz1c731'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'pcdc731' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9961.UTStarcom SMT 5800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) 320x320; VZW; UTStar-SMT5800; Window Mobile 6.0 Standard;' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9962.UTStarcom SMT 5800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) 320x320; VZW; UTStar-SMT5800; Window Mobile 6.0 Standard;' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9963.UTStarcom TXT8010'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TXT8010/T05_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9964.UTStarcom TXT8010'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'utstart8010' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9965.UTStarcom TXT8010'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TXT8010/T05_0 UP.Browser/6.2.3.2 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9966.UTStarcom TXT8010'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'utstart8010' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9967.UTStarcom UTS 7176M'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UTS-7176M/1.0 UP.Browser/6.3.0.7 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9968.UTStarcom UTS 7176M'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'UTS-7176M/1.0 UP.Browser/6.3.0.7 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9969.UTStarcom XV6175'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) 320x240; VZW; UTStar-XV6175; Window Mobile 6.1 Standard;' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9970.UTStarcom XV6175'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile 6.0) 320x240; VZW; UTStar-XV6175; Window Mobile 6.1 Standard;' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9971.Vacom VT820'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VACOM-VT820/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9972.Vacom VT820'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VACOM-VT820/1.0 UP.Browser/6.2.3.9 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9973.Velocity Mobile Velocity 103 VGA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Traveler 117;VGA;480x640' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9974.Velocity Mobile Velocity 103 VGA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Traveler 117;VGA;480x640' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9975.Venera Voyager V1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Venera-V1/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9976.Venera Voyager V1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Venera-V1/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9977.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9978.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9979.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Droid Build/ESE81) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9980.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Droid Build/ESE81) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9981.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Droid Build/FRF84B) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9982.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Moto Droid Build/FRG01B) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9983.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1 (ESE 53); en-us; Droid Build/ESE53) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9984.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'iMozilla/5.0 (Linux; U; Android 2.2.2; en-us; Droid Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9985.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9986.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9987.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Droid Build/ESE81) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9988.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Droid Build/ESE81) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9989.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Droid Build/FRF84B) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9990.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Moto Droid Build/FRG01B) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9991.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1 (ESE 53); en-us; Droid Build/ESE53) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9992.Verizon Droid'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'iMozilla/5.0 (Linux; U; Android 2.2.2; en-us; Droid Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9993.Verizon Droid2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 Build/VZW) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9994.Verizon Droid2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 Build/VZW) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9995.Verizon SMT 5800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) HTC-SMT5800' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9996.Verizon SMT 5800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) HTC-SMT5800' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9997.Verizon Touch Pro2 XV6875'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'XV6875 Opera/9.50 (Windows NT 5.1; U; en)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9998.Verizon Touch Pro2 XV6875'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'XV6875 Opera/9.50 (Windows NT 5.1; U; en)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9999.Verizon XV6850'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 480x640; XV6850; Window Mobile 6.1 Professional;' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10000.Verizon XV6850'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 480x640; XV6850; Window Mobile 6.1 Professional;' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};

base.run_test(__filename);