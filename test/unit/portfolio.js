/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Stock = require('../../app/models/stock');
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

  describe('#add', function () {
    it('should add stocks to portfolio', function() {
      var port1 = new Portfolio ('port1');
      port1.add('aapl', 50);
      port1.add('amzn', 35);
      port1.add('aapl', 25);
      
      expect(port1.stocks).to.have.length(2);
      expect(port1.stocks[0]).to.be.instanceof(Stock);
      expect(port1.stocks[0].count).to.equal(75);
      expect(port1.stocks[1].count).to.equal(35);
    });
  });

  describe('#del', function() {
    it('should delete stock count, and delete any stock that goes below 0 from stocks array',function () {
    var port1 = new Portfolio ('port1');
    port1.add('aapl', 50);
    port1.add('amzn',35);

    port1.del('aapl', 10);
    port1.del('amzn', 40);
    port1.del('aapl', 20);
 
    expect(port1.stocks).to.have.length(1);
    expect(port1.stocks[0].count).to.equal(20);
    });
  });
});
