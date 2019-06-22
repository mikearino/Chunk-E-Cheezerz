//Business logic for NewPie -----
function NewPie() {
  this.pizzas = [];
};

NewPie.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza);
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
