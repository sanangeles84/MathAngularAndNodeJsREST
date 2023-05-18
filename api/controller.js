'use strict';

var properties = require('../package.json')
var mathService = require('../service/mathService');

var controllers = {
  home: function(req, res) {
    var home = {
      about: "https://" + req.hostname + "/rest/about",
      sum: "https://" + req.hostname + "/rest/sum/:num1/:num2",
      subtract: "https://" + req.hostname + "/rest/subtract/:num1/:num2",
      multiply: "https://" + req.hostname + "/rest/multiply/:num1/:num2",
      divide: "https://" + req.hostname + "/rest/divide/:num1/:num2",
      sum_example: "https://" + req.hostname + "/rest/sum/1234/5678",
      subtract_example: "https://" + req.hostname + "/rest/subtract/5678/1234",
      multiply_example: "https://" + req.hostname + "/rest/multiply/5678/1234",
      divide_example: "https://" + req.hostname + "/rest/divide/5678/1234"
    }
    res.json(home);
  },
  about: function(req, res) {
    var aboutInfo = {
      name: properties.name,
      version: properties.version
    }
    res.json(aboutInfo);
  },
  sum: function(req, res) {
    mathService.sum(req, res, function(err, dist) {
      if (err)
        res.send(err);
      res.json(dist);
    });
  },
  subtract: function(req, res) {
    mathService.subtract(req, res, function(err, dist) {
      if (err)
        res.send(err);
      res.json(dist);
    });
  },
  multiply: function(req, res) {
    mathService.multiply(req, res, function(err, dist) {
      if (err)
        res.send(err);
      res.json(dist);
    });
  },
  divide: function(req, res) {
    mathService.divide(req, res, function(err, dist) {
      if (err)
        res.send(err);
      res.json(dist);
    });
  }
};

module.exports = controllers;