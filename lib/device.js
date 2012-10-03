/* Based on Categorizr (https://github.com/bjankord/Categorizr) by Brett Jankord (http://www.brettjankord.com) */
var express = require('express');

exports.version = '0.2.2';
exports.namespace = 'express';

function DeviceParser(req) {
    var self = this;
    
    self.user_agent = function() {
        return req.headers['user-agent'];
    };
    
    self.get_type = function() {
        var ua = self.user_agent();
        // No user agent.
        if (ua === undefined || ua === '') {
        	return 'desktop';
        }
        // Check if user agent is a smart TV - http://goo.gl/FocDk
        if (ua.match(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i)) {
        	return 'tv';
    	}
    	// Check if user agent is a TV Based Gaming Console
    	else if (ua.match(/Xbox|PLAYSTATION.3|Wii/i)) {
    		return 'tv';
    	}  
    	// Check if user agent is a Tablet
    	else if(ua.match(/iP(a|ro)d/i) || ua.match(/tablet/i) && !ua.match(/RX-34/i) || ua.match(/FOLIO/i)) {
    		return 'tablet';
    	}
    	// Check if user agent is an Android Tablet
    	else if (ua.match(/Linux/i) && ua.match(/Android/i) && !ua.match(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i)) {
    		return 'tablet';
    	}
    	// Check if user agent is a Kindle or Kindle Fire
    	else if (ua.match(/Kindle/i) || ua.match(/Mac.OS/i) && ua.match(/Silk/i)) {
    		return 'tablet';
    	}
    	// Check if user agent is a pre Android 3.0 Tablet
    	else if (ua.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || ua.match(/MB511/i) && ua.match(/RUTEM/i)) {
    		return 'tablet';
    	} 
    	// Check if user agent is unique phone User Agent	
    	else if (ua.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i)) {
    		return 'phone';
    	}
    	// Check if user agent is an odd Opera User Agent - http://goo.gl/nK90K
    	else if (ua.match(/Opera/i) && ua.match(/Windows.NT.5/i) && ua.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)) {
    		return 'phone';
    	}
    	// Check if user agent is Windows Desktop
    	else if (ua.match(/Windows.(NT|XP|ME|9)/) && !ua.match(/Phone/i) || ua.match(/Win(9|.9|NT)/i)) {
    		return 'desktop';
    	}  
    	// Check if agent is Mac Desktop
    	else if (ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i)) {
    		return 'desktop';
    	} 
    	// Check if user agent is a Linux Desktop
    	else if (ua.match(/Linux/i) && ua.match(/X11/i)) {
    		return 'desktop';
    	} 
    	// Check if user agent is a Solaris, SunOS, BSD Desktop
    	else if (ua.match(/Solaris|SunOS|BSD/i)) {
    		return 'desktop';
    	}
    	// Check if user agent is a Desktop BOT/Crawler/Spider
    	else if (ua.match(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i) && !ua.match(/phone/i)) {
    		return 'desktop';
    	}  
    	// Otherwise assume it is a phone Device
    	else { return 'phone'; }
    };
};

exports.Parser = DeviceParser;
exports.capture = function () {
    return function (req, res, next) {
        var parser = new DeviceParser(req);
        req.device = req.device || {};
        
        req.device.type = parser.get_type();
        
        if(next) return next();
    };
};

express.application.enableDeviceHelpers = function() {
    var app = this.app || this;
    var check_request = function(req) {
        if (typeof req.device === 'undefined')
            throw new Error('Must enable the device capture by using app.use(device.capture())');
        
        return true;
    };
    
    var is_desktop = function(req, res, next) {
        check_request(req);
        res.locals.is_desktop = req.device.type === 'desktop';
        if(next) next();
    };
    app.use(is_desktop);
    var is_mobile = function(req, res, next) {
        check_request(req);
        res.locals.is_mobile = req.device.type === 'phone' || req.device.type === 'tablet';
        if(next) next();
    };
    app.use(is_mobile);
    var is_phone = function(req, res, next) {
        check_request(req);
        res.locals.is_phone = req.device.type === 'phone';
        if(next) next();
    };
    app.use(is_phone);
    var is_tablet = function(req, res, next) {
        check_request(req);
        res.locals.is_tablet = req.device.type === 'tablet';
        if(next) next();
    };
    app.use(is_tablet);
    var is_tv = function(req, res, next) {
        check_request(req);
        res.locals.is_tv = req.device.type === 'tv';
        if(next) next();
    };
    app.use(is_tv);
    var device_type = function(req, res, next) {
        check_request(req);
        res.locals.device_type = req.device.type;
        if(next) next();
    };
    app.use(device_type);
};