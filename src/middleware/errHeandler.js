import winston from "winston";
import path from 'path'

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({timestamp, level, message}) => {
            return `${timestamp} - ${level.toUpperCase()}: ${message}`
        })
    ),
    transports: [new winston.transports.File({ filename: path.join(process.cwd(), 'src', 'logs', 'error.log')})]
})


const errorHandler = (error, req, res, next) => {
    const status = error.status || 500

    if (status === 500) logger.error(`${error.message || "Internal server error"} - ${error.stack || ""}`)

    return res.status(status).json({message: error.message || "Internal server error"

    })
}

export default errorHandler