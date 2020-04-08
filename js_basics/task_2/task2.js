'use strict';

var goods = [
  {
    id: 0,
    name: 'Shirt',
    rating: 4.9,
    description: 'Nice',
    price: 64,
    category: 'Clothes'
  },
  {
    id: 2,
    name: 'Hotdog',
    rating: 3.5,
    description: 'Tasty',
    price: 49,
    category: 'Food'
  },
  {
    id: 1,
    name: 'Snickers',
    rating: 3.9,
    description: 'Pretty',
    price: 86,
    category: 'Shoes'
  },
  {
    id: 3,
    name: 'Mountain Dew',
    rating: 4.3,
    description: 'Cool',
    price: 25,
    category: 'Drink'
  },
];

function getItemByName(array, item) {
  let search = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i]['name'] === item) {
      search = `'${array[i]['name']}' found in array`;
      break
    } else {
      search = `'${item}' not found in array`;
    }
  }
  return search
}

function filter(array, field, options = null) {
  if (options === 'ASC') {
    array.sort(function (a, b) {
      return a[field] > b[field] ? 1 : -1
    })
  } else if (options === 'DESC') {
    array.sort(function (a, b) {
      return a[field] < b[field] ? 1 : -1
    })
  } else {
    return 'Filter option is missing';
  }
  return array.map(el => el[field]);
}

function deleteItem(array, id) {
  array.splice(id, 1);
  return 'Item Deleted'
}

console.log(getItemByName(goods, 'Snickers'));
console.log(getItemByName(goods, 'Hotdogs'));
console.log('Descending order: ' + filter(goods, 'price', 'DESC'));
console.log('Ascending order: ' + filter(goods, 'rating', 'ASC'));
console.log(filter(goods, 'price'));
console.log(deleteItem(goods, 2));
console.log(getItemByName(goods, 'Mountain Dew'));
