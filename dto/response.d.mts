import type { HttpStatus } from "../const/http-server-config.mjs";
export interface ClientResponse<T = unknown> {
    message: string;
    status: HttpStatus;
    data?: T | undefined;
    error?: string | undefined;
}
export declare const clientResponse: <T = unknown>(message: string, status: HttpStatus, data?: T, error?: string) => ClientResponse<T>;
export declare const RESPONSE: {
    readonly SUCCESS: "SUCCESS";
    readonly ERROR: "ERROR";
};
export type ResponseType = (typeof RESPONSE)[keyof typeof RESPONSE];
//# sourceMappingURL=response.d.mts.map