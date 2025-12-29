/**
 * Validation Schemas using Zod
 * Define request validation schemas
 */
import { z } from "zod";
export declare const loginSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    username: string;
}, {
    password: string;
    username: string;
}>;
export type LoginInput = z.infer<typeof loginSchema>;
export declare const createClientSchema: z.ZodObject<{
    Name: z.ZodString;
    Username: z.ZodString;
    Password: z.ZodString;
    Phone: z.ZodString;
    Email: z.ZodOptional<z.ZodString>;
    Address: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    Name: string;
    Username: string;
    Password: string;
    Phone: string;
    Email?: string | undefined;
    Address?: string | undefined;
}, {
    Name: string;
    Username: string;
    Password: string;
    Phone: string;
    Email?: string | undefined;
    Address?: string | undefined;
}>;
export type CreateClientInput = z.infer<typeof createClientSchema>;
export declare const updateClientSchema: z.ZodObject<{
    Name: z.ZodOptional<z.ZodString>;
    Email: z.ZodOptional<z.ZodString>;
    Phone: z.ZodOptional<z.ZodString>;
    Address: z.ZodOptional<z.ZodString>;
    Password: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    Name?: string | undefined;
    Password?: string | undefined;
    Phone?: string | undefined;
    Email?: string | undefined;
    Address?: string | undefined;
}, {
    Name?: string | undefined;
    Password?: string | undefined;
    Phone?: string | undefined;
    Email?: string | undefined;
    Address?: string | undefined;
}>;
export type UpdateClientInput = z.infer<typeof updateClientSchema>;
export declare const createBookingSchema: z.ZodObject<{
    ClientId: z.ZodNumber;
    ServiceId: z.ZodNumber;
    Date: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string | Date, string | Date>;
    StartTime: z.ZodOptional<z.ZodString>;
    EndTime: z.ZodOptional<z.ZodString>;
    Address: z.ZodString;
    Contact: z.ZodString;
    BookingPrice: z.ZodNumber;
    NumberOfCars: z.ZodOptional<z.ZodNumber>;
    ServiceType: z.ZodString;
    ServiceDetails: z.ZodString;
    TeamId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    Address: string;
    ClientId: number;
    ServiceId: number;
    Date: string | Date;
    Contact: string;
    BookingPrice: number;
    ServiceType: string;
    ServiceDetails: string;
    StartTime?: string | undefined;
    EndTime?: string | undefined;
    NumberOfCars?: number | undefined;
    TeamId?: number | undefined;
}, {
    Address: string;
    ClientId: number;
    ServiceId: number;
    Date: string | Date;
    Contact: string;
    BookingPrice: number;
    ServiceType: string;
    ServiceDetails: string;
    StartTime?: string | undefined;
    EndTime?: string | undefined;
    NumberOfCars?: number | undefined;
    TeamId?: number | undefined;
}>;
export type CreateBookingInput = z.infer<typeof createBookingSchema>;
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, number, string | number | undefined>, number, string | number | undefined>;
    size: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, number, string | number | undefined>, number, string | number | undefined>;
}, "strip", z.ZodTypeAny, {
    page: number;
    size: number;
}, {
    page?: string | number | undefined;
    size?: string | number | undefined;
}>;
export type PaginationInput = z.infer<typeof paginationSchema>;
export declare const validateRequest: <T>(schema: z.ZodSchema<T>, data: unknown) => Promise<{
    success: boolean;
    data?: T;
    error?: string;
}>;
//# sourceMappingURL=schemas.d.mts.map