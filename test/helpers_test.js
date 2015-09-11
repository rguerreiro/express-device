var app = require('./app/app'),
    request = require('supertest');

describe('app', function () {
    describe('GET /helpers', function () {
        it('should render with default layout.ejs and show phone string', function (done) {
            request(app)
	      .get('/helpers')
	      .set('User-Agent', 'iPhone')
	      .expect(200)
	      .expect('<html><head><title>express-device</title></head><body><p>phone</p></body></html>')
	      .end(done);
        });
    });
    
    describe('GET /helpers', function () {
        it('should render with default layout.ejs and show tablet string', function (done) {
            request(app)
	      .get('/helpers')
	      .set('User-Agent', 'iPad')
	      .expect(200)
	      .expect('<html><head><title>express-device</title></head><body><p>tablet</p></body></html>')
	      .end(done);
        });
    });
    
    describe('GET /helpers', function () {
        it('should render with default layout.ejs and show tv string', function (done) {
            request(app)
	      .get('/helpers')
	      .set('User-Agent', 'GoogleTV')
	      .expect(200)
	      .expect('<html><head><title>express-device</title></head><body><p>tv</p></body></html>')
	      .end(done);
        });
    });
    
    describe('GET /helpers', function () {
        it('should render with default layout.ejs and show bot string', function (done) {
            request(app)
	      .get('/helpers')
	      .set('User-Agent', 'Bot')
	      .expect(200)
	      .expect('<html><head><title>express-device</title></head><body><p>bot</p></body></html>')
	      .end(done);
        });
    });
    
    describe('GET /helpers', function () {
        it('should render with default layout.ejs and show car string', function (done) {
            request(app)
	      .get('/helpers')
	      .set('User-Agent', 'QtCarBrowser')
	      .expect(200)
	      .expect('<html><head><title>express-device</title></head><body><p>car</p></body></html>')
	      .end(done);
        });
    });
    
    describe('GET /helpers', function () {
        it('should render with default layout.ejs and show desktop string', function (done) {
            request(app)
	      .get('/helpers')
	      .set('User-Agent', 'Windows NT')
	      .expect(200)
	      .expect('<html><head><title>express-device</title></head><body><p>desktop</p></body></html>')
	      .end(done);
        });
    });
    
    describe('GET /helpers', function () {
        it('should render with default layout.ejs and show phone string', function (done) {
            request(app)
	      .get('/helpers')
	      .expect(200)
	      .expect('<html><head><title>express-device</title></head><body><p>phone</p></body></html>')
	      .end(done);
        });
    });
});