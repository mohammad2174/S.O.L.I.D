/**

I - ISP - INTERFACE SEGREGATION Principle

*/


interface BirdInterface
{
     fly() : any;
}

interface WalkInterface
{
     walk() : any;
}

class Parrot implements BirdInterface, WalkInterface
{
    public fly() : any {
        //
    }

    public walk() : any {
        //
    }
}

class Penguin implements WalkInterface
{
    public walk() : any {
        //
    }
}