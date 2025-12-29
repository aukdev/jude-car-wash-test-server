/**
 * Express Middleware Functions
 */
import { type Request, type Response, type NextFunction } from "express";
/**
 * Error Handling Middleware
 * Must be registered LAST in middleware chain
 */
export declare const errorHandler: (err: unknown, _req: Request, res: Response, _next: NextFunction) => Response<any, Record<string, any>> | undefined;
/**
 * Request Logging Middleware
 */
export declare const requestLogger: (req: Request, _res: Response, next: NextFunction) => void;
/**
 * Not Found Middleware
 */
export declare const notFoundHandler: (_req: Request, res: Response) => void;
//# sourceMappingURL=error-handler.d.mts.map