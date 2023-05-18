var request = require('request');

const apiKey = process.env.MATH_API_KEY || "provideAKey";
const mathServiceURL = 'https://mathservice.sanangeles.repl.co';

var mathService = {
   sum: function(req, res, next) {
       request(mathServiceURL + '/operations/' + apiKey 
               + '/sum/' + req.params.num1 + '/' 
               + req.params.num2,
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send(response);
           }
       });

   },
   subtract: function(req, res, next) {
       request(mathServiceURL + '/operations/' + apiKey 
               + '/subtract/' + req.params.num1 + '/' 
               + req.params.num2,
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send(response);
           }
       });

   },
   multiply: function(req, res, next) {
       request(mathServiceURL + '/operations/' + apiKey 
               + '/multiply/' + req.params.num1 + '/' 
               + req.params.num2,
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send(response);
           }
       });

   },
   divide: function(req, res, next) {
       request(mathServiceURL + '/operations/' + apiKey 
               + '/divide/' + req.params.num1 + '/' 
               + req.params.num2,
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send(response);
           }
       });

   },
   
};

module.exports = mathService;