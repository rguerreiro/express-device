/* Based on Categorizr (https://github.com/bjankord/Categorizr) by Brett Jankord (http://www.brettjankord.com) */
var path        = require('path'),
    partials    = require('express-partials'),
    device      = require('device'),
    useragent   = require('useragent');

var defaultOptions = {
    emptyUserAgentDeviceType: 'desktop',
    unknownUserAgentDeviceType: 'phone',
    botUserAgentDeviceType: 'bot',
    parseUserAgent: false
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
    
    self.make_sure_parser_was_executed = function () {
        if (self.options.parseUserAgent === true && !self.useragent)
            self.useragent = useragent.lookup(self.user_agent());
    };
    
    self.get_name = function () {
        self.make_sure_parser_was_executed();
        if (self.useragent)
            return self.useragent.device.family;
        return '';
    };

    self.get_type = function () {
        var ua = self.user_agent();

        if (!ua || ua === '') {
            if (req.headers['cloudfront-is-mobile-viewer'] === 'true') return 'phone';
            if (req.headers['cloudfront-is-tablet-viewer'] === 'true') return 'tablet';
            if (req.headers['cloudfront-is-desktop-viewer'] === 'true') return 'desktop';
            // No user agent.
            return self.options.emptyUserAgentDeviceType;
        }
        var type = device.useragent_is(ua, { unknownDeviceType: self.options.unknownUserAgentDeviceType });

        if (type === 'bot') {
            return self.options.botUserAgentDeviceType;
        } else {
            return type;
        }
    };
}
exports.Parser = DeviceParser;

exports.capture = function (options) {
    return function (req, res, next) {
        var parser = new DeviceParser(req, options);
        req.device = req.device || {};
        
        req.device.parser = parser; // to expose the device parser object to the running app
        req.device.type = parser.get_type();
        req.device.name = parser.get_name();

        if (next) return next();
    };
};

exports.enableViewRouting = function (app, options) {
    if(!options || options.noPartials === false)
        app.use(partials());
    app.use(function (req, res, next) {
        var _render = res.render.bind(res);
        res.render = function(name, options, fn) {
            var layout = options && options.layout;
            var ignore = (options && options.ignoreViewRouting) || false;
            var deviceType = req.device.type;
            
            if (options && options.forceType) { 
                deviceType = options.forceType;
            }

            if(ignore === false) {
                if (layout === true || layout === undefined) {
                    var defaultLayout = path.join(deviceType, 'layout');
                    options = options || {};
                    if (check(req, res, defaultLayout)) options.layout = defaultLayout;
                }
                else if(typeof layout === "string") {
                    var deviceLayout = path.join(deviceType, layout);
                    if (check(req, res, deviceLayout)) options.layout = deviceLayout;
                }

                var deviceView = path.join(deviceType, name);
                if (check(req, res, deviceView)) name = deviceView;
            }

            _render(name, options, fn);
        };

        if(next) return next();
    });
};

exports.enableDeviceHelpers = function (app) {

    var check_request = function (req, res, next) {
        if (typeof req.device === 'undefined') {
            next(new Error('Must enable the device capture by using app.use(device.capture())'));
        } else {
            next();
        }
    };
    app.use(check_request);

    var check_device = function (device) {
        return function (req, res, next) {
            res.locals['is_' + device] = req.device.type === device;
            if (next) {
                next();
            }
        }
    }

    app.use(check_device('desktop'));
    app.use(check_device('phone'));
    app.use(check_device('tablet'));
    app.use(check_device('tv'));
    app.use(check_device('bot'));

    var is_mobile = function (req, res, next) {
        res.locals.is_mobile = res.locals.is_phone || res.locals.is_tablet;
        if (next) {
            next();
        }
    };
    app.use(is_mobile);

    var device_type = function (req, res, next) {
        res.locals.device_type = req.device.type;
        if (next) {
            next();
        }
    };
    app.use(device_type);
    var device_name = function (req, res, next) {
        res.locals.device_name = req.device.name;
        if (next) {
            next();
        }
    };
    app.use(device_name);
};

function check (req, res, name) {
    var ext = path.extname(name) || '.' + (res.app.get('view engine') || 'html');
    var root = req.app.get('views') || process.cwd() + '/views';
    var dir = path.dirname(name) == '.' ? root : path.resolve(root, path.dirname(name));
    return partials.lookup(dir, path.basename(name, ext), ext);
}