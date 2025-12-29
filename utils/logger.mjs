/**
 * Simple Logger Utility
 * Logs errors, warnings, and info with timestamps
 */
export var LogLevel;
(function (LogLevel) {
    LogLevel["ERROR"] = "ERROR";
    LogLevel["WARN"] = "WARN";
    LogLevel["INFO"] = "INFO";
    LogLevel["DEBUG"] = "DEBUG";
})(LogLevel || (LogLevel = {}));
const formatLog = (context) => {
    const { timestamp, level, message, error, data, stack } = context;
    const timestamp_str = `[${timestamp}]`;
    const level_str = `[${level}]`;
    const msg = message;
    const errorMsg = error instanceof Error ? error.message : error;
    const dataStr = data ? ` | Data: ${JSON.stringify(data)}` : "";
    const stackStr = stack ? `\nStack: ${stack}` : "";
    return `${timestamp_str} ${level_str} ${msg}${errorMsg ? ` | Error: ${errorMsg}` : ""}${dataStr}${stackStr}`;
};
class Logger {
    isDevelopment = process.env.NODE_ENV !== "production";
    log(level, message, error, data) {
        const context = {
            timestamp: new Date().toISOString(),
            level,
            message,
            error,
            data,
            stack: error instanceof Error ? error.stack : undefined,
        };
        const formatted = formatLog(context);
        if (this.isDevelopment) {
            console.log(formatted);
        }
        else {
            // In production, send to external logging service
            // Example: sendToSentryOrDataDog(context);
            console.log(formatted);
        }
    }
    error(message, error, data) {
        this.log(LogLevel.ERROR, message, error, data);
    }
    warn(message, data) {
        this.log(LogLevel.WARN, message, undefined, data);
    }
    info(message, data) {
        this.log(LogLevel.INFO, message, undefined, data);
    }
    debug(message, data) {
        if (this.isDevelopment) {
            this.log(LogLevel.DEBUG, message, undefined, data);
        }
    }
}
export const logger = new Logger();
//# sourceMappingURL=logger.mjs.map