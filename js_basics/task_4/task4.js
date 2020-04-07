// пирамида
for (let i = 0, pyramid = '#'; i < 7; i++, pyramid += ' #') {
  console.log(pyramid);
}

// Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
    continue
  }
  if (i % 3 === 0) {
    console.log('Fizz');
    continue
  }
  if (i % 5 === 0 && i % 3 !== 0) {
    console.log('Buzz');
    continue
  }
  console.log(i)
}

// Шахматная доска
let inner = " # # # ";
for (let i = 0; i < 8; i++) {
  let start = (i % 2 !== 0) ? "" : "#";
  let end = (i % 2 === 0) ? "" : "#";
  let row = start + inner + end;
  console.log(row);
}

//функция MIN для любого количества чисел
console.log('Функция нахождения минимального числа');
const min = (...args) => args.reduce((acc, cur) => acc < cur ? acc : cur);
console.log('Минимальное число:', min(100, 500, 25, 676, 3));
