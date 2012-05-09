var device = require('../lib/device.js'),
    base = require('./common.js');
    
exports['1.008 0.83'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; 008/0.83; http://www.80legs.com/webcrawler.html) Gecko/2008032620' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['2.ABACHOBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ABACHOBot' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['3.Accoona-AI-Agent 1.1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Accoona-AI-Agent/1.1.1 (crawler at accoona dot com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['4.Accoona-AI-Agent 1.1.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Accoona-AI-Agent/1.1.2 (aicrawler at accoonabot dot com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['5.AddSugarSpiderBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0) AddSugarSpiderBot www.idealobserver.com' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['6.Alexa Web crawler ia_archiver'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['7.Alexa Web crawler ia_archiver 8.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.0 (Windows 2.4; en-US;)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['8.Alexa Web crawler ia_archiver 8.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.1 (Windows 2000 1.9; en-US;)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['9.Alexa Web crawler ia_archiver 8.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.2 (Windows 7.6; en-US;)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['10.Alexa Web crawler ia_archiver 8.8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.8 (Windows XP 7.2; en-US;)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['11.Alexa Web crawler ia_archiver 8.8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.8 (Windows XP 3.0; en-US;)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['12.Alexa Web crawler ia_archiver 8.9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.9 (Windows NT 3.1; en-US;)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['13.Alexa Web crawler ia_archiver 8.9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.9 (Windows 3.9; en-US;)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['14.Alexa Web crawler ia_archiver 8.9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.9 (Linux 1.0; en-US;)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['15.AnyApexBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; AnyApexBot/1.0; +http://www.anyapex.com/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['16.Baiduspider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Baiduspider+(+http://www.baidu.com/search/spider_jp.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['17.Baiduspider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Baiduspider+(+http://www.baidu.com/search/spider.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['18.Baiduspider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'BaiDuSpider' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['19.BecomeBot 2.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; BecomeBot/2.3; MSIE 6.0 compatible; +http://www.become.com/site_owners.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['20.BecomeBot 3.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; BecomeBot/3.0; MSIE 6.0 compatible; +http://www.become.com/site_owners.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['21.BeslistBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; BeslistBot; nl; BeslistBot 1.0; http://www.beslist.nl/' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['22.BillyBobBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'BillyBobBot/1.0 (+http://www.billybobbot.com/crawler/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['23.Bimbot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Bimbot/1.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['24.Bingbot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['25.Bingbot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; bingbot/2.0 +http://www.bing.com/bingbot.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['26.BlitzBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; BlitzBot)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['27.BlitzBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'BlitzBOT@tricus.net (Mozilla compatible)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['28.BlitzBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'BlitzBOT@tricus.com (Mozilla compatible)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['29.boitho.com-dc 0.79'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-dc/0.79 ( http://www.boitho.com/dcbot.html )' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['30.boitho.com-dc 0.81'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-dc/0.81 ( http://www.boitho.com/dcbot.html )' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['31.boitho.com-dc 0.82'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-dc/0.82 ( http://www.boitho.com/dcbot.html )' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['32.boitho.com-dc 0.83'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-dc/0.83 ( http://www.boitho.com/dcbot.html )' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['33.boitho.com-dc 0.85'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-dc/0.85 ( http://www.boitho.com/dcbot.html )' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['34.boitho.com-robot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-robot/1.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['35.boitho.com-robot 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-robot/1.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['36.btbot 0.4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'btbot/0.4 (+http://www.btbot.com/btbot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['37.CatchBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CatchBot/1.0; +http://www.catchbot.com' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['38.CatchBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CatchBot/1.0; http://www.catchbot.com' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['39.CatchBot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'CatchBot/2.0; +http://www.catchbot.com' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['40.Charlotte 0.9t'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.11) Gecko/20080109 (Charlotte/0.9t; http://www.searchme.com/support/) (Charlotte/0.9t; http://www.searchme.com/support/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['41.Charlotte 0.9t'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.11) Gecko/20080109 (Charlotte/0.9t; http://www.searchme.com/support/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['42.Charlotte 1.0b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Charlotte/1.0b; http://www.betaspider.com/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['43.ConveraCrawler 0.9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ConveraCrawler/0.9 (+http://www.authoritativeweb.com/crawl)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['44.ConveraCrawler 0.9d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ConveraCrawler/0.9d (+http://www.authoritativeweb.com/crawl)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['45.ConveraCrawler 0.9d'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ConveraCrawler/0.9d ( http://www.authoritativeweb.com/crawl)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['46.ConveraCrawler 0.9e'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ConveraCrawler/0.9e (+http://ews.converasearch.com/crawl.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['47.cosmos 0.9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'cosmos/0.9_(robot@xyleme.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['48.Covario IDS 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Covario-IDS/1.0 (Covario; http://www.covario.com/ids; support at covario dot com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['49.DataparkSearch 4.35'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'DataparkSearch/4.35-02122005 ( http://www.dataparksearch.org/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['50.DataparkSearch 4.35'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'DataparkSearch/4.35 ( http://www.dataparksearch.org/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['51.DataparkSearch 4.36'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'DataparkSearch/4.36 ( http://www.dataparksearch.org/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['52.DataparkSearch 4.37'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'DataparkSearch/4.37-23012006 ( http://www.dataparksearch.org/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['53.DiamondBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'DiamondBot' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['54.Discobot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; discobot/1.0; +http://discoveryengine.com/discobot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['55.Dotbot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; DotBot/1.1; http://www.dotnetdotcom.org/, crawler@dotnetdotcom.org)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['56.Dotbot 1.0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'DotBot/1.0.1 (http://www.dotnetdotcom.org/#info, crawler@dotnetdotcom.org)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['57.Dotbot 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; DotBot/1.1; http://www.dotnetdotcom.org/, crawler@dotnetdotcom.org)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['58.EmeraldShield.com WebBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'EmeraldShield.com WebBot (http://www.emeraldshield.com/webbot.aspx)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['59.envolk[ITS]spider 1.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'envolk[ITS]spider/1.6 (+http://www.envolk.com/envolkspider.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['60.envolk[ITS]spider 1.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'envolk[ITS]spider/1.6 ( http://www.envolk.com/envolkspider.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['61.EsperanzaBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'EsperanzaBot(+http://www.esperanza.to/bot/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['62.Exabot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Exabot/2.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['63.FAST Enterprise Crawler 6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FAST Enterprise Crawler 6 used by Schibsted (webcrawl@schibstedsok.no)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['64.FAST Enterprise Crawler 6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FAST Enterprise Crawler 6 / Scirus scirus-crawler@fast.no; http://www.scirus.com/srsapp/contactus/' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['65.FAST Enterprise Crawler 6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FAST Enteprise Crawler/6 (www dot fastsearch dot com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['66.FAST-WebCrawler 3.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.6/FirstPage (atw-crawler at fast dot no;http://fast.no/support/crawler.asp)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['67.FAST-WebCrawler 3.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.6 (atw-crawler at fast dot no; http://fast.no/support/crawler.asp)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['68.FAST-WebCrawler 3.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.6' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['69.FAST-WebCrawler 3.7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.7/FirstPage (atw-crawler at fast dot no;http://fast.no/support/crawler.asp)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['70.FAST-WebCrawler 3.7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.7 (atw-crawler at fast dot no; http://fast.no/support/crawler.asp)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['71.FAST-WebCrawler 3.8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.8 (atw-crawler at fast dot no; http://fast.no/support/crawler.asp)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['72.FAST-WebCrawler 3.x'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.x Multimedia (mm dash crawler at fast dot no)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['73.FAST-WebCrawler 3.x'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.x Multimedia' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['74.FDSE robot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible: FDSE robot)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['75.FindLinks 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.0 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['76.FindLinks 1.0.8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.0.8 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['77.FindLinks 1.0.9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.0.9 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['78.FindLinks 1.06'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.06 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['79.FindLinks 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['80.FindLinks 1.1-a3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a3 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['81.FindLinks 1.1-a4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a4 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['82.FindLinks 1.1-a5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a5 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['83.FindLinks 1.1-a7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a7 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['84.FindLinks 1.1-a8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a8 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['85.FindLinks 1.1-a8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a8 ( http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['86.FindLinks 1.1-a9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a9 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['87.FindLinks 1.1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['88.FindLinks 1.1.1-a1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.1-a1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['89.FindLinks 1.1.1-a5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.1-a5 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['90.FindLinks 1.1.2-a5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.2-a5 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['91.FindLinks 1.1.3-beta1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['92.FindLinks 1.1.3-beta2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta2 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['93.FindLinks 1.1.3-beta4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta4 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['94.FindLinks 1.1.3-beta6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta6 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['95.FindLinks 1.1.3-beta8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta8 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['96.FindLinks 1.1.3-beta9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta9 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['97.FindLinks 1.1.4-beta1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.4-beta1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['98.FindLinks 1.1.5-beta7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.5-beta7 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['99.FindLinks 1.1.6-beta1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.6-beta1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['100.FindLinks 1.1.6-beta4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.6-beta4 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['101.FindLinks 1.1.6-beta6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.6-beta6 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['102.FindLinks 2.0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/2.0.1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['103.FurlBot Furl Search 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible FurlBot/Furl Search 2.0 (FurlBot; http://www.furl.net; wn.furlbot@looksmart.net)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['104.FyberSpider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FyberSpider (+http://www.fybersearch.com/fyberspider.php)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['105.FyberSpider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'FyberSpider' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['106.g2crawler'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'g2Crawler nobody@airmail.net' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['107.Gaisbot 3.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Gaisbot/3.0 (jerry_wu@openfind.com.tw; http://gais.cs.ccu.edu.tw/robot.php)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['108.Gaisbot 3.0+'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Gaisbot/3.0+(robot06@gais.cs.ccu.edu.tw;+http://gais.cs.ccu.edu.tw/robot.php)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['109.GalaxyBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'GalaxyBot/1.0 (http://www.galaxy.com/galaxybot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['110.genieBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'genieBot (http://64.5.245.11/faq/faq.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['111.genieBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'genieBot ((http://64.5.245.11/faq/faq.html))' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['112.Gigabot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Gigabot/1.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['113.Gigabot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Gigabot/2.0/gigablast.com/spider.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['114.Gigabot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Gigabot/2.0 (http://www.gigablast.com/spider.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['115.Gigabot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Gigabot/2.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['116.Gigabot 3.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Gigabot/3.0 (http://www.gigablast.com/spider.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['117.Girafabot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322; Girafabot [girafa.com])' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['118.Girafabot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 4.0; Girafabot; girafabot at girafa dot com; http://www.girafa.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['119.Girafabot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; Girafabot; girafabot at girafa dot com; http://www.girafa.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['120.Googlebot 2.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['121.Googlebot 2.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Googlebot/2.1 (+http://www.googlebot.com/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['122.Googlebot 2.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['123.Googlebot-Image 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Googlebot-Image/1.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['124.GurujiBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 GurujiBot/1.0 (+http://www.guruji.com/en/WebmasterFAQ.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['125.GurujiBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 GurujiBot/1.0 ( http://www.guruji.com/en/WebmasterFAQ.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['126.GurujiBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; GurujiBot/1.0; +http://www.guruji.com/en/WebmasterFAQ.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['127.GurujiBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'GurujiBot/1.0 (+http://www.guruji.com/WebmasterFAQ.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['128.GurujiBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'GurujiBot/1.0 (+http://www.guruji.com/en/WebmasterFAQ.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['129.HappyFunBot 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'HappyFunBot/1.1 ( http://www.happyfunsearch.com/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['130.hl_ftien_spider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'hl_ftien_spider' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['131.hl_ftien_spider 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'hl_ftien_spider_v1.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['132.Holmes 3.12.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'holmes/3.12.1 (http://morfeo.centrum.cz/bot)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['133.Holmes 3.12.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'holmes/3.12.2 (http://morfeo.centrum.cz/bot)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['134.Holmes 3.12.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'holmes/3.12.3 (http://morfeo.centrum.cz/bot)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['135.Holmes 3.12.4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'holmes/3.12.4 (http://morfeo.centrum.cz/bot)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['136.iaskspider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'iaskspider' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['137.iaskspider 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'iaskspider/2.0(+http://iask.com/help/help_index.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['138.iCCrawler'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'iCCrawler (http://www.iccenter.net/bot.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['139.ichiro 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ichiro/2.0+(http://help.goo.ne.jp/door/crawler.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['140.ichiro 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ichiro/2.0 (http://help.goo.ne.jp/door/crawler.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['141.ichiro 3.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ichiro/3.0 (http://help.goo.ne.jp/door/crawler.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['142.ichiro 4.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ichiro/4.0 (http://help.goo.ne.jp/door/crawler.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['143.IRLbot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'IRLbot/2.0 (compatible; MSIE 6.0; http://irl.cs.tamu.edu/crawler)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['144.IRLbot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'IRLbot/2.0 (+http://irl.cs.tamu.edu/crawler)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['145.IRLbot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'IRLbot/2.0 ( http://irl.cs.tamu.edu/crawler)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['146.IRLbot 3.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'IRLbot/3.0 (compatible; MSIE 6.0; http://irl.cs.tamu.edu/crawler/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['147.IRLbot 3.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'IRLbot/3.0 (compatible; MSIE 6.0; http://irl.cs.tamu.edu/crawler)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['148.IssueCrawler'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'IssueCrawler' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['149.Jaxified Bot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Jaxified Bot (+http://www.jaxified.com/crawler/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['150.Jyxobot 1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Jyxobot/1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['151.KoepaBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; KoepaBot BETA; http://www.koepa.nl/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['152.LapozzBot 1.4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'LapozzBot/1.4 (+http://robot.lapozz.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['153.Larbin'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_test nobody@airmail.etn' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['154.Larbin'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_test (nobody@airmail.etn)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['155.Larbin'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'LARBIN-EXPERIMENTAL efp@gmx.net' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['156.Larbin 2.3.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 tangyi858@163.com' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['157.Larbin 2.3.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 ltaa_web_crawler@groupes.epfl.ch' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['158.Larbin 2.3.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 larbin2.6.3@unspecified.mail' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['159.Larbin 2.3.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 gqnmgsp@ruc.edu.cn' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['160.Larbin 2.3.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 ghary@sohu.com' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['161.Larbin 2.3.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 capveg@cs.umd.edu' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['162.Larbin 2.5.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.5.0 (larbin2.5.0@unspecified.mail)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['163.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 vitalbox1@hotmail.com' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['164.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 pierre@micro-fun.ch' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['165.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 listonATccDOTgatechDOTedu' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['166.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 larbin@correa.org' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['167.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 larbin2.6.2@unspecified.mail' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['168.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 kalou@kalou.net' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['169.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 dthunen@princeton.edu' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['170.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 (vitalbox1@hotmail.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['171.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 (pierre@micro-fun.ch)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['172.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 (larbin@correa.org)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['173.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 (larbin2.6.2@unspecified.mail)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['174.Larbin 2.6.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.1 larbin2.6.1@unspecified.mail' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['175.Larbin 2.6.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 zumesun@hotmail.com' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['176.Larbin 2.6.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 (wgao@genieknows.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['177.Larbin 2.6.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 (ltaa_web_crawler@groupes.epfl.ch)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['178.Larbin 2.6.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 (larbin@behner.org)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['179.Larbin 2.6.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 (larbin2.6.3@unspecified.mail)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['180.Larbin 2.6.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'larbin_xy250 larbin2.6.3@unspecified.mail' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['181.Larbin 5.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 larbin@unspecified.mail' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['182.LDSpider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ldspider (http://code.google.com/p/ldspider/wiki/Robots)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['183.LexxeBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'LexxeBot/1.0 (lexxebot@lexxe.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['184.Linguee Bot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Linguee Bot (http://www.linguee.com/bot; bot@linguee.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['185.lmspider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'lmspider lmspider@scansoft.com' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['186.lmspider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'lmspider (lmspider@scansoft.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['187.Mediapartners-Google 2.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mediapartners-Google/2.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['188.MJ12bot 1.0.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MJ12bot/v1.0.5 (http://majestic12.co.uk/bot.php?+)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['189.MJ12bot 1.0.6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MJ12bot/v1.0.6 (http://majestic12.co.uk/bot.php?+)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['190.MJ12bot 1.0.7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MJ12bot/v1.0.7 (http://majestic12.co.uk/bot.php?+)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['191.MJ12bot 1.0.8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MJ12bot/v1.0.8 (http://majestic12.co.uk/bot.php?+)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['192.MJ12bot 1.2.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MJ12bot/v1.2.3; http://www.majestic12.co.uk/bot.php?+)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['193.MJ12bot 1.2.4'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MJ12bot/v1.2.4; http://www.majestic12.co.uk/bot.php?+)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['194.MojeekBot 0.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MojeekBot/0.2 (archi; http://www.mojeek.com/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['195.MojeekBot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MojeekBot/2.0; http://www.mojeek.com/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['196.Moreoverbot 5.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Moreoverbot/5.00 (+http://www.moreover.com; webmaster@moreover.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['197.Moreoverbot 5.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Moreoverbot/5.00 (+http://www.moreover.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['198.Moreoverbot 5.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Moreoverbot/5.1 ( http://w.moreover.com; webmaster@moreover.com) Mozilla/5.0' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['199.Morning Paper 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Morning Paper 1.0 (robots.txt compliant!)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['200.msnbot 0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MSNBOT/0.1 (http://search.msn.com/msnbot.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['201.msnbot 0.11'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/0.11 ( http://search.msn.com/msnbot.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['202.msnbot 0.9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/0.9 (+http://search.msn.com/msnbot.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['203.msnbot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/1.0 (+http://search.msn.com/msnbot.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['204.msnbot 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/1.1 (+http://search.msn.com/msnbot.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['205.msnbot 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/1.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['206.msnbot 2.0b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/2.0b' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['207.msnbot 2.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/2.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['208.MSRBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MSRBOT (http://research.microsoft.com/research/sv/msrbot/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['209.MSRBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'MSRBOT' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['210.mxbot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; mxbot/1.0; +http://www.chainn.com/mxbot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['211.mxbot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; mxbot/1.0; http://www.chainn.com/mxbot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['212.NetResearchServer 2.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NetResearchServer/2.5(loopimprovements.com/robot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['213.NetResearchServer 2.7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NetResearchServer/2.7(loopimprovements.com/robot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['214.NetResearchServer 2.8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NetResearchServer/2.8(loopimprovements.com/robot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['215.NetResearchServer 3.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NetResearchServer/3.5(loopimprovements.com/robot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['216.NetResearchServer 4.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NetResearchServer/4.0(loopimprovements.com/robot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['217.NetSeer Crawler 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; NetSeer crawler/2.0; +http://www.netseer.com/crawler.html; crawler@netseer.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['218.NewGator 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NewsGator/2.0 Bot (http://www.newsgator.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['219.NewsGator 2.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NewsGator/2.5 (http://www.newsgator.com; Microsoft Windows NT 5.1.2600.0; .NET CLR 1.1.4322.2032)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['220.NG-Search 0.86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NG-Search/0.86 (+http://www.ng-search.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['221.NG-Search 0.86'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NG-Search/0.86 ( http://www.ng-search.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['222.NG-Search 0.9.8'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NG-Search/0.9.8 (http://www.ng-search.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['223.nicebot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'nicebot' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['224.noxtrumbot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'noxtrumbot/1.0 (crawler@noxtrum.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['225.Nusearch Spider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Nusearch Spider (www.nusearch.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['226.Nusearch Spider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'nuSearch Spider (compatible; MSIE 4.01; Windows NT)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['227.NutchCVS 0.05'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.05 (Nutch; http://www.nutch.org/docs/en/bot.html; nutch-agent@lists.sourceforge.net)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['228.NutchCVS 0.06-dev'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.06-dev (Nutch; http://www.nutch.org/docs/en/bot.html; nutch-agent@lists.sourceforge.net)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['229.NutchCVS 0.06-dev'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.06-dev (Nutch; http://www.nutch.org/docs/en/bot.html; jagdeepssandhu@hotmail.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['230.NutchCVS 0.7'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.7 (Nutch; http://lucene.apache.org/nutch/bot.html; nutch-agent@lucene.apache.org)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['231.NutchCVS 0.7.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.7.1 (Nutch; http://lucene.apache.org/nutch/bot.html; nutch-agent@lucene.apache.org)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['232.NutchCVS 0.7.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.7.1 (Nutch running at UW; http://crawlers.cs.washington.edu/; sycrawl@cs.washington.edu)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['233.NutchCVS 0.7.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.7.2 (Nutch; http://lucene.apache.org/nutch/bot.html; nutch-agent@lucene.apache.org)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['234.NutchCVS 0.8-dev'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.8-dev (Nutch; http://lucene.apache.org/nutch/bot.html; nutch-agent@lucene.apache.org)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['235.obot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; obot)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['236.omgilibot 0.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'omgilibot/0.3 +http://www.omgili.com/Crawler.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['237.omgilibot 0.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'omgilibot/0.3 http://www.omgili.com/Crawler.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['238.OmniExplorer_Bot 4.32'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/4.32 (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['239.OmniExplorer_Bot 4.80'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/4.80 (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['240.OmniExplorer_Bot 5.01'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/5.01 (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['241.OmniExplorer_Bot 5.20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/5.20 (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['242.OmniExplorer_Bot 5.25'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/5.25 (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['243.OmniExplorer_Bot 5.28'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/5.28 (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['244.OmniExplorer_Bot 5.91c'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/5.91c (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['245.OmniExplorer_Bot 6.47'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.47 (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['246.OmniExplorer_Bot 6.60'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.60 (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['247.OmniExplorer_Bot 6.62'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.62 (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['248.OmniExplorer_Bot 6.63b'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.63b (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['249.OmniExplorer_Bot 6.65a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.65a (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['250.OmniExplorer_Bot 6.70'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.70 (+http://www.omni-explorer.com) WorldIndexer' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['251.OOZBOT 0.17'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OOZBOT/0.17 (--; http://www.setooz.com/oozbot.html; pvvpr at iiit dot ac dot in)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['252.OOZBOT 0.20'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'OOZBOT/0.20 ( -- ; http://www.setooz.com/oozbot.html ; agentname at setooz dot_com )' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['253.Orbiter'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Orbiter (+http://www.dailyorbit.com/bot.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['254.PageBitesHyperBot 600'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PageBitesHyperBot/600 (http://www.pagebites.com/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['255.Peew 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Peew/1.0; http://www.peew.de/crawler/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['256.polybot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'polybot 1.0 (http://cis.poly.edu/polybot/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['257.PostPost 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'PostPost/1.0 (+http://postpo.st/crawlers)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['258.psbot 0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'psbot/0.1 (+http://www.picsearch.com/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['259.Radian6'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'radian6_default_(www.radian6.com/crawler)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['260.RAMPyBot 0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'RAMPyBot - www.giveRAMP.com/0.1 (RAMPyBot - www.giveRAMP.com; http://www.giveramp.com/bot.html; support@giveRAMP.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['261.RufusBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'RufusBot (Rufus Web Miner; http://64.124.122.252/feedback.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['262.SandCrawler'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SandCrawler - Compatibility Testing' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['263.Seekbot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Seekbot/1.0 (http://www.seekbot.net/bot.html) RobotsTxtFetcher/1.2' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['264.Seekbot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Seekbot/1.0 (http://www.seekbot.net/bot.html) HTTPFetcher/2.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['265.Seekbot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Seekbot/1.0 (http://www.seekbot.net/bot.html) HTTPFetcher/0.3' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['266.Seekbot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Seekbot/1.0 (http://www.seekbot.net/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['267.Sensis Web Crawler'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sensis Web Crawler (search_comments\\at\\sensis\\dot\\com\\dot\\au)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['268.SEOChat::Bot 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0) SEOChat::Bot v1.1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['269.SeznamBot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SeznamBot/2.0 (+http://fulltext.seznam.cz/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['270.SeznamBot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SeznamBot/2.0 (+http://fulltext.sblog.cz/robot/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['271.Shim-Crawler'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Shim-Crawler(Mozilla-compatible; http://www.logos.ic.i.u-tokyo.ac.jp/crawler/; crawl@logos.ic.i.u-tokyo.ac.jp)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['272.Shim-Crawler'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Shim-Crawler' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['273.ShopWiki 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'ShopWiki/1.0 ( +http://www.shopwiki.com/wiki/Help:Bot)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['274.Shoula robot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible: Shoula robot)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['275.SiteBot 0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; SiteBot/0.1; +http://www.sitebot.org/robot/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['276.SiteBot 0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; SiteBot/0.1; http://www.sitebot.org/robot/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['277.Snappy 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Snappy/1.1 ( http://www.urltrends.com/ )' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['278.sogou spider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'sogou spider' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['279.Sosospider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Sosospider+(+http://help.soso.com/webspider.htm)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['280.Speedy Spider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) Speedy Spider' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['281.Speedy Spider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (http://www.entireweb.com/about/search_tech/speedy_spider/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['282.Speedy Spider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (http://www.entireweb.com/about/search_tech/speedyspider/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['283.Speedy Spider'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (http://www.entireweb.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['284.Speedy Spider 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (Entireweb; Beta/1.0; http://www.entireweb.com/about/search_tech/speedyspider/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['285.Speedy Spider 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (Beta/1.0; www.entireweb.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['286.Speedy Spider 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (Entireweb; Beta/1.1; http://www.entireweb.com/about/search_tech/speedyspider/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['287.Speedy Spider 1.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (Entireweb; Beta/1.2; http://www.entireweb.com/about/search_tech/speedyspider/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['288.Speedy Spider 1.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (Entireweb; Beta/1.3; http://www.entireweb.com/about/search_tech/speedyspider/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['289.Speedy Spider 5.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) Speedy Spider (http://www.entireweb.com/about/search_tech/speedy_spider/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['290.Speedy Spider 5.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Speedy Spider; http://www.entireweb.com/about/search_tech/speedy_spider/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['291.Suggybot 0.01a'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; suggybot v0.01a, http://blog.suggy.com/was-ist-suggy/suggy-webcrawler/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['292.SurveyBot 2.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SurveyBot/2.3+(Whois+Source)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['293.SurveyBot 2.3'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SurveyBot/2.3 (Whois Source)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['294.SynooBot 0.7.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'SynooBot/0.7.1 (SynooBot; http://www.synoo.de/bot.html; webmaster@synoo.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['295.Teoma'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/2.0 (compatible; Ask Jeeves/Teoma; +http://sp.ask.com/docs/about/tech_crawling.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['296.Teoma'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/2.0 (compatible; Ask Jeeves/Teoma; +http://about.ask.com/en/docs/about/webmasters.shtml)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['297.Teoma'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/2.0 (compatible; Ask Jeeves/Teoma)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['298.TerrawizBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TerrawizBot/1.0 (+http://www.terrawiz.com/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['299.TheSuBot 0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TheSuBot/0.1 (www.thesubot.de)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['300.TheSuBot 0.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TheSuBot/0.2 (www.thesubot.de)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['301.Thumbnail.CZ 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Thumbnail.CZ robot 1.1 (http://thumbnail.cz/why-no-robots-txt.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['302.TinEye'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TinEye' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['303.TinEye 1.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TinEye/1.1 (http://tineye.com/crawler.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['304.TurnitinBot 1.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/1.5 http://www.turnitin.com/robot/crawlerinfo.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['305.TurnitinBot 1.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/1.5 (http://www.turnitin.com/robot/crawlerinfo.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['306.TurnitinBot 1.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/1.5 http://www.turnitin.com/robot/crawlerinfo.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['307.TurnitinBot 1.5'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/1.5 (http://www.turnitin.com/robot/crawlerinfo.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['308.TurnitinBot 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/2.0 http://www.turnitin.com/robot/crawlerinfo.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['309.TurnitinBot 2.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/2.1 (http://www.turnitin.com/robot/crawlerinfo.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['310.TweetedTimes Bot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; TweetedTimes Bot/1.0; http://tweetedtimes.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['311.TwengaBot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'TwengaBot' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['312.Urlfilebot 2.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Urlfilebot/2.2; +http://urlfile.com/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['313.Vagabondo 2.0 MT'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/3.0 (Vagabondo/2.0 MT; webcrawler@NOSPAMexperimental.net; http://aanmelden.ilse.nl/?aanmeld_mode=webhints)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['314.Vagabondo 2.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Vagabondo/2.1; webcrawler at wise-guys dot nl; http://webagent.wise-guys.nl/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['315.Vagabondo 2.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Vagabondo/2.2; webcrawler at wise-guys dot nl; http://webagent.wise-guys.nl/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['316.Vagabondo 4.0Beta'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Vagabondo/4.0Beta; webcrawler at wise-guys dot nl; http://webagent.wise-guys.nl/; http://www.wise-guys.nl/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['317.VoilaBot 1.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Windows 95) VoilaBot BETA 1.2 (http://www.voila.com/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['318.Vortex 1.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'VORTEX/1.2 ( http://marty.anstey.ca/robots/vortex/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['319.Vortex 2.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vortex/2.2 (+http://marty.anstey.ca/robots/vortex/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['320.Vortex 2.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Vortex/2.2 ( http://marty.anstey.ca/robots/vortex/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['321.voyager 2.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'voyager/2.0 (http://www.kosmix.com/crawler.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['322.Websquash'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Websquash.com (Add url robot)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['323.wf84'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'http://www.almaden.ibm.com/cs/crawler [wf84]' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['324.WoFindeIch Robot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WoFindeIch Robot 1.0(+http://www.search.wofindeich.com/robot.php)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['325.WoFindeIch Robot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WoFindeIch Robot 1.0( http://www.search.wofindeich.com/robot.php)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['326.WomlpeFactory 0.1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'WomlpeFactory/0.1 (+http://www.Womple.com/bot.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['327.Xaldon_WebSpider 2.0.b1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xaldon_WebSpider/2.0.b1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['328.Xaldon_WebSpider 2.0.b1'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Xaldon_WebSpider/2.0.b1' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['329.yacy'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (x86 Windows XP 5.1; java 1.6.0_12; Europe/de) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['330.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (x86 Windows XP 5.1; java 1.6.0_11; Europe/de) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['331.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (x86 Windows XP 5.1; java 1.6.0; Europe/de) http://yacy.net/yacy/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['332.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (x86 Windows 2000 5.0; java 1.6.0_16; Europe/de) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['333.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (ppc Mac OS X 10.5.2; java 1.5.0_13; Europe/de) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['334.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (ppc Mac OS X 10.4.10; java 1.5.0_07; Europe/de) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['335.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Mac OS X 10.5.7; java 1.5.0_16; Europe/de) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['336.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.9-023stab046.2-smp; java 1.6.0_05; Europe/en) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['337.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.8-022stab070.5-enterprise; java 1.4.2-03; Europe/en) yacy.net' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['338.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.31-16-generic; java 1.6.0_15; Europe/en) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['339.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.26-2-686; java 1.6.0_0; Europe/en) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['340.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.24-28-generic; java 1.6.0_20; Europe/en) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['341.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.24-24-generic; java 1.6.0_07; Europe/en) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['342.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.24-23-generic; java 1.6.0_16; Europe/en) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['343.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.23; java 1.6.0_17; Europe/en) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['344.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.23; java 1.6.0_04; Europe/en) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['345.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.22-14-generic; java 1.6.0_03; Europe/de) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['346.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (amd64 Windows 7 6.1; java 1.6.0_17; Europe/de) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['347.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (amd64 Linux 2.6.28-18-generic; java 1.6.0_0; Europe/en) http://yacy.net/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['348.yacybot'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (amd64 Linux 2.6.16-2-amd64-k8-smp; java 1.5.0_10; Europe/en) http://yacy.net/yacy/bot.html' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['349.Yahoo! Slurp'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['350.Yahoo! Slurp China'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Yahoo! Slurp China; http://misc.yahoo.com.cn/help.html)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['351.YahooSeeker 1.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'YahooSeeker/1.2 (compatible; Mozilla 4.0; MSIE 5.5; yahooseeker at yahoo-inc dot com ; http://help.yahoo.com/help/us/shop/merchant/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['352.YahooSeeker-Testing 3.9'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'YahooSeeker-Testing/v3.9 (compatible; Mozilla 4.0; MSIE 5.5; http://search.yahoo.com/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['353.YandexBot 3.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['354.Yasaklibot 1.2'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Yasaklibot/v1.2 (http://www.Yasakli.com/bot.php)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['355.Yeti 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Yeti/1.0 (NHN Corp.; http://help.naver.com/robots/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['356.Yeti 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Yeti/1.0 (+http://help.naver.com/robots/)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['357.YodaoBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; YodaoBot/1.0; http://www.yodao.com/help/webmaster/spider/; )' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['358.YoudaoBot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; YoudaoBot/1.0; http://www.youdao.com/help/webmaster/spider/; )' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['359.Zealbot 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Zealbot 1.0)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['360.zspider 0.9-dev'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'zspider/0.9-dev http://feedback.redkolibri.com/' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['361.ZyBorg 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 DLC (wn.zyborg@looksmart.net; http://www.WISEnutbot.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['362.ZyBorg 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 Dead Link Checker (wn.zyborg@looksmart.net; http://www.WISEnutbot.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['363.ZyBorg 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 Dead Link Checker (wn.dlc@looksmart.net; http://www.WISEnutbot.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['364.ZyBorg 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 (wn.zyborg@looksmart.net; http://www.WISEnutbot.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['365.ZyBorg 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 (wn-16.zyborg@looksmart.net; http://www.WISEnutbot.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};
exports['366.ZyBorg 1.0'] = function(test) {
    var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 (wn-14.zyborg@looksmart.net; http://www.WISEnutbot.com)' } });
    test.equal(parser.get_type(), 'desktop');
    test.done();
};

base.run_test(__filename);