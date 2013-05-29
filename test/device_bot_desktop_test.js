var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {
    describe('1.008 0.83',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; 008/0.83; http://www.80legs.com/webcrawler.html) Gecko/2008032620' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('2.ABACHOBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ABACHOBot' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('3.Accoona-AI-Agent 1.1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Accoona-AI-Agent/1.1.1 (crawler at accoona dot com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('4.Accoona-AI-Agent 1.1.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Accoona-AI-Agent/1.1.2 (aicrawler at accoonabot dot com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('5.AddSugarSpiderBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0) AddSugarSpiderBot www.idealobserver.com' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('6.Alexa Web crawler ia_archiver',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('7.Alexa Web crawler ia_archiver 8.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.0 (Windows 2.4; en-US;)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('8.Alexa Web crawler ia_archiver 8.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.1 (Windows 2000 1.9; en-US;)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('9.Alexa Web crawler ia_archiver 8.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.2 (Windows 7.6; en-US;)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('10.Alexa Web crawler ia_archiver 8.8',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.8 (Windows XP 7.2; en-US;)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('11.Alexa Web crawler ia_archiver 8.8',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.8 (Windows XP 3.0; en-US;)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('12.Alexa Web crawler ia_archiver 8.9',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.9 (Windows NT 3.1; en-US;)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('13.Alexa Web crawler ia_archiver 8.9',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.9 (Windows 3.9; en-US;)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('14.Alexa Web crawler ia_archiver 8.9',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ia_archiver/8.9 (Linux 1.0; en-US;)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('15.AnyApexBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; AnyApexBot/1.0; +http://www.anyapex.com/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('16.Baiduspider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Baiduspider+(+http://www.baidu.com/search/spider_jp.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('17.Baiduspider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Baiduspider+(+http://www.baidu.com/search/spider.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('18.Baiduspider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BaiDuSpider' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('19.BecomeBot 2.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; BecomeBot/2.3; MSIE 6.0 compatible; +http://www.become.com/site_owners.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('20.BecomeBot 3.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; BecomeBot/3.0; MSIE 6.0 compatible; +http://www.become.com/site_owners.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('21.BeslistBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; BeslistBot; nl; BeslistBot 1.0; http://www.beslist.nl/' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('22.BillyBobBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BillyBobBot/1.0 (+http://www.billybobbot.com/crawler/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('23.Bimbot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Bimbot/1.0' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('24.Bingbot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('25.Bingbot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; bingbot/2.0 +http://www.bing.com/bingbot.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('26.BlitzBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; BlitzBot)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('27.BlitzBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlitzBOT@tricus.net (Mozilla compatible)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('28.BlitzBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'BlitzBOT@tricus.com (Mozilla compatible)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('29.boitho.com-dc 0.79',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-dc/0.79 ( http://www.boitho.com/dcbot.html )' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('30.boitho.com-dc 0.81',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-dc/0.81 ( http://www.boitho.com/dcbot.html )' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('31.boitho.com-dc 0.82',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-dc/0.82 ( http://www.boitho.com/dcbot.html )' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('32.boitho.com-dc 0.83',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-dc/0.83 ( http://www.boitho.com/dcbot.html )' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('33.boitho.com-dc 0.85',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-dc/0.85 ( http://www.boitho.com/dcbot.html )' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('34.boitho.com-robot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-robot/1.0' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('35.boitho.com-robot 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'boitho.com-robot/1.1' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('36.btbot 0.4',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'btbot/0.4 (+http://www.btbot.com/btbot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('37.CatchBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CatchBot/1.0; +http://www.catchbot.com' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('38.CatchBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CatchBot/1.0; http://www.catchbot.com' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('39.CatchBot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'CatchBot/2.0; +http://www.catchbot.com' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('40.Charlotte 0.9t',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.11) Gecko/20080109 (Charlotte/0.9t; http://www.searchme.com/support/) (Charlotte/0.9t; http://www.searchme.com/support/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('41.Charlotte 0.9t',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.11) Gecko/20080109 (Charlotte/0.9t; http://www.searchme.com/support/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('42.Charlotte 1.0b',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Charlotte/1.0b; http://www.betaspider.com/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('43.ConveraCrawler 0.9',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ConveraCrawler/0.9 (+http://www.authoritativeweb.com/crawl)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('44.ConveraCrawler 0.9d',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ConveraCrawler/0.9d (+http://www.authoritativeweb.com/crawl)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('45.ConveraCrawler 0.9d',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ConveraCrawler/0.9d ( http://www.authoritativeweb.com/crawl)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('46.ConveraCrawler 0.9e',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ConveraCrawler/0.9e (+http://ews.converasearch.com/crawl.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('47.cosmos 0.9',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'cosmos/0.9_(robot@xyleme.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('48.Covario IDS 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Covario-IDS/1.0 (Covario; http://www.covario.com/ids; support at covario dot com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('49.DataparkSearch 4.35',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DataparkSearch/4.35-02122005 ( http://www.dataparksearch.org/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('50.DataparkSearch 4.35',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DataparkSearch/4.35 ( http://www.dataparksearch.org/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('51.DataparkSearch 4.36',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DataparkSearch/4.36 ( http://www.dataparksearch.org/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('52.DataparkSearch 4.37',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DataparkSearch/4.37-23012006 ( http://www.dataparksearch.org/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('53.DiamondBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DiamondBot' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('54.Discobot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; discobot/1.0; +http://discoveryengine.com/discobot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('55.Dotbot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; DotBot/1.1; http://www.dotnetdotcom.org/, crawler@dotnetdotcom.org)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('56.Dotbot 1.0.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'DotBot/1.0.1 (http://www.dotnetdotcom.org/#info, crawler@dotnetdotcom.org)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('57.Dotbot 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; DotBot/1.1; http://www.dotnetdotcom.org/, crawler@dotnetdotcom.org)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('58.EmeraldShield.com WebBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EmeraldShield.com WebBot (http://www.emeraldshield.com/webbot.aspx)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('59.envolk[ITS]spider 1.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'envolk[ITS]spider/1.6 (+http://www.envolk.com/envolkspider.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('60.envolk[ITS]spider 1.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'envolk[ITS]spider/1.6 ( http://www.envolk.com/envolkspider.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('61.EsperanzaBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'EsperanzaBot(+http://www.esperanza.to/bot/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('62.Exabot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Exabot/2.0' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('63.FAST Enterprise Crawler 6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FAST Enterprise Crawler 6 used by Schibsted (webcrawl@schibstedsok.no)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('64.FAST Enterprise Crawler 6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FAST Enterprise Crawler 6 / Scirus scirus-crawler@fast.no; http://www.scirus.com/srsapp/contactus/' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('65.FAST Enterprise Crawler 6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FAST Enteprise Crawler/6 (www dot fastsearch dot com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('66.FAST-WebCrawler 3.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.6/FirstPage (atw-crawler at fast dot no;http://fast.no/support/crawler.asp)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('67.FAST-WebCrawler 3.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.6 (atw-crawler at fast dot no; http://fast.no/support/crawler.asp)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('68.FAST-WebCrawler 3.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.6' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('69.FAST-WebCrawler 3.7',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.7/FirstPage (atw-crawler at fast dot no;http://fast.no/support/crawler.asp)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('70.FAST-WebCrawler 3.7',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.7 (atw-crawler at fast dot no; http://fast.no/support/crawler.asp)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('71.FAST-WebCrawler 3.8',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.8 (atw-crawler at fast dot no; http://fast.no/support/crawler.asp)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('72.FAST-WebCrawler 3.x',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.x Multimedia (mm dash crawler at fast dot no)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('73.FAST-WebCrawler 3.x',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FAST-WebCrawler/3.x Multimedia' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('74.FDSE robot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible: FDSE robot)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('75.FindLinks 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.0 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('76.FindLinks 1.0.8',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.0.8 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('77.FindLinks 1.0.9',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.0.9 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('78.FindLinks 1.06',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.06 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('79.FindLinks 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('80.FindLinks 1.1-a3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a3 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('81.FindLinks 1.1-a4',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a4 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('82.FindLinks 1.1-a5',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a5 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('83.FindLinks 1.1-a7',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a7 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('84.FindLinks 1.1-a8',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a8 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('85.FindLinks 1.1-a8',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a8 ( http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('86.FindLinks 1.1-a9',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1-a9 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('87.FindLinks 1.1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('88.FindLinks 1.1.1-a1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.1-a1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('89.FindLinks 1.1.1-a5',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.1-a5 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('90.FindLinks 1.1.2-a5',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.2-a5 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('91.FindLinks 1.1.3-beta1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('92.FindLinks 1.1.3-beta2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta2 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('93.FindLinks 1.1.3-beta4',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta4 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('94.FindLinks 1.1.3-beta6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta6 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('95.FindLinks 1.1.3-beta8',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta8 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('96.FindLinks 1.1.3-beta9',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.3-beta9 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('97.FindLinks 1.1.4-beta1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.4-beta1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('98.FindLinks 1.1.5-beta7',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.5-beta7 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('99.FindLinks 1.1.6-beta1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.6-beta1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('100.FindLinks 1.1.6-beta4',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.6-beta4 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('101.FindLinks 1.1.6-beta6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/1.1.6-beta6 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('102.FindLinks 2.0.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'findlinks/2.0.1 (+http://wortschatz.uni-leipzig.de/findlinks/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('103.FurlBot Furl Search 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible FurlBot/Furl Search 2.0 (FurlBot; http://www.furl.net; wn.furlbot@looksmart.net)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('104.FyberSpider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FyberSpider (+http://www.fybersearch.com/fyberspider.php)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('105.FyberSpider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'FyberSpider' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('106.g2crawler',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'g2Crawler nobody@airmail.net' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('107.Gaisbot 3.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Gaisbot/3.0 (jerry_wu@openfind.com.tw; http://gais.cs.ccu.edu.tw/robot.php)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('108.Gaisbot 3.0+',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Gaisbot/3.0+(robot06@gais.cs.ccu.edu.tw;+http://gais.cs.ccu.edu.tw/robot.php)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('109.GalaxyBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GalaxyBot/1.0 (http://www.galaxy.com/galaxybot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('110.genieBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'genieBot (http://64.5.245.11/faq/faq.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('111.genieBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'genieBot ((http://64.5.245.11/faq/faq.html))' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('112.Gigabot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Gigabot/1.0' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('113.Gigabot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Gigabot/2.0/gigablast.com/spider.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('114.Gigabot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Gigabot/2.0 (http://www.gigablast.com/spider.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('115.Gigabot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Gigabot/2.0' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('116.Gigabot 3.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Gigabot/3.0 (http://www.gigablast.com/spider.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('117.Girafabot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322; Girafabot [girafa.com])' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('118.Girafabot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 4.0; Girafabot; girafabot at girafa dot com; http://www.girafa.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('119.Girafabot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; Girafabot; girafabot at girafa dot com; http://www.girafa.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('120.Googlebot 2.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('121.Googlebot 2.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Googlebot/2.1 (+http://www.googlebot.com/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('122.Googlebot 2.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('123.Googlebot-Image 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Googlebot-Image/1.0' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('124.GurujiBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 GurujiBot/1.0 (+http://www.guruji.com/en/WebmasterFAQ.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('125.GurujiBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 GurujiBot/1.0 ( http://www.guruji.com/en/WebmasterFAQ.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('126.GurujiBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; GurujiBot/1.0; +http://www.guruji.com/en/WebmasterFAQ.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('127.GurujiBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GurujiBot/1.0 (+http://www.guruji.com/WebmasterFAQ.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('128.GurujiBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'GurujiBot/1.0 (+http://www.guruji.com/en/WebmasterFAQ.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('129.HappyFunBot 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'HappyFunBot/1.1 ( http://www.happyfunsearch.com/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('130.hl_ftien_spider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'hl_ftien_spider' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('131.hl_ftien_spider 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'hl_ftien_spider_v1.1' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('132.Holmes 3.12.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'holmes/3.12.1 (http://morfeo.centrum.cz/bot)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('133.Holmes 3.12.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'holmes/3.12.2 (http://morfeo.centrum.cz/bot)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('134.Holmes 3.12.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'holmes/3.12.3 (http://morfeo.centrum.cz/bot)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('135.Holmes 3.12.4',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'holmes/3.12.4 (http://morfeo.centrum.cz/bot)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('136.iaskspider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'iaskspider' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('137.iaskspider 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'iaskspider/2.0(+http://iask.com/help/help_index.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('138.iCCrawler',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'iCCrawler (http://www.iccenter.net/bot.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('139.ichiro 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ichiro/2.0+(http://help.goo.ne.jp/door/crawler.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('140.ichiro 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ichiro/2.0 (http://help.goo.ne.jp/door/crawler.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('141.ichiro 3.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ichiro/3.0 (http://help.goo.ne.jp/door/crawler.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('142.ichiro 4.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ichiro/4.0 (http://help.goo.ne.jp/door/crawler.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('143.IRLbot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IRLbot/2.0 (compatible; MSIE 6.0; http://irl.cs.tamu.edu/crawler)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('144.IRLbot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IRLbot/2.0 (+http://irl.cs.tamu.edu/crawler)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('145.IRLbot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IRLbot/2.0 ( http://irl.cs.tamu.edu/crawler)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('146.IRLbot 3.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IRLbot/3.0 (compatible; MSIE 6.0; http://irl.cs.tamu.edu/crawler/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('147.IRLbot 3.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IRLbot/3.0 (compatible; MSIE 6.0; http://irl.cs.tamu.edu/crawler)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('148.IssueCrawler',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'IssueCrawler' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('149.Jaxified Bot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Jaxified Bot (+http://www.jaxified.com/crawler/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('150.Jyxobot 1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Jyxobot/1' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('151.KoepaBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; KoepaBot BETA; http://www.koepa.nl/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('152.LapozzBot 1.4',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LapozzBot/1.4 (+http://robot.lapozz.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('153.Larbin',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_test nobody@airmail.etn' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('154.Larbin',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_test (nobody@airmail.etn)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('155.Larbin',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LARBIN-EXPERIMENTAL efp@gmx.net' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('156.Larbin 2.3.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 tangyi858@163.com' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('157.Larbin 2.3.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 ltaa_web_crawler@groupes.epfl.ch' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('158.Larbin 2.3.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 larbin2.6.3@unspecified.mail' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('159.Larbin 2.3.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 gqnmgsp@ruc.edu.cn' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('160.Larbin 2.3.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 ghary@sohu.com' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('161.Larbin 2.3.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 capveg@cs.umd.edu' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('162.Larbin 2.5.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.5.0 (larbin2.5.0@unspecified.mail)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('163.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 vitalbox1@hotmail.com' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('164.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 pierre@micro-fun.ch' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('165.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 listonATccDOTgatechDOTedu' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('166.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 larbin@correa.org' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('167.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 larbin2.6.2@unspecified.mail' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('168.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 kalou@kalou.net' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('169.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 dthunen@princeton.edu' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('170.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 (vitalbox1@hotmail.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('171.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 (pierre@micro-fun.ch)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('172.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 (larbin@correa.org)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('173.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.2 (larbin2.6.2@unspecified.mail)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('174.Larbin 2.6.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.1 larbin2.6.1@unspecified.mail' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('175.Larbin 2.6.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 zumesun@hotmail.com' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('176.Larbin 2.6.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 (wgao@genieknows.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('177.Larbin 2.6.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 (ltaa_web_crawler@groupes.epfl.ch)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('178.Larbin 2.6.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 (larbin@behner.org)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('179.Larbin 2.6.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_2.6.3 (larbin2.6.3@unspecified.mail)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('180.Larbin 2.6.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'larbin_xy250 larbin2.6.3@unspecified.mail' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('181.Larbin 5.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 larbin@unspecified.mail' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('182.LDSpider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ldspider (http://code.google.com/p/ldspider/wiki/Robots)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('183.LexxeBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'LexxeBot/1.0 (lexxebot@lexxe.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('184.Linguee Bot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Linguee Bot (http://www.linguee.com/bot; bot@linguee.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('185.lmspider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'lmspider lmspider@scansoft.com' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('186.lmspider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'lmspider (lmspider@scansoft.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('187.Mediapartners-Google 2.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mediapartners-Google/2.1' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('188.MJ12bot 1.0.5',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MJ12bot/v1.0.5 (http://majestic12.co.uk/bot.php?+)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('189.MJ12bot 1.0.6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MJ12bot/v1.0.6 (http://majestic12.co.uk/bot.php?+)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('190.MJ12bot 1.0.7',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MJ12bot/v1.0.7 (http://majestic12.co.uk/bot.php?+)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('191.MJ12bot 1.0.8',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MJ12bot/v1.0.8 (http://majestic12.co.uk/bot.php?+)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('192.MJ12bot 1.2.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MJ12bot/v1.2.3; http://www.majestic12.co.uk/bot.php?+)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('193.MJ12bot 1.2.4',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MJ12bot/v1.2.4; http://www.majestic12.co.uk/bot.php?+)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('194.MojeekBot 0.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MojeekBot/0.2 (archi; http://www.mojeek.com/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('195.MojeekBot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; MojeekBot/2.0; http://www.mojeek.com/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('196.Moreoverbot 5.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Moreoverbot/5.00 (+http://www.moreover.com; webmaster@moreover.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('197.Moreoverbot 5.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Moreoverbot/5.00 (+http://www.moreover.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('198.Moreoverbot 5.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Moreoverbot/5.1 ( http://w.moreover.com; webmaster@moreover.com) Mozilla/5.0' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('199.Morning Paper 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Morning Paper 1.0 (robots.txt compliant!)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('200.msnbot 0.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MSNBOT/0.1 (http://search.msn.com/msnbot.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('201.msnbot 0.11',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/0.11 ( http://search.msn.com/msnbot.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('202.msnbot 0.9',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/0.9 (+http://search.msn.com/msnbot.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('203.msnbot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/1.0 (+http://search.msn.com/msnbot.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('204.msnbot 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/1.1 (+http://search.msn.com/msnbot.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('205.msnbot 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/1.1' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('206.msnbot 2.0b',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/2.0b' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('207.msnbot 2.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'msnbot/2.1' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('208.MSRBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MSRBOT (http://research.microsoft.com/research/sv/msrbot/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('209.MSRBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'MSRBOT' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('210.mxbot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; mxbot/1.0; +http://www.chainn.com/mxbot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('211.mxbot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; mxbot/1.0; http://www.chainn.com/mxbot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('212.NetResearchServer 2.5',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NetResearchServer/2.5(loopimprovements.com/robot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('213.NetResearchServer 2.7',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NetResearchServer/2.7(loopimprovements.com/robot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('214.NetResearchServer 2.8',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NetResearchServer/2.8(loopimprovements.com/robot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('215.NetResearchServer 3.5',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NetResearchServer/3.5(loopimprovements.com/robot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('216.NetResearchServer 4.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NetResearchServer/4.0(loopimprovements.com/robot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('217.NetSeer Crawler 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; NetSeer crawler/2.0; +http://www.netseer.com/crawler.html; crawler@netseer.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('218.NewGator 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NewsGator/2.0 Bot (http://www.newsgator.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('219.NewsGator 2.5',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NewsGator/2.5 (http://www.newsgator.com; Microsoft Windows NT 5.1.2600.0; .NET CLR 1.1.4322.2032)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('220.NG-Search 0.86',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NG-Search/0.86 (+http://www.ng-search.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('221.NG-Search 0.86',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NG-Search/0.86 ( http://www.ng-search.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('222.NG-Search 0.9.8',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NG-Search/0.9.8 (http://www.ng-search.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('223.nicebot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'nicebot' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('224.noxtrumbot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'noxtrumbot/1.0 (crawler@noxtrum.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('225.Nusearch Spider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Nusearch Spider (www.nusearch.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('226.Nusearch Spider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'nuSearch Spider (compatible; MSIE 4.01; Windows NT)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('227.NutchCVS 0.05',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.05 (Nutch; http://www.nutch.org/docs/en/bot.html; nutch-agent@lists.sourceforge.net)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('228.NutchCVS 0.06-dev',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.06-dev (Nutch; http://www.nutch.org/docs/en/bot.html; nutch-agent@lists.sourceforge.net)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('229.NutchCVS 0.06-dev',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.06-dev (Nutch; http://www.nutch.org/docs/en/bot.html; jagdeepssandhu@hotmail.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('230.NutchCVS 0.7',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.7 (Nutch; http://lucene.apache.org/nutch/bot.html; nutch-agent@lucene.apache.org)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('231.NutchCVS 0.7.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.7.1 (Nutch; http://lucene.apache.org/nutch/bot.html; nutch-agent@lucene.apache.org)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('232.NutchCVS 0.7.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.7.1 (Nutch running at UW; http://crawlers.cs.washington.edu/; sycrawl@cs.washington.edu)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('233.NutchCVS 0.7.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.7.2 (Nutch; http://lucene.apache.org/nutch/bot.html; nutch-agent@lucene.apache.org)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('234.NutchCVS 0.8-dev',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'NutchCVS/0.8-dev (Nutch; http://lucene.apache.org/nutch/bot.html; nutch-agent@lucene.apache.org)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('235.obot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; obot)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('236.omgilibot 0.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'omgilibot/0.3 +http://www.omgili.com/Crawler.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('237.omgilibot 0.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'omgilibot/0.3 http://www.omgili.com/Crawler.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('238.OmniExplorer_Bot 4.32',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/4.32 (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('239.OmniExplorer_Bot 4.80',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/4.80 (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('240.OmniExplorer_Bot 5.01',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/5.01 (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('241.OmniExplorer_Bot 5.20',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/5.20 (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('242.OmniExplorer_Bot 5.25',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/5.25 (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('243.OmniExplorer_Bot 5.28',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/5.28 (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('244.OmniExplorer_Bot 5.91c',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/5.91c (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('245.OmniExplorer_Bot 6.47',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.47 (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('246.OmniExplorer_Bot 6.60',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.60 (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('247.OmniExplorer_Bot 6.62',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.62 (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('248.OmniExplorer_Bot 6.63b',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.63b (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('249.OmniExplorer_Bot 6.65a',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.65a (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('250.OmniExplorer_Bot 6.70',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OmniExplorer_Bot/6.70 (+http://www.omni-explorer.com) WorldIndexer' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('251.OOZBOT 0.17',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OOZBOT/0.17 (--; http://www.setooz.com/oozbot.html; pvvpr at iiit dot ac dot in)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('252.OOZBOT 0.20',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'OOZBOT/0.20 ( -- ; http://www.setooz.com/oozbot.html ; agentname at setooz dot_com )' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('253.Orbiter',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Orbiter (+http://www.dailyorbit.com/bot.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('254.PageBitesHyperBot 600',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PageBitesHyperBot/600 (http://www.pagebites.com/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('255.Peew 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Peew/1.0; http://www.peew.de/crawler/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('256.polybot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'polybot 1.0 (http://cis.poly.edu/polybot/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('257.PostPost 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'PostPost/1.0 (+http://postpo.st/crawlers)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('258.psbot 0.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'psbot/0.1 (+http://www.picsearch.com/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('259.Radian6',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'radian6_default_(www.radian6.com/crawler)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('260.RAMPyBot 0.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'RAMPyBot - www.giveRAMP.com/0.1 (RAMPyBot - www.giveRAMP.com; http://www.giveramp.com/bot.html; support@giveRAMP.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('261.RufusBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'RufusBot (Rufus Web Miner; http://64.124.122.252/feedback.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('262.SandCrawler',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SandCrawler - Compatibility Testing' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('263.Seekbot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Seekbot/1.0 (http://www.seekbot.net/bot.html) RobotsTxtFetcher/1.2' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('264.Seekbot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Seekbot/1.0 (http://www.seekbot.net/bot.html) HTTPFetcher/2.1' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('265.Seekbot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Seekbot/1.0 (http://www.seekbot.net/bot.html) HTTPFetcher/0.3' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('266.Seekbot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Seekbot/1.0 (http://www.seekbot.net/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('267.Sensis Web Crawler',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sensis Web Crawler (search_comments\\at\\sensis\\dot\\com\\dot\\au)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('268.SEOChat::Bot 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0) SEOChat::Bot v1.1' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('269.SeznamBot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SeznamBot/2.0 (+http://fulltext.seznam.cz/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('270.SeznamBot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SeznamBot/2.0 (+http://fulltext.sblog.cz/robot/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('271.Shim-Crawler',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Shim-Crawler(Mozilla-compatible; http://www.logos.ic.i.u-tokyo.ac.jp/crawler/; crawl@logos.ic.i.u-tokyo.ac.jp)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('272.Shim-Crawler',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Shim-Crawler' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('273.ShopWiki 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'ShopWiki/1.0 ( +http://www.shopwiki.com/wiki/Help:Bot)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('274.Shoula robot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible: Shoula robot)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('275.SiteBot 0.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; SiteBot/0.1; +http://www.sitebot.org/robot/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('276.SiteBot 0.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; SiteBot/0.1; http://www.sitebot.org/robot/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('277.Snappy 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Snappy/1.1 ( http://www.urltrends.com/ )' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('278.sogou spider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'sogou spider' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('279.Sosospider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Sosospider+(+http://help.soso.com/webspider.htm)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('280.Speedy Spider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) Speedy Spider' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('281.Speedy Spider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (http://www.entireweb.com/about/search_tech/speedy_spider/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('282.Speedy Spider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (http://www.entireweb.com/about/search_tech/speedyspider/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('283.Speedy Spider',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (http://www.entireweb.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('284.Speedy Spider 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (Entireweb; Beta/1.0; http://www.entireweb.com/about/search_tech/speedyspider/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('285.Speedy Spider 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (Beta/1.0; www.entireweb.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('286.Speedy Spider 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (Entireweb; Beta/1.1; http://www.entireweb.com/about/search_tech/speedyspider/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('287.Speedy Spider 1.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (Entireweb; Beta/1.2; http://www.entireweb.com/about/search_tech/speedyspider/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('288.Speedy Spider 1.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Speedy Spider (Entireweb; Beta/1.3; http://www.entireweb.com/about/search_tech/speedyspider/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('289.Speedy Spider 5.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) Speedy Spider (http://www.entireweb.com/about/search_tech/speedy_spider/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('290.Speedy Spider 5.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Speedy Spider; http://www.entireweb.com/about/search_tech/speedy_spider/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('291.Suggybot 0.01a',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; suggybot v0.01a, http://blog.suggy.com/was-ist-suggy/suggy-webcrawler/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('292.SurveyBot 2.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SurveyBot/2.3+(Whois+Source)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('293.SurveyBot 2.3',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SurveyBot/2.3 (Whois Source)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('294.SynooBot 0.7.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'SynooBot/0.7.1 (SynooBot; http://www.synoo.de/bot.html; webmaster@synoo.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('295.Teoma',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/2.0 (compatible; Ask Jeeves/Teoma; +http://sp.ask.com/docs/about/tech_crawling.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('296.Teoma',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/2.0 (compatible; Ask Jeeves/Teoma; +http://about.ask.com/en/docs/about/webmasters.shtml)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('297.Teoma',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/2.0 (compatible; Ask Jeeves/Teoma)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('298.TerrawizBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TerrawizBot/1.0 (+http://www.terrawiz.com/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('299.TheSuBot 0.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TheSuBot/0.1 (www.thesubot.de)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('300.TheSuBot 0.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TheSuBot/0.2 (www.thesubot.de)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('301.Thumbnail.CZ 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Thumbnail.CZ robot 1.1 (http://thumbnail.cz/why-no-robots-txt.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('302.TinEye',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TinEye' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('303.TinEye 1.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TinEye/1.1 (http://tineye.com/crawler.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('304.TurnitinBot 1.5',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/1.5 http://www.turnitin.com/robot/crawlerinfo.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('305.TurnitinBot 1.5',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/1.5 (http://www.turnitin.com/robot/crawlerinfo.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('306.TurnitinBot 1.5',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/1.5 http://www.turnitin.com/robot/crawlerinfo.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('307.TurnitinBot 1.5',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/1.5 (http://www.turnitin.com/robot/crawlerinfo.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('308.TurnitinBot 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/2.0 http://www.turnitin.com/robot/crawlerinfo.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('309.TurnitinBot 2.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TurnitinBot/2.1 (http://www.turnitin.com/robot/crawlerinfo.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('310.TweetedTimes Bot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; TweetedTimes Bot/1.0; http://tweetedtimes.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('311.TwengaBot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'TwengaBot' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('312.Urlfilebot 2.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Urlfilebot/2.2; +http://urlfile.com/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('313.Vagabondo 2.0 MT',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/3.0 (Vagabondo/2.0 MT; webcrawler@NOSPAMexperimental.net; http://aanmelden.ilse.nl/?aanmeld_mode=webhints)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('314.Vagabondo 2.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Vagabondo/2.1; webcrawler at wise-guys dot nl; http://webagent.wise-guys.nl/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('315.Vagabondo 2.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Vagabondo/2.2; webcrawler at wise-guys dot nl; http://webagent.wise-guys.nl/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('316.Vagabondo 4.0Beta',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Vagabondo/4.0Beta; webcrawler at wise-guys dot nl; http://webagent.wise-guys.nl/; http://www.wise-guys.nl/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('317.VoilaBot 1.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Windows 95) VoilaBot BETA 1.2 (http://www.voila.com/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('318.Vortex 1.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'VORTEX/1.2 ( http://marty.anstey.ca/robots/vortex/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('319.Vortex 2.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vortex/2.2 (+http://marty.anstey.ca/robots/vortex/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('320.Vortex 2.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Vortex/2.2 ( http://marty.anstey.ca/robots/vortex/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('321.voyager 2.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'voyager/2.0 (http://www.kosmix.com/crawler.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('322.Websquash',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Websquash.com (Add url robot)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('323.wf84',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'http://www.almaden.ibm.com/cs/crawler [wf84]' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('324.WoFindeIch Robot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WoFindeIch Robot 1.0(+http://www.search.wofindeich.com/robot.php)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('325.WoFindeIch Robot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WoFindeIch Robot 1.0( http://www.search.wofindeich.com/robot.php)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('326.WomlpeFactory 0.1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'WomlpeFactory/0.1 (+http://www.Womple.com/bot.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('327.Xaldon_WebSpider 2.0.b1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xaldon_WebSpider/2.0.b1' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('328.Xaldon_WebSpider 2.0.b1',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Xaldon_WebSpider/2.0.b1' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('329.yacy',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (x86 Windows XP 5.1; java 1.6.0_12; Europe/de) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('330.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (x86 Windows XP 5.1; java 1.6.0_11; Europe/de) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('331.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (x86 Windows XP 5.1; java 1.6.0; Europe/de) http://yacy.net/yacy/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('332.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (x86 Windows 2000 5.0; java 1.6.0_16; Europe/de) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('333.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (ppc Mac OS X 10.5.2; java 1.5.0_13; Europe/de) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('334.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (ppc Mac OS X 10.4.10; java 1.5.0_07; Europe/de) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('335.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Mac OS X 10.5.7; java 1.5.0_16; Europe/de) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('336.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.9-023stab046.2-smp; java 1.6.0_05; Europe/en) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('337.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.8-022stab070.5-enterprise; java 1.4.2-03; Europe/en) yacy.net' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('338.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.31-16-generic; java 1.6.0_15; Europe/en) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('339.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.26-2-686; java 1.6.0_0; Europe/en) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('340.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.24-28-generic; java 1.6.0_20; Europe/en) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('341.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.24-24-generic; java 1.6.0_07; Europe/en) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('342.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.24-23-generic; java 1.6.0_16; Europe/en) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('343.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.23; java 1.6.0_17; Europe/en) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('344.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.23; java 1.6.0_04; Europe/en) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('345.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (i386 Linux 2.6.22-14-generic; java 1.6.0_03; Europe/de) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('346.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (amd64 Windows 7 6.1; java 1.6.0_17; Europe/de) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('347.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (amd64 Linux 2.6.28-18-generic; java 1.6.0_0; Europe/en) http://yacy.net/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('348.yacybot',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'yacybot (amd64 Linux 2.6.16-2-amd64-k8-smp; java 1.5.0_10; Europe/en) http://yacy.net/yacy/bot.html' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('349.Yahoo! Slurp',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('350.Yahoo! Slurp China',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; Yahoo! Slurp China; http://misc.yahoo.com.cn/help.html)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('351.YahooSeeker 1.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'YahooSeeker/1.2 (compatible; Mozilla 4.0; MSIE 5.5; yahooseeker at yahoo-inc dot com ; http://help.yahoo.com/help/us/shop/merchant/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('352.YahooSeeker-Testing 3.9',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'YahooSeeker-Testing/v3.9 (compatible; Mozilla 4.0; MSIE 5.5; http://search.yahoo.com/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('353.YandexBot 3.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('354.Yasaklibot 1.2',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Yasaklibot/v1.2 (http://www.Yasakli.com/bot.php)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('355.Yeti 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Yeti/1.0 (NHN Corp.; http://help.naver.com/robots/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('356.Yeti 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Yeti/1.0 (+http://help.naver.com/robots/)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('357.YodaoBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; YodaoBot/1.0; http://www.yodao.com/help/webmaster/spider/; )' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('358.YoudaoBot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/5.0 (compatible; YoudaoBot/1.0; http://www.youdao.com/help/webmaster/spider/; )' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('359.Zealbot 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 (compatible; Zealbot 1.0)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('360.zspider 0.9-dev',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'zspider/0.9-dev http://feedback.redkolibri.com/' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('361.ZyBorg 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 DLC (wn.zyborg@looksmart.net; http://www.WISEnutbot.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('362.ZyBorg 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 Dead Link Checker (wn.zyborg@looksmart.net; http://www.WISEnutbot.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('363.ZyBorg 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 Dead Link Checker (wn.dlc@looksmart.net; http://www.WISEnutbot.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('364.ZyBorg 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 (wn.zyborg@looksmart.net; http://www.WISEnutbot.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('365.ZyBorg 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 (wn-16.zyborg@looksmart.net; http://www.WISEnutbot.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('366.ZyBorg 1.0',function(){
        it('should get device type bot', function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'Mozilla/4.0 compatible ZyBorg/1.0 (wn-14.zyborg@looksmart.net; http://www.WISEnutbot.com)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
    describe('367.Facebook 1.1',function(){
        it('should get device type bot',function(){
            var parser = new device.Parser({ headers: { 'user-agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)' } });
            assert.equal(parser.get_type(), 'bot');
        });
    });
});