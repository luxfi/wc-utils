import { IJsonRpcResponseSuccess, IJsonRpcResponseError, IJsonRpcErrorMessage } from "@luxwallet/wc-types";
export declare function promisify(originalFn: (...args: any[]) => void, thisArg?: any): (...callArgs: any[]) => Promise<IJsonRpcResponseSuccess | IJsonRpcResponseError>;
export declare function formatRpcError(error: Partial<IJsonRpcErrorMessage>): {
    code: number;
    message: string;
    data?: string;
};
//# sourceMappingURL=payload.d.ts.map