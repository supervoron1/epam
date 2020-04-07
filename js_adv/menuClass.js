import {countCartItems} from "./main.js"

export class Menu {
  constructor(page, itemsList = [], actionsList = []) {
    this.page = page;
    this.itemsList = itemsList;
    this.actionsList = actionsList;
  }

  alert() {
    return alert('Выберите пункт меню!');
  }

  menuPrompt() {
    return `Добро пожаловать в наш магазин!\nКорзина: ${countCartItems}\n` +
      `Страница: ${this.page}\nМеню:\n${this.list}${this.actions}`;
  }


  getMenuList() {
    this.list = '';
    return this.itemsList.forEach((el, idx) => {
      return this.list += `${++idx}. ${el}\n`;
    });
  }

  getActions() {
    this.actions = '';
    return this.actionsList.forEach((el, idx) => {
      return this.actions += `${this.itemsList.length + (++idx)}. ${el}\n`;
    });
  }

  getData() {
    this.getMenuList();
    this.getActions();
  }

  action() {
    this.getData();
    return prompt(this.menuPrompt());
  }
}
