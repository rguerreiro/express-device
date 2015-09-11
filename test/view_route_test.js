var app = require('./app/app'),
    request = require('supertest');

describe('app', function () {
    describe('GET /', function () {
        it('should render with default layout.ejs', function (done) {
            request(app)
                .get('/')
                .expect(200)
                .expect('<html><head><title>express-device for phone</title></head><body><h1>index</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET /no-layout', function () {
        it('should render with no layout', function (done) {
            request(app)
                .get('/no-layout')
                .expect(200)
                .expect('<h1>index</h1>')
                .end(done);
        });
    });
    
    describe('GET /no-layout from phone', function () {
        it('should render with no layout', function (done) {
            request(app)
                .get('/no-layout')
                .set('User-Agent', 'iPhone')
                .expect(200)
                .expect('<h1>index</h1>')
                .end(done);
        });
    });
    
    describe('GET /no-layout2 from phone', function () {
        it('should render phone/index2.ejs with no layout', function (done) {
            request(app)
                .get('/no-layout2')
                .set('User-Agent', 'iPhone')
                .expect(200)
                .expect('<h1>phone</h1>')
                .end(done);
        });
    });
    
    describe('GET / from phone', function () {
        it('should render with phone/layout.ejs', function (done) {
            request(app)
                .get('/')
                .set('User-Agent', 'iPhone')
                .expect(200)
                .expect('<html><head><title>express-device for phone</title></head><body><h1>index</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET /view from phone', function () {
        it('should render view phone/index2.ejs with phone/layout.ejs', function (done) {
            request(app)
                .get('/view')
                .set('User-Agent', 'iPhone')
                .expect(200)
                .expect('<html><head><title>express-device for phone</title></head><body><h1>phone</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET / from tablet', function () {
        it('should render with tablet/layout.ejs', function (done) {
            request(app)
                .get('/')
                .set('User-Agent', 'iPad')
                .expect(200)
                .expect('<html><head><title>express-device for tablet</title></head><body><h1>index</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET /view from tablet', function () {
        it('should render view tablet/index2.ejs with tablet/layout.ejs', function (done) {
            request(app)
                .get('/view')
                .set('User-Agent', 'iPad')
                .expect(200)
                .expect('<html><head><title>express-device for tablet</title></head><body><h1>tablet</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET / from tv', function () {
        it('should render with tv/layout.ejs', function (done) {
            request(app)
                .get('/')
                .set('User-Agent', 'GoogleTV')
                .expect(200)
                .expect('<html><head><title>express-device for tv</title></head><body><h1>index</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET /view from tv', function () {
        it('should render view tv/index2.ejs with tv/layout.ejs', function (done) {
            request(app)
                .get('/view')
                .set('User-Agent', 'GoogleTV')
                .expect(200)
                .expect('<html><head><title>express-device for tv</title></head><body><h1>tv</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET / from bot', function () {
        it('should render with bot/layout.ejs', function (done) {
            request(app)
                .get('/')
                .set('User-Agent', 'Bot')
                .expect(200)
                .expect('<html><head><title>express-device for bot</title></head><body><h1>index</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET /view from bot', function () {
        it('should render view bot/index2.ejs with bot/layout.ejs', function (done) {
            request(app)
                .get('/view')
                .set('User-Agent', 'Bot')
                .expect(200)
                .expect('<html><head><title>express-device for bot</title></head><body><h1>bot</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET / from car', function () {
        it('should render with car/layout.ejs', function (done) {
            request(app)
                .get('/')
                .set('User-Agent', 'QtCarBrowser')
                .expect(200)
                .expect('<html><head><title>express-device for car</title></head><body><h1>index</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET /view from car', function () {
        it('should render view car/index2.ejs with car/layout.ejs', function (done) {
            request(app)
                .get('/view')
                .set('User-Agent', 'QtCarBrowser')
                .expect(200)
                .expect('<html><head><title>express-device for car</title></head><body><h1>car</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET /custom-layout', function () {
        it('should render with xpto/etc.ejs', function (done) {
            request(app)
                .get('/custom-layout')
                .expect(200)
                .expect('<html><head><title>custom phone</title></head><body><h1>index</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET /custom-layout from phone', function () {
        it('should render with phone/xpto/etc.ejs', function (done) {
            request(app)
                .get('/custom-layout')
                .set('User-Agent', 'iPhone')
                .expect(200)
                .expect('<html><head><title>custom phone</title></head><body><h1>index</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET /ignore from phone', function () {
        it('should render with default layout', function (done) {
            request(app)
                .get('/ignore')
                .set('User-Agent', 'iPhone')
                .expect(200)
                .expect('<html><head><title>express-device</title></head><body><h1>index</h1></body></html>')
                .end(done);
        });
    });

    describe('GET /force-desktop from phone', function () {
        it('should render with default layout for desktop', function (done) {
            request(app)
                .get('/force-desktop')
                .set('User-Agent', 'iPhone')
                .expect(200)
                .expect('<html><head><title>express-device</title></head><body><h1>index</h1></body></html>')
                .end(done);
        });
    });

    describe('GET /force-desktop from tablet', function () {
        it('should render with default layout for desktop', function (done) {
            request(app)
                .get('/force-desktop')
                .set('User-Agent', 'iPad')
                .expect(200)
                .expect('<html><head><title>express-device</title></head><body><h1>index</h1></body></html>')
                .end(done);
        });
    });

    describe('GET /force-tv from phone', function () {
        it('should render with default layout for tv', function (done) {
            request(app)
                .get('/force-tv')
                .set('User-Agent', 'iPhone')
                .expect(200)
                .expect('<html><head><title>express-device for tv</title></head><body><h1>tv</h1></body></html>')
                .end(done);
        });
    });
    
    describe('GET /force-tv from tablet', function () {
        it('should render with default layout for tv', function (done) {
            request(app)
                .get('/force-tv')
                .set('User-Agent', 'iPad')
                .expect(200)
                .expect('<html><head><title>express-device for tv</title></head><body><h1>tv</h1></body></html>')
                .end(done);
        });
    });
});