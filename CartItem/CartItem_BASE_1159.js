"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #articleId;
    #name;
    #quantity;
    #price;
    #currency;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        this.#articleId = articleId;
        this.#name = name;
        this.#quantity = quantity;
        this.#price = price;
    }

    get articleId() {
        return this.#articleId;
    }

    get name() {
      return this.#name;
    }

    get quantity() {
       return this.#quantity;
    }

    set quantity(value) {
       this.#quantity = value;
    }

    get price() {
      return this.#price;
    }

    set price(value) {
        this.#price = value;
    }

    get currency(){
        return "CHF";
    }

    get total() {
        return this.#price*this.#quantity;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}



