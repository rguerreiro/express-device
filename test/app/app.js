var express = require('express'),
	device 	= require('../../lib/device.js'),
	app     = module.exports = express();

app.set('view engine', 'ejs');
app.set('view options', { layout: true });
app.set('views', __dirname);

app.use(device.capture());
device.enableDeviceHelpers(app);
device.enableViewRouting(app);

app.get('/', function(req, res, next) {
    res.render('index.ejs');
});

app.get('/view', function(req, res, next) {
    res.render('index2.ejs');
});

app.get('/custom-layout', function(req, res, next) {
    res.render('index.ejs', { layout: "xpto/etc" });
});

app.get('/dir-view', function(req, res, next) {
    res.render('xpto/index.ejs');
});

app.get('/no-layout', function(req, res, next) {
    res.render('index.ejs', { layout: false });
});

app.get('/no-layout2', function(req, res, next) {
    res.render('index2.ejs', { layout: false });
});

app.get('/ignore', function(req, res, next) {
    res.render('index.ejs', { ignoreViewRouting: true });
});

app.get('/force-desktop', function (req, res, next) {
    res.render('index.ejs', { forceType: 'desktop' });
});

app.get('/force-tv', function (req, res, next) {
    res.render('index2.ejs', { forceType: 'tv' });
});

app.get('/helpers', function(req, res, next) {
    res.render('index_helpers.ejs', { ignoreViewRouting: true });
});