"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_js_1 = require("../dist/main.js");
var Menu = /** @class */ (function () {
    function Menu(page, itemsList, actionsList) {
        if (itemsList === void 0) { itemsList = []; }
        if (actionsList === void 0) { actionsList = []; }
        this.page = page;
        this.itemsList = itemsList;
        this.actionsList = actionsList;
    }
    Menu.prototype.alert = function () {
        return alert('Выберите пункт меню!');
    };
    Menu.prototype.menuPrompt = function () {
        return "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043D\u0430\u0448 \u043C\u0430\u0433\u0430\u0437\u0438\u043D!\n\u041A\u043E\u0440\u0437\u0438\u043D\u0430: " + main_js_1.countCartItems + "\n" +
            ("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430: " + this.page + "\n\u041C\u0435\u043D\u044E:\n" + this.list + this.actions);
    };
    Menu.prototype.getMenuList = function () {
        var _this = this;
        this.list = '';
        return this.itemsList.forEach(function (el, idx) {
            return _this.list += ++idx + ". " + el + "\n";
        });
    };
    Menu.prototype.getActions = function () {
        var _this = this;
        this.actions = '';
        return this.actionsList.forEach(function (el, idx) {
            return _this.actions += _this.itemsList.length + (++idx) + ". " + el + "\n";
        });
    };
    Menu.prototype.getData = function () {
        this.getMenuList();
        this.getActions();
    };
    Menu.prototype.action = function () {
        this.getData();
        return prompt(this.menuPrompt());
    };
    return Menu;
}());
exports.Menu = Menu;
