var express = require('express'),
    HTTPSServer = express.HTTPSServer,
    HTTPServer = express.HTTPServer;

exports.version = '0.0.1';
exports.namespace = 'express';

exports.capture = function () {
    return function (req, res, next) {
        req.device = req.device || {};
        
        // todo: parse user-agent to get desktop | phone | tablet 
        req.device.type = 'tablet';
        
        if(next) return next();
    };
};

HTTPServer.prototype.enableDeviceHelpers =
HTTPSServer.prototype.enableDeviceHelpers = function() {
    var app = this.app || this;
    var check_request = function(req) {
        if (typeof req.device === 'undefined')
            throw new Error('Must enable the device capture by using app.use(device.capture())');
        
        return true;
    };
    
    var helpers = {
        is_desktop: function(req, res) {
            check_request(req);
            return req.device.type === 'desktop';
        },
        is_mobile: function(req, res) {
            check_request(req);
            return req.device.type === 'phone' || req.device.type === 'tablet';
        },
        is_phone: function(req, res) {
            check_request(req);
            return req.device.type === 'phone';
        },
        is_tablet: function(req, res) {
            check_request(req);
            return req.device.type === 'tablet';
        },
        device_type: function(req, res) {
            check_request(req);
            return req.device.type;
        }
    };
    app.dynamicHelpers(helpers);
};