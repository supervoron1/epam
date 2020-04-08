import {
    mainMenuList,
    productsList,
    prodListActions,
    cartActions,
    cardNumberActs,
    cardOwnerActs,
    cardCVVActs
} from './constants.js'
import {Menu} from "./menuClass.js";
import {Product} from "./productClass.js";
import {Cart} from "./cartClass.js";
import {Card} from "./cardClass.js";
import {Owner} from "./ownerClass.js";
import {MenuCVV} from "./cvvClass.js";
import {Login} from "./loginClass.js";
import {Password} from "./passwordClass.js";
import {
    checkLogin,
    checkPassword,
    checkCardNumber,
    checkCardOwner,
    checkCVVCode
} from "./functions.js";


export let countCartItems = 0;
let goodsCart = [];

const mainMenu = new Menu('Главная страница', mainMenuList);
const products = new Product('Товары', productsList, prodListActions);
const cart = new Cart('Корзина', goodsCart, cartActions);
const menuCardNumber = new Card('Оплата', cardNumberActs);
const menuOwnerName = new Owner('Оплата', cardOwnerActs);
const menuCVV = new MenuCVV('Оплата', cardCVVActs);
const login = new Login('Логин');
const password = new Password('Пароль');

function productPage() {
    const actions = productsList.concat(prodListActions);
    const action = +(products.action());
    if (actions[action - 1]) {
        if (actions[action - 1].type === 'product') {
            ++countCartItems;
            goodsCart.push(
                {
                    name: actions[action - 1].name,
                    type: 'product'
                });
            productPage();
        } else if (actions[action - 1].name === 'Корзина') {
            cartPage();
        } else {
            mainPage();
        }
    } else {
        products.alert();
        productPage();
    }
}

function cartPage() {
    const actions = goodsCart.concat(cartActions);
    const action = +(cart.action());
    if (actions[action - 1]) {
        if (actions[action - 1].type === 'product') {
            goodsCart.splice(action - 1, 1);
            --countCartItems;
            cartPage();
        } else if (actions[action - 1].name === 'Оплата') {
            cardNumberPage();
        } else {
            mainPage();
        }
    } else {
        cart.alert();
        cartPage();
    }
}

function cardCVVPage() {
    const cvv = menuCVV.action();
    if (cvv && checkCVVCode(cvv)) {
        confirm('Оплата подтверждена! Хотите продолжить?') ? mainPage() : false;
    } else {
        menuCVV.alert();
        return cardCVVPage();
    }
}

function cardOwnerPage() {
    const owner = menuOwnerName.action();
    if (checkCardOwner(owner)) {
        cardCVVPage();
    } else if (owner === '2') {
        mainPage();
    } else {
        menuOwnerName.alert();
        cardOwnerPage();
    }
}

function cardNumberPage() {
    const cartNumber = menuCardNumber.action();
    if (cartNumber && checkCardNumber(cartNumber)) {
        cardOwnerPage();
    } else if (cartNumber === '2') {
        mainPage();
    } else {
        menuCardNumber.alert();
        cardNumberPage();
    }
}

function mainPage() {
    const choice = mainMenu.action();
    if (choice === '1') {
        productPage();
    } else if (choice === '2') {
        cartPage();
    } else {
        mainMenu.alert();
        mainPage();
    }
}

function checkPass() {
    const userPass = password.action();
    if (checkPassword(userPass)) {
        return mainPage();
    } else {
        password.alert();
        return checkPass();
    }
}

function loginPage() {
    const userName = login.action();
    if (checkLogin(userName)) {
        return checkPass();
    } else {
        login.alert();
        return loginPage();
    }
}

loginPage();
