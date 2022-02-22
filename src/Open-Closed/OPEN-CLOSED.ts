/**

O - OCP - OPEN/CLOSED Principle

*/


interface PaymentInterface
{
     acceptPayment() : any;
}

class BitCoinPaymentMethod implements PaymentInterface
{
    public acceptPayment() : any {
        // logic to accept BitCoin
    }
}

class CreditCardPaymentMethod implements PaymentInterface
{
    public acceptPayment() : any {
        // logic to accept CreditCard
    }
}

class Payment
{
    public begin(PaymentInterface : any) {
        return PaymentInterface.acceptPayment();
    }
}


let payment = new Payment();