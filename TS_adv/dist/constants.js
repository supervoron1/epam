"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mainMenuList = [
    'Товары',
    'Корзина'
];
exports.mainMenuList = mainMenuList;
var productsList = [
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
exports.productsList = productsList;
var prodListActions = [
    {
        name: 'Корзина',
        type: 'menuOption',
    },
    {
        name: 'Вернуться на главную страницу',
        type: 'menuOption',
    },
];
exports.prodListActions = prodListActions;
var cartActions = [
    {
        name: 'Оплата',
        type: 'menuOption',
    },
    {
        name: 'Вернуться на главную страницу',
        type: 'menuOption',
    }
];
exports.cartActions = cartActions;
var cardNumberActs = [
    'Введите номер карты',
    'Вернуться на главную страницу'
];
exports.cardNumberActs = cardNumberActs;
var cardOwnerActs = [
    'Имя владельца',
    'Вернуться на главную страницу'
];
exports.cardOwnerActs = cardOwnerActs;
var cardCVVActs = [
    'CVV',
    'Вернуться на главную страницу'
];
exports.cardCVVActs = cardCVVActs;
