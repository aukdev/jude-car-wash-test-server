export declare const PORT: number;
export declare const HTTPSTATUS: {
    readonly OK: 200;
    readonly CREATED: 201;
    readonly SERVER_ERROR: 500;
    readonly NOT_FOUND: 404;
    readonly BAD_REQUEST: 400;
    readonly UNAUTHORIZED: 401;
};
export declare const HTTPSTATUS_MSG: {
    readonly OK: "success";
    readonly CREATED: "created";
    readonly SERVER_ERROR: "internal server error";
    readonly NOT_FOUND: "data not found";
    readonly BAD_REQUEST: "bad request";
    readonly UNAUTHORIZED: "you have no permission to access";
    readonly DATA_ALREADY_EXIST: "data already exist in DB";
};
export type HttpStatus = (typeof HTTPSTATUS)[keyof typeof HTTPSTATUS];
export type HttpStatusMsg = (typeof HTTPSTATUS_MSG)[keyof typeof HTTPSTATUS_MSG];
//# sourceMappingURL=http-server-config.d.mts.map