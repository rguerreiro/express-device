var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {
    describe('4001.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A953/Blur_Version.3.3.0.A953.AmericaMovil.en.BR Mozilla/5.0 (Linux; U; Android 2.2; es-us; A953 Build/MILA2_U6_3.3.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4002.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MotoA953 Build/S266) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4003.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S254) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4004.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S269) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4005.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S274) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4006.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; A953Blur Build/S260) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4007.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A953/Blur_Version.3.23.0.A953.Movistar.en.01 Mozilla/5.0 (Linux; U; Android 2.2.2; es-us; A953 Build/MILA2_U6_3.23.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4008.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; he-il; MotoA953 Build/MILS2_U6_2.5.5) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4009.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; it-it; MotoA953 Build/S251) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4010.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; A953Blur Build/S254) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4011.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A953/Blur_Version.3.3.0.A953.AmericaMovil.en.BR Mozilla/5.0 (Linux; U; Android 2.2; es-us; A953 Build/MILA2_U6_3.3.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4012.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MotoA953 Build/S266) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4013.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S254) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4014.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S269) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4015.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; de-de; MotoA953 Build/S274) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4016.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; A953Blur Build/S260) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4017.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A953/Blur_Version.3.23.0.A953.Movistar.en.01 Mozilla/5.0 (Linux; U; Android 2.2.2; es-us; A953 Build/MILA2_U6_3.23.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4018.Motorola A953', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; he-il; MotoA953 Build/MILS2_U6_2.5.5) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4019.Motorola AURA', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-AURA/R6639_G_81.21.05R BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony %bv' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4020.Motorola AURA', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-Nevis/R6639_G_81.21.07R BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4021.Motorola AURA', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-AURA/R6639_G_81.21.05R BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony %bv' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4022.Motorola AURA', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-Nevis/R6639_G_81.21.07R BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4023.Motorola C290-boost', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-C290-boost Obigo/Q04C1-1.9 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4024.Motorola C290-boost', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-C290-boost Obigo/Q04C1-1.9 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4025.Motorola Calgary', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; calgary Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4026.Motorola Calgary', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; calgary) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4027.Motorola Calgary', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Devour Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4028.Motorola Calgary', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; calgary Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4029.Motorola Calgary', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; calgary) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4030.Motorola Calgary', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; Devour Build/DRC92) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4031.Motorola cdma_shadow', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; cdma_shadow) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4032.Motorola cdma_shadow', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; cdma_shadow) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4033.Motorola Droid 2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4034.Motorola Droid 2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4035.Motorola Droid 2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 480X854 motorola DROID2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4036.Motorola Droid 2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 854X480 motorola DROID2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4037.Motorola Droid 2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4038.Motorola Droid 2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4039.Motorola Droid 2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4040.Motorola Droid 2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 480X854 motorola DROID2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4041.Motorola Droid 2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 854X480 motorola DROID2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4042.Motorola Droid 2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4043.Motorola DROID PRO', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID PRO Build/S275) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4044.Motorola DROID PRO', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; DROID PRO Build/3.4.2_80_V2_87) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4045.Motorola DROID PRO', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID PRO Build/S275) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4046.Motorola DROID PRO', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; DROID PRO Build/3.4.2_80_V2_87) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4047.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4048.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROIDX Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4049.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 480X854 motorola DROIDX' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4050.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4051.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; DROIDX Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 854X480 motorola DROIDX' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4052.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; DROIDX Build/4.5.1_57_DX5-26) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4053.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4054.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROIDX Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4055.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 480X854 motorola DROIDX' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4056.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; DROIDX Build/VZW) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4057.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; DROIDX Build/VZW) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 854X480 motorola DROIDX' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4058.Motorola DroidX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; DROIDX Build/4.5.1_57_DX5-26) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4059.Motorola EM25', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.26.2008 Browser/CMCS1.0 Software/0.34I Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4060.Motorola EM25', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.12.2008 Browser/CMCS1.0 Software/0.34E Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4061.Motorola EM25', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.16.2008 Browser/CMCS1.0 Software/0.34F Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4062.Motorola EM25', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/11.01.2008 Browser/CMCS1.0 Software/0.34K Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4063.Motorola EM25', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.26.2008 Browser/CMCS1.0 Software/0.34I Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4064.Motorola EM25', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.12.2008 Browser/CMCS1.0 Software/0.34E Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4065.Motorola EM25', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/10.16.2008 Browser/CMCS1.0 Software/0.34F Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4066.Motorola EM25', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM25/1.0 Release/11.01.2008 Browser/CMCS1.0 Software/0.34K Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4067.Motorola EM28', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM28/0.0.62 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4068.Motorola EM28', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM28/0.0.66 UP.Browser/6.3.0.6.c.29 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4069.Motorola EM28', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM28/0.0.62 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4070.Motorola EM28', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM28/0.0.66 UP.Browser/6.3.0.6.c.29 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4071.Motorola EM30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM30/R6716_G_71.01.24R Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 [es-co]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4072.Motorola EM30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOROKREM30/1.0 LinuxOS/2.6.10 Release/11.16.2007 Browser/OSS1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/R6716_G_71.01.23R_A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4073.Motorola EM30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-EM30/R6716_G_71.01.02R_B BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4074.Motorola EM30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM30/R6716_G_71.01.24R Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 [es-co]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4075.Motorola EM30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOROKREM30/1.0 LinuxOS/2.6.10 Release/11.16.2007 Browser/OSS1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/R6716_G_71.01.23R_A' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4076.Motorola EM30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MOT-EM30/R6716_G_71.01.02R_B BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4077.Motorola EM325', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/07.31.2008 Browser/CMCS1.0 Software/0.240 Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4078.Motorola EM325', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/10.03.2008 Browser/CMCS1.0 Software/0.35A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4079.Motorola EM325', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0/Software/1.35D Release/11.03.2008 Browser/CMCS1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4080.Motorola EM325', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/12.20.2008 Browser/CMCS1.0 Software/1.300 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4081.Motorola EM325', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/07.31.2008 Browser/CMCS1.0 Software/0.240 Profile/MIDP-2.0 Configuretion/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4082.Motorola EM325', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/10.03.2008 Browser/CMCS1.0 Software/0.35A Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4083.Motorola EM325', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0/Software/1.35D Release/11.03.2008 Browser/CMCS1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4084.Motorola EM325', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM325/1.0 Release/12.20.2008 Browser/CMCS1.0 Software/1.300 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4085.Motorola EM326g', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM326g/1.0 Release/03.23.2009 Browser/CMCS1.0 Software/1.64F Profile/MIDP-2.0 Configuration/CLDC-1.1[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4086.Motorola EM326g', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM326g/1.0 Release/03.23.2009 Browser/CMCS1.0 Software/1.64F Profile/MIDP-2.0 Configuration/CLDC-1.1[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4087.Motorola EM330', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.62 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4088.Motorola EM330', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.61 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4089.Motorola EM330', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.63 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4090.Motorola EM330', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.62 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4091.Motorola EM330', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.61 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4092.Motorola EM330', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM330/0.0.63 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4093.Motorola EM35', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM35/R6743_G_74.10.4BROX Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4094.Motorola EM35', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM35/R6743_G_74.10.5BROX Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4095.Motorola EM35', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM35/R6743_G_74.10.4BROX Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4096.Motorola EM35', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EM35/R6743_G_74.10.5BROX Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4097.Motorola Evoke', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux ARM; en-us) AppleWebKit/525.1+(KHTML, like Gecko) Safari/525 Mobile/MotorolaEvoke' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4098.Motorola Evoke', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux ARM; en-us) AppleWebKit/525.1+(KHTML, like Gecko) Safari/525 Mobile/MotorolaEvoke' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4099.Motorola EX130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX130/1.0 REXL4/1.0 BrewMP/1.0.3 Release/6.15.2011 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1 (GUI) MMP/2.0 Push/PO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4100.Motorola EX130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX130/1.0 REXL4/1.0 BrewMP/1.0.3 Release/6.15.2011 Browser/NetFront3.5 Profile/MIDP-2.0 Configuration/CLDC-1.1 (GUI) MMP/2.0 Push/PO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4101.Motorola EX211', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-EX211/18.01 Browser/Obigo/Q03C MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4102.Motorola EX211', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-EX211/18.01 Browser/Obigo/Q03C MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4103.Motorola EX300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-EX300/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4104.Motorola EX300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-EX300/B000 Browser/NetFront/3.5 MMS/Obigo-MMS/Q05A SyncML/HW-SyncML/1.0 Java/HWJa/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Player/QTV-Player/5.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4105.Motorola i1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Motorola_i1 Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4106.Motorola i1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Opus One Build/RBE.00.00) AppleWebKit/528.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4107.Motorola i1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Motorola_i1 Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4108.Motorola i1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; Opus One Build/RBE.00.00) AppleWebKit/528.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4109.Motorola i290', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-7F/00.03 UP.Browser/7.0.2.2.c.1.109 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4110.Motorola i290', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-7F/00.03 UP.Browser/7.0.2.2.c.1.109 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4111.Motorola i576', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-8E/00.01 UP.Browser/7.0.2.2.c.1.110 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4112.Motorola i576', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-8E/00.01 UP.Browser/7.0.2.2.c.1.110 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4113.Motorola i615', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-7D/00.01 UP.Browser/7.0.2.2.c.1.108 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4114.Motorola i615', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A-7D/00.01 UP.Browser/7.0.2.2.c.1.108 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4115.Motorola ic602', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-ic602 Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4116.Motorola ic602', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-ic602 Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4117.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.42.0BR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4118.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.02.4EI MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4119.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.03.08R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4120.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.22.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4121.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1t/08.22.07R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4122.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/s/08.01.11R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4123.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.42.0BR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4124.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.02.4EI MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4125.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.03.08R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4126.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/08.22.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4127.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1t/08.22.07R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4128.Motorola K1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1/s/08.01.11R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4129.Motorola K1m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4130.Motorola K1m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m-boost Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4131.Motorola K1m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1m/1.0 UP.Browser/6.2.3.4.c.1.116 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4132.Motorola K1m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4133.Motorola K1m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1m-parrot/1.0 UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4134.Motorola K1m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4135.Motorola K1m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m-boost Obigo/Q04C1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4136.Motorola K1m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1m/1.0 UP.Browser/6.2.3.4.c.1.116 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4137.Motorola K1m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-K1m UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4138.Motorola K1m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1m-parrot/1.0 UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4139.Motorola K1v', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4140.Motorola K1v', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.22.11R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4141.Motorola K1v', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.03.08R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4142.Motorola K1v', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/AB 0C.23.57R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4143.Motorola K1v', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4144.Motorola K1v', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.22.11R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4145.Motorola K1v', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.03.08R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4146.Motorola K1v', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/AB 0C.23.57R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4147.Motorola K3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4148.Motorola K3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K3/99.13.00R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12003131) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4149.Motorola K3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOKRZRmaxxK3/99.31.04R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12153168) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4150.Motorola K3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4151.Motorola K3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K3/99.13.00R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12003131) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4152.Motorola K3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOKRZRmaxxK3/99.31.04R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12153168) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4153.Motorola KRZR K1v', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.22.07R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4154.Motorola KRZR K1v', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-K1v/08.22.07R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4155.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4156.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/01.40.02_ MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4157.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/08.B7.54R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4158.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-SLVR L7/0B.D2.2FR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4159.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT SLVR-L7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4160.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-SLVR(RED)/08.C4.37R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4161.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/NA.ACR_RB MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4162.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/00.00.00 MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4163.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4164.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/01.40.02_ MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4165.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/08.B7.54R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4166.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-SLVR L7/0B.D2.2FR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4167.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT SLVR-L7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4168.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-SLVR(RED)/08.C4.37R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4169.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/NA.ACR_RB MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4170.Motorola L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7/00.00.00 MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4171.Motorola L72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L72/08.21.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4172.Motorola L72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L72_CMCC/AAUG2189AB Release/04.17.2007 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0 Software/08.21.08R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4173.Motorola L72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L72/08.21.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4174.Motorola L72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L72_CMCC/AAUG2189AB Release/04.17.2007 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0 Software/08.21.08R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4175.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4176.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/AAUG2103AA 08.00.12R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4177.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/08.01.0AR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4178.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/SJUG2275AA 08.03.0DR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4179.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/CFWG2103AD 08.03.0DR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4180.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/CFWG2103AD 08.01.0AR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4181.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4182.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/AAUG2103AA 08.00.12R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4183.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/08.01.0AR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4184.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/SJUG2275AA 08.03.0DR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4185.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/CFWG2103AD 08.03.0DR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4186.Motorola L7e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7e/CFWG2103AD 08.01.0AR/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4187.Motorola L7i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/AAUG2103AA 08.02.06R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4188.Motorola L7i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/08.03.0DR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4189.Motorola L7i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/AAUG2103AA 08.02.06R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4190.Motorola L7i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7i/08.03.0DR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4191.Motorola L9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4192.Motorola L9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/04.2B.02_ MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4193.Motorola L9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/08.21.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4194.Motorola L9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/08.22.04R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4195.Motorola L9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4196.Motorola L9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/04.2B.02_ MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4197.Motorola L9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/08.21.09R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4198.Motorola L9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L9/08.22.04R MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4199.Motorola M990', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-M990/AB 0C.23.55R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4200.Motorola M990', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-M990/AB 0C.23.55R/10.21.2005 MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4201.Motorola MB200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB200/Blur_Version.0.10.2.MB200.T-Mobile.en.US Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4202.Motorola MB200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4203.Motorola MB200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200-demo Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4204.Motorola MB200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4205.Motorola MB200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; MB200 Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4206.Motorola MB200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB200/Blur_Version.0.10.2.MB200.T-Mobile.en.US Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4207.Motorola MB200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4208.Motorola MB200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200-demo Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4209.Motorola MB200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB200 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4210.Motorola MB200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-es; MB200 Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4211.Motorola MB300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; MB300 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4212.Motorola MB300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; MB300 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4213.Motorola MB501', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB501 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4214.Motorola MB501', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; MB501 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4215.Motorola MB502', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB502 Build/BASIL1659) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4216.Motorola MB502', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB502 Build/BASIL1659) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4217.Motorola MB508', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; MB508 Build/SAGE_U3_10.23.20) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4218.Motorola MB508', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; MB508 Build/SAGE_U3_10.23.20) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4219.Motorola MB511', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB511 Build/ERE27) AppleWebKit/525.10 +(KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4220.Motorola MB511', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-ch; MotoMB511 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4221.Motorola MB511', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB511 Build/ERE27) AppleWebKit/525.10 +(KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4222.Motorola MB511', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-ch; MotoMB511 Build/ERE27) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4223.Motorola MB520', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB520 Build/KOBE_U3_2.144.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4224.Motorola MB520', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB520 Build/KOBE_U3_2.144.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4225.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.11.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4226.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB525 Build/JORDN_U3_6.11.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4227.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.12.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4228.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.16.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4229.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB525 Build/JORDN_U3_6.19.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4230.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.17.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4231.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.18.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4232.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; MB525 Build/3.4.2-131) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4233.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB525/Blur_Version.34.4.706.MB525.TELUS.en.CA Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; MB525 Build/3.4.2-107_JDNL-6_R01) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4234.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; MB525 Build/3.4.2-155) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4235.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; MotoMB525 Build/3.4.2-159) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4236.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-gb; MotoMB525 Build/4.5.1_127) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4237.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; he-il; MB525 Build/JRDNEM_U3_2.59.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4238.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.11.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4239.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB525 Build/JORDN_U3_6.11.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4240.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.12.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4241.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.16.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4242.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; MB525 Build/JORDN_U3_6.19.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4243.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.17.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4244.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; MB525 Build/JRDNEM_U3_2.18.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4245.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; es-es; MB525 Build/3.4.2-131) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4246.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB525/Blur_Version.34.4.706.MB525.TELUS.en.CA Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; MB525 Build/3.4.2-107_JDNL-6_R01) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4247.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; MB525 Build/3.4.2-155) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4248.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; MotoMB525 Build/3.4.2-159) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4249.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-gb; MotoMB525 Build/4.5.1_127) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4250.Motorola MB525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; he-il; MB525 Build/JRDNEM_U3_2.59.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4251.Motorola MB526', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; fr-fr; MB526 Build/4.5.1_120) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4252.Motorola MB526', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; fr-fr; MB526 Build/4.5.1_120) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4253.Motorola MB611', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MB611 Build/S246) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4254.Motorola MB611', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MB611 Build/S246) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4255.Motorola MB860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; MB860 Build/Blur_Version.4.0.300.MB860.Orange.en.GB Flex/P009) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4256.Motorola MB860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; MB860 Build/Blur_Version.0.37.4.MB860.BellMobility.en.CA Flex/P025) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4257.Motorola MB860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; MB860 Build/OLYFR_U4_1.8.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4258.Motorola MB860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; MB860 Build/Blur_Version.4.1.83.MB860.ATT.en.US Flex/P013) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4259.Motorola MB860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; MB860 Build/Blur_Version.4.1.83.MB860.ATT.en.US Flex/P013) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4260.Motorola MB860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; MB860 Build/Blur_Version.4.0.300.MB860.Orange.en.GB Flex/P009) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4261.Motorola MB860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; MB860 Build/Blur_Version.0.37.4.MB860.BellMobility.en.CA Flex/P025) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4262.Motorola MB860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; MB860 Build/OLYFR_U4_1.8.3) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4263.Motorola MB860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; MB860 Build/Blur_Version.4.1.83.MB860.ATT.en.US Flex/P013) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4264.Motorola MB860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; MB860 Build/Blur_Version.4.1.83.MB860.ATT.en.US Flex/P013) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4265.Motorola ME501', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; ME501 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4266.Motorola ME501', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; ME501 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4267.Motorola ME511', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; ME511 Build/RuthGC_0.18.4) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4268.Motorola ME511', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; ME511 Build/RuthGC_0.18.4) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4269.Motorola ME525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ru-ru; ME525 Build/JDGC_0.26.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4270.Motorola ME525', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ru-ru; ME525 Build/JDGC_0.26.0) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4271.Motorola ME600', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; ME600 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4272.Motorola ME600', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; ME600 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4273.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; de-de; Milestone Build/SHOLS_U2_01.03.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4274.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; de-de; Milestone Build/SHOLS_U2_01.14.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4275.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; Milestone Build/SHOLS_U2_02.31.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4276.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; Milestone Build/SHOLS_U2_02.34.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4277.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; A854 Build/MILER_X1_00.26.1) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4278.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; xx-xx; Milestone Build/SHOLS_U2_01.03.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4279.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Milestone Build/FRG22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4280.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; Milestone Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4281.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; Milestone Build/SHOLS_U2_05.06.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4282.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; de-de; Milestone Build/SHOLS_U2_01.03.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4283.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; de-de; Milestone Build/SHOLS_U2_01.14.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4284.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; Milestone Build/SHOLS_U2_02.31.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4285.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; Milestone Build/SHOLS_U2_02.34.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4286.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; A854 Build/MILER_X1_00.26.1) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4287.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; xx-xx; Milestone Build/SHOLS_U2_01.03.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4288.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-gb; Milestone Build/FRG22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4289.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; Milestone Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4290.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; Milestone Build/SHOLS_U2_05.06.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4291.Motorola Milestone', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; fr-ca; Milestone Build/ SHOLS_U2_05.26.1) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4292.Motorola Milestone XT720', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; Milestone XT720 Build/STR_U2_01.18.2) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4293.Motorola Milestone XT720', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-gb; Milestone XT720 Build/STR_U2_01.18.2) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4294.Motorola Morrison', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; morrison) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4295.Motorola Morrison', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; morrison) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4296.MOTOROLA MOT-EX112', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX112 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4297.MOTOROLA MOT-EX112', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX112 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4298.MOTOROLA MOT-EX115', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX115 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4299.MOTOROLA MOT-EX115', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX115 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4300.MOTOROLA MOT-EX122', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX122 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4301.MOTOROLA MOT-EX122', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX122 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4302.MOTOROLA MOT-EX128', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX128 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4303.MOTOROLA MOT-EX128', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-EX128 Obigo/WAP2.0 MIDP-2.0/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4304.Motorola MOT-Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240/01.06.08R) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4305.Motorola MOT-Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/APVER Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4306.Motorola MOT-Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240/01.06.08R) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4307.Motorola MOT-Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/APVER Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4308.Motorola MOT-V176', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTV176/6.1.51[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]+UP.Browser/6.2.3.9.c.8+(GUI)+MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4309.Motorola MOT-V176', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTV176/6.1.51[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]+UP.Browser/6.2.3.9.c.8+(GUI)+MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4310.Motorola MOT-W376g', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W376g/6.1.31[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.3.0.6.c.19 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4311.Motorola MOT-W376g', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W376g/6.1.31[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.3.0.6.c.19 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4312.Motorola MOT-W377g', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W377g/6.1.31[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.3.0.6.c.19 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4313.Motorola MOT-W377g', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W377g/6.1.31[TFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX] UP.Browser/6.3.0.6.c.19 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4314.Motorola Moto MB300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB300/Blur_Version.0.0.1.motus.AmericaMovil.en.BR Mozilla/5.0 (Linux; U; Android 1.5; es-es; MB300 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4315.Motorola Moto MB300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MB300/Blur_Version.0.0.1.motus.AmericaMovil.en.BR Mozilla/5.0 (Linux; U; Android 1.5; es-es; MB300 Build/CUPCAKE) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4316.Motorola MOTOA45ECO', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A45 ECO/13.10.09R_C Release/09.24.2008 OPERA/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4317.Motorola MOTOA45ECO', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A45ECO/13.10.0DR Release/09.24.2008 OPERA/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4318.Motorola MOTOA45ECO', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A45 ECO/13.10.09R_C Release/09.24.2008 OPERA/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4319.Motorola MOTOA45ECO', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-A45ECO/13.10.0DR Release/09.24.2008 OPERA/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4320.Motorola MotoroiX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MotoroiX Build/IUS) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 480X854 motorola MotoroiX' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4321.Motorola MotoroiX', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; MotoroiX Build/IUS) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 480X854 motorola MotoroiX' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4322.Motorola MotoXT610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-XT610/Blur_Version.0.22.0.XT610.Movistar.en.01 Mozilla/5.0 (Linux; U; Android 2.2.2; es-us; XT610 Build/0.22.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4323.Motorola MotoXT610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-gb; XT610 Build/V2U_3.4.2-177) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4324.Motorola MotoXT610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-XT610/Blur_Version.0.22.0.XT610.Movistar.en.01 Mozilla/5.0 (Linux; U; Android 2.2.2; es-us; XT610 Build/0.22.0) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4325.Motorola MotoXT610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; en-gb; XT610 Build/V2U_3.4.2-177) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4326.Motorola Motus', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; motus) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4327.Motorola Motus', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; motus) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4328.Motorola MT710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; MT710 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4329.Motorola MT710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; zh-cn; MT710 Build/CUPCAKE) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4330.Motorola Q', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 Sprint:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4331.Motorola Q', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motoq2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4332.Motorola Q', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Motorola Q; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4333.Motorola Q', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 Qwest:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4334.Motorola Q', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 PLS:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4335.Motorola Q', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 Sprint:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4336.Motorola Q', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motoq2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4337.Motorola Q', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Motorola Q; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4338.Motorola Q', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 Qwest:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4339.Motorola Q', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 PLS:MotoQ (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4340.Motorola Q-UMTS', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320; MOT-Q-UMTS/01.00.60I) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4341.Motorola Q-UMTS', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9W/01.11.22I Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4342.Motorola Q-UMTS', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320; MOT-Q-UMTS/APVER) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4343.Motorola Q-UMTS', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320; MOT-Q-UMTS/01.00.60I) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4344.Motorola Q-UMTS', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9W/01.11.22I Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4345.Motorola Q-UMTS', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320; MOT-Q-UMTS/APVER) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4346.Motorola Q11', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q11/01.00.58R Software/WM6.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4347.Motorola Q11', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q11/01.00.58R Software/WM6.1 Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4348.Motorola Q9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) MOT-Q9/01.02.23R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4349.Motorola Q9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) MOT-Q9/01.04.35R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4350.Motorola Q9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motoq9m' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4351.Motorola Q9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.9) MOT-Q9/01.02.23R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4352.Motorola Q9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) MOT-Q9/01.04.35R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4353.Motorola Q9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motoq9m' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4354.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Sprint:MotoQ9c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4355.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Alltel:MotoQ9c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4356.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint:MotoQ9c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4357.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.0 Standard' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4358.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.0 Standard' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4359.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.1 Standard' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4360.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Alltel:MotoQ9c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4361.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PLS:MotoQ9c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4362.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Sprint:MotoQ9c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4363.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) Alltel:MotoQ9c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4364.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint:MotoQ9c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4365.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.0 Standard' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4366.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.0 Standard' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4367.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.1 Standard' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4368.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Alltel:MotoQ9c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4369.Motorola Q9c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) PLS:MotoQ9c' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4370.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.02.22R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4371.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/1.0 (05.02) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4372.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.04.35R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4373.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) MOT-Q9/01.07.09R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4374.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) MOT-Q9/01.09.34I' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4375.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.09.49R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4376.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.02.22R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4377.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/1.0 (05.02) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4378.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.04.35R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 320x240) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4379.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) MOT-Q9/01.07.09R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4380.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) MOT-Q9/01.09.34I' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4381.Motorola Q9H', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-Q9/01.09.49R Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; 240x320) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4382.Motorola Q9m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x240; VZW; Motorola-Q9m; Windows Mobile 6.0 Standard' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4383.Motorola Q9m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.7) 320x240; VZW; Motorola-Q9m; Windows Mobile 6.0 Standard' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4384.Motorola QA1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOQA1/A2.00.46R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003388) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [es]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4385.Motorola QA1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTOQA1/A2.00.46R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003388) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [es]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4386.Motorola QA30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-QA30/00.72 UP.Browser/7.2.7.5.546 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4387.Motorola QA30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-QA30 UP.Browser/7.2.7.5.540 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4388.Motorola QA30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RASPB/00.72 UP.Browser/7.2.7.5.598 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4389.Motorola QA30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-QA30/00.72 UP.Browser/7.2.7.5.546 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4390.Motorola QA30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-QA30 UP.Browser/7.2.7.5.540 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4391.Motorola QA30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RASPB/00.72 UP.Browser/7.2.7.5.598 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4392.Motorola RAZR V3m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-NCR_0/00.62 UP.Browser/6.2.3.4.c.1.115 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4393.Motorola RAZR V3m', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-NCR_0/00.62 UP.Browser/6.2.3.4.c.1.115 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4394.Motorola RAZR V3xxR', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3xxR' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4395.Motorola RAZR V3xxR', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3xxR/97.04.2BR BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003290) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4396.Motorola RAZR V3xxR', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3XXR_J/97.04.30R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003290) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4397.Motorola RAZR V3xxR', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3xxR' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4398.Motorola RAZR V3xxR', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3xxR/97.04.2BR BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003290) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4399.Motorola RAZR V3xxR', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-RAZRV3XXR_J/97.04.30R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 13003290) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.60 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4400.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4401.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.xx.yyP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4402.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTORAZR V8/R601_G_80.41.17R Mozilla/4.0 (compatible; MSIE 6.0 Linux; MOTORAZR V88.50) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[zh]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4403.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.42.0FRP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[yy]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4404.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTORAZRmaxxV3/98.30.80R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12093102) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [zh]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4405.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.56.13R_AP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[yy]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4406.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.53.3BR_A Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;3076) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4407.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4408.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.xx.yyP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4409.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTORAZR V8/R601_G_80.41.17R Mozilla/4.0 (compatible; MSIE 6.0 Linux; MOTORAZR V88.50) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[zh]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4410.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.42.0FRP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[yy]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4411.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTORAZRmaxxV3/98.30.80R BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 12093102) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.00 [zh]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4412.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.56.13R_AP Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;nnn) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50[yy]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4413.Motorola RAZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorazrV8/R601_G_80.53.3BR_A Mozilla/4.0 (compatible; MSIE 6.0 Linux; Motorola V8;3076) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.50' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4414.Motorola RAZRV6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTORAZR-MAXX-V6' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4415.Motorola RAZRV6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTORAZR-MAXX-V6' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4416.Motorola RIZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTORIZR-Z8/46.00.00G Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 534) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4417.Motorola RIZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTORIZR-Z8/46.00.00 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 356) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4418.Motorola RIZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTORIZR-Z8/46.00.00G Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 534) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4419.Motorola RIZR V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTORIZR-Z8/46.00.00 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 356) Opera 8.65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4420.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android Eclair; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4421.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4422.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4423.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; de-de; umts_sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4424.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4425.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4426.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android Eclair; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4427.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4428.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4429.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0; de-de; umts_sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4430.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4431.Motorola Sholes', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; sholes) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4432.Motorola Sholes Tablet', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; ko-kr; sholest) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4433.Motorola Sholes Tablet', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; ko-kr; sholest) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4434.Motorola SLVR L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4435.Motorola SLVR L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v/08.B7.54R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4436.Motorola SLVR L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v/08.B7.5DR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4437.Motorola SLVR L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4438.Motorola SLVR L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v/08.B7.54R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4439.Motorola SLVR L7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-L7v/08.B7.5DR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4440.Motorola V1075', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V1075/85.97.C6P MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4441.Motorola V1075', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V1075/85.97.C6P MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4442.Motorola V1100', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V1100/98.20.3BR BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; Synergy; 1564) Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0 Opera 8.00 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4443.Motorola V1100', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V1100/98.20.3BR BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; Synergy; 1564) Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0 Opera 8.00 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4444.Motorola V3r', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V3r/08.BD.D3R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4445.Motorola V3r', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V3r/08.BD.D3R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4446.Motorola V3re', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V3re/0E.43.0AR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4447.Motorola V3re', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V3re/0E.43.0AR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4448.Motorola V750', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V750' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4449.Motorola V750', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-CHARL/00.62 UP.Browser/6.2.3.4.c.1.124 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4450.Motorola V750', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motov750' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4451.Motorola V750', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V750' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4452.Motorola V750', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-CHARL/00.62 UP.Browser/6.2.3.4.c.1.124 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4453.Motorola V750', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motov750' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4454.Motorola V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V8' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4455.Motorola V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V8/08.B7.23R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4456.Motorola V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTORAZRV82GB_CMCC/1.0 LinuxOS/2.6.10 Release/08.30.2007 Browser/Opera8.50 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/R601_G_80.56.15R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4457.Motorola V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V8' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4458.Motorola V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V8/08.B7.23R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4459.Motorola V8', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-MOTORAZRV82GB_CMCC/1.0 LinuxOS/2.6.10 Release/08.30.2007 Browser/Opera8.50 Profile/MIDP-2.0 Configuration/CLDC-1.1 Software/R601_G_80.56.15R' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4460.Motorola V860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V860/00.72 UP.Browser/7.2.7.5.630 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4461.Motorola V860', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-V860/00.72 UP.Browser/7.2.7.5.630 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4462.Motorola V950', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-V950 Obigo/Q05A1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4463.Motorola V950', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-V950 Obigo/Q05A1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4464.Motorola VE', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-20.1_/00.62 UP.Browser/6.2.3.4.c.1.120 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4465.Motorola VE', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-20.1_/00.62 UP.Browser/6.2.3.4.c.1.120 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4466.Motorola VE 240', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE240/00.72 UP.Browser/7.2.7.5.541 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4467.Motorola VE 240', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-DBLDV/00.72 UP.Browser/7.2.7.5.599 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4468.Motorola VE 240', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE240/00.72 UP.Browser/7.2.7.5.541 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4469.Motorola VE 240', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-DBLDV/00.72 UP.Browser/7.2.7.5.599 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4470.Motorola VE20', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-VE20 Obigo/Q05A1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4471.Motorola VE20', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE20/1.0 UP.Browser/7.2.6.1.731 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4472.Motorola VE20', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-R4541/00.72 UP.Browser/7.2.6.1.841 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4473.Motorola VE20', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Motorola-VE20 Obigo/Q05A1 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4474.Motorola VE20', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE20/1.0 UP.Browser/7.2.6.1.731 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4475.Motorola VE20', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-R4541/00.72 UP.Browser/7.2.6.1.841 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4476.Motorola VE66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE66/R6743_G_74.10.86RPL Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4477.Motorola VE66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VE66/R6743_G_74.10.86RPL Mozilla/5.0 (compatible; OSS/1.0; Chameleon; Linux) MotoWebKit/417.19 (KHTML, like Gecko) BER/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/9.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4478.Motorola VU204', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VU204/00.62 UP.Browser/6.2.3.4.c.1.128 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4479.Motorola VU204', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motovu204' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4480.Motorola VU204', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VU204/00.62 UP.Browser/6.2.3.4.c.1.128 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4481.Motorola VU204', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motovu204' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4482.Motorola VU30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VU30/00.62 UP.Browser/6.2.3.4.c.1.124 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4483.Motorola VU30', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-VU30/00.62 UP.Browser/6.2.3.4.c.1.124 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4484.Motorola W213', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W213/0.0.45 UP.Browser/6.3.0.6.c.17 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4485.Motorola W213', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W213/0.0.45 UP.Browser/6.3.0.6.c.17 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4486.Motorola W231', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W231/0.0.41 UP.Browser/6.3.0.6.c.22 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4487.Motorola W231', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W231/0.0.41 UP.Browser/6.3.0.6.c.22 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4488.Motorola W233', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W233/2.0.60 UP.Browser/6.3.0.6.c.33 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4489.Motorola W233', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W233/2.0.60 UP.Browser/6.3.0.6.c.33 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4490.Motorola W377', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W377/0.0.32 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4491.Motorola W377', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W377/0.0.32 MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4492.Motorola W385', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W385/1.0 UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4493.Motorola W385', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W385/1.0 UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4494.Motorola W388', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W388/0.0.41 UP.Browser/6.3.0.6.c.24 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4495.Motorola W388', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W388/0.0.47 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4496.Motorola W388', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W388/0.0.41 UP.Browser/6.3.0.6.c.24 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4497.Motorola W388', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W388/0.0.47 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4498.Motorola W396', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W396/0.1.42 UP.Browser/6.3.0.6.c.24 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4499.Motorola W396', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W396/0.0.47 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4500.Motorola W396', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W396/0.1.42 UP.Browser/6.3.0.6.c.24 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4501.Motorola W396', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W396/0.0.47 UP.Browser/6.3.0.6.c.28 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4502.Motorola W397', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W397v/0.1.44 UP.Browser/6.3.0.6.c.27 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4503.Motorola W397', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W397v/0.1.44 UP.Browser/6.3.0.6.c.27 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4504.Motorola W450', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W450/0.1.58.K1/08.18.2008 Browser/UPB6.3 Software/13.105I' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4505.Motorola W450', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W450/0.1.58.K1/08.18.2008 Browser/UPB6.3 Software/13.105I' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4506.Motorola W6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W6/08.00.0CR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4507.Motorola W6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W6/08.00.0CR MIB/BER2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 EGE/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4508.Motorola W7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W7/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.2 (GUI) MMP/2.0 Push/PO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4509.Motorola W7', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W7/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 Browser/UP.Browser/7.2.7.2 (GUI) MMP/2.0 Push/PO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4510.Motorola W750', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorolaW750/%D Mozilla/4.0 (compatible; MSIE 6.0; Linux; Motorola W750;nnn) Profile/MIDP-%m Configuration/CLDC-1.1 Symphony' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4511.Motorola W750', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motorolaW750/%D Mozilla/4.0 (compatible; MSIE 6.0; Linux; Motorola W750;nnn) Profile/MIDP-%m Configuration/CLDC-1.1 Symphony' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4512.Motorola W760r', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTO-W760r/Mozilla/4.0 (compatible;MSIE 6.0;Linux W760r)/R63712_U_71.xx.yyI Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony 1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4513.Motorola W760r', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOTO-W760r/Mozilla/4.0 (compatible;MSIE 6.0;Linux W760r)/R63712_U_71.xx.yyI Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony 1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4514.Motorola W766', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W766/00.72 UP.Browser/7.2.7.5.606 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4515.Motorola W766', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motow766' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4516.Motorola W766', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-W766/00.72 UP.Browser/7.2.7.5.606 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4517.Motorola W766', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motow766' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4518.Motorola WX260', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX260/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4519.Motorola WX260', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX260/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4520.Motorola WX265', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX265/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4521.Motorola WX265', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX265/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4522.Motorola WX288', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX288/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4523.Motorola WX288', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX288/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4524.Motorola WX290', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX290/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4525.Motorola WX290', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX290/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4526.Motorola WX295', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX295/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4527.Motorola WX295', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX295/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4528.Motorola WX390', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX390/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4529.Motorola WX390', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX390/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4530.Motorola WX395', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX395/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4531.Motorola WX395', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mot-WX395/1.0 ObigoInternetBrowser/Q03C' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4532.Motorola WX445', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; WX445 Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 320X240 motorola WX445 240X320 motorola WX445' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4533.Motorola WX445', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; WX445 Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 240X320 motorola WX445' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4534.Motorola WX445', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; WX445 Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 320X240 motorola WX445 240X320 motorola WX445' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4535.Motorola WX445', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; WX445 Build/VZW) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 240X320 motorola WX445' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4536.Motorola X701', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; zh-cn; XT701 Build/STCU_11.04.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4537.Motorola X701', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; zh-cn; XT701 Build/STCU_11.04.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4538.Motorola Xoom', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4539.Motorola Xoom', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4540.Motorola XT300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; XT300 Build/SESLA_U3_01.24.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4541.Motorola XT300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; XT300 Build/SESLA_U3_01.33.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4542.Motorola XT300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-us; XT300 Build/SESLA_U3_01.24.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4543.Motorola XT300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-ca; XT300 Build/SESLA_U3_01.33.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4544.Motorola XT316', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-gb; XT316 Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4545.Motorola XT316', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-gb; XT316 Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4546.Motorola XT502', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; de-de; Motorola-XT502 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4547.Motorola XT502', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.6; de-de; Motorola-XT502 Build/DONUT) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4548.Motorola XT702', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; XT702 Build/SGC01260) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4549.Motorola XT702', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; XT702 Build/SGC01260) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4550.Motorola XT720', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; ko-kr; XT720 Build/STSKT_N_79.11.29R1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4551.Motorola XT720', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; ko-kr; XT720 Build/STSKT_N_79.11.29R1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4552.Motorola XT800', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; zh-cn; XT800 Build/TITA_M2_15.10.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4553.Motorola XT800', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.0.1; zh-cn; XT800 Build/TITA_M2_15.10.1) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4554.Motorola XT800W', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-; XT800W Build/TTSKT_U_80.10.24R) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4555.Motorola XT800W', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-; XT800W Build/TTSKT_U_80.10.24R) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4556.Motorola Z6W', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible;MSIE 6.0;Linux MOTOROKR Z6W-orange) MOT-Z6w/R6635_G_81.01.61R Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony 1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4557.Motorola Z6W', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible;MSIE 6.0;Linux MOTOROKR Z6W-orange) MOT-Z6w/R6635_G_81.01.61R Profile/MIDP-2.0 Configuration/CLDC-1.1 Symphony 1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4558.Motorola Zeppelin', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; zeppelin) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4559.Motorola Zeppelin', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; zeppelin) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4560.Motorola ZN200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/09.01.2008 Browser/CMCS1.0 Software/0.34D Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4561.Motorola ZN200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/09.16.2008 Browser/CMCS1.0 Software/1.000 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4562.Motorola ZN200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/10.03.2008 Browser/CMCS1.0 Software/1.040 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4563.Motorola ZN200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/09.01.2008 Browser/CMCS1.0 Software/0.34D Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4564.Motorola ZN200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/09.16.2008 Browser/CMCS1.0 Software/1.000 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4565.Motorola ZN200', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN200/1.0 Release/10.03.2008 Browser/CMCS1.0 Software/1.040 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4566.Motorola ZN300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN300/13.00.57I BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 17243415) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.65 [es]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4567.Motorola ZN300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN300/13.00.57I BER2.2 Mozilla/4.0 (compatible; MSIE 6.0; 17243415) Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera 8.65 [es]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4568.Motorola ZN4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN4/00.72 UP.Browser/7.2.7.5.540 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4569.Motorola ZN4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motozn4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4570.Motorola ZN4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MOT-ZN4/00.72 UP.Browser/7.2.7.5.540 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4571.Motorola ZN4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'motozn4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4572.MyPhone B21', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB21AM/MTK Release/V0.3 Aug-23-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4573.MyPhone B21', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB21AM/MTK Release/V0.3 Aug-23-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4574.MyPhone B22 Duo', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB22Duo/MTK Release/V0.44 Apr-01-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4575.MyPhone B22 Duo', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB22Duo/MTK Release/V0.44 Apr-01-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4576.MyPhone B23', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB23DuoAM/MTK Release/V0.1 Aug-25-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4577.MyPhone B23', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneB23DuoAM/MTK Release/V0.1 Aug-25-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4578.MyPhone MS28', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneMS28Duo/MTK Release/V7 May-04-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4579.MyPhone MS28', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneMS28Duo/MTK Release/V7 May-04-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4580.MyPhone Q21', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneQ21Duo/MTK Release/V7 Apl-01-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4581.MyPhone Q21', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneQ21Duo/MTK Release/V7 Apl-01-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4582.MyPhone Q22', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneQ22Duo/MTK Release/V1 Nov-20-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4583.MyPhone Q22', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneQ22Duo/MTK Release/V1 Nov-20-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4584.MyPhone S21', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneS21/MTK Release/V0.6 Mar-06-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4585.MyPhone S21', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneS21/MTK Release/V0.6 Mar-06-2008 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4586.MyPhone TV21', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneTV21Duo/MTK Release/V6 Jan-12-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4587.MyPhone TV21', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MyPhoneTV21Duo/MTK Release/V6 Jan-12-2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4588.NEC N-04C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; N-04C Build/A1010101) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4589.NEC N-04C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; N-04C Build/A1002001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4590.NEC N-04C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; N-04C Build/A1010101) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4591.NEC N-04C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.2; ja-jp; N-04C Build/A1002001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4592.NEC N-06C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; N-06C Build/A1000001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4593.NEC N-06C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; N-06C Build/A1001600) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4594.NEC N-06C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; N-06C Build/A1000001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4595.NEC N-06C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; N-06C Build/A1001600) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4596.NEC N-07C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; L-07C Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4597.NEC N-07C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; L-07C Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4598.Nec N04C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; N-04C Build/A1010601) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4599.Nec N04C', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; N-04C Build/A1010601) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4600.Neonode N2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; Neonode N2; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4601.Neonode N2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Smartphone; Neonode N2; 176x220)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4602.NetFront Browser', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (PDA; NF35WMPRO/1.0; like Gecko) NetFront/3.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4603.NetFront Browser', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.08 (Windows; Mobile Content Viewer/1.0) NetFront/3.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4604.NetFront Browser', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (PDA; PalmOS/sony/model crdb/Revision:1.1.36(de)) NetFront/3.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4605.Nexian NX G801', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-G801/MTK Release/10.1.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4606.Nexian NX G801', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-G801/MTK Release/10.1.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4607.Nexian NX G922', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-G922/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4608.Nexian NX G922', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-G922/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4609.Nexian NX T911', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-T911/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4610.Nexian NX T911', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-T911/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4611.Nexian NX T922', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-T922/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4612.Nexian NX T922', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NexianNX-T922/MTK Release/7.15.2009 Browser/MAUI Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4613.Nexian NX250 D', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nexian-NX250 D/1.0 RTKE_OS/01.00 Dragonfly6120/1.0 TMSS-Browser/1.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4614.Nexian NX250 D', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nexian-NX250 D/1.0 RTKE_OS/01.00 Dragonfly6120/1.0 TMSS-Browser/1.0.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4615.Nextbook NXM901', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1-1.0.0; iw-il; NXM901 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4616.Nextbook NXM901', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.1-update1-1.0.0; iw-il; NXM901 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4617.NGM Alittle', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Alittle/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4618.NGM Alittle', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Alittle/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4619.NGM Argo', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_ARGO /ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4620.NGM Argo', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_ARGO /ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4621.NGM Billy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Billy/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4622.NGM Billy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Billy/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4623.NGM Clio', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Clio/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4624.NGM Clio', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Clio/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4625.NGM Enjoy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Enjoy/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4626.NGM Enjoy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Pixy/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4627.NGM Enjoy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Enjoy/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4628.NGM Enjoy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Pixy/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4629.NGM MC220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Elvis/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4630.NGM MC220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Elvis/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4631.NGM Metal Devil', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_MetalDevil/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4632.NGM Metal Devil', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_MetalDevil/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4633.NGM Mito', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Mito/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4634.NGM Mito', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Mito/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4635.NGM NGM SOAP', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM SOAP WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4636.NGM NGM SOAP', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM SOAP WAP Browser' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4637.NGM Premier', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Premier/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4638.NGM Premier', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Premier/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4639.NGM Prestige', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Prestige/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4640.NGM Prestige', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Prestige/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4641.NGM Soapqwerty', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Soapqwerty/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4642.NGM Soapqwerty', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Soapqwerty/ObigoInternetBrowser/QO3C Profile' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4643.NGM Supreme', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGMSUPREME/1.0 TMSS-Browser/1.0.0 Profile/MIDP/2.0-compatible Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4644.NGM Supreme', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGMSUPREME/1.0 TMSS-Browser/1.0.0 Profile/MIDP/2.0-compatible Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4645.NGM Vanity', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanity /ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4646.NGM Vanity', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanity /ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4647.NGM Vanityqwerty', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanityqwerty/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4648.NGM Vanityqwerty', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanityqwerty/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4649.NGM Vanitytouch', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanitytouch/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4650.NGM Vanitytouch', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NGM_Vanitytouch/ObigoInternetBrowser/QO3C Profile/MIDP2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4651.Nintendo DS', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bunjalloo/0.7.6(Nintendo DS;U;en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4652.Nintendo DS 3rd Party Browser', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Nitro) Opera 8.50 [en Mozilla/4.0 (compatible; MSIE 6.0; Nitro) Opera 8.50 [ja]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4653.Nokia', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5233/12.1.092 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4654.Nokia', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5233/12.1.092 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4655.Nokia 1006', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-1006 UP.Browser/6.3.0.8.c.1.104 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4656.Nokia 1006', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-1006 UP.Browser/6.3.0.8.c.1.104 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4657.Nokia 1606', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-1606 UP.Browser/6.3.0.8.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4658.Nokia 1606', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-1606 UP.Browser/6.3.0.8.c.1.101 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4659.Nokia 1681c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia1681c_CMCC/2.0 (06.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4660.Nokia 1681c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia1681c_CMCC/2.0 (06.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4661.Nokia 1682c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia1682c_CMCC/2.0 (06.86) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4662.Nokia 1682c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia1682c_CMCC/2.0 (06.86) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4663.Nokia 2228', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-2228 UP.Browser/6.3.0.8.c.1.1041 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4664.Nokia 2228', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-2228 UP.Browser/6.3.0.8.c.1.1041 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4665.Nokia 2320c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2320c-2b/2.0(ATT.06.88) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4666.Nokia 2320c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2320c-2b/2.0(ATT.06.88) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4667.Nokia 2323c-2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2323c-2/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4668.Nokia 2323c-2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2323c-2/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4669.Nokia 2330 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2330c-2/1.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4670.Nokia 2330 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2330c-2/1.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4671.Nokia 2330 Classic 2B', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2330c-2b/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4672.Nokia 2330 Classic 2B', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2330c-2b/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4673.Nokia 2600c-2b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2600c-2b/2.0 (06.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4674.Nokia 2600c-2b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2600c-2b/2.0 (06.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4675.Nokia 2605', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia 2605 UP.Browser/6.2.3.9.j.1.107-20081119 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4676.Nokia 2605', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia 2605 UP.Browser/6.2.3.9.j.1.107-20081119 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4677.Nokia 2630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4678.Nokia 2630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4679.Nokia 2630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630_CMCC/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4680.Nokia 2630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA2630/2.0 (05.61) PROFILE/MIDP-2.1 CONFIGURATION/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4681.Nokia 2630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630/2.0 (05.61) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4682.Nokia 2630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4683.Nokia 2630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4684.Nokia 2630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630_CMCC/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4685.Nokia 2630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA2630/2.0 (05.61) PROFILE/MIDP-2.1 CONFIGURATION/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4686.Nokia 2630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2630/2.0 (05.61) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4687.Nokia 2660', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2660' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4688.Nokia 2660', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2660/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4689.Nokia 2660', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2660' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4690.Nokia 2660', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2660/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4691.Nokia 2680', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2/1.0 (04.56) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4692.Nokia 2680', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2b/1.0 (04.91) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4693.Nokia 2680', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s/1.0 (05.28) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4694.Nokia 2680', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2b/1.0 (05.28) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4695.Nokia 2680', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2/1.0 (04.56) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4696.Nokia 2680', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2b/1.0 (04.91) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4697.Nokia 2680', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s/1.0 (05.28) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4698.Nokia 2680', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2680s-2b/1.0 (05.28) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4699.Nokia 2710c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2710c-2/2.0 (06.13) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4700.Nokia 2710c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2710c-2/2.0 (06.13) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4701.Nokia 2720a', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2720a-2/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4702.Nokia 2720a', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2720a-2b/2.0 (08.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4703.Nokia 2720a', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2720a-2/1.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4704.Nokia 2720a', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2720a-2b/2.0 (08.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4705.Nokia 2730 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (tmy7.37) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4706.Nokia 2730 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (07.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4707.Nokia 2730 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (09.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4708.Nokia 2730 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (07.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4709.Nokia 2730 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (tmy7.37) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4710.Nokia 2730 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (07.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4711.Nokia 2730 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (09.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4712.Nokia 2730 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1/2.0 (07.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4713.Nokia 2760', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4714.Nokia 2760', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (03.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4715.Nokia 2760', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (06.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4716.Nokia 2760', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (05.61) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4717.Nokia 2760', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4718.Nokia 2760', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (03.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4719.Nokia 2760', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (06.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4720.Nokia 2760', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2760/2.0 (05.61) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4721.Nokia 3120c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (06.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4722.Nokia 3120c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (07.16) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4723.Nokia 3120c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (09.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4724.Nokia 3120c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (06.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4725.Nokia 3120c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (07.16) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4726.Nokia 3120c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3120classic/2.0 (09.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4727.Nokia 3250', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia3250/1.00; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4728.Nokia 3250', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia3250/1.00; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4729.Nokia 3555b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3555b/2.0 (05.07) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4730.Nokia 3555b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3555b/2.0 (05.07) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4731.Nokia 3555c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3555c/2.0 (03.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4732.Nokia 3555c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3555c/2.0 (03.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4733.Nokia 3606', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-3606 UP.Browser/6.3.0.8.c.1.104 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4734.Nokia 3606', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-3606 UP.Browser/6.3.0.8.c.1.104 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4735.Nokia 3610a', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3610a/2.0 (03.53) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4736.Nokia 3610a', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3610a/2.0 (03.53) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4737.Nokia 3710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3710fold/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4738.Nokia 3710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3710fold/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4739.Nokia 3710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3710fold/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4740.Nokia 3710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3710fold/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4741.Nokia 3711', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3711fold/5.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4742.Nokia 3711', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3711fold/5.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4743.Nokia 3720 classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3720c/2.0 (08.90) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4744.Nokia 3720 classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3720c/2.0 (08.90) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4745.Nokia 5000d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2/1.0 (03.50) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4746.Nokia 5000d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2/1.0 (04.89) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4747.Nokia 5000d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2b/1.0 (05.27) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4748.Nokia 5000d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2/1.0 (03.50) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4749.Nokia 5000d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2/1.0 (04.89) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4750.Nokia 5000d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5000d-2b/1.0 (05.27) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4751.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (05.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4752.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4753.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.93) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4754.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.94) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4755.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (07.91) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4756.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40/3.0FP1; Nokia5130c-2/07.96; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/0.8.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4757.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (05.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4758.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4759.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.93) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4760.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (06.94) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4761.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5130c-2/2.0 (07.91) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4762.Nokia 5130', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40/3.0FP1; Nokia5130c-2/07.96; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/0.8.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4763.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.00) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4764.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.86) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4765.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220/2.0 (05.63) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4766.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4767.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4768.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (05.63) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4769.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (06.51) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4770.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (07.23) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4771.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40/3.0FP1; Nokia5220XpressMusic/07; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/0.8.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4772.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.00) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4773.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.86) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4774.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220/2.0 (05.63) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4775.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (04.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4776.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4777.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (05.63) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4778.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (06.51) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4779.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5220XpressMusic/2.0 (07.23) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4780.Nokia 5220', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40/3.0FP1; Nokia5220XpressMusic/07; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/0.8.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4781.Nokia 5228', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5228/21.1.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4782.Nokia 5228', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5228/21.1.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4783.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.057; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4784.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.062; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4785.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.065; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4786.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.063; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4787.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/20.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4788.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/21.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4789.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-1b/10.2.071; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4790.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5230/UC Browser7.2.2.51/50/351' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4791.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230-1b/20.2.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4792.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/30.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4793.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.057; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4794.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.062; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4795.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.065; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4796.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230/10.0.063; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4797.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/20.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4798.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/21.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4799.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-1b/10.2.071; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4800.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5230/UC Browser7.2.2.51/50/351' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4801.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230-1b/20.2.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4802.Nokia 5230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5230/30.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4803.Nokia 5230c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-c/11.2.080; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4804.Nokia 5230c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-c/12.2.082; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4805.Nokia 5230c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-1c/12.8.095; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4806.Nokia 5230c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-c/11.2.080; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4807.Nokia 5230c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-c/12.2.082; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4808.Nokia 5230c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5230-1c/12.8.095; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4809.Nokia 5232', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5232/CMCC (SymbianOS/9.4; Series60/5.0; Release/12.1.091; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4810.Nokia 5232', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5232/CMCC (SymbianOS/9.4; Series60/5.0; Release/21.1.004; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4811.Nokia 5232', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5232-2G/10.0.055; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4812.Nokia 5232', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5232/CMCC (SymbianOS/9.4; Series60/5.0; Release/12.1.091; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4813.Nokia 5232', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5232/CMCC (SymbianOS/9.4; Series60/5.0; Release/21.1.004; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4814.Nokia 5232', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5232-2G/10.0.055; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4815.Nokia 5233', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5233/12.1.089 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4816.Nokia 5233', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5233/21.1.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4817.Nokia 5233', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5233/12.1.089 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4818.Nokia 5233', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5233/21.1.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4819.Nokia 5235', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5235/12.6.092; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4820.Nokia 5235', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5235/12.6.092; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4821.Nokia 5238', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5238/40.9.003 (SymbianOS/9.4; U; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4822.Nokia 5238', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5238/40.9.003 (SymbianOS/9.4; U; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4823.Nokia 5250', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5250/10.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4824.Nokia 5250', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5250/10.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4825.Nokia 5310XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5310_CMCC/2.0 (07.01) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4826.Nokia 5310XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5310XpressMusic/2.0 (07.01) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4827.Nokia 5310XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5310_CMCC/2.0 (07.01) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4828.Nokia 5310XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5310XpressMusic/2.0 (07.01) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4829.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia5320d-1/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4830.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.08; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4831.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.03; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4832.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320/03.08.1 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4833.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA5320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4834.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.26; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4835.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.22; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4836.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/04.13; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4837.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320_CMCC/04.13.1 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4838.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320(19.01)/SymbianOS/9.1 Series60/3.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4839.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia5320d-1/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4840.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.08; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4841.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.03; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4842.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320/03.08.1 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4843.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA5320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4844.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.26; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4845.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/03.22; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4846.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5320d-1/04.13; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4847.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320_CMCC/04.13.1 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4848.Nokia 5320 XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5320(19.01)/SymbianOS/9.1 Series60/3.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4849.Nokia 5330 Mobile TV Edition', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5330-1d/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4850.Nokia 5330 Mobile TV Edition', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5330-1d/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4851.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/10.0.050; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4852.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/20.0.059; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4853.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/11.0.053; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4854.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/11.0.054; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4855.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/20.0.080; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4856.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5530c-2/30.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4857.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/10.0.050; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4858.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/20.0.059; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4859.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/11.0.053; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4860.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/11.0.054; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4861.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5530c-2/20.0.080; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4862.Nokia 5530', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5530c-2/30.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4863.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2.3 Nokia5630d-1/011.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4864.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/011.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4865.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.007; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4866.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/011.022; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4867.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4868.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4869.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/013.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4870.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2.3 Nokia5630d-1/011.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4871.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/011.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4872.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.007; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4873.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/011.022; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4874.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4875.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/012.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4876.Nokia 5630', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5630d-1/013.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4877.Nokia 5730', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5730s-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4878.Nokia 5730', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5730s-1/100.48.110; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4879.Nokia 5730', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.73; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4880.Nokia 5730', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.77; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.17125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4881.Nokia 5730', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.80; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.17728' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4882.Nokia 5730', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5730s-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4883.Nokia 5730', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia5730s-1/100.48.110; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4884.Nokia 5730', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.73; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4885.Nokia 5730', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.77; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.17125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4886.Nokia 5730', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia5730s-1/200.12.80; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.17728' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4887.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.24; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4888.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.37; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4889.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia 5800 XpressMusic/RM-35601; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4890.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4891.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4892.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.24; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4893.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4894.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/11.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4895.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/20.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4896.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800d-1/20.0.012; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4897.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.025; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4898.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800d-1b/21.2.025; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4899.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.024; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4900.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/30.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4901.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1b/30.2.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4902.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1b/20.2.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4903.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/30.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4904.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4905.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4906.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/40.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4907.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4908.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.022; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4909.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4910.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1/50.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4911.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1b/50.2.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4912.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1/51.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4913.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.24; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4914.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.37; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4915.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia 5800 XpressMusic/RM-35601; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4916.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4917.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4918.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/52.50.2008.24; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4919.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/10.0.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4920.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/11.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4921.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/20.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4922.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800d-1/20.0.012; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4923.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.025; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4924.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800d-1b/21.2.025; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4925.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.024; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4926.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/30.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4927.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1b/30.2.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4928.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1b/20.2.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4929.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/30.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4930.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4931.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4932.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/40.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4933.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/31.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4934.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.022; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4935.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4936.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1/50.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4937.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1b/50.2.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4938.Nokia 5800d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1/51.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4939.Nokia 5800i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800i XpressMusic/UCWEB7.2.2.51/50/999' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4940.Nokia 5800i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800i/10.3.007 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4941.Nokia 5800i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800 XpressMusic/UC Browser7.2.2.51/50/352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4942.Nokia 5800i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800i XpressMusic/UCWEB7.2.2.51/50/999' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4943.Nokia 5800i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800i/10.3.007 (SymbianOS/9.4; U; Series60/5.0; Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4944.Nokia 5800i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5800 XpressMusic/UC Browser7.2.2.51/50/352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4945.Nokia 5800i XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800w/50.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4946.Nokia 5800i XpressMusic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800w/50.0.005; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4947.Nokia 5802', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5802_CMCC/21.0.025.6 (SymbianOS/9.4; U; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4948.Nokia 5802', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia5802_CMCC/21.0.025.6 (SymbianOS/9.4; U; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4949.Nokia 6080b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6080b/2.0 (04.20) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4950.Nokia 6080b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6080b/2.0 (04.20) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4951.Nokia 6088', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6088/2.0 ACS.Browser/3.2(GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4952.Nokia 6088', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6088/2.0 ACS.Browser/3.2(GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4953.Nokia 6100', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6100/1.0 (06.01) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4954.Nokia 6100', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6100/1.0 (06.01) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4955.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4956.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.51; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4957.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.58; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4958.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110/03.23' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4959.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110/3.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4960.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/4.22; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4961.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA6110' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4962.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110Navigator/2.0 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4963.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/6.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4964.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.49; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, likeGecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4965.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/5.11; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4966.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4967.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.51; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4968.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.58; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4969.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110/03.23' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4970.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110/3.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4971.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/4.22; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4972.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIA6110' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4973.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6110Navigator/2.0 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4974.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/6.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4975.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/3.49; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, likeGecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4976.Nokia 6110', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6110Navigator/5.11; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4977.Nokia 6120c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6120c/6.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4978.Nokia 6120c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6120c/6.01; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4979.Nokia 6120ci', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6120ci/7.02; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4980.Nokia 6120ci', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6120ci/7.02; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4981.Nokia 6122c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6122c_CMCC/4.31 (SymbianOS/9.2; U; Series60/3.1 Nokia6122c_CMCC/4.31; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) Mozilla/5.0 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4982.Nokia 6122c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6122c_CMCC/4.31 (SymbianOS/9.2; U; Series60/3.1 Nokia6122c_CMCC/4.31; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) Mozilla/5.0 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4983.Nokia 6124c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6124c/4.34; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4984.Nokia 6124c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6124c/4.34; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4985.Nokia 6205', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia 6205 UP.Browser/6.2.3.9.j.1.106 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4986.Nokia 6205', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia 6205 UP.Browser/6.2.3.9.j.1.106 (GUI) MMP/2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4987.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4988.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4989.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (02.9)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4990.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (03.00)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4991.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.62' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4992.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.63' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4993.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.52' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4994.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.02; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4995.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia6210Navigator/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4996.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (03.01)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4997.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.25; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4998.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.08; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('4999.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.09; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5000.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/04.13; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5001.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210s/03.09.2 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5002.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5003.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5004.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (02.9)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5005.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (03.00)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5006.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.62' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5007.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.63' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5008.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'YourWap Nokia 6210/2.52' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5009.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.02; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5010.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia6210Navigator/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5011.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210/1.0 (03.01)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5012.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.25; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5013.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.08; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5014.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/03.09; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5015.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6210Navigator/04.13; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5016.Nokia 6210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210s/03.09.2 (SymbianOS/9.3; U; Series60/3.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5017.Nokia 6210e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210e' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5018.Nokia 6210e', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6210e' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5019.Nokia 6260s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia6260s-1/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5020.Nokia 6260s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia6260s-1/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5021.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5022.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300X/2.0 (03.50) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5023.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (p) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5024.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (04.70) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5025.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (05.50) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5026.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (05.00) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5027.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (04.71) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5028.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-6300' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5029.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (07.00) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5030.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (06.60) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5031.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5032.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300X/2.0 (03.50) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5033.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (p) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5034.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (04.70) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5035.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (05.50) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5036.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (05.00) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5037.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (04.71) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5038.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-6300' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5039.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (07.00) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5040.Nokia 6300', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6300/2.0 (06.60) Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5041.Nokia 6303', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303classic/2.0 (06.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5042.Nokia 6303', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303c_CMCC/2.0 (08.55) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5043.Nokia 6303', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303classic/2.0 (06.40) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5044.Nokia 6303', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303classic/2.0 (06.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5045.Nokia 6303', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303c_CMCC/2.0 (08.55) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5046.Nokia 6303', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303classic/2.0 (06.40) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5047.Nokia 6303i Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303iclassic/5.0 (06.61) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5048.Nokia 6303i Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303iclassic/5.0 (07.10) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5049.Nokia 6303i Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303iclassic/5.0 (06.61) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5050.Nokia 6303i Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6303iclassic/5.0 (07.10) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5051.Nokia 6315i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'nok6315v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5052.Nokia 6315i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6315i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5053.Nokia 6315i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'nok6315v1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5054.Nokia 6315i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6315i' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5055.Nokia 6350', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6350/2.0(ATT.4.91) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5056.Nokia 6350', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6350/2.0(ATT.4.91) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5057.Nokia 6500c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500c/2.0 (08.30) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5058.Nokia 6500c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500c/2.0 (08.30) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5059.Nokia 6500s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5060.Nokia 6500s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (shk3.56_p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5061.Nokia 6500s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5062.Nokia 6500s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (04.81) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5063.Nokia 6500s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5064.Nokia 6500s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (shk3.56_p) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5065.Nokia 6500s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5066.Nokia 6500s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6500s-1/2.0 (04.81) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5067.Nokia 6555c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6555c/2.0 (03.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5068.Nokia 6555c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6555c/2.0 (03.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5069.Nokia 6600f', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600f/2.0 (04.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5070.Nokia 6600f', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600f/2.0 (04.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5071.Nokia 6600f', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600f/2.0 (04.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5072.Nokia 6600f', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600f/2.0 (04.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5073.Nokia 6600i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600i-1c/2.0 (36.14) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5074.Nokia 6600i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600i-1c/2.0 (36.14) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5075.Nokia 6600s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia6600s/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5076.Nokia 6600s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (04.81) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5077.Nokia 6600s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (05.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5078.Nokia 6600s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (04.90) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5079.Nokia 6600s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (05.23) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5080.Nokia 6600s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia6600s/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5081.Nokia 6600s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (04.81) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5082.Nokia 6600s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (05.60) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5083.Nokia 6600s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (04.90) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5084.Nokia 6600s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6600s/2.0 (05.23) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5085.Nokia 6650d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6650d-1c/03.09; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5086.Nokia 6650d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia6650d-1bH/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5087.Nokia 6650d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6650d-1bh/ATT.3.25 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5088.Nokia 6650d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6650fold/04.18; Series60/3.2 Profile MIDP2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5089.Nokia 6650d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6650d-1c/03.09; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5090.Nokia 6650d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 Nokia6650d-1bH/1.00 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5091.Nokia 6650d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6650d-1bh/ATT.3.25 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5092.Nokia 6650d', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6650fold/04.18; Series60/3.2 Profile MIDP2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5093.Nokia 6700c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6700c-1/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5094.Nokia 6700c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6700c-1/2.0 (07.60) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5095.Nokia 6700c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6700c-1/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5096.Nokia 6700c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6700c-1/2.0 (07.60) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5097.Nokia 6700s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s/031.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5098.Nokia 6700s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s/061.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5099.Nokia 6700s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s-1c/033.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5100.Nokia 6700s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s/031.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5101.Nokia 6700s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s/061.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5102.Nokia 6700s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6700s-1c/033.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5103.Nokia 6710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5104.Nokia 6710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/022.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5105.Nokia 6710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/022.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5106.Nokia 6710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5107.Nokia 6710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/022.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5108.Nokia 6710', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6710s/022.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5109.Nokia 6720', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6720c-1b' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5110.Nokia 6720', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6720c/011.024 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5111.Nokia 6720', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6720c/012.008 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5112.Nokia 6720', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6720c-1b' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5113.Nokia 6720', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6720c/011.024 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5114.Nokia 6720', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6720c/012.008 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5115.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6730c-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5116.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 N6730c-1/021.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5117.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/021.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5118.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/023.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5119.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/022.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5120.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c-1/021.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5121.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6730c-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5122.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 N6730c-1/021.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5123.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/021.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5124.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/023.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5125.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c/022.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5126.Nokia 6730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 Nokia6730c-1/021.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5127.Nokia 6750 1b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6750-1b/2.0(ATT.4.89) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5128.Nokia 6750 1b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6750-1b/2.0(ATT.4.8.9) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, Like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5129.Nokia 6750 1b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6750-1b/2.0(ATT.4.89) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5130.Nokia 6750 1b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6750-1b/2.0(ATT.4.8.9) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, Like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5131.Nokia 6760s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6760s-1/03.25; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5132.Nokia 6760s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6760s-1/03.25; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5133.Nokia 6790', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6790s-1c/03.17 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5134.Nokia 6790', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6790s-1b/ATT.03.22 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5135.Nokia 6790', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6790s-1c/03.29; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5136.Nokia 6790', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6790s-1c/03.17 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5137.Nokia 6790', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6790s-1b/ATT.03.22 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5138.Nokia 6790', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 Nokia6790s-1c/03.29; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5139.Nokia 7020', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7020/2.0 (05.21) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5140.Nokia 7020', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7020/2.0 (05.21) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5141.Nokia 702T', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia702T_TD/021.005 (SymbianOS/3; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.22 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5142.Nokia 702T', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia702T_TD/021.005 (SymbianOS/3; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.22 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5143.Nokia 7070', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7070d-2/2.0 (06.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5144.Nokia 7070', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7070_CMCC/2.0 (06.35) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5145.Nokia 7070', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7070d-2/2.0 (06.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5146.Nokia 7070', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7070_CMCC/2.0 (06.35) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5147.Nokia 7100S', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s-2/1.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5148.Nokia 7100S', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s-2/1.0 (fl5.02) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5149.Nokia 7100S', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s/1.0 (05.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5150.Nokia 7100S', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s-2/1.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5151.Nokia 7100S', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s-2/1.0 (fl5.02) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5152.Nokia 7100S', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7100s/1.0 (05.41) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5153.Nokia 7210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7210Supernova/2.0 (04.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5154.Nokia 7210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7210/1.0 (4.24) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5155.Nokia 7210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7210Supernova/2.0 (04.62) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5156.Nokia 7210', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7210/1.0 (4.24) Profile/MIDP-1.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5157.Nokia 7310', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7310/2.0 (07.00) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5158.Nokia 7310', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7310c/2.0 (09.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5159.Nokia 7310', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7310/2.0 (07.00) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5160.Nokia 7310', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7310c/2.0 (09.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5161.Nokia 7510', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia7510Supernova/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5162.Nokia 7510', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7510Supernova/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5163.Nokia 7510', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia7510Supernova/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5164.Nokia 7510', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7510Supernova/2.0 (03.80) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5165.Nokia 7510a-b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia7510a-b/2.0 (03.60) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5166.Nokia 7510a-b', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 ( Nokia7510a-b/2.0 (03.60) Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5167.Nokia 7610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610/2.0 (4.0421.4) SymbianOS/7.0s Series60/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5168.Nokia 7610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610/2.0 (4.0421.4) SymbianOS/7.0s Series60/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5169.Nokia 770', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_GB] Tablet browser 0.1.16 RX-34_2007SE_4.2007.38-2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5170.Nokia 770', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_GB] Tablet browser 0.1.16 RX-34_2007SE_4.2007.38-2' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5171.Nokia 7705', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (compatible; MSIE 6.0; Brew 3.1.5; U; en)/320x240 NOKIA 7705' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5172.Nokia 7705', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.1 (compatible; MSIE 6.0; Brew 3.1.5; U; en)/320x240 NOKIA 7705' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5173.Nokia C1-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-01/2.0 (arc101_10w34) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5174.Nokia C1-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-01.1/2.0 (03.30) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5175.Nokia C1-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-01/2.0 (arc101_10w34) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5176.Nokia C1-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-01.1/2.0 (03.30) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5177.Nokia C1-02', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-02/2.0 (04.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5178.Nokia C1-02', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC1-02/2.0 (04.40) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5179.Nokia C2-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC2-01/5.0 (10.50) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5180.Nokia C2-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC2-01/5.0 (10.50) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5181.Nokia C3-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-00/5.0 (03.35) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5182.Nokia C3-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-00/2.0Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5183.Nokia C3-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-00/5.0 (03.35) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5184.Nokia C3-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-00/2.0Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5185.Nokia C5-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaC5-00/031.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5186.Nokia C5-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaC5-00/061.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5187.Nokia C5-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaC5-00.2/071.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.26 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5188.Nokia C5-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaC5-00/031.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5189.Nokia C5-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaC5-00/061.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5190.Nokia C5-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaC5-00.2/071.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.26 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5191.Nokia C5-03', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC5-03/0.0.124; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5192.Nokia C5-03', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC5-03/10.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5193.Nokia C5-03', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC5-03/0.0.124; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5194.Nokia C5-03', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC5-03/10.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5195.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.2.016; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5196.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.0.021; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5197.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5198.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/11.0.029; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5199.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/20.0.036; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5200.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/20.0.037; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5201.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.2.016; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5202.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.0.021; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5203.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5204.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/11.0.029; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5205.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/20.0.036; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5206.Nokia C6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaC6-00/20.0.037; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5207.Nokia C6-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5208.Nokia C6-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC6-01/012.003 (Symbian/3; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5209.Nokia C6-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01.3/012.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5210.Nokia C6-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01.3/022.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.26 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5211.Nokia C6-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5212.Nokia C6-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC6-01/012.003 (Symbian/3; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5213.Nokia C6-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01.3/012.006; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5214.Nokia C6-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01.3/022.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.26 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5215.Nokia C7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/011.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5216.Nokia C7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5217.Nokia C7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/012.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5218.Nokia C7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/012.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5219.Nokia C7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/020.032; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.14 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5220.Nokia C7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/011.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5221.Nokia C7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5222.Nokia C7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/012.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5223.Nokia C7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/012.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5224.Nokia C7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/020.032; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.14 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5225.Nokia E5-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE5-00/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5226.Nokia E5-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE5-00/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5227.Nokia E50', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE50-2/3.0 (07.36.0.30) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5228.Nokia E50', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE50-2/3.0 (07.36.0.30) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5229.Nokia E51', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE51-1/200.34.36; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5230.Nokia E51', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE51-1/200.34.36; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5231.Nokia E52', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE52-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5232.Nokia E52', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/021.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5233.Nokia E52', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5234.Nokia E52', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-2; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.18430' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5235.Nokia E52', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/033.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5236.Nokia E52', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE52-1/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5237.Nokia E52', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/021.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5238.Nokia E52', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5239.Nokia E52', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-2; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.18430' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5240.Nokia E52', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE52-1/033.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.5' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5241.Nokia E55', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE55-2/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5242.Nokia E55', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5243.Nokia E55', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/022.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5244.Nokia E55', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/022.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5245.Nokia E55', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE55-2/1.00.000; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5246.Nokia E55', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5247.Nokia E55', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/022.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5248.Nokia E55', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE55-1/022.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5249.Nokia E6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE6-00/021.002; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.16 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5250.Nokia E6-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE6-00/021.002; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.16 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5251.Nokia E61', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Series60/3.0 NokiaE61-1/05w38.2 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5252.Nokia E61', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Series60/3.0 NokiaE61-1/05w38.2 Profile/MIDP-2.0 Configuration/CLDC-1.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5253.Nokia E61i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE61i-1/3.0 (2.0633.65.01) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5254.Nokia E61i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE61i-1/3.0 (2.0633.65.01) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5255.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.60; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5256.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.68; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5257.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.80; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5258.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.85; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5259.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1_Orange/100.21.80; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5260.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-2/100.21.68; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5261.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.110; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5262.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/200.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5263.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE63/1.0(101.21.010) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5264.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5265.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5266.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-2/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5267.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5268.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5269.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.60; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5270.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.68; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5271.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.80; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5272.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.85; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5273.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1_Orange/100.21.80; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5274.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-2/100.21.68; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5275.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/100.21.110; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5276.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/200.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5277.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE63/1.0(101.21.010) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5278.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5279.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5280.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-2/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5281.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5282.Nokia E63', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5283.Nokia E63-3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/200.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5284.Nokia E63-3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-3/200.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5285.Nokia E65', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5286.Nokia E65', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es65' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5287.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(SymbianOS/9.2;U;Series60/3.1NokiaE66-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5288.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5289.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5290.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-2/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5291.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.78; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5292.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5293.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1Orange/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5294.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-2/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5295.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE66/1.0 (100.21.108) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5296.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5297.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/210.21.007; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5298.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/300.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5299.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.52; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5300.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5301.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(SymbianOS/9.2;U;Series60/3.1NokiaE66-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5302.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5303.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5304.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-2/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5305.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.78; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5306.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5307.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1Orange/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5308.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-2/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5309.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE66/1.0 (100.21.108) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5310.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5311.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/210.21.007; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5312.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/300.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5313.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/100.07.52; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5314.Nokia E66', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE66-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5315.Nokia E7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/010.016; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5316.Nokia E7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5317.Nokia E7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/022.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.27 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5318.Nokia E7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/010.016; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5319.Nokia E7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5320.Nokia E7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/022.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.27 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5321.Nokia E70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5322.Nokia E70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-1/3.0 (06w02.0) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5323.Nokia E70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-1/3.0 (1.0610.05.06); SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5324.Nokia E70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5325.Nokia E70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-2/3.0 (2.0618.07.10) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5326.Nokia E70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5327.Nokia E70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-1/3.0 (06w02.0) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5328.Nokia E70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-1/3.0 (1.0610.05.06); SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5329.Nokia E70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5330.Nokia E70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE70-2/3.0 (2.0618.07.10) SymbianOS/9.1 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5331.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/100.07.57; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5332.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5333.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71/200.21.565 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 Nokia/E71JP' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5334.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5335.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE71' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5336.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1Orange/007.xx.xx; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5337.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5338.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5339.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-E71' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5340.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/200.21.85; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5341.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/210.21.006; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5342.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5343.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaE71-1/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5344.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/300.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5345.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5346.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/400.21.004; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5347.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/402.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5348.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5349.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5350.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5351.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5352.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/100.07.57; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5353.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5354.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71/200.21.565 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 Nokia/E71JP' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5355.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/102.07.81; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5356.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE71' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5357.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1Orange/007.xx.xx; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5358.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/110.07.126; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5359.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5360.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-E71' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5361.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/200.21.85; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5362.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/210.21.006; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5363.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5364.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaE71-1/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5365.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/300.21.012; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5366.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/200.21.118; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5367.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/400.21.004; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5368.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/402.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5369.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5370.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-1/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5371.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/411.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5372.Nokia E71', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/501.21.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5373.Nokia E71-2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-2/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5374.Nokia E71-2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-2/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5375.Nokia E71-2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-2/100.07.76; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5376.Nokia E71-2', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-2/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5377.Nokia E71-3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5378.Nokia E71-3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE71-3/110.07.127; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5379.Nokia E71x', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE71x/ATT.03.11.1 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5380.Nokia E71x', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 NokiaE71x Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5381.Nokia E71x', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaE71x/ATT.03.11.1 Mozilla/5.0 SymbianOS/9.3; U; [en]; Series60/3.2; Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5382.Nokia E71x', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3 U; Series60/3.2 NokiaE71x Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5383.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5384.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5385.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.014.1; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5386.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5387.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5388.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5389.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.016; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5390.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5391.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5392.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5393.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.017.1; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5394.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5395.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5396.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5397.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.024; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.19424' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5398.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-2/031.023; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5399.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13126' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5400.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.014; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5401.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.014.1; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5402.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5403.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5404.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.015; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5405.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.016; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5406.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5407.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5408.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5409.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.017.1; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5410.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5411.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5412.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.013; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.14371' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5413.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.024; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.19424' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5414.Nokia E72', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-2/031.023; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5415.Nokia E73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE73/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5416.Nokia E73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE73/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5417.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/008.38.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5418.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/100.48.78 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5419.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/110.48.125 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5420.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/110.48.117 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5421.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.34; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5422.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.36; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5423.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.39; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5424.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/008.38.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5425.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/100.48.78 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5426.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/110.48.125 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5427.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1/110.48.117 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5428.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.34; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16123' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5429.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.36; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5430.Nokia E75-1', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE75-1/200.12.39; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5431.Nokia N2220s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2220s/2.0 (09.55) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5432.Nokia N2220s', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2220s/2.0 (09.55) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5433.Nokia N2690', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2690/2.0 (09.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5434.Nokia N2690', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2690/2.0 (09.65) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5435.Nokia N2700 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2700c-2/2.0 (07.15) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5436.Nokia N2700 Classic', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2700c-2/2.0 (07.15) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5437.Nokia N2730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1b/2.0 (07.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5438.Nokia N2730c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia2730c-1b/2.0 (07.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5439.Nokia N3600', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3600slide/2.0 (04.11) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5440.Nokia N3600', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia3600slide/2.0 (04.11) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5441.Nokia N6208c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6208c/2.0 (04.50) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5442.Nokia N6208c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6208c/2.0 (04.52) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5443.Nokia N6208c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6208c/2.0 (04.50) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5444.Nokia N6208c', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia6208c/2.0 (04.52) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5445.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5446.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia N70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5447.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5448.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/1.0526.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5449.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/2.0529.0.1/SNXXXXXXXXXXXXXXX Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5450.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.65; Nokia N70/5.0609.2.0.1; 9399) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5451.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70/ 5.0734.4.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5452.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0705.3.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5453.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0609.2.0.1; 6171) Opera 8.00 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5454.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0741.4.0.1; 9424) Opera 8.65 [' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5455.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.51; Nokia N70/2.0539.1.2; 7032) Opera 8.51 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5456.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.50; Nokia N70/5.0609.2.0.1; 7111) Opera 8.50 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5457.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0638.3.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5458.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-N70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5459.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0638.3.0.1/SNXXXXXXXXXXXXXXX Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5460.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0819.4.0.1; 9424) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5461.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0705.3.0.1; 9399) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5462.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0609.2.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5463.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5464.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/3.0546.2.3 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5465.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9399 (Symbian OS; U) [Nokia N70/3.0546.2.3]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5466.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5467.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia N70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5468.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5469.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/1.0526.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5470.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/2.0529.0.1/SNXXXXXXXXXXXXXXX Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5471.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.65; Nokia N70/5.0609.2.0.1; 9399) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5472.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70/ 5.0734.4.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5473.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0705.3.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5474.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0609.2.0.1; 6171) Opera 8.00 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5475.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0741.4.0.1; 9424) Opera 8.65 [' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5476.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.51; Nokia N70/2.0539.1.2; 7032) Opera 8.51 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5477.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Opera 8.50; Nokia N70/5.0609.2.0.1; 7111) Opera 8.50 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5478.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0638.3.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5479.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-N70' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5480.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0638.3.0.1/SNXXXXXXXXXXXXXXX Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5481.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0819.4.0.1; 9424) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5482.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N70/5.0705.3.0.1; 9399) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5483.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/5.0609.2.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5484.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5485.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN70-1/3.0546.2.3 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5486.Nokia N70', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Opera/9399 (Symbian OS; U) [Nokia N70/3.0546.2.3]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5487.Nokia N7230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7230/5.0 (05.71) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5488.Nokia N7230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7230-1c/5.0 (09.83) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5489.Nokia N7230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7230/5.0 (05.71) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5490.Nokia N7230', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7230-1c/5.0 (09.83) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5491.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5492.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [it]; NokiaN73-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5493.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0638.0.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5494.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0638.0.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5495.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0704.1.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5496.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; ar) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5497.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [cs]; NokiaN73-1/3.0704.1.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5498.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [cs]; NokiaN73-1/4.0747.31.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5499.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [th]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5500.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; id) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5501.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [id]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5502.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; el) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5503.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [ar]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5504.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [pl]; NokiaN73-1/4.0747.31.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5505.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5506.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [it]; NokiaN73-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5507.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0638.0.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5508.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0638.0.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5509.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [en]; NokiaN73-1/3.0704.1.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5510.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; ar) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5511.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [cs]; NokiaN73-1/3.0704.1.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5512.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [cs]; NokiaN73-1/4.0747.31.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5513.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [th]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5514.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; id) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5515.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [id]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5516.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; el) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5517.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [ar]; SymbianOS/9.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5518.Nokia N73', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.1; U; [pl]; NokiaN73-1/4.0747.31.0.1 Series60/3.0) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5519.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5520.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/10.0.032 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5521.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/10.0.035 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5522.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/31.0.014 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5523.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN76/CMCC SymbianOS/9.2 Series60/3.1 Release/21.1.004 Mozilla/5.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5524.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/20.0.041 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5525.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN76' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5526.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN76' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5527.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/30.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5528.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5529.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/10.0.032 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5530.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/10.0.035 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5531.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/31.0.014 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5532.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN76/CMCC SymbianOS/9.2 Series60/3.1 Release/21.1.004 Mozilla/5.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5533.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/20.0.041 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5534.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN76' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5535.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN76' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5536.Nokia N76', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN76-1/30.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5537.Nokia N7610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (04.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5538.Nokia N7610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (04.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5539.Nokia N7610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5540.Nokia N7610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (05.72) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5541.Nokia N7610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (04.70) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5542.Nokia N7610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (04.82) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5543.Nokia N7610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (05.20) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5544.Nokia N7610', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia7610Supernova/2.0 (05.72) Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5545.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-3/10.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5546.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.045; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5547.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.034; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5548.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.046; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5549.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-3/10.046; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5550.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN79/SymbianOS/9.3 Series60/3.2 Release/10.045; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5551.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN79' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5552.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/20.174; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5553.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/11.049; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5554.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/30.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5555.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/31.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5556.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-3/10.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5557.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.045; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5558.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.034; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5559.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/10.046; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5560.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-3/10.046; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5561.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN79/SymbianOS/9.3 Series60/3.2 Release/10.045; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5562.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN79' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5563.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/20.174; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5564.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/11.049; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5565.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/30.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5566.Nokia N79', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-1/31.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5567.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/010.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5568.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 Nokia N8-00/010.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5569.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5570.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5571.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5572.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/022.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.31 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5573.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/010.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5574.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 Nokia N8-00/010.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5575.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5576.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.011; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5577.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/011.012; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5578.Nokia N8-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/022.008; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.31 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5579.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5580.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/1.0552.0.7 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5581.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (3.0611.0.8) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5582.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N80/; 9712) Opera 8.65 [ru]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5583.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (4.0623.0.22) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5584.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN80' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5585.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Jataayu/jB5/5.0; Symbian Series 60; Generic; en;)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5586.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Series 60/4.0812.4.2.1; 9730) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5587.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (4.0623.0.22) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5588.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5589.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/1.0552.0.7 Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5590.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (3.0611.0.8) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5591.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Nokia N80/; 9712) Opera 8.65 [ru]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5592.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (4.0623.0.22) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5593.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN80' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5594.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Jataayu/jB5/5.0; Symbian Series 60; Generic; en;)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5595.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; Series 60/4.0812.4.2.1; 9730) Opera 8.65 [en]' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5596.Nokia N80', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN80-1/3.0 (4.0623.0.22) Series60/3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5597.Nokia N800', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_US] Maemo browser 0.7.6 RX-34_2007SE_2.2006.51-6' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5598.Nokia N800', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_US] Maemo browser 0.7.6 RX-34_2007SE_2.2006.51-6' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5599.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/1.00 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5600.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/11.0.045 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5601.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/10.0.026 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5602.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/10.0.053 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5603.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/1.00 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 UP.Browser/7.0.2.3.119 (GUI) MMP/2.0 Push/PO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5604.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/10.0.032 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5605.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81/ SymbianOS/9.2 Series60/3.1 Release/10.1.039 Mozilla/5.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5606.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; [en]; Series60/3.2 NokiaN81-1/10.0.042; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5607.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81 SymbianOS/9.2 Series60/3.1 Release/10.1.028 Mozilla/5.0 Profile/MIDP-2.0 Configuration/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5608.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/11.0.045 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5609.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIANokia N81' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5610.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/10.0.035 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5611.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-1/11.0.045 UNTRUSTED/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5612.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/11.0.045 UNTRUSTED/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5613.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/10.0.035 UNTRUSTED/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5614.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/20.0.056' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5615.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/20.0.056 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5616.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/21.0.010 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5617.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/11.0.023 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5618.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/21.0.010 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5619.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/20.0.056 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5620.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/21.0.008 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5621.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/1.00 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5622.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/11.0.045 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5623.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/10.0.026 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5624.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/10.0.053 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5625.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/1.00 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 UP.Browser/7.0.2.3.119 (GUI) MMP/2.0 Push/PO' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5626.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/10.0.032 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5627.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81/ SymbianOS/9.2 Series60/3.1 Release/10.1.039 Mozilla/5.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5628.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; [en]; Series60/3.2 NokiaN81-1/10.0.042; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5629.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81 SymbianOS/9.2 Series60/3.1 Release/10.1.028 Mozilla/5.0 Profile/MIDP-2.0 Configuration/' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5630.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/11.0.045 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5631.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIANokia N81' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5632.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/10.0.035 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5633.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-1/11.0.045 UNTRUSTED/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5634.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/11.0.045 UNTRUSTED/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5635.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/10.0.035 UNTRUSTED/1.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5636.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN81-3/20.0.056' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5637.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/20.0.056 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5638.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/21.0.010 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5639.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/11.0.023 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5640.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/21.0.010 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5641.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-1/20.0.056 Profile/MIDP-2.0' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5642.Nokia N81', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN81-3/21.0.008 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5643.Nokia N810', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_US] Tablet browser 0.0.14 RX-34_2007SE_4.2007.26-8' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5644.Nokia N810', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-US; rv:1.9a6pre) Gecko/20071018 Firefox/3.0a1 Tablet browser 0.1.24 RX-34+RX-44_2008SE_1.2007.44-4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5645.Nokia N810', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-US; rv:1.9a6pre) Gecko/20071128 Firefox/3.0a1 Tablet browser 0.2.2 RX-34+RX-44_2008SE_2.2007.51-3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5646.Nokia N810', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-GB; rv:1.9a6pre) Gecko/20080606 Firefox/3.0a1 Tablet browser 0.3.7 RX-34+RX-44+RX-48_DIABLO_4.2008.23-14' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5647.Nokia N810', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; es-ES; rv:1.9a6pre) Gecko/20080828 Firefox/3.0a1 Tablet browser 0.3.7 RX-34+RX-44+RX-48_DIABLO_5.2008.43-7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5648.Nokia N810', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux armv6l; U) Opera 8.5 [en_US] Tablet browser 0.0.14 RX-34_2007SE_4.2007.26-8' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5649.Nokia N810', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-US; rv:1.9a6pre) Gecko/20071018 Firefox/3.0a1 Tablet browser 0.1.24 RX-34+RX-44_2008SE_1.2007.44-4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5650.Nokia N810', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-US; rv:1.9a6pre) Gecko/20071128 Firefox/3.0a1 Tablet browser 0.2.2 RX-34+RX-44_2008SE_2.2007.51-3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5651.Nokia N810', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; en-GB; rv:1.9a6pre) Gecko/20080606 Firefox/3.0a1 Tablet browser 0.3.7 RX-34+RX-44+RX-48_DIABLO_4.2008.23-14' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5652.Nokia N810', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv6l; es-ES; rv:1.9a6pre) Gecko/20080828 Firefox/3.0a1 Tablet browser 0.3.7 RX-34+RX-44+RX-48_DIABLO_5.2008.43-7' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5653.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(SymbianOS/9.2; U; Series60/3.1 NokiaN82/10.0.035; Profile/MIDP-2.0 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5654.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/10.0.046; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5655.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/11.0.117; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5656.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/20.0.062; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5657.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN82/1.0 (20.1.062) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5658.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN82' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5659.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/30.0.019; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5660.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/31.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5661.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(SymbianOS/9.2; U; Series60/3.1 NokiaN82/10.0.035; Profile/MIDP-2.0 Configuration/CLDC-1.1;) AppleWebKit/413(KHTML, like Gecko)Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5662.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/10.0.046; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5663.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/11.0.117; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5664.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/20.0.062; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5665.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN82/1.0 (20.1.062) SymbianOS/9.2 Series60/3.1 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5666.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN82' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5667.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/30.0.019; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5668.Nokia N82', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN82/31.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5669.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/10.045; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5670.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/10.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5671.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-3/11.025; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5672.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN85' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5673.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/11.047; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5674.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN85' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5675.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/20.131; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5676.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/30.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5677.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/20.174; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5678.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/11.043; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5679.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/10.045; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5680.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/10.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5681.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-3/11.025; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5682.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN85' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5683.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/11.047; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5684.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN85' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5685.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/20.131; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5686.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/30.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5687.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/20.174; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5688.Nokia N85', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN85-1/11.043; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5689.Nokia N86', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/10.086;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5690.Nokia N86', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/11.043;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5691.Nokia N86', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.011;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5692.Nokia N86', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.046;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5693.Nokia N86', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.067;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5694.Nokia N86', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/10.086;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5695.Nokia N86', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/11.043;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5696.Nokia N86', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.011;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5697.Nokia N86', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.046;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5698.Nokia N86', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN86-1/20.067;; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.13380' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5699.Nokia N9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (MeeGo; N9) AppleWebKit/533.3 (KHTML, like Gecko) NokiaBrowser/8.5 Mobile Safari/533.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5700.Nokia N9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5701.Nokia N9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (MeeGo; N9) AppleWebKit/533.3 (KHTML, like Gecko) NokiaBrowser/8.5 Mobile Safari/533.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5702.Nokia N9', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5703.Nokia N900', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; fi-FI; rv:1.9.2a1pre) Gecko/20090928 Firefox/3.5 Maemo Browser 1.4.1.15 RX-51 N900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5704.Nokia N900', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2.3pre) Gecko/20100723 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5705.Nokia N900', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2b6pre) Gecko/20100318 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5706.Nokia N900', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; fi-FI; rv:1.9.2a1pre) Gecko/20090928 Firefox/3.5 Maemo Browser 1.4.1.15 RX-51 N900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5707.Nokia N900', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2.3pre) Gecko/20100723 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5708.Nokia N900', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2b6pre) Gecko/20100318 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5709.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN95' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5710.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbianos/9.2; U; Series60/3.1 NokiaN95/10.0.014; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5711.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5712.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/11.0.026; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5713.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/12.0.013; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5714.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5715.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5716.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.010)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5717.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/10.2.006; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5718.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/11.2.009; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5719.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/21.0.016 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5720.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.273 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 Nokia/X02NK' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5721.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/20.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5722.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 )' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5723.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/21.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5724.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/30.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5725.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN95' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5726.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-N95' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5727.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/13.0.003 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5728.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/30.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5729.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.017; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5730.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.017 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5731.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5732.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.014; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5733.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/30.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5734.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/31.0.017; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5735.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/35.0.002; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5736.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN95' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5737.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbianos/9.2; U; Series60/3.1 NokiaN95/10.0.014; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5738.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5739.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/11.0.026; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5740.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/12.0.013; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5741.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5742.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5743.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.010)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5744.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/10.2.006; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5745.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/11.2.009; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5746.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/21.0.016 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5747.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/20.0.273 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 Nokia/X02NK' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5748.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/20.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5749.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 )' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5750.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/21.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5751.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/30.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5752.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NOKIAN95' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5753.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nokia-N95' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5754.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/13.0.003 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5755.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/30.0.015 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5756.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.017; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5757.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.017 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5758.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5759.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.014; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5760.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/30.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5761.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/31.0.017; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5762.Nokia N95', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95/35.0.002; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5763.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2 U; Series60/3.1 NokiaN95_8GB/10.0.007; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5764.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/10.0.021; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5765.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/15.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5766.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/11.0.026; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5767.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5768.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/20.2.005 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5769.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95_8GB/20.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5770.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/30.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5771.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian0S/9.2 U; Series60/3.1 NokiaN95_8GB/15.0.012 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko/413)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5772.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5773.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.016 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5774.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/1.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5775.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/31.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5776.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/20.2.011; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5777.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/31.2.008 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5778.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/30.0.018 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5779.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/40.0.002; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5780.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN95_8GB-3;Mozilla/5.0 SymbianOS/9.2;U; Series60/3.1 NokiaN95_8GB-3/11.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5781.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2 U; Series60/3.1 NokiaN95_8GB/10.0.007; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5782.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/10.0.021; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5783.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/15.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5784.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/11.0.026; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5785.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5786.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/20.2.005 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5787.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; Series60/3.1 NokiaN95_8GB/20.0.016; Profile/MIDP-2.0 Configuration/CLDC-1.1 U; ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5788.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/30.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5789.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian0S/9.2 U; Series60/3.1 NokiaN95_8GB/15.0.012 Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko/413)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5790.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5791.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/20.0.016 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5792.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/1.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5793.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/31.0.015; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5794.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95-3/20.2.011; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5795.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB-3/31.2.008 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5796.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/30.0.018 Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5797.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/40.0.002; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5798.Nokia N95 8GB', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN95_8GB-3;Mozilla/5.0 SymbianOS/9.2;U; Series60/3.1 NokiaN95_8GB-3/11.2.011 Profile/MIDP-2.0 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML, like Gecko)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5799.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5800.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN96-1/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5801.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.11; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5802.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-3/1.11; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5803.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.10; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5804.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN96/SymbianOS/9.3 Series60/3.2 Release/11.018; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5805.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN96-1/11.0 (11.101) SymbianOS/9.3 Series60/3.2 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5806.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.20; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5807.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/2.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5808.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/3.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5809.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5810.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaN96-1/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5811.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.11; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5812.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-3/1.11; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5813.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.10; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5814.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN96/SymbianOS/9.3 Series60/3.2 Release/11.018; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5815.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN96-1/11.0 (11.101) SymbianOS/9.3 Series60/3.2 Profile/MIDP-2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5816.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/1.20; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5817.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/2.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5818.Nokia N96', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-1/3.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5819.Nokia N96-3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-3/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5820.Nokia N96-3', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN96-3/1.00; Profile/MIDP-2.1 Configuration/CLDC-1.1;) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5821.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5822.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97-1/1001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5823.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5824.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/11.0.021; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5825.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-3/10.2.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5826.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/12.0.024; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5827.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/11.0.020; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5828.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.16988' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5829.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'N97-1/11.0.021; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5830.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.007; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5831.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/12.0.026; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5832.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5833.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5834.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5835.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-3/20.2.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5836.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97/20.1.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5837.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97-1/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5838.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/22.0.110; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5839.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/20.0.038; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5840.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0; en-GB; Nokia N97 RM-505) AppleWebKit/532.4 (KHTML, like Gecko) Qt/4.6.3 Mobile Safari/532.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5841.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5842.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97-1/1001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5843.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5844.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/11.0.021; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5845.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-3/10.2.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5846.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/12.0.024; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5847.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/11.0.020; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.12344' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5848.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.16988' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5849.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'N97-1/11.0.021; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5850.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.007; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5851.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/12.0.026; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.13841' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5852.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.009; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5853.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.011; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5854.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5855.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-3/20.2.019; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5856.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97/20.1.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5857.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaN97-1/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5858.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/22.0.110; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5859.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/20.0.038; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.2.6.9 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5860.Nokia N97', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0; en-GB; Nokia N97 RM-505) AppleWebKit/532.4 (KHTML, like Gecko) Qt/4.6.3 Mobile Safari/532.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5861.Nokia N97 mini', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-5/11.2.102; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5862.Nokia N97 mini', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-5/11.2.102; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5863.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.14650' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5864.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5865.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.007; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5866.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5867.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.16988' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5868.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.010; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5869.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5870.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.013; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5871.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5872.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5873.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.14650' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5874.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.006; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5875.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.007; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5876.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.008; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5877.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.16988' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5878.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.010; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17475' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5879.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5880.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.013; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17972' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5881.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.001; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.17125' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5882.Nokia N97-4', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-4/10.0.020; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5883.Nokia N97i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN97i/21.0.045 (SymbianOS/9.4; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebkit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5884.Nokia N97i', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaN97i/21.0.045 (SymbianOS/9.4; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebkit/525 (KHTML, like Gecko) BrowserNG/7.1.4' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5885.Nokia NC3-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-01/5.0 (03.35) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5886.Nokia NC3-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaC3-01/5.0 (03.35) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5887.Nokia Softbank 705NK', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/705NK/NKJ001 Series60/3.0 NokiaN73/3.0650 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5888.Nokia Softbank 705NK', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/705NK/NKJ001 Series60/3.0 NokiaN73/3.0650 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5889.Nokia SoftBank X02NK', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/X02NK/NKJ001 Series60/3.1 NokiaN95/20.0.273 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5890.Nokia SoftBank X02NK', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SoftBank/1.0/X02NK/NKJ001 Series60/3.1 NokiaN95/20.0.273 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5891.Nokia T7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaT7-00_TD/CMCC (SymbianOS/3; Release/022.011; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko)NokiaBrowser/7.3.1.35 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5892.Nokia T7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaT7-00_TD/CMCC (SymbianOS/3; Release/022.011; Series60/5.2 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko)NokiaBrowser/7.3.1.35 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5893.Nokia X2-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5894.Nokia X2-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5895.Nokia X2-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/5.0 (04.80) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5896.Nokia X2-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5897.Nokia X2-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5898.Nokia X2-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-00/5.0 (04.80) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5899.Nokia X2-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-01/5.0 (07.10) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420 (KHTML, like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5900.Nokia X2-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX2-01/5.0 (07.10) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420 (KHTML, like Gecko) Safari/420' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5901.Nokia X3-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5902.Nokia X3-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5903.Nokia X3-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/2.0 (di3.44SSC) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5904.Nokia X3-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/2.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5905.Nokia X3-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/5.0 (p) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5906.Nokia X3-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-00/2.0 (di3.44SSC) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5907.Nokia X3-02', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-02/5.0 (05.30) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5908.Nokia X3-02', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40; NokiaX3-02/05.65; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/1.0.0.9.10' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5909.Nokia X3-02', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX3-02/5.0 (05.30) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5910.Nokia X3-02', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Series40; NokiaX3-02/05.65; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/1.0.0.9.10' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5911.Nokia X5-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX5-00/CMCC SymbianOS/9.3 Series60/3.2 Release/10.1018.28; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5912.Nokia X5-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX5-00/CMCC SymbianOS/9.3 Series60/3.2 Release/10.1018.28; Mozilla/5.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 AppleWebKit/413 (KHTML,like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5913.Nokia X5-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaX5-01/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5914.Nokia X5-01', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaX5-01/100.000; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.3.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5915.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.058; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5916.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.060; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5917.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.059; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5918.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.064; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5919.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(Symbiam OS/9.4;Series 60/5.0 NokiaX6-00/20.0.005;Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrouserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5920.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX6-00/20.0.005; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5921.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaX6-00/21.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5922.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.058; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5923.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.060; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5924.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.059; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5925.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 NokiaX6-00/10.0.064; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5926.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0(Symbiam OS/9.4;Series 60/5.0 NokiaX6-00/20.0.005;Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrouserNG/7.2.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5927.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NokiaX6-00/20.0.005; Series60/5.0 Profile MIDP2.1 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5928.Nokia X6', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaX6-00/21.0.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.5.2 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5929.Nokia X7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaX7-00/021.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.21 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5930.Nokia X7-00', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaX7-00/021.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.21 Mobile Safari/533.4 3gpp-gba' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5931.Novarra CTS reformatting proxy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 MG (Novarra-Vision/6.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5932.Novarra CTS reformatting proxy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 Novarra-Vision/7.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5933.Novarra CTS reformatting proxy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 MG(Novarra-Vision/7.3)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5934.Novarra CTS reformatting proxy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 MG (Novarra-Vision/6.1)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5935.Novarra CTS reformatting proxy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 Novarra-Vision/7.3' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5936.Novarra CTS reformatting proxy', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 MG(Novarra-Vision/7.3)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5937.O2 Jet', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'O2Jet' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5938.O2 Jet', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'O2Jet' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5939.O2 Xda Argon', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) Xda Argon; 240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5940.O2 Xda Argon', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.8) Xda Argon; 240x320' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5941.O2 Xda Atmos', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Atmos; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5942.O2 Xda Atmos', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Atmos; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5943.O2 Xda Atom Exec', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) O2 Xda Atom Exec' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5944.O2 Xda Atom Exec', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) O2 Xda Atom Exec' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5945.O2 XDA Comet', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) o2 Xda comet' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5946.O2 XDA Comet', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) o2 Xda comet' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5947.O2 XDA Comet', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12) o2 Xda comet' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5948.O2 XDA Comet', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) o2 Xda comet' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5949.O2 Xda Cosmo', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Xda cosmo; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5950.O2 Xda Cosmo', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Xda cosmo; 320x240)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5951.O2 XDA Diamond', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5952.O2 XDA Diamond', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5953.O2 XDA Diamond Pro', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond_pro/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5954.O2 XDA Diamond Pro', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond_pro Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5955.O2 XDA Diamond Pro', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond_pro/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5956.O2 XDA Diamond Pro', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_diamond_pro Opera/9.50 (Windows NT 5.1; U; de)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5957.O2 Xda Graphite', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'XdaGraphite/1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; XdaGraphite)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5958.O2 Xda Graphite', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; O2 Graphite; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5959.O2 Xda Graphite', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Xda Graphite/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5960.O2 Xda Graphite', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Xda Graphite/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5961.O2 Xda Graphite', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'O2 Xda Graphite' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5962.O2 Xda Graphite', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'XdaGraphite/1.0 Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 240x320; XdaGraphite)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5963.O2 Xda Graphite', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; O2 Graphite; Smartphone; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5964.O2 Xda Graphite', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) Xda Graphite/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5965.O2 Xda Graphite', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Xda Graphite/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5966.O2 Xda Graphite', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'O2 Xda Graphite' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5967.O2 XDA Ignito', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Ignito/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5968.O2 XDA Ignito', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Ignito/480x640 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5969.O2 XDA Ignito', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Ignito/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5970.O2 XDA Ignito', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Ignito/480x640 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5971.O2 XDA Mantle', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Mantle/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5972.O2 XDA Mantle', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Mantle/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5973.O2 Xda Nova', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_nova; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5974.O2 Xda Nova', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_nova; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5975.O2 Xda Nova', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_nova; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5976.O2 Xda Nova', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_nova; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5977.O2 Xda Orbit II', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5978.O2 Xda Orbit II', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5979.O2 Xda Orbit II', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; SPV M3100; OpVer 12' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5980.O2 Xda Orbit II', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5981.O2 Xda Orbit II', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5982.O2 Xda Orbit II', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5983.O2 Xda Orbit II', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6) PPC; 240x320; SPV M3100; OpVer 12' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5984.O2 Xda Orbit II', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_orbit_2/240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5985.O2 XDA Serra', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Serra/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5986.O2 XDA Serra', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Serra/480x640 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5987.O2 XDA Serra', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Serra/480x640 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5988.O2 XDA Serra', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Serra/480x640 Opera/9.50 (Windows NT 5.1; U; en)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5989.O2 XDA Star', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_star; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5990.O2 XDA Star', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_star; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5991.O2 XDA Stealth', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; O2 Xda Stealth; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5992.O2 XDA Stealth', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; O2 Xda Stealth; PPC; 240x320)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5993.O2 XDA Stellar', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Stellar; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5994.O2 XDA Stellar', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Stellar; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5995.O2 XDA Stellar', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Stellar; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.6)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5996.O2 XDA Stellar', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xda_Stellar; 240x320 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5997.O2 XDA/Exec', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; Xda Exec; 640x480)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5998.O2 XDA/Exec', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC;JASJAR;640x480; PPC; Xda Exec; 640x480)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('5999.O2 XDA/Exec', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; Xda Exec; 640x480)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
    describe('6000.O2 XDA/Exec', function(){
        it('should get device type phone', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC;JASJAR;640x480; PPC; Xda Exec; 640x480)' } });
            assert.equal(parser.get_type(), 'phone');
        });
    });
});