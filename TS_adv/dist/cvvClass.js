"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var menuClass_js_1 = require("../dist/menuClass.js");
var MenuCVV = /** @class */ (function (_super) {
    __extends(MenuCVV, _super);
    function MenuCVV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuCVV.prototype.alert = function () {
        return alert('Введите валидный CVV код (3 цифры)');
    };
    MenuCVV.prototype.action = function () {
        _super.prototype.getData.call(this);
        return prompt(this.menuPrompt(), '123');
    };
    return MenuCVV;
}(menuClass_js_1.Menu));
exports.MenuCVV = MenuCVV;
