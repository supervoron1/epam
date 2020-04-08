import {Menu} from "./menuClass.js";

export class Card extends Menu {
  alert() {
    return alert('Введите номер карты (12 цифр)');
  }

  action() {
    super.getData();
    return prompt(this.menuPrompt(), '123456789012');
  }
}
