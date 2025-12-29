/**
 * Simple Logger Utility
 * Logs errors, warnings, and info with timestamps
 */
export declare enum LogLevel {
    ERROR = "ERROR",
    WARN = "WARN",
    INFO = "INFO",
    DEBUG = "DEBUG"
}
declare class Logger {
    private isDevelopment;
    private log;
    error(message: string, error?: Error | string, data?: Record<string, any>): void;
    warn(message: string, data?: Record<string, any>): void;
    info(message: string, data?: Record<string, any>): void;
    debug(message: string, data?: Record<string, any>): void;
}
export declare const logger: Logger;
export {};
//# sourceMappingURL=logger.d.mts.map