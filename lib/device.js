/* Based on Categorizr (https://github.com/bjankord/Categorizr) by Brett Jankord (http://www.brettjankord.com) */
var express = require('express');

exports.version = '0.2.2';
exports.namespace = 'express';

function DeviceParser(req) {
    var self = this;

    self.user_agent = function () {
        return req.headers['user-agent'];
    };

    self.get_type = function () {
        var ua = self.user_agent();
        // No user agent.
        if (ua === undefined || ua === '') {
            return 'desktop';
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
        } else if ((ua.match(/Windows (NT|XP|ME|9)/) && !ua.match(/Phone/i)) || ua.match(/Win( ?9|NT)/i)) {
            // if user agent is Windows Desktop
            return 'desktop';
        } else if (ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i)) {
            // if agent is Mac Desktop
            return 'desktop';
        } else if (ua.match(/Linux/i) && ua.match(/X11/i)) {
            // if user agent is a Linux Desktop
            return 'desktop';
        } else if (ua.match(/Solaris|SunOS|BSD/i)) {
            // if user agent is a Solaris, SunOS, BSD Desktop
            return 'desktop';
        } else if (ua.match(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i) && !ua.match(/phone/i)) {
            // if user agent is a Desktop BOT/Crawler/Spider
            return 'desktop';
        } else {
            // Otherwise assume it is a phone Device
            return 'phone';
        }
    };
}

exports.Parser = DeviceParser;
exports.capture = function () {
    return function (req, res, next) {
        var parser = new DeviceParser(req);
        req.device = req.device || {};

        req.device.type = parser.get_type();

        if (next) {
            return next();
        }
    };
};

function deviceFactory(type) {
    var check_request = function (req) {
        if (typeof req.device === 'undefined') {
            throw new Error('Must enable the device capture by using app.use(device.capture())');
        }
        return true;
    };
    return function (req, res, next) {
        check_request(req);
        res.locals['is_' + type] = req.device.type === type;
        if (next) {
            next();
        }
    };
}

express.application.enableDeviceHelpers = function () {
    var app = this.app || this,
        types = ['desktop', 'mobile', 'phone', 'tablet', 'tv'],
        i,
        type;

    for (i = 0; i < types.length; i + 1) {
        type = types[i];
        app.use(deviceFactory(type));
    }
};
