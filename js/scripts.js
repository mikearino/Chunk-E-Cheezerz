//business logic
var toppings = [];
var size = [];

function Pizza() {
  this.za = [];
}

Pizza.prototype.addOrder = function (input) {
  this.za.push(input);
};

function PizzaConstructor(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

PizzaConstructor.prototype.priceCheck = function () {
  for (var i = 0; i < pizzaContainer.za.length; i++) {
    var combinedSizeToppings = this.toppings + this.size;
    if (combinedSizeToppings <= 4) {
      $('#output').text('3.99 what a deal');
    } else if (combinedSizeToppings === 5) {
      $('#output').text('4.99 yikes!');
    } else if (combinedSizeToppings === 6) {
      $('#output').text('5,000 dollars!');
    }
  }
};

//front end
var pizzaContainer = new Pizza();
$(document).ready(function () {
  $("form#new-form").submit(function (event) {
    event.preventDefault();
    var pizzaToppings = parseInt($("#toppings").val());
    var pizzaSize = parseInt($("#size").val());
    $("#show-input").text(pizzaToppings);
    $("#show-input").text(pizzaSize);
    var order = new PizzaConstructor(pizzaToppings, pizzaSize);
    pizzaContainer.addOrder(order);
    var getPrice = pizzaContainer.za[0].priceCheck();
    var getPrice = pizzaContainer.za[1].priceCheck();
    var getPrice = pizzaContainer.za[2].priceCheck();
    var getPrice = pizzaContainer.za[3].priceCheck();
    var getPrice = pizzaContainer.za[4].priceCheck();
    var getPrice = pizzaContainer.za[5].priceCheck();
  });
});
