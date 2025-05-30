export class CustomError extends Error {
    constructor(status = 400, message = 'Bad request !'){
        super(message)
        this.status = status
        this.message = message
    }
} 