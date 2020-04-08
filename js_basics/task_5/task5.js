// Подсчет заданного символа в строке
function countChar(str, letter) {
  return some = str.toLowerCase().split('')
    .filter(m => m === letter.toLowerCase()).length;
}

console.log(countChar('My Random String uses M much More', 'm'));

// Глубокое сравнение
function deepCompare(obj1, obj2) {
  const obj1Keys = Object.getOwnPropertyNames(obj1);
  const obj2Keys = Object.getOwnPropertyNames(obj2);
  let result = [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let i = 0; i < obj1Keys.length; i++) {
    propName = obj1Keys[i];
    if (obj1[propName] === obj2[propName]) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result.every((el) => el === true);
}

const obj1 = {
  one: 1,
  two: '2'
};

const obj2 = {
  two: '2',
  one: 1
};
console.log(deepCompare(obj1, obj2));

// Наоборот
function reverseArray(arr) {
  if (Array.isArray(arr)) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
  } else {
    return 'Wrong argument - use array only!';
  }
}

function reverseArrayInPlace(arr) {
  if (Array.isArray(arr)) {
    for (let i = arr.length - 1; i >= 0; i--) {
      arr.push(arr[i]);
    }
    arr.splice(0, arr.length);
  } else {
    return 'Wrong argument - use array only!';
  }
}

// День и месяц
function getNames(date) {
  let day = date.getDay();
  let month = date.getMonth();
  let names = [];
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  months.forEach((item, index) => (month === index) ? names.push(item) : false);
  days.forEach((item, index) => (day === index) ? names.push(item) : false);
  return names;
}

let date = new Date(2020, 2, 30);
console.log(getNames(date));
