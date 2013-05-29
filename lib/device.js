/* Based on Categorizr (https://github.com/bjankord/Categorizr) by Brett Jankord (http://www.brettjankord.com) */
var express     = require('express'),
    path        = require('path'),
    partials    = require('express-partials');

var defaultOptions = {
    emptyUserAgentDeviceType: 'desktop',
    unknownUserAgentDeviceType: 'phone',
    botUserAgentDeviceType: 'bot'
};

exports.version = require('../package').version;
exports.namespace = 'express';
 
function merge(obj1, obj2) {
    var obj3 = {};
    if(obj1) { for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; } }
    if(obj2) { for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; } }
    return obj3;
}

function DeviceParser(req, options) {
    var self = this;

    self.options = merge(defaultOptions, options);

    self.user_agent = function () {
        return req.headers['user-agent'];
    };

    self.get_type = function () {
        var ua = self.user_agent();
        
        if (!ua || ua === '') {
            // No user agent.
            return self.options.emptyUserAgentDeviceType;
        }

        if (ua.match(/GoogleTV|SmartTV|Internet TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i)) {
            // if user agent is a smart TV - http://goo.gl/FocDk
            return 'tv';
        } else if (ua.match(/Xbox|PLAYSTATION 3|Wii/i)) {
            // if user agent is a TV Based Gaming Console
            return 'tv';
        } else if (ua.match(/iP(a|ro)d/i) || (ua.match(/tablet/i) && !ua.match(/RX-34/i)) || ua.match(/FOLIO/i)) {
            // if user agent is a Tablet
            return 'tablet';
        } else if (ua.match(/Linux/i) && ua.match(/Android/i) && !ua.match(/Fennec|mobi|HTC Magic|HTCX06HT|Nexus One|SC-02B|fone 945/i)) {
            // if user agent is an Android Tablet
            return 'tablet';
        } else if (ua.match(/Kindle/i) || (ua.match(/Mac OS/i) && ua.match(/Silk/i))) {
            // if user agent is a Kindle or Kindle Fire
            return 'tablet';
        } else if (ua.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || (ua.match(/MB511/i) && ua.match(/RUTEM/i))) {
            // if user agent is a pre Android 3.0 Tablet
            return 'tablet';
        } else if (ua.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google Wireless Transcoder/i)) {
            // if user agent is unique phone User Agent
            return 'phone';
        } else if (ua.match(/Opera/i) && ua.match(/Windows NT 5/i) && ua.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)) {
            // if user agent is an odd Opera User Agent - http://goo.gl/nK90K
            return 'phone';
        } else if ((ua.match(/Windows (NT|XP|ME|9)/) && !ua.match(/Phone/i)) && !ua.match(/Bot|Spider|ia_archiver|NewsGator/i) || ua.match(/Win( ?9|NT)/i)) {
            // if user agent is Windows Desktop
            return 'desktop';
        } else if (ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i)) {
            // if agent is Mac Desktop
            return 'desktop';
        } else if (ua.match(/Linux/i) && ua.match(/X11/i) && !ua.match(/Charlotte/i)) {
            // if user agent is a Linux Desktop
            return 'desktop';
        } else if (ua.match(/CrOS/)) {
            // if user agent is a Chrome Book
            return 'desktop';
        } else if (ua.match(/Solaris|SunOS|BSD/i)) {
            // if user agent is a Solaris, SunOS, BSD Desktop
            return 'desktop';
        } else if (ua.match(/curl|Bot|B-O-T|Crawler|Spider|Spyder|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|Charlotte|NewsGator|TinEye|Cerberian|SearchSight|Zao|Scrubby|Qseero|PycURL|Pompos|oegp|SBIder|yoogliFetchAgent|yacy|webcollage|VYU2|voyager|updated|truwoGPS|StackRambler|Sqworm|silk|semanticdiscovery|ScoutJet|Nymesis|NetResearchServer|MVAClient|mogimogi|Mnogosearch|Arachmo|Accoona|holmes|htdig|ichiro|webis|LinkWalker|lwp-trivial|facebookexternalhit/i) && !ua.match(/phone|Playstation/i)) {
            // if user agent is a BOT/Crawler/Spider
            return self.options.botUserAgentDeviceType;
        } else {
            // Otherwise assume it is a phone Device
            return self.options.unknownUserAgentDeviceType;
        }
    };
}
exports.Parser = DeviceParser;

exports.capture = function (options) {
    return function (req, res, next) {
        var parser = new DeviceParser(req, options);
        req.device = req.device || {};

        req.device.type = parser.get_type();

        if (next) return next();
    };
};

function check (req, res, name) {
    var ext = path.extname(name) || '.' + (res.app.get('view engine') || 'html');
    var root = req.app.get('views') || process.cwd() + '/views';
    var dir = path.dirname(name) == '.' ? root : path.resolve(root, path.dirname(name));
    return partials.lookup(dir, path.basename(name, ext), ext);
}

express.application.enableViewRouting = function () {
    var app = this.app || this;
    app.use(partials());
    app.use(function (req, res, next) {
        var _render = res.render.bind(res);
        res.render = function(name, options, fn) {
            var layout = options && options.layout;
            var ignore = (options && options.ignoreViewRouting) || false;

            if(ignore === false) {
                if (layout === true || layout === undefined) {
                    var defaultLayout = path.join(req.device.type, 'layout');
                    options = options || {};
                    if (check(req, res, defaultLayout)) options.layout = defaultLayout;
                } 
                else if(typeof layout === "string") {
                    var deviceLayout = path.join(req.device.type, layout);
                    if (check(req, res, deviceLayout)) options.layout = deviceLayout;
                }
    
                var deviceView = path.join(req.device.type, name);
                if (check(req, res, deviceView)) name = deviceView;
            }

            _render(name, options, fn);
        };

        if(next) return next();
    });
};

express.application.enableDeviceHelpers = function () {
    var app = this.app || this;
    var check_request = function (req) {
        if (typeof req.device === 'undefined') {
            throw new Error('Must enable the device capture by using app.use(device.capture())');
        }

        return true;
    };

    var is_desktop = function (req, res, next) {
        check_request(req);
        res.locals.is_desktop = req.device.type === 'desktop';
        if (next) {
            next();
        }
    };
    app.use(is_desktop);
    var is_mobile = function (req, res, next) {
        check_request(req);
        res.locals.is_mobile = req.device.type === 'phone' || req.device.type === 'tablet';
        if (next) {
            next();
        }
    };
    app.use(is_mobile);
    var is_phone = function (req, res, next) {
        check_request(req);
        res.locals.is_phone = req.device.type === 'phone';
        if (next) {
            next();
        }
    };
    app.use(is_phone);
    var is_tablet = function (req, res, next) {
        check_request(req);
        res.locals.is_tablet = req.device.type === 'tablet';
        if (next) {
            next();
        }
    };
    app.use(is_tablet);
    var is_tv = function (req, res, next) {
        check_request(req);
        res.locals.is_tv = req.device.type === 'tv';
        if (next) {
            next();
        }
    };
    app.use(is_tv);
    var is_bot = function (req, res, next) {
        check_request(req);
        res.locals.is_bot = req.device.type === 'bot';
        if (next) {
            next();
        }
    };
    app.use(is_bot);
    var device_type = function (req, res, next) {
        check_request(req);
        res.locals.device_type = req.device.type;
        if (next) {
            next();
        }
    };
    app.use(device_type);
};
