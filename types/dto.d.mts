/**
 * Type Definitions for DTOs and API Contracts
 */
import type { UserRole, UserPosition } from "../generated/prisma/client.js";
export interface PaginationRequest {
    page: string | number;
    size: string | number;
}
export interface LoginRequest {
    username: string;
    password: string;
}
export interface CreateClientRequest {
    Name: string;
    Username: string;
    Password: string;
    Phone: string;
    Email?: string;
    Address?: string;
    Position?: UserPosition;
    Role?: UserRole;
}
export interface UpdateClientRequest {
    Name?: string;
    Email?: string;
    Phone?: string;
    Address?: string;
    Password?: string;
}
export interface CreateBookingRequest {
    ClientId: number;
    ServiceId: number;
    Date: string | Date;
    StartTime?: string;
    EndTime?: string;
    Address: string;
    Contact: string;
    BookingPrice: number;
    NumberOfCars?: number;
    ServiceType: string;
    ServiceDetails: string;
    TeamId?: number;
}
export interface UpdateBookingRequest {
    StartTime?: string;
    EndTime?: string;
    Address?: string;
    Contact?: string;
    BookingPrice?: number;
    NumberOfCars?: number;
    ServiceType?: string;
    ServiceDetails?: string;
    BookingStatus?: string;
}
export interface LoginResponse {
    id: number;
    Name: string;
    Username: string;
    Email?: string;
    Phone: string;
    Role: UserRole;
    Team?: Array<{
        id: number;
        TeamName: string;
    }>;
}
export interface ClientResponse {
    id: number;
    Name: string;
    Username: string;
    Email?: string;
    Phone: string;
    Address?: string;
    Role: UserRole;
    Position: UserPosition;
    createdAt: Date;
    updatedAt: Date;
}
export interface PaginatedResponse<T> {
    data: T[];
    count: number;
    page: number;
    pageSize: number;
    totalPages: number;
}
export interface PaginationParams {
    page: number;
    size: number;
    offset: number;
}
export declare const parsePaginationParams: (page: string | number | undefined, size: string | number | undefined) => PaginationParams;
export declare const calculateTotalPages: (count: number, pageSize: number) => number;
//# sourceMappingURL=dto.d.mts.map