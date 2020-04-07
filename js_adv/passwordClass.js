import {Menu} from "./menuClass.js";

export class Password extends Menu {
  alert() {
    return alert('Введите валидный пароль! (мин 8 символов, 1 цифра)');
  }

  action() {
    super.getData();
    return prompt(this.menuPrompt(), 'qwerty123');
  }
}
