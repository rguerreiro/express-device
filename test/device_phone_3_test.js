var device = require('../lib/device.js'),
    base = require('./common.js');

exports['4001.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A953/Blur_Version.3.3.0.A953.AmericaMovil.en.BR Mozilla/5.0 (Linux; U; Android 2.2; es-us; A953 Build/MILA2_U6_3.3.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4002.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MotoA953 Build/S266) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4003.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S254) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4004.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S269) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4005.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S274) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4006.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; A953Blur Build/S260) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4007.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A953/Blur_Version.3.23.0.A953.Movistar.en.01 Mozilla/5.0 (Linux; U; Android 2.2.2; es-us; A953 Build/MILA2_U6_3.23.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4008.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; he-il; MotoA953 Build/MILS2_U6_2.5.5) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4009.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; it-it; MotoA953 Build/S251) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4010.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; A953Blur Build/S254) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4011.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A953/Blur_Version.3.3.0.A953.AmericaMovil.en.BR Mozilla/5.0 (Linux; U; Android 2.2; es-us; A953 Build/MILA2_U6_3.3.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4012.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MotoA953 Build/S266) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4013.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S254) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4014.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S269) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4015.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S274) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4016.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; A953Blur Build/S260) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4017.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A953/Blur_Version.3.23.0.A953.Movistar.en.01 Mozilla/5.0 (Linux; U; Android 2.2.2; es-us; A953 Build/MILA2_U6_3.23.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4018.Motorola A953'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; he-il; MotoA953 Build/MILS2_U6_2.5.5) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4019.Motorola AURA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-AURA/R6639_G_81.21.05R BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony %bv' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4020.Motorola AURA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-Nevis/R6639_G_81.21.07R BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4021.Motorola AURA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-AURA/R6639_G_81.21.05R BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony %bv' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4022.Motorola AURA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-Nevis/R6639_G_81.21.07R BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4023.Motorola C290-boost'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-C290-boost Obigo/Q04C1-1.9 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4024.Motorola C290-boost'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-C290-boost Obigo/Q04C1-1.9 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4025.Motorola Calgary'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; calgary Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4026.Motorola Calgary'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; calgary) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4027.Motorola Calgary'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Devour Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4028.Motorola Calgary'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; calgary Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4029.Motorola Calgary'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; calgary) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4030.Motorola Calgary'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Devour Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4031.Motorola cdma_shadow'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; cdma_shadow) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4032.Motorola cdma_shadow'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; cdma_shadow) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4033.Motorola Droid 2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4034.Motorola Droid 2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4035.Motorola Droid 2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 480X854 motorola DROID2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4036.Motorola Droid 2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 854X480 motorola DROID2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4037.Motorola Droid 2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4038.Motorola Droid 2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4039.Motorola Droid 2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4040.Motorola Droid 2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 480X854 motorola DROID2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4041.Motorola Droid 2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 854X480 motorola DROID2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4042.Motorola Droid 2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4043.Motorola DROID PRO'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID PRO Build/S275) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4044.Motorola DROID PRO'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; DROID PRO Build/3.4.2_80_V2_87) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4045.Motorola DROID PRO'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID PRO Build/S275) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4046.Motorola DROID PRO'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; DROID PRO Build/3.4.2_80_V2_87) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4047.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4048.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROIDX Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4049.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 480X854 motorola DROIDX' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4050.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4051.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; DROIDX Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 854X480 motorola DROIDX' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4052.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; DROIDX Build/4.5.1_57_DX5-26) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4053.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4054.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROIDX Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4055.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 480X854 motorola DROIDX' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4056.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4057.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; DROIDX Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 854X480 motorola DROIDX' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4058.Motorola DroidX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; DROIDX Build/4.5.1_57_DX5-26) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4059.Motorola EM25'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.26.2008 Browser/CMCS1.0 Software/0.34I Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4060.Motorola EM25'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.12.2008 Browser/CMCS1.0 Software/0.34E Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4061.Motorola EM25'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.16.2008 Browser/CMCS1.0 Software/0.34F Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4062.Motorola EM25'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/11.01.2008 Browser/CMCS1.0 Software/0.34K Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4063.Motorola EM25'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.26.2008 Browser/CMCS1.0 Software/0.34I Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4064.Motorola EM25'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.12.2008 Browser/CMCS1.0 Software/0.34E Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4065.Motorola EM25'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.16.2008 Browser/CMCS1.0 Software/0.34F Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4066.Motorola EM25'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/11.01.2008 Browser/CMCS1.0 Software/0.34K Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4067.Motorola EM28'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM28/0.0.62 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4068.Motorola EM28'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM28/0.0.66 UP.Browser/6.3.0.6.c.29 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4069.Motorola EM28'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM28/0.0.62 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4070.Motorola EM28'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM28/0.0.66 UP.Browser/6.3.0.6.c.29 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4071.Motorola EM30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM30/R6716_G_71.01.24R Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 [es-co]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4072.Motorola EM30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOROKREM30/1.0 LinuxOS/2.6.10 Release/11.16.2007 Browser/OSS1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/R6716_G_71.01.23R_A' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4073.Motorola EM30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-EM30/R6716_G_71.01.02R_B BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4074.Motorola EM30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM30/R6716_G_71.01.24R Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 [es-co]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4075.Motorola EM30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOROKREM30/1.0 LinuxOS/2.6.10 Release/11.16.2007 Browser/OSS1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/R6716_G_71.01.23R_A' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4076.Motorola EM30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-EM30/R6716_G_71.01.02R_B BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4077.Motorola EM325'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/07.31.2008 Browser/CMCS1.0 Software/0.240 Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4078.Motorola EM325'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/10.03.2008 Browser/CMCS1.0 Software/0.35A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4079.Motorola EM325'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0/Software/1.35D Release/11.03.2008 Browser/CMCS1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4080.Motorola EM325'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/12.20.2008 Browser/CMCS1.0 Software/1.300 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4081.Motorola EM325'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/07.31.2008 Browser/CMCS1.0 Software/0.240 Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4082.Motorola EM325'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/10.03.2008 Browser/CMCS1.0 Software/0.35A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4083.Motorola EM325'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0/Software/1.35D Release/11.03.2008 Browser/CMCS1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4084.Motorola EM325'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/12.20.2008 Browser/CMCS1.0 Software/1.300 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4085.Motorola EM326g'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM326g/1.0 Release/03.23.2009 Browser/CMCS1.0 Software/1.64F Profile/MIDP-2.0 Configuration/CLDC-1.1[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4086.Motorola EM326g'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM326g/1.0 Release/03.23.2009 Browser/CMCS1.0 Software/1.64F Profile/MIDP-2.0 Configuration/CLDC-1.1[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4087.Motorola EM330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.62 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4088.Motorola EM330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.61 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4089.Motorola EM330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.63 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4090.Motorola EM330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.62 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4091.Motorola EM330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.61 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4092.Motorola EM330'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.63 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4093.Motorola EM35'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM35/R6743_G_74.10.4BROX Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4094.Motorola EM35'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM35/R6743_G_74.10.5BROX Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4095.Motorola EM35'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM35/R6743_G_74.10.4BROX Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4096.Motorola EM35'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM35/R6743_G_74.10.5BROX Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4097.Motorola Evoke'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux ARM; en-us) AppleWebKit/525.1+(KHTML, like Gecko) Safari/525 Mobile/MotorolaEvoke' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4098.Motorola Evoke'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux ARM; en-us) AppleWebKit/525.1+(KHTML, like Gecko) Safari/525 Mobile/MotorolaEvoke' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4099.Motorola EX130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX130/1.0 REXL4/1.0 BrewMP/1.0.3 Release/6.15.2011 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1 (GUI) MMP/2.0 Push/PO' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4100.Motorola EX130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX130/1.0 REXL4/1.0 BrewMP/1.0.3 Release/6.15.2011 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1 (GUI) MMP/2.0 Push/PO' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4101.Motorola EX211'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-EX211/18.01 Browser/Obigo/Q03C MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4102.Motorola EX211'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-EX211/18.01 Browser/Obigo/Q03C MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4103.Motorola EX300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-EX300/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4104.Motorola EX300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-EX300/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4105.Motorola i1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Motorola_i1 Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4106.Motorola i1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Opus One Build/RBE.00.00) AppleWebKit/528.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4107.Motorola i1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Motorola_i1 Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4108.Motorola i1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Opus One Build/RBE.00.00) AppleWebKit/528.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4109.Motorola i290'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-7F/00.03 UP.Browser/7.0.2.2.c.1.109 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4110.Motorola i290'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-7F/00.03 UP.Browser/7.0.2.2.c.1.109 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4111.Motorola i576'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-8E/00.01 UP.Browser/7.0.2.2.c.1.110 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4112.Motorola i576'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-8E/00.01 UP.Browser/7.0.2.2.c.1.110 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4113.Motorola i615'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-7D/00.01 UP.Browser/7.0.2.2.c.1.108 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4114.Motorola i615'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-7D/00.01 UP.Browser/7.0.2.2.c.1.108 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4115.Motorola ic602'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-ic602 Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4116.Motorola ic602'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-ic602 Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4117.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.42.0BR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4118.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.02.4EI MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4119.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.03.08R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4120.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.22.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4121.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1t/08.22.07R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4122.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/s/08.01.11R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4123.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.42.0BR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4124.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.02.4EI MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4125.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.03.08R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4126.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.22.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4127.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1t/08.22.07R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4128.Motorola K1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/s/08.01.11R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4129.Motorola K1m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4130.Motorola K1m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m-boost Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4131.Motorola K1m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1m/1.0 UP.Browser/6.2.3.4.c.1.116 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4132.Motorola K1m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4133.Motorola K1m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1m-parrot/1.0 UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4134.Motorola K1m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4135.Motorola K1m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m-boost Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4136.Motorola K1m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1m/1.0 UP.Browser/6.2.3.4.c.1.116 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4137.Motorola K1m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4138.Motorola K1m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1m-parrot/1.0 UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4139.Motorola K1v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4140.Motorola K1v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.22.11R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4141.Motorola K1v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.03.08R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4142.Motorola K1v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/AB 0C.23.57R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4143.Motorola K1v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4144.Motorola K1v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.22.11R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4145.Motorola K1v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.03.08R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4146.Motorola K1v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/AB 0C.23.57R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4147.Motorola K3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4148.Motorola K3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K3/99.13.00R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12003131) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4149.Motorola K3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOKRZRmaxxK3/99.31.04R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12153168) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4150.Motorola K3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4151.Motorola K3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K3/99.13.00R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12003131) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4152.Motorola K3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOKRZRmaxxK3/99.31.04R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12153168) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4153.Motorola KRZR K1v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.22.07R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4154.Motorola KRZR K1v'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.22.07R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4155.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4156.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/01.40.02_ MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4157.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/08.B7.54R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4158.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-SLVR L7/0B.D2.2FR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4159.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT SLVR-L7' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4160.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-SLVR(RED)/08.C4.37R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4161.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/NA.ACR_RB MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4162.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/00.00.00 MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4163.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4164.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/01.40.02_ MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4165.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/08.B7.54R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4166.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-SLVR L7/0B.D2.2FR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4167.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT SLVR-L7' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4168.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-SLVR(RED)/08.C4.37R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4169.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/NA.ACR_RB MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4170.Motorola L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/00.00.00 MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4171.Motorola L72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L72/08.21.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4172.Motorola L72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L72_CMCC/AAUG2189AB Release/04.17.2007 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0 Software/08.21.08R' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4173.Motorola L72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L72/08.21.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4174.Motorola L72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L72_CMCC/AAUG2189AB Release/04.17.2007 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0 Software/08.21.08R' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4175.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4176.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/AAUG2103AA 08.00.12R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4177.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/08.01.0AR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4178.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/SJUG2275AA 08.03.0DR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4179.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/CFWG2103AD 08.03.0DR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4180.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/CFWG2103AD 08.01.0AR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4181.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4182.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/AAUG2103AA 08.00.12R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4183.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/08.01.0AR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4184.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/SJUG2275AA 08.03.0DR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4185.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/CFWG2103AD 08.03.0DR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4186.Motorola L7e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/CFWG2103AD 08.01.0AR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4187.Motorola L7i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/AAUG2103AA 08.02.06R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4188.Motorola L7i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/08.03.0DR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4189.Motorola L7i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/AAUG2103AA 08.02.06R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4190.Motorola L7i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/08.03.0DR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4191.Motorola L9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4192.Motorola L9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/04.2B.02_ MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4193.Motorola L9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/08.21.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4194.Motorola L9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/08.22.04R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4195.Motorola L9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4196.Motorola L9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/04.2B.02_ MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4197.Motorola L9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/08.21.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4198.Motorola L9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/08.22.04R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4199.Motorola M990'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-M990/AB 0C.23.55R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4200.Motorola M990'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-M990/AB 0C.23.55R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4201.Motorola MB200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB200/Blur_Version.0.10.2.MB200.T-Mobile.en.US Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4202.Motorola MB200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4203.Motorola MB200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200-demo Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4204.Motorola MB200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4205.Motorola MB200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; MB200 Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4206.Motorola MB200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB200/Blur_Version.0.10.2.MB200.T-Mobile.en.US Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4207.Motorola MB200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4208.Motorola MB200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200-demo Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4209.Motorola MB200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4210.Motorola MB200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; MB200 Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4211.Motorola MB300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; MB300 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4212.Motorola MB300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; MB300 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4213.Motorola MB501'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB501 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4214.Motorola MB501'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB501 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4215.Motorola MB502'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB502 Build/BASIL1659) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4216.Motorola MB502'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB502 Build/BASIL1659) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4217.Motorola MB508'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; MB508 Build/SAGE_U3_10.23.20) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4218.Motorola MB508'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; MB508 Build/SAGE_U3_10.23.20) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4219.Motorola MB511'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB511 Build/ERE27) AppleWebKit/525.10 +(KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4220.Motorola MB511'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-ch; MotoMB511 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4221.Motorola MB511'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB511 Build/ERE27) AppleWebKit/525.10 +(KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4222.Motorola MB511'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-ch; MotoMB511 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4223.Motorola MB520'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB520 Build/KOBE_U3_2.144.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4224.Motorola MB520'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB520 Build/KOBE_U3_2.144.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4225.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.11.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4226.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB525 Build/JORDN_U3_6.11.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4227.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.12.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4228.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.16.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4229.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB525 Build/JORDN_U3_6.19.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4230.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.17.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4231.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.18.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4232.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; MB525 Build/3.4.2-131) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4233.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB525/Blur_Version.34.4.706.MB525.TELUS.en.CA Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; MB525 Build/3.4.2-107_JDNL-6_R01) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4234.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; MB525 Build/3.4.2-155) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4235.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; MotoMB525 Build/3.4.2-159) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4236.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-gb; MotoMB525 Build/4.5.1_127) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4237.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; he-il; MB525 Build/JRDNEM_U3_2.59.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4238.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.11.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4239.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB525 Build/JORDN_U3_6.11.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4240.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.12.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4241.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.16.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4242.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB525 Build/JORDN_U3_6.19.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4243.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.17.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4244.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.18.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4245.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; MB525 Build/3.4.2-131) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4246.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB525/Blur_Version.34.4.706.MB525.TELUS.en.CA Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; MB525 Build/3.4.2-107_JDNL-6_R01) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4247.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; MB525 Build/3.4.2-155) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4248.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; MotoMB525 Build/3.4.2-159) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4249.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-gb; MotoMB525 Build/4.5.1_127) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4250.Motorola MB525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; he-il; MB525 Build/JRDNEM_U3_2.59.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4251.Motorola MB526'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; fr-fr; MB526 Build/4.5.1_120) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4252.Motorola MB526'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; fr-fr; MB526 Build/4.5.1_120) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4253.Motorola MB611'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MB611 Build/S246) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4254.Motorola MB611'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MB611 Build/S246) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4255.Motorola MB860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; MB860 Build/Blur_Version.4.0.300.MB860.Orange.en.GB Flex/P009) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4256.Motorola MB860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; MB860 Build/Blur_Version.0.37.4.MB860.BellMobility.en.CA Flex/P025) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4257.Motorola MB860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; MB860 Build/OLYFR_U4_1.8.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4258.Motorola MB860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; MB860 Build/Blur_Version.4.1.83.MB860.ATT.en.US Flex/P013) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4259.Motorola MB860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; MB860 Build/Blur_Version.4.1.83.MB860.ATT.en.US Flex/P013) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4260.Motorola MB860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; MB860 Build/Blur_Version.4.0.300.MB860.Orange.en.GB Flex/P009) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4261.Motorola MB860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; MB860 Build/Blur_Version.0.37.4.MB860.BellMobility.en.CA Flex/P025) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4262.Motorola MB860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; MB860 Build/OLYFR_U4_1.8.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4263.Motorola MB860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; MB860 Build/Blur_Version.4.1.83.MB860.ATT.en.US Flex/P013) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4264.Motorola MB860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; MB860 Build/Blur_Version.4.1.83.MB860.ATT.en.US Flex/P013) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4265.Motorola ME501'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; ME501 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4266.Motorola ME501'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; ME501 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4267.Motorola ME511'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; ME511 Build/RuthGC_0.18.4) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4268.Motorola ME511'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; ME511 Build/RuthGC_0.18.4) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4269.Motorola ME525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ru-ru; ME525 Build/JDGC_0.26.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4270.Motorola ME525'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ru-ru; ME525 Build/JDGC_0.26.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4271.Motorola ME600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; ME600 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4272.Motorola ME600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; ME600 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4273.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; de-de; Milestone Build/SHOLS_U2_01.03.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4274.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; de-de; Milestone Build/SHOLS_U2_01.14.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4275.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; Milestone Build/SHOLS_U2_02.31.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4276.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; Milestone Build/SHOLS_U2_02.34.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4277.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; A854 Build/MILER_X1_00.26.1) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4278.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; xx-xx; Milestone Build/SHOLS_U2_01.03.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4279.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Milestone Build/FRG22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4280.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; Milestone Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4281.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; Milestone Build/SHOLS_U2_05.06.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4282.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; de-de; Milestone Build/SHOLS_U2_01.03.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4283.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; de-de; Milestone Build/SHOLS_U2_01.14.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4284.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; Milestone Build/SHOLS_U2_02.31.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4285.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; Milestone Build/SHOLS_U2_02.34.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4286.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; A854 Build/MILER_X1_00.26.1) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4287.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; xx-xx; Milestone Build/SHOLS_U2_01.03.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4288.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Milestone Build/FRG22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4289.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; Milestone Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4290.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; Milestone Build/SHOLS_U2_05.06.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4291.Motorola Milestone'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; fr-ca; Milestone Build/ SHOLS_U2_05.26.1) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4292.Motorola Milestone XT720'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; Milestone XT720 Build/STR_U2_01.18.2) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4293.Motorola Milestone XT720'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; Milestone XT720 Build/STR_U2_01.18.2) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4294.Motorola Morrison'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; morrison) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4295.Motorola Morrison'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; morrison) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4296.MOTOROLA MOT-EX112'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX112 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4297.MOTOROLA MOT-EX112'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX112 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4298.MOTOROLA MOT-EX115'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX115 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4299.MOTOROLA MOT-EX115'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX115 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4300.MOTOROLA MOT-EX122'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX122 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4301.MOTOROLA MOT-EX122'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX122 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4302.MOTOROLA MOT-EX128'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX128 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4303.MOTOROLA MOT-EX128'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX128 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4304.Motorola MOT-Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240/01.06.08R) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4305.Motorola MOT-Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/APVER Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4306.Motorola MOT-Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240/01.06.08R) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4307.Motorola MOT-Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/APVER Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4308.Motorola MOT-V176'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTV176/6.1.51[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]+UP.Browser/6.2.3.9.c.8+(GUI)+MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4309.Motorola MOT-V176'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTV176/6.1.51[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]+UP.Browser/6.2.3.9.c.8+(GUI)+MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4310.Motorola MOT-W376g'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W376g/6.1.31[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.3.0.6.c.19 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4311.Motorola MOT-W376g'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W376g/6.1.31[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.3.0.6.c.19 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4312.Motorola MOT-W377g'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W377g/6.1.31[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.3.0.6.c.19 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4313.Motorola MOT-W377g'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W377g/6.1.31[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.3.0.6.c.19 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4314.Motorola Moto MB300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB300/Blur_Version.0.0.1.motus.AmericaMovil.en.BR Mozilla/5.0 (Linux; U; Android 1.5; es-es; MB300 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4315.Motorola Moto MB300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB300/Blur_Version.0.0.1.motus.AmericaMovil.en.BR Mozilla/5.0 (Linux; U; Android 1.5; es-es; MB300 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4316.Motorola MOTOA45ECO'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A45 ECO/13.10.09R_C Release/09.24.2008 OPERA/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4317.Motorola MOTOA45ECO'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A45ECO/13.10.0DR Release/09.24.2008 OPERA/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4318.Motorola MOTOA45ECO'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A45 ECO/13.10.09R_C Release/09.24.2008 OPERA/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4319.Motorola MOTOA45ECO'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A45ECO/13.10.0DR Release/09.24.2008 OPERA/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4320.Motorola MotoroiX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MotoroiX Build/IUS) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 480X854 motorola MotoroiX' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4321.Motorola MotoroiX'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MotoroiX Build/IUS) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 480X854 motorola MotoroiX' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4322.Motorola MotoXT610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-XT610/Blur_Version.0.22.0.XT610.Movistar.en.01 Mozilla/5.0 (Linux; U; Android 2.2.2; es-us; XT610 Build/0.22.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4323.Motorola MotoXT610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-gb; XT610 Build/V2U_3.4.2-177) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4324.Motorola MotoXT610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-XT610/Blur_Version.0.22.0.XT610.Movistar.en.01 Mozilla/5.0 (Linux; U; Android 2.2.2; es-us; XT610 Build/0.22.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4325.Motorola MotoXT610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-gb; XT610 Build/V2U_3.4.2-177) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4326.Motorola Motus'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; motus) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4327.Motorola Motus'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; motus) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4328.Motorola MT710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; MT710 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4329.Motorola MT710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; MT710 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4330.Motorola Q'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 Sprint:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4331.Motorola Q'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motoq2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4332.Motorola Q'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Motorola Q; Smartphone; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4333.Motorola Q'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 Qwest:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4334.Motorola Q'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 PLS:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4335.Motorola Q'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 Sprint:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4336.Motorola Q'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motoq2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4337.Motorola Q'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Motorola Q; Smartphone; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4338.Motorola Q'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 Qwest:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4339.Motorola Q'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 PLS:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4340.Motorola Q-UMTS'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320; MOT-Q-UMTS/01.00.60I) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4341.Motorola Q-UMTS'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9W/01.11.22I Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4342.Motorola Q-UMTS'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320; MOT-Q-UMTS/APVER) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4343.Motorola Q-UMTS'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320; MOT-Q-UMTS/01.00.60I) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4344.Motorola Q-UMTS'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9W/01.11.22I Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4345.Motorola Q-UMTS'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320; MOT-Q-UMTS/APVER) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4346.Motorola Q11'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q11/01.00.58R Software/WM6.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4347.Motorola Q11'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q11/01.00.58R Software/WM6.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4348.Motorola Q9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) MOT-Q9/01.02.23R' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4349.Motorola Q9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) MOT-Q9/01.04.35R' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4350.Motorola Q9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motoq9m' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4351.Motorola Q9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) MOT-Q9/01.02.23R' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4352.Motorola Q9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) MOT-Q9/01.04.35R' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4353.Motorola Q9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motoq9m' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4354.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Sprint:MotoQ9c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4355.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Alltel:MotoQ9c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4356.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint:MotoQ9c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4357.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.0 Standard' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4358.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.0 Standard' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4359.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.1 Standard' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4360.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Alltel:MotoQ9c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4361.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PLS:MotoQ9c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4362.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Sprint:MotoQ9c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4363.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Alltel:MotoQ9c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4364.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint:MotoQ9c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4365.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.0 Standard' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4366.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.0 Standard' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4367.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.1 Standard' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4368.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Alltel:MotoQ9c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4369.Motorola Q9c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PLS:MotoQ9c' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4370.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.02.22R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4371.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/1.0 (05.02) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4372.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.04.35R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4373.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) MOT-Q9/01.07.09R' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4374.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) MOT-Q9/01.09.34I' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4375.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.09.49R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4376.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.02.22R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4377.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/1.0 (05.02) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4378.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.04.35R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4379.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) MOT-Q9/01.07.09R' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4380.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) MOT-Q9/01.09.34I' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4381.Motorola Q9H'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.09.49R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4382.Motorola Q9m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x240; VZW; Motorola-Q9m; Windows Mobile 6.0 Standard' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4383.Motorola Q9m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x240; VZW; Motorola-Q9m; Windows Mobile 6.0 Standard' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4384.Motorola QA1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOQA1/A2.00.46R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003388) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [es]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4385.Motorola QA1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOQA1/A2.00.46R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003388) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [es]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4386.Motorola QA30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-QA30/00.72 UP.Browser/7.2.7.5.546 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4387.Motorola QA30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-QA30 UP.Browser/7.2.7.5.540 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4388.Motorola QA30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RASPB/00.72 UP.Browser/7.2.7.5.598 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4389.Motorola QA30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-QA30/00.72 UP.Browser/7.2.7.5.546 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4390.Motorola QA30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-QA30 UP.Browser/7.2.7.5.540 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4391.Motorola QA30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RASPB/00.72 UP.Browser/7.2.7.5.598 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4392.Motorola RAZR V3m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-NCR_0/00.62 UP.Browser/6.2.3.4.c.1.115 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4393.Motorola RAZR V3m'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-NCR_0/00.62 UP.Browser/6.2.3.4.c.1.115 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4394.Motorola RAZR V3xxR'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3xxR' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4395.Motorola RAZR V3xxR'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3xxR/97.04.2BR BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003290) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4396.Motorola RAZR V3xxR'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3XXR_J/97.04.30R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003290) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4397.Motorola RAZR V3xxR'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3xxR' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4398.Motorola RAZR V3xxR'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3xxR/97.04.2BR BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003290) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4399.Motorola RAZR V3xxR'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3XXR_J/97.04.30R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003290) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4400.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4401.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.xx.yyP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4402.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTORAZR V8/R601_G_80.41.17R Mozilla/4.0 (compatible; MSIE 6.0 Linux; MOTORAZR V88.50) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[zh]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4403.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.42.0FRP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[yy]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4404.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTORAZRmaxxV3/98.30.80R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12093102) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [zh]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4405.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.56.13R_AP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[yy]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4406.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.53.3BR_A Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;3076) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4407.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4408.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.xx.yyP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4409.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTORAZR V8/R601_G_80.41.17R Mozilla/4.0 (compatible; MSIE 6.0 Linux; MOTORAZR V88.50) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[zh]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4410.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.42.0FRP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[yy]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4411.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTORAZRmaxxV3/98.30.80R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12093102) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [zh]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4412.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.56.13R_AP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[yy]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4413.Motorola RAZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.53.3BR_A Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;3076) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4414.Motorola RAZRV6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTORAZR-MAXX-V6' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4415.Motorola RAZRV6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTORAZR-MAXX-V6' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4416.Motorola RIZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTORIZR-Z8/46.00.00G Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 534) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4417.Motorola RIZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTORIZR-Z8/46.00.00 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 356) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4418.Motorola RIZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTORIZR-Z8/46.00.00G Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 534) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4419.Motorola RIZR V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTORIZR-Z8/46.00.00 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 356) Opera 8.65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4420.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android Eclair; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4421.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4422.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4423.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; de-de; umts_sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4424.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4425.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4426.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android Eclair; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4427.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4428.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4429.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; de-de; umts_sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4430.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4431.Motorola Sholes'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4432.Motorola Sholes Tablet'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; ko-kr; sholest) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4433.Motorola Sholes Tablet'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; ko-kr; sholest) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4434.Motorola SLVR L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4435.Motorola SLVR L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v/08.B7.54R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4436.Motorola SLVR L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v/08.B7.5DR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4437.Motorola SLVR L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4438.Motorola SLVR L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v/08.B7.54R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4439.Motorola SLVR L7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v/08.B7.5DR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4440.Motorola V1075'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V1075/85.97.C6P MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4441.Motorola V1075'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V1075/85.97.C6P MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4442.Motorola V1100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V1100/98.20.3BR BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; Synergy; 1564) Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0 Opera 8.00 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4443.Motorola V1100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V1100/98.20.3BR BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; Synergy; 1564) Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0 Opera 8.00 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4444.Motorola V3r'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V3r/08.BD.D3R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4445.Motorola V3r'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V3r/08.BD.D3R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4446.Motorola V3re'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V3re/0E.43.0AR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4447.Motorola V3re'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V3re/0E.43.0AR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4448.Motorola V750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V750' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4449.Motorola V750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-CHARL/00.62 UP.Browser/6.2.3.4.c.1.124 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4450.Motorola V750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motov750' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4451.Motorola V750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V750' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4452.Motorola V750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-CHARL/00.62 UP.Browser/6.2.3.4.c.1.124 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4453.Motorola V750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motov750' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4454.Motorola V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V8' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4455.Motorola V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V8/08.B7.23R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4456.Motorola V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTORAZRV82GB_CMCC/1.0 LinuxOS/2.6.10 Release/08.30.2007 Browser/Opera8.50 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/R601_G_80.56.15R' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4457.Motorola V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V8' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4458.Motorola V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V8/08.B7.23R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4459.Motorola V8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTORAZRV82GB_CMCC/1.0 LinuxOS/2.6.10 Release/08.30.2007 Browser/Opera8.50 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/R601_G_80.56.15R' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4460.Motorola V860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V860/00.72 UP.Browser/7.2.7.5.630 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4461.Motorola V860'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V860/00.72 UP.Browser/7.2.7.5.630 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4462.Motorola V950'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-V950 Obigo/Q05A1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4463.Motorola V950'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-V950 Obigo/Q05A1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4464.Motorola VE'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-20.1_/00.62 UP.Browser/6.2.3.4.c.1.120 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4465.Motorola VE'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-20.1_/00.62 UP.Browser/6.2.3.4.c.1.120 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4466.Motorola VE 240'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE240/00.72 UP.Browser/7.2.7.5.541 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4467.Motorola VE 240'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-DBLDV/00.72 UP.Browser/7.2.7.5.599 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4468.Motorola VE 240'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE240/00.72 UP.Browser/7.2.7.5.541 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4469.Motorola VE 240'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-DBLDV/00.72 UP.Browser/7.2.7.5.599 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4470.Motorola VE20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-VE20 Obigo/Q05A1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4471.Motorola VE20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE20/1.0 UP.Browser/7.2.6.1.731 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4472.Motorola VE20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-R4541/00.72 UP.Browser/7.2.6.1.841 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4473.Motorola VE20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-VE20 Obigo/Q05A1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4474.Motorola VE20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE20/1.0 UP.Browser/7.2.6.1.731 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4475.Motorola VE20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-R4541/00.72 UP.Browser/7.2.6.1.841 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4476.Motorola VE66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE66/R6743_G_74.10.86RPL Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4477.Motorola VE66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE66/R6743_G_74.10.86RPL Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4478.Motorola VU204'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VU204/00.62 UP.Browser/6.2.3.4.c.1.128 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4479.Motorola VU204'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motovu204' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4480.Motorola VU204'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VU204/00.62 UP.Browser/6.2.3.4.c.1.128 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4481.Motorola VU204'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motovu204' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4482.Motorola VU30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VU30/00.62 UP.Browser/6.2.3.4.c.1.124 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4483.Motorola VU30'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VU30/00.62 UP.Browser/6.2.3.4.c.1.124 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4484.Motorola W213'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W213/0.0.45 UP.Browser/6.3.0.6.c.17 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4485.Motorola W213'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W213/0.0.45 UP.Browser/6.3.0.6.c.17 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4486.Motorola W231'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W231/0.0.41 UP.Browser/6.3.0.6.c.22 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4487.Motorola W231'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W231/0.0.41 UP.Browser/6.3.0.6.c.22 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4488.Motorola W233'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W233/2.0.60 UP.Browser/6.3.0.6.c.33 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4489.Motorola W233'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W233/2.0.60 UP.Browser/6.3.0.6.c.33 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4490.Motorola W377'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W377/0.0.32 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4491.Motorola W377'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W377/0.0.32 MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4492.Motorola W385'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W385/1.0 UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4493.Motorola W385'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W385/1.0 UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4494.Motorola W388'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W388/0.0.41 UP.Browser/6.3.0.6.c.24 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4495.Motorola W388'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W388/0.0.47 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4496.Motorola W388'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W388/0.0.41 UP.Browser/6.3.0.6.c.24 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4497.Motorola W388'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W388/0.0.47 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4498.Motorola W396'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W396/0.1.42 UP.Browser/6.3.0.6.c.24 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4499.Motorola W396'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W396/0.0.47 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4500.Motorola W396'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W396/0.1.42 UP.Browser/6.3.0.6.c.24 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4501.Motorola W396'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W396/0.0.47 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4502.Motorola W397'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W397v/0.1.44 UP.Browser/6.3.0.6.c.27 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4503.Motorola W397'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W397v/0.1.44 UP.Browser/6.3.0.6.c.27 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4504.Motorola W450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W450/0.1.58.K1/08.18.2008 Browser/UPB6.3 Software/13.105I' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4505.Motorola W450'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W450/0.1.58.K1/08.18.2008 Browser/UPB6.3 Software/13.105I' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4506.Motorola W6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W6/08.00.0CR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4507.Motorola W6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W6/08.00.0CR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4508.Motorola W7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W7/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.2 (GUI) MMP/2.0 Push/PO' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4509.Motorola W7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W7/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.2 (GUI) MMP/2.0 Push/PO' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4510.Motorola W750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorolaW750/%D Mozilla/4.0 (compatible; MSIE 6.0; Linux; Motorola W750;nnn) Profile/MIDP-%m Configuration/CLDC-1.1 Symphony' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4511.Motorola W750'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motorolaW750/%D Mozilla/4.0 (compatible; MSIE 6.0; Linux; Motorola W750;nnn) Profile/MIDP-%m Configuration/CLDC-1.1 Symphony' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4512.Motorola W760r'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTO-W760r/Mozilla/4.0 (compatible;MSIE 6.0;Linux W760r)/R63712_U_71.xx.yyI Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony 1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4513.Motorola W760r'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOTO-W760r/Mozilla/4.0 (compatible;MSIE 6.0;Linux W760r)/R63712_U_71.xx.yyI Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony 1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4514.Motorola W766'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W766/00.72 UP.Browser/7.2.7.5.606 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4515.Motorola W766'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motow766' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4516.Motorola W766'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W766/00.72 UP.Browser/7.2.7.5.606 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4517.Motorola W766'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motow766' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4518.Motorola WX260'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX260/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4519.Motorola WX260'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX260/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4520.Motorola WX265'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX265/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4521.Motorola WX265'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX265/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4522.Motorola WX288'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX288/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4523.Motorola WX288'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX288/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4524.Motorola WX290'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX290/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4525.Motorola WX290'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX290/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4526.Motorola WX295'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX295/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4527.Motorola WX295'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX295/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4528.Motorola WX390'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX390/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4529.Motorola WX390'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX390/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4530.Motorola WX395'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX395/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4531.Motorola WX395'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX395/1.0 ObigoInternetBrowser/Q03C' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4532.Motorola WX445'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; WX445 Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 320X240 motorola WX445 240X320 motorola WX445' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4533.Motorola WX445'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; WX445 Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 240X320 motorola WX445' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4534.Motorola WX445'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; WX445 Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 320X240 motorola WX445 240X320 motorola WX445' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4535.Motorola WX445'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; WX445 Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 240X320 motorola WX445' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4536.Motorola X701'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; zh-cn; XT701 Build/STCU_11.04.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4537.Motorola X701'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; zh-cn; XT701 Build/STCU_11.04.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4538.Motorola Xoom'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4539.Motorola Xoom'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4540.Motorola XT300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; XT300 Build/SESLA_U3_01.24.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4541.Motorola XT300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; XT300 Build/SESLA_U3_01.33.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4542.Motorola XT300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; XT300 Build/SESLA_U3_01.24.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4543.Motorola XT300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; XT300 Build/SESLA_U3_01.33.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4544.Motorola XT316'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-gb; XT316 Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4545.Motorola XT316'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-gb; XT316 Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4546.Motorola XT502'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; de-de; Motorola-XT502 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4547.Motorola XT502'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; de-de; Motorola-XT502 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4548.Motorola XT702'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; XT702 Build/SGC01260) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4549.Motorola XT702'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; XT702 Build/SGC01260) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4550.Motorola XT720'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; ko-kr; XT720 Build/STSKT_N_79.11.29R1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4551.Motorola XT720'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; ko-kr; XT720 Build/STSKT_N_79.11.29R1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4552.Motorola XT800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; zh-cn; XT800 Build/TITA_M2_15.10.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4553.Motorola XT800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; zh-cn; XT800 Build/TITA_M2_15.10.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4554.Motorola XT800W'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-; XT800W Build/TTSKT_U_80.10.24R) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4555.Motorola XT800W'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-; XT800W Build/TTSKT_U_80.10.24R) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4556.Motorola Z6W'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible;MSIE 6.0;Linux MOTOROKR Z6W-orange) MOT-Z6w/R6635_G_81.01.61R Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony 1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4557.Motorola Z6W'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible;MSIE 6.0;Linux MOTOROKR Z6W-orange) MOT-Z6w/R6635_G_81.01.61R Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony 1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4558.Motorola Zeppelin'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; zeppelin) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4559.Motorola Zeppelin'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; zeppelin) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4560.Motorola ZN200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/09.01.2008 Browser/CMCS1.0 Software/0.34D Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4561.Motorola ZN200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/09.16.2008 Browser/CMCS1.0 Software/1.000 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4562.Motorola ZN200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/10.03.2008 Browser/CMCS1.0 Software/1.040 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4563.Motorola ZN200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/09.01.2008 Browser/CMCS1.0 Software/0.34D Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4564.Motorola ZN200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/09.16.2008 Browser/CMCS1.0 Software/1.000 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4565.Motorola ZN200'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/10.03.2008 Browser/CMCS1.0 Software/1.040 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4566.Motorola ZN300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN300/13.00.57I BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 17243415) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.65 [es]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4567.Motorola ZN300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN300/13.00.57I BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 17243415) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.65 [es]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4568.Motorola ZN4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN4/00.72 UP.Browser/7.2.7.5.540 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4569.Motorola ZN4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motozn4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4570.Motorola ZN4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN4/00.72 UP.Browser/7.2.7.5.540 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4571.Motorola ZN4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'motozn4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4572.MyPhone B21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB21AM/MTK Release/V0.3 Aug-23-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4573.MyPhone B21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB21AM/MTK Release/V0.3 Aug-23-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4574.MyPhone B22 Duo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB22Duo/MTK Release/V0.44 Apr-01-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4575.MyPhone B22 Duo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB22Duo/MTK Release/V0.44 Apr-01-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4576.MyPhone B23'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB23DuoAM/MTK Release/V0.1 Aug-25-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4577.MyPhone B23'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB23DuoAM/MTK Release/V0.1 Aug-25-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4578.MyPhone MS28'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneMS28Duo/MTK Release/V7 May-04-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4579.MyPhone MS28'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneMS28Duo/MTK Release/V7 May-04-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4580.MyPhone Q21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneQ21Duo/MTK Release/V7 Apl-01-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4581.MyPhone Q21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneQ21Duo/MTK Release/V7 Apl-01-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4582.MyPhone Q22'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneQ22Duo/MTK Release/V1 Nov-20-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4583.MyPhone Q22'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneQ22Duo/MTK Release/V1 Nov-20-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4584.MyPhone S21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneS21/MTK Release/V0.6 Mar-06-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4585.MyPhone S21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneS21/MTK Release/V0.6 Mar-06-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4586.MyPhone TV21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneTV21Duo/MTK Release/V6 Jan-12-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4587.MyPhone TV21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneTV21Duo/MTK Release/V6 Jan-12-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4588.NEC N-04C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; N-04C Build/A1010101) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4589.NEC N-04C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; N-04C Build/A1002001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4590.NEC N-04C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; N-04C Build/A1010101) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4591.NEC N-04C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; N-04C Build/A1002001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4592.NEC N-06C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; N-06C Build/A1000001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4593.NEC N-06C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; N-06C Build/A1001600) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4594.NEC N-06C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; N-06C Build/A1000001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4595.NEC N-06C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; N-06C Build/A1001600) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4596.NEC N-07C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; L-07C Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4597.NEC N-07C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; L-07C Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4598.Nec N04C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; N-04C Build/A1010601) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4599.Nec N04C'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; N-04C Build/A1010601) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4600.Neonode N2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; Neonode N2; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4601.Neonode N2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; Neonode N2; 176x220)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4602.NetFront Browser'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PDA; NF35WMPRO/1.0; like Gecko) NetFront/3.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4603.NetFront Browser'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (Windows; Mobile Content Viewer/1.0) NetFront/3.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4604.NetFront Browser'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (PDA; PalmOS/sony/model crdb/Revision:1.1.36(de)) NetFront/3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4605.Nexian NX G801'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-G801/MTK Release/10.1.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4606.Nexian NX G801'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-G801/MTK Release/10.1.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4607.Nexian NX G922'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-G922/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4608.Nexian NX G922'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-G922/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4609.Nexian NX T911'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-T911/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4610.Nexian NX T911'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-T911/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4611.Nexian NX T922'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-T922/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4612.Nexian NX T922'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-T922/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4613.Nexian NX250 D'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nexian-NX250 D/1.0 RTKE_OS/01.00 Dragonfly6120/1.0 TMSS-Browser/1.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4614.Nexian NX250 D'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nexian-NX250 D/1.0 RTKE_OS/01.00 Dragonfly6120/1.0 TMSS-Browser/1.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4615.Nextbook NXM901'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1-1.0.0; iw-il; NXM901 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4616.Nextbook NXM901'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1-1.0.0; iw-il; NXM901 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4617.NGM Alittle'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Alittle/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4618.NGM Alittle'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Alittle/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4619.NGM Argo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_ARGO /ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4620.NGM Argo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_ARGO /ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4621.NGM Billy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Billy/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4622.NGM Billy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Billy/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4623.NGM Clio'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Clio/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4624.NGM Clio'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Clio/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4625.NGM Enjoy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Enjoy/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4626.NGM Enjoy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Pixy/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4627.NGM Enjoy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Enjoy/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4628.NGM Enjoy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Pixy/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4629.NGM MC220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Elvis/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4630.NGM MC220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Elvis/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4631.NGM Metal Devil'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_MetalDevil/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4632.NGM Metal Devil'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_MetalDevil/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4633.NGM Mito'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Mito/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4634.NGM Mito'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Mito/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4635.NGM NGM SOAP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM SOAP WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4636.NGM NGM SOAP'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM SOAP WAP Browser' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4637.NGM Premier'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Premier/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4638.NGM Premier'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Premier/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4639.NGM Prestige'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Prestige/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4640.NGM Prestige'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Prestige/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4641.NGM Soapqwerty'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Soapqwerty/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4642.NGM Soapqwerty'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Soapqwerty/ObigoInternetBrowser/QO3C Profile' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4643.NGM Supreme'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGMSUPREME/1.0 TMSS-Browser/1.0.0 Profile/MIDP/2.0-compatible Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4644.NGM Supreme'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGMSUPREME/1.0 TMSS-Browser/1.0.0 Profile/MIDP/2.0-compatible Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4645.NGM Vanity'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanity /ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4646.NGM Vanity'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanity /ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4647.NGM Vanityqwerty'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanityqwerty/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4648.NGM Vanityqwerty'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanityqwerty/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4649.NGM Vanitytouch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanitytouch/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4650.NGM Vanitytouch'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanitytouch/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4651.Nintendo DS'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Bunjalloo/0.7.6(Nintendo DS;U;en)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4652.Nintendo DS 3rd Party Browser'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Nitro) Opera 8.50 [en Mozilla/4.0 (compatible; MSIE 6.0; Nitro) Opera 8.50 [ja]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4653.Nokia'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5233/12.1.092 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4654.Nokia'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5233/12.1.092 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4655.Nokia 1006'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-1006 UP.Browser/6.3.0.8.c.1.104 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4656.Nokia 1006'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-1006 UP.Browser/6.3.0.8.c.1.104 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4657.Nokia 1606'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-1606 UP.Browser/6.3.0.8.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4658.Nokia 1606'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-1606 UP.Browser/6.3.0.8.c.1.101 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4659.Nokia 1681c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia1681c_CMCC/2.0 (06.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4660.Nokia 1681c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia1681c_CMCC/2.0 (06.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4661.Nokia 1682c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia1682c_CMCC/2.0 (06.86) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4662.Nokia 1682c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia1682c_CMCC/2.0 (06.86) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4663.Nokia 2228'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-2228 UP.Browser/6.3.0.8.c.1.1041 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4664.Nokia 2228'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-2228 UP.Browser/6.3.0.8.c.1.1041 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4665.Nokia 2320c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2320c-2b/2.0(ATT.06.88) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4666.Nokia 2320c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2320c-2b/2.0(ATT.06.88) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4667.Nokia 2323c-2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2323c-2/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4668.Nokia 2323c-2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2323c-2/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4669.Nokia 2330 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2330c-2/1.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4670.Nokia 2330 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2330c-2/1.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4671.Nokia 2330 Classic 2B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2330c-2b/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4672.Nokia 2330 Classic 2B'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2330c-2b/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4673.Nokia 2600c-2b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2600c-2b/2.0 (06.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4674.Nokia 2600c-2b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2600c-2b/2.0 (06.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4675.Nokia 2605'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia 2605 UP.Browser/6.2.3.9.j.1.107-20081119 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4676.Nokia 2605'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia 2605 UP.Browser/6.2.3.9.j.1.107-20081119 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4677.Nokia 2630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4678.Nokia 2630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4679.Nokia 2630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630_CMCC/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4680.Nokia 2630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA2630/2.0 (05.61) PROFILE/MIDP-2.1 CONFIGURATION/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4681.Nokia 2630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630/2.0 (05.61) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4682.Nokia 2630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4683.Nokia 2630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4684.Nokia 2630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630_CMCC/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4685.Nokia 2630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA2630/2.0 (05.61) PROFILE/MIDP-2.1 CONFIGURATION/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4686.Nokia 2630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630/2.0 (05.61) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4687.Nokia 2660'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2660' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4688.Nokia 2660'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2660/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4689.Nokia 2660'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2660' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4690.Nokia 2660'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2660/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4691.Nokia 2680'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2/1.0 (04.56) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4692.Nokia 2680'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2b/1.0 (04.91) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4693.Nokia 2680'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s/1.0 (05.28) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4694.Nokia 2680'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2b/1.0 (05.28) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4695.Nokia 2680'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2/1.0 (04.56) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4696.Nokia 2680'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2b/1.0 (04.91) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4697.Nokia 2680'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s/1.0 (05.28) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4698.Nokia 2680'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2b/1.0 (05.28) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4699.Nokia 2710c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2710c-2/2.0 (06.13) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4700.Nokia 2710c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2710c-2/2.0 (06.13) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4701.Nokia 2720a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2720a-2/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4702.Nokia 2720a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2720a-2b/2.0 (08.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4703.Nokia 2720a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2720a-2/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4704.Nokia 2720a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2720a-2b/2.0 (08.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4705.Nokia 2730 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (tmy7.37) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4706.Nokia 2730 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (07.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4707.Nokia 2730 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (09.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4708.Nokia 2730 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (07.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4709.Nokia 2730 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (tmy7.37) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4710.Nokia 2730 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (07.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4711.Nokia 2730 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (09.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4712.Nokia 2730 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (07.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4713.Nokia 2760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4714.Nokia 2760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (03.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4715.Nokia 2760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (06.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4716.Nokia 2760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (05.61) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4717.Nokia 2760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4718.Nokia 2760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (03.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4719.Nokia 2760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (06.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4720.Nokia 2760'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (05.61) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4721.Nokia 3120c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (06.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4722.Nokia 3120c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (07.16) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4723.Nokia 3120c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (09.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4724.Nokia 3120c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (06.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4725.Nokia 3120c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (07.16) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4726.Nokia 3120c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (09.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4727.Nokia 3250'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia3250/1.00; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4728.Nokia 3250'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia3250/1.00; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4729.Nokia 3555b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3555b/2.0 (05.07) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4730.Nokia 3555b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3555b/2.0 (05.07) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4731.Nokia 3555c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3555c/2.0 (03.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4732.Nokia 3555c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3555c/2.0 (03.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4733.Nokia 3606'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-3606 UP.Browser/6.3.0.8.c.1.104 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4734.Nokia 3606'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-3606 UP.Browser/6.3.0.8.c.1.104 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4735.Nokia 3610a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3610a/2.0 (03.53) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4736.Nokia 3610a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3610a/2.0 (03.53) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4737.Nokia 3710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3710fold/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4738.Nokia 3710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3710fold/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4739.Nokia 3710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3710fold/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4740.Nokia 3710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3710fold/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4741.Nokia 3711'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3711fold/5.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4742.Nokia 3711'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3711fold/5.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4743.Nokia 3720 classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3720c/2.0 (08.90) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4744.Nokia 3720 classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3720c/2.0 (08.90) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4745.Nokia 5000d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2/1.0 (03.50) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4746.Nokia 5000d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2/1.0 (04.89) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4747.Nokia 5000d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2b/1.0 (05.27) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4748.Nokia 5000d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2/1.0 (03.50) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4749.Nokia 5000d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2/1.0 (04.89) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4750.Nokia 5000d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2b/1.0 (05.27) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4751.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (05.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4752.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4753.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.93) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4754.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.94) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4755.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (07.91) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4756.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40/3.0FP1; Nokia5130c-2/07.96; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/0.8.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4757.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (05.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4758.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4759.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.93) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4760.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.94) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4761.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (07.91) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4762.Nokia 5130'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40/3.0FP1; Nokia5130c-2/07.96; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/0.8.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4763.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.00) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4764.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.86) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4765.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220/2.0 (05.63) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4766.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4767.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4768.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (05.63) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4769.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (06.51) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4770.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (07.23) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4771.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40/3.0FP1; Nokia5220XpressMusic/07; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/0.8.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4772.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.00) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4773.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.86) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4774.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220/2.0 (05.63) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4775.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4776.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4777.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (05.63) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4778.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (06.51) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4779.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (07.23) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4780.Nokia 5220'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40/3.0FP1; Nokia5220XpressMusic/07; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/0.8.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4781.Nokia 5228'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5228/21.1.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4782.Nokia 5228'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5228/21.1.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4783.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.057; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4784.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.062; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4785.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.065; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4786.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.063; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4787.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/20.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4788.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/21.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4789.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-1b/10.2.071; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4790.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5230/UC Browser7.2.2.51/50/351' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4791.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230-1b/20.2.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4792.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/30.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4793.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.057; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4794.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.062; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4795.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.065; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4796.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.063; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4797.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/20.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4798.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/21.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4799.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-1b/10.2.071; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4800.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5230/UC Browser7.2.2.51/50/351' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4801.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230-1b/20.2.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4802.Nokia 5230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/30.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4803.Nokia 5230c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-c/11.2.080; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4804.Nokia 5230c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-c/12.2.082; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4805.Nokia 5230c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-1c/12.8.095; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4806.Nokia 5230c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-c/11.2.080; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4807.Nokia 5230c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-c/12.2.082; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4808.Nokia 5230c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-1c/12.8.095; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4809.Nokia 5232'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5232/CMCC (SymbianOS/9.4; Series60/5.0; Release/12.1.091; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4810.Nokia 5232'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5232/CMCC (SymbianOS/9.4; Series60/5.0; Release/21.1.004; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4811.Nokia 5232'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5232-2G/10.0.055; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4812.Nokia 5232'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5232/CMCC (SymbianOS/9.4; Series60/5.0; Release/12.1.091; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4813.Nokia 5232'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5232/CMCC (SymbianOS/9.4; Series60/5.0; Release/21.1.004; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4814.Nokia 5232'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5232-2G/10.0.055; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4815.Nokia 5233'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5233/12.1.089 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4816.Nokia 5233'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5233/21.1.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4817.Nokia 5233'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5233/12.1.089 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4818.Nokia 5233'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5233/21.1.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4819.Nokia 5235'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5235/12.6.092; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4820.Nokia 5235'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5235/12.6.092; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4821.Nokia 5238'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5238/40.9.003 (SymbianOS/9.4; U; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4822.Nokia 5238'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5238/40.9.003 (SymbianOS/9.4; U; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4823.Nokia 5250'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5250/10.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4824.Nokia 5250'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5250/10.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4825.Nokia 5310XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5310_CMCC/2.0 (07.01) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4826.Nokia 5310XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5310XpressMusic/2.0 (07.01) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4827.Nokia 5310XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5310_CMCC/2.0 (07.01) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4828.Nokia 5310XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5310XpressMusic/2.0 (07.01) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4829.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia5320d-1/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4830.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.08; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4831.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.03; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4832.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320/03.08.1 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4833.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA5320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4834.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.26; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4835.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.22; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4836.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/04.13; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4837.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320_CMCC/04.13.1 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4838.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320(19.01)/SymbianOS/9.1 Series60/3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4839.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia5320d-1/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4840.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.08; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4841.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.03; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4842.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320/03.08.1 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4843.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA5320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4844.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.26; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4845.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.22; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4846.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/04.13; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4847.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320_CMCC/04.13.1 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4848.Nokia 5320 XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320(19.01)/SymbianOS/9.1 Series60/3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4849.Nokia 5330 Mobile TV Edition'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5330-1d/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4850.Nokia 5330 Mobile TV Edition'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5330-1d/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4851.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/10.0.050; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4852.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/20.0.059; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4853.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/11.0.053; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4854.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/11.0.054; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4855.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/20.0.080; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4856.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5530c-2/30.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4857.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/10.0.050; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4858.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/20.0.059; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4859.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/11.0.053; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4860.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/11.0.054; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4861.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/20.0.080; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4862.Nokia 5530'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5530c-2/30.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4863.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2.3 Nokia5630d-1/011.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4864.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/011.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4865.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.007; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4866.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/011.022; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4867.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4868.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4869.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/013.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4870.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2.3 Nokia5630d-1/011.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4871.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/011.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4872.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.007; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4873.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/011.022; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4874.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4875.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4876.Nokia 5630'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/013.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4877.Nokia 5730'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5730s-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4878.Nokia 5730'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5730s-1/100.48.110; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4879.Nokia 5730'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.73; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4880.Nokia 5730'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.77; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.17125' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4881.Nokia 5730'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.80; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.17728' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4882.Nokia 5730'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5730s-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4883.Nokia 5730'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5730s-1/100.48.110; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4884.Nokia 5730'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.73; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4885.Nokia 5730'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.77; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.17125' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4886.Nokia 5730'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.80; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.17728' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4887.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.24; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4888.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.37; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4889.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia 5800 XpressMusic/RM-35601; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4890.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4891.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4892.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.24; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4893.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4894.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/11.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4895.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/20.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4896.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800d-1/20.0.012; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4897.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.025; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4898.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800d-1b/21.2.025; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4899.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.024; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4900.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/30.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4901.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1b/30.2.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4902.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1b/20.2.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4903.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/30.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4904.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4905.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4906.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/40.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4907.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4908.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.022; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4909.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4910.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1/50.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4911.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1b/50.2.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4912.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1/51.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4913.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.24; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4914.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.37; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4915.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia 5800 XpressMusic/RM-35601; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4916.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4917.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4918.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.24; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4919.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4920.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/11.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4921.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/20.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4922.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800d-1/20.0.012; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4923.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.025; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4924.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800d-1b/21.2.025; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4925.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.024; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4926.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/30.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4927.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1b/30.2.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4928.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1b/20.2.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4929.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/30.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4930.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4931.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4932.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/40.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4933.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4934.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.022; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4935.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4936.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1/50.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4937.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1b/50.2.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4938.Nokia 5800d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1/51.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4939.Nokia 5800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800i XpressMusic/UCWEB7.2.2.51/50/999' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4940.Nokia 5800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800i/10.3.007 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4941.Nokia 5800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800 XpressMusic/UC Browser7.2.2.51/50/352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4942.Nokia 5800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800i XpressMusic/UCWEB7.2.2.51/50/999' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4943.Nokia 5800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800i/10.3.007 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4944.Nokia 5800i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800 XpressMusic/UC Browser7.2.2.51/50/352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4945.Nokia 5800i XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800w/50.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4946.Nokia 5800i XpressMusic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800w/50.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4947.Nokia 5802'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5802_CMCC/21.0.025.6 (SymbianOS/9.4; U; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4948.Nokia 5802'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5802_CMCC/21.0.025.6 (SymbianOS/9.4; U; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4949.Nokia 6080b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6080b/2.0 (04.20) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4950.Nokia 6080b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6080b/2.0 (04.20) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4951.Nokia 6088'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6088/2.0 ACS.Browser/3.2(GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4952.Nokia 6088'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6088/2.0 ACS.Browser/3.2(GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4953.Nokia 6100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6100/1.0 (06.01) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4954.Nokia 6100'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6100/1.0 (06.01) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4955.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4956.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.51; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4957.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.58; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4958.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110/03.23' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4959.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110/3.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4960.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/4.22; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4961.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA6110' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4962.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110Navigator/2.0 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4963.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/6.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4964.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.49; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, likeGecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4965.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/5.11; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4966.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4967.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.51; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4968.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.58; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4969.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110/03.23' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4970.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110/3.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4971.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/4.22; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4972.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA6110' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4973.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110Navigator/2.0 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4974.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/6.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4975.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.49; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, likeGecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4976.Nokia 6110'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/5.11; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4977.Nokia 6120c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6120c/6.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4978.Nokia 6120c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6120c/6.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4979.Nokia 6120ci'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6120ci/7.02; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4980.Nokia 6120ci'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6120ci/7.02; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4981.Nokia 6122c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6122c_CMCC/4.31 (SymbianOS/9.2; U; Series60/3.1 Nokia6122c_CMCC/4.31; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) Mozilla/5.0 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4982.Nokia 6122c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6122c_CMCC/4.31 (SymbianOS/9.2; U; Series60/3.1 Nokia6122c_CMCC/4.31; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) Mozilla/5.0 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4983.Nokia 6124c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6124c/4.34; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4984.Nokia 6124c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6124c/4.34; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4985.Nokia 6205'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia 6205 UP.Browser/6.2.3.9.j.1.106 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4986.Nokia 6205'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia 6205 UP.Browser/6.2.3.9.j.1.106 (GUI) MMP/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4987.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4988.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4989.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (02.9)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4990.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (03.00)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4991.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.62' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4992.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.63' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4993.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.52' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4994.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.02; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4995.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia6210Navigator/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4996.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (03.01)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4997.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.25; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4998.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.08; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4999.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.09; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5000.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/04.13; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5001.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210s/03.09.2 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5002.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5003.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5004.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (02.9)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5005.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (03.00)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5006.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.62' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5007.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.63' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5008.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.52' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5009.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.02; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5010.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia6210Navigator/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5011.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (03.01)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5012.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.25; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5013.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.08; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5014.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.09; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5015.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/04.13; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5016.Nokia 6210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210s/03.09.2 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5017.Nokia 6210e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210e' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5018.Nokia 6210e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210e' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5019.Nokia 6260s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia6260s-1/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5020.Nokia 6260s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia6260s-1/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5021.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5022.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300X/2.0 (03.50) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5023.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (p) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5024.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (04.70) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5025.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (05.50) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5026.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (05.00) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5027.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (04.71) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5028.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-6300' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5029.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (07.00) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5030.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (06.60) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5031.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5032.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300X/2.0 (03.50) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5033.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (p) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5034.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (04.70) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5035.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (05.50) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5036.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (05.00) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5037.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (04.71) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5038.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-6300' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5039.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (07.00) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5040.Nokia 6300'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (06.60) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5041.Nokia 6303'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303classic/2.0 (06.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5042.Nokia 6303'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303c_CMCC/2.0 (08.55) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5043.Nokia 6303'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303classic/2.0 (06.40) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5044.Nokia 6303'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303classic/2.0 (06.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5045.Nokia 6303'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303c_CMCC/2.0 (08.55) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5046.Nokia 6303'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303classic/2.0 (06.40) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5047.Nokia 6303i Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303iclassic/5.0 (06.61) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5048.Nokia 6303i Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303iclassic/5.0 (07.10) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5049.Nokia 6303i Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303iclassic/5.0 (06.61) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5050.Nokia 6303i Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303iclassic/5.0 (07.10) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5051.Nokia 6315i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'nok6315v1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5052.Nokia 6315i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6315i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5053.Nokia 6315i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'nok6315v1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5054.Nokia 6315i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6315i' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5055.Nokia 6350'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6350/2.0(ATT.4.91) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5056.Nokia 6350'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6350/2.0(ATT.4.91) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5057.Nokia 6500c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500c/2.0 (08.30) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5058.Nokia 6500c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500c/2.0 (08.30) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5059.Nokia 6500s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5060.Nokia 6500s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (shk3.56_p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5061.Nokia 6500s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5062.Nokia 6500s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (04.81) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5063.Nokia 6500s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5064.Nokia 6500s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (shk3.56_p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5065.Nokia 6500s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5066.Nokia 6500s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (04.81) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5067.Nokia 6555c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6555c/2.0 (03.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5068.Nokia 6555c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6555c/2.0 (03.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5069.Nokia 6600f'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600f/2.0 (04.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5070.Nokia 6600f'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600f/2.0 (04.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5071.Nokia 6600f'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600f/2.0 (04.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5072.Nokia 6600f'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600f/2.0 (04.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5073.Nokia 6600i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600i-1c/2.0 (36.14) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5074.Nokia 6600i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600i-1c/2.0 (36.14) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5075.Nokia 6600s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia6600s/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5076.Nokia 6600s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (04.81) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5077.Nokia 6600s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (05.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5078.Nokia 6600s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (04.90) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5079.Nokia 6600s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (05.23) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5080.Nokia 6600s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia6600s/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5081.Nokia 6600s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (04.81) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5082.Nokia 6600s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (05.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5083.Nokia 6600s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (04.90) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5084.Nokia 6600s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (05.23) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5085.Nokia 6650d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6650d-1c/03.09; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5086.Nokia 6650d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia6650d-1bH/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5087.Nokia 6650d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6650d-1bh/ATT.3.25 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5088.Nokia 6650d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6650fold/04.18; Series60/3.2 Profile MIDP2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5089.Nokia 6650d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6650d-1c/03.09; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5090.Nokia 6650d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia6650d-1bH/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5091.Nokia 6650d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6650d-1bh/ATT.3.25 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5092.Nokia 6650d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6650fold/04.18; Series60/3.2 Profile MIDP2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5093.Nokia 6700c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6700c-1/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5094.Nokia 6700c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6700c-1/2.0 (07.60) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5095.Nokia 6700c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6700c-1/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5096.Nokia 6700c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6700c-1/2.0 (07.60) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5097.Nokia 6700s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s/031.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5098.Nokia 6700s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s/061.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5099.Nokia 6700s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s-1c/033.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5100.Nokia 6700s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s/031.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5101.Nokia 6700s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s/061.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5102.Nokia 6700s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s-1c/033.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5103.Nokia 6710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5104.Nokia 6710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/022.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5105.Nokia 6710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/022.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5106.Nokia 6710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5107.Nokia 6710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/022.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5108.Nokia 6710'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/022.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5109.Nokia 6720'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6720c-1b' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5110.Nokia 6720'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6720c/011.024 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5111.Nokia 6720'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6720c/012.008 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5112.Nokia 6720'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6720c-1b' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5113.Nokia 6720'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6720c/011.024 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5114.Nokia 6720'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6720c/012.008 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5115.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6730c-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5116.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 N6730c-1/021.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5117.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/021.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5118.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/023.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5119.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/022.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5120.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c-1/021.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5121.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6730c-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5122.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 N6730c-1/021.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5123.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/021.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5124.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/023.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5125.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/022.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5126.Nokia 6730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c-1/021.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5127.Nokia 6750 1b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6750-1b/2.0(ATT.4.89) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5128.Nokia 6750 1b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6750-1b/2.0(ATT.4.8.9) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, Like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5129.Nokia 6750 1b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6750-1b/2.0(ATT.4.89) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5130.Nokia 6750 1b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6750-1b/2.0(ATT.4.8.9) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, Like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5131.Nokia 6760s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6760s-1/03.25; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5132.Nokia 6760s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6760s-1/03.25; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5133.Nokia 6790'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6790s-1c/03.17 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5134.Nokia 6790'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6790s-1b/ATT.03.22 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5135.Nokia 6790'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6790s-1c/03.29; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5136.Nokia 6790'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6790s-1c/03.17 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5137.Nokia 6790'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6790s-1b/ATT.03.22 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5138.Nokia 6790'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6790s-1c/03.29; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5139.Nokia 7020'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7020/2.0 (05.21) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5140.Nokia 7020'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7020/2.0 (05.21) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5141.Nokia 702T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia702T_TD/021.005 (SymbianOS/3; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.22 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5142.Nokia 702T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia702T_TD/021.005 (SymbianOS/3; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.22 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5143.Nokia 7070'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7070d-2/2.0 (06.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5144.Nokia 7070'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7070_CMCC/2.0 (06.35) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5145.Nokia 7070'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7070d-2/2.0 (06.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5146.Nokia 7070'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7070_CMCC/2.0 (06.35) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5147.Nokia 7100S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s-2/1.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5148.Nokia 7100S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s-2/1.0 (fl5.02) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5149.Nokia 7100S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s/1.0 (05.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5150.Nokia 7100S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s-2/1.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5151.Nokia 7100S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s-2/1.0 (fl5.02) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5152.Nokia 7100S'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s/1.0 (05.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5153.Nokia 7210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7210Supernova/2.0 (04.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5154.Nokia 7210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7210/1.0 (4.24) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5155.Nokia 7210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7210Supernova/2.0 (04.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5156.Nokia 7210'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7210/1.0 (4.24) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5157.Nokia 7310'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7310/2.0 (07.00) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5158.Nokia 7310'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7310c/2.0 (09.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5159.Nokia 7310'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7310/2.0 (07.00) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5160.Nokia 7310'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7310c/2.0 (09.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5161.Nokia 7510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia7510Supernova/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5162.Nokia 7510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7510Supernova/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5163.Nokia 7510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia7510Supernova/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5164.Nokia 7510'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7510Supernova/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5165.Nokia 7510a-b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia7510a-b/2.0 (03.60) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5166.Nokia 7510a-b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia7510a-b/2.0 (03.60) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5167.Nokia 7610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610/2.0 (4.0421.4) SymbianOS/7.0s Series60/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5168.Nokia 7610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610/2.0 (4.0421.4) SymbianOS/7.0s Series60/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5169.Nokia 770'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_GB] Tablet browser 0.1.16 RX-34_2007SE_4.2007.38-2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5170.Nokia 770'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_GB] Tablet browser 0.1.16 RX-34_2007SE_4.2007.38-2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5171.Nokia 7705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (compatible; MSIE 6.0; Brew 3.1.5; U; en)/320x240 NOKIA 7705' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5172.Nokia 7705'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (compatible; MSIE 6.0; Brew 3.1.5; U; en)/320x240 NOKIA 7705' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5173.Nokia C1-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-01/2.0 (arc101_10w34) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5174.Nokia C1-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-01.1/2.0 (03.30) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5175.Nokia C1-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-01/2.0 (arc101_10w34) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5176.Nokia C1-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-01.1/2.0 (03.30) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5177.Nokia C1-02'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-02/2.0 (04.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5178.Nokia C1-02'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-02/2.0 (04.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5179.Nokia C2-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC2-01/5.0 (10.50) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5180.Nokia C2-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC2-01/5.0 (10.50) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5181.Nokia C3-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-00/5.0 (03.35) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5182.Nokia C3-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-00/2.0Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5183.Nokia C3-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-00/5.0 (03.35) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5184.Nokia C3-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-00/2.0Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5185.Nokia C5-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaC5-00/031.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5186.Nokia C5-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaC5-00/061.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5187.Nokia C5-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaC5-00.2/071.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.26 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5188.Nokia C5-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaC5-00/031.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5189.Nokia C5-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaC5-00/061.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5190.Nokia C5-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaC5-00.2/071.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.26 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5191.Nokia C5-03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC5-03/0.0.124; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5192.Nokia C5-03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC5-03/10.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5193.Nokia C5-03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC5-03/0.0.124; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5194.Nokia C5-03'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC5-03/10.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5195.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.2.016; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5196.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.0.021; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5197.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5198.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/11.0.029; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5199.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/20.0.036; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5200.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/20.0.037; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5201.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.2.016; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5202.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.0.021; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5203.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5204.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/11.0.029; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5205.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/20.0.036; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5206.Nokia C6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/20.0.037; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5207.Nokia C6-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5208.Nokia C6-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC6-01/012.003 (Symbian/3; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5209.Nokia C6-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01.3/012.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5210.Nokia C6-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01.3/022.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.26 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5211.Nokia C6-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5212.Nokia C6-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC6-01/012.003 (Symbian/3; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5213.Nokia C6-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01.3/012.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5214.Nokia C6-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01.3/022.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.26 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5215.Nokia C7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/011.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5216.Nokia C7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5217.Nokia C7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/012.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5218.Nokia C7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/012.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5219.Nokia C7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/020.032; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.14 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5220.Nokia C7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/011.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5221.Nokia C7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5222.Nokia C7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/012.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5223.Nokia C7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/012.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5224.Nokia C7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/020.032; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.14 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5225.Nokia E5-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE5-00/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5226.Nokia E5-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE5-00/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5227.Nokia E50'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE50-2/3.0 (07.36.0.30) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5228.Nokia E50'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE50-2/3.0 (07.36.0.30) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5229.Nokia E51'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE51-1/200.34.36; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5230.Nokia E51'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE51-1/200.34.36; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5231.Nokia E52'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE52-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5232.Nokia E52'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/021.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5233.Nokia E52'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5234.Nokia E52'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-2; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.18430' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5235.Nokia E52'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/033.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5236.Nokia E52'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE52-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5237.Nokia E52'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/021.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5238.Nokia E52'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5239.Nokia E52'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-2; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.18430' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5240.Nokia E52'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/033.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5241.Nokia E55'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE55-2/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5242.Nokia E55'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5243.Nokia E55'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/022.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5244.Nokia E55'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/022.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5245.Nokia E55'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE55-2/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5246.Nokia E55'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5247.Nokia E55'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/022.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5248.Nokia E55'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/022.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5249.Nokia E6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE6-00/021.002; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.16 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5250.Nokia E6-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE6-00/021.002; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.16 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5251.Nokia E61'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Series60/3.0 NokiaE61-1/05w38.2 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5252.Nokia E61'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Series60/3.0 NokiaE61-1/05w38.2 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5253.Nokia E61i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE61i-1/3.0 (2.0633.65.01) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5254.Nokia E61i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE61i-1/3.0 (2.0633.65.01) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5255.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.60; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5256.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.68; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5257.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.80; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5258.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.85; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5259.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1_Orange/100.21.80; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5260.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-2/100.21.68; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5261.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.110; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5262.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/200.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5263.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE63/1.0(101.21.010) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5264.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5265.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5266.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-2/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5267.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5268.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5269.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.60; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5270.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.68; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5271.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.80; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5272.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.85; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5273.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1_Orange/100.21.80; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5274.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-2/100.21.68; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5275.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.110; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5276.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/200.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5277.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE63/1.0(101.21.010) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5278.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5279.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5280.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-2/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5281.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5282.Nokia E63'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5283.Nokia E63-3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/200.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5284.Nokia E63-3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/200.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5285.Nokia E65'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5286.Nokia E65'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es65' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5287.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(SymbianOS/9.2;U;Series60/3.1NokiaE66-1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5288.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5289.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5290.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-2/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5291.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.78; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5292.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5293.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1Orange/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5294.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-2/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5295.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE66/1.0 (100.21.108) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5296.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5297.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/210.21.007; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5298.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/300.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5299.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.52; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5300.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5301.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(SymbianOS/9.2;U;Series60/3.1NokiaE66-1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5302.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5303.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5304.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-2/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5305.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.78; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5306.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5307.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1Orange/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5308.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-2/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5309.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE66/1.0 (100.21.108) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5310.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5311.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/210.21.007; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5312.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/300.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5313.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.52; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5314.Nokia E66'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5315.Nokia E7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/010.016; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5316.Nokia E7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5317.Nokia E7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/022.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.27 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5318.Nokia E7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/010.016; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5319.Nokia E7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5320.Nokia E7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/022.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.27 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5321.Nokia E70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5322.Nokia E70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-1/3.0 (06w02.0) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5323.Nokia E70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-1/3.0 (1.0610.05.06); SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5324.Nokia E70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es70' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5325.Nokia E70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-2/3.0 (2.0618.07.10) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5326.Nokia E70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5327.Nokia E70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-1/3.0 (06w02.0) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5328.Nokia E70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-1/3.0 (1.0610.05.06); SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5329.Nokia E70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es70' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5330.Nokia E70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-2/3.0 (2.0618.07.10) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5331.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/100.07.57; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5332.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5333.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71/200.21.565 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 Nokia/E71JP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5334.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5335.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE71' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5336.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1Orange/007.xx.xx; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5337.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5338.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5339.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-E71' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5340.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/200.21.85; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5341.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/210.21.006; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5342.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5343.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaE71-1/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5344.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/300.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5345.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5346.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/400.21.004; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5347.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/402.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5348.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5349.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5350.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5351.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5352.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/100.07.57; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5353.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5354.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71/200.21.565 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 Nokia/E71JP' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5355.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5356.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE71' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5357.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1Orange/007.xx.xx; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5358.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5359.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5360.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-E71' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5361.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/200.21.85; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5362.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/210.21.006; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5363.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5364.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaE71-1/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5365.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/300.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5366.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5367.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/400.21.004; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5368.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/402.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5369.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5370.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5371.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5372.Nokia E71'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5373.Nokia E71-2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-2/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5374.Nokia E71-2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-2/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5375.Nokia E71-2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-2/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5376.Nokia E71-2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-2/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5377.Nokia E71-3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5378.Nokia E71-3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5379.Nokia E71x'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE71x/ATT.03.11.1 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5380.Nokia E71x'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 NokiaE71x Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5381.Nokia E71x'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE71x/ATT.03.11.1 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5382.Nokia E71x'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 NokiaE71x Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5383.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5384.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5385.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.014.1; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5386.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5387.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5388.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5389.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.016; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5390.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5391.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5392.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5393.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.017.1; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5394.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5395.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5396.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5397.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.024; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.19424' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5398.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-2/031.023; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5399.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5400.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5401.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.014.1; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5402.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5403.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5404.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5405.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.016; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5406.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5407.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5408.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5409.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.017.1; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5410.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5411.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5412.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5413.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.024; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.19424' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5414.Nokia E72'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-2/031.023; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5415.Nokia E73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE73/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5416.Nokia E73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE73/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5417.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/008.38.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5418.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/100.48.78 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5419.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/110.48.125 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5420.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/110.48.117 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5421.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.34; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16123' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5422.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.36; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5423.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.39; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5424.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/008.38.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5425.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/100.48.78 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5426.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/110.48.125 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5427.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/110.48.117 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5428.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.34; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16123' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5429.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.36; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5430.Nokia E75-1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.39; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5431.Nokia N2220s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2220s/2.0 (09.55) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5432.Nokia N2220s'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2220s/2.0 (09.55) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5433.Nokia N2690'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2690/2.0 (09.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5434.Nokia N2690'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2690/2.0 (09.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5435.Nokia N2700 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2700c-2/2.0 (07.15) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5436.Nokia N2700 Classic'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2700c-2/2.0 (07.15) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5437.Nokia N2730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1b/2.0 (07.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5438.Nokia N2730c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1b/2.0 (07.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5439.Nokia N3600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3600slide/2.0 (04.11) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5440.Nokia N3600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3600slide/2.0 (04.11) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5441.Nokia N6208c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6208c/2.0 (04.50) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5442.Nokia N6208c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6208c/2.0 (04.52) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5443.Nokia N6208c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6208c/2.0 (04.50) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5444.Nokia N6208c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6208c/2.0 (04.52) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5445.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5446.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia N70' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5447.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5448.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/1.0526.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5449.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/2.0529.0.1/SNXXXXXXXXXXXXXXX Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5450.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.65; Nokia N70/5.0609.2.0.1; 9399) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5451.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70/ 5.0734.4.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5452.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0705.3.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5453.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0609.2.0.1; 6171) Opera 8.00 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5454.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0741.4.0.1; 9424) Opera 8.65 [' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5455.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.51; Nokia N70/2.0539.1.2; 7032) Opera 8.51 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5456.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.50; Nokia N70/5.0609.2.0.1; 7111) Opera 8.50 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5457.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0638.3.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5458.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-N70' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5459.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0638.3.0.1/SNXXXXXXXXXXXXXXX Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5460.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0819.4.0.1; 9424) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5461.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0705.3.0.1; 9399) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5462.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0609.2.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5463.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5464.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/3.0546.2.3 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5465.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9399 (Symbian OS; U) [Nokia N70/3.0546.2.3]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5466.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5467.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia N70' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5468.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5469.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/1.0526.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5470.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/2.0529.0.1/SNXXXXXXXXXXXXXXX Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5471.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.65; Nokia N70/5.0609.2.0.1; 9399) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5472.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70/ 5.0734.4.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5473.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0705.3.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5474.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0609.2.0.1; 6171) Opera 8.00 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5475.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0741.4.0.1; 9424) Opera 8.65 [' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5476.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.51; Nokia N70/2.0539.1.2; 7032) Opera 8.51 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5477.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.50; Nokia N70/5.0609.2.0.1; 7111) Opera 8.50 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5478.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0638.3.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5479.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-N70' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5480.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0638.3.0.1/SNXXXXXXXXXXXXXXX Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5481.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0819.4.0.1; 9424) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5482.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0705.3.0.1; 9399) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5483.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0609.2.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5484.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5485.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/3.0546.2.3 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5486.Nokia N70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9399 (Symbian OS; U) [Nokia N70/3.0546.2.3]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5487.Nokia N7230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7230/5.0 (05.71) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5488.Nokia N7230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7230-1c/5.0 (09.83) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5489.Nokia N7230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7230/5.0 (05.71) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5490.Nokia N7230'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7230-1c/5.0 (09.83) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5491.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5492.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [it]; NokiaN73-1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5493.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0638.0.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5494.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0638.0.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5495.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0704.1.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5496.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; ar) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5497.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [cs]; NokiaN73-1/3.0704.1.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5498.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [cs]; NokiaN73-1/4.0747.31.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5499.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [th]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5500.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; id) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5501.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [id]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5502.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; el) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5503.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [ar]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5504.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [pl]; NokiaN73-1/4.0747.31.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5505.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5506.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [it]; NokiaN73-1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5507.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0638.0.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5508.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0638.0.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5509.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0704.1.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5510.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; ar) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5511.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [cs]; NokiaN73-1/3.0704.1.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5512.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [cs]; NokiaN73-1/4.0747.31.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5513.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [th]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5514.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; id) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5515.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [id]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5516.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; el) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5517.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [ar]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5518.Nokia N73'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [pl]; NokiaN73-1/4.0747.31.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5519.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5520.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/10.0.032 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5521.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/10.0.035 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5522.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/31.0.014 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5523.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN76/CMCC SymbianOS/9.2 Series60/3.1 Release/21.1.004 Mozilla/5.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5524.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/20.0.041 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5525.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN76' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5526.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN76' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5527.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/30.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5528.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5529.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/10.0.032 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5530.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/10.0.035 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5531.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/31.0.014 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5532.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN76/CMCC SymbianOS/9.2 Series60/3.1 Release/21.1.004 Mozilla/5.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5533.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/20.0.041 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5534.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN76' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5535.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN76' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5536.Nokia N76'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/30.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5537.Nokia N7610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (04.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5538.Nokia N7610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (04.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5539.Nokia N7610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5540.Nokia N7610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (05.72) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5541.Nokia N7610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (04.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5542.Nokia N7610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (04.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5543.Nokia N7610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5544.Nokia N7610'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (05.72) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5545.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-3/10.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5546.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.045; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5547.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.034; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5548.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.046; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5549.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-3/10.046; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5550.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN79/SymbianOS/9.3 Series60/3.2 Release/10.045; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5551.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN79' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5552.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/20.174; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5553.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/11.049; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5554.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/30.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5555.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/31.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5556.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-3/10.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5557.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.045; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5558.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.034; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5559.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.046; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5560.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-3/10.046; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5561.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN79/SymbianOS/9.3 Series60/3.2 Release/10.045; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5562.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN79' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5563.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/20.174; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5564.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/11.049; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5565.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/30.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5566.Nokia N79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/31.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5567.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/010.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5568.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 Nokia N8-00/010.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5569.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5570.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5571.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5572.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/022.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.31 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5573.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/010.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5574.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 Nokia N8-00/010.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5575.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5576.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5577.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5578.Nokia N8-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/022.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.31 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5579.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5580.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/1.0552.0.7 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5581.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (3.0611.0.8) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5582.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N80/; 9712) Opera 8.65 [ru]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5583.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (4.0623.0.22) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5584.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN80' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5585.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Jataayu/jB5/5.0; Symbian Series 60; Generic; en;)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5586.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Series 60/4.0812.4.2.1; 9730) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5587.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (4.0623.0.22) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5588.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5589.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/1.0552.0.7 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5590.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (3.0611.0.8) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5591.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N80/; 9712) Opera 8.65 [ru]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5592.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (4.0623.0.22) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5593.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN80' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5594.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Jataayu/jB5/5.0; Symbian Series 60; Generic; en;)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5595.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Series 60/4.0812.4.2.1; 9730) Opera 8.65 [en]' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5596.Nokia N80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (4.0623.0.22) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5597.Nokia N800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_US] Maemo browser 0.7.6 RX-34_2007SE_2.2006.51-6' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5598.Nokia N800'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_US] Maemo browser 0.7.6 RX-34_2007SE_2.2006.51-6' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5599.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/1.00 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5600.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/11.0.045 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5601.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/10.0.026 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5602.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/10.0.053 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5603.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/1.00 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 UP.Browser/7.0.2.3.119 (GUI) MMP/2.0 Push/PO' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5604.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/10.0.032 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5605.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81/ SymbianOS/9.2 Series60/3.1 Release/10.1.039 Mozilla/5.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5606.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; [en]; Series60/3.2 NokiaN81-1/10.0.042; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5607.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81 SymbianOS/9.2 Series60/3.1 Release/10.1.028 Mozilla/5.0 Profile/MIDP-2.0 Configuration/' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5608.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/11.0.045 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5609.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIANokia N81' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5610.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/10.0.035 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5611.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-1/11.0.045 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5612.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/11.0.045 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5613.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/10.0.035 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5614.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/20.0.056' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5615.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/20.0.056 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5616.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/21.0.010 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5617.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/11.0.023 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5618.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/21.0.010 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5619.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/20.0.056 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5620.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/21.0.008 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5621.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/1.00 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5622.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/11.0.045 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5623.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/10.0.026 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5624.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/10.0.053 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5625.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/1.00 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 UP.Browser/7.0.2.3.119 (GUI) MMP/2.0 Push/PO' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5626.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/10.0.032 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5627.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81/ SymbianOS/9.2 Series60/3.1 Release/10.1.039 Mozilla/5.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5628.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; [en]; Series60/3.2 NokiaN81-1/10.0.042; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5629.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81 SymbianOS/9.2 Series60/3.1 Release/10.1.028 Mozilla/5.0 Profile/MIDP-2.0 Configuration/' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5630.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/11.0.045 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5631.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIANokia N81' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5632.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/10.0.035 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5633.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-1/11.0.045 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5634.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/11.0.045 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5635.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/10.0.035 UNTRUSTED/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5636.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/20.0.056' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5637.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/20.0.056 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5638.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/21.0.010 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5639.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/11.0.023 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5640.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/21.0.010 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5641.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/20.0.056 Profile/MIDP-2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5642.Nokia N81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/21.0.008 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5643.Nokia N810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_US] Tablet browser 0.0.14 RX-34_2007SE_4.2007.26-8' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5644.Nokia N810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-US; rv:1.9a6pre) Gecko/20071018 Firefox/3.0a1 Tablet browser 0.1.24 RX-34+RX-44_2008SE_1.2007.44-4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5645.Nokia N810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-US; rv:1.9a6pre) Gecko/20071128 Firefox/3.0a1 Tablet browser 0.2.2 RX-34+RX-44_2008SE_2.2007.51-3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5646.Nokia N810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-GB; rv:1.9a6pre) Gecko/20080606 Firefox/3.0a1 Tablet browser 0.3.7 RX-34+RX-44+RX-48_DIABLO_4.2008.23-14' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5647.Nokia N810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; es-ES; rv:1.9a6pre) Gecko/20080828 Firefox/3.0a1 Tablet browser 0.3.7 RX-34+RX-44+RX-48_DIABLO_5.2008.43-7' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5648.Nokia N810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_US] Tablet browser 0.0.14 RX-34_2007SE_4.2007.26-8' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5649.Nokia N810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-US; rv:1.9a6pre) Gecko/20071018 Firefox/3.0a1 Tablet browser 0.1.24 RX-34+RX-44_2008SE_1.2007.44-4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5650.Nokia N810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-US; rv:1.9a6pre) Gecko/20071128 Firefox/3.0a1 Tablet browser 0.2.2 RX-34+RX-44_2008SE_2.2007.51-3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5651.Nokia N810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-GB; rv:1.9a6pre) Gecko/20080606 Firefox/3.0a1 Tablet browser 0.3.7 RX-34+RX-44+RX-48_DIABLO_4.2008.23-14' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5652.Nokia N810'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; es-ES; rv:1.9a6pre) Gecko/20080828 Firefox/3.0a1 Tablet browser 0.3.7 RX-34+RX-44+RX-48_DIABLO_5.2008.43-7' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5653.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(SymbianOS/9.2; U; Series60/3.1 NokiaN82/10.0.035; Profile/MIDP-2.0 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5654.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/10.0.046; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5655.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/11.0.117; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5656.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/20.0.062; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5657.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN82/1.0 (20.1.062) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5658.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN82' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5659.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/30.0.019; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5660.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/31.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5661.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(SymbianOS/9.2; U; Series60/3.1 NokiaN82/10.0.035; Profile/MIDP-2.0 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5662.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/10.0.046; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5663.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/11.0.117; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5664.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/20.0.062; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5665.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN82/1.0 (20.1.062) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5666.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN82' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5667.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/30.0.019; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5668.Nokia N82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/31.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5669.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/10.045; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5670.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/10.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5671.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-3/11.025; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5672.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN85' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5673.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/11.047; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5674.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN85' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5675.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/20.131; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5676.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/30.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5677.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/20.174; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5678.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/11.043; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5679.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/10.045; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5680.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/10.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5681.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-3/11.025; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5682.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN85' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5683.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/11.047; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5684.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN85' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5685.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/20.131; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5686.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/30.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5687.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/20.174; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5688.Nokia N85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/11.043; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5689.Nokia N86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/10.086;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5690.Nokia N86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/11.043;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5691.Nokia N86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.011;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5692.Nokia N86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.046;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5693.Nokia N86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.067;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5694.Nokia N86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/10.086;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5695.Nokia N86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/11.043;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5696.Nokia N86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.011;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5697.Nokia N86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.046;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5698.Nokia N86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.067;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5699.Nokia N9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (MeeGo; N9) AppleWebKit/533.3 (KHTML, like Gecko) NokiaBrowser/8.5 Mobile Safari/533.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5700.Nokia N9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5701.Nokia N9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (MeeGo; N9) AppleWebKit/533.3 (KHTML, like Gecko) NokiaBrowser/8.5 Mobile Safari/533.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5702.Nokia N9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5703.Nokia N900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; fi-FI; rv:1.9.2a1pre) Gecko/20090928 Firefox/3.5 Maemo Browser 1.4.1.15 RX-51 N900' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5704.Nokia N900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2.3pre) Gecko/20100723 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5705.Nokia N900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2b6pre) Gecko/20100318 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5706.Nokia N900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; fi-FI; rv:1.9.2a1pre) Gecko/20090928 Firefox/3.5 Maemo Browser 1.4.1.15 RX-51 N900' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5707.Nokia N900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2.3pre) Gecko/20100723 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5708.Nokia N900'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2b6pre) Gecko/20100318 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5709.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN95' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5710.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbianos/9.2; U; Series60/3.1 NokiaN95/10.0.014; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5711.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5712.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/11.0.026; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5713.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/12.0.013; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5714.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5715.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5716.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.010)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5717.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/10.2.006; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5718.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/11.2.009; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5719.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/21.0.016 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5720.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.273 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 Nokia/X02NK' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5721.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/20.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5722.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 )' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5723.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/21.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5724.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/30.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5725.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN95' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5726.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-N95' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5727.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/13.0.003 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5728.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/30.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5729.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.017; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5730.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.017 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5731.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5732.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.014; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5733.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/30.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5734.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/31.0.017; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5735.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/35.0.002; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5736.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN95' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5737.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbianos/9.2; U; Series60/3.1 NokiaN95/10.0.014; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5738.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5739.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/11.0.026; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5740.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/12.0.013; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5741.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5742.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5743.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.010)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5744.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/10.2.006; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5745.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/11.2.009; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5746.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/21.0.016 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5747.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.273 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 Nokia/X02NK' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5748.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/20.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5749.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 )' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5750.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/21.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5751.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/30.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5752.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN95' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5753.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-N95' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5754.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/13.0.003 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5755.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/30.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5756.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.017; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5757.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.017 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5758.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5759.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.014; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5760.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/30.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5761.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/31.0.017; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5762.Nokia N95'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/35.0.002; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5763.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2 U; Series60/3.1 NokiaN95_8GB/10.0.007; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5764.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/10.0.021; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5765.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/15.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5766.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/11.0.026; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5767.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5768.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/20.2.005 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5769.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95_8GB/20.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5770.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/30.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5771.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian0S/9.2 U; Series60/3.1 NokiaN95_8GB/15.0.012 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko/413)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5772.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5773.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.016 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5774.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/1.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5775.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/31.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5776.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/20.2.011; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5777.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/31.2.008 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5778.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/30.0.018 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5779.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/40.0.002; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5780.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN95_8GB-3;Mozilla/5.0 SymbianOS/9.2;U; Series60/3.1 NokiaN95_8GB-3/11.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5781.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2 U; Series60/3.1 NokiaN95_8GB/10.0.007; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5782.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/10.0.021; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5783.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/15.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5784.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/11.0.026; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5785.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5786.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/20.2.005 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5787.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95_8GB/20.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5788.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/30.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5789.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian0S/9.2 U; Series60/3.1 NokiaN95_8GB/15.0.012 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko/413)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5790.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5791.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.016 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5792.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/1.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5793.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/31.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5794.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/20.2.011; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5795.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/31.2.008 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5796.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/30.0.018 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5797.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/40.0.002; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5798.Nokia N95 8GB'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN95_8GB-3;Mozilla/5.0 SymbianOS/9.2;U; Series60/3.1 NokiaN95_8GB-3/11.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5799.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5800.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN96-1/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5801.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.11; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5802.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-3/1.11; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5803.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.10; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5804.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN96/SymbianOS/9.3 Series60/3.2 Release/11.018; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5805.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN96-1/11.0 (11.101) SymbianOS/9.3 Series60/3.2 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5806.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.20; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5807.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/2.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5808.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/3.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5809.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5810.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN96-1/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5811.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.11; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5812.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-3/1.11; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5813.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.10; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5814.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN96/SymbianOS/9.3 Series60/3.2 Release/11.018; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5815.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN96-1/11.0 (11.101) SymbianOS/9.3 Series60/3.2 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5816.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.20; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5817.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/2.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5818.Nokia N96'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/3.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5819.Nokia N96-3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-3/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5820.Nokia N96-3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-3/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5821.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5822.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97-1/1001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5823.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5824.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/11.0.021; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5825.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-3/10.2.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5826.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/12.0.024; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5827.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/11.0.020; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5828.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.16988' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5829.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'N97-1/11.0.021; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5830.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.007; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5831.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/12.0.026; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5832.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5833.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5834.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5835.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-3/20.2.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5836.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97/20.1.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5837.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97-1/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5838.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/22.0.110; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5839.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/20.0.038; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5840.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0; en-GB; Nokia N97 RM-505) AppleWebKit/532.4 (KHTML, like Gecko) Qt/4.6.3 Mobile Safari/532.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5841.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5842.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97-1/1001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5843.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5844.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/11.0.021; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5845.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-3/10.2.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5846.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/12.0.024; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5847.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/11.0.020; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5848.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.16988' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5849.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'N97-1/11.0.021; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5850.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.007; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5851.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/12.0.026; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.13841' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5852.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5853.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5854.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5855.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-3/20.2.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5856.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97/20.1.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5857.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97-1/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5858.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/22.0.110; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5859.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/20.0.038; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5860.Nokia N97'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0; en-GB; Nokia N97 RM-505) AppleWebKit/532.4 (KHTML, like Gecko) Qt/4.6.3 Mobile Safari/532.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5861.Nokia N97 mini'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-5/11.2.102; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5862.Nokia N97 mini'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-5/11.2.102; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5863.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.14650' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5864.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17125' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5865.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.007; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5866.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5867.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.16988' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5868.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.010; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5869.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5870.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.013; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5871.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17125' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5872.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5873.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.14650' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5874.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17125' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5875.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.007; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5876.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5877.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.16988' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5878.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.010; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5879.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5880.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.013; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5881.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17125' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5882.Nokia N97-4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5883.Nokia N97i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN97i/21.0.045 (SymbianOS/9.4; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebkit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5884.Nokia N97i'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN97i/21.0.045 (SymbianOS/9.4; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebkit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5885.Nokia NC3-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-01/5.0 (03.35) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5886.Nokia NC3-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-01/5.0 (03.35) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5887.Nokia Softbank 705NK'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/705NK/NKJ001 Series60/3.0 NokiaN73/3.0650 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5888.Nokia Softbank 705NK'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/705NK/NKJ001 Series60/3.0 NokiaN73/3.0650 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5889.Nokia SoftBank X02NK'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/X02NK/NKJ001 Series60/3.1 NokiaN95/20.0.273 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5890.Nokia SoftBank X02NK'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/X02NK/NKJ001 Series60/3.1 NokiaN95/20.0.273 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5891.Nokia T7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaT7-00_TD/CMCC (SymbianOS/3; Release/022.011; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko)NokiaBrowser/7.3.1.35 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5892.Nokia T7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaT7-00_TD/CMCC (SymbianOS/3; Release/022.011; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko)NokiaBrowser/7.3.1.35 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5893.Nokia X2-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5894.Nokia X2-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5895.Nokia X2-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/5.0 (04.80) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5896.Nokia X2-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5897.Nokia X2-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5898.Nokia X2-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/5.0 (04.80) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5899.Nokia X2-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-01/5.0 (07.10) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420 (KHTML, like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5900.Nokia X2-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-01/5.0 (07.10) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420 (KHTML, like Gecko) Safari/420' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5901.Nokia X3-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5902.Nokia X3-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5903.Nokia X3-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/2.0 (di3.44SSC) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5904.Nokia X3-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5905.Nokia X3-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5906.Nokia X3-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/2.0 (di3.44SSC) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5907.Nokia X3-02'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-02/5.0 (05.30) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5908.Nokia X3-02'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40; NokiaX3-02/05.65; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/1.0.0.9.10' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5909.Nokia X3-02'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-02/5.0 (05.30) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5910.Nokia X3-02'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40; NokiaX3-02/05.65; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/1.0.0.9.10' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5911.Nokia X5-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX5-00/CMCC SymbianOS/9.3 Series60/3.2 Release/10.1018.28; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5912.Nokia X5-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX5-00/CMCC SymbianOS/9.3 Series60/3.2 Release/10.1018.28; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5913.Nokia X5-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaX5-01/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5914.Nokia X5-01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaX5-01/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5915.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.058; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5916.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.060; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5917.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.059; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5918.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.064; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5919.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(Symbiam OS/9.4;Series 60/5.0 NokiaX6-00/20.0.005;Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrouserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5920.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX6-00/20.0.005; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5921.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaX6-00/21.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5922.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.058; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5923.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.060; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5924.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.059; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5925.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.064; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5926.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(Symbiam OS/9.4;Series 60/5.0 NokiaX6-00/20.0.005;Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrouserNG/7.2.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5927.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX6-00/20.0.005; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5928.Nokia X6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaX6-00/21.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5929.Nokia X7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaX7-00/021.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.21 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5930.Nokia X7-00'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaX7-00/021.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.21 Mobile Safari/533.4 3gpp-gba' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5931.Novarra CTS reformatting proxy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 MG (Novarra-Vision/6.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5932.Novarra CTS reformatting proxy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 Novarra-Vision/7.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5933.Novarra CTS reformatting proxy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 MG(Novarra-Vision/7.3)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5934.Novarra CTS reformatting proxy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 MG (Novarra-Vision/6.1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5935.Novarra CTS reformatting proxy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 Novarra-Vision/7.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5936.Novarra CTS reformatting proxy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 MG(Novarra-Vision/7.3)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5937.O2 Jet'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'O2Jet' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5938.O2 Jet'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'O2Jet' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5939.O2 Xda Argon'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) Xda Argon; 240x320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5940.O2 Xda Argon'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) Xda Argon; 240x320' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5941.O2 Xda Atmos'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Atmos; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5942.O2 Xda Atmos'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Atmos; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5943.O2 Xda Atom Exec'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) O2 Xda Atom Exec' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5944.O2 Xda Atom Exec'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) O2 Xda Atom Exec' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5945.O2 XDA Comet'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) o2 Xda comet' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5946.O2 XDA Comet'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) o2 Xda comet' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5947.O2 XDA Comet'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) o2 Xda comet' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5948.O2 XDA Comet'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) o2 Xda comet' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5949.O2 Xda Cosmo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Xda cosmo; 320x240)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5950.O2 Xda Cosmo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Xda cosmo; 320x240)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5951.O2 XDA Diamond'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond Opera/9.50 (Windows NT 5.1; U; de)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5952.O2 XDA Diamond'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond Opera/9.50 (Windows NT 5.1; U; de)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5953.O2 XDA Diamond Pro'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond_pro/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5954.O2 XDA Diamond Pro'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond_pro Opera/9.50 (Windows NT 5.1; U; de)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5955.O2 XDA Diamond Pro'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond_pro/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5956.O2 XDA Diamond Pro'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond_pro Opera/9.50 (Windows NT 5.1; U; de)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5957.O2 Xda Graphite'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'XdaGraphite/1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; XdaGraphite)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5958.O2 Xda Graphite'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; O2 Graphite; Smartphone; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5959.O2 Xda Graphite'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Xda Graphite/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5960.O2 Xda Graphite'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Xda Graphite/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5961.O2 Xda Graphite'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'O2 Xda Graphite' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5962.O2 Xda Graphite'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'XdaGraphite/1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; XdaGraphite)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5963.O2 Xda Graphite'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; O2 Graphite; Smartphone; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5964.O2 Xda Graphite'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Xda Graphite/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5965.O2 Xda Graphite'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Xda Graphite/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5966.O2 Xda Graphite'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'O2 Xda Graphite' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5967.O2 XDA Ignito'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Ignito/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5968.O2 XDA Ignito'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Ignito/480x640 Opera/9.50 (Windows NT 5.1; U; en)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5969.O2 XDA Ignito'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Ignito/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5970.O2 XDA Ignito'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Ignito/480x640 Opera/9.50 (Windows NT 5.1; U; en)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5971.O2 XDA Mantle'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Mantle/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5972.O2 XDA Mantle'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Mantle/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5973.O2 Xda Nova'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_nova; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5974.O2 Xda Nova'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_nova; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5975.O2 Xda Nova'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_nova; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5976.O2 Xda Nova'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_nova; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5977.O2 Xda Orbit II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5978.O2 Xda Orbit II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5979.O2 Xda Orbit II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; SPV M3100; OpVer 12' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5980.O2 Xda Orbit II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5981.O2 Xda Orbit II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5982.O2 Xda Orbit II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5983.O2 Xda Orbit II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; SPV M3100; OpVer 12' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5984.O2 Xda Orbit II'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5985.O2 XDA Serra'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Serra/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5986.O2 XDA Serra'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Serra/480x640 Opera/9.50 (Windows NT 5.1; U; en)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5987.O2 XDA Serra'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Serra/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5988.O2 XDA Serra'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Serra/480x640 Opera/9.50 (Windows NT 5.1; U; en)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5989.O2 XDA Star'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_star; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5990.O2 XDA Star'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_star; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5991.O2 XDA Stealth'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; O2 Xda Stealth; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5992.O2 XDA Stealth'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; O2 Xda Stealth; PPC; 240x320)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5993.O2 XDA Stellar'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Stellar; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5994.O2 XDA Stellar'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Stellar; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5995.O2 XDA Stellar'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Stellar; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5996.O2 XDA Stellar'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Stellar; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5997.O2 XDA/Exec'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; Xda Exec; 640x480)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5998.O2 XDA/Exec'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC;JASJAR;640x480; PPC; Xda Exec; 640x480)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5999.O2 XDA/Exec'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; Xda Exec; 640x480)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['6000.O2 XDA/Exec'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC;JASJAR;640x480; PPC; Xda Exec; 640x480)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};

base.run_test(__filename);