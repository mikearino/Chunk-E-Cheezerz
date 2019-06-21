//business logic
var toppings = [];
var size = [];

function Pizza() {
  this.za = [];
}

Pizza.prototype.addOrder = function (input) {
  this.za.push(input);
}

function PizzaConstructor(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

PizzaConstructor.prototype.priceCheck = function () {
  var combinedSizeToppings = this.toppings + this.size;
  if (combinedSizeToppings >= 2 && <=4) {
    $('#output').text('3.99 what a deal')
  } else if (combinedSizeToppings === 5 ) {
    $('#output').text('4.99 wowzers')
  } else if (combinedSizeToppings === 6) {
    $('#output').text('5,000 dollars')
  }
  console.log(combinedSizeToppings)
}
//user logic
//creates new pizza object and ccaptures it in the var
var pizzaContainer = new Pizza();
$(document).ready(function () {
  $("form#new-form").submit(function (event) {
    event.preventDefault();
    //this captures toppngs/size
    var pizzaToppings = parseInt($("#toppings").val());
    var pizzaSize = parseInt($("#size").val());

    //this shows inputs to dom
    $("#show-input").text(pizzaToppings);
    $("#show-input").text(pizzaSize);
    //this creates a new pizza and puts it into variable called order
    var order = new PizzaConstructor(pizzaToppings, pizzaSize)
    //this adds a pizza from the constructor
    pizzaContainer.addOrder(order)
    var getPrice = pizzaContainer.za[o].priceCheck()
    console.log(pizzaSize)
    console.log(pizzaToppings)
    console.log(pizzaContainer.toppings)
    console.log(pizzaContainer.size)

  });
});
