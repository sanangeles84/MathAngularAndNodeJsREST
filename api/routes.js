'use strict';

var controller = require('./controller');

module.exports = function(app) {
   app.route('/rest/')
       .get(controller.home);
   app.route('/rest/about')
       .get(controller.about);
   app.route('/rest/sum/:num1/:num2')
       .get(controller.sum);
   app.route('/rest/subtract/:num1/:num2')
       .get(controller.subtract);
   app.route('/rest/multiply/:num1/:num2')
       .get(controller.multiply);
   app.route('/rest/divide/:num1/:num2')
       .get(controller.divide);
};