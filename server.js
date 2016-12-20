var express = require('express');
var fallback = require('express-history-api-fallback');

var app = express();

app.set('port', (process.env.PORT || 5000));
var root = `${__dirname}`;

app.use(express.static("build"));
// app.use(fallback('index.html',  {"build"} ));




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});