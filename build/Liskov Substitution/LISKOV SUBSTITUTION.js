"use strict";
/**

L - LCP - LISKOV SUBSTITUTION Principle

*/
class Car {
    drive() {
        return "Please drive safely";
    }
}
class Bmw extends Car {
    drive() {
        return "Please drive safely with Bmw";
    }
}
const car = new Car();
const bmw = new Bmw();
