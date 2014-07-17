'use strict';

var Stock = require('./stock');

function Portfolio(name) {
  this.name = name;
  this.stocks = [];
}

Portfolio.prototype.add = function(symbol, amount) {
  var stock = findStock(this.stocks, symbol);

  if(stock) {
    stock.count += amount;
  } else {
    stock = new Stock(symbol, amount);
    this.stocks.push(stock);
  }

  console.log(stock);
};

Portfolio.prototype.del = function(symbol, amount) {
  var stock = findStock(this.stocks, symbol);
  var spliceAt = null;

  for (var i= this.stocks.length; i>= 0; i--) {
    if(stock) {
      stock.count -= amount;
      }
      if (stock.count <= 0) {
        spliceAt = i;
      }
        this.stocks.splice(spliceAt, 1);
    }
  };
};

//Private Helper Functions //

function findStock(stocks, symbol){
  for(var i = 0; i < stocks.length; i++) {
    if(stocks[i].symbol === symbol.toUpperCase()) {
      return stocks[i];
   }
  }

  return null;
}


module.exports = Portfolio; 
