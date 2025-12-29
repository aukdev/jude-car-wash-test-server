import type { Client } from "../generated/prisma/client.js";
import type { LoginResponse } from "../types/dto.mjs";
/**
 * Login user with username and password
 */
export declare const login: (username: string, password: string) => Promise<LoginResponse>;
/**
 * Create a new user (for registration)
 */
export declare const createUser: (userData: {
    Name: string;
    Username: string;
    Password: string;
    Phone: string;
    Email?: string;
    Address?: string;
}) => Promise<Omit<Client, "Password">>;
//# sourceMappingURL=auth.d.mts.map