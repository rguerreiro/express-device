var express = require('express'),
    device = require('../'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser');

var app = express();
var port = process.env.PORT || 3000;

// configuring...
app.set('view engine', 'ejs');
app.set('view options', { layout: true });
app.set('views', __dirname + '/views');

app.use(bodyParser());
app.use(methodOverride());
app.use(cookieParser());
app.use(device.capture());

device.enableDeviceHelpers(app);
device.enableViewRouting(app);

// routes...
app.get('/', function(req, res) {
    res.render('index', { title: 'Testing express-device', layout: false });
});

app.get('/2', function(req, res) {
    res.render('index2', { title: 'Testing express-device with layout' });
});

app.get('/3', function(req, res) {
    res.render('index2', { title: 'Testing express-device with layout', layout: 'xpto' });
});

app.get('/4', function(req, res) {
    res.render('index2', { title: 'Testing express-device with layout', layout: 'etc/layout' });
});

app.get('/5', function(req, res) {
    res.render('index3', { title: 'Testing express-device with layout' });
});

app.listen(port);

console.log("Express server listening on port %d in %s mode", port, app.settings.env);