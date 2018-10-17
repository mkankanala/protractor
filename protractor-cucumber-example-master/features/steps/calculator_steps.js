var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var CalculatorPage = require("../pages/calculator_page.js");
var page = new CalculatorPage();
var CalculatorSteps = function() {

 

  this.World = function MyWorld() {
    this.page = new CalculatorPage();
  };

  this.Given('The calculator is open', function (callback) {
    this.page.get();
    callback();
  });

  this.When('I calculate $first $operator $second', function (first, operator, second, callback) {
    this.page.setFirstValue(first);
    this.page.setOperator(operator);
    this.page.setSecondValue(second);
    this.page.clickGo();
    callback();
  });

  this.When('I enter first value of $first', function (first, callback) {
    this.page.setFirstValue(first);
    callback();
  });

  this.When('I enter second value of $second', function (second, callback) {
    this.page.setSecondValue(second);
    callback();
  });

  this.When('I click Go', function (callback) {
    this.page.clickGo();
    callback();
  });

  this.Then('the result should equal $result', function (result, callback) {
    expect(this.page.getResult()).to.eventually.equal(result).and.notify(callback);
  });

  this.Given('web homepage', function ( callback) {
    this.page.gettw();
    callback();
  });

  this.Then('Go to reup page', function ( callback) {
   // expect(this.page.getResult()).to.eventually.equal(result).and.notify(callback);
   this.page.getreuppage();
   callback();
  });

  this.Then('Enter phone number $phone', function (phone, callback) {
    // expect(this.page.getResult()).to.eventually.equal(result).and.notify(callback);
    this.page.enterphonenumber(phone);
    console.log(browser.params.login.email);
    browser.params.login.email="def@gmail.com";
    console.log(browser.params.login.email);
    callback();
   });

};

module.exports = CalculatorSteps;