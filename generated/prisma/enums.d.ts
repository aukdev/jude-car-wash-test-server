export declare const UserRole: {
    readonly Admin: "Admin";
    readonly User: "User";
    readonly Team: "Team";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserPosition: {
    readonly Client: "Client";
    readonly Team_Member: "Team_Member";
    readonly Team_Leader: "Team_Leader";
    readonly Admin: "Admin";
};
export type UserPosition = (typeof UserPosition)[keyof typeof UserPosition];
export declare const OrderStatus: {
    readonly pendding: "pendding";
    readonly cancel: "cancel";
    readonly accept: "accept";
    readonly completed: "completed";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const AdvanceStatus: {
    readonly pendding: "pendding";
    readonly rejected: "rejected";
    readonly accept: "accept";
    readonly completed: "completed";
};
export type AdvanceStatus = (typeof AdvanceStatus)[keyof typeof AdvanceStatus];
//# sourceMappingURL=enums.d.ts.map