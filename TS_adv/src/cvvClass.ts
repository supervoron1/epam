import {Menu} from "../dist/menuClass.js";

export class MenuCVV extends Menu {
    alert() {
        return alert('Введите валидный CVV код (3 цифры)');
    }

    action() {
        super.getData();
        return prompt(this.menuPrompt(), '123');
    }
}
