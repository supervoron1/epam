let int: number = 25;
const arr: number[] = [1, 1, 2, 3, 5, 8];
const contact: [string, number] = ['Dmitriy', 1234567];
// ==== any
let qwe: any = 124;
qwe = 'New string';

// ===== void
function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('Rottenberg');

// ===== never
function throwError(message: string): never {
    throw new Error(message)
}

function infinity(): never {
    while (true) {
        /////  some code
    }
}

// ===== Type
type Login = string
const login: Login = 'admin';
// =====
type ID = string | number
const id1: ID = 1234;
const id2: ID = '1234';

// ==== NULL & undefined
type SomeType = string | null | undefined
