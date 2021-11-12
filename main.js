// 1) создать интерфейс на основе user и протипизировать функции:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = {
    name: 'Max',
    age: 18,
    gender: 'male'
};
// function sum(a,b){
//     return a+b
// }
function sum(a, b) {
    return a + b;
}
// function showSum(a,b){
//     console.log(a + b);
// }
function showSum(a, b) {
    console.log(a + b);
}
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
var Cat = /** @class */ (function () {
    function Cat(moving, talking) {
        this.moving = moving;
        this.talking = talking;
    }
    Cat.prototype.getInfo = function () {
        return "This animal can " + this.moving + " and says " + this.talking;
    };
    ;
    return Cat;
}());
console.log(new Cat('run', 'may').getInfo());
var Bird = /** @class */ (function () {
    function Bird(moving, talking) {
        this.moving = moving;
        this.talking = talking;
    }
    Bird.prototype.getInfo = function () {
        return "This animal can " + this.moving + " and says " + this.talking;
    };
    ;
    return Bird;
}());
console.log(new Bird('fly', 'chirp').getInfo());
var Fish = /** @class */ (function () {
    function Fish(moving) {
        this.moving = moving;
    }
    Fish.prototype.getInfo = function () {
        return "This animal can " + this.moving;
    };
    ;
    return Fish;
}());
console.log(new Fish('swim').getInfo());
// *** 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c, r) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        _this.r = r;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    Triangle.prototype.area = function () {
        return this.a * this.b * this.c / 4 * this.r;
    };
    return Triangle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return this.a * 2 + this.b * 2;
    };
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    return Rectangle;
}(Shape));
var triangle1 = new Triangle(5, 10, 15, 10);
var triangle2 = new Triangle(15, 25, 15, 20);
var triangle3 = new Triangle(20, 10, 5, 15);
var rectangle1 = new Rectangle(5, 20);
var rectangle2 = new Rectangle(15, 25);
var rectangle3 = new Rectangle(20, 35);
var arr = [
    triangle1,
    triangle2,
    triangle3,
    rectangle1,
    rectangle2,
    rectangle3
];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log('Area =', item.area(), 'Perimeter =', item.perimeter());
}
