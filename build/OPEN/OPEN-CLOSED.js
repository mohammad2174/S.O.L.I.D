"use strict";
/**

O - OCP - OPEN/CLOSED Principle

*/
class BitCoinPaymentMethod {
    acceptPayment() {
        // logic to accept BitCoin
    }
}
class CreditCardPaymentMethod {
    acceptPayment() {
        // logic to accept CreditCard
    }
}
class Payment {
    begin(PaymentInterface) {
        return PaymentInterface.acceptPayment();
    }
}
let payment = new Payment();
