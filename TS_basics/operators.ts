interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person  //  'name' | 'age'
let key: PersonKeys = 'name';
key = 'age';
// key = 'id';  // not valid

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>  // остается только 'name' | 'email'
// сделает тоже самое
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>  // остается только 'name' | 'email'

let user1: UserKeysNoMeta1 = 'name';
// user1 = '_id';  // not valid! 'name' | 'email' - ONLY
