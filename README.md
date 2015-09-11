# express-device [![Build Status](https://secure.travis-ci.org/rguerreiro/express-device.png?branch=master)](http://travis-ci.org/rguerreiro/express-device) [![NPM version](https://badge.fury.io/js/express-device.svg)](http://badge.fury.io/js/express-device)

Case you're interested only on the device type detection based on the useragent string and don't need all the [express](http://expressjs.com/) related stuff, then use the `device` package ([https://www.npmjs.com/package/device](https://www.npmjs.com/package/device)) which was refactored from `express-device` for that purpose.

## why express-device?

I'm really into node.js and lately I've been playing a lot with it. One of the steps I wanted to take in my learning path was to build a node.js module and published it to npm.

Then I had an idea: why not develop a server side library to mimic the behaviour that Twitter's [Bootstrap](http://twitter.github.com/bootstrap/scaffolding.html#responsive) has in order to identify where a browser is running on a desktop, tablet or phone. This is great for a [responsive design](http://en.wikipedia.org/wiki/Responsive_Web_Design), but on the server side.

## how it came to be?

First I started to search how I could parse the user-agent string and how to differentiate tablets from smartphones. I found a couple good references, such as:
- http://www.useragentstring.com/pages/useragentstring.php
- http://detectmobilebrowsers.com/
- http://www.quirksmode.org/js/detect.html
- http://googlewebmastercentral.blogspot.pt/2011/03/mo-better-to-also-detect-mobile-user.html
- http://www.htmlgoodies.com/beyond/webmaster/toolbox/article.php/3888106/How-Can-I-Detect-the-iPhone--iPads-User-Agent.htm
- http://windowsteamblog.com/windows_phone/b/wpdev/archive/2011/08/29/introducing-the-ie9-on-windows-phone-mango-user-agent-string.aspx

But then I came across with Brett Jankord's [blog](http://www.brettjankord.com). He developed [Categorizr](http://www.brettjankord.com/2012/01/16/categorizr-a-modern-device-detection-script/) which is what I was trying to do for node.js but for PHP. He has the code hosted at [Github](https://github.com/bjankord/Categorizr). So, express-device parsing methods (to extract device type) are based on Categorizr. Also I've used all of his [user-agent strings compilation](http://brettjankord.com/categorizr/categorizr-results.php) to build my unit tests.

## how to use it?

From v0.4.0 `express-device` only works with [express](http://expressjs.com/) >= v4.x.x and [node](https://nodejs.org) >= v0.10. To install it you only need to do:

    $ npm install express-device

Case you're using [express](http://expressjs.com/) 3.x.x you should install version 0.3.13:

    $ npm install express-device@0.3.13

Case you're using [express](http://expressjs.com/) 2.x.x you should install version 0.1.2:

    $ npm install express-device@0.1.2

`express-device` is built on top of [express](http://expressjs.com/) framework. Here's an example on how to configure express to use it:

```javascript
var device = require('express-device');

app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.set('views', __dirname + '/views');

app.use(bodyParser());
app.use(device.capture());
```
By doing this you're enabling the **request** object to have a property called **device**, which have the following properties:
<table>
    <tr><td><strong>Name</strong></td><td><strong>Field Type</strong></td><td><strong>Description</strong></td><td><strong>Possible Values</strong></td></tr>
    <tr>
        <td>type</td>
        <td>string</td>
        <td>It gets the device type for the current request</td>
        <td>desktop, tv, tablet, phone, bot or car</td>
    </tr>
    <tr>
        <td>name</td>
        <td>string</td>
        <td>It gets the device name for the current request</td>
        <td>Example: iPhone. If the option <strong>parseUserAgent</strong> is set to false, then it will return an empty string</td>
    </tr>
</table>

Since version 0.3.4 you can now override some options when calling **device.capture()**. It accepts an object with only the config options (the same that the `device` supports) you which to override (go [here](https://github.com/rguerreiro/express-device/blob/master/test/not_default_options_test.js) for some examples). The ones you don't override it will use the default values. Here's the list with the available config options:
<table>
    <tr><td><strong>Name</strong></td><td><strong>Field Type</strong></td><td><strong>Description</strong></td><td><strong>Possible Values</strong></td></tr>
    <tr>
        <td>emptyUserAgentDeviceType</td>
        <td>string</td>
        <td>Device type to be returned whenever the request has an empty user-agent. Defaults to desktop.</td>
        <td>desktop, tv, tablet, phone, bot or car</td>
    </tr>
	<tr>
        <td>unknownUserAgentDeviceType</td>
        <td>string</td>
        <td>Device type to be returned whenever the request user-agent is unknown. Defaults to phone.</td>
        <td>desktop, tv, tablet, phone, bot or car</td>
    </tr>
    <tr>
        <td>botUserAgentDeviceType</td>
        <td>string</td>
        <td>Device type to be returned whenever the request user-agent belongs to a bot. Defaults to bot.</td>
        <td>desktop, tv, tablet, phone, bot or car</td>
    </tr>
    <tr>
        <td>carUserAgentDeviceType</td>
        <td>string</td>
        <td>Device type to be returned whenever the request user-agent belongs to a car. Defaults to car.</td>
        <td>desktop, tv, tablet, phone, bot or car</td>
    </tr>
    <tr>
        <td>parseUserAgent</td>
        <td>string</td>
        <td>Configuration to parse the user-agent string using the <a href="https://www.npmjs.com/package/useragent">useragent</a> npm package. It's needed in order to get the device name. Defaults to false.</td>
        <td>true | false</td>
    </tr>
</table>

`express-device` can also add some variables to the response [locals property](http://expressjs.com/api.html#res.locals\(\)) that will help you to build a responsive design:
<table>
    <tr>
        <td>is_desktop</td>
        <td>It returns true in case the device type is "desktop"; false otherwise</td>
    </tr>
    <tr>
        <td>is_phone</td>
        <td>It returns true in case the device type is "phone"; false otherwise</td>
    </tr>
    <tr>
        <td>is_tablet</td>
        <td>It returns true in case the device type is "tablet"; false otherwise</td>
    </tr>
    <tr>
        <td>is_mobile</td>
        <td>It returns true in case the device type is "phone" or "tablet"; false otherwise</td>
    </tr>
    <tr>
        <td>is_tv</td>
        <td>It returns true in case the device type is "tv"; false otherwise</td>
    </tr>
    <tr>
        <td>is_bot</td>
        <td>It returns true in case the device type is "bot"; false otherwise</td>
    </tr>
    <tr>
        <td>is_car</td>
        <td>It returns true in case the device type is "car"; false otherwise</td>
    </tr>
    <tr>
        <td>device_type</td>
        <td>It returns the device type string parsed from the request</td>
    </tr>
    <tr>
        <td>device_name</td>
        <td>It returns the device name string parsed from the request</td>
    </tr>
</table>
In order to enable this method you have to pass the app reference to **device.enableDeviceHelpers(app)**, just before **app.use(app.router)**.

Here's an example on how to use them (using [EJS](https://github.com/visionmedia/ejs) view engine):
```html
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1>Hello World!</h1>
    <% if (is_desktop) { %>
    <p>You're using a desktop</p>
    <% } %>
    <% if (is_phone) { %>
    <p>You're using a phone</p>
    <% } %>
    <% if (is_tablet) { %>
    <p>You're using a tablet</p>
    <% } %>
    <% if (is_tv) { %>
    <p>You're using a tv</p>
    <% } %>
    <% if (is_bot) { %>
    <p>You're using a bot</p>
    <% } %>
    <% if (is_car) { %>
    <p>You're using a car</p>
    <% } %>
</body>
</html>
```

You can check a full working example [here](https://github.com/rguerreiro/express-device/tree/master/example).

In version 0.3.0 a cool feature was added: the ability to route to a specific view\layout based on the device type (you must pass the app reference to **device.enableViewRouting(app)** to set it up). Consider the code below:

    .
    |-- views
        |-- phone
        |    |-- layout.ejs
        |    `-- index.ejs
        |-- layout.ejs
        `-- index.ejs

And this code:
```javascript
var device = require('express-device');

app.set('view engine', 'ejs');
app.set('view options', { layout: true });
app.set('views', __dirname + '/views');

app.use(bodyParser());
app.use(device.capture());

device.enableViewRouting(app);

app.get('/', function(req, res) {
    res.render('index.ejs');
})
```

If the request comes from a *phone* device then the response will render views/phone/index.ejs view with views/phone/layout.ejs as layout. If it comes from another type of device then it will render the default views/index.ejs with the default views/index.ejs. Simply add a folder below your views root with the device type code (phone, tablet, tv or desktop) for the device type overrides. Several combinations are supported. Please check the [tests](https://github.com/rguerreiro/express-device/blob/master/test/view_route_test.js) for more examples.

You also have an **ignore** option:
```javascript
app.get('/', function(req, res) {
    res.render('index.ejs', { ignoreViewRouting: true });
})
```

There's a way to force a certain type of device in a specific request. In the example I'm forcing a **desktop** type and the view rendering engine will ignore the parsed type and render as if it was a **desktop** that made the request. You can use all the supported device types.
```javascript
app.get('/', function(req, res) {
    res.render('index.ejs', { forceType: 'desktop' });
})
```

View routing feature uses the **express-partials** module for layout detection. If you would like to turn it off, you can use the **noPartials** option (be advised that by doing this you can no longer use the master\partial layout built into express-device, but you can route to full views):
```javascript
var device = require('express-device'); 

app.set('view engine', 'ejs');
app.set('view options', { layout: true });
app.set('views', __dirname + '/views');

app.use(express.bodyParser());
app.use(device.capture());

device.enableViewRouting(app, {
    "noPartials":true
});

app.get('/', function(req, res) {
    res.render('index.ejs');
})
```


## contributors

- [@rguerreiro](https://github.com/rguerreiro)
- [@aledbf](https://github.com/aledbf)
- [@ryansully](https://github.com/ryansully)
- [@lyxsus](https://github.com/lyxsus)
- [@dsyph3r](https://github.com/dsyph3r)
- [@davo11122](https://github.com/davo11122)
- [@esco](https://github.com/esco)
- [@Saicheg](https://github.com/Saicheg)
- [@brycekahle](https://github.com/brycekahle)
- [@manjeshpv](https://github.com/manjeshpv)
- [@Sitebase](https://github.com/Sitebase)
- [@lennym](https://github.com/lennym)

## where to go from here?

Currently `express-device` is on **version 0.4.2**. In order to add more features I'm asking anyone to contribute with some ideas. If you have some of your own please feel free to mention it [here](https://github.com/rguerreiro/express-device/issues/26).

But I prefer that you make your contribution with some pull requests ;)

## license

(The MIT License)

Copyright (c) 2012-2015 Rodrigo Guerreiro

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
