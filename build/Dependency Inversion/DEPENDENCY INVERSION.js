"use strict";
/**

D - DIP - Dependency Inversion Principle

*/
class SmtpMailer {
    send() {
        //
    }
}
class SendGridMailer {
    send() {
        //
    }
}
class SendWelcomeMessage {
    constructor(MailerInterface) {
        this.mailer = MailerInterface;
    }
}
