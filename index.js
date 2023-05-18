//This project calls "MathService" service to delegate calculations
//Root is the AngularJS webapp, /rest/ is the rest api
const express = require('express');
const app = express();
require('dotenv').config();
var port = process.env.PORT || 3000;

var routes = require('./api/routes');
routes(app);
app.use(express.static(__dirname + '/public'));
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
