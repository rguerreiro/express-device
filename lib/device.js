/* Based on Categorizr (https://github.com/bjankord/Categorizr) by Brett Jankord (http://www.brettjankord.com) */

'use strict';

var path = require('path'),
    device = require('device'),
    partials = require('express-partials');

function check(req, res, name) {
    var ext = path.extname(name) || '.' + (res.app.get('view engine') || 'html');
    var root = req.app.get('views') || process.cwd() + '/views';
    var dir = path.dirname(name) == '.' ? root : path.resolve(root, path.dirname(name));
    return partials.lookup(dir, path.basename(name, ext), ext);
}

exports.version = require('../package').version;
exports.namespace = 'express';
exports.Parser = device.Parser;

// should this be on 'device' instead?
function customCheck(req, mydevice) {
    var useragent = req.headers['user-agent'];

    if (!useragent || useragent === '') {
        if (req.headers['cloudfront-is-mobile-viewer'] === 'true') return 'phone';
        if (req.headers['cloudfront-is-tablet-viewer'] === 'true') return 'tablet';
        if (req.headers['cloudfront-is-desktop-viewer'] === 'true') return 'desktop';
        // No user agent.
        return mydevice.parser.options.emptyUserAgentDeviceType;
    }

    return mydevice.type;
};
exports.customCheck = customCheck;

function capture(options) {
    return function (req, res, next) {
        var useragent = req.headers['user-agent'];
        var mydevice = device(useragent, options);
        
        req.device = req.device || {};
        req.device.parser = mydevice.parser; // to expose the device parser object to the running app
        req.device.type = customCheck(req, mydevice);
        req.device.name = mydevice.model;
        
        if (next) return next();
    };
};
exports.capture = capture;

function enableViewRouting(app, options) {
    if (!options || options.noPartials === false)
        app.use(partials());

    app.use(function (req, res, next) {
        var _render = res.render.bind(res);
        res.render = function (name, options, fn) {
            var layout = options && options.layout;
            var ignore = (options && options.ignoreViewRouting) || false;
            var deviceType = req.device.type;
            
            if (options && options.forceType) {
                deviceType = options.forceType;
            }
            
            if (ignore === false) {
                if (layout === true || layout === undefined) {
                    var defaultLayout = path.join(deviceType, 'layout');
                    options = options || {};
                    if (check(req, res, defaultLayout)) options.layout = defaultLayout;
                }
                else if (typeof layout === "string") {
                    var deviceLayout = path.join(deviceType, layout);
                    if (check(req, res, deviceLayout)) options.layout = deviceLayout;
                }
                
                var deviceView = path.join(deviceType, name);
                if (check(req, res, deviceView)) name = deviceView;
            }
            
            _render(name, options, fn);
        };
        
        if (next) return next();
    });
};
exports.enableViewRouting = enableViewRouting;

function enableDeviceHelpers(app) {
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
    app.use(check_device('car'));
    
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
exports.enableDeviceHelpers = enableDeviceHelpers;