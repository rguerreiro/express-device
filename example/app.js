var express = require('express'),
    device  = require('../');
    
var app = express.createServer();
var port = process.env.PORT || 3000;

app.configure(function(){
    app.set('view engine', 'ejs');
    app.set('view options', { layout: false });
    app.set('views', __dirname + '/views');
    
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(device.capture());
    app.use(app.router);
});

app.enableDeviceHelpers();

app.get('/', function(req, res) {
    res.render('index', { title: 'Testing express-device' });
});

app.listen(port);

console.log("Express server listening on port %d in %s mode", port, app.settings.env);