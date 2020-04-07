"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkLogin(login) {
    var regexp = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regexp.test(login);
}
exports.checkLogin = checkLogin;
function checkPassword(pass) {
    var regexp = /^([^!@#$%^&*()_])(?=.*?[0-9]).{7,}$/;
    return regexp.test(pass);
}
exports.checkPassword = checkPassword;
function checkCardNumber(num) {
    var regexp = /^\d{12}$/;
    return regexp.test(num);
}
exports.checkCardNumber = checkCardNumber;
function checkCardOwner(owner) {
    var regexp = /^[A-Za-z]+\s[A-Za-z]+$/;
    return regexp.test(owner);
}
exports.checkCardOwner = checkCardOwner;
function checkCVVCode(cvv) {
    var regexp = /^\d{3}$/;
    return regexp.test(cvv);
}
exports.checkCVVCode = checkCVVCode;
