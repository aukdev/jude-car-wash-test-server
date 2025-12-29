/**
 * Validation Schemas using Zod
 * Define request validation schemas
 */
import { z } from "zod";
// ============ LOGIN ============
export const loginSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters").max(50),
    password: z
        .string()
        .min(4, "Password must be at least 4 characters")
        .max(16, "Password can't exceed 16 characters"),
});
// ============ CLIENT ============
export const createClientSchema = z.object({
    Name: z.string().min(1, "Name is required").max(150),
    Username: z.string().min(3, "Username must be at least 3 characters").max(50),
    Password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(255),
    Phone: z
        .string()
        .regex(/^\+?[\d\s\-()]+$/, "Invalid phone number")
        .max(20),
    Email: z.string().email("Invalid email address").optional(),
    Address: z.string().max(255).optional(),
});
export const updateClientSchema = z.object({
    Name: z.string().min(1).max(150).optional(),
    Email: z.string().email().optional(),
    Phone: z
        .string()
        .regex(/^\+?[\d\s\-()]+$/)
        .max(20)
        .optional(),
    Address: z.string().max(255).optional(),
    Password: z.string().min(8).max(255).optional(),
});
// ============ BOOKING ============
export const createBookingSchema = z.object({
    ClientId: z.number().int().positive("Invalid client ID"),
    ServiceId: z.number().int().positive("Invalid service ID"),
    Date: z
        .string()
        .or(z.date())
        .refine((date) => {
        const d = new Date(date);
        return !isNaN(d.getTime()) && d > new Date();
    }, "Booking date must be in the future"),
    StartTime: z.string().optional(),
    EndTime: z.string().optional(),
    Address: z.string().min(1).max(255, "Address is required"),
    Contact: z.string().max(20, "Invalid contact"),
    BookingPrice: z.number().positive("Booking price must be positive"),
    NumberOfCars: z.number().int().positive().optional(),
    ServiceType: z.string().min(1).max(255),
    ServiceDetails: z.string().min(1).max(1000),
    TeamId: z.number().int().positive().optional(),
});
// ============ PAGINATION ============
export const paginationSchema = z.object({
    page: z
        .string()
        .or(z.number())
        .default("1")
        .transform(Number)
        .refine((n) => n >= 1, {
        message: "Page must be >= 1",
    }),
    size: z
        .string()
        .or(z.number())
        .default("10")
        .transform(Number)
        .refine((n) => n >= 1 && n <= 100, {
        message: "Size must be between 1 and 100",
    }),
});
// ============ VALIDATION HELPER ============
export const validateRequest = async (schema, data) => {
    try {
        const result = schema.parse(data);
        return { success: true, data: result };
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            const message = error.errors
                .map((e) => `${e.path.join(".")}: ${e.message}`)
                .join(", ");
            return { success: false, error: message };
        }
        return { success: false, error: "Validation failed" };
    }
};
//# sourceMappingURL=schemas.js.map