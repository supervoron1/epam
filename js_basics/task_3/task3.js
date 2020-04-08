'use strict';

function Cart(name = null, owner = null) {
  this.name = name;
  this.owner = owner;
}

Cart.prototype.items = [];
Cart.prototype.show = function () {
  this.items.forEach(item => {
    console.log(item)
  })
};

Cart.prototype.add = function (item) {
  this.items.push(item)
};

Cart.prototype.delete = function (id) {
  this.items.splice(id, 1)
};

const cart = new Cart();
cart.add({
  id: 0,
  name: 'Good_1',
  rating: 4.9,
  description: 'Description_1',
  price: 105,
  category: 'food'
});
cart.add({
  id: 1,
  name: 'Good_2',
  rating: 4.2,
  description: 'Description_2',
  price: 95,
  category: 'drink'
});

cart.show();
cart.delete(0);
console.log('***** Deleted *****');
cart.show();

