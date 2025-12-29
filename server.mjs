import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { log } from "node:console";
import { join } from "node:path";
import { PORT } from "./const/http-server-config.mjs";
import router from "./routes/index.mjs";
import { errorHandler, requestLogger, notFoundHandler, } from "./middleware/error-handler.mjs";
import { logger } from "./utils/logger.mjs";
import { cwd } from "node:process";
export const __dirname = import.meta.dirname;
export const __filename = import.meta.filename;
const httpServer = express();
// ============ SECURITY MIDDLEWARE ============
httpServer.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
})); // Security headers
httpServer.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") || [
        "http://localhost:3000",
        "http://localhost:5173",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
}));
// Rate limiting for login endpoint
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // Max 5 attempts per IP
    message: "Too many login attempts, please try again later",
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => process.env.NODE_ENV === "development",
});
// General rate limiter
const generalLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 1000, // Max 100 requests per hour
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => process.env.NODE_ENV === "development",
});
httpServer.use(generalLimiter);
httpServer.use("/api/v1/auth/login", loginLimiter);
// ============ BODY PARSING MIDDLEWARE ============
httpServer.use(express.json());
httpServer.use(express.urlencoded({ limit: "10mb", extended: true }));
// ============ LOGGING MIDDLEWARE ============
httpServer.use(requestLogger);
// ============ ROUTES ============
httpServer.use("/api/v1/", router);
httpServer.use("/data/", express.static(join(cwd(), "src", "public")));
// ============ ERROR HANDLERS ============
httpServer.use(notFoundHandler);
httpServer.use(errorHandler);
// Start server
httpServer.listen(PORT, () => {
    log(`✅ Server is running on port ${PORT}`);
    logger.info(`Server started on port ${PORT}`, {
        environment: process.env.NODE_ENV,
    });
});
//# sourceMappingURL=server.mjs.map