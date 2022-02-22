/**

L - LCP - LISKOV SUBSTITUTION Principle

*/


interface CarInterface
{
     drive() : string;
}

class Car implements CarInterface
{
    public drive() : string {
        return "Please drive safely";
    }
}

class Bmw extends Car
{
    public drive() : string {
        return "Please drive safely with Bmw";
    }
}

const car = new Car();
const bmw = new Bmw();
