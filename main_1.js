var User = /** @class */ (function () {
    function User(name, age) {
        this._name = name;
        this._age = age;
    }
    User.prototype.greeting = function () {
        return "hello my name is " + this._name;
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 0) {
                this._age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
function foo(a) {
    console.log(a);
}
var user = new User('Alex', 33);
user.name = 'Zac';
user.age = 23;
console.log(user.age);
foo(user);
function bar(b) {
}
bar({ name: 'Dima', age: 23 });
bar({
    name: 'Jim', age: 26, greeting: function (a) {
        return 'hello';
    }
});
var UserX = /** @class */ (function () {
    function UserX() {
    }
    return UserX;
}());
var userX = new UserX();
var iUsers = [
    userX,
    {
        name: 'Jane', age: 24, greeting: function (a) {
            return 'hello';
        }
    }
];
bar(new UserX());
function foobar(user) {
    user.greeting();
}
var user1 = new User('Kim', 25);
foobar(user1);
