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
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Product.prototype.getMenuList = function () {
        var _this = this;
        this.list = '';
        return this.itemsList.map(function (el, idx) {
            return _this.list += ++idx + ". " + el.name + "\n";
        });
    };
    Product.prototype.getActions = function () {
        var _this = this;
        this.actions = '';
        return this.actionsList.map(function (el, idx) {
            return _this.actions += _this.itemsList.length + (++idx) + ". " + el.name + "\n";
        });
    };
    return Product;
}(menuClass_js_1.Menu));
exports.Product = Product;
