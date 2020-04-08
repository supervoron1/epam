"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_js_1 = require("./constants.js");
var menuClass_js_1 = require("./menuClass.js");
var productClass_js_1 = require("./productClass.js");
var cartClass_js_1 = require("./cartClass.js");
var cardClass_js_1 = require("./cardClass.js");
var ownerClass_js_1 = require("./ownerClass.js");
var cvvClass_js_1 = require("./cvvClass.js");
var loginClass_js_1 = require("./loginClass.js");
var passwordClass_js_1 = require("./passwordClass.js");
var functions_js_1 = require("./functions.js");
exports.countCartItems = 0;
var goodsCart = [];
var mainMenu = new menuClass_js_1.Menu('Главная страница', constants_js_1.mainMenuList);
var products = new productClass_js_1.Product('Товары', constants_js_1.productsList, constants_js_1.prodListActions);
var cart = new cartClass_js_1.Cart('Корзина', goodsCart, constants_js_1.cartActions);
var menuCardNumber = new cardClass_js_1.Card('Оплата', constants_js_1.cardNumberActs);
var menuOwnerName = new ownerClass_js_1.Owner('Оплата', constants_js_1.cardOwnerActs);
var menuCVV = new cvvClass_js_1.MenuCVV('Оплата', constants_js_1.cardCVVActs);
var login = new loginClass_js_1.Login('Логин');
var password = new passwordClass_js_1.Password('Пароль');
function productPage() {
    var actions = constants_js_1.productsList.concat(constants_js_1.prodListActions);
    var action = +(products.action());
    if (actions[action - 1]) {
        if (actions[action - 1].type === 'product') {
            ++exports.countCartItems;
            goodsCart.push({
                name: actions[action - 1].name,
                type: 'product'
            });
            productPage();
        }
        else if (actions[action - 1].name === 'Корзина') {
            cartPage();
        }
        else {
            mainPage();
        }
    }
    else {
        products.alert();
        productPage();
    }
}
function cartPage() {
    var actions = goodsCart.concat(constants_js_1.cartActions);
    var action = +(cart.action());
    if (actions[action - 1]) {
        if (actions[action - 1].type === 'product') {
            goodsCart.splice(action - 1, 1);
            --exports.countCartItems;
            cartPage();
        }
        else if (actions[action - 1].name === 'Оплата') {
            cardNumberPage();
        }
        else {
            mainPage();
        }
    }
    else {
        cart.alert();
        cartPage();
    }
}
function cardCVVPage() {
    var cvv = menuCVV.action();
    if (cvv && functions_js_1.checkCVVCode(cvv)) {
        confirm('Оплата подтверждена! Хотите продолжить?') ? mainPage() : false;
    }
    else {
        menuCVV.alert();
        return cardCVVPage();
    }
}
function cardOwnerPage() {
    var owner = menuOwnerName.action();
    if (functions_js_1.checkCardOwner(owner)) {
        cardCVVPage();
    }
    else if (owner === '2') {
        mainPage();
    }
    else {
        menuOwnerName.alert();
        cardOwnerPage();
    }
}
function cardNumberPage() {
    var cartNumber = menuCardNumber.action();
    if (cartNumber && functions_js_1.checkCardNumber(cartNumber)) {
        cardOwnerPage();
    }
    else if (cartNumber === '2') {
        mainPage();
    }
    else {
        menuCardNumber.alert();
        cardNumberPage();
    }
}
function mainPage() {
    var choice = mainMenu.action();
    if (choice === '1') {
        productPage();
    }
    else if (choice === '2') {
        cartPage();
    }
    else {
        mainMenu.alert();
        mainPage();
    }
}
function checkPass() {
    var userPass = password.action();
    if (functions_js_1.checkPassword(userPass)) {
        return mainPage();
    }
    else {
        password.alert();
        return checkPass();
    }
}
function loginPage() {
    var userName = login.action();
    if (functions_js_1.checkLogin(userName)) {
        return checkPass();
    }
    else {
        login.alert();
        return loginPage();
    }
}
loginPage();
