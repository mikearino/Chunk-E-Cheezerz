//Business logic for NewPie -----
function NewPie() {
  this.pizzas = [];
  this.currentPrice = 0;
};

NewPie.prototype.addPizza = function (pizza) {
  pizza.currentPrice = this.assignPrice();
  this.pizzas.push(pizza);
};

NewPie.prototype.assignPrice = function () {
  if ( $("select#new-size").val() === "Small" ) {
    this.currentPrice = "$6.00"
    return this.currentPrice
  } else if ( $("select#new-size").val() === "Medium" &&         $("select#new-toppings").val() === "Combo" ){
    this.currentPrice = "$13.00"
    return this.currentPrice
  } else if ( $("select#new-size").val() === "Medium" ) {
    this.currentPrice = "$10.00"
    return this.currentPrice
  } else if ( $("select#new-size").val() === "Large" &&         $("select#new-toppings").val() === "Combo" ){
    this.currentPrice = "$18.00"
    return this.currentPrice
  } else if ( $("select#new-size").val() === "Large" ){
    this.currentPrice = "$15.00"
    return this.currentPrice
  }
};

//Business logic for Pizzas--------
function Pizza(size, toppings, sauce) {
  this.size = size,
  this.toppings = toppings,
  this.sauce = sauce;
};

Pizza.prototype.fullName = function () {
  return this.size + ' ' + this.toppings;
};

//User interface logic ------
var newPizza = new NewPie();
function displayPizzaDetails(pizzaToDisplay) {
  var pizzaList = $("ul#pizzas");
  var htmlForPizzaInfo = "";
  pizzaToDisplay.pizzas.forEach(function(pizza) {
    htmlForPizzaInfo += "<li>" + pizza.size + " " + pizza.toppings + " " + pizza.sauce + " " + pizza.currentPrice +   "</li>";
  })
  pizzaList.html(htmlForPizzaInfo);
};

$(document).ready(function () {
  $("form#new-pizza").submit(function (event) {
    event.preventDefault();
    var inputtedSize = $("select#new-size").val();
    console.log(inputtedSize)
    var inputtedToppings = $("select#new-toppings").val();
    var inputtedSauce = $("select#new-sauce").val();
    var pizzaCreated = new Pizza(inputtedSize, inputtedToppings, inputtedSauce);
    newPizza.addPizza(pizzaCreated);
    displayPizzaDetails(newPizza);
  })
})
