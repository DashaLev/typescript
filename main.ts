// 1) создать интерфейс на основе user и протипизировать функции:

const user = {
    name: 'Max',
    age: 18,
    gender:'male'
}

interface IUser {
    name: string;
    age: number;
    gender: string
}

// function sum(a,b){
//     return a+b
// }

function sum(a:number, b:number):number {
    return a+b
}

// function showSum(a,b){
//     console.log(a + b);
// }

function showSum(a:number, b:number):void {
    console.log(a + b);
}

// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }

function incAge(someUser:IUser, inc:number):IUser {
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)

// 2)написать интерфейс Animal который описывает:
// -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию

interface IAnimal {
    moving: string;
    talking?: string;
    getInfo():string
}

class Cat implements IAnimal {
    moving: string;
    talking: string;

    constructor(moving: string, talking: string) {
        this.moving =  moving;
        this.talking =  talking;
    }

    getInfo(): string  {
        return `This animal can ${this.moving} and says ${this.talking}`
    };
}

console.log(new Cat('run', 'may').getInfo())

class Bird implements IAnimal {
    moving: string;
    talking: string;

    constructor(moving: string, talking: string) {
        this.moving =  moving;
        this.talking =  talking;
    }

    getInfo(): string  {
        return `This animal can ${this.moving} and says ${this.talking}`
    };
}

console.log(new Bird('fly', 'chirp').getInfo())

class Fish implements IAnimal {
    moving: string;
    talking: string;

    constructor(moving: string) {
        this.moving =  moving;
    }

    getInfo(): string  {
        return `This animal can ${this.moving}`
    };
}

console.log(new Fish('swim').getInfo())

// *** 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

abstract class Shape {
    abstract perimeter():number;
    abstract area():number;
}

class Triangle extends Shape {

    constructor(public a: number, public b: number, public c: number, public r: number){
        super()
    }

    perimeter(): number {
        return this.a + this.b + this.c
    }

    area(): number {
        return  this.a *  this.b *  this.c / 4 *  this.r
    }
}

class Rectangle extends Shape {

    constructor(public a: number, public b: number){
        super();
    }

    perimeter(): number {
        return this.a * 2 + this.b * 2
    }

    area(): number {
        return this.a * this.b
    }
}

let triangle1: Shape = new Triangle(5, 10,15, 10);
let triangle2: Shape = new Triangle(15, 25,15, 20);
let triangle3: Shape = new Triangle(20, 10,5, 15);

let rectangle1: Shape = new Rectangle(5, 20);
let rectangle2: Shape = new Rectangle(15, 25);
let rectangle3: Shape = new Rectangle(20, 35);


let arr: Shape[] = [
    triangle1,
    triangle2,
    triangle3,
    rectangle1,
    rectangle2,
    rectangle3
]

for (const item of arr) {
    console.log('Area =', item.area(), 'Perimeter =', item.perimeter())
}
