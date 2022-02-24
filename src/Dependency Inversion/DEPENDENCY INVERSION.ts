/**

D - DIP - Dependency Inversion Principle

*/


interface MailerInterface
{
     send() : any;
}

class SmtpMailer implements MailerInterface
{
    public send() : any {
        //
    }
}

class SendGridMailer implements MailerInterface
{
    public send() : any {
        //
    }
}

class SendWelcomeMessage 
{
    public mailer : any

    constructor(MailerInterface : any) {
        this.mailer = MailerInterface
    }
}