var express = require('express')
var app = express()
var api = require('instagram-node').instagram();
api.use({
  client_id: process.env.INSTANGRAM_CLIENT_ID,
  client_secret: process.env.INSTANGRAM_CLIENT_SECRET
});

var redirect_uri = process.env.INSTANGRAM_BASE_URL + '/handleauth';

// A middleware for log
app.use(function(req, res, next){
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('Url: ' + fullUrl, 'debug');
    console.log('Params: ' + JSON.stringify(req.params), 'debug');
    console.log('Query: ' + JSON.stringify(req.query), 'debug');
    next();
})

app.get('/', function(req, res){
    res.send('Server is working well ...');
})

// This is where you would initially send users to authorize
app.get('/authorize_user', function(req, res) {
  res.redirect(
      api.get_authorization_url(redirect_uri, {
                                                    scope: ['likes'],
                                                    state: 'a state' 
                                                })
    );
});

// This is your redirect URI
app.get('/handleauth', function(req, res) {
  api.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})