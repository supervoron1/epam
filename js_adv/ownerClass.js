import {Menu} from "./menuClass.js";

export class Owner extends Menu {
  alert() {
    return alert('Введите имя как на карте (Ivan Ivanov)');
  }

  action() {
    super.getData();
    return prompt(this.menuPrompt(), 'John Smith');
  }
}
