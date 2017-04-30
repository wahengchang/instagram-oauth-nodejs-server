# instagram-oauth-nodejs-server
It is a template is ready to use, setting up a Node.js server for Intagram-API OAuth purpose.

## Things we need
 - Setup an Instagram Application
 - Copy Client ID and Client Secret to this project
 - Prepare a domain name, where you host the Node.js server, add it to Valid redirectURL

![instaggram](https://cloud.githubusercontent.com/assets/5538753/25563344/35335676-2dcd-11e7-9035-dcdb8fea41e3.jpg)

## Run
The Node.js server have to be run on the server where you set up `Valid redirectURL` on the Intagram Configuration
```
$ git clone https://github.com/wahengchang/instagram-oauth-nodejs-server
$ cd instagram-oauth-nodejs-server
$ npm isntall 
```

Then set up:
 - process.env.INSTANGRAM_CLIENT_ID
 - process.env.INSTANGRAM_CLIENT_SECRET
 - process.env.INSTANGRAM_BASE_URL
```
$ npm start
```

## Get access token
```
GET https://www.instagram.com/oauth/authorize?client_id={CLIENT_ID}&redirect_uri={http://youhost/authorize_user}&response_type=code
```


## Reference
 - [https://www.instagram.com/developer/authentication](https://www.instagram.com/developer/authentication)
 - [https://www.npmjs.com/package/instagram-node](https://www.npmjs.com/package/instagram-node)
