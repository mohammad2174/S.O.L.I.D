/**

S - SRP - Single Responsibility Principle

*/


class User 
{
    constructor(public logger : any) {
        this.logger = logger
    }

    public UserParseJson(data : String[]) {
        try {
            return data
        } catch (error) {
            return this.logger.log(error)
        }
    }
}


class Logger
{
    public log(message : String) {
        return message
    }
}


let logger = new Logger();
let user = new User(logger);
