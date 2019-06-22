//Business logic for NewPie -----
function NewPie() {
  this.pizzas = [];
  this.currentId = 0;
};

NewPie.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
};

NewPie.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

NewPie.prototype.findPizza = function (id) {
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.contacts[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
};

NewPie.prototype.deletePizza = function (id) {
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i].id == id) {
      delete this.contacts[i];
      return true;
    }
  };
  return false;
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
