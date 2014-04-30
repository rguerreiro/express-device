var express = require('express'),
	device 	= require('../../lib/device.js'),
	app     = module.exports = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use(device.capture());
app.enableDeviceHelpers();
app.enableViewRouting({ noPartials: true });

app.get('/helpers', function(req, res, next) {
    res.render('index_helpers.ejs');
});