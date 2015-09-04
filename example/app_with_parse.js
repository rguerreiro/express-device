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
app.use(device.capture({ parseUserAgent: true }));

device.enableDeviceHelpers(app);
device.enableViewRouting(app);

// routes...
app.get('/', function(req, res) {
    res.render('parse', { title: 'Testing express-device with parsing', layout: false });
});

app.listen(port);

console.log("Express server listening on port %d in %s mode", port, app.settings.env);