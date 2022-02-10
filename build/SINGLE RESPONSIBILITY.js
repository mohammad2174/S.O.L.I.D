"use strict";
/**

S - SRP - Single Responsibility Principle

*/
class User {
    constructor(logger) {
        this.logger = logger;
        this.logger = logger;
    }
    UserParseJson(data) {
        try {
            return data;
        }
        catch (error) {
            return this.logger.log(error);
        }
    }
}
class Logger {
    log(message) {
        return message;
    }
}
let logger = new Logger();
let user = new User(logger);
