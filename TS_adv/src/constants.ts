const mainMenuList = [
    'Товары',
    'Корзина'
];

const productsList = [
    {
        name: 'Товар 1',
        type: 'product'
    },
    {
        name: 'Товар 2',
        type: 'product'
    },
    {
        name: 'Товар 3',
        type: 'product'
    },
];

const prodListActions = [
    {
        name: 'Корзина',
        type: 'menuOption',
    },
    {
        name: 'Вернуться на главную страницу',
        type: 'menuOption',
    },
];


const cartActions = [
    {
        name: 'Оплата',
        type: 'menuOption',
    },
    {
        name: 'Вернуться на главную страницу',
        type: 'menuOption',
    }
];

const cardNumberActs = [
    'Введите номер карты',
    'Вернуться на главную страницу'
];

const cardOwnerActs = [
    'Имя владельца',
    'Вернуться на главную страницу'
];

const cardCVVActs = [
    'CVV',
    'Вернуться на главную страницу'
];

export { mainMenuList, productsList, prodListActions, cartActions, cardNumberActs, cardOwnerActs, cardCVVActs };
