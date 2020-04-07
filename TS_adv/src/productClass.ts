import {Menu} from "../dist/menuClass.js";

export class Product extends Menu {
    getMenuList() {
        this.list = '';
        return this.itemsList.map((el, idx) => {
            return this.list += `${++idx}. ${el.name}\n`;
        });
    }

    getActions() {
        this.actions = '';
        return this.actionsList.map((el, idx) => {
            return this.actions += `${this.itemsList.length + (++idx)}. ${el.name}\n`;
        });
    }
}
