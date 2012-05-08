var express = require('express'),
    device  = require('../');
    
var app = express.createServer();

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

app.listen(process.env.PORT);

console.log("Express server listening on port %d in %s mode", process.env.PORT, app.settings.env);