var device = require('../lib/device.js'),
    base = require('./common.js');
    
exports['1.Accoona-AI-Agent 1.1.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Accoona-AI-Agent/1.1.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['2.Arachmo'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Arachmo)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['3.B-l-i-t-z-B-O-T'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; B-l-i-t-z-B-O-T)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['4.Cerberian Drtrs 3.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Cerberian Drtrs Version-3.2-Build-1)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['5.Cerberian Drtrs 3.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Cerberian Drtrs Version-3.2-Build-0)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['6.Charlotte 0.9t'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Charlotte/0.9t; http://www.searchme.com/support/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['7.Charlotte 0.9t'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Charlotte/0.9t; +http://www.searchme.com/support/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['8.Charlotte 1.0b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Charlotte/1.0b; http://www.searchme.com/support/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['9.Charlotte 1.0t'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Charlotte/1.0t; http://www.searchme.com/support/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['10.Charlotte 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Charlotte/1.1; http://www.searchme.com/support/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['11.Holmes 3.9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'holmes/3.9 (someurl.co.cc)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['12.htdig 3.1.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'htdig/3.1.5 (webmaster@online-medien.de)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['13.htdig 3.1.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'htdig/3.1.5 (root@localhost)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['14.htdig 3.1.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'htdig/3.1.5 (infosys@storm.rmi.org)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['15.htdig 3.1.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'htdig/3.1.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['16.htdig 3.1.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'htdig/3.1.6 (unconfigured@htdig.searchengine.maintainer)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['17.htdig 3.1.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'htdig/3.1.6 (mathieu.peltier@inrialpes.fr)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['18.ichiro 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ichiro/2.0 (ichiro@nttr.co.jp)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['19.igdeSpyder'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'igdeSpyder (compatible; igde.ru; +http://igde.ru/doc/tech.html)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['20.L.webis 0.87'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'L.webis/0.87 (http://webalgo.iit.cnr.it/index.php?pg=lwebis)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['21.LinkWalker'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'LinkWalker' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['22.LinkWalker 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'LinkWalker/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['23.lwp-trivial 1.33'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'lwp-trivial/1.33' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['24.lwp-trivial 1.35'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'lwp-trivial/1.35' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['25.lwp-trivial 1.36'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'lwp-trivial/1.36' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['26.lwp-trivial 1.38'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'lwp-trivial/1.38' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['27.lwp-trivial 1.41'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'lwp-trivial/1.41' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['28.Mnogosearch 3.1.21'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mnogosearch-3.1.21' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['29.mogimogi 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'mogimogi/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['30.MVAClient'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MVAClient' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['31.NetResearchServer'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NetResearchServer(http://www.look.com)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['32.Nymesis 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nymesis/1.0 (http://nymesis.com)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['33.oegp 1.3.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'oegp v. 1.3.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['34.Pompos 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Pompos/1.1 http://pompos.iliad.fr' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['35.Pompos 1.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Pompos/1.2 http://pompos.iliad.fr' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['36.Pompos 1.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Pompos/1.3 http://dir.com/pompos.html' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['37.PycURL'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PycURL' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['38.PycURL 7.13.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PycURL/7.13.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['39.PycURL 7.15.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PycURL/7.15.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['40.PycURL 7.16.4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PycURL/7.16.4' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['41.PycURL 7.18.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PycURL/7.18.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['42.PycURL 7.18.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PycURL/7.18.2' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['43.PycURL 7.19.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PycURL/7.19.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['44.PycURL 7.19.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PycURL/7.19.3' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['45.PycURL 7.19.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PycURL/7.19.5' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['46.PycURL 7.19.7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PycURL/7.19.7' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['47.Qseero 1.0.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Qseero v1.0.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['48.SBIder 0.8-dev'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SBIder/0.8-dev (SBIder; http://www.sitesell.com/sbider.html; http://support.sitesell.com/contact-support.html)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['49.ScoutJet'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; ScoutJet; http://www.scoutjet.com/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['50.Scrubby 2.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Scrubby/2.1 (http://www.scrubtheweb.com/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['51.Scrubby 2.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Scrubby/2.1; +http://www.scrubtheweb.com/abs/meta-check.html)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['52.Scrubby 2.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Scrubby/2.2 (http://www.scrubtheweb.com/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['53.Scrubby 2.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Scrubby/2.2; +http://www.scrubtheweb.com/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['54.Scrubby 2.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Scrubby/2.2; http://www.scrubtheweb.com/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['55.SearchSight 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SearchSight/2.0 (http://SearchSight.com/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['56.semanticdiscovery 0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'semanticdiscovery/0.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['57.silk 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'silk/1.0 (+http://www.slider.com/silk.htm)/3.7' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['58.silk 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Silk/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['59.Sqworm 2.9.85-BETA'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sqworm/2.9.85-BETA (beta_release; 20011115-775; i686-pc-linux-gnu)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['60.StackRambler 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'StackRambler/2.0 (MSIE incompatible)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['61.StackRambler 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'StackRambler/2.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['62.truwoGPS 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'truwoGPS/1.0 (GNU/Linux; U; i686; en-US; +http://www.lan4lano.net/browser.html )' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['63.updated 0.1-beta'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'updated/0.1-beta (updated; http://www.updated.com; updated@updated.com)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['64.voyager 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'voyager/1.0' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['65.VYU2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VYU2 (GNU; OpenRISC)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['66.webcollage 1.114'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'webcollage/1.114' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['67.webcollage 1.117'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'webcollage/1.117' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['68.webcollage 1.125'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'webcollage/1.125' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['69.webcollage 1.129'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'webcollage/1.129' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['70.webcollage 1.93'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'webcollage/1.93' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['71.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacy (i386 Linux 2.6.14-1.1653_FC4smp; java 1.5.0_04; Europe/de) yacy.net' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['72.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacy (i386 Linux 2.4.20-021stab028.17.777-enterprise; java 1.4.2_08; Europe/en) yacy.net' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['73.yoogliFetchAgent 0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yoogliFetchAgent/0.1' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['74.Zao 0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Zao/0.1 (http://www.kototoi.org/zao/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};
exports['75.Zao 0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Zao/0.1 (http://www.kototoi.org/zao/)' } });
    test.equal(parser.get_type(), 'phone');
    test.done();
};

base.run_test(__filename);