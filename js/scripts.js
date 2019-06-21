//business logic
var toppings = [];
var size = [];

function Pizza() {
  this.za = [];
}

Pizza.prototype.addPizza = function (input) {
  this.za.push(input);
}

function PizzaConstructor(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}










//user logic
var pizzaContainer = new Pizza();
$(document).ready(function () {
  $("form#new-form").submit(function (event) {
    event.preventDefault();
    var pizzaToppings = $("#toppings").val();
    var pizzaSize = $("#size").val();
    console.log(pizzaToppings,pizzaSize);
    $("#show-input").text(pizzaFromInput);
    var order = new PizzaConstructor(pizzaContainer)
  });
});
