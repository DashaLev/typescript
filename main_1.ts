class User {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    greeting(): string {
        return `hello my name is ${this._name}`;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value > 0) {
            this._age = value;
        }
    }
}

function foo(a: User) { // {name:string,age:number}
   console.log(a)
}

let user = new User('Alex', 33);
user.name = 'Zac';
user.age = 23;
console.log(user.age);
foo(user);

interface IUser {
    name: string;
    age: number;

    greeting?(a: string): string;
}

function bar(b: IUser) {

}


bar({name: 'Dima', age: 23})
bar({
    name: 'Jim', age: 26, greeting: (a: string): string => {
        return 'hello';
    }
});


class UserX implements IUser {
    ownProp1: string;
    ownProp2: string[];
    age: number;
    name: string;
}

let userX = new UserX();
let iUsers: IUser[] = [
    userX,
    {
        name: 'Jane', age: 24, greeting: (a: string): string => {
            return 'hello';
        }
    }
]

bar(new UserX());

function foobar(user: User) {
    user.greeting();
}

let user1 = new User('Kim', 25);
foobar(user1);