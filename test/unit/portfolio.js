/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');

describe('Portfolio', function() {
  describe('constructor', function(){
    it('should create a new portfolio object', function(){
      var port1 = new Portfolio ('port1');

      expect(port1).to.be.instanceof(Portfolio);
      expect(port1.name).to.equal('port1');
      expect(port1.stocks.length).to.equal(0);
    });
  });
});
