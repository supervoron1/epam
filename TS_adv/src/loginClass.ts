import {Menu} from "../dist/menuClass.js";

export class Login extends Menu {
    alert() {
        return alert('Введите логин в формате login@mail.com');
    }

    action() {
        super.getData();
        return prompt(this.menuPrompt(), 'mad_dog@aol.com');
    }
}
