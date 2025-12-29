/**
 * Client Controller - Improved with Error Handling
 * Handle client/user related operations
 */
import type { Client } from "../../generated/prisma/client.js";
import { UserRole, type UserPosition } from "../../generated/prisma/client.js";
import type { PaginatedResponse } from "../../types/dto.mjs";
/**
 * Get all customers with pagination
 */
export declare const getAllCustomers: (page: number, size: number) => Promise<PaginatedResponse<Partial<Client>>>;
/**
 * Get all staff members with pagination
 */
export declare const getAllStaff: (page: number, size: number) => Promise<PaginatedResponse<Partial<Client>>>;
/**
 * Get client by ID
 */
export declare const getById: (id: number) => Promise<Partial<Client>>;
/**
 * Create a new client
 */
export declare const create: (data: {
    Name: string;
    Username: string;
    Password: string;
    Phone: string;
    Email?: string;
    Address?: string;
    Role?: UserRole;
    Position?: UserPosition;
}) => Promise<string>;
/**
 * Search client by phone
 */
export declare const searchByPhone: (phone: string) => Promise<Partial<Client> | null>;
/**
 * Check if username is available
 */
export declare const checkUsername: (username: string) => Promise<"available" | "taken">;
/**
 * Check if phone is available
 */
export declare const checkPhone: (phone: string) => Promise<"available" | "taken">;
/**
 * Update client
 */
export declare const update: (id: number, data: Partial<Client>) => Promise<string>;
/**
 * Soft delete client
 */
export declare const deleteClient: (id: number) => Promise<string>;
//# sourceMappingURL=client.refactor.d.mts.map